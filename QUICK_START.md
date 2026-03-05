# 🚀 QUICK START - 3 COMMANDS TO LAUNCH

## Start Here (Takes 2 minutes)

### 1️⃣ Install Dependencies

```bash
npm install
```

Wait for it to finish (first time only).

### 2️⃣ Start Development Server

```bash
npm run dev
```

Your site automatically opens at `http://localhost:5173`

### 3️⃣ Done! 🎉

You should see:
- Premium dark UI with green accents
- Animated hero section with 3D graphics
- Smooth scroll animations
- Interactive components

---

## 🎯 What to Do Next

### 1. Customize Brand Colors
Open `tailwind.config.js` and change:
```javascript
primary: '#00ff99',    // Your brand green
accent: '#22d3ee',     // Your brand cyan
```

### 2. Update Contact Info
In `src/components/ContactSection.jsx`, change:
- Email
- Phone number
- WhatsApp link

### 3. Change Company Name
Replace "INSIDIOUS BULLS" with your brand name in:
- `src/components/Navbar.jsx` (line 38)
- `src/components/Footer.jsx` (line 15)

### 4. Update Stats
In `src/components/StatsSection.jsx`:
```javascript
const stats = [
  { value: '1200+', label: 'Students' },    // Your numbers
  { value: '10', label: 'Strategies' },
]
```

---

## 🚀 Build for Production

```bash
npm run build
```

Creates `dist/` folder with optimized files.

Preview it:
```bash
npm run preview
```

---

## 📱 Deploy Instantly

### Option 1: Vercel (Easiest - 1 minute)
```bash
npm i -g vercel
vercel
# Follow prompts, done!
```

### Option 2: Netlify
- Drag `dist/` folder to [netlify.com](https://netlify.com)

### Option 3: GitHub Pages
- Push `dist/` to `gh-pages` branch

---

## ⚠️ Common Issues

**Port 5173 in use?**
```bash
npm run dev -- --port 5174
```

**npm install slow?**
```bash
npm install --legacy-peer-deps
```

**Styling broken?**
```bash
npm run dev
# Restart server
```

---

## 📖 Full Documentation

- `README.md` - Complete project docs
- `SETUP_GUIDE.md` - Detailed configuration guide

---

## 🎨 Project Includes

✅ Hero section with 3D graphics  
✅ Performance stats display  
✅ Interactive candlestick chart  
✅ 5 features grid  
✅ Infinite scroll testimonials  
✅ Demo registration form  
✅ Contact section  
✅ Responsive navbar & footer  
✅ Smooth animations  
✅ Premium glass UI  

---

## 💡 Tips

- All animations are smooth and performant
- Mobile responsive out of the box
- SEO friendly structure
- Fast load times with Vite
- Easy to customize components
- No external fonts loading slowly
- Dark theme optimized for eyes

---

**That's it! Your premium trading platform is ready.** 🚀

Next: `npm install` → `npm run dev` → Start customizing!
