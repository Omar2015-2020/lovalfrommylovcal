
import { BookOpen, Home, GraduationCap, FileText, Briefcase, Landmark, HeartHandshake } from "lucide-react";
import { NewsItem } from "@/components/NewsCard";
import { Event } from "@/components/EventCard";
import { Service } from "@/components/ServiceCard";
import { DirectoryItem } from "@/components/DirectoryCard";

export const newsData: NewsItem[] = [
  {
    id: "1",
    title: "Yemen-Russia Cultural Exchange Week Announced",
    excerpt: "The annual cultural exchange week will take place this October, featuring art exhibitions, food festivals, and academic discussions.",
    date: "May 2, 2025",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    category: "Events"
  },
  {
    id: "2",
    title: "New Scholarship Opportunities for Yemeni Students",
    excerpt: "The Russian Ministry of Education has announced new scholarship opportunities specifically for Yemeni students in STEM fields.",
    date: "April 28, 2025",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "Education"
  },
  {
    id: "3",
    title: "Yemeni Student Wins Russian Scientific Competition",
    excerpt: "Mohammed Al-Ghazali, a Yemeni student at Moscow State University, has won first place in the National Scientific Research Competition.",
    date: "April 20, 2025",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    category: "Achievement"
  },
  {
    id: "4",
    title: "Community Meeting: Discussion on New Housing Regulations",
    excerpt: "Join us for an important community meeting to discuss the new housing regulations affecting international students in Moscow.",
    date: "April 15, 2025",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    category: "Community"
  }
];

export const eventsData: Event[] = [
  {
    id: "1",
    title: "Yemen-Russia Friendship Festival",
    description: "Celebrating the cultural ties between Yemen and Russia with traditional food, music, and performances.",
    date: "June 15, 2025",
    time: "12:00 PM - 8:00 PM",
    location: "Gorky Park, Moscow",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "2",
    title: "Student Orientation for New Arrivals",
    description: "Welcome meeting for newly arrived Yemeni students in Moscow with information about universities, housing, and community resources.",
    date: "August 25, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Yemeni Cultural Center, Moscow",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    id: "3",
    title: "Arabic Language Workshop",
    description: "Free Arabic language classes for Russian students and community members interested in learning Arabic.",
    date: "Every Saturday",
    time: "4:00 PM - 6:00 PM",
    location: "Moscow State Linguistic University",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  }
];

export const servicesData: Service[] = [
  {
    id: "1",
    title: "University Guidance",
    description: "Information about Russian universities, admission requirements, and application processes for Yemeni students.",
    icon: <GraduationCap className="h-6 w-6" />,
    link: "/services/university"
  },
  {
    id: "2",
    title: "Housing Assistance",
    description: "Help finding accommodation in Russian cities, understanding rental agreements, and navigating housing regulations.",
    icon: <Home className="h-6 w-6" />,
    link: "/services/housing"
  },
  {
    id: "3",
    title: "Visa & Documents",
    description: "Guidance on visa applications, extensions, and required documentation for Yemeni citizens in Russia.",
    icon: <FileText className="h-6 w-6" />,
    link: "/services/visa"
  },
  {
    id: "4",
    title: "Scholarship Resources",
    description: "Information about available scholarships, grants, and financial aid for Yemeni students in Russia.",
    icon: <BookOpen className="h-6 w-6" />,
    link: "/services/scholarships"
  },
  {
    id: "5",
    title: "Employment Guidance",
    description: "Resources for job searching, internships, and understanding work regulations for international students.",
    icon: <Briefcase className="h-6 w-6" />,
    link: "/services/employment"
  },
  {
    id: "6",
    title: "Community Support",
    description: "Social and emotional support services, including cultural adjustment resources and connecting with other Yemenis.",
    icon: <HeartHandshake className="h-6 w-6" />,
    link: "/services/community"
  }
];

export const directoryData: DirectoryItem[] = [
  {
    id: "1",
    name: "Sana'a Restaurant",
    description: "Authentic Yemeni cuisine in the heart of Moscow, offering traditional dishes like mandi, fahsa, and saltah.",
    address: "Ulitsa Arbat 25, Moscow, Russia",
    phone: "+7 495 123 4567",
    website: "https://example.com/sanaa",
    category: "Restaurant",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be"
  },
  {
    id: "2",
    name: "Moscow Islamic Center",
    description: "Islamic cultural center serving the Muslim community in Moscow with prayer spaces, educational programs, and community events.",
    address: "Bolshaya Tatarskaya Street 28, Moscow, Russia",
    phone: "+7 495 234 5678",
    website: "https://example.com/moscowislamiccenter",
    category: "Islamic Center",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e"
  },
  {
    id: "3",
    name: "Yemen House Cultural Association",
    description: "Cultural center dedicated to promoting Yemeni heritage and culture through exhibitions, language classes, and cultural events.",
    address: "Ulitsa Petrovka 38, Moscow, Russia",
    phone: "+7 495 345 6789",
    website: "https://example.com/yemenhouse",
    category: "Cultural Center",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027"
  },
  {
    id: "4",
    name: "Al-Yamani Import/Export",
    description: "Specialty store importing products from Yemen including coffee, spices, honey, and traditional crafts.",
    address: "Prospekt Mira 95, Moscow, Russia",
    phone: "+7 495 456 7890",
    category: "Business",
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d"
  },
  {
    id: "5",
    name: "Yemeni Student Association - Moscow State University",
    description: "Student organization supporting Yemeni students at Moscow State University through academic, social, and cultural activities.",
    address: "Moscow State University, Leninskie Gory 1, Moscow, Russia",
    website: "https://example.com/yemstuassoc",
    category: "Student Organization",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a"
  }
];

export const aboutContent = {
  mission: "The Yemeni Community in Russia aims to support Yemeni students, professionals, and families living in Russia by providing resources, organizing cultural events, and fostering connections within the community and with Russian society.",
  vision: "Our vision is to create a thriving and well-integrated Yemeni community in Russia that preserves its cultural identity while embracing and contributing to Russian society.",
  history: "The Yemeni community in Russia has a rich history dating back to the Soviet era, when many Yemeni students came to pursue higher education. Over the decades, the community has grown and evolved, establishing cultural, educational, and business connections between Yemen and Russia. Today, our community includes students, academics, professionals, and families who contribute to various sectors of Russian society while maintaining strong ties to their Yemeni heritage.",
  leadership: [
    {
      name: "Dr. Ahmed Al-Mansouri",
      position: "President",
      bio: "Professor of International Relations with over 20 years of experience bridging Yemen-Russia academic partnerships."
    },
    {
      name: "Fatima Al-Qadhi",
      position: "Vice President",
      bio: "Doctoral candidate in Economics and community organizer focusing on student support services."
    },
    {
      name: "Mohammed Al-Hamdani",
      position: "Secretary General",
      bio: "Business professional with expertise in cultural exchange programs and community development."
    },
    {
      name: "Dr. Layla Shami",
      position: "Cultural Affairs Director",
      bio: "Professor of Arabic Literature dedicated to promoting Yemeni cultural heritage in Russia."
    }
  ]
};
