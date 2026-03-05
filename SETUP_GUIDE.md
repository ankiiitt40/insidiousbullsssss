# 🚀 INSIDIOUS BULLS - Installation & Setup Guide

## ✅ What You Got

A complete, production-ready trading education platform with:

✨ **3D Graphics** - Three.js animated trading visualizations  
🎨 **Premium UI** - Glassmorphism design with smooth animations  
📊 **Interactive Charts** - Chart.js candlestick data visualization  
📱 **Responsive Design** - Mobile, tablet, desktop optimized  
⚡ **Fast Performance** - Built with Vite for instant load times  
🎯 **SEO Ready** - Proper structure and meta tags  

---

## 📦 Installation Steps

### Step 1: Extract/Navigate to Project

```bash
cd /path/to/insidious-bulls
```

### Step 2: Install Dependencies

```bash
npm install
```

**If npm install fails:**
```bash
# Clear cache and try again
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### Step 3: Run Development Server

```bash
npm run dev
```

✅ **Site opens automatically at** `http://localhost:5173`

You should see:
- Navbar at top
- Large hero section with 3D graphics
- Smooth animations on scroll
- Interactive components

---

## 🎨 File Structure

```
📦 Project Root
├── 📄 package.json           (Dependencies)
├── 📄 vite.config.js         (Build config)
├── 📄 tailwind.config.js     (Design tokens)
├── 📄 postcss.config.js      (CSS processing)
├── 📄 index.html             (Main HTML)
├── 📄 README.md              (Full docs)
├── 📄 .gitignore             (Git config)
│
└── 📂 src/
    ├── 📄 main.jsx           (React entry)
    ├── 📄 App.jsx            (Main component)
    ├── 📄 index.css          (Global styles)
    │
    ├── 📂 components/
    │   ├── Navbar.jsx
    │   ├── HeroSection.jsx
    │   ├── Trading3D.jsx
    │   ├── StatsSection.jsx
    │   ├── CandleChart.jsx
    │   ├── FeaturesSection.jsx
    │   ├── TestimonialSection.jsx
    │   ├── DemoForm.jsx
    │   ├── ContactSection.jsx
    │   └── Footer.jsx
    │
    └── 📂 pages/
        └── Home.jsx
```

---

## ⚙️ Configuration

### 1️⃣ Customize Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#00ff99',    // Green accent color
  accent: '#22d3ee',     // Cyan accent color
  // Change to your brand colors
}
```

### 2️⃣ Update Contact Information

Edit `src/components/ContactSection.jsx` (lines 28-35):

```javascript
const contacts = [
  {
    value: 'your@email.com',    // Change email
    href: 'mailto:your@email.com',
  },
  {
    value: '+91 YOUR NUMBER',   // Change phone
    href: 'tel:+91XXXXXXXXXX',
  },
  {
    value: 'Your WhatsApp Link',
    href: 'https://wa.me/YOUR_NUMBER',
  },
]
```

### 3️⃣ Update Company Name

Search and replace "INSIDIOUS BULLS" with your brand name in:
- `index.html` (line 5)
- `src/components/Navbar.jsx` (line 38)
- `src/components/Footer.jsx` (line 15)

### 4️⃣ Connect Google Sheets (Optional)

To save demo form submissions to Google Sheets:

**Step A: Create Google Apps Script**
1. Go to [script.google.com](https://script.google.com)
2. Create new project
3. Paste this code:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.openById("YOUR_SHEET_ID");
  const data = JSON.parse(e.postData.contents);
  
  sheet.getActiveSheet().appendRow([
    new Date(),
    data.fullName,
    data.email,
    data.phoneNumber
  ]);
  
  return ContentService.createTextOutput("Success");
}
```

**Step B: Deploy as Web App**
1. Click "Deploy" → "New Deployment"
2. Type: Web app
3. Execute as: Your account
4. Who has access: Anyone
5. Copy the deployment URL

**Step C: Update Form**
Edit `src/components/DemoForm.jsx` (line 24):

```javascript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/d/YOUR_SCRIPT_ID/usercallable'
```

---

## 🚀 Build & Deploy

### Local Preview

```bash
npm run build
npm run preview
```

### Deploy to Vercel (Free)

```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
npm run build
# Then drag 'dist' folder to netlify.com
```

### Deploy to GitHub Pages

```bash
npm run build
# Push 'dist' folder to gh-pages branch
```

---

## 🛠️ Troubleshooting

**Issue: npm install fails**
```bash
rm -rf node_modules package-lock.json yarn.lock
npm cache clean --force
npm install
```

**Issue: Port 5173 already in use**
```bash
npm run dev -- --port 5174
```

**Issue: Styling looks broken**
```bash
# Restart dev server
npm run dev
```

**Issue: 3D graphics not showing**
- Check browser console for errors
- Ensure GPU is enabled in browser
- Try different browser (Chrome recommended)

**Issue: Form not submitting**
- Check browser console for CORS errors
- Verify Google Apps Script endpoint is correct
- Test with different email format

---

## 📊 Customizing Content

### Update Stats

Edit `src/components/StatsSection.jsx` (lines 45-50):

```javascript
const stats = [
  { value: '1200+', label: 'Students' },      // Change these
  { value: '10', label: 'Proven Strategies' },
  // Add more as needed
]
```

### Update Features

Edit `src/components/FeaturesSection.jsx` (lines 43-62):

```javascript
const features = [
  {
    icon: TrendingUp,
    title: 'Your Feature Title',
    description: 'Your feature description',
  },
  // Add more features
]
```

### Update Testimonials

Edit `src/components/TestimonialSection.jsx` (lines 5-40):

```javascript
const testimonials = [
  {
    name: 'Student Name',
    profit: '+250%',
    capital: '$1000 → $3500',
    review: 'Their review...',
    rating: 5,
  },
  // Add more testimonials
]
```

---

## 🎯 Next Steps

1. ✅ Run `npm install`
2. ✅ Run `npm run dev`
3. ✅ Customize colors in `tailwind.config.js`
4. ✅ Update company info in components
5. ✅ (Optional) Connect Google Sheets form
6. ✅ Deploy to web hosting

---

## 📱 Features Summary

| Section | Feature |
|---------|---------|
| **Navbar** | Floating, blurs on scroll |
| **Hero** | 3D trading visualization |
| **Stats** | Key metrics display |
| **Chart** | Interactive candlestick chart |
| **Features** | 5 feature cards grid |
| **Testimonials** | Infinite scroll reviews |
| **Demo Form** | Glass-morphism registration |
| **Contact** | Multiple contact options |
| **Footer** | Links & social media |

---

## 🔐 Security Notes

⚠️ **Before deploying:**
- Don't commit `.env` files with secrets
- Use environment variables for API keys
- Validate all form inputs on backend
- Use HTTPS for deployment
- Add Google Sheets validation

---

## 💬 Support

For issues:
1. Check browser console (F12)
2. Check terminal errors
3. Read this guide again
4. Contact support via the website

---

## 📄 License

All rights reserved © Insidious Bulls 2024

---

## 🎉 You're All Set!

Your premium trading platform is ready. Start customizing and launch to the world! 🚀

Questions? Contact via WhatsApp: https://wa.me/919131749509
