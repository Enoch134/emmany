import SingleBlog from "@/components/Mentor/SingleBlog";
import MentorData from "@/components/Mentor/MentorData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentor Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Page for Startup Nextjs Template",
  // other metadata
};

const Mentor = () => {
  return (
    <>
      <Breadcrumb
        pageName="Mentor Profiles"
        description="Our mentors are seasoned professionals dedicated to guiding you through your cybersecurity journey."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {MentorData.map((mentor) => (
              <div
                key={mentor.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog mentor={mentor} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Mentor;
