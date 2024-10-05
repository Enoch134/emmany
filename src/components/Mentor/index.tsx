import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import MentorData from "./MentorData";

const Mentor = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Mentor Profiles"
          paragraph="Our mentors are seasoned professionals dedicated to guiding you through your cybersecurity journey."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {MentorData.map((mentor) => (
            <div key={mentor.id} className="w-full">
              <SingleBlog mentor={mentor} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentor;
