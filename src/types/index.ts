export interface Attorney {
  id: string;
  name: string;
  title: string;
  image: string;
  bio: string;
  expertise: string[];
  education: string[];
  certifications: string[];
  email: string;
  phone: string;
}

export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  services: string[];
  caseStudies?: CaseStudy[];
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  outcome: string;
  practiceArea: string;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  content: string;
  rating: number;
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
  urgency: 'low' | 'medium' | 'high' | 'emergency';
}