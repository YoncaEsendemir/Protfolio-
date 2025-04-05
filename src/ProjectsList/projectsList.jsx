import Eticaret from "../imageProjects/E-Ticaret.png"
import LaravelCoursApp from"../imageProjects/LaravelCoursApp.png"
import ExchangeRateApplication from "../imageProjects/ExchangeRateApplication.png"

// projects.js

export const projects = [
    {
        id: 1,
        title: "E-Learnig",
        imgae: "yok şimdilik",
        technologies: ["React", "Spring Boot", "PostgreSQL", "Hibernate", "JWT", "RestAPI", "Payment", "Redux Toolkit"],
        description: "My aim in this project is to develop an e-learning platform. I developed the interface with React and the backend with Java Spring Boot. I created an application similar to Udemy or BTK Academy using different technologies. In this platform, incorrect videos can be uploaded, the admin can add categories and upload related course videos. The admin can also view users, delete courses and users, and update courses. Users can delete their own accounts, update their information, and view their course progress.",
        link:""
    },
    {
        id: 2,
        title: "CoursApp",
        image: LaravelCoursApp,
        technologies: ["React", "Laravel", "MySQL", "RestAPI"],
        description: "My aim in this project is to develop an e-learning platform. I developed the interface with React and the backend with Java Spring Boot. I created an application similar to Udemy or BTK Academy using different technologies.",
        link:""
    },
    {
        id: 3,
        title: "E-Ticaret",
        image: Eticaret,
        technologies: ["React", "Spring Boot", "PostgreSQL", "Hibernate", "JWT", "RestAPI"],
        description: "My aim in this project is to develop an e-learning platform. I developed the interface with React and the backend with Java Spring Boot. I created an application similar to Udemy or BTK Academy using different technologies.",
        link:""
    },
    {
        id: 4,
        title: "Foreign Exchange Application",
        image: ExchangeRateApplication,
        technologies: ["React", "RestAPI"],
        description: "My aim in this project is to develop an e-learning platform. I developed the interface with React and the backend with Java Spring Boot. I created an application similar to Udemy or BTK Academy using different technologies."
    }
];