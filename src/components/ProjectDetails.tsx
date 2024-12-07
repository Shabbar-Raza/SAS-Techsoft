import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Navigation } from './Navigation';

const projectData = {
  'e-commerce': {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce solution built with React and Node.js, featuring a responsive design, secure payment integration, and intuitive product management.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
  },
  'bakery': {
    title: 'Sweet Delights Bakery',
    description: 'A delightful website for a local bakery showcasing their products, online ordering system, and customer testimonials.',
    technologies: ['React', 'Tailwind CSS', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://jazzy-naiad-d9119c.netlify.app/',
  },
  'corporate': {
    title: 'Corporate Website',
    description: 'A professional corporate website with modern design, interactive features, and comprehensive company information.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
  },
};

export const ProjectDetails = () => {
  const { id } = useParams();
  const project = id ? projectData[id as keyof typeof projectData] : null;

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-navy-900 hover:text-navy-800 mb-8">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-96 object-cover"
            />
            
            <div className="p-8">
              <h1 className="text-3xl font-bold text-navy-900 mb-4">{project.title}</h1>
              <p className="text-gray-600 mb-6">{project.description}</p>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-navy-900 mb-3">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-navy-900 text-white rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gold-400 text-navy-900 px-6 py-2 rounded-lg font-semibold hover:bg-gold-500 transition-colors"
                >
                  View Live Site
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};