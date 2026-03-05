# 🔧 Quick Fix - npm scripts missing

## Problem
```
npm error Missing script: "dev"
```

## Solution

### Option 1: Clean Install (Recommended)

```bash
# 1. Delete old files
rm -rf node_modules
rm package-lock.json

# 2. Fresh install
npm install

# 3. Run dev server
npm run dev
```

### Option 2: Just Install Dev Dependencies

```bash
npm install --save-dev vite @vitejs/plugin-react tailwindcss postcss autoprefixer

npm run dev
```

### Option 3: One Command

```bash
npm install && npm run dev
```

---

## ✅ This Should Work

After any of above, you should see:

```
VITE v5.0.0  ready in 123 ms

➜  Local:   http://localhost:5173/
➜  press h to show help
```

---

## 🎉 Then Visit

http://localhost:5173

Your site should load! 🚀

---

If still getting errors, try:

```bash
npm cache clean --force
npm install
npm run dev
```

That's it!
