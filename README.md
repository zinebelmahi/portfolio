# Zineb Elmahi - Portfolio

A modern, responsive, and professional portfolio website built with HTML, CSS, and JavaScript.

## Features

✨ **Modern Design**: Clean, contemporary design with gradient accents and smooth animations
📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
🎨 **Beautiful UI**: Professional color scheme with smooth transitions and hover effects
⚡ **Fast & Lightweight**: Pure HTML/CSS/JavaScript - no heavy frameworks
🎯 **Well-Structured**: Easy to navigate with smooth scrolling
🌙 **Accessibility**: Semantic HTML and proper contrast ratios
♿ **User-Friendly**: Intuitive navigation and smooth interactions

## Sections

1. **Navigation Bar** - Fixed navigation with smooth scroll links
2. **Hero Section** - Eye-catching introduction with call-to-action buttons
3. **About Section** - Personal information and interests
4. **Skills Section** - Technical skills and expertise
5. **Projects Section** - Featured projects showcase
6. **Contact Section** - Contact information and social media links
7. **Footer** - Copyright and back-to-top button

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No dependencies or build tools required!

### How to Use

1. Open `index.html` in your web browser
2. Everything is contained in three files:
   - `index.html` - Structure
   - `style.css` - Styling
   - `script.js` - Interactivity

### File Structure
```
portfolio/
├── index.html      # Main HTML file
├── style.css       # Styling
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Customization Guide

### Update Personal Information

**In `index.html`, find and update:**

1. **Name & Title** (Hero Section)
   ```html
   <h1 class="hero-title">Hi, I'm <span class="highlight">Your Name</span></h1>
   <p class="hero-subtitle">Your Title | Your Passion | Your Interest</p>
   ```

2. **About Section**
   ```html
   <p>I'm an 18-year-old software engineering student...</p>
   ```

3. **Contact Information**
   ```html
   <p>your.email@example.com</p>
   <p>+212 6 XX XXX XXXX</p>
   <p>Your Location</p>
   ```

4. **Social Media Links**
   ```html
   <a href="https://github.com/yourprofile" class="social-icon">
       <i class="fab fa-github"></i>
   </a>
   ```

### Update Skills

Replace the skills in the Skills section:
```html
<span class="skill-tag">Your Skill</span>
```

### Add/Update Projects

Edit the project cards in the Projects section:
```html
<div class="project-card">
    <div class="project-icon">
        <i class="fas fa-icon-name"></i>
    </div>
    <h3>Project Name</h3>
    <p>Project description</p>
    <div class="project-tags">
        <span>#Tag1</span>
        <span>#Tag2</span>
    </div>
</div>
```

### Change Colors

Edit the CSS variables in `style.css`:
```css
:root {
    --primary-color: #6366f1;      /* Main color */
    --secondary-color: #8b5cf6;    /* Secondary color */
    --accent-color: #ec4899;       /* Accent color */
    --dark-bg: #0f172a;            /* Dark background */
    --light-bg: #f8fafc;           /* Light background */
    --text-primary: #1e293b;       /* Primary text */
    --text-secondary: #64748b;     /* Secondary text */
}
```

### Modify Fonts

Change the font family in `style.css`:
```css
body {
    font-family: 'Your Font', sans-serif;
}
```

## Icons Used

We use Font Awesome icons. You can find more icons at [fontawesome.com](https://fontawesome.com)

Common icons:
- `fa-code` - Code
- `fa-music` - Music
- `fa-sun` - Summer
- `fa-github` - GitHub
- `fa-linkedin` - LinkedIn
- `fa-twitter` - Twitter
- `fa-instagram` - Instagram

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Tips for Best Results

1. **Profile Picture**: Add a custom avatar by replacing the icon in the hero section with your image
2. **Projects**: Keep project descriptions concise and highlight key achievements
3. **SEO**: Update the page title and meta description for better search engine visibility
4. **Performance**: All assets are optimized for fast loading

## Deployment

You can easily host this portfolio on:
- **GitHub Pages** - Free hosting for static sites
- **Netlify** - Drag and drop deployment
- **Vercel** - Optimal for web projects
- **Any web hosting service** - Just upload the files

## Future Enhancements

- Add a blog section
- Implement a contact form with email integration
- Add a dark mode toggle
- Include project portfolio with live links
- Add smooth scroll animations
- Add testimonials section

## License

Free to use and modify for personal use.

## Support

For questions or issues, feel free to customize as needed!

---

**Created for Zineb Elmahi** | 2026

Last Updated: March 2026
