import { faAngular, faAws, faCss3, faGitAlt, faGithub, faHtml5, faJs, faNode, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faFire, faPrescription } from "@fortawesome/free-solid-svg-icons";
import cpp from '../img/skills_logo/cpp.png';
import typescript from '../img/skills_logo/typescript.png';
import dynamodb from '../img/skills_logo/dynamodb.png';

export const skills = [
    { skill: 'ReactJS', width: '95%', fontAwesomeClass: faReact },
    { skill: 'Express(with NodeJS)', width: '95%', fontAwesomeClass: faNode },
    { skill: 'Angular 9+', width: '85%', fontAwesomeClass: faAngular },
    { skill: 'RxJs', width: '85%', fontAwesomeClass: faPrescription },
    { skill: 'Python', width: '95%', fontAwesomeClass: faPython },
    { skill: 'Javascript', width: '95%', fontAwesomeClass: faJs },
    { skill: 'HTML5', width: '95%', fontAwesomeClass: faHtml5 },
    { skill: 'CSS3', width: '90%', fontAwesomeClass: faCss3 },
    { skill: 'Typescript', width: '95%', imageUrl: typescript },
    { skill: 'Firebase(with Firestore)', width: '90%', fontAwesomeClass: faFire },
    { skill: 'MongoDB(with Mongoose)', width: '95%', fontAwesomeClass: faDatabase },
    { skill: 'DynamoDB', width: '80%', fontAwesomeClass: faAws },
    { skill: 'C++', width: '95%', imageUrl: cpp },
    { skill: 'MySQL/Oracle(9i/10g)', width: '95%', imageUrl: dynamodb },
    { skill: 'Git', width: '95%', fontAwesomeClass: faGitAlt }
];