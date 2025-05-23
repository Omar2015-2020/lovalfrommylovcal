
import { BookOpen, Home, GraduationCap, FileText, Briefcase, Landmark, HeartHandshake } from "lucide-react";
import { NewsItem } from "@/components/NewsCard";
import { Event } from "@/components/EventCard";
import { Service } from "@/components/ServiceCard";
import { DirectoryItem } from "@/components/DirectoryCard";

export const newsData: NewsItem[] = [
  {
    id: "1",
    title: "Объявлена неделя культурного обмена Йемен-Россия",
    excerpt: "Ежегодная неделя культурного обмена пройдет в октябре и будет включать художественные выставки, фестивали еды и академические дискуссии.",
    date: "2 мая 2025",
    image: "public/Images/photoyemenrussia guis.png",
    category: "События"
  },
  {
    id: "2",
    title: "Новые стипендиальные возможности для йеменских студентов",
    excerpt: "Министерство образования России объявило о новых стипендиальных возможностях специально для йеменских студентов в области естественных наук, технологий, инженерии и математики.",
    date: "28 апреля 2025",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "Образование"
  },
  {
    id: "3",
    title: "Йеменский студент выиграл российский научный конкурс",
    excerpt: "Мохаммед Аль-Газали, йеменский студент МГУ, занял первое место в Национальном конкурсе научных исследований.",
    date: "20 апреля 2025",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    category: "Достижения"
  },
  {
    id: "4",
    title: "Собрание сообщества: обсуждение новых жилищных правил",
    excerpt: "Присоединяйтесь к важному собранию сообщества для обсуждения новых жилищных правил, влияющих на иностранных студентов в Москве.",
    date: "15 апреля 2025",
    image: "public/Images/обсуждение культуры.png",
    category: "Сообщество"
  }
];

export const eventsData: Event[] = [
  {
    id: "1",
    title: "Фестиваль дружбы Йемен-Россия",
    description: "Празднование культурных связей между Йеменом и Россией с традиционной едой, музыкой и выступлениями.",
    date: "15 июня 2025",
    time: "12:00 - 20:00",
    location: "Парк Горького, Москва",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "2",
    title: "Ориентация для вновь прибывших студентов",
    description: "Приветственная встреча для вновь прибывших йеменских студентов в Москву с информацией об университетах, жилье и ресурсах сообщества.",
    date: "25 августа 2025",
    time: "10:00 - 14:00",
    location: "Йеменский культурный центр, Москва",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    id: "3",
    title: "Семинар по арабскому языку",
    description: "Бесплатные уроки арабского языка для русских студентов и членов сообщества, интересующихся изучением арабского.",
    date: "Каждую субботу",
    time: "16:00 - 18:00",
    location: "Московский государственный лингвистический университет",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  }
];

export const servicesData: Service[] = [
  {
    id: "1",
    title: "Университетское руководство",
    description: "Информация о российских университетах, требованиях к поступлению и процессах подачи заявлений для йеменских студентов.",
    icon: <GraduationCap className="h-6 w-6" />,
    link: "/services/university"
  },
  {
    id: "2",
    title: "Помощь с жильем",
    description: "Помощь в поиске жилья в российских городах, понимании договоров аренды и навигации по жилищным правилам.",
    icon: <Home className="h-6 w-6" />,
    link: "/services/housing"
  },
  {
    id: "3",
    title: "Визы и документы",
    description: "Руководство по подаче заявлений на визу, продлению и необходимой документации для граждан Йемена в России.",
    icon: <FileText className="h-6 w-6" />,
    link: "/services/visa"
  },
  {
    id: "4",
    title: "Стипендиальные ресурсы",
    description: "Информация о доступных стипендиях, грантах и финансовой помощи для йеменских студентов в России.",
    icon: <BookOpen className="h-6 w-6" />,
    link: "/services/scholarships"
  },
  {
    id: "5",
    title: "Руководство по трудоустройству",
    description: "Ресурсы для поиска работы, стажировок и понимания правил работы для иностранных студентов.",
    icon: <Briefcase className="h-6 w-6" />,
    link: "/services/employment"
  },
  {
    id: "6",
    title: "Поддержка сообщества",
    description: "Услуги социальной и эмоциональной поддержки, включая ресурсы для культурной адаптации и связи с другими йеменцами.",
    icon: <HeartHandshake className="h-6 w-6" />,
    link: "/services/community"
  }
];

export const directoryData: DirectoryItem[] = [
  {
    id: "1",
    name: "Ресторан 'Сана'а'",
    description: "Аутентичная йеменская кухня в сердце Москвы, предлагающая традиционные блюда, такие как манди, фахса и салта.",
    address: "ул. Арбат 25, Москва, Россия",
    phone: "+7 495 123 4567",
    website: "https://example.com/sanaa",
    category: "Ресторан",
    image: "https://cdn.saudigates.net/wp-content/uploads/2022/08/%D9%85%D8%B7%D8%B9%D9%85-%D8%A7%D9%84%D9%82%D8%B1%D9%8A%D8%A9-%D8%A7%D9%84%D9%8A%D9%85%D9%86%D9%8A%D8%A9.jpg"
  },
  {
    id: "2",
    name: "Московский исламский центр",
    description: "Исламский культурный центр, обслуживающий мусульманскую общину в Москве, с молитвенными помещениями, образовательными программами и общественными мероприятиями.",
    address: "Большая Татарская ул. 28, Москва, Россия",
    phone: "+7 495 234 5678",
    website: "https://example.com/moscowislamiccenter",
    category: "Исламский центр",
    image: "https://th.bing.com/th/id/OIP.DNm2ZKrzj9z9sjPXlzMHUgHaFw?cb=iwp1&rs=1&pid=ImgDetMain"
  },
  {
    id: "3",
    name: "Культурная ассоциация 'Йеменский дом'",
    description: "Культурный центр, посвященный продвижению йеменского наследия и культуры через выставки, языковые курсы и культурные мероприятия.",
    address: "ул. Петровка 38, Москва, Россия",
    phone: "+7 495 345 6789",
    website: "https://example.com/yemenhouse",
    category: "Культурный центр",
    image: "https://i.pinimg.com/736x/fc/18/7d/fc187deb79df6de2a04608f99ccfd36c--pakistan-forts.jpg"
  },
  {
    id: "4",
    name: "Аль-yamani Импорт/Экспорт",
    description: "Специализированный магазин, импортирующий продукты из Йемена, включая кофе, специи, мед и традиционные ремесленные изделия.",
    address: "Проспект Мира 95, Москва, Россия",
    phone: "+7 495 456 7890",
    category: "Бизнес",
    image: "https://mnasserlaw.com/wp-content/uploads/2022/12/6237416.jpg"
  },
  {
    id: "5",
    name: "Ассоциация йеменских студентов - РУДН",
    description: "Студенческая организация, поддерживающая йеменских студентов в МГУ через академическую, социальную и культурную деятельность.",
    address: "Московский государственный университет, Ленинские горы 1, Москва, Россия",
    website: "https://example.com/yemstuassoc",
    category: "Студенческая организация",
    image: "https://th.bing.com/th/id/OIP.ifbsBjJ9MlKcOjbaLudGLAHaC9?cb=iwp1&rs=1&pid=ImgDetMain"
  }
];

export const aboutContent = {
  mission: "Йеменское сообщество в России стремится поддерживать йеменских студентов, специалистов и семьи, проживающие в России, предоставляя ресурсы, организуя культурные мероприятия и способствуя связям внутри сообщества и с российским обществом.",
  vision: "Наше видение — создать процветающее и хорошо интегрированное йеменское сообщество в России, которое сохраняет свою культурную идентичность, одновременно принимая и внося вклад в российское общество.",
  history: "Йеменское сообщество в России имеет богатую историю, восходящую к советской эпохе, когда многие йеменские студенты приезжали для получения высшего образования. За десятилетия сообщество выросло и эволюционировало, устанавливая культурные, образовательные и деловые связи между Йеменом и Россией. Сегодня наше сообщество включает студентов, ученых, профессионалов и семьи, которые вносят вклад в различные сектора российского общества, сохраняя при этом тесные связи с йеменским наследием.",
  leadership: [
    {
      name: "Д-р Абдулкадер Алкинани",
      position: "Президент",
      bio: "Профессор международных отношений с более чем 20-летним опытом в области академического партнерства между Йеменом и Россией."
    },
    {
      name: "Д-р Нахид ",
      position: "Вице-президент",
      bio: "Кандидат экономических наук и организатор сообщества, специализирующаяся на услугах поддержки студентов."
    },
    {
      name: "Д-р Ахмед Альмугалис",
      position: "Генеральный секретарь",
      bio: "Бизнес-профессионал с опытом в программах культурного обмена и развития сообщества."
    },
    {
      name: "Д-р Тарик Алькинани",
      position: "Директор по культурным вопросам",
      bio: "Профессор арабской литературы, посвятившая себя продвижению йеменского культурного наследия в России."
    },
    {
      name: "Д-р Мансур Альселви",
      position: "Директор по культурным вопросам",
      bio: "Профессор арабской литературы, посвятившая себя продвижению йеменского культурного наследия в России."
    }
  ]
};
