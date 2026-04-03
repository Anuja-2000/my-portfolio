# ✉️ Email Integration - Quick Setup Checklist

Your contact form now has email functionality! Follow this checklist to enable it.

---

## 🚀 Quick Setup (5 minutes)

### 1️⃣ **Enable Gmail 2FA** (if not already enabled)
- [ ] Go to [myaccount.google.com/security](https://myaccount.google.com/security)
- [ ] Enable "2-Step Verification"

### 2️⃣ **Create Gmail App Password**
- [ ] Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
- [ ] Select "Mail" and "Windows Computer"
- [ ] Copy the 16-character password

### 3️⃣ **Create `.env.local` File**
In your project root (`D:\My Business\My Protfolio\portfolio\`), create `.env.local`:

```env
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=your-16-char-app-password
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Replace:
- `your-email@gmail.com` → Your Gmail address
- `your-16-char-app-password` → From step 2

### 4️⃣ **Test Locally**
```bash
cd "D:\My Business\My Protfolio\portfolio"
npm run dev
```

Visit `http://localhost:3000` → Scroll to Contact → Fill form → Submit

Check your email inbox for:
- **To you**: Contact details from visitor
- **To visitor**: Confirmation email

### 5️⃣ **Deploy to Vercel**
- [ ] Push code to GitHub
- [ ] Go to Vercel dashboard → Your project → Settings
- [ ] Environment Variables → Add:
  - `GMAIL_USER` = your-email@gmail.com
  - `GMAIL_PASS` = your-16-char-app-password
  - `NEXT_PUBLIC_SITE_URL` = https://your-vercel-domain.vercel.app
- [ ] Redeploy project
- [ ] Test on live site

---

## 📧 **What Happens When Contact Form Is Submitted**

### **Email #1: To You (Portfolio Owner)**
- Subject: `New Portfolio Contact: [Visitor Name]`
- Contains: Name, Email, Message
- Reply-To: Visitor's email (click reply to contact them)

### **Email #2: To Visitor**
- Subject: `We received your message`
- Confirms their message was received
- Shows their submitted message

---

## 🔧 **Implementation Details**

### **Files Created/Modified:**

| File | Change |
|------|--------|
| `src/app/api/send-email/route.ts` | ✅ **New** - Email API endpoint |
| `src/components/Contact.tsx` | ✅ **Updated** - Calls API, shows loading/status |
| `.env.local` | ✅ **Create** - Store Gmail credentials |
| `.env.local.example` | ✅ **New** - Template for `.env.local` |
| `EMAIL_SETUP_GUIDE.md` | ✅ **New** - Detailed setup guide |

### **Features Included:**

✅ **Security**
- App Password (not Gmail password)
- XSS protection (HTML escaping)
- Email validation

✅ **User Experience**
- Loading indicator while sending
- Success/error messages
- Form resets on success
- Disabled inputs during submission

✅ **Email Features**
- HTML formatted emails
- Confirmation to visitor
- Reply-to header set to visitor
- Styled, professional email templates

---

## ❌ **Troubleshooting**

| Issue | Solution |
|-------|----------|
| Form doesn't send | Check `.env.local` exists and has correct credentials |
| "Invalid login credentials" | Regenerate App Password from myaccount.google.com |
| Emails go to spam | Check spam folder, Gmail usually filters them correctly |
| Works locally but fails on Vercel | Verify environment variables in Vercel dashboard |
| Port 587 blocked | Rarely happens, contact ISP if issue persists |

---

## 📝 **Files to Customize**

Update these in `src/components/Contact.tsx`:

```typescript
// Line 48 - Email link
<a href="mailto:anujawij@gmail.com">
  anujawij@gmail.com
</a>

// Line 67-90 - Social media links
<a href="https://github.com/YOUR_USERNAME">GitHub</a>
<a href="https://linkedin.com/in/YOUR_PROFILE">LinkedIn</a>
<a href="https://twitter.com/YOUR_HANDLE">Twitter</a>

// Line 58 - Location
<p>Your City, Country</p>
```

---

## 🎯 **Next Features to Add** (Optional)

- [ ] CAPTCHA verification (prevent spam)
- [ ] Rate limiting (limit submissions per IP)
- [ ] Email confirmation (click link to confirm)
- [ ] Database storage (store submitted messages)
- [ ] Admin dashboard (view all submissions)

---

## 📚 **Need Help?**

See `EMAIL_SETUP_GUIDE.md` for detailed instructions.

**Status**: ✅ Email functionality is **ready to use**!

---

## ✅ **Verification Steps**

After setup, verify everything works:

1. [ ] Dev server runs without errors
2. [ ] Contact form loads with all fields
3. [ ] Submit test message from localhost
4. [ ] Email arrives in your inbox
5. [ ] Confirmation email sent to form email
6. [ ] Deploy to Vercel
7. [ ] Test on live Vercel URL

**You're all set! 🎉**
