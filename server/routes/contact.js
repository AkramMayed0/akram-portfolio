import express from 'express'
import { body, validationResult } from 'express-validator'
import rateLimit from 'express-rate-limit'
import Contact from '../models/Contact.js'
import nodemailer from 'nodemailer'

const router = express.Router()

// Rate limit: max 5 messages per hour per IP
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: { success: false, message: 'Too many messages. Try again in an hour.' }
})

// Email transporter (optional — works without it)
const createTransporter = () => {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) return null
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

// Validation rules
const validateContact = [
  body('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 100 }),
  body('email').trim().isEmail().withMessage('Valid email required').normalizeEmail(),
  body('subject').optional().trim().isLength({ max: 200 }),
  body('message').trim().notEmpty().withMessage('Message is required').isLength({ max: 2000 }),
]

// POST /api/contact
router.post('/', contactLimiter, validateContact, async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() })
  }

  try {
    const { name, email, subject, message } = req.body

    // Save to MongoDB
    const contact = await Contact.create({
      name, email,
      subject: subject || 'No subject',
      message,
      ip: req.ip,
    })

    // Send email notification (optional)
    const transporter = createTransporter()
    if (transporter) {
      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
        to: process.env.EMAIL_TO || process.env.SMTP_USER,
        subject: `[Portfolio] ${subject || 'New message'} from ${name}`,
        html: `
          <div style="font-family: monospace; background:#080808; color:#e8e8e8; padding:24px; border-left:3px solid #00ff87;">
            <h2 style="color:#00ff87; margin-bottom:16px;">New Contact Message</h2>
            <p><strong>From:</strong> ${name} (${email})</p>
            <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
            <hr style="border-color:#1a1a1a; margin:16px 0;">
            <p style="white-space:pre-wrap;">${message}</p>
          </div>
        `,
      }).catch(err => console.error('Email send error:', err))
    }

    res.status(201).json({
      success: true,
      message: 'Message received! I\'ll get back to you soon.',
      id: contact._id,
    })
  } catch (err) {
    console.error('Contact route error:', err)
    res.status(500).json({ success: false, message: 'Server error. Please try again.' })
  }
})

// GET /api/contact — simple health check (protect this in production)
router.get('/', async (req, res) => {
  try {
    const count = await Contact.countDocuments()
    res.json({ success: true, totalMessages: count })
  } catch (err) {
    res.status(500).json({ success: false })
  }
})

export default router
