
import { Project, Experience, Education, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'CloudScale Analytics',
    description: 'A real-time data visualization platform processing millions of events per second with distributed architecture.',
    tech: ['Next.js', 'Three.js', 'Redis', 'WebSockets'],
    link: '#',
    github: '#',
    image: 'https://picsum.photos/seed/scale/800/450'
  },
  {
    id: '2',
    title: 'Nexus Ecosystem',
    description: 'Decentralized identity management system with biometric authentication and encrypted cloud storage.',
    tech: ['TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
    link: '#',
    github: '#',
    image: 'https://picsum.photos/seed/nexus/800/450'
  },
  {
    id: '3',
    title: 'Lumina VR Dashboard',
    description: 'Immersive 3D workspace for remote developers, featuring collaborative code editors and spatial audio.',
    tech: ['React Three Fiber', 'Zustand', 'WebRTC', 'GLSL'],
    link: '#',
    github: '#',
    image: 'https://picsum.photos/seed/lumina/800/450'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'e1',
    role: 'Senior Software Engineer',
    company: 'TechFlow Systems',
    period: '2022 - Present',
    description: [
      'Architected and led the development of a micro-frontend ecosystem.',
      'Reduced initial load times by 45% using intelligent code splitting.',
      'Mentored a team of 6 junior and mid-level developers.'
    ]
  },
  {
    id: 'e2',
    role: 'Frontend Developer',
    company: 'PixelPerfect Agency',
    period: '2020 - 2022',
    description: [
      'Developed high-fidelity landing pages for Fortune 500 clients.',
      'Implemented complex GSAP and Three.js animations for award-winning sites.',
      'Optimized asset pipelines for better mobile performance.'
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: 'edu1',
    degree: 'B.Sc. in Computer Science',
    school: 'Global Tech University',
    period: '2016 - 2020',
    achievements: 'Dean\'s Honor List, Specialized in Computer Graphics.'
  }
];

export const SKILLS: Skill[] = [
  { name: 'React / Next.js', category: 'Frontend', level: 95 },
  { name: 'TypeScript', category: 'Frontend', level: 90 },
  { name: 'Three.js / R3F', category: 'Frontend', level: 85 },
  { name: 'Tailwind CSS', category: 'Frontend', level: 95 },
  { name: 'Node.js', category: 'Backend', level: 80 },
  { name: 'PostgreSQL', category: 'Backend', level: 75 },
  { name: 'Docker / CI/CD', category: 'Tools', level: 85 },
  { name: 'Framer Motion', category: 'Tools', level: 90 }
];
