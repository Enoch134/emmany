import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "WordPress LiteSpeed Cache Plugin Security Flaw Exposes Sites to XSS Attacks",
    paragraph:
      "A new high-severity security flaw has been disclosed in the LiteSpeed Cache plugin for WordPress that could enable malicious actors to execute arbitrary JavaScript code.",
    image: "/images/blog/wordpress.webp",
    author: {
      name: "Bintu Kargbo",
      image: "/images/blog/cyber1.jpg",
      designation: "Content Writer",
    },
    tags: ["creative"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "Google Adds New Pixel Security Features to Block 2G Exploits and Baseband Attacks",
    paragraph:
      "Google has revealed the various security guardrails that have been incorporated into its latest Pixel devices to counter the rising threat posed by baseband security attacks.",
    image: "/images/blog/android.webp",
    author: {
      name: "Jacklyn Koroma",
      image: "/images/blog/cyber.jpg",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2024",
  },
  {
    id: 3,
    title: "5 Actionable Steps to Prevent GenAI Data Leaks Without Fully Blocking AI Usage",
    paragraph:
      "Since its emergence, Generative AI has revolutionized enterprise productivity. GenAI tools enable faster and more effective software development, financial analysis",
    image: "/images/blog/layerx.webp",
    author: {
      name: "Ruth Turay",
      image: "/images/blog/cybergirls5.jpg",
      designation: "Content Writer",
    },
    tags: ["design"],
    publishDate: "2024",
  },
];
export default blogData;
