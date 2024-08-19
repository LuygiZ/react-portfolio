import project1 from "../assets/projects/ainet.png";
import project2 from "../assets/projects/wheelchair.png";
import project3 from "../assets/projects/portfolio.png";
import project4 from "../assets/projects/sgi2.png";

export const HERO_CONTENT = `I am 22 years old and started studying Computer Engineering at the Polytechnic Institute of Leiria (IPL) in 2020. I began developing an interest in programming and computer science at the age of 15, and since then, I have acquired a lot of knowledge and intend to keep learning more and more. I consider myself a very dedicated person, always open to new experiences, and I have an ease in working as part of a team. Throughout my academic journey, I have completed several projects that have helped me learn and apply previously acquired knowledge.`;

export const ABOUT_TEXT = `I am a recent computer engineering graduate with a strong passion and dedication for creating user-friendly and efficient web applications. I also have a deep interest in developing projects related to machine learning, artificial intelligence, and IoT. I have worked with a variety of technologies and have always been fully committed to every project I was involved in during university. Beyond coding, I enjoy staying active and exploring new technologies. When I'm not at the computer, I like to keep fit and train regularly, which helps me stay in shape and manage anxiety.`;

export const EXPERIENCES = [
  {
    year:"Present", 
    role:"To Be Determined",
    company:"WithUs",
    description: "In response to being contacted by withUs, a company specialized in consulting services and product custom design and delivery, I was offered challenges to further expand my knowledge and to introduce me to new technologies such as React, Quarkus, and Spring Boot.", 
    technologies:["React", "Spring Boot", "Quarkus"]
  },
  {
    year: "2022 - 2024",
    role: "3º and 4º year of Informatic Engineering",
    company: "Polytechnic Institute of Leiria",
    description: `After exploring the IT field and giving it some thought, I decided to switch to the Information Systems (IS) track, where I stayed until the end of my studies. In this area, I was introduced to Artificial Intelligence, learned additional web development tools like Vue.js, further deepened my knowledge of Java and SQL, conducted exploratory data analysis, developed an Android application, and learned C#. For my final project, I chose to expand my Python skills even further.`,
    technologies: ["Javascript", "Vue.js", "Java", "SQL", "Python", "HTML", "CSS", "C#"],
  },
  {
    year: "2021 - 2022",
    role: "2º Year of Infomatic Engineering",
    company: "Polytechnic Institute of Leiria",
    description: `This year, I initially decided to pursue the IT field, where I was introduced to new concepts related to networking, Linux, some bash commands, and security. At the same time, I began learning web development tools like Laravel, continued deepening my knowledge of Java, and started studying SQL.`,
    technologies: ["HTML", "CSS", "Laravel", "mySQL", "Oracle", "Linux", "SQL", "Java", "Blade"],
  },
  {
    year: "2020 - 2021",
    role: "1º Year of Infomatic Engineering",
    company: "Polytechnic Institute of Leiria",
    description: `My first introduction to programming was with C and Java, accompanied by a strong foundation in mathematics and physics. I also have experience with IoT, assembly language, and Python, where I used the Spyder tool for mathematical applications.`,
    technologies: ["C", "Java", "Assembly", "Python", "HTML", "PHP", "CSS"],
  },
  {
    year: "2017 - 2020",
    role: "Studied Science and Technology",
    company: "Escola Básica e Secundária de Ourém",
    description: `Where my journey began and started to develop my skills and soft skills. In my 12º year I was introduced to Pascal and pixel art in the class and as a side hustle I started to look at some html, css and even a little bit of javascript.`,
    technologies: ["Pascal", "HTML", "CSS", "Javascript"],
  },
];

export const PROJECTS = [
  {
    title: "CineMagic",
    image: project1,
    description:
      "This project focused on developing a web application using the Laravel framework to manage movie sessions, theaters, and ticket sales, as well as control seat occupancy during the sessions. It was an enriching experience that provided me with profound learning and with which I strongly identified.",
    technologies: ["HTML", "CSS", "Laravel", "Javascript", "MySQL"],
  },
  {
    title: "Cadeira de Rodas com Inteligência Artificial",
    image: project2,
    description:
      "This project was my final course project, with the objective of developing a new web application on a Raspberry Pi using the Vue.js framework, which allowed for the control of an electric wheelchair's movements through voice commands utilizing Artificial Intelligence. This challenging project enabled me to expand and solidify my technical knowledge, effectively preparing me for the job market.",
    technologies: ["HTML", "CSS", "Javascript", "Python", "Tensorflow", "Vue.Js"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information. The first project using react that helped me learn through this new framework.",
    technologies: ["HTML", "CSS", "React", "Bootstrap", "Motion"],
  },
  {
    title: "La Redoute Project",
    image: project4,
    description:
      "A project in colaboration with La Redoute that was focused on developing a web page where the user could see an item and inspect it in real time and also could animate the item.",
    technologies: ["Blend", "Javascript", "HTML", "CSS"],
  },
];

export const CONTACT = {
  address: "Ourém, Santarém",
  phoneNo: "+351 910 538 227",
  email: "luismanuelsantos2801@gmail.com",
};
