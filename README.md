# 🚀 Akram — MERN Stack Portfolio

A production-grade, dark & minimal portfolio built with the MERN stack.

## ✨ Features

- **Animated particle canvas** hero with custom cursor
- **Smooth loading screen** with brand animation
- **5 full sections**: Hero, About, Skills, Projects, Contact
- **Animated skill bars** with scroll-triggered reveals
- **Project cards** with GitHub + live demo links
- **Contact form** with MongoDB storage + optional email notifications
- **Rate limiting, helmet, CORS** — production-ready backend
- **Responsive** on all screen sizes
- **Custom scrollbar, text selection, noise texture**

## 🛠 Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | React 18, Vite, Tailwind CSS, Framer Motion |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Email | Nodemailer |
| Security | Helmet, express-rate-limit, express-validator |

## 🚦 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/akram/portfolio.git
cd akram-portfolio

# Install all dependencies
npm run install:all
```

### 2. Setup environment

```bash
cd server
cp .env.example .env
# Edit .env with your MongoDB URI and SMTP credentials
```

### 3. Run development

```bash
# From root — runs both client + server
npm run dev

# Or separately:
npm run dev:client   # React on http://localhost:5173
npm run dev:server   # Express on http://localhost:5000
```

### 4. Build for production

```bash
npm run build   # Builds React client to client/dist/

# Then serve static files via Express or deploy to Vercel/Render
```

## 📁 Project Structure

```
akram-portfolio/
├── client/                  # React Frontend (Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Cursor.jsx
│   │   │   └── Loader.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   └── package.json
│
├── server/                  # Node.js + Express Backend
│   ├── models/
│   │   └── Contact.js       # MongoDB schema
│   ├── routes/
│   │   └── contact.js       # POST /api/contact
│   ├── .env.example
│   ├── index.js             # Entry point
│   └── package.json
│
└── package.json             # Root monorepo scripts
```

## 🌍 Deployment

**Frontend:** Deploy `client/dist` to Vercel or Netlify  
**Backend:** Deploy server to Render, Railway, or DigitalOcean  
**Database:** MongoDB Atlas (free tier works great)

## 🎨 Customization

- **Colors**: Edit `tailwind.config.js` and `index.css` CSS variables
- **Projects**: Edit the `projects` array in `Projects.jsx`
- **Skills**: Edit `skillGroups` array in `Skills.jsx`
- **Stats**: Edit `stats` array in `About.jsx`

---

Built with ❤️ by **Akram**
