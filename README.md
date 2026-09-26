# AI Engineer Portfolio

A futuristic, premium portfolio website for an AI Engineer specializing in Generative AI, RAG systems, and enterprise AI solutions.

## 🚀 Features

- **Cinematic Hero Section** with 3D animated visuals using React Three Fiber
- **Glassmorphism UI** with smooth animations powered by Framer Motion
- **Responsive Design** optimized for all devices
- **Interactive Sections**:
  - About with animated stats
  - Professional experience timeline
  - Featured AI/ML projects showcase
  - Technology stack grid
  - Services overview
  - Contact form
- **Premium Effects**:
  - Animated star field background
  - Floating gradient orbs
  - 3D wireframe sphere and floating cubes
  - Smooth scroll animations
  - Hover interactions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: React Three Fiber + Three.js
- **Icons**: Lucide React
- **UI Components**: Custom components with shadcn/ui patterns

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ai-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`components/sections/Hero.tsx`):
   - Update the main heading and description

2. **About Section** (`components/sections/About.tsx`):
   - Modify stats and introduction text

3. **Experience** (`components/sections/Experience.tsx`):
   - Add/edit your work experience
   - Update technologies used

4. **Projects** (`components/sections/Projects.tsx`):
   - Add your projects with descriptions
   - Update GitHub and demo links
   - Replace placeholder images

5. **Tech Stack** (`components/sections/TechStack.tsx`):
   - Customize technologies and categories

6. **Contact** (`components/sections/Contact.tsx`):
   - Update contact form submission logic
   - Add your email/social links

7. **Footer** (`components/sections/Footer.tsx`):
   - Update social media links

### Color Scheme

Edit `tailwind.config.ts` to customize colors:
- Primary Blue: `#00C2FF`
- Primary Purple: `#7B2EFF`
- Background: `#050505`

## 📁 Project Structure

```
ai-portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── effects/
│   │   ├── FloatingGradient.tsx
│   │   ├── Scene3D.tsx
│   │   ├── ScrollIndicator.tsx
│   │   └── StarField.tsx
│   ├── sections/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── Quote.tsx
│   │   ├── Services.tsx
│   │   └── TechStack.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Container.tsx
├── lib/
│   └── utils.ts
├── public/
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

The app can be deployed on any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📝 Build for Production

```bash
npm run build
npm start
```

## 🎯 Performance Optimization

- Lazy loading for 3D components
- Optimized animations with Framer Motion
- Image optimization with Next.js Image component
- Code splitting with Next.js App Router

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

MIT License - feel free to use this for your own portfolio.

## 🙏 Acknowledgments

- Inspired by modern SaaS and AI company websites
- Design principles from Apple, Linear, and Vercel
- 3D graphics powered by Three.js community

---

Built with ❤️ by Ahnaf
