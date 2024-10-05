import Program from "../../components/Program/index";
import Breadcrumb from "../../components/Common/Breadcrumb";

import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Program Details | Free Next.js Template for Startup and SaaS",
  description: "This is Program Details for Startup Nextjs Template",
  // other metadata
};

const ProgramPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Program Details"
        description="Our cybersecurity program provides comprehensive training for girls"
      />
      <Program />
   
    </>
  );
};

export default ProgramPage;
