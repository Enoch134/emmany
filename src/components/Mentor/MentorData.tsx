import { Mentor } from "@/types/mentor";

const MentorData: Mentor[] = [
  {
    id: 1,
    title: "Chief Information Security Officer at SecureTech",
    paragraph:
      "John has over 15 years of experience in the cybersecurity industry, specializing in threat intelligence, network security, and enterprise risk management. His leadership at SecureTech has been instrumental in shaping robust defense systems.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "John Doe",
      image: "/images/blog/author-01.png",
      designation: "Expert advice on threat intelligence and risk management, guidance on securing leadership roles in cybersecurity.",
    },
    tags: ["creative"],
    publishDate:["Threat Intelligence", "Network Security", "Risk Management"] ,
    
  },
  {
    id: 2,
    title: "Cybersecurity Consultant and Ethical Hacker",
    paragraph:
      "Maria is a certified ethical hacker and cybersecurity consultant who has worked with top financial institutions to safeguard their systems. She specializes in penetration testing, ethical hacking, and incident response.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Maria Rodriguez",
      image: "/images/blog/cyber.jpg",
      designation: "Hands-on training in ethical hacking and penetration testing, career advice for aspiring ethical hackers and consultants.",
    },
    tags: ["computer"],
    publishDate: ["Ethical Hacking", "Penetration Testing", "Incident Response"],
  },
  {
    id: 3,
    title: "Cloud Security Architect at CloudSafe Solutions.",
    paragraph:
      "Ahmed is focused on securing cloud infrastructures for Fortune 500 companies. He specializes in designing secure cloud frameworks and mitigating cloud-based vulnerabilities.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Ahmed Mustafa",
      image: "/images/blog/girls.jpg",
      designation: "Specialized guidance in cloud security and architecture, mentorship on designing scalable and secure cloud infrastructures.",
    },
    tags: ["design"],
    publishDate: ["Cloud Security", "Cloud Architecture", "Cloud Vulnerability Management"],
  },
];
export default MentorData;
