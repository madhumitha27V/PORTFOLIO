# Madhumitha V - Portfolio Website

A modern, responsive React portfolio website showcasing Madhumitha V's skills, projects, achievements, and contact information as an Electrical & Electronics Engineer.

## Features

- **Modern React Design**: Built with React 18 and modern functional components
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Smooth animations, hover effects, and interactive components
- **Project Showcase**: Dynamic project cards with detailed modals
- **Skills Visualization**: Progress bars and skill categorization
- **Contact Form**: Functional contact form with validation
- **Professional Styling**: Modern gradient designs and clean typography

## Sections

### 🏠 Hero Section
- Professional introduction
- Call-to-action buttons
- Animated background effects

### 💼 Skills Section
- Programming languages (Python, Java, JavaScript, C)
- Web development technologies (React, Node.js, HTML, CSS)
- Database and tools (MongoDB, Git, GitHub)
- Core technologies (Data Structures, ML, IoT)

### 🚀 Projects Section
- **Authenticity Validator for Academia**: Certificate verification system using Python, SQLite, and OCR
- **Smart Drainage and Monitoring System**: IoT-based automatic drainage management
- **Real-time Traffic Management System**: AI-powered traffic control with dynamic signal control

### 🏆 Achievements Section
- Published patent for traffic management system
- Leadership roles and class representation
- Microsoft Applied Skills certification
- Oracle Cloud Infrastructure certification

### 📧 Contact Section
- Interactive contact form
- Social media links
- Professional contact information
- Resume download option

## Technologies Used

- **Frontend**: React.js, HTML5, CSS3, JavaScript
- **Styling**: Modern CSS with gradients, animations, and responsive design
- **Icons**: Font Awesome
- **Fonts**: Inter font family from Google Fonts

## Project Structure

```
src/
├── App.js                 # Main application component
├── App.css               # Global styles and component styling
├── index.js              # React application entry point
└── components/
    ├── Header.js         # Navigation header with smooth scrolling
    ├── Hero.js           # Hero section with introduction
    ├── Skills.js         # Skills showcase with progress bars
    ├── Projects.js       # Projects grid with modal details
    ├── Achievements.js   # Achievements and education
    ├── Contact.js        # Contact form and information
    └── Footer.js         # Footer with social links
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/madhumitha27V/PORTFOLIO.git
cd PORTFOLIO
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Customization

### Personal Information
Update personal information in the respective components:
- Contact details in `Contact.js`
- Social media links in `Footer.js` and `Contact.js`
- Professional summary in `Hero.js`

### Projects
Add or modify projects in the `projects` array in `Projects.js`:
```javascript
const projects = [
  {
    title: "Your Project",
    description: "Project description",
    technologies: ["Tech1", "Tech2"],
    githubLink: "github-url",
    liveLink: "live-demo-url"
  }
];
```

### Skills
Update skills in the `skillCategories` array in `Skills.js`:
```javascript
const skillCategories = [
  {
    title: "Category Name",
    skills: [
      { name: "Skill", level: 85, icon: "icon-class" }
    ]
  }
];
```

## Design Features

- **Modern Gradient Design**: Beautiful color gradients throughout the site
- **Smooth Animations**: Hover effects and transitions
- **Mobile-First Responsive**: Optimized for all screen sizes
- **Accessibility**: Proper focus states and semantic HTML
- **Performance**: Optimized images and efficient CSS

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to fork this project and customize it for your own portfolio needs.


## Contact

**Madhumitha V**
- Email: 27madhumitha.v@gmail.com
- LinkedIn: [Madhumitha.linkedin.com](https://linkedin.com/in/madhumitha)
- GitHub: [Madhumitha.github.com](https://github.com/madhumitha)

---

*Designed & Developed by Madhumitha V*
