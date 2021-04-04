import pursuit from '../img/workEx_Logo/pursuit.png';
import tcs from '../img/workEx_Logo/tcs.png';
import ixia from '../img/workEx_Logo/ixia.png';

export const workEx = [
    {
        company: 'Pursuit Software',
        designation: 'Full Stack Developer',
        role: 'Developer',
        duration: 'August,2019 - present',
        location: 'Kolkata, India',
        imageUrl: pursuit,
        tech_stack: [
            "ReactJS",
            "Angular 9",
            "HTML 5",
            "CSS 3",
            "NodeJS/Express",
            "Python",
            "DynamoDB/MongoDB",
            "Amazon RDS(MySQL)",
            "AWS Cognito User Pool",
            "AWS API Gateway",
            "AWS Cloudwatch Logs",
            "Ansible",
        ],
        responsibilities: [
            "End to end implementation of product via which AWS Parallel clusters are set up, on demand, for running AWS Batch jobs",
            "UI/UX development using ReactJS and Angular 9",
            "User Authentication handled using AWS Cognito User Pool",
            "Developed RESTful API's and implemented Serverless infrastructure with AWS API Gateway in assistance with Lambda functions",
            "Backend/Core Engine API development in Express from scratch for communication of hosted backend with app front-end",
            "In Core-Engine, implemented ELK stack from scratch for monitoring purposes."
        ],
    },
    {
        company: 'Tata Consultancy Services',
        designation: 'A.S.E-Trainee',
        role: 'Developer',
        duration: 'July,2018 - August,2019',
        location: 'Chennai, India',
        imageUrl: tcs,
        tech_stack: [
            "Python",
            "NodeJS/Express",
            "HTML5",
            "CSS3",
            "JavaScript"
        ],
        responsibilities: [
            "UI Automation using inbuilt Python API",
            "API endpoint and backend development using Express based on NodeJS",
            "Used mysql2 npm package for CRUD operations on backend API development",
            "Applied sqlite3 package of Python for performing Database related activities in already existing client-side code"
        ],
    },
    {
        company: 'Ixia Technologies',
        designation: 'Intern',
        role: 'Developer',
        duration: 'October,2017 - April,2018',
        location: 'Kolkata, India',
        imageUrl: ixia,
        tech_stack: [
            "Python",
            "TCL",
            "C++"
        ],
        responsibilities: [
            "Development of specific features to be added in the Network Testing Framework in C++ and Python",
            "Implemented unit testing of the above mentioned features by writing Unit Test Case Scripts in Python and TCL",
            "Debugging of existing unit test Case Scripts for proper functioning of the product framework"
        ],
    }
];