import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name too long'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
  },
  subject: {
    type: String,
    trim: true,
    maxlength: [200, 'Subject too long'],
    default: 'No subject',
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [2000, 'Message too long'],
  },
  read: {
    type: Boolean,
    default: false,
  },
  ip: String,
}, { timestamps: true })

export default mongoose.model('Contact', contactSchema)
