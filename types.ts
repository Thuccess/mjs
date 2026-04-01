
import React from 'react';

export interface StudentResult {
  name: string;
  indexNumber: string;
  division: number;
  aggregates: number;
  year: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export interface Facility {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface AdminKPI {
  id: string;
  label: string;
  value: string;
  status: 'completed' | 'pending';
}

export interface ActivityItem {
  id: string;
  label: string;
  timestamp: string;
  status: 'completed' | 'pending';
}

export interface SummaryItem {
  id: string;
  title: string;
  value: string;
  status: 'completed' | 'pending';
}
