export interface ISkill  {
    type: string,
    language: string,
    imageUrl:string,
    altImg: string,
    framework: string,
    skills: string,
    tested: boolean,
    documented: boolean,
    gitHub: string
}
const skills =
[
  {
    type: 'backend',
    language: 'Java',
    imageUrl: 'assets/banner/springboot.webp',
    altImg: 'Spring Boot',
    framework: 'SpringBoot',
    skills: 'text',
    tested: true,
    documented: true,
    gitHub: 'https://github.com/IgorMundim/ticket-backend-spring-boot'
  },
  {
    type: 'backend',
    language: 'Django',
    imageUrl: 'assets/banner/django.webp',
    altImg: 'Django',
    framework: 'Django',
    skills: 'text',
    tested: true,
    documented: true,
    gitHub: 'https://github.com/IgorMundim/ticket_backend'
  },
  {
    type: 'backend',
    language: 'TypeScript',
    imageUrl: 'assets/banner/express.webp',
    altImg: 'Express JS',
    framework: 'Express JS',
    skills: 'text',
    tested: true,
    documented: true,
    gitHub: 'https://github.com/IgorMundim/ticket-backend-node-sql'
  },
  {
    type: 'backend',
    language: 'JavaScript',
    imageUrl: 'assets/banner/apollo.webp',
    altImg: 'Apollo Server',
    framework: 'Apollo Server',
    skills: 'text',
    tested: false,
    documented: true,
    gitHub: 'https://github.com/IgorMundim/graphql-apollo-server'
  },
  {
    type: 'frontend',
    language: 'TypeScript',
    imageUrl: 'assets/banner/react.png',
    altImg: 'ReactJS',
    framework: 'ReactJS',
    skills: 'text',
    tested: false,
    documented: true,
    gitHub: ''
  },
  {
    type: 'frontend',
    language: 'TypeScript',
    imageUrl: 'assets/banner/angular.png',
    altImg: 'Angular',
    framework: 'ReactJS',
    skills: 'text',
    tested: false,
    documented: true,
    gitHub: ''
  },
] as ISkill[];

export default skills ;
