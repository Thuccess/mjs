import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ResultsTable from './components/ResultsTable';
import Admissions from './components/Admissions';
import Footer from './components/Footer';
import SectionHeader from './components/SectionHeader';
import PageHeader from './components/PageHeader';
import ContentSection from './components/ContentSection';
import Card from './components/Card';
import StepUI from './components/StepUI';
import Accordion from './components/Accordion';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminLoginModal from './components/admin/AdminLoginModal';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Heart, MapPin, Mail, Phone, MessageCircle,
  Trophy, Download, Zap, CheckCircle2, Music, Palette, Code,
  Megaphone, Shield
} from 'lucide-react';
import {
  GALLERY, BLOG_POSTS, FAQS,
  CURRICULUM_SUBJECTS, FEES_STRUCTURE, ANNOUNCEMENTS, POLICIES, SCHOOL_EVENTS, DOWNLOADS_LIST
} from './constants';

// --- CORE PAGES ---

const HomePage = ({ navigate }: { navigate: (p: string) => void }) => (
  <>
    <Hero 
      subtitle="At Mentor Junior School – Busula, we provide a strong academic foundation, discipline, and a nurturing environment that empowers every child to succeed in school and in life."
      ctas={[
        { label: 'Apply Now', path: 'apply' },
        { label: 'Visit School', secondary: true, path: 'contact' }
      ]}
      onNavigate={navigate}
    />
    <Stats />
    <ContentSection>
      <SectionHeader number="02" title="Our Essence" subtitle="Mentor Junior School is built on a foundation of integrity and excellence." />
      <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
        <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-xl shadow-black/10 border border-gray-100">
          <img src="/school.jpeg" alt="Mentor Junior School campus" className="w-full h-full object-cover" />
        </div>
        <div className="space-y-6 sm:space-y-8">
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl font-light leading-relaxed">
            For more than 15 years, we have nurtured the brightest minds in Busula, balancing modern ICT mastery with deep-seated cultural discipline.
          </p>
          <button type="button" onClick={() => navigate('about')} className="inline-flex items-center gap-2 bg-white text-black border border-gray-300 hover:bg-gray-50 hover:border-gray-400 rounded-xl px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-bold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 active:scale-[0.98] group">
            <span>Discover Our Story</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </ContentSection>
    <Admissions onNavigate={navigate} />
  </>
);

const ADMIN_AUTH_STORAGE_KEY = 'isAdminAuthenticated';
const ADMIN_ALLOWED_EMAILS = ['info@mentorjuniorschool.org', 'admin@mentorjuniorschool.com'];
const ADMIN_PASSWORD = '12345678';

// --- APP MAIN ROUTING ---

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  useEffect(() => {
    const storedAuth = window.localStorage.getItem(ADMIN_AUTH_STORAGE_KEY);
    setIsAdminAuthenticated(storedAuth === 'true');
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const cleanHash = hash === '' ? 'home' : hash;
      setCurrentPage(cleanHash);
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    if (window.location.hash) handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path: string) => {
    setCurrentPage(path);
    window.location.hash = path;
  };

  const handleAdminLogin = (email: string, password: string): boolean => {
    const normalizedEmail = email.toLowerCase();
    const isValid = ADMIN_ALLOWED_EMAILS.includes(normalizedEmail) && password === ADMIN_PASSWORD;
    if (!isValid) {
      return false;
    }

    setIsAdminAuthenticated(true);
    window.localStorage.setItem(ADMIN_AUTH_STORAGE_KEY, 'true');
    return true;
  };

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false);
    window.localStorage.removeItem(ADMIN_AUTH_STORAGE_KEY);
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage navigate={navigate} />;
      case 'about': return (
        <main>
          <PageHeader title="Our Legacy" description="Nurturing excellence in Busula since 2008 through character and discipline." breadcrumb="Home / About" />
          <ContentSection>
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
              <div>
                <h2 className="editorial-text text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 sm:mb-8">History & Vision</h2>
                <p className="text-base sm:text-lg lg:text-xl font-light text-gray-600 leading-relaxed space-y-6">
                  Mentor Junior School Busula started with a simple vision: to create a school that balances academic dominance with cultural integrity. Over the last 15 years, we have evolved from a small community school into a regional powerhouse of primary education.
                </p>
              </div>
              <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-xl shadow-black/10 border border-gray-100">
                <img src="/school-2.jpeg" alt="Mentor Junior School – History & Vision" className="w-full h-full object-cover" />
              </div>
            </div>
          </ContentSection>
          <ContentSection alt>
            <div className="mb-8 sm:mb-10">
              <span className="text-maroon text-xs font-bold uppercase tracking-[0.25em]">Leadership</span>
              <h2 className="editorial-text text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mt-2">Meet Our Team</h2>
              <p className="text-gray-600 text-base sm:text-lg mt-2 max-w-2xl">Our leadership team guides the vision and day-to-day excellence of Mentor Junior School Busula.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
              {/* Director */}
              <article className="rounded-2xl bg-white border border-gray-100 shadow-xl shadow-black/5 overflow-hidden">
                <div className="aspect-4/3 sm:aspect-3/2 overflow-hidden bg-gray-100">
                  <img src="/director.png" alt="Musaazi Juma, School Director" className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-maroon text-xs font-bold uppercase tracking-widest mb-2">Director</p>
                  <h3 className="editorial-text text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Musaazi Juma</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                    Our Director leads the school&apos;s vision, academic direction, and community engagement. With a commitment to excellence and discipline, the leadership ensures Mentor Junior School Busula remains a beacon of quality education in the region.
                  </p>
                  <a href="tel:+256752685815" className="inline-flex items-center gap-2 text-maroon font-semibold text-sm sm:text-base hover:text-maroon/80 transition-colors cursor-pointer">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                    <span>+256 752 685 815</span>
                  </a>
                </div>
              </article>
              {/* Bursar */}
              <article className="rounded-2xl bg-white border border-gray-100 shadow-xl shadow-black/5 overflow-hidden">
                <div className="aspect-4/3 sm:aspect-3/2 overflow-hidden bg-gray-100">
                  <img src="/bursur.png" alt="Kasenene Wahabu, School Bursar" className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-royal text-xs font-bold uppercase tracking-widest mb-2">Bursar</p>
                  <h3 className="editorial-text text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Kasenene Wahabu</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                    Our Bursar oversees finances, fees, and administration, ensuring transparent operations and sustainable resources for the school. Parents and guardians can reach out for any matters related to fees, payments, or school accounts.
                  </p>
                  <a href="tel:+256709240027" className="inline-flex items-center gap-2 text-royal font-semibold text-sm sm:text-base hover:text-royal/80 transition-colors cursor-pointer">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                    <span>+256 709 240 027</span>
                  </a>
                </div>
              </article>
            </div>
          </ContentSection>
        </main>
      );
      case 'results': return (
        <main>
          <PageHeader title="PLE Results" description="Consistency is the hallmark of Mentor excellence. View our historical P.L.E performance." breadcrumb="Academics / Results" />
          <ContentSection alt>
            <ResultsTable onViewAll={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
          </ContentSection>
        </main>
      );
      case 'nursery': return (
        <main>
          <PageHeader title="Nursery Section" description="The starting point of character and curiosity." breadcrumb="Academics / Nursery" />
          <ContentSection>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
              <Card title="Learning Approach" icon={<Heart/>} desc="We follow a child-led exploration model where play is the primary vehicle for learning." />
              <Card title="Activities" icon={<Palette/>} desc="Sensory play, basic numeracy, storytelling, and early social development." />
            </div>
          </ContentSection>
        </main>
      );
      case 'primary': return (
        <main>
          <PageHeader title="Primary Section" description="Strict focus on academic excellence and PLE preparation." breadcrumb="Academics / Primary" />
          <ContentSection>
            <div className="grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
              {CURRICULUM_SUBJECTS.map((c, i) => (
                <Card key={i} title={c.class}>
                  <ul className="space-y-3">
                    {c.subjects.map(s => (
                      <li key={s} className="text-sm font-light text-gray-600 flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-maroon rounded-full shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </ContentSection>
        </main>
      );
      case 'curriculum': return (
        <main>
          <PageHeader title="UNEB Curriculum" description="Strictly aligned with Uganda National Examination Board standards." breadcrumb="Academics / Curriculum" />
          <ContentSection>
            <div className="space-y-4">
              <StepUI number="01" title="Structure" desc="Our curriculum is divided into thematic learning for lower primary and subject-based for upper primary." />
              <StepUI number="02" title="Assessment" desc="Continuous weekly tests, terminal examinations, and PLE mock simulations for candidate classes." />
            </div>
          </ContentSection>
        </main>
      );
      case 'cocurricular': return (
        <main>
          <PageHeader title="Beyond Classrooms" description="Nurturing diverse talents through co-curricular activities." breadcrumb="Academics / Co-Curricular" />
          <ContentSection>
            <div className="grid md:grid-cols-3 gap-8">
              <Card title="Sports" icon={<Trophy/>} desc="Football, Netball, Volleyball, Athletics." />
              <Card title="Clubs" icon={<Code/>} desc="Coding, Day debating, Art & Craft, Drama." />
              <Card title="Skills" icon={<Zap/>} desc="Carpentry, Music, Cookery, Gardening." />
            </div>
          </ContentSection>
        </main>
      );
      case 'calendar': return (
        <main>
          <PageHeader title="Academic Calendar" description="Term dates and events for the current academic year." breadcrumb="Academics / Calendar" />
          <ContentSection>
            <div className="space-y-3 sm:space-y-4">
              {ANNOUNCEMENTS.map((a, i) => (
                <div key={i} className="p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl border border-gray-100 bg-white shadow-md shadow-black/5 flex flex-col sm:flex-row justify-between sm:items-center gap-4 hover:border-maroon/20 transition-colors">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-maroon mb-2 block">{a.type}</span>
                    <h3 className="editorial-text text-xl sm:text-2xl font-light text-gray-900">{a.title}</h3>
                  </div>
                  <span className="text-base font-mono text-gray-500">{a.date}</span>
                </div>
              ))}
            </div>
          </ContentSection>
        </main>
      );
      case 'apply': return (
        <main>
          <PageHeader title="How to Apply" description="A simple, structured induction into the Mentor family." breadcrumb="Admissions / Application" />
          <ContentSection>
            <div className="max-w-3xl">
              <StepUI number="01" title="Initial Inquiry" desc="Contact the admissions office via phone or visit the school for a prospectus." />
              <StepUI number="02" title="Placement Interview" desc="Students undergo a baseline assessment in Mathematics and English." />
              <StepUI number="03" title="Documentation" desc="Submit birth certificates, passport photos, and previous school reports." />
              <StepUI number="04" title="Admission" desc="Clear the fees and receive the official school uniform and start kit." />
            </div>
          </ContentSection>
        </main>
      );
      case 'requirements': return (
        <main>
          <PageHeader title="Admission Requirements" description="Essential documentation required for student enrollment." breadcrumb="Admissions / Requirements" />
          <ContentSection>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {['Original Birth Certificate', '3 Passport Photos', 'Previous School Report', 'Interview Pass Certificate', 'Health Record Form', 'Recommendation Letter'].map(item => (
                <div key={item} className="p-6 sm:p-8 rounded-2xl border border-gray-100 bg-white shadow-md shadow-black/5 flex items-center gap-6 hover:border-maroon/20 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-maroon/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-maroon w-5 h-5" />
                  </div>
                  <span className="editorial-text text-lg font-light text-gray-900">{item}</span>
                </div>
              ))}
            </div>
          </ContentSection>
        </main>
      );
      case 'fees': return (
        <main>
          <PageHeader title="Fees Structure" description="Transparent pricing for high-quality education." breadcrumb="Admissions / Fees" />
          <ContentSection>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-lg shadow-black/5 overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50 text-left">
                    <th className="py-6 px-6 sm:py-8 sm:px-8 text-xs font-bold uppercase tracking-wider text-gray-500">Class Category</th>
                    <th className="py-6 px-6 sm:py-8 sm:px-8 text-right text-xs font-bold uppercase tracking-wider text-gray-500">Day (UGX)</th>
                    <th className="py-6 px-6 sm:py-8 sm:px-8 text-right text-xs font-bold uppercase tracking-wider text-gray-500">Boarding (UGX)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {FEES_STRUCTURE.map((f, i) => (
                    <tr key={i} className="hover:bg-gray-50/80 transition-colors">
                      <td className="py-6 px-6 sm:py-8 sm:px-8 editorial-text text-lg font-light text-gray-900">{f.category}</td>
                      <td className="py-6 px-6 sm:py-8 sm:px-8 text-right font-mono text-gray-700">{f.day}</td>
                      <td className="py-6 px-6 sm:py-8 sm:px-8 text-right font-mono text-gray-700">{f.boarding}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ContentSection>
        </main>
      );
      case 'scholarships': return (
        <main>
          <PageHeader title="Scholarships" description="Rewarding talent and academic brilliance." breadcrumb="Admissions / Scholarships" />
          <ContentSection>
            <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-14">
              <Card title="Merit Scholarship" desc="For students scoring aggregate 4-6 in PLE (joining P7) or equivalent excellence in mid-term mocks." />
              <Card title="Talent Award" desc="For students demonstrating exceptional ability in Sports or Performing Arts at a regional level." />
            </div>
          </ContentSection>
        </main>
      );
      case 'forms': return (
        <main>
          <PageHeader title="Downloads" description="Essential school documents and application forms." breadcrumb="Admissions / Forms" />
          <ContentSection>
            <div className="grid gap-4 sm:gap-6">
              {DOWNLOADS_LIST.map(f => (
                <button
                  key={f.name}
                  type="button"
                  onClick={() => navigate('contact')}
                  className="w-full p-8 bg-white text-black border border-gray-300 rounded-xl flex justify-between items-center group text-left hover:bg-gray-50 hover:border-gray-400 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 active:scale-[0.99]"
                >
                  <div className="flex flex-col">
                    <span className="editorial-text text-xl font-light text-gray-900">{f.name}</span>
                    <span className="text-[10px] font-black text-maroon/60 uppercase group-hover:text-maroon transition-colors">{f.type} • {f.size}</span>
                  </div>
                  <Download size={20} className="text-maroon shrink-0" aria-hidden />
                </button>
              ))}
            </div>
          </ContentSection>
        </main>
      );
      case 'sports': return (
        <main>
          <PageHeader title="Sports Program" description="Building teamwork and physical resilience." breadcrumb="Student Life / Sports" />
          <ContentSection>
            <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
              <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-xl shadow-black/10 border border-gray-100">
                <img src="/school-boys.jpeg" alt="School sports team" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-6">
                <h3 className="editorial-text text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900">Inter-House Competitions</h3>
                <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed">Our annual sports gala is the highlight of the year, where houses compete for the Chancellor's Cup in athletics and ball games.</p>
              </div>
            </div>
          </ContentSection>
        </main>
      );
      case 'clubs': return (
        <main>
          <PageHeader title="Clubs & Activities" description="Nurturing diverse talents outside the core subjects." breadcrumb="Student Life / Clubs" />
          <ContentSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
              <Card title="Coding Club" icon={<Code/>} />
              <Card title="Art & Crafts" icon={<Palette/>} />
              <Card title="Scouts & Guides" icon={<Shield/>} />
              <Card title="Music/Choir" icon={<Music/>} />
            </div>
          </ContentSection>
        </main>
      );
      case 'events': return (
        <main>
          <PageHeader title="School Events" description="Highlighting key milestones and celebrations in our community." breadcrumb="Student Life / Events" />
          <ContentSection>
            <div className="grid md:grid-cols-3 gap-8">
              {SCHOOL_EVENTS.map((e, i) => (
                <div key={i} className="flex flex-col rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-lg shadow-black/5 hover:shadow-xl hover:border-maroon/20 transition-all duration-200">
                  <div className="aspect-video overflow-hidden">
                    <img src={e.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] font-bold text-maroon uppercase tracking-widest mb-2 block">{e.date}</span>
                    <h3 className="editorial-text text-xl font-light text-gray-900 mb-3">{e.title}</h3>
                    <p className="text-sm text-gray-600 font-light leading-relaxed">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ContentSection>
        </main>
      );
      case 'gallery': return (
        <main>
          <PageHeader title="School Gallery" description="Capturing moments of growth, achievement, and culture." breadcrumb="Student Life / Gallery" />
          <ContentSection>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {GALLERY.map((item, i) => (
                <div key={i} className="break-inside-avoid overflow-hidden rounded-2xl relative group shadow-lg shadow-black/5 border border-gray-100">
                  <img src={item.image} alt="" className="w-full grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                    <span className="text-[9px] font-bold text-amber-200 uppercase tracking-widest mb-1">{item.category}</span>
                    <h4 className="editorial-text text-white text-lg font-light">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </ContentSection>
        </main>
      );
      case 'news': return (
        <main>
          <PageHeader title="News & Blog" description="Stories of innovation and achievement from our campus." breadcrumb="Resources / Blog" />
          <ContentSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 xl:gap-10">
              {BLOG_POSTS.map((post, i) => (
                <Card key={i} title={post.title} className="flex flex-col p-0! overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden rounded-t-2xl">
                    <img src={post.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8 space-y-4">
                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-500">
                      <span>{post.category}</span>
                      <span>{post.date}</span>
                    </div>
                    <p className="text-sm text-gray-600 font-light leading-relaxed">{post.excerpt}</p>
                    <button
                      type="button"
                      onClick={() => navigate('contact')}
                      className="inline-flex items-center gap-2 bg-white text-black border border-gray-300 hover:bg-gray-50 hover:border-gray-400 rounded-xl px-4 py-2.5 text-sm font-bold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 active:scale-[0.98]"
                    >
                      <span>Read More</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </ContentSection>
        </main>
      );
      case 'announcements': return (
        <main>
          <PageHeader title="Announcements" description="Official bulletins and urgent updates for parents." breadcrumb="Resources / Announcements" />
          <ContentSection>
            <div className="space-y-4">
              {ANNOUNCEMENTS.map((a, i) => (
                <div key={i} className="p-6 sm:p-8 rounded-2xl border border-gray-100 bg-white shadow-md shadow-black/5 flex flex-col sm:flex-row items-start sm:items-center gap-6 hover:border-maroon/20 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-maroon/10 flex items-center justify-center text-maroon shrink-0">
                    <Megaphone size={22} />
                  </div>
                  <div className="grow min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1 block">{a.date}</span>
                    <h3 className="editorial-text text-xl font-light text-gray-900">{a.title}</h3>
                  </div>
                  <span className="text-[10px] font-bold text-maroon uppercase tracking-widest shrink-0">{a.type}</span>
                </div>
              ))}
            </div>
          </ContentSection>
        </main>
      );
      case 'faqs': return (
        <main>
          <PageHeader title="FAQs" description="Answers to common questions from parents and guardians." breadcrumb="Resources / FAQs" />
          <ContentSection alt>
            <div className="max-w-3xl mx-auto">
              <Accordion items={FAQS.map(f => ({ q: f.question, a: f.answer }))} />
            </div>
          </ContentSection>
        </main>
      );
      case 'policies': return (
        <main>
          <PageHeader title="School Policies" description="Maintaining standards and safety for all students." breadcrumb="Resources / Policies" />
          <ContentSection>
            <div className="space-y-4">
              {POLICIES.map((p, i) => (
                <div key={i} className="p-8 sm:p-10 rounded-2xl border border-gray-100 bg-white shadow-md shadow-black/5 flex flex-col sm:flex-row justify-between sm:items-center gap-4 hover:border-maroon/20 transition-colors">
                  <div>
                    <span className="text-[10px] font-bold text-maroon mb-2 block">{p.ref}</span>
                    <h3 className="editorial-text text-xl sm:text-2xl font-light text-gray-900">{p.title}</h3>
                  </div>
                  <span className="text-[10px] font-bold px-4 py-2 bg-maroon/10 text-maroon uppercase rounded-full shrink-0 w-fit">{p.status}</span>
                </div>
              ))}
            </div>
          </ContentSection>
        </main>
      );
      case 'contact': return (
        <main className="min-h-screen bg-white">
          <PageHeader title="Contact Us" description="Reach out to our administrative team in Busula." breadcrumb="Home / Contact" />
          <ContentSection>
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 xl:gap-20">
              <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  {[
                    { icon: <MapPin className="text-maroon w-5 h-5"/>, title: 'Address', val: 'Busula Town, near Mukam Mulugi Petrol Station, Luwero' },
                    { icon: <Phone className="text-maroon w-5 h-5"/>, title: 'Phone', val: '+256 752 685 815 / +256 709 240 027 / +256 778 204 671' },
                    { icon: <Mail className="text-maroon w-5 h-5"/>, title: 'Email', val: 'nabiteekorukia12@gmail.com' },
                  ].map((c, i) => (
                    <div key={i} className="flex items-start gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-100 bg-white shadow-md shadow-black/5 hover:border-maroon/20 transition-colors">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-maroon/10 flex items-center justify-center shrink-0">{c.icon}</div>
                      <div className="min-w-0">
                        <h4 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1 sm:mb-2">{c.title}</h4>
                        <p className="editorial-text text-base sm:text-lg lg:text-xl font-light text-gray-900">{c.val}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href="https://wa.me/256752685815"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-gray-300 bg-white text-black shadow-lg shadow-black/5 flex items-center justify-center gap-3 sm:gap-4 hover:bg-gray-50 hover:border-gray-400 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 active:scale-[0.99]"
                >
                  <MessageCircle className="text-green-500 w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                  <span className="font-bold text-xs sm:text-sm uppercase tracking-widest text-gray-900">Chat on WhatsApp</span>
                </a>
              </div>
              <div className="p-5 sm:p-8 lg:p-10 xl:p-12 rounded-xl sm:rounded-2xl border border-gray-100 bg-white shadow-xl shadow-black/5">
                <h3 id="inquiry-heading" className="editorial-text text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-6 sm:mb-8 lg:mb-10">Send an Inquiry</h3>
                <form className="space-y-5 sm:space-y-6 lg:space-y-8" onSubmit={(e) => e.preventDefault()} aria-labelledby="inquiry-heading">
                  <div>
                    <label htmlFor="contact-name" className="sr-only">Full Name</label>
                    <input id="contact-name" type="text" placeholder="Full Name" className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 sm:py-4 px-4 text-sm sm:text-base focus:outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/20 transition-all placeholder:text-gray-400" />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="sr-only">Email Address</label>
                    <input id="contact-email" type="email" placeholder="Email Address" className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 sm:py-4 px-4 text-sm sm:text-base focus:outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/20 transition-all placeholder:text-gray-400" />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="sr-only">Message</label>
                    <textarea id="contact-message" placeholder="Message" rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 sm:py-4 px-4 text-sm sm:text-base focus:outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/20 transition-all resize-none placeholder:text-gray-400"></textarea>
                  </div>
                  <button type="submit" className="w-full py-3 sm:py-4 rounded-xl text-xs sm:text-sm font-bold bg-white text-black border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 active:scale-[0.98]">Submit</button>
                </form>
              </div>
            </div>
          </ContentSection>
        </main>
      );
      case 'admin': return (
        <>
          {isAdminAuthenticated ? (
            <AdminDashboard onLogout={handleAdminLogout} />
          ) : (
            <AdminLoginModal onLogin={handleAdminLogin} onBackHome={() => navigate('home')} />
          )}
        </>
      );
      default: return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className="relative overflow-x-hidden bg-white min-h-screen">
      <Navbar onNavigate={navigate} currentPath={currentPage} />
      <main>
        <AnimatePresence mode="wait">
          <motion.div key={currentPage} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
};

export default App;
