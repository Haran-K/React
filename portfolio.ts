import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Hariharan K',
  title: "Hi all, I'm Hariharan K",
  description:
    "I'm passionate Frontend developer having an experience of web applications with HTML , CSS , javascript , React.js, Next.js and also Figma.",
    
  resumeLink:
    'https://www.canva.com/design/DAFeaDrxUGs/qGvC3LeHVNYA0BUKEBY_BQ/edit',
};

export const openSource = {
  githubUserName: 'Haran-K',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: '',
  linkedin: 'http://linkedin.com/in/hariharan-k-684b51200',
  github: 'https://github.com/Haran-K/',
  twitter: 'https://twitter.com/haranmsd_',
};

export const skillsSection: SkillsSectionType = {
  title: 'what I do',
  subTitle: 'CRAZY FRONTEND  DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Frontend Web Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive and dynamic websites using Next.js'),
        emoji('⚡ Building UI/UX for mobile application using Figma'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        {
          skillName:'c',
          iconifyTag:'logos:c',
        },
        
       
        {
          skillName: 'Redux',
          iconifyTag: 'logos:redux',
        },
        
        
      ],
    },
  ]
}
    

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '70',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Rajalakshmi Institute of Technology',
    subHeader: 'BE CSE',
    duration: 'September 2020 - April 2020',
    desc: 'Anna University',
    grade: 'CGPA : 8.4',
   
  },

  {
    schoolName: 'Prince Matriculation Higher Secondary School',
    subHeader: 'HSE',
    duration: 'Jun 2018 - April 2020',
    desc: 'State Board',
    grade: 'Percentage : 76',
    
    
  },

   {
    schoolName: 'Himayam Matriculation Higher secondary School',
    subHeader: 'SSLC',
    duration: 'Jun 2017 - March 2018',
    desc: 'State Board',
    grade: 'Percentage : 88.2',
    
    
  },
  
];



export const projects: ProjectType[] = [
  {
    name: 'developer-portfolio',
    desc: 'Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.',
    github: 'https://github.com/1hanzla100/developer-portfolio',
    link: 'https://developer-portfolio-1hanzla100.vercel.app/',
  },
  {
    name: 'UI/UX Design for Mobile Application',
    desc: 'A frontend design for Daily tasks app using figma. ',
    github: 'https://github.com/Haran-K/',
    link: 'https://www.figma.com/file/bEIOdQSrh5oFj1mZxvuBu8/Taskify?type=design&node-id=0%3A1&mode=design&t=PVpFtBLU2z7qi6ih-1'
  },
  {
    name: 'TodoList Web Application',
    desc: 'A notes App for web helps you organize tasks and stay on top of your deadlines. ',
    github: 'https://github.com/1hanzla100/django-react-forum',
    link: 'https://haritodo.w3spaces.com/'
  },
  {
    name: 'Hari Store (Ecommerce)',
    desc: 'Now your reach to all your favorite entertainment and luxury items is just one touch apart.',
    github: 'https://github.com/Haran-K/',
    link:'https://hariecom.vercel.app/'
   
  },
];
export const experience: ExperienceType[] = [
  {
    role: 'Frontend developer',
    company: 'Duseca Software',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Apr 2022 – Jun 2022',
    desc: 'I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.',
  }
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'John Smith',
    feedback:
      'Successfully managed multiple projects with competing deadlines, consistently delivering high-quality work on time.Successfully managed multiple projects with competing deadlines, consistently delivering high-quality work on time.',
  },
];



// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Hariharan K',
  description:
    'A passionate Frontend Developer.',
  author: 'Hariharan K',
  
  url: 'https://developer-portfolio-1hanzla100.vercel.app',
  keywords: [
    'Hari',
    'Hariharan K',
    '@haranmsd',
    'hariharanK',
    'Portfolio',
    'Hari Portfolio ',
    'HariharanK Portfolio',
  ],
};
