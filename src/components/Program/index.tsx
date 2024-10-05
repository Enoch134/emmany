import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import programData from "./programData";

const Program = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Program Details"
            paragraph="Our cybersecurity program provides comprehensive training on topics like network security, ethical hacking, threat intelligence, cloud security, and incident response. Designed for both beginners and professionals, the program offers hands-on experience and prepares students for globally recognized certifications such as CISSP, CEH, and CompTIA Security+ to advance their careers."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {programData.map((program) => (
              <SingleFeature key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Program;
