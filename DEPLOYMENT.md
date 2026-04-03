# Deploy to Vercel Guide

Your portfolio is ready for deployment! Follow these steps to deploy to Vercel:

## Step 1: Push to GitHub

1. Go to [GitHub.com](https://github.com) and sign in
2. Create a new repository called `portfolio`
3. Run the following commands in your project directory:

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## Step 2: Deploy with Vercel

### Option A: Using Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub (click "Continue with GitHub")
3. Click "New Project"
4. Select your `portfolio` repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

The deployment will start automatically!

### Option B: Using Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts to authenticate and deploy.

## Step 3: Configure Your Domain (Optional)

After deployment, you can add a custom domain:

1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Enter your custom domain
4. Follow DNS configuration instructions

## What's Deployed

Your portfolio includes:
- ✅ Responsive navigation header
- ✅ Hero section with call-to-action
- ✅ About me section
- ✅ Projects showcase (6 placeholder projects)
- ✅ Skills & expertise section
- ✅ Contact form
- ✅ Footer with social links

## Next Steps

After deployment, you can:

1. **Update Content**: Replace placeholder content with your real information
   - Edit components in `src/components/`
   - Update project details in `Projects.tsx`
   - Add your actual skills in `Skills.tsx`
   - Update contact info in `Contact.tsx`

2. **Add Your Image**: Replace the profile placeholder in `About.tsx`
   - Add your image to `public/` folder
   - Update the image path in the About component

3. **Customize Colors**: Modify Tailwind classes in components
   - Current theme: Blue (#3B82F6)
   - Edit hex values to change the color scheme

4. **Update Social Links**: Replace placeholder URLs
   - GitHub: `https://github.com/YOUR_USERNAME`
   - LinkedIn: `https://linkedin.com/in/YOUR_PROFILE`
   - Twitter: `https://twitter.com/YOUR_HANDLE`

5. **Add More Sections**: Create new components in `src/components/`

## Troubleshooting

- **Build fails**: Check `npm run build` locally first
- **Deployment stuck**: Check Vercel logs in the dashboard
- **Styling issues**: Clear `.next` folder and rebuild

## Local Development

To continue developing locally:

```bash
npm run dev
```

Visit `http://localhost:3000` to see your changes in real-time.

Good luck! 🚀
