export interface ServiceType {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface TestimonialType {
  id: number;
  name: string;
  testimonial: string;
  rating: number;
}

export interface BlogPostType {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

export interface FAQType {
  id: number;
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}