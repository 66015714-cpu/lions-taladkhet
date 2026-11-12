import React, { useState, useEffect } from 'react';
import {
  Globe, Shield, Lock, LogOut, Menu, X, ChevronRight, Calendar, MapPin,
  Users, Newspaper, HeartHandshake, Image as ImageIcon, Phone, Mail,
  Plus, Edit3, Trash2, CheckCircle2, AlertTriangle, Upload, Database,
  Award, Eye, Send, UserPlus
} from 'lucide-react';
import { supabase, isSupabaseConfigured } from './lib/supabase';

// ============================================================================
// 1. OFFICIAL LIONS CLUBS INTERNATIONAL EMBLEM (VECTOR SVG)
// ============================================================================
const LionsOfficialEmblem = ({ size = 56, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Lions Clubs International Official Emblem"
  >
    <defs>
      <radialGradient id="lionsGold" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#FDE047" />
        <stop offset="45%" stopColor="#EAB308" />
        <stop offset="85%" stopColor="#B45309" />
        <stop offset="100%" stopColor="#78350F" />
      </radialGradient>
      <radialGradient id="lionsBlue" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#1E40AF" />
        <stop offset="70%" stopColor="#0F296E" />
        <stop offset="100%" stopColor="#091947" />
      </radialGradient>
    </defs>

    <circle cx="100" cy="100" r="95" fill="url(#lionsGold)" stroke="#78350F" strokeWidth="2.5" />
    <circle cx="100" cy="100" r="85" fill="url(#lionsBlue)" stroke="#FACC15" strokeWidth="2" />

    <text
      x="100"
      y="34"
      textAnchor="middle"
      fill="#FDE047"
      fontSize="16"
      fontWeight="800"
      letterSpacing="4"
      fontFamily="serif"
    >
      LIONS
    </text>

    <path
      d="M48 64 C32 68, 24 84, 28 102 C31 116, 40 124, 52 126 L46 138 L66 135 L64 114 C52 110, 46 98, 50 84 C52 76, 58 72, 65 70 Z"
      fill="url(#lionsGold)"
      stroke="#78350F"
      strokeWidth="1.5"
    />
    <circle cx="43" cy="84" r="2.5" fill="#091947" />

    <path
      d="M152 64 C168 68, 176 84, 172 102 C169 116, 160 124, 148 126 L154 138 L134 135 L136 114 C148 110, 154 98, 150 84 C148 76, 142 72, 135 70 Z"
      fill="url(#lionsGold)"
      stroke="#78350F"
      strokeWidth="1.5"
    />
    <circle cx="157" cy="84" r="2.5" fill="#091947" />

    <circle cx="100" cy="102" r="42" fill="url(#lionsGold)" stroke="#78350F" strokeWidth="2.5" />
    <circle cx="100" cy="102" r="35" fill="url(#lionsBlue)" stroke="#FDE047" strokeWidth="1.5" />
    <path
      d="M84 79 H98 V115 H121 V126 H84 Z"
      fill="url(#lionsGold)"
      stroke="#78350F"
      strokeWidth="1.2"
    />

    <text
      x="100"
      y="174"
      textAnchor="middle"
      fill="#FDE047"
      fontSize="11.5"
      fontWeight="700"
      letterSpacing="2"
      fontFamily="serif"
    >
      INTERNATIONAL
    </text>
  </svg>
);

// ============================================================================
// 2. BILINGUAL DICTIONARY (THAI & ENGLISH)
// ============================================================================
const TRANSLATIONS = {
  th: {
    clubName: 'สโมสรไลออนส์ตลาดเขต จังหวัดกาญจนบุรี',
    clubSub: 'Lions Club of Taladkhet Kanchanaburi • ภาค 310 D (District 310 D)',
    motto: 'เราให้บริการ • WE SERVE',
    nav: {
      home: 'หน้าแรก',
      about: 'ประวัติความเป็นมา',
      vision: 'วิสัยทัศน์และพันธกิจ',
      members: 'คณะกรรมการและสมาชิก',
      news: 'ข่าวประชาสัมพันธ์',
      activities: 'กิจกรรมเพื่อสังคม',
      gallery: 'คลังภาพกิจกรรม',
      contact: 'ติดต่อเรา',
      admin: 'ระบบผู้ดูแล'
    },
    hero: {
      badge: 'องค์กรสาธารณประโยชน์สากล • พื้นที่อำเภอพนมทวน จังหวัดกาญจนบุรี',
      title: 'อุทิศตนเพื่อสังคม บำเพ็ญประโยชน์ด้วยหัวใจไลออนส์',
      subtitle:
        'สโมสรไลออนส์ตลาดเขต จังหวัดกาญจนบุรี มุ่งมั่นยกระดับคุณภาพชีวิตของประชาชนในท้องถิ่น ด้านสายตา เยาวชน สาธารณสุข และสิ่งแวดล้อม ตามอุดมการณ์สากล "We Serve"',
      btnActivities: 'ดูกิจกรรมเพื่อสังคม',
      btnContact: 'ติดต่อประสานงานสโมสร'
    },
    sampleNotice:
      'หมายเหตุ: ข้อมูลรายชื่อ ข่าวสาร และตัวเลขบางส่วนในหน้านี้เป็นข้อมูลตัวอย่างสำหรับรอแก้ไข สามารถเข้าสู่ระบบผู้ดูแลเพื่ออัปเดตข้อมูลจริงของสโมสรได้ทันที',
    sections: {
      latestNews: 'ข่าวประชาสัมพันธ์ล่าสุด',
      upcomingActivities: 'โครงการและกิจกรรมสาธารณประโยชน์',
      pillarsTitle: '5 เสาหลักการบริการของไลออนส์สากล',
      boardTitle: 'คณะกรรมการบริหารสโมสร (รออัปเดตรายชื่อจริง)',
      membersTitle: 'ทำเนียบสมาชิกสโมสร (รออัปเดตรายชื่อจริง)',
      galleryTitle: 'ประมวลภาพกิจกรรมสาธารณประโยชน์',
      contactTitle: 'ติดต่อสโมสรไลออนส์ตลาดเขต จังหวัดกาญจนบุรี'
    }
  },
  en: {
    clubName: 'Lions Club of Taladkhet Kanchanaburi',
    clubSub: 'District 310 D • Lions Clubs International',
    motto: 'WE SERVE • เราให้บริการ',
    nav: {
      home: 'Home',
      about: 'History & Heritage',
      vision: 'Vision & Mission',
      members: 'Officers & Members',
      news: 'News & Press',
      activities: 'Service Projects',
      gallery: 'Photo Gallery',
      contact: 'Contact Us',
      admin: 'Admin Portal'
    },
    hero: {
      badge: 'International Service Organization • Phanom Thuan, Kanchanaburi',
      title: 'Dedicated to Community Service with the Heart of a Lion',
      subtitle:
        'Lions Club of Taladkhet Kanchanaburi is committed to improving local lives through vision care, youth empowerment, public health, and environmental stewardship under the motto "We Serve".',
      btnActivities: 'Explore Service Projects',
      btnContact: 'Contact Our Club'
    },
    sampleNotice:
      'Notice: Placeholder sample records are currently displayed for club setup. Authorized administrators can log in to update official club records anytime.',
    sections: {
      latestNews: 'Latest Club Announcements',
      upcomingActivities: 'Community Service Projects',
      pillarsTitle: 'Lions International 5 Global Service Pillars',
      boardTitle: 'Club Board of Directors (Pending Official Update)',
      membersTitle: 'Club Membership Directory (Pending Official Update)',
      galleryTitle: 'Service Activity Photo Archive',
      contactTitle: 'Contact Lions Club of Taladkhet Kanchanaburi'
    }
  }
};

// ============================================================================
// 3. INITIAL PLACEHOLDER DATA (CLEARLY LABELED FOR PENDING CLUB UPDATE)
// ============================================================================
const INITIAL_NEWS = [
  {
    id: 'news-1',
    title_th: '[ข้อมูลตัวอย่างรอแก้ไข] พิธีสถาปนาคณะกรรมการบริหารสโมสรไลออนส์ตลาดเขต ประจำปีบริหาร 2569–2570',
    title_en: '[Sample Placeholder] Installation Ceremony of Club Officers for Lionistic Year 2026–2027',
    summary_th: 'ข้อความตัวอย่างสำหรับรอแก้ไข: สโมสรไลออนส์ตลาดเขต จังหวัดกาญจนบุรี จัดพิธีสถาปนาคณะกรรมการบริหารชุดใหม่เพื่อสานต่อภารกิจบำเพ็ญประโยชน์',
    summary_en: 'Sample text pending update: Lions Club of Taladkhet Kanchanaburi held its annual officer installation ceremony to continue community service.',
    content_th: 'เนื้อหาข่าวตัวอย่างสำหรับรอแก้ไขโดยผู้ดูแลระบบ: สโมสรไลออนส์ตลาดเขต จังหวัดกาญจนบุรี ได้จัดประชุมใหญ่และพิธีสถาปนาคณะกรรมการบริหารสโมสร ณ พื้นที่ตำบลตลาดเขต อำเภอพนมทวน จังหวัดกาญจนบุรี โดยมีสมาชิกและผู้มีเกียรติเข้าร่วมอย่างพร้อมเพรียง',
    content_en: 'Sample content awaiting administrator update: Lions Club of Taladkhet Kanchanaburi convened its officer installation ceremony in Taladkhet, Phanom Thuan District, Kanchanaburi.',
    category: 'club_news',
    cover_image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
    published_date: '2026-10-15',
    is_published: true
  },
  {
    id: 'news-2',
    title_th: '[ข้อมูลตัวอย่างรอแก้ไข] โครงการตรวจวัดสายตาและมอบแว่นตาฟรีแก่ผู้สูงอายุในเขตตลาดเขต',
    title_en: '[Sample Placeholder] Free Vision Screening and Eyeglasses Distribution for Senior Citizens',
    summary_th: 'ข้อความตัวอย่างสำหรับรอแก้ไข: หน่วยแพทย์เคลื่อนที่ร่วมกับสมาชิกสโมสรให้บริการตรวจคัดกรองสายตาและมอบแว่นสายตาโดยไม่เสียค่าใช้จ่าย',
    summary_en: 'Sample text pending update: Volunteer optometrists and club members provided free vision screenings and prescription eyeglasses to local seniors.',
    content_th: 'เนื้อหาข่าวตัวอย่างสำหรับรอแก้ไขโดยผู้ดูแลระบบ: ตามพันธกิจด้านสายตาของสโมสรไลออนส์สากล สโมสรไลออนส์ตลาดเขตได้ลงพื้นที่ให้บริการตรวจวัดสายตาแก่ผู้สูงอายุและนักเรียนในพื้นที่ตำบลตลาดเขต',
    content_en: 'Sample content awaiting administrator update: In alignment with Lions Clubs International vision initiatives, our club organized free eye care services in Taladkhet.',
    category: 'service',
    cover_image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
    published_date: '2026-09-22',
    is_published: true
  }
];

const INITIAL_ACTIVITIES = [
  {
    id: 'act-1',
    title_th: '[ข้อมูลตัวอย่างรอแก้ไข] โครงการมอบทุนการศึกษาและอุปกรณ์การเรียนแก่นักเรียนในอำเภอพนมทวน',
    title_en: '[Sample Placeholder] Youth Scholarship & Educational Supplies Drive in Phanom Thuan',
    description_th: 'รายละเอียดกิจกรรมตัวอย่างสำหรับรอแก้ไข: สนับสนุนทุนการศึกษา ชุดนักเรียน และอุปกรณ์กีฬาให้แก่โรงเรียนในเขตพื้นที่ตำบลตลาดเขต จังหวัดกาญจนบุรี',
    description_en: 'Sample activity description pending update: Providing scholarships, school uniforms, and sports equipment to local schools in Taladkhet.',
    location_th: 'ตำบลตลาดเขต อำเภอพนมทวน จังหวัดกาญจนบุรี (รอระบุสถานที่จริง)',
    location_en: 'Taladkhet, Phanom Thuan, Kanchanaburi (Pending exact venue)',
    event_date: '2026-12-05',
    status: 'upcoming',
    beneficiaries_count: 120,
    cover_image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'act-2',
    title_th: '[ข้อมูลตัวอย่างรอแก้ไข] กิจกรรมบริจาคโลหิตและถุงยังชีพช่วยเหลือผู้ประสบภัย',
    title_en: '[Sample Placeholder] Community Blood Drive & Relief Package Distribution',
    description_th: 'รายละเอียดกิจกรรมตัวอย่างสำหรับรอแก้ไข: ร่วมกับเหล่ากาชาดจังหวัดกาญจนบุรี จัดกิจกรรมรับบริจาคโลหิตและมอบถุงยังชีพให้แก่ครอบครัวกลุ่มเปราะบาง',
    description_en: 'Sample activity description pending update: Partnering with Kanchanaburi Red Cross to organize a blood drive and distribute relief kits.',
    location_th: 'ศาลาประชาคมตลาดเขต จังหวัดกาญจนบุรี (รอระบุสถานที่จริง)',
    location_en: 'Taladkhet Community Hall, Kanchanaburi (Pending exact venue)',
    event_date: '2026-08-12',
    status: 'completed',
    beneficiaries_count: 250,
    cover_image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1000&q=80'
  }
];

const INITIAL_MEMBERS = [
  {
    id: 'mem-1',
    name_th: 'ไลออน [ระบุชื่อ-นามสกุลจริง] (ข้อมูลรอแก้ไข)',
    name_en: 'Lion [Official Full Name] (Pending Update)',
    role_th: 'นายกสโมสร (Club President)',
    role_en: 'Club President',
    member_type: 'board',
    lion_year: '2026–2027',
    display_order: 1,
    photo_url: ''
  },
  {
    id: 'mem-2',
    name_th: 'ไลออน [ระบุชื่อ-นามสกุลจริง] (ข้อมูลรอแก้ไข)',
    name_en: 'Lion [Official Full Name] (Pending Update)',
    role_th: 'เลขาธิการสโมสร (Club Secretary)',
    role_en: 'Club Secretary',
    member_type: 'board',
    lion_year: '2026–2027',
    display_order: 2,
    photo_url: ''
  },
  {
    id: 'mem-3',
    name_th: 'ไลออน [ระบุชื่อ-นามสกุลจริง] (ข้อมูลรอแก้ไข)',
    name_en: 'Lion [Official Full Name] (Pending Update)',
    role_th: 'เหรัญญิกสโมสร (Club Treasurer)',
    role_en: 'Club Treasurer',
    member_type: 'board',
    lion_year: '2026–2027',
    display_order: 3,
    photo_url: ''
  },
  {
    id: 'mem-4',
    name_th: 'ไลออน [ระบุชื่อ-นามสกุลจริง] (ข้อมูลรอแก้ไข)',
    name_en: 'Lion [Official Full Name] (Pending Update)',
    role_th: 'ประธานฝ่ายบริการ (Service Chairperson)',
    role_en: 'Service Chairperson',
    member_type: 'board',
    lion_year: '2026–2027',
    display_order: 4,
    photo_url: ''
  },
  {
    id: 'mem-5',
    name_th: 'ไลออน [ระบุรายชื่อสมาชิกสามัญ] (ข้อมูลรอแก้ไข)',
    name_en: 'Lion [Club Member Name] (Pending Update)',
    role_th: 'สมาชิกสามัญ (Active Member)',
    role_en: 'Active Member',
    member_type: 'member',
    lion_year: '2026–2027',
    display_order: 10,
    photo_url: ''
  }
];

const INITIAL_GALLERY = [
  {
    id: 'gal-1',
    title_th: '[ภาพตัวอย่างรอแก้ไข] กิจกรรมบริการชุมชนตลาดเขต',
    title_en: '[Sample Image] Taladkhet Community Service',
    album_name: 'กิจกรรมเพื่อสังคม',
    image_url: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=80',
    taken_date: '2026-09-10'
  },
  {
    id: 'gal-2',
    title_th: '[ภาพตัวอย่างรอแก้ไข] โครงการสนับสนุนเยาวชนและโรงเรียน',
    title_en: '[Sample Image] Youth & School Support Project',
    album_name: 'โครงการเยาวชน',
    image_url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80',
    taken_date: '2026-08-20'
  },
  {
    id: 'gal-3',
    title_th: '[ภาพตัวอย่างรอแก้ไข] การประชุมสามัญประจำเดือนสโมสร',
    title_en: '[Sample Image] Monthly Club General Meeting',
    album_name: 'กิจกรรมสโมสร',
    image_url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80',
    taken_date: '2026-07-15'
  }
];

const INITIAL_ADMINS = [
  {
    id: 'adm-1',
    email: 'president@lionstaladkhet.org',
    full_name_th: 'ผู้ดูแลระบบหลัก (นายกสโมสร)',
    full_name_en: 'Primary Admin (Club President)',
    position_th: 'นายกสโมสร',
    position_en: 'Club President',
    role: 'super_admin',
    is_active: true
  },
  {
    id: 'adm-2',
    email: 'secretary@lionstaladkhet.org',
    full_name_th: 'ผู้ดูแลระบบ (เลขาธิการสโมสร)',
    full_name_en: 'Admin (Club Secretary)',
    position_th: 'เลขาธิการสโมสร',
    position_en: 'Club Secretary',
    role: 'super_admin',
    is_active: true
  },
  {
    id: 'adm-3',
    email: 'pr@lionstaladkhet.org',
    full_name_th: 'เจ้าหน้าที่ฝ่ายประชาสัมพันธ์',
    full_name_en: 'Public Relations Officer',
    position_th: 'ฝ่ายประชาสัมพันธ์',
    position_en: 'PR Chairperson',
    role: 'editor',
    is_active: true
  }
];

// ============================================================================
// 4. MAIN APPLICATION COMPONENT
// ============================================================================
export default function App() {
  const [lang, setLang] = useState('th');
  const [activePage, setActivePage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [news, setNews] = useState(() => {
    const saved = localStorage.getItem('lions_tk_news');
    return saved ? JSON.parse(saved) : INITIAL_NEWS;
  });
  const [activities, setActivities] = useState(() => {
    const saved = localStorage.getItem('lions_tk_activities');
    return saved ? JSON.parse(saved) : INITIAL_ACTIVITIES;
  });
  const [members, setMembers] = useState(() => {
    const saved = localStorage.getItem('lions_tk_members');
    return saved ? JSON.parse(saved) : INITIAL_MEMBERS;
  });
  const [gallery, setGallery] = useState(() => {
    const saved = localStorage.getItem('lions_tk_gallery');
    return saved ? JSON.parse(saved) : INITIAL_GALLERY;
  });
  const [admins, setAdmins] = useState(() => {
    const saved = localStorage.getItem('lions_tk_admins');
    return saved ? JSON.parse(saved) : INITIAL_ADMINS;
  });
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('lions_tk_messages');
    return saved ? JSON.parse(saved) : [];
  });

  const [currentUser, setCurrentUser] = useState(() => {
    const saved = sessionStorage.getItem('lions_tk_session');
    return saved ? JSON.parse(saved) : null;
  });
  const [adminTab, setAdminTab] = useState('news');
  const [loginEmail, setLoginEmail] = useState('president@lionstaladkhet.org');
  const [loginPassword, setLoginPassword] = useState('Lions@310D');
  const [loginError, setLoginError] = useState('');
  const [toast, setToast] = useState(null);

  const [sbConfig, setSbConfig] = useState(() => {
    const saved = localStorage.getItem('lions_taladkhet_supabase_cfg');
    return saved ? JSON.parse(saved) : { url: '', anonKey: '' };
  });

  const t = TRANSLATIONS[lang];

  const notify = (msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 4000);
  };

  useEffect(() => {
    localStorage.setItem('lions_tk_news', JSON.stringify(news));
  }, [news]);
  useEffect(() => {
    localStorage.setItem('lions_tk_activities', JSON.stringify(activities));
  }, [activities]);
  useEffect(() => {
    localStorage.setItem('lions_tk_members', JSON.stringify(members));
  }, [members]);
  useEffect(() => {
    localStorage.setItem('lions_tk_gallery', JSON.stringify(gallery));
  }, [gallery]);
  useEffect(() => {
    localStorage.setItem('lions_tk_admins', JSON.stringify(admins));
  }, [admins]);
  useEffect(() => {
    localStorage.setItem('lions_tk_messages', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) return;
    const loadFromSupabase = async () => {
      try {
        const [nRes, aRes, mRes, gRes] = await Promise.all([
          supabase.from('news_posts').select('*').order('published_date', { ascending: false }),
          supabase.from('activities').select('*').order('event_date', { ascending: false }),
          supabase.from('club_members').select('*').order('display_order', { ascending: true }),
          supabase.from('gallery_items').select('*').order('taken_date', { ascending: false })
        ]);
        if (nRes.data?.length) setNews(nRes.data);
        if (aRes.data?.length) setActivities(aRes.data);
        if (mRes.data?.length) setMembers(mRes.data);
        if (gRes.data?.length) setGallery(gRes.data);
      } catch (err) {
        console.error('Supabase fetch error:', err);
      }
    };
    loadFromSupabase();
  }, []);

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setLoginError('');

    if (isSupabaseConfigured && supabase) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: loginEmail,
        password: loginPassword
      });
      if (error) {
        setLoginError(
          lang === 'th'
            ? `เข้าสู่ระบบไม่สำเร็จ: ${error.message}`
            : `Authentication failed: ${error.message}`
        );
        return;
      }
      const matchedAdmin = admins.find((a) => a.email === loginEmail) || {
        email: data.user.email,
        full_name_th: data.user.email,
        full_name_en: data.user.email,
        role: 'super_admin'
      };
      setCurrentUser(matchedAdmin);
      sessionStorage.setItem('lions_tk_session', JSON.stringify(matchedAdmin));
      notify(lang === 'th' ? 'เข้าสู่ระบบฐานข้อมูลจริงสำเร็จ' : 'Signed in to live Supabase database');
      return;
    }

    const found = admins.find(
      (a) => a.email.toLowerCase() === loginEmail.trim().toLowerCase() && a.is_active
    );
    if (found && loginPassword.length >= 6) {
      setCurrentUser(found);
      sessionStorage.setItem('lions_tk_session', JSON.stringify(found));
      notify(
        lang === 'th'
          ? `ยินดีต้อนรับ ${found.full_name_th}`
          : `Welcome back, ${found.full_name_en}`
      );
    } else {
      setLoginError(
        lang === 'th'
          ? 'อีเมลไม่พบในรายชื่อผู้ดูแลที่เปิดใช้งาน หรือรหัสผ่านไม่ถูกต้อง'
          : 'Invalid administrator credentials or inactive account.'
      );
    }
  };

  const handleLogout = async () => {
    if (isSupabaseConfigured && supabase) {
      await supabase.auth.signOut();
    }
    setCurrentUser(null);
    sessionStorage.removeItem('lions_tk_session');
    setActivePage('home');
    notify(lang === 'th' ? 'ออกจากระบบอย่างปลอดภัยแล้ว' : 'Logged out securely');
  };

  const canManage = (module) => {
    if (!currentUser) return false;
    if (currentUser.role === 'super_admin') return true;
    if (currentUser.role === 'editor' && ['news', 'activities'].includes(module)) return true;
    if (currentUser.role === 'media_manager' && ['gallery'].includes(module)) return true;
    return false;
  };

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'vision', label: t.nav.vision },
    { id: 'members', label: t.nav.members },
    { id: 'news', label: t.nav.news },
    { id: 'activities', label: t.nav.activities },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'contact', label: t.nav.contact }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      {toast && (
        <div
          className={`fixed bottom-5 right-5 z-50 flex items-center gap-2.5 px-5 py-3.5 rounded-lg shadow-xl border text-sm font-medium transition-all ${
            toast.type === 'error'
              ? 'bg-red-900 text-white border-red-700'
              : 'bg-[#091947] text-amber-300 border-amber-500/50'
          }`}
        >
          <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
          <span>{toast.msg}</span>
        </div>
      )}

      <div className="bg-[#061133] text-amber-300/95 border-b border-amber-500/30 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="font-semibold tracking-wider uppercase text-amber-400">
              {t.motto}
            </span>
            <span className="hidden sm:inline text-slate-400">|</span>
            <span className="hidden sm:inline text-slate-300">
              Lions Clubs International • Multiple District 310 Thailand
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium ${
                isSupabaseConfigured
                  ? 'bg-emerald-950/90 text-emerald-300 border border-emerald-600/40'
                  : 'bg-amber-950/80 text-amber-200 border border-amber-500/40'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isSupabaseConfigured ? 'bg-emerald-400' : 'bg-amber-400'
                }`}
              />
              {isSupabaseConfigured
                ? lang === 'th'
                  ? 'เชื่อมต่อฐานข้อมูล Supabase จริงแล้ว'
                  : 'Supabase Live Connected'
                : lang === 'th'
                ? 'โหมดพร้อมติดตั้ง (Local Storage)'
                : 'Ready Mode (Local Storage)'}
            </span>

            <button
              onClick={() => setLang(lang === 'th' ? 'en' : 'th')}
              className="inline-flex items-center gap-1.5 bg-[#0F296E] hover:bg-blue-800 text-white px-3 py-1 rounded border border-amber-400/50 transition font-medium"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'th' ? 'English' : 'ภาษาไทย'}</span>
            </button>

            <button
              onClick={() => setActivePage('admin')}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded font-semibold transition ${
                activePage === 'admin'
                  ? 'bg-amber-500 text-[#091947]'
                  : 'bg-amber-400/15 hover:bg-amber-400/25 text-amber-300 border border-amber-400/40'
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>{currentUser ? 'Dashboard' : t.nav.admin}</span>
            </button>
          </div>
        </div>
      </div>

      <header className="bg-gradient-to-r from-[#091947] via-[#0F296E] to-[#091947] text-white border-b-4 border-amber-500 shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3.5">
            <button
              onClick={() => setActivePage('home')}
              className="flex items-center gap-3.5 text-left group"
            >
              <LionsOfficialEmblem
                size={58}
                className="shrink-0 drop-shadow-md group-hover:scale-105 transition-transform"
              />
              <div>
                <h1
                  className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug"
                  style={{ fontFamily: "'Noto Serif Thai', serif" }}
                >
                  {t.clubName}
                </h1>
                <p className="text-xs sm:text-sm text-amber-300 font-medium">
                  {t.clubSub}
                </p>
              </div>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-amber-300 hover:bg-blue-900/60 border border-amber-400/30"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <nav className="hidden lg:flex items-center gap-1 pb-2.5 pt-1 border-t border-blue-800/70">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`px-3.5 py-2 rounded-md text-sm font-medium transition-all ${
                  activePage === item.id
                    ? 'bg-amber-500 text-[#091947] font-bold shadow-sm'
                    : 'text-slate-100 hover:bg-blue-900/80 hover:text-amber-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#091947] border-t border-amber-500/30 px-4 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActivePage(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2.5 rounded-md text-sm font-medium ${
                  activePage === item.id
                    ? 'bg-amber-500 text-[#091947] font-bold'
                    : 'text-slate-100 hover:bg-blue-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {activePage !== 'admin' && (
        <div className="bg-amber-50 border-b border-amber-200 text-amber-900 text-xs sm:text-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>{t.sampleNotice}</span>
            </div>
            <button
              onClick={() => setActivePage('admin')}
              className="shrink-0 underline font-semibold text-[#0F296E] hover:text-blue-700"
            >
              {lang === 'th' ? 'จัดการข้อมูล →' : 'Edit Data →'}
            </button>
          </div>
        </div>
      )}

      <main className="flex-1">
        {activePage === 'home' && (
          <div>
            <section className="relative bg-[#091947] text-white overflow-hidden border-b-4 border-amber-500">
              <div
                className="absolute inset-0 opacity-20 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80')"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#061133]/95 via-[#091947]/90 to-[#0F296E]/80" />

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
                <div className="grid lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-8 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-medium">
                      <Award className="w-4 h-4 text-amber-400" />
                      <span>{t.hero.badge}</span>
                    </div>

                    <h2
                      className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white"
                      style={{ fontFamily: "'Noto Serif Thai', serif" }}
                    >
                      {t.hero.title}
                    </h2>

                    <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-3xl">
                      {t.hero.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-2">
                      <button
                        onClick={() => setActivePage('activities')}
                        className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#091947] font-bold px-6 py-3.5 rounded-lg shadow-lg transition"
                      >
                        <HeartHandshake className="w-5 h-5" />
                        <span>{t.hero.btnActivities}</span>
                      </button>
                      <button
                        onClick={() => setActivePage('contact')}
                        className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-amber-300/50 font-semibold px-6 py-3.5 rounded-lg transition"
                      >
                        <Phone className="w-5 h-5 text-amber-300" />
                        <span>{t.hero.btnContact}</span>
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex justify-center">
                    <div className="bg-white/5 backdrop-blur-sm border-2 border-amber-400/50 rounded-2xl p-8 text-center shadow-2xl max-w-sm w-full">
                      <LionsOfficialEmblem size={132} className="mx-auto mb-4" />
                      <div className="text-amber-400 font-bold tracking-widest text-sm uppercase">
                        WE SERVE
                      </div>
                      <div className="text-white font-bold text-lg mt-1">
                        {t.clubName}
                      </div>
                      <div className="text-slate-300 text-xs mt-1">
                        District 310 D • Kanchanaburi, Thailand
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
              <div className="text-center mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
                  Lions Clubs International
                </span>
                <h3
                  className="text-2xl sm:text-3xl font-bold text-[#091947] mt-1"
                  style={{ fontFamily: "'Noto Serif Thai', serif" }}
                >
                  {t.sections.pillarsTitle}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                {[
                  {
                    th: 'ด้านสายตา (Vision)',
                    en: 'Vision Care',
                    descTh: 'ป้องกันตาบอดและมอบแว่นสายตาแก่ผู้ขาดแคลน',
                    descEn: 'Preventing avoidable blindness and improving vision.'
                  },
                  {
                    th: 'ด้านเยาวชน (Youth)',
                    en: 'Youth Empowerment',
                    descTh: 'มอบทุนการศึกษาและพัฒนาศักยภาพเยาวชน',
                    descEn: 'Supporting education and youth leadership.'
                  },
                  {
                    th: 'บรรเทาความหิวโหย',
                    en: 'Hunger Relief',
                    descTh: 'ช่วยเหลืออาหารและเครื่องอุปโภคแก่กลุ่มเปราะบาง',
                    descEn: 'Ensuring community access to nutritious food.'
                  },
                  {
                    th: 'ด้านสิ่งแวดล้อม',
                    en: 'Environment',
                    descTh: 'อนุรักษ์ทรัพยากรธรรมชาติและชุมชนน่าอยู่',
                    descEn: 'Protecting and restoring local ecosystems.'
                  },
                  {
                    th: 'โรคเบาหวานและสาธารณสุข',
                    en: 'Diabetes & Health',
                    descTh: 'ส่งเสริมสุขภาพและคัดกรองโรคเรื้อรังในชุมชน',
                    descEn: 'Reducing diabetes prevalence and supporting health.'
                  }
                ].map((pillar, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-6 border-t-4 border-[#0F296E] shadow-sm hover:shadow-md transition"
                  >
                    <div className="w-9 h-9 rounded-full bg-amber-100 text-[#091947] font-bold flex items-center justify-center mb-3">
                      {idx + 1}
                    </div>
                    <h4 className="font-bold text-[#091947] text-base">
                      {lang === 'th' ? pillar.th : pillar.en}
                    </h4>
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                      {lang === 'th' ? pillar.descTh : pillar.descEn}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white border-y border-slate-200 py-14">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-8">
                  <h3
                    className="text-2xl font-bold text-[#091947]"
                    style={{ fontFamily: "'Noto Serif Thai', serif" }}
                  >
                    {t.sections.latestNews}
                  </h3>
                  <button
                    onClick={() => setActivePage('news')}
                    className="text-sm font-semibold text-[#0F296E] hover:text-amber-700 inline-flex items-center gap-1"
                  >
                    <span>{lang === 'th' ? 'ดูข่าวทั้งหมด' : 'View All News'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {news.slice(0, 2).map((item) => (
                    <article
                      key={item.id}
                      className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 flex flex-col"
                    >
                      {item.cover_image && (
                        <img
                          src={item.cover_image}
                          alt={lang === 'th' ? item.title_th : item.title_en}
                          className="w-full h-52 object-cover"
                        />
                      )}
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="text-xs font-semibold text-amber-700 mb-2 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.published_date}</span>
                        </div>
                        <h4 className="text-lg font-bold text-[#091947] mb-2">
                          {lang === 'th' ? item.title_th : item.title_en}
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed flex-1">
                          {lang === 'th' ? item.summary_th : item.summary_en}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {activePage === 'about' && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-slate-200">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-8 border-b border-slate-200">
                <LionsOfficialEmblem size={88} />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                    Lions Clubs International • District 310 D
                  </span>
                  <h2
                    className="text-2xl sm:text-3xl font-bold text-[#091947] mt-1"
                    style={{ fontFamily: "'Noto Serif Thai', serif" }}
                  >
                    {lang === 'th'
                      ? 'ประวัติและความเป็นมาของสโมสรไลออนส์ตลาดเขต จังหวัดกาญจนบุรี'
                      : 'History & Heritage of Lions Club of Taladkhet Kanchanaburi'}
                  </h2>
                </div>
              </div>

              <div className="prose max-w-none mt-8 space-y-5 text-slate-700 leading-relaxed">
                <p>
                  {lang === 'th'
                    ? 'สโมสรไลออนส์สากล (Lions Clubs International) ก่อตั้งขึ้นในปี พ.ศ. 2460 (ค.ศ. 1917) โดย เมลวิน โจนส์ (Melvin Jones) ณ เมืองชิคาโก สหรัฐอเมริกา โดยมีอุดมการณ์หลักคือ "เราให้บริการ" (We Serve) ปัจจุบันเป็นองค์กรสโมสรบำเพ็ญประโยชน์ที่ใหญ่ที่สุดในโลก มีสมาชิกกว่า 1.4 ล้านคนในกว่า 200 ประเทศและเขตการปกครอง'
                    : 'Founded in 1917 by Melvin Jones in Chicago, Lions Clubs International has grown into the world’s largest service club organization with over 1.4 million members across more than 200 countries under the motto "We Serve".'}
                </p>

                <div className="bg-blue-50/70 border-l-4 border-[#0F296E] p-5 rounded-r-lg">
                  <h3 className="font-bold text-[#091947] text-lg mb-2">
                    {lang === 'th'
                      ? 'การก่อตั้งสโมสรไลออนส์ตลาดเขต จังหวัดกาญจนบุรี (ข้อมูลรอเติมรายละเอียดประวัติจริง)'
                      : 'Establishment of Lions Club of Taladkhet Kanchanaburi (Pending Official Charter Details)'}
                  </h3>
                  <p className="text-sm text-slate-700">
                    {lang === 'th'
                      ? '[พื้นที่สำหรับระบุประวัติการก่อตั้งสโมสรจริง: เช่น วันที่ได้รับสารตราตั้ง (Charter Date), สโมสรผู้อุปถัมภ์ (Sponsoring Club), รายนามนายกก่อตั้ง และความเป็นมาของการรวมตัวกันของผู้นำชุมชนในตำบลตลาดเขต อำเภอพนมทวน จังหวัดกาญจนบุรี เพื่อบำเพ็ญสาธารณประโยชน์แก่ท้องถิ่น]'
                      : '[Placeholder for Official Club Charter History: Charter Date, Sponsoring Club, Charter President, and founding members in Taladkhet, Phanom Thuan District, Kanchanaburi.]'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activePage === 'vision' && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#091947] text-white rounded-2xl p-8 shadow-md border-t-4 border-amber-400">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                  OUR VISION
                </span>
                <h2
                  className="text-2xl font-bold mt-2 mb-4"
                  style={{ fontFamily: "'Noto Serif Thai', serif" }}
                >
                  {lang === 'th' ? 'วิสัยทัศน์ (Vision)' : 'Global & Club Vision'}
                </h2>
                <p className="text-slate-200 leading-relaxed">
                  {lang === 'th'
                    ? 'เป็นผู้นำระดับสากลในการบริการชุมชนและงานด้านมนุษยธรรม มุ่งสร้างความเข้มแข็งและยกระดับคุณภาพชีวิตของประชาชนในพื้นที่ตำบลตลาดเขต อำเภอพนมทวน และจังหวัดกาญจนบุรีอย่างยั่งยืน'
                    : 'To be the global leader in community and humanitarian service, empowering and uplifting communities across Taladkhet, Phanom Thuan, and Kanchanaburi Province.'}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 border-t-4 border-[#0F296E]">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
                  OUR MISSION
                </span>
                <h2
                  className="text-2xl font-bold text-[#091947] mt-2 mb-4"
                  style={{ fontFamily: "'Noto Serif Thai', serif" }}
                >
                  {lang === 'th' ? 'พันธกิจ (Mission)' : 'Club Mission'}
                </h2>
                <ul className="space-y-3 text-slate-700 text-sm leading-relaxed">
                  <li>
                    •{' '}
                    {lang === 'th'
                      ? 'ส่งเสริมให้สมาชิกและอาสาสมัครร่วมกันบำเพ็ญประโยชน์ต่อชุมชนด้วยความเสียสละและโปร่งใส'
                      : 'Empower Lions clubs, volunteers, and partners to improve health and well-being.'}
                  </li>
                  <li>
                    •{' '}
                    {lang === 'th'
                      ? 'จัดหาความช่วยเหลือด้านสายตา การศึกษา เยาวชน และสาธารณสุขแก่ผู้ด้อยโอกาสในท้องถิ่น'
                      : 'Support those in need through humanitarian services and grants that impact lives.'}
                  </li>
                  <li>
                    •{' '}
                    {lang === 'th'
                      ? 'ส่งเสริมสันติภาพและความเข้าใจอันดีระหว่างประชาชนในสังคมตามจรรยาบรรณไลออนส์สากล'
                      : 'Encourage peace and international understanding through Lions Clubs International.'}
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <h3
                className="text-xl font-bold text-[#091947] mb-4"
                style={{ fontFamily: "'Noto Serif Thai', serif" }}
              >
                {lang === 'th'
                  ? 'วัตถุประสงค์ของสโมสรไลออนส์สากล (Lions Clubs Purposes)'
                  : 'Lions Clubs International Purposes'}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-700">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <strong>1.</strong>{' '}
                  {lang === 'th'
                    ? 'ก่อตั้ง ดูแล และควบคุมสโมสรบริการที่เรียกว่า สโมสรไลออนส์'
                    : 'To organize, charter and supervise service clubs to be known as Lions clubs.'}
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <strong>2.</strong>{' '}
                  {lang === 'th'
                    ? 'ประสานกิจกรรมและสร้างมาตรฐานการบริหารงานของสโมสรไลออนส์ให้เป็นหนึ่งเดียว'
                    : 'To coordinate the activities and standardize the administration of Lions clubs.'}
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <strong>3.</strong>{' '}
                  {lang === 'th'
                    ? 'สร้างและส่งเสริมจิตวิญญาณแห่งความเข้าใจอันดีระหว่างประชาชนในโลก'
                    : 'To create and foster a spirit of understanding among the peoples of the world.'}
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <strong>4.</strong>{' '}
                  {lang === 'th'
                    ? 'ส่งเสริมหลักการปกครองที่ดีและการเป็นพลเมืองที่ดีของสังคม'
                    : 'To promote the principles of good government and good citizenship.'}
                </div>
              </div>
            </div>
          </div>
        )}

        {activePage === 'members' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
            <div>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#091947] mb-2"
                style={{ fontFamily: "'Noto Serif Thai', serif" }}
              >
                {t.sections.boardTitle}
              </h2>
              <p className="text-sm text-slate-600 mb-6">
                {lang === 'th'
                  ? 'ทำเนียบคณะกรรมการบริหารสโมสรไลออนส์ตลาดเขต จังหวัดกาญจนบุรี (สามารถแก้ไขรายชื่อและเพิ่มรูปภาพจริงได้ในระบบผู้ดูแล)'
                  : 'Executive Board of Directors (Names and portraits can be updated via the Admin Dashboard)'}
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {members
                  .filter((m) => m.member_type === 'board')
                  .map((m) => (
                    <div
                      key={m.id}
                      className="bg-white rounded-xl p-6 border border-slate-200 border-t-4 border-amber-500 shadow-sm text-center"
                    >
                      {m.photo_url ? (
                        <img
                          src={m.photo_url}
                          alt={m.name_th}
                          className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-[#0F296E]"
                        />
                      ) : (
                        <div className="w-24 h-24 rounded-full bg-blue-50 border-2 border-[#0F296E]/30 flex items-center justify-center mx-auto mb-4">
                          <LionsOfficialEmblem size={54} />
                        </div>
                      )}
                      <span className="inline-block px-3 py-1 rounded-full bg-[#091947] text-amber-300 text-xs font-semibold mb-2">
                        {lang === 'th' ? m.role_th : m.role_en}
                      </span>
                      <h3 className="font-bold text-slate-900 text-base">
                        {lang === 'th' ? m.name_th : m.name_en}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Lionistic Year {m.lion_year}
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3
                className="text-xl font-bold text-[#091947] mb-4"
                style={{ fontFamily: "'Noto Serif Thai', serif" }}
              >
                {t.sections.membersTitle}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#091947] text-white">
                      <th className="py-3 px-4 rounded-tl-lg">#</th>
                      <th className="py-3 px-4">
                        {lang === 'th' ? 'ชื่อ - นามสกุล' : 'Member Name'}
                      </th>
                      <th className="py-3 px-4">
                        {lang === 'th' ? 'ตำแหน่ง / สถานะ' : 'Role / Status'}
                      </th>
                      <th className="py-3 px-4 rounded-tr-lg">
                        {lang === 'th' ? 'ปีบริหาร' : 'Lionistic Year'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {members.map((m, idx) => (
                      <tr key={m.id} className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-medium text-slate-500">{idx + 1}</td>
                        <td className="py-3 px-4 font-semibold text-slate-900">
                          {lang === 'th' ? m.name_th : m.name_en}
                        </td>
                        <td className="py-3 px-4 text-slate-700">
                          {lang === 'th' ? m.role_th : m.role_en}
                        </td>
                        <td className="py-3 px-4 text-slate-500">{m.lion_year}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activePage === 'news' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#091947] mb-8"
              style={{ fontFamily: "'Noto Serif Thai', serif" }}
            >
              {t.nav.news}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((item) => (
                <article
                  key={item.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 flex flex-col"
                >
                  {item.cover_image && (
                    <img
                      src={item.cover_image}
                      alt={lang === 'th' ? item.title_th : item.title_en}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-xs font-semibold text-amber-700 mb-2 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.published_date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#091947] mb-2">
                      {lang === 'th' ? item.title_th : item.title_en}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">
                      {lang === 'th' ? item.content_th : item.content_en}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {activePage === 'activities' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#091947] mb-8"
              style={{ fontFamily: "'Noto Serif Thai', serif" }}
            >
              {t.sections.upcomingActivities}
            </h2>
            <div className="space-y-6">
              {activities.map((act) => (
                <div
                  key={act.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 grid md:grid-cols-12"
                >
                  <div className="md:col-span-4 bg-slate-100">
                    {act.cover_image ? (
                      <img
                        src={act.cover_image}
                        alt={lang === 'th' ? act.title_th : act.title_en}
                        className="w-full h-full min-h-[220px] object-cover"
                      />
                    ) : (
                      <div className="w-full h-full min-h-[220px] flex items-center justify-center">
                        <LionsOfficialEmblem size={72} />
                      </div>
                    )}
                  </div>
                  <div className="md:col-span-8 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            act.status === 'upcoming'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-emerald-100 text-emerald-800'
                          }`}
                        >
                          {act.status === 'upcoming'
                            ? lang === 'th'
                              ? 'โครงการที่กำลังจะจัดขึ้น'
                              : 'Upcoming Project'
                            : lang === 'th'
                            ? 'ดำเนินการเสร็จสิ้นแล้ว'
                            : 'Completed Service'}
                        </span>
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {act.event_date}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-[#091947] mb-2">
                        {lang === 'th' ? act.title_th : act.title_en}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        {lang === 'th' ? act.description_th : act.description_en}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 text-xs text-slate-600">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-[#0F296E]" />
                        <span>{lang === 'th' ? act.location_th : act.location_en}</span>
                      </div>
                      <div className="font-semibold text-[#091947]">
                        {lang === 'th'
                          ? `ผู้ได้รับประโยชน์โดยประมาณ: ${act.beneficiaries_count} คน`
                          : `Estimated Beneficiaries: ${act.beneficiaries_count} People`}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activePage === 'gallery' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#091947] mb-8"
              style={{ fontFamily: "'Noto Serif Thai', serif" }}
            >
              {t.sections.galleryTitle}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((img) => (
                <div
                  key={img.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 group"
                >
                  <div className="aspect-video overflow-hidden bg-slate-100">
                    <img
                      src={img.image_url}
                      alt={lang === 'th' ? img.title_th : img.title_en}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-[11px] font-bold uppercase text-amber-700">
                      {img.album_name} • {img.taken_date}
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm mt-1">
                      {lang === 'th' ? img.title_th : img.title_en}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activePage === 'contact' && (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5 bg-[#091947] text-white rounded-2xl p-8 space-y-6">
                <LionsOfficialEmblem size={68} />
                <h2
                  className="text-2xl font-bold"
                  style={{ fontFamily: "'Noto Serif Thai', serif" }}
                >
                  {t.sections.contactTitle}
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {lang === 'th'
                    ? 'ติดต่อประสานงานขอรับความช่วยเหลือสาธารณประโยชน์ ร่วมเป็นจิตอาสา หรือสอบถามข้อมูลกิจกรรมของสโมสรไลออนส์ตลาดเขต จังหวัดกาญจนบุรี'
                    : 'Reach out to coordinate humanitarian assistance, volunteer opportunities, or club inquiries.'}
                </p>

                <div className="space-y-4 text-sm pt-2">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-amber-300">
                        {lang === 'th' ? 'ที่ทำการสโมสร' : 'Club Office Address'}
                      </div>
                      <div className="text-slate-200">
                        {lang === 'th'
                          ? 'ตำบลตลาดเขต อำเภอพนมทวน จังหวัดกาญจนบุรี 71140 (รอระบุเลขที่ตั้งสำนักงานจริง)'
                          : 'Taladkhet, Phanom Thuan District, Kanchanaburi 71140, Thailand'}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-amber-300">
                        {lang === 'th' ? 'โทรศัพท์ประสานงาน' : 'Phone'}
                      </div>
                      <div className="text-slate-200">
                        {lang === 'th'
                          ? '[รอระบุหมายเลขโทรศัพท์เลขาธิการสโมสร]'
                          : '[Pending Official Club Phone Number]'}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-amber-300">Email</div>
                      <div className="text-slate-200">contact@lionstaladkhet.org</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                <h3
                  className="text-xl font-bold text-[#091947] mb-6"
                  style={{ fontFamily: "'Noto Serif Thai', serif" }}
                >
                  {lang === 'th'
                    ? 'ส่งข้อความถึงสโมสรไลออนส์ตลาดเขต'
                    : 'Send a Message to Our Club'}
                </h3>

                <ContactForm
                  lang={lang}
                  onSend={async (formData) => {
                    const newMsg = {
                      id: `msg-${Date.now()}`,
                      ...formData,
                      is_read: false,
                      created_at: new Date().toISOString().split('T')[0]
                    };
                    if (isSupabaseConfigured && supabase) {
                      await supabase.from('contact_messages').insert([formData]);
                    }
                    setMessages([newMsg, ...messages]);
                    notify(
                      lang === 'th'
                        ? 'ส่งข้อความถึงสโมสรเรียบร้อยแล้ว'
                        : 'Your message has been sent to the club.'
                    );
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {activePage === 'admin' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {!currentUser ? (
              <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                <div className="bg-[#091947] p-6 text-center text-white border-b-4 border-amber-500">
                  <LionsOfficialEmblem size={64} className="mx-auto mb-3" />
                  <h2 className="text-xl font-bold">
                    {lang === 'th'
                      ? 'ระบบบริหารจัดการเว็บไซต์ (Admin Portal)'
                      : 'Club Administrator Login'}
                  </h2>
                  <p className="text-xs text-amber-300 mt-1">
                    สโมสรไลออนส์ตลาดเขต จังหวัดกาญจนบุรี
                  </p>
                </div>

                <form onSubmit={handleAdminLogin} className="p-6 space-y-4">
                  {loginError && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs">
                      {loginError}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      อีเมลผู้ดูแลระบบ (Administrator Email)
                    </label>
                    <input
                      type="email"
                      required
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#0F296E] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      รหัสผ่าน (Password)
                    </label>
                    <input
                      type="password"
                      required
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#0F296E] outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#091947] hover:bg-[#0F296E] text-amber-300 font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition"
                  >
                    <Lock className="w-4 h-4" />
                    <span>เข้าสู่ระบบหลังบ้าน</span>
                  </button>

                  {!isSupabaseConfigured && (
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 text-[11px] text-slate-700 space-y-1">
                      <div className="font-bold text-[#091947]">
                        บัญชีเริ่มต้นสำหรับทดสอบระบบก่อนเชื่อม Supabase:
                      </div>
                      <div>• สิทธิ์สูงสุด (Super Admin): president@lionstaladkhet.org</div>
                      <div>• สิทธิ์ฝ่ายประชาสัมพันธ์ (Editor): pr@lionstaladkhet.org</div>
                      <div>• รหัสผ่านทดสอบ: Lions@310D</div>
                    </div>
                  )}
                </form>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="bg-[#091947] text-white rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4 border-b-4 border-amber-500">
                  <div className="flex items-center gap-4">
                    <LionsOfficialEmblem size={48} />
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-lg sm:text-xl font-bold">
                          ระบบหลังบ้าน สโมสรไลออนส์ตลาดเขต จังหวัดกาญจนบุรี
                        </h2>
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-[#091947] text-xs font-bold uppercase">
                          {currentUser.role}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 mt-0.5">
                        ผู้ใช้งาน: {currentUser.full_name_th} ({currentUser.email})
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setActivePage('home')}
                      className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold flex items-center gap-1.5"
                    >
                      <Eye className="w-4 h-4 text-amber-300" />
                      <span>ดูหน้าเว็บไซต์จริง</span>
                    </button>
                    <button
                      onClick={handleLogout}
                      className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold flex items-center gap-1.5"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>ออกจากระบบ</span>
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
                  {[
                    { id: 'news', label: '1. จัดการข่าวประชาสัมพันธ์', icon: Newspaper },
                    { id: 'activities', label: '2. จัดการกิจกรรมเพื่อสังคม', icon: HeartHandshake },
                    { id: 'gallery', label: '3. คลังภาพและอัปโหลดรูป', icon: ImageIcon },
                    { id: 'members', label: '4. จัดการคณะกรรมการ/สมาชิก', icon: Users },
                    { id: 'admins', label: `5. ผู้ดูแลระบบ (${admins.length}/10+ คน)`, icon: Shield },
                    { id: 'messages', label: `6. ข้อความติดต่อ (${messages.length})`, icon: Mail },
                    { id: 'database', label: '7. ตั้งค่าฐานข้อมูล Supabase จริง', icon: Database }
                  ].map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setAdminTab(tab.id)}
                        className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition ${
                          adminTab === tab.id
                            ? 'bg-[#091947] text-amber-300 shadow'
                            : 'text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {adminTab === 'news' && (
                  <AdminNewsManager
                    news={news}
                    setNews={setNews}
                    canEdit={canManage('news')}
                    notify={notify}
                  />
                )}

                {adminTab === 'activities' && (
                  <AdminActivitiesManager
                    activities={activities}
                    setActivities={setActivities}
                    canEdit={canManage('activities')}
                    notify={notify}
                  />
                )}

                {adminTab === 'gallery' && (
                  <AdminGalleryManager
                    gallery={gallery}
                    setGallery={setGallery}
                    canEdit={canManage('gallery')}
                    notify={notify}
                  />
                )}

                {adminTab === 'members' && (
                  <AdminMembersManager
                    members={members}
                    setMembers={setMembers}
                    canEdit={currentUser.role === 'super_admin'}
                    notify={notify}
                  />
                )}

                {adminTab === 'admins' && (
                  <AdminUsersManager
                    admins={admins}
                    setAdmins={setAdmins}
                    isSuperAdmin={currentUser.role === 'super_admin'}
                    notify={notify}
                  />
                )}

                {adminTab === 'messages' && (
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-bold text-[#091947] mb-4">
                      กล่องข้อความติดต่อจากบุคคลทั่วไป ({messages.length} รายการ)
                    </h3>
                    {messages.length === 0 ? (
                      <p className="text-sm text-slate-500 py-8 text-center">
                        ยังไม่มีข้อความติดต่อเข้ามาในขณะนี้
                      </p>
                    ) : (
                      <div className="space-y-4">
                        {messages.map((m) => (
                          <div
                            key={m.id}
                            className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row justify-between gap-4"
                          >
                            <div>
                              <div className="font-bold text-[#091947]">{m.subject}</div>
                              <div className="text-xs text-slate-500 mt-0.5">
                                จาก: {m.sender_name} • โทร: {m.sender_phone || '-'} • อีเมล:{' '}
                                {m.sender_email || '-'} ({m.created_at})
                              </div>
                              <p className="text-sm text-slate-700 mt-2">{m.message}</p>
                            </div>
                            <button
                              onClick={() => {
                                setMessages(messages.filter((x) => x.id !== m.id));
                                notify('ลบข้อความเรียบร้อยแล้ว');
                              }}
                              className="self-start text-red-600 hover:bg-red-50 p-2 rounded-lg"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {adminTab === 'database' && (
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-[#091947]">
                        เชื่อมต่อฐานข้อมูล Supabase Free Tier จริง
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">
                        นำค่า Project URL และ anon public key จากหน้า Project Settings &gt; API
                        ของ Supabase มากรอกด้านล่างเพื่อเปลี่ยนจากโหมดทดสอบเป็นฐานข้อมูลจริงออนไลน์ทันที
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Supabase Project URL
                        </label>
                        <input
                          type="url"
                          placeholder="https://xxxxxxxxxxxx.supabase.co"
                          value={sbConfig.url}
                          onChange={(e) => setSbConfig({ ...sbConfig, url: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Supabase Anon Public Key
                        </label>
                        <input
                          type="text"
                          placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                          value={sbConfig.anonKey}
                          onChange={(e) => setSbConfig({ ...sbConfig, anonKey: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm"
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => {
                          localStorage.setItem(
                            'lions_taladkhet_supabase_cfg',
                            JSON.stringify(sbConfig)
                          );
                          notify('บันทึกการตั้งค่าฐานข้อมูลแล้ว กรุณารีเฟรชหน้าเว็บ 1 ครั้ง');
                          setTimeout(() => window.location.reload(), 1200);
                        }}
                        className="bg-[#091947] hover:bg-[#0F296E] text-amber-300 font-bold px-5 py-2.5 rounded-lg text-sm"
                      >
                        บันทึกและเชื่อมต่อฐานข้อมูลจริง
                      </button>

                      <button
                        onClick={() => {
                          localStorage.removeItem('lions_taladkhet_supabase_cfg');
                          setSbConfig({ url: '', anonKey: '' });
                          notify('ล้างค่าการเชื่อมต่อแล้ว');
                          setTimeout(() => window.location.reload(), 1000);
                        }}
                        className="border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold px-4 py-2.5 rounded-lg text-sm"
                      >
                        รีเซ็ตการเชื่อมต่อ
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </main>

      <footer className="bg-[#061133] text-slate-300 border-t-4 border-amber-500 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 pb-8 border-b border-blue-900/60">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <LionsOfficialEmblem size={48} />
                <div>
                  <div className="font-bold text-white text-base">{t.clubName}</div>
                  <div className="text-xs text-amber-400">Lions Clubs International • 310 D</div>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {lang === 'th'
                  ? 'องค์กรสาธารณประโยชน์สากล มุ่งมั่นบำเพ็ญประโยชน์เพื่อสังคมและชุมชนในพื้นที่ตำบลตลาดเขต อำเภอพนมทวน จังหวัดกาญจนบุรี ภายใต้อุดมการณ์ "เราให้บริการ (We Serve)"'
                  : 'An international humanitarian service organization serving Taladkhet, Phanom Thuan District, Kanchanaburi Province under the global motto "We Serve".'}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-3">
                {lang === 'th' ? 'เมนูหลักเว็บไซต์' : 'Quick Navigation'}
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActivePage(item.id)}
                    className="text-left hover:text-amber-300 transition"
                  >
                    • {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-3">
                {lang === 'th' ? 'ระบบบริหารจัดการองค์กร' : 'Club Administration'}
              </h4>
              <p className="text-xs text-slate-400 mb-3">
                {lang === 'th'
                  ? 'สำหรับคณะกรรมการและผู้ดูแลระบบที่ได้รับสิทธิ์ในการเผยแพร่ข่าวสารและกิจกรรมของสโมสร'
                  : 'Authorized access for club officers and appointed web administrators.'}
              </p>
              <button
                onClick={() => setActivePage('admin')}
                className="inline-flex items-center gap-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-400/40 px-4 py-2 rounded-lg text-xs font-semibold"
              >
                <Shield className="w-4 h-4" />
                <span>{t.nav.admin}</span>
              </button>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <div>
              © 2026 สโมสรไลออนส์ตลาดเขต จังหวัดกาญจนบุรี (Lions Club of Taladkhet Kanchanaburi). All Rights Reserved.
            </div>
            <div className="text-amber-400/90 font-semibold">WE SERVE • เราให้บริการ</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ContactForm({ lang, onSend }) {
  const [form, setForm] = useState({
    sender_name: '',
    sender_phone: '',
    sender_email: '',
    subject: '',
    message: ''
  });

  const submit = (e) => {
    e.preventDefault();
    onSend(form);
    setForm({ sender_name: '', sender_phone: '', sender_email: '', subject: '', message: '' });
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            {lang === 'th' ? 'ชื่อ - นามสกุล ผู้ติดต่อ *' : 'Your Full Name *'}
          </label>
          <input
            type="text"
            required
            value={form.sender_name}
            onChange={(e) => setForm({ ...form, sender_name: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            {lang === 'th' ? 'เบอร์โทรศัพท์ติดต่อกลับ' : 'Phone Number'}
          </label>
          <input
            type="tel"
            value={form.sender_phone}
            onChange={(e) => setForm({ ...form, sender_phone: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            {lang === 'th' ? 'อีเมล (ถ้ามี)' : 'Email Address'}
          </label>
          <input
            type="email"
            value={form.sender_email}
            onChange={(e) => setForm({ ...form, sender_email: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            {lang === 'th' ? 'หัวข้อเรื่องที่ติดต่อ *' : 'Subject *'}
          </label>
          <input
            type="text"
            required
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1">
          {lang === 'th' ? 'รายละเอียดข้อความ *' : 'Message *'}
        </label>
        <textarea
          rows={4}
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 bg-[#091947] hover:bg-[#0F296E] text-amber-300 font-bold px-6 py-3 rounded-lg text-sm transition"
      >
        <Send className="w-4 h-4" />
        <span>{lang === 'th' ? 'ส่งข้อความถึงสโมสร' : 'Submit Message'}</span>
      </button>
    </form>
  );
}

function AdminNewsManager({ news, setNews, canEdit, notify }) {
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    title_th: '',
    title_en: '',
    summary_th: '',
    summary_en: '',
    content_th: '',
    content_en: '',
    cover_image: '',
    published_date: new Date().toISOString().split('T')[0]
  });

  if (!canEdit) {
    return (
      <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl text-sm text-amber-900">
        บัญชีของคุณไม่มีสิทธิ์ในการแก้ไขข่าวประชาสัมพันธ์ (ต้องเป็น Super Admin หรือ Editor)
      </div>
    );
  }

  const handleSave = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      title_en: form.title_en || form.title_th,
      summary_en: form.summary_en || form.summary_th,
      content_en: form.content_en || form.content_th,
      is_published: true
    };

    if (editingId) {
      if (isSupabaseConfigured && supabase) {
        await supabase.from('news_posts').update(payload).eq('id', editingId);
      }
      setNews(news.map((n) => (n.id === editingId ? { ...n, ...payload } : n)));
      notify('อัปเดตข่าวประชาสัมพันธ์เรียบร้อยแล้ว');
    } else {
      const newItem = { id: `news-${Date.now()}`, ...payload };
      if (isSupabaseConfigured && supabase) {
        const { data } = await supabase.from('news_posts').insert([payload]).select();
        if (data?.[0]) newItem.id = data[0].id;
      }
      setNews([newItem, ...news]);
      notify('เผยแพร่ข่าวประชาสัมพันธ์ใหม่เรียบร้อยแล้ว');
    }
    setEditingId(null);
    setForm({
      title_th: '',
      title_en: '',
      summary_th: '',
      summary_en: '',
      content_th: '',
      content_en: '',
      cover_image: '',
      published_date: new Date().toISOString().split('T')[0]
    });
  };

  return (
    <div className="space-y-6">
      <form
        onSubmit={handleSave}
        className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4"
      >
        <h3 className="font-bold text-[#091947] text-lg">
          {editingId ? 'แก้ไขข่าวประชาสัมพันธ์' : 'เพิ่มข่าวประชาสัมพันธ์ใหม่ (รองรับ 2 ภาษา)'}
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            required
            placeholder="หัวข้อข่าว (ภาษาไทย) *"
            value={form.title_th}
            onChange={(e) => setForm({ ...form, title_th: e.target.value })}
            className="px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm"
          />
          <input
            type="text"
            placeholder="News Title (English)"
            value={form.title_en}
            onChange={(e) => setForm({ ...form, title_en: e.target.value })}
            className="px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm"
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            required
            placeholder="คำโปรยสั้น (ภาษาไทย) *"
            value={form.summary_th}
            onChange={(e) => setForm({ ...form, summary_th: e.target.value })}
            className="px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm"
          />
          <input
            type="text"
            placeholder="Short Summary (English)"
            value={form.summary_en}
            onChange={(e) => setForm({ ...form, summary_en: e.target.value })}
            className="px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm"
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <textarea
            rows={3}
            required
            placeholder="เนื้อหาข่าวฉบับเต็ม (ภาษาไทย) *"
            value={form.content_th}
            onChange={(e) => setForm({ ...form, content_th: e.target.value })}
            className="px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm"
          />
          <textarea
            rows={3}
            placeholder="Full Content (English)"
            value={form.content_en}
            onChange={(e) => setForm({ ...form, content_en: e.target.value })}
            className="px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm"
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="url"
            placeholder="ลิงก์รูปภาพหน้าปกข่าว (URL)"
            value={form.cover_image}
            onChange={(e) => setForm({ ...form, cover_image: e.target.value })}
            className="px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm"
          />
          <input
            type="date"
            value={form.published_date}
            onChange={(e) => setForm({ ...form, published_date: e.target.value })}
            className="px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm"
          />
        </div>
        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-[#091947] hover:bg-[#0F296E] text-amber-300 font-bold px-5 py-2.5 rounded-lg text-sm flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>{editingId ? 'บันทึกการแก้ไข' : 'เผยแพร่ข่าว'}</span>
          </button>
          {editingId && (
            <button
              type="button"
              onClick={() => setEditingId(null)}
              className="px-4 py-2.5 rounded-lg border border-slate-300 text-sm"
            >
              ยกเลิก
            </button>
          )}
        </div>
      </form>

      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
        <h4 className="font-bold text-[#091947]">รายการข่าวทั้งหมด ({news.length})</h4>
        {news.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-xl border border-slate-200 flex items-center justify-between gap-4"
          >
            <div>
              <div className="font-bold text-slate-900 text-sm">{item.title_th}</div>
              <div className="text-xs text-slate-500">{item.published_date}</div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => {
                  setEditingId(item.id);
                  setForm(item);
                }}
                className="p-2 text-blue-700 hover:bg-blue-50 rounded-lg"
                title="แก้ไข"
              >
                <Edit3 className="w-4 h-4" />
              </button>
              <button
                onClick={async () => {
                  if (isSupabaseConfigured && supabase) {
                    await supabase.from('news_posts').delete().eq('id', item.id);
                  }
                  setNews(news.filter((n) => n.id !== item.id));
                  notify('ลบข่าวเรียบร้อยแล้ว');
                }}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                title="ลบ"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdminActivitiesManager({ activities, setActivities, canEdit, notify }) {
  const [form, setForm] = useState({
    title_th: '',
    title_en: '',
    description_th: '',
    description_en: '',
    location_th: '',
    location_en: '',
    event_date: new Date().toISOString().split('T')[0],
    status: 'upcoming',
    beneficiaries_count: 50,
    cover_image: ''
  });

  if (!canEdit) {
    return (
      <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl text-sm text-amber-900">
        บัญชีของคุณไม่มีสิทธิ์ในการจัดการกิจกรรม
      </div>
    );
  }

  const handleAdd = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      title_en: form.title_en || form.title_th,
      description_en: form.description_en || form.description_th,
      location_en: form.location_en || form.location_th,
      beneficiaries_count: Number(form.beneficiaries_count) || 0
    };
    const newAct = { id: `act-${Date.now()}`, ...payload };
    if (isSupabaseConfigured && supabase) {
      const { data } = await supabase.from('activities').insert([payload]).select();
      if (data?.[0]) newAct.id = data[0].id;
    }
    setActivities([newAct, ...activities]);
    notify('เพิ่มโครงการ/กิจกรรมเพื่อสังคมเรียบร้อยแล้ว');
    setForm({
      title_th: '',
      title_en: '',
      description_th: '',
      description_en: '',
      location_th: '',
      location_en: '',
      event_date: new Date().toISOString().split('T')[0],
      status: 'upcoming',
      beneficiaries_count: 50,
      cover_image: ''
    });
  };

  return (
    <div className="space-y-6">
      <form
        onSubmit={handleAdd}
        className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4"
      >
        <h3 className="font-bold text-[#091947] text-lg">เพิ่มโครงการและกิจกรรมเพื่อสังคม</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            required
            placeholder="ชื่อโครงการ/กิจกรรม (ภาษาไทย) *"
            value={form.title_th}
            onChange={(e) => setForm({ ...form, title_th: e.target.value })}
            className="px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm"
          />
          <input
            type="text"
            placeholder="Project Title (English)"
            value={form.title_en}
            onChange={(e) => setForm({ ...form, title_en: e.target.value })}
            className="px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm"
          />
        </div>
        <textarea
          rows={2}
          required
          placeholder="รายละเอียดกิจกรรม (ภาษาไทย) *"
          value={form.description_th}
          onChange={(e) => setForm({ ...form, description_th: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm"
        />
        <div className="grid sm:grid-cols-3 gap-4">
          <input
            type="text"
            required
            placeholder="สถานที่จัดกิจกรรม *"
            value={form.location_th}
            onChange={(e) => setForm({ ...form, location_th: e.target.value })}
            className="px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm"
          />
          <input
            type="date"
            value={form.event_date}
            onChange={(e) => setForm({ ...form, event_date: e.target.value })}
            className="px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm"
          />
          <select
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
            className="px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm"
          >
            <option value="upcoming">โครงการที่กำลังจะจัดขึ้น</option>
            <option value="completed">ดำเนินการเสร็จสิ้นแล้ว</option>
          </select>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="number"
            placeholder="จำนวนผู้ได้รับประโยชน์ (คน)"
            value={form.beneficiaries_count}
            onChange={(e) => setForm({ ...form, beneficiaries_count: e.target.value })}
            className="px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm"
          />
          <input
            type="url"
            placeholder="ลิงก์รูปภาพกิจกรรม (URL)"
            value={form.cover_image}
            onChange={(e) => setForm({ ...form, cover_image: e.target.value })}
            className="px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm"
          />
        </div>
        <button
          type="submit"
          className="bg-[#091947] hover:bg-[#0F296E] text-amber-300 font-bold px-5 py-2.5 rounded-lg text-sm"
        >
          + บันทึกกิจกรรม
        </button>
      </form>

      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
        <h4 className="font-bold text-[#091947]">รายการกิจกรรมทั้งหมด ({activities.length})</h4>
        {activities.map((a) => (
          <div
            key={a.id}
            className="p-4 rounded-xl border border-slate-200 flex items-center justify-between gap-4"
          >
            <div>
              <div className="font-bold text-slate-900 text-sm">{a.title_th}</div>
              <div className="text-xs text-slate-500">
                {a.event_date} • {a.location_th}
              </div>
            </div>
            <button
              onClick={async () => {
                if (isSupabaseConfigured && supabase) {
                  await supabase.from('activities').delete().eq('id', a.id);
                }
                setActivities(activities.filter((x) => x.id !== a.id));
                notify('ลบกิจกรรมเรียบร้อยแล้ว');
              }}
              className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdminGalleryManager({ gallery, setGallery, canEdit, notify }) {
  const [titleTh, setTitleTh] = useState('');
  const [albumName, setAlbumName] = useState('กิจกรรมเพื่อสังคม');
  const [imageUrl, setImageUrl] = useState('');
  const [uploading, setUploading] = useState(false);

  if (!canEdit) {
    return (
      <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl text-sm text-amber-900">
        บัญชีของคุณไม่มีสิทธิ์ในการอัปโหลดรูปภาพ
      </div>
    );
  }

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);

    if (isSupabaseConfigured && supabase) {
      const fileName = `${Date.now()}-${file.name}`;
      const { error } = await supabase.storage.from('lions-media').upload(fileName, file);
      if (!error) {
        const { data } = supabase.storage.from('lions-media').getPublicUrl(fileName);
        setImageUrl(data.publicUrl);
        notify('อัปโหลดไฟล์ไปยัง Supabase Storage สำเร็จ');
        setUploading(false);
        return;
      }
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImageUrl(reader.result);
      notify('เลือกรูปภาพเรียบร้อยแล้ว');
      setUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleAddImage = async (e) => {
    e.preventDefault();
    if (!imageUrl) return;
    const payload = {
      title_th: titleTh,
      title_en: titleTh,
      album_name: albumName,
      image_url: imageUrl,
      taken_date: new Date().toISOString().split('T')[0]
    };
    const newImg = { id: `gal-${Date.now()}`, ...payload };
    if (isSupabaseConfigured && supabase) {
      const { data } = await supabase.from('gallery_items').insert([payload]).select();
      if (data?.[0]) newImg.id = data[0].id;
    }
    setGallery([newImg, ...gallery]);
    setTitleTh('');
    setImageUrl('');
    notify('เพิ่มรูปภาพเข้าคลังภาพกิจกรรมแล้ว');
  };

  return (
    <div className="space-y-6">
      <form
        onSubmit={handleAddImage}
        className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4"
      >
        <h3 className="font-bold text-[#091947] text-lg">อัปโหลดรูปภาพเข้าคลังภาพกิจกรรม</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            required
            placeholder="คำบรรยายภาพกิจกรรม *"
            value={titleTh}
            onChange={(e) => setTitleTh(e.target.value)}
            className="px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm"
          />
          <input
            type="text"
            placeholder="ชื่ออัลบั้ม (เช่น กิจกรรมสายตา, โครงการเยาวชน)"
            value={albumName}
            onChange={(e) => setAlbumName(e.target.value)}
            className="px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4 items-center">
          <label className="flex items-center justify-center gap-2 border-2 border-dashed border-slate-300 rounded-lg p-3 cursor-pointer hover:bg-slate-50 text-sm font-medium text-slate-700">
            <Upload className="w-4 h-4 text-[#0F296E]" />
            <span>{uploading ? 'กำลังอัปโหลด...' : 'เลือกไฟล์รูปภาพจากเครื่อง'}</span>
            <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
          </label>
          <input
            type="text"
            placeholder="หรือวางลิงก์รูปภาพ (Image URL)"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm"
          />
        </div>

        <button
          type="submit"
          className="bg-[#091947] hover:bg-[#0F296E] text-amber-300 font-bold px-5 py-2.5 rounded-lg text-sm"
        >
          + บันทึกรูปภาพลงคลังภาพ
        </button>
      </form>

      <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {gallery.map((g) => (
          <div key={g.id} className="bg-white rounded-xl overflow-hidden border border-slate-200">
            <img src={g.image_url} alt={g.title_th} className="w-full h-36 object-cover" />
            <div className="p-3 flex items-center justify-between gap-2">
              <div className="text-xs font-semibold truncate">{g.title_th}</div>
              <button
                onClick={async () => {
                  if (isSupabaseConfigured && supabase) {
                    await supabase.from('gallery_items').delete().eq('id', g.id);
                  }
                  setGallery(gallery.filter((x) => x.id !== g.id));
                  notify('ลบรูปภาพเรียบร้อยแล้ว');
                }}
                className="text-red-600 p-1 hover:bg-red-50 rounded"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdminMembersManager({ members, setMembers, canEdit, notify }) {
  const [form, setForm] = useState({
    name_th: '',
    name_en: '',
    role_th: '',
    role_en: '',
    member_type: 'board',
    lion_year: '2026–2027',
    display_order: 1
  });

  if (!canEdit) {
    return (
      <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl text-sm text-amber-900">
        เฉพาะผู้ดูแลระบบสูงสุด (Super Admin) เท่านั้นที่สามารถแก้ไขรายชื่อคณะกรรมการและสมาชิก
      </div>
    );
  }

  const handleAdd = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      name_en: form.name_en || form.name_th,
      role_en: form.role_en || form.role_th,
      display_order: Number(form.display_order) || 99
    };
    const newMem = { id: `mem-${Date.now()}`, ...payload, photo_url: '' };
    if (isSupabaseConfigured && supabase) {
      const { data } = await supabase.from('club_members').insert([payload]).select();
      if (data?.[0]) newMem.id = data[0].id;
    }
    setMembers([...members, newMem]);
    notify('เพิ่มรายชื่อกรรมการ/สมาชิกเรียบร้อยแล้ว');
    setForm({
      name_th: '',
      name_en: '',
      role_th: '',
      role_en: '',
      member_type: 'board',
      lion_year: '2026–2027',
      display_order: 1
    });
  };

  return (
    <div className="space-y-6">
      <form
        onSubmit={handleAdd}
        className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4"
      >
        <h3 className="font-bold text-[#091947] text-lg">เพิ่มคณะกรรมการบริหารและสมาชิกสโมสร</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            required
            placeholder="ชื่อ - นามสกุล (ภาษาไทย เช่น ไลออน สมชาย ใจดี) *"
            value={form.name_th}
            onChange={(e) => setForm({ ...form, name_th: e.target.value })}
            className="px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm"
          />
          <input
            type="text"
            placeholder="Full Name (English)"
            value={form.name_en}
            onChange={(e) => setForm({ ...form, name_en: e.target.value })}
            className="px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm"
          />
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          <input
            type="text"
            required
            placeholder="ตำแหน่ง (เช่น นายกสโมสร, สมาชิกสามัญ) *"
            value={form.role_th}
            onChange={(e) => setForm({ ...form, role_th: e.target.value })}
            className="px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm"
          />
          <select
            value={form.member_type}
            onChange={(e) => setForm({ ...form, member_type: e.target.value })}
            className="px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm"
          >
            <option value="board">คณะกรรมการบริหาร (Board)</option>
            <option value="member">สมาชิกสโมสร (General Member)</option>
          </select>
          <input
            type="text"
            placeholder="ปีบริหาร (เช่น 2026–2027)"
            value={form.lion_year}
            onChange={(e) => setForm({ ...form, lion_year: e.target.value })}
            className="px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm"
          />
        </div>
        <button
          type="submit"
          className="bg-[#091947] hover:bg-[#0F296E] text-amber-300 font-bold px-5 py-2.5 rounded-lg text-sm"
        >
          + เพิ่มรายชื่อ
        </button>
      </form>

      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-2">
        {members.map((m) => (
          <div
            key={m.id}
            className="p-3.5 rounded-xl border border-slate-200 flex items-center justify-between"
          >
            <div>
              <div className="font-bold text-sm text-slate-900">{m.name_th}</div>
              <div className="text-xs text-slate-500">
                {m.role_th} • {m.member_type === 'board' ? 'คณะกรรมการ' : 'สมาชิก'}
              </div>
            </div>
            <button
              onClick={async () => {
                if (isSupabaseConfigured && supabase) {
                  await supabase.from('club_members').delete().eq('id', m.id);
                }
                setMembers(members.filter((x) => x.id !== m.id));
                notify('ลบรายชื่อเรียบร้อยแล้ว');
              }}
              className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdminUsersManager({ admins, setAdmins, isSuperAdmin, notify }) {
  const [form, setForm] = useState({
    email: '',
    full_name_th: '',
    position_th: '',
    role: 'editor'
  });

  const handleAddAdmin = async (e) => {
    e.preventDefault();
    if (!isSuperAdmin) return;
    const payload = {
      ...form,
      full_name_en: form.full_name_th,
      position_en: form.position_th,
      is_active: true
    };
    const newAdmin = { id: `adm-${Date.now()}`, ...payload };
    if (isSupabaseConfigured && supabase) {
      await supabase.from('admin_users').insert([payload]);
    }
    setAdmins([...admins, newAdmin]);
    notify('เพิ่มบัญชีผู้ดูแลระบบเรียบร้อยแล้ว');
    setForm({ email: '', full_name_th: '', position_th: '', role: 'editor' });
  };

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 p-5 rounded-xl text-sm text-slate-800">
        <strong>ระบบจัดการผู้ดูแลหลายคนและกำหนดสิทธิ์ (RBAC):</strong> รองรับการเพิ่มผู้ดูแลระบบได้ไม่จำกัด (10 คนขึ้นไป) โดยแบ่งสิทธิ์ออกเป็น 3 ระดับ:
        <ul className="mt-2 space-y-1 text-xs">
          <li>• <strong>Super Admin:</strong> จัดการได้ทุกส่วน รวมถึงเพิ่ม/ลบผู้ดูแลระบบและจัดการสมาชิก</li>
          <li>• <strong>Editor (ฝ่ายประชาสัมพันธ์):</strong> เพิ่ม/แก้ไข/ลบ ข่าวประชาสัมพันธ์และกิจกรรม</li>
          <li>• <strong>Media Manager (ฝ่ายโสตฯ):</strong> อัปโหลดและจัดการคลังภาพกิจกรรม</li>
        </ul>
      </div>

      {isSuperAdmin && (
        <form
          onSubmit={handleAddAdmin}
          className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4"
        >
          <h3 className="font-bold text-[#091947] text-lg">เพิ่มผู้ดูแลระบบใหม่</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <input
              type="text"
              required
              placeholder="ชื่อ - นามสกุล ผู้ดูแล *"
              value={form.full_name_th}
              onChange={(e) => setForm({ ...form, full_name_th: e.target.value })}
              className="px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm"
            />
            <input
              type="email"
              required
              placeholder="อีเมลสำหรับเข้าสู่ระบบ *"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm"
            />
            <input
              type="text"
              required
              placeholder="ตำแหน่งในสโมสร *"
              value={form.position_th}
              onChange={(e) => setForm({ ...form, position_th: e.target.value })}
              className="px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm"
            />
            <select
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm"
            >
              <option value="super_admin">Super Admin (สิทธิ์เต็ม)</option>
              <option value="editor">Editor (ข่าวและกิจกรรม)</option>
              <option value="media_manager">Media Manager (คลังภาพ)</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-[#091947] hover:bg-[#0F296E] text-amber-300 font-bold px-5 py-2.5 rounded-lg text-sm flex items-center gap-2"
          >
            <UserPlus className="w-4 h-4" />
            <span>เพิ่มผู้ดูแลระบบ</span>
          </button>
        </form>
      )}

      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm overflow-x-auto">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-[#091947] text-white">
              <th className="py-3 px-4">ลำดับ</th>
              <th className="py-3 px-4">ชื่อผู้ดูแลระบบ</th>
              <th className="py-3 px-4">อีเมล</th>
              <th className="py-3 px-4">ตำแหน่ง</th>
              <th className="py-3 px-4">ระดับสิทธิ์ (Role)</th>
              <th className="py-3 px-4">จัดการ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {admins.map((adm, idx) => (
              <tr key={adm.id}>
                <td className="py-3 px-4">{idx + 1}</td>
                <td className="py-3 px-4 font-semibold">{adm.full_name_th}</td>
                <td className="py-3 px-4 text-slate-600">{adm.email}</td>
                <td className="py-3 px-4">{adm.position_th}</td>
                <td className="py-3 px-4">
                  {isSuperAdmin ? (
                    <select
                      value={adm.role}
                      onChange={(e) => {
                        const updated = admins.map((a) =>
                          a.id === adm.id ? { ...a, role: e.target.value } : a
                        );
                        setAdmins(updated);
                        notify('อัปเดตสิทธิ์ผู้ดูแลระบบแล้ว');
                      }}
                      className="px-2.5 py-1 rounded border border-slate-300 text-xs font-semibold"
                    >
                      <option value="super_admin">super_admin</option>
                      <option value="editor">editor</option>
                      <option value="media_manager">media_manager</option>
                    </select>
                  ) : (
                    <span className="px-2.5 py-1 rounded bg-slate-100 text-xs font-bold">
                      {adm.role}
                    </span>
                  )}
                </td>
                <td className="py-3 px-4">
                  {isSuperAdmin && idx > 0 && (
                    <button
                      onClick={() => {
                        setAdmins(admins.filter((a) => a.id !== adm.id));
                        notify('ลบบัญชีผู้ดูแลระบบแล้ว');
                      }}
                      className="text-red-600 hover:bg-red-50 p-1.5 rounded"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
