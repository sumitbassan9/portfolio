
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  image: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  achievements: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Other';
  level: number; // 1-100
}
