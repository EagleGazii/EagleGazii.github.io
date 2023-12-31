import { Element } from "react-scroll";
import { imagePath } from "../../config";
import { educationsData, experiencesData } from "../data";
import { generateRandomId } from "../utils/functions";
import Education from "./subComponents/Education";
import Experience from "./subComponents/Experience";

export default function Resume() {
  const educations = educationsData.map(
    ({ text, timelineDuration, title, schoolName, schoolUrl }) => (
      <Education
        key={generateRandomId()}
        text={text}
        schoolName={schoolName}
        timelineDuration={timelineDuration}
        title={title}
        schoolUrl={schoolUrl}
      />
    )
  );

  const calculatePresentWorkTime = (string) => {
    if (string.includes("Present")) {
      const splitString = string.split(" ");
      const startDate = new Date(`${splitString[0]} ${splitString[1]}`);
      const today = new Date(Date.now());

      const monthsDifference =
        (today.getFullYear() - startDate.getFullYear()) * 12 +
        (today.getMonth() - startDate.getMonth());
      return `${string} (${monthsDifference} months)`;
    }
    return string;
  };
  const experiences = experiencesData.map(
    ({ text, timelineDuration, title, companyName, companyUrl }) => (
      <Experience
        key={generateRandomId()}
        text={text}
        companyName={companyName}
        timelineDuration={calculatePresentWorkTime(timelineDuration)}
        title={title}
        companyUrl={companyUrl}
      />
    )
  );
  return (
    <Element name="resume">
      <section id="resume" className="st-dark-bg">
        <div className="st-height-b100 st-height-lg-b80"></div>
        <div className="container">
          <div className="st-section-heading st-style1">
            <h4 className="st-section-heading-title">RESUME</h4>
            <h2 className="st-section-heading-subtitle">RESUME</h2>
          </div>
          <div className="st-height-b25 st-height-lg-b25"></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="st-resume-wrap">
                <div className="st-resume-heading">
                  <img
                    src={imagePath + "/resume/resume-icon1.png"}
                    alt="resume-icon"
                  />
                  <h2 className="st-resume-heading-title">Experience</h2>
                </div>

                <div className="st-height-b50 st-height-lg-b30"></div>

                <div className="st-resume-timeline-wrap">{experiences}</div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="st-height-b0 st-height-lg-b50"></div>
              <div className="st-resume-wrap">
                <div className="st-resume-heading">
                  <img
                    src={imagePath + "/resume/resume-icon2.png"}
                    alt="resume-icon"
                  />
                  <h2 className="st-resume-heading-title">Education</h2>
                </div>
                <div className="st-height-b50 st-height-lg-b30"></div>

                <div className="st-resume-timeline-wrap">{educations}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="st-height-b100 st-height-lg-b80"></div>
      </section>
    </Element>
  );
}
