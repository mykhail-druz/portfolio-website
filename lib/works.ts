export interface Work {
  id: string
  title: {
    en: string
    uk: string
  }
  shortDescription: {
    en: string
    uk: string
  }
  fullDescription: {
    en: string
    uk: string
  }
  thumbnail: string
  images: string[]
  website?: string
  stack: string[]
  category: 'commercial' | 'pet'
  featured?: boolean
}

export const works: Work[] = [
  {
    id: 'techcortex',
    title: {
      en: 'TechCortex - Full-Stack E-Commerce Platform',
      uk: 'TechCortex - Full-Stack E-Commerce Платформа'
    },
    shortDescription: {
      en: 'Production-ready full-stack e-commerce platform for PC components with admin panel, CRM, and AI features.',
      uk: 'Готова до продакшену full-stack e-commerce платформа для PC компонентів з адмін-панеллю, CRM та AI функціями.'
    },
    fullDescription: {
      en: 'Developed and implemented a full-featured e-commerce platform TechCortex from scratch to production-ready state. The platform includes customer-facing store with product catalogs, user authentication, PC Builder Tool for compatible component recommendations, shopping cart, wish lists, product comparison, and Stripe payment integration (Card, PayPal, Apple/Google Pay, Affirm). Features automated email notifications and UPS API integration for shipping. Built custom admin panel for business management: product and category management, order processing, user administration, and analytics dashboard. Developed integrated CRM system for inventory tracking with API connections to distributors (D&H Distribution and Ma Labs API) for real-time product availability and pricing synchronization. Implemented AI chat for product consultations, SEO content generation using AI, blog with categories, tags, and RSS feed. Technical achievements: 87+ API endpoints with full type safety, 200+ database migrations with performance optimization, server-side rendering for SEO, responsive design, caching system and query optimization, load testing with k6, full analytics integration (Vercel Analytics, Speed Insights, GA4).',
      uk: "Розробив та впровадив повнофункціональну e-commerce платформу TechCortex з нуля до готового до продакшену стану. Платформа включає клієнтський магазин з каталогами товарів, автентифікацією користувачів, інструментом PC Builder для рекомендацій сумісних компонентів, кошиком, списками бажань, порівнянням товарів та інтеграцією платежів Stripe (Card, PayPal, Apple/Google Pay, Affirm). Має автоматичні email-сповіщення та інтеграцію UPS API для доставки. Побудована кастомна адмін-панель для управління бізнесом: управління товарами та категоріями, обробка замовлень, адміністрування користувачів та аналітичний дашборд. Розроблена інтегрована CRM система для відстеження інвентарю з API підключеннями до дистриб'юторів (D&H Distribution та Ma Labs API) для синхронізації наявності товарів та цін в реальному часі. Реалізовано AI чат для консультацій з товарами, генерацію SEO контенту за допомогою AI, блог з категоріями, тегами та RSS feed. Технічні досягнення: 87+ API endpoints з повною типізацією, 200+ міграцій бази даних з оптимізацією продуктивності, server-side rendering для SEO, адаптивний дизайн, система кешування та оптимізація запитів, навантажувальне тестування з k6, повна інтеграція аналітики (Vercel Analytics, Speed Insights, GA4)."
    },
    thumbnail: '/images/works/techcortex/techcortex.webp',
    images: [
      '/images/works/techcortex/techcortex.webp',
      '/images/works/techcortex/techcortex_1.webp',
      '/images/works/techcortex/techcortex_2.webp',
      '/images/works/techcortex/techcortex_3.webp',
      '/images/works/techcortex/techcortex_4.webp',
      '/images/works/techcortex/techcortex_5.webp',
      '/images/works/techcortex/techcortex_6.webp',
      '/images/works/techcortex/techcortex_7.webp',
      '/images/works/techcortex/techcortex_8.webp',
      '/images/works/techcortex/techcortex_9.webp',
      '/images/works/techcortex/techcortex_10.webp',
      '/images/works/techcortex/techcortex_11.webp',
      '/images/works/techcortex/techcortex_12.webp',
      '/images/works/techcortex/techcortex_13.webp'
    ],
    website: 'https://techcortex.com',
    stack: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'Stripe API',
      'React Query',
      'Tailwind CSS',
      'OpenAI API',
      'Telegram Bot API',
      'Zod',
      'Zustand',
      'Google Merchant Center',
      'D&H API',
      'MaLabs API'
    ],
    category: 'commercial',
    featured: true
  },
  {
    id: 'wildtraff-erp',
    title: {
      en: 'Wild Traff - Enterprise ERP System',
      uk: 'Wild Traff - Корпоративна ERP Система'
    },
    shortDescription: {
      en: 'Comprehensive ERP system with multi-role access, employee management, and business process tracking.',
      uk: 'Комплексна ERP система з багаторольовим доступом, управлінням співробітниками та відстеженням бізнес-процесів.'
    },
    fullDescription: {
      en: 'Developed a comprehensive ERP system that streamlined business operations across the company. Built multi-role access architecture enabling secure access to various system modules. Implemented employee management and business process tracking features. Created an all-in-one solution that replaced multiple third-party services, reducing operational complexity. Delivered measurable improvements in team efficiency and business profitability. The system handles complex workflows, role-based permissions, and real-time data processing.',
      uk: 'Розробив комплексну ERP систему, яка оптимізувала бізнес-процеси по всій компанії. Побудував багаторольову архітектуру доступу, що забезпечує безпечний доступ до різних модулів системи. Реалізував функції управління співробітниками та відстеження бізнес-процесів. Створив все-в-одному рішення, яке замінило кілька сторонніх сервісів, зменшивши операційну складність. Забезпечив вимірювані покращення ефективності команди та прибутковості бізнесу. Система обробляє складні workflow, ролевий доступ та обробку даних в реальному часі.'
    },
    thumbnail: '/images/works/wildtraff-erp/wild-erp.webp',
    images: [
      '/images/works/wildtraff-erp/wild-erp.webp',
      '/images/works/wildtraff-erp/wildtraff-erp_1.webp',
      '/images/works/wildtraff-erp/wildtraff-erp_2.webp',
      '/images/works/wildtraff-erp/wildtraff-erp_3.webp',
      '/images/works/wildtraff-erp/wildtraff-erp_4.webp'
    ],
    stack: [
      'React.js',
      'MUI',
      'React Query',
      'Redux Toolkit',
      'Framer Motion',
      'React ChartJS',
      'date-fns'
    ],
    category: 'commercial',
    featured: true
  },
  {
    id: 'forhotel-crm',
    title: {
      en: 'ForHotel - Web CRM System',
      uk: 'ForHotel - Web CRM Система'
    },
    shortDescription: {
      en: 'Advanced Web CRM system for the hotel industry with intuitive booking interfaces.',
      uk: 'Передова Web CRM система для готелів з інтуїтивними інтерфейсами бронювання.'
    },
    fullDescription: {
      en: 'Developed and maintained an advanced Web CRM system for the hotel industry. Created intuitive interfaces to streamline booking processes while ensuring appealing design. Collaborated closely with product managers and designers to bring innovative ideas to life. Applied user-centered design principles to enhance the booking flow and overall UX. Built and optimized frontend components using Redux (thunk, slice, reducers), integrated Redux with API endpoints for seamless frontend-backend communication. Conducted usability testing to gather feedback and refine solutions.',
      uk: 'Розробляв та підтримував передову Web CRM систему для готелів. Створив інтуїтивні інтерфейси для оптимізації процесів бронювання, забезпечуючи привабливий дизайн. Тісно співпрацював з product менеджерами та дизайнерами для втілення інноваційних ідей. Застосував принципи user-centered дизайну для покращення потоку бронювання та загального UX. Побудував та оптимізував фронтенд компоненти, використовуючи Redux (thunk, slice, reducers), інтегрував Redux з API endpoints для безшовної комунікації фронтенд-бекенд. Проводив usability тестування для збору відгуків та вдосконалення рішень.'
    },
    thumbnail: '/images/works/forhotel-crm/forhotel.webp',
    images: ['/images/works/forhotel-crm/forhotel.webp'],
    stack: ['Next.js', 'TypeScript', 'JavaScript', 'MUI', 'Redux'],
    category: 'commercial'
  },
  {
    id: 'bace',
    title: {
      en: 'Bace Agency',
      uk: 'Bace Agency'
    },
    shortDescription: {
      en: 'Website for a digital marketing agency from Chicago, USA.',
      uk: 'Вебсайт для діджитал маркетингового агенства з Чикаго, США.'
    },
    fullDescription: {
      en: 'Bace Agency - Design & Development Creative Agency, founder of Iceberg System. Specialized in Web Development, Brand Identity and Digital Strategy. We know how to combine business, technology and creativity in our solutions. Bace agency`s team believes in breaking the stagnation and inspiring growth. Bace Agency create brands that help businesses change dramatically. The main task of agency is to make your customer unable to live without your Brand.',
      uk: 'Bace Agency - креативна агенція дизайну і розробки, засновник Iceberg System. Спеціалізується на веб-розробці, ідентифікації бренду та цифровій стратегії. Ми знаємо, як поєднати бізнес, технології та креативність у наших рішеннях. Команда агентства Bace вірить у вихід із застою та стимулювання зростання. Агентство Bace створює бренди, які допомагають бізнесу кардинально змінюватися. Головне завдання агентства – зробити так, щоб ваш клієнт не міг жити без вашого бренду.'
    },
    thumbnail: '/images/works/bace/bace-agency.webp',
    images: [
      '/images/works/bace/bace-agency.webp',
      '/images/works/bace/bace_logo.webp',
      '/images/works/bace/bace_2.webp',
      '/images/works/bace/bace_3.webp',
      '/images/works/bace/bace_4.webp',
      '/images/works/bace/bace_5.webp',
      '/images/works/bace/bace_6.webp',
      '/images/works/bace/bace_7.webp',
      '/images/works/bace/bace_8.webp'
    ],
    website: 'https://bace.agency/',
    stack: ['Next.js', 'Typescript', 'Tailwind', 'Framer Motion'],
    category: 'commercial',
    featured: true
  },
  {
    id: 'adv',
    title: {
      en: 'Adv Graphics Corp',
      uk: 'Adv Graphics Corp'
    },
    shortDescription: {
      en: 'Landing page for professional graphic designers from Chicago, IL',
      uk: 'Лендінг сторінка для професійних графічних дизайнерів з Чикаго, Іллінойс.'
    },
    fullDescription: {
      en: 'Commercial landing page for professional graphic design services in Chicago, IL. The site is developed on the basis of Next.js, Typescript, Tailwind, React Swiper, NodeMailer, AOS animations and using reCAPTCHA.',
      uk: 'Комерційна лендінг сторінка для послуг з професійного графічного дизайну в Чикаго, Іллінойс. Сайт розроблено на основі Next.js, Typescript, Tailwind, React Swiper, NodeMailer, анімації AOS та з використанням reCAPTCHA.'
    },
    thumbnail: '/images/works/adv/adv_1.webp',
    images: [
      '/images/works/adv/adv_1.webp',
      '/images/works/adv/adv.webp',
      '/images/works/adv/adv_2.webp',
      '/images/works/adv/adv_3.webp',
      '/images/works/adv/adv_4.webp'
    ],
    website: 'https://advgraphicscorp.com/',
    stack: [
      'Next.js',
      'Typescript',
      'Tailwind',
      'AOS',
      'Sanity',
      'NodeMailer',
      'React Swiper',
      'ReCaptcha'
    ],
    category: 'commercial',
    featured: true
  },
  {
    id: 'katcom',
    title: {
      en: 'Katcom, Inc.',
      uk: 'Katcom, Inc.'
    },
    shortDescription: {
      en: 'Landing page for professional electricians from Chicago, IL',
      uk: 'Лендінг для професійних електриків з Чикаго, США'
    },
    fullDescription: {
      en: 'Commercial landing page for professional electrician services in Chicago, IL. The site is developed on the basis of Next.js, Typescript, Tailwind, NodeMailer, AOS animations and using reCAPTCHA.',
      uk: 'Комерційна лендінг сторінка з надання послуг професійних електриків у Чикаго, США. Сайт розроблений на основі Next.js Typescript, Tailwind, NodeMailer, AOS анімацій та з використанням reCAPTCHA.'
    },
    thumbnail: '/images/works/katcom/katcom_1.webp',
    images: [
      '/images/works/katcom/katcom_1.webp',
      '/images/works/katcom/katcom.webp',
      '/images/works/katcom/katcom_2.webp',
      '/images/works/katcom/katcom_3.webp',
      '/images/works/katcom/katcom_4.webp',
      '/images/works/katcom/katcom_5.webp',
      '/images/works/katcom/katcom_6.webp'
    ],
    website: 'https://katcom.com/',
    stack: ['Next.js', 'Typescript', 'Tailwind', 'Framer Motion'],
    category: 'commercial'
  },
  {
    id: 'xpense',
    title: {
      en: 'Xpense',
      uk: 'Xpense'
    },
    shortDescription: {
      en: 'Landing page for Xpense application',
      uk: 'Лендінг сторінка для Xpense додатку'
    },
    fullDescription: {
      en: 'Landing page for Xpense application. Xpense helps you to organize your income and expenses. Based on React.js, tailwind css and Aos animations.',
      uk: 'Лендінг сторінка додатку Xpense. Xpense допоможе вам організувати свої доходи та витрати. Сторінка розробилена на основі React.js, tailwind css і анімацій Aos.'
    },
    thumbnail: '/images/works/xpense/xpense.webp',
    images: [
      '/images/works/xpense/xpense.webp',
      '/images/works/xpense/xpense_2.webp',
      '/images/works/xpense/xpense_3.webp',
      '/images/works/xpense/xpense_4.webp',
      '/images/works/xpense/xpense_5.webp',
      '/images/works/xpense/xpense_6.webp'
    ],
    stack: ['React', 'Redux', 'Firebase'],
    category: 'pet'
  },
  {
    id: 'streamline',
    title: {
      en: 'StreamLine | Landing',
      uk: 'StreamLine | Landing'
    },
    shortDescription: {
      en: 'SaaS platform for team collaboration, built with Next.js, TypeScript, and Tailwind CSS, featuring a custom design.',
      uk: 'SaaS платформа для командного співробітництва, побудована на Next.js, TypeScript та Tailwind CSS, з кастомним дизайном.'
    },
    fullDescription: {
      en: 'StreamLine is a SaaS platform for team collaboration, built with Next.js, TypeScript, and Tailwind CSS, featuring a custom design. Stages of Work: Research - Analyzed collaboration platform trends and planned a user-friendly layout. Design - Created a custom design and implemented it using Tailwind CSS for responsive styling. Development - Set up Next.js with TypeScript, built components with Radix UI, added animations with Framer Motion, and integrated Recharts for data visualization. Testing - Tested responsiveness and optimized with Lighthouse. Deployment - Launched on Vercel.',
      uk: 'StreamLine - це SaaS платформа для командного співробітництва, побудована на Next.js, TypeScript та Tailwind CSS, з кастомним дизайном. Етапи роботи: Дослідження - Проаналізував тренди платформ для співробітництва та спланував зручний макет. Дизайн - Створив кастомний дизайн та впровадив його, використовуючи Tailwind CSS для адаптивної стилізації. Розробка - Налаштував Next.js з TypeScript, побудував компоненти з Radix UI, додав анімації з Framer Motion та інтегрував Recharts для візуалізації даних. Тестування - Протестував адаптивність та оптимізував за допомогою Lighthouse. Деплоймент - Запустив на Vercel.'
    },
    thumbnail: '/images/works/streamline/streamline_1.webp',
    images: [
      '/images/works/streamline/streamline_1.webp',
      '/images/works/streamline/streamline_2.webp',
      '/images/works/streamline/streamline_3.webp',
      '/images/works/streamline/streamline_4.webp',
      '/images/works/streamline/streamline_5.webp',
      '/images/works/streamline/streamline_6.webp'
    ],
    website: 'https://streamline-workflow.vercel.app/',
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Radix UI',
      'Framer Motion',
      'Recharts'
    ],
    category: 'pet'
  },
  {
    id: 'trackly',
    title: {
      en: 'TRACKLY | Landing',
      uk: 'TRACKLY | Landing'
    },
    shortDescription: {
      en: 'Modern, responsive landing page for a fictional SaaS product, built using Next.js, TypeScript, Tailwind CSS, and Framer Motion.',
      uk: 'Сучасна, адаптивна лендінг сторінка для вигаданого SaaS продукту, побудована на Next.js, TypeScript, Tailwind CSS та Framer Motion.'
    },
    fullDescription: {
      en: 'TRACKLY is a modern, responsive landing page for a fictional SaaS product, built using Next.js, TypeScript, Tailwind CSS, and Framer Motion. Stages of Work: Research - Analyzed trends and planned the page structure based on SaaS industry standards. Development - Set up the project with Next.js and TypeScript, creating reusable components and adding Framer Motion for smooth animations. Integrated tools like clsx for class management and sharp for image optimization. Configured scripts (dev, build, start, lint) for an efficient workflow.',
      uk: 'TRACKLY - це сучасна, адаптивна лендінг сторінка для вигаданого SaaS продукту, побудована на Next.js, TypeScript, Tailwind CSS та Framer Motion. Етапи роботи: Дослідження - Проаналізував тренди та спланував структуру сторінки на основі стандартів SaaS індустрії. Розробка - Налаштував проект з Next.js та TypeScript, створив перевикористовувані компоненти та додав Framer Motion для плавних анімацій. Інтегрував інструменти як clsx для управління класами та sharp для оптимізації зображень. Налаштував скрипти (dev, build, start, lint) для ефективного workflow.'
    },
    thumbnail: '/images/works/trackly/trackly_1.webp',
    images: [
      '/images/works/trackly/trackly_1.webp',
      '/images/works/trackly/trackly_2.webp',
      '/images/works/trackly/trackly_3.webp',
      '/images/works/trackly/trackly_4.webp',
      '/images/works/trackly/trackly_5.webp',
      '/images/works/trackly/trackly_6.webp'
    ],
    website: 'https://trackly-saas.vercel.app/',
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'clsx',
      'sharp'
    ],
    category: 'pet'
  }
]
