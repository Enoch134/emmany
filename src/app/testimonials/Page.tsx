import Testimonials from "../../components/Testimonials/index";
import Breadcrumb from "../../components/Common/Breadcrumb";

import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Testimony | Free Next.js Template for Startup and SaaS",
  description: "This is Testimony Details for Startup Nextjs Template",
  // other metadata
};

const TestimonyPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Program Details"
        description="Our cybersecurity program provides comprehensive training for girls"
      />
      <Testimonials />
   
    </>
  );
};

export default TestimonyPage;
