# Neurogent.ai Website

A modern, conversion-focused website for Neurogent.ai - Production-Grade AI Agent Development Company.

## 🚀 Features

- **Modern Design**: Inspired by leading AI agent platforms (Lyzr, Haptik, 1000xdev)
- **Dark/Light Mode**: Beautiful theme toggle with localStorage persistence (defaults to light mode)
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Conversion-Focused**: Strategic CTAs throughout to drive meeting bookings
- **Smooth Animations**: Fade-in effects, hover states, and parallax scrolling
- **Fast Loading**: Lightweight vanilla JavaScript, no framework overhead
- **SEO Optimized**: Semantic HTML with proper meta tags

## 📋 Sections

1. **Hero Section**: Bold headline with key value proposition and CTAs
2. **What We Do**: Core services and differentiators
3. **Use Cases**: Practical applications of AI agents
4. **Who We Build For**: Target industries and ideal customer profiles
5. **How It Works**: 4-step process timeline
6. **Why Neurogent.ai**: Key strengths and technology stack
7. **Contact Section**: Final conversion push with prominent CTA
8. **Footer**: Company information and legal details

## 🎨 Design System

### Colors
- **Primary**: Purple gradient (#8B5CF6 to #6366F1)
- **Dark**: #0F172A
- **Gray**: #64748B
- **Light**: #F8FAFC
- **White**: #FFFFFF

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: 800 weight for maximum impact
- **Body**: 400-600 weight for readability

### Components
- Dark/Light mode toggle (navbar + mobile menu)
- Gradient buttons with hover effects
- Floating animation cards
- Interactive process timeline
- Feature cards with hover states
- Mobile-responsive navigation

## 🛠️ Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript**: No dependencies, fast loading
- **Google Fonts**: Inter font family

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## 🚀 Getting Started

1. Open `index.html` in your web browser
2. No build process required - works out of the box!

### For Development

You can use any local server. For example:

```bash
# Python
python -m http.server 8000

# Node.js (npx)
npx serve

# VS Code Live Server extension
```

Then navigate to `http://localhost:8000`

## 📊 CTA Integration

All "Book a Consultation" buttons link to:
```
https://calendar.app.google/LLxhMUzRgQjrriQQ6
```

Email contact: `hello@neurogent.ai`

## 🎯 Conversion Optimization

- **Multiple CTAs**: Hero, each section, and dedicated contact section
- **Clear Value Propositions**: Technical expertise + business outcomes
- **Trust Indicators**: Technology badges, process transparency
- **Mobile-First**: Optimized for mobile conversion
- **Fast Loading**: Minimal dependencies for instant page load

## 📝 Customization

### Changing Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary: #8B5CF6;
    --secondary: #6366F1;
    /* ... more variables */
}
```

### Updating Content

Edit text directly in `index.html` - all content is clearly structured and commented.

### Adding Analytics

Add your analytics code in `script.js` where CTA tracking is set up:

```javascript
ctaButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Add your analytics tracking here
    });
});
```

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

© 2025 Neurogent Intelligence LLP. All rights reserved.

## 📞 Contact

**Neurogent Intelligence LLP**  
303, Maa Bhagwati, RK Enclave  
Laxman Vihar, Sector 5  
Gurgaon, 122001  
CIN: ACP-6309  

Email: hello@neurogent.ai  
Website: [Book a Call](https://calendar.app.google/LLxhMUzRgQjrriQQ6)

---

Built with ❤️ for AI Agent Innovation
