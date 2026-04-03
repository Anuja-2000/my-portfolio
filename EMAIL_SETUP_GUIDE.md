# Email Integration Guide - Gmail SMTP

Add email functionality to your contact form using Gmail. This guide covers everything you need.

---

## 📋 **What You Need to Implement**

### 1. **Gmail App Password** (Security)
   - Enable 2-factor authentication on your Gmail account
   - Generate an "App Password" (not your regular Gmail password)
   - This keeps your actual password secure

### 2. **Environment Variables**
   - Store Gmail credentials in `.env.local`
   - Keep sensitive data out of version control
   - Vercel will use these in production

### 3. **Email Library - Nodemailer**
   - Install Nodemailer (`npm install nodemailer`)
   - Handles SMTP connection to Gmail
   - Sends emails on form submission

### 4. **API Route**
   - Create `src/app/api/send-email/route.ts`
   - Receives form data from frontend
   - Connects to Gmail and sends email
   - Returns success/error response

### 5. **Update Contact Form**
   - Modify `src/components/Contact.tsx`
   - Call API endpoint on form submit
   - Show loading state while sending
   - Display success/error messages

---

## 🔧 **Step-by-Step Setup**

### **Step 1: Enable 2FA & Create App Password**

1. Go to [myaccount.google.com/security](https://myaccount.google.com/security)
2. Left sidebar → "How you sign in to Google"
3. Enable "2-Step Verification" (if not already enabled)
4. Back to Security page
5. Scroll down to "App passwords" (appears only after 2FA is enabled)
6. Select "Mail" and "Windows Computer"
7. Google generates a 16-character password → **Copy this!**

### **Step 2: Set Up Environment Variables**

1. Create `.env.local` in project root:
   ```
   GMAIL_USER=your-email@gmail.com
   GMAIL_PASS=your-16-char-app-password
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

2. Replace:
   - `your-email@gmail.com` - Your Gmail address
   - `your-16-char-app-password` - The app password from Step 1

3. Add `.env.local` to `.gitignore` (already done by create-next-app)

### **Step 3: Install Nodemailer**

```bash
cd portfolio
npm install nodemailer
npm install --save-dev @types/nodemailer
```

### **Step 4: Create API Route** *(See code below)*

Create: `src/app/api/send-email/route.ts`

This endpoint:
- Receives POST requests with form data
- Validates the data
- Connects to Gmail via SMTP
- Sends email to your address
- Logs the sender's email (optional reply)

### **Step 5: Update Contact Component** *(See code below)*

Modify: `src/components/Contact.tsx`

Changes:
- Call `/api/send-email` on form submit
- Show loading indicator while sending
- Display success message
- Handle errors gracefully

---

## 💻 **Implementation Details**

### **Email Details:**
- **From**: Gmail account (configured in API)
- **To**: Your email (configured in API)
- **Reply-To**: Visitor's email (from form)
- **Subject**: "New Portfolio Contact: [Visitor Name]"
- **Body**: Formatted HTML email with all form fields

### **Validation:**
- Name, email, message are required
- Email format validation
- XSS protection (sanitized input)

### **Error Handling:**
- Network errors
- Invalid email format
- SMTP connection failures
- Rate limiting (optional)

---

## 🚀 **Production Deployment (Vercel)**

### **Add Secrets to Vercel:**

1. Go to your Vercel project dashboard
2. Settings → Environment Variables
3. Add these variables:
   - Key: `GMAIL_USER` → Value: `your-email@gmail.com`
   - Key: `GMAIL_PASS` → Value: `your-16-char-app-password`
   - Key: `NEXT_PUBLIC_SITE_URL` → Value: `https://your-domain.com`

4. Redeploy your project (Vercel will use new environment variables)

---

## ✅ **Testing Checklist**

- [ ] Gmail 2FA enabled
- [ ] App password created and copied
- [ ] `.env.local` created with correct credentials
- [ ] Nodemailer installed
- [ ] API route created and working
- [ ] Contact form updated with API call
- [ ] Test locally: submit form → check email inbox
- [ ] Verify sender email in reply-to field
- [ ] Test error handling (try invalid email)
- [ ] Secrets added to Vercel
- [ ] Redeployed on Vercel
- [ ] Test on live Vercel URL

---

## 🔒 **Security Notes**

✅ **What's Secure:**
- App password (not your Gmail password)
- Environment variables (not in git)
- Server-side email sending (no credentials exposed to client)
- HTTPS only (Vercel enforces this)

⚠️ **Best Practices:**
- Never commit `.env.local` to git
- Use App Password, not your actual password
- Regenerate app password if compromised
- Consider rate limiting on production
- Add CAPTCHA for spam prevention (future enhancement)

---

## 📝 **Next Steps After Implementation**

1. **Test thoroughly** locally before deploying
2. **Deploy to Vercel** with environment variables
3. **Test on live site** to confirm emails arrive
4. **Monitor emails** for spam (Gmail usually filters well)
5. **Add CAPTCHA** (optional) - prevents bot spam
6. **Set up forwarding** (optional) - auto-reply or forward to other email

---

## 🆘 **Troubleshooting**

| Problem | Solution |
|---------|----------|
| "Invalid login credentials" | Check app password in `.env.local`, regenerate if needed |
| "SMTP connection timeout" | Check internet connection, Gmail servers down? |
| "Email not arriving" | Check spam folder, verify recipient email is correct |
| "Port 587 blocked" | Some networks block ports, use port 465 (SSL) instead |
| Works locally but fails on Vercel | Check environment variables in Vercel dashboard |

---

## 📚 **Resources**

- [Gmail App Passwords Guide](https://support.google.com/accounts/answer/185833)
- [Nodemailer Documentation](https://nodemailer.com/)
- [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables)
- [SMTP Ports Explanation](https://www.mailslurp.com/guides/smtp-ports/)

---

## 🎯 **Files to Create/Modify**

| File | Action |
|------|--------|
| `.env.local` | **Create** - Store Gmail credentials |
| `src/app/api/send-email/route.ts` | **Create** - Email API endpoint |
| `src/components/Contact.tsx` | **Modify** - Call API, add loading states |
| `.gitignore` | **Already includes** `.env.local` |

Ready to implement? Let's build it! 🚀
