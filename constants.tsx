import React from 'react';
import { 
  BookOpen, Users, Trophy, GraduationCap, Building2, Utensils, 
  BedDouble, Target, Eye, Heart, Shield, Zap, Sparkles,
  Palette, Music, Code, Globe, Laptop, Microscope, Activity,
  Calendar, Megaphone, Newspaper, FileDown
} from 'lucide-react';
import { StudentResult, Facility, BlogPost, TeamMember, FAQItem } from './types';

export const LOGO_URL = '/logo.png';

export const COLORS = {
  primary: '#8B0000', // Maroon
  secondary: '#1E3A8A', // Royal Blue
  accent: '#D4AF37', // Gold
};

export const STATS = [
  { label: 'Division 1 count', value: 112, suffix: '', icon: <Trophy className="w-6 h-6" /> },
  { label: 'Pass rate', value: 100, suffix: '%', icon: <GraduationCap className="w-6 h-6" /> },
  { label: 'Years of excellence', value: 15, suffix: '+', icon: <Users className="w-6 h-6" /> },
  { label: 'Top aggregates', value: 4, suffix: '', icon: <Zap className="w-6 h-6" /> },
];

export const MOCK_RESULTS: StudentResult[] = [
  { name: 'Nakato Mary', indexNumber: 'MJS/001/24', division: 1, aggregates: 4, year: 2024 },
  { name: 'Kato John', indexNumber: 'MJS/002/24', division: 1, aggregates: 5, year: 2024 },
  { name: 'Mugisha Paul', indexNumber: 'MJS/003/24', division: 1, aggregates: 6, year: 2024 },
  { name: 'Nansubuga Sarah', indexNumber: 'MJS/004/24', division: 1, aggregates: 8, year: 2024 },
  { name: 'Owor David', indexNumber: 'MJS/005/24', division: 1, aggregates: 10, year: 2024 },
  { name: 'Akello Martha', indexNumber: 'MJS/007/24', division: 1, aggregates: 7, year: 2024 },
];

export const FACILITIES: Facility[] = [
  {
    title: 'Modern Dormitories',
    description: 'Safe, comfortable, and well-supervised boarding facilities for both boys and girls with 24/7 security.',
    icon: <BedDouble className="w-6 h-6" />,
    image: '/school-4.jpeg'
  },
  {
    title: 'ICT Mastery Lab',
    description: 'A high-tech digital center where students learn coding, digital literacy, and modern research techniques.',
    icon: <Laptop className="w-6 h-6" />,
    image: '/school-3.jpeg'
  },
  {
    title: 'Science & Robotics',
    description: 'Advanced laboratory for hands-on experiments and modern robotics curriculum.',
    icon: <Microscope className="w-6 h-6" />,
    image: '/school-2.jpeg'
  }
];

export const SCHOOL_EVENTS = [
  { 
    title: 'Annual Sports Gala', 
    date: 'March 24, 2026', 
    desc: 'A full day of competitive athletics and inter-house teamwork.',
    image: '/school-boys.jpeg'
  },
  { 
    title: 'Science & ICT Expo', 
    date: 'May 12, 2026', 
    desc: 'Students showcase their robotics projects and scientific discoveries.',
    image: '/school.jpeg'
  },
  { 
    title: 'Parents Visitation Day', 
    date: 'July 05, 2026', 
    desc: 'One-on-one academic reviews between parents and teachers.',
    image: '/administration-block.jpeg'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Role of Digital Literacy in Modern Education',
    excerpt: 'Why Mentor Junior School is investing heavily in robotics and ICT labs for primary students.',
    content: 'Long form content here...',
    image: '/school-3.jpeg',
    date: 'Jan 15, 2026',
    author: 'Admin',
    category: 'Innovation'
  },
  {
    id: '2',
    title: 'Celebrating Academic Dominance: 2024 PLE Results',
    excerpt: 'Our students achieved an unprecedented 100% Division 1 pass rate in the latest national exams.',
    content: 'Long form content here...',
    image: '/school-girls-2.jpeg',
    date: 'Dec 20, 2025',
    author: 'Principal',
    category: 'Success'
  },
  {
    id: '3',
    title: 'Sportsmanship: Lessons from the Inter-House Gala',
    excerpt: 'Highlights from a week of intense competition and character building on the field.',
    content: 'Long form content here...',
    image: '/school-boys-sport-wears-2.jpeg',
    date: 'Nov 12, 2025',
    author: 'Sports Dept',
    category: 'Community'
  }
];

export const ANNOUNCEMENTS = [
  { date: 'Feb 01, 2026', title: 'Beginning of Term One reporting dates for boarders.', type: 'Urgent' },
  { date: 'Feb 15, 2026', title: 'Uniform collection for new P.1 students starts today.', type: 'Information' },
  { date: 'Mar 10, 2026', title: 'Mid-term break dates adjusted due to national holidays.', type: 'Academic' }
];

export const DOWNLOADS_LIST = [
  { name: 'Student Admission Form 2026', size: '1.2 MB', type: 'PDF' },
  { name: 'Full Fees Breakdown (Day & Boarding)', size: '450 KB', type: 'PDF' },
  { name: 'School Rules & Regulations Handbook', size: '2.5 MB', type: 'PDF' },
  { name: 'P.7 Graduation Ceremony Photo Pack', size: '15 MB', type: 'ZIP' },
  { name: 'UNEB PLE Syllabus Overview', size: '3.1 MB', type: 'PDF' }
];

export const CURRICULUM_SUBJECTS = [
  { class: 'P1 - P3', subjects: ['Mathematics', 'English', 'Literacy I & II', 'Religious Education', 'Physical Education', 'Art & Technology'] },
  { class: 'P4 - P6', subjects: ['Mathematics', 'Integrated Science', 'English', 'Social Studies', 'ICT Mastery', 'CAPE (Performing Arts)'] },
  { class: 'P7', subjects: ['Intensive Mathematics', 'Advanced Science', 'Analytical English', 'Regional Social Studies', 'PLE Simulations'] }
];

export const FEES_STRUCTURE = [
  { category: 'Nursery (Baby, Middle, Top)', day: '450,000', boarding: 'N/A' },
  { category: 'Lower Primary (P1 - P3)', day: '520,000', boarding: '1,100,000' },
  { category: 'Upper Primary (P4 - P6)', day: '580,000', boarding: '1,250,000' },
  { category: 'Candidate Class (P7)', day: '650,000', boarding: '1,400,000' }
];

export const POLICIES = [
  { title: 'Anti-Bullying Policy', ref: 'MJS-POL-01', status: 'Active' },
  { title: 'Digital Usage Guidelines', ref: 'MJS-POL-02', status: 'Active' },
  { title: 'Boarding House Rules', ref: 'MJS-POL-03', status: 'Active' },
  { title: 'Academic Integrity Code', ref: 'MJS-POL-04', status: 'Active' }
];

export const FAQS: FAQItem[] = [
  { question: 'What are the admission requirements?', answer: 'We require a previous academic report, birth certificate, and a placement interview pass.' },
  { question: 'Do you offer boarding facilities?', answer: 'Yes, we have high-standard separate boarding facilities for both boys and girls.' },
  { question: 'What is your student-to-teacher ratio?', answer: 'We maintain a strict ratio of 1:30 to ensure personalized attention for every student.' }
];
