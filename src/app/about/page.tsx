import AboutSectionOne from "@/components/About/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Who We Are"
        description="The Cyber Girls initiative is a dynamic program aimed at empowering young women with the skills and knowledge necessary to thrive in the ever-evolving field of cybersecurity."
      />
      <AboutSectionOne />
   
    </>
  );
};

export default AboutPage;
