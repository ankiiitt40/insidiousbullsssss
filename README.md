# Insidious Bulls - Trading Education Platform

A premium trading education website built with React, Vite, and Tailwind CSS. Features 3D graphics, smooth animations, and professional UI design inspired by Stripe and TradingView.

## 🚀 Quick Start

### Installation

```bash
npm install
npm run dev
```

The site will open automatically at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📋 Tech Stack

- **React 18** - UI Framework
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **GSAP** - Advanced animations
- **Three.js** - 3D graphics
- **Chart.js** - Data visualization
- **Lucide Icons** - Icon library
- **React Router** - Client-side routing

## 📁 Project Structure

```
src/
├── components/
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
├── pages/
│   └── Home.jsx
├── App.jsx
├── main.jsx
└── index.css

```

## 🎨 Design Features

- **Dark Premium UI** with glassmorphism effects
- **Responsive Design** - Mobile, tablet, and desktop optimized
- **Smooth Animations** - Page load, scroll, and hover effects
- **3D Background** - Interactive Three.js trading visualization
- **Custom Gradients** - Primary (#00ff99) and accent (#22d3ee)
- **Glow Effects** - Premium shadow and text glow

## 🔧 Configuration

### Color Theme

Edit in `tailwind.config.js`:
```javascript
colors: {
  primary: '#00ff99',    // Main brand color
  accent: '#22d3ee',     // Secondary accent
}
```

### Google Sheets Integration

To connect the demo form to Google Sheets:

1. Create a Google Apps Script with the following:
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

2. Deploy as web app and copy the URL
3. Replace `GOOGLE_SCRIPT_ENDPOINT` in `DemoForm.jsx`

## 📱 Sections

1. **Navbar** - Floating, responsive navigation
2. **Hero** - Cinematic hero with 3D graphics
3. **Stats** - Key metrics and performance data
4. **Chart** - Interactive candlestick chart
5. **Features** - 5 key features grid
6. **Testimonials** - Infinite scroll student reviews
7. **Demo Form** - Glass-morphism registration form
8. **Contact** - Multiple contact methods
9. **Footer** - Quick links and social media

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages
```bash
npm run build
# Deploy dist/ folder to gh-pages branch
```

## 📧 Contact Integration

The contact information is hardcoded to:
- Email: Shubhsv777@gmail.com
- Phone: +91 9131749509
- WhatsApp: https://wa.me/919131749509
- Instagram: https://www.instagram.com/tradewith_shubham7

To update, edit the respective component files.

## ⚙️ Customization

### Add More Features

1. Create new component in `src/components/`
2. Import in `src/pages/Home.jsx`
3. Add to home page render

### Modify Colors

Update in:
- `tailwind.config.js` - Theme colors
- `src/index.css` - Custom CSS variables

### Add Content

Edit component files directly or use props for dynamic content.

## 🐛 Troubleshooting

**npm install fails:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Port 5173 already in use:**
```bash
npm run dev -- --port 5174
```

**Styling issues:**
```bash
npm run dev
# The Tailwind CSS is built on-the-fly
```

## 📄 License

All rights reserved © Insidious Bulls 2024

## 🤝 Support

For issues or questions, contact via WhatsApp: https://wa.me/919131749509

---

Made with ❤️ by Insidious Bulls Trading Team
# insidiousbullsssss
