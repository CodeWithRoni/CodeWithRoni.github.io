# Roni — Portfolio Website

React (Vite) দিয়ে বানানো পোর্টফোলিও সাইট — **Modern Dark Purple** থিম।
হোস্টিং: GitHub Pages (সম্পূর্ণ ফ্রি)। লাইভ লিংক: https://codewithroni.github.io/

## ✏️ নিজের তথ্য বদলানো

শুধু একটা ফাইল এডিট করলেই হবে: `src/data/portfolio.js`
- নাম, টাইটেল, ইমেইল, Facebook / LinkedIn / WhatsApp লিংক
- প্রজেক্টের বর্ণনা, স্কিল — সব ওখানেই আছে

ছবি ব্যবহার করতে চাইলে: ছবিটা `public/profile.jpg` নামে রেখে আমাকে বললেই Hero সেকশনে বসিয়ে দেওয়া যাবে।

## 🚀 GitHub-এ লাইভ করার ধাপ (একবারই করতে হবে)

1. GitHub-এ গিয়ে নতুন রিপো বানাও, নাম দাও ঠিক এটা: **CodeWithRoni.github.io**
   (Public রাখবে, README/Gitignore কিছু যোগ করবে না — খালি রিপো)
2. এই ফোল্ডারের সব ফাইল ওই রিপোতে আপলোড/পুশ করো:
   ```bash
   git init
   git add .
   git commit -m "My portfolio website"
   git branch -M main
   git remote add origin https://github.com/CodeWithRoni/CodeWithRoni.github.io.git
   git push -u origin main
   ```
3. রিপোর **Settings → Pages**-এ যাও → Source হিসাবে **GitHub Actions** সিলেক্ট করো।
4. ২-৩ মিনিট অপেক্ষা করো — Actions ট্যাবে সবুজ ✓ এলেই সাইট লাইভ:
   👉 https://codewithroni.github.io/

এরপর থেকে যতবার `main` ব্রাঞ্চে পুশ করবে, সাইট নিজে নিজে আপডেট হয়ে যাবে।

## 💻 নিজের কম্পিউটারে চালানো

```bash
npm install
npm run dev      # লোকাল প্রিভিউ
npm run build    # প্রোডাকশন বিল্ড (dist ফোল্ডারে)
```

## ⚠️ রিপোর নাম বদলালে

রিপোর নাম `CodeWithRoni.github.io` না হয়ে অন্য কিছু (যেমন `portfolio`) হলে:
- `vite.config.js`-এ `base: '/portfolio/'` করে দিতে হবে
- লিংক হবে https://codewithroni.github.io/portfolio/
