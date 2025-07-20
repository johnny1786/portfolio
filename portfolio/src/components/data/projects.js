// src/data/projects.js
import blogimg from '/src/assets/blog.jpg'

const projects = [
  {
    id: 1,
    title: 'Personal Portfolio',
    description: 'A modern portfolio website built with React and Tailwind CSS to showcase my work and skills.',
    category: 'Frontend',
    year: '2025',
    image: '/src/assets/portfolio.jpg', // 👈 more on this below
    github: 'https://github.com/your-username/portfolio'
  },
  {
    id: 2,
    title: 'Blog CMS',
    description: 'A full-stack blog application with markdown support and user authentication.',
    category: 'Full Stack',
    year: '2024',
    image: blogimg,
    github: 'https://github.com/your-username/blog-cms'
  },
  {
    id: 3,
    title: 'E-Commerce Store',
    description: 'A fully responsive e-commerce website built using the MERN stack and Stripe integration.',
    category: 'Full Stack',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713',
    github: 'https://github.com/your-username/ecommerce-store'
  }
];

export default projects;
