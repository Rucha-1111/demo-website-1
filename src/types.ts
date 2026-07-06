export interface Service {
  id: string;
  title: string;
  category: 'Audit & Assurance' | 'Tax Advisory' | 'Corporate Finance' | 'Strategic Wealth';
  description: string;
  detailedPoints: string[];
  clientBenefit: string;
  caseStudyTitle?: string;
  caseStudySummary?: string;
}

export interface Partner {
  id: string;
  name: string;
  role: string;
  credentials: string;
  bio: string;
  specialties: string[];
  image: string;
  email: string;
  linkedIn: string;
}

export interface Insight {
  id: string;
  title: string;
  category: 'Taxation' | 'Corporate Strategy' | 'Market Trends' | 'Assurance';
  excerpt: string;
  content: string[];
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
}

export interface OfficeLocation {
  id: string;
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  timezone: string;
  localOffset: number; // UTC offset in hours
  featuredImage?: string;
}
