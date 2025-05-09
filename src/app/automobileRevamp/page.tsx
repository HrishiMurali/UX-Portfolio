import React from "react";
import Image from "next/image";
import icon1 from "../../../public/Frame 28.png";
import icon4 from "../../../public/Frame 25.png";
import icon6 from "../../../public/Frame 23.png";
import icon7 from "../../../public/Frame 22.png";
import phones from "../../../public/Frame 13.png";

import SummaryCard from "../components/summaryCard/SummaryCard";
import Card from "../components/card/card";
import FeatureComparisonTable from "./FeatureComparisonTable";

const StandardAutomobileAppRevamp = () => {
  const iconList = [icon1, icon4, icon6, icon7];
  const issues = [
    "Onboarding was not very smooth",
    "Inconsistency between different OS",
    "Inconsistency throughout the design",
    "User experience was not great",
    "Error messages were not clear and inconsistent",
  ];
  const heuristics = [
    { count: "016", text: "Visibility of System Status" },
    { count: "009", text: "Error Prevention" },
    { count: "008", text: "User Control and Freedom" },
    { count: "014", text: "Flexibility and Efficiency of Use" },
    {
      count: "002",
      text: "Help Users Recognize, Diagnose, and Recover from Errors",
    },
    { count: "005", text: "Match Between System and the Real World" },
    { count: "006", text: "Recognition Rather Than Recall" },
    { count: "133", text: "Consistency and Standards" },
    { count: "041", text: "Aesthetic and Minimalist Design" },
    { count: "000", text: "Help and Documentation" },
  ];
  const severity = [
    { count: "010", text: "Usability catastrophe (S4) issues" },
    { count: "047", text: "Major Usability (S3) issues" },
    { count: "094", text: "Minor Usability (S2) issues" },
    { count: "086", text: "Cosmetic problems (S1) issues" },
  ];
  const s4Issues = [
    {
      title: "No ‘Terms And Conditions’ On The Login Screen",
      content:
        "This may create a situation where the users are not fully informed of the “terms and conditions” at the time of logging into the app.",
    },
    {
      title: "Lack Of Concise Error Reporting",
      content:
        "The error message “Authentication failed” is a generic message that does not provide any specific details on what caused the failure.",
    },
    {
      title: "Lack Of Appropriate Cancel Button",
      content:
        "There is no cancel button to close the popup if the user wants to cancel this action. Also, the phone’s back button is disabled, hence the user can close it only after entering the “Set PIN” screen.",
    },
    {
      title: "Lack Of Concise Error Reporting",
      content:
        "Despite the number of attempts performed by user, the error is still showing 3 attempts and it may confuse the user.",
    },
    {
      title: "Missing Button For Vehicle Navigation In Current Version",
      content:
        "There is a CTA in the Android version to navigate to the vehicle’s location. Unlike in the Android version, there is no CTA here for the user to navigate to the vehicle’s location.",
    },
    {
      title: "Missing “Vehicle Status Reminder” Feature",
      content:
        "The “Vehicle Status Reminder” feature in the Android design is missing here in the IOS version.",
    },
  ];

  const swotAnalysis = [
    {
      title: "What's Good",
      content: [
        "Clear documentation and labels",
        "Functionality driven design",
        "Can pinpoint the location and find the car",
        "Font size and thereby readability is apt",
      ],
    },
    {
      title: "What Went Wrong",
      content: [
        "Design inconsistencies.",
        "Failure to provide adequate feedback to the user while access.",
        "No navigation bar on some screens.",
        "Accessibility issues",
        "Feedback is too technical and not to the point",
      ],
    },
    {
      title: "New Opportunities",
      content: [
        "Use real-world language and design.",
        "Improved navigation.",
        "Haptic feedback",
        "Maintain consistency with design standards.",
        "Concise feedback with solutions to prevent errors.",
      ],
    },
    {
      title: "Possible Threats",
      content: [
        "Lack of concise error reporting.",
        "Lack of appropriate CTA buttons.",
        "Lack of concise status reports",
      ],
    },
  ];
  const evaluationCriteria = [
    {
      title: "Severity",
      text: "How severe is this issue? Is it preventing user from completing tasks, or is it just a minor annoyance?",
    },
    {
      title: "Impact",
      text: "What is the impact of this issue on the user experience? Does it significantly degrade the annoyance?",
    },
    {
      title: "Frequency",
      text: "How often does this issue occur? Is it encountered by many users or just a few?",
    },
  ];
  const howMight = [
    "How might we improve the display of error messages?",
    "How might we reduce or eliminate delays in command execution to improve the responsiveness of our system?",
    "How might we optimize the placement of the Engine Start/Stop button on the dashboard to enhance user convenience, accessibility, and ergonomic design?",
    "How might we improve the reliability and success rate of remote engine start functionality to minimize failures and ensure a seamless and consistent experience for users?",
    "How might we simplify and clarify the lock and unlock function to make it more intuitive and user-friendly?",
    "How might we create an interactive animation that visually displays the progress of the RES (Remote Engine Start) feature, allowing users to track the status of their engine startup in a dynamic and engaging manner?",
  ];
  const loginAndSignUp = [
    {
      title: "HEURISTIC EVALUATION",
      content:
        'Inconsistent login button behavior with empty fields and unclear "Authentication failed" error message.',
    },
    {
      title: "USER INTERVIEW",
      content:
        "The login process can be frustrating and involve multiple steps. Error message is not clear.",
    },
    {
      title: "DESIGN DECISION",
      content:
        "We enhanced the login page with better feedback and visuals, greatly boosting user satisfaction and security",
    },
  ];
  const remoteControl = [
    {
      title: "HEURISTIC EVALUATION",
      content:
        "Separate lock and unlock buttons can confuse users. Uneven placement of buttons ignoring criteria and irrelevant usage of graphics.",
    },
    {
      title: "USER INTERVIEW",
      content:
        "The remote engine start often fails, and the lock/ unlock function is confusing. There's no clear indication when the engine starts, and the error messages lack clarity.",
    },
    {
      title: "DESIGN DECISION",
      content:
        "We integrated the remote controls with the dashboard after combining the lock/unlock feature. All remote control features now comes with an interactive animation that indicates visual clarity and feedback.",
    },
  ];

  return (
    <div>
      <div className="revamp-head-image-section">
        <Image className="work-1-img" alt="phones" src={phones} />
        <div>
          {iconList.map((icon, index) => (
            <Image src={icon} alt="experience" key={index} />
          ))}
        </div>
      </div>
      <div className="revamp-head-main-title-section">
        <SummaryCard
          title={"Standard Automobile App Revamp"}
          content={
            "Role – UX Designer, UX researcher, Interaction design, and 3D designer"
          }
          containerStyle=""
          titleStyle=""
          contentStyle=""
          buttonStyle=""
        />
      </div>
      <div className="revamp-head-main-phone and content-section">
        <Image className="work-1-img" alt="phones" src={phones} />
        {issues.map((issue, index) => (
          <Card
            key={index}
            text={issue}
            textStyle="work-1-text"
            style="work-1-card"
          />
        ))}
        <div>
          <span>Key Problems</span>
          <Image className="work-1-img" alt="phones" src={phones} />
        </div>
      </div>

      <div className="revamp-heuristic-evaluation">
        <Card
          text={"Heuristic Evaluation"}
          textStyle="work-1-text"
          style="work-1-card"
        />
      </div>
      <div className="revamp-heuristic-image-content">
        <Image className="work-1-img" alt="phones" src={phones} />
        <Card
          text={
            "Conducted the Heuristic Evaluation of the Application for the UAE. Heuristic evaluations allow us to analyze the usability and functionality of the application in a standardized way. The application was evaluated and ranked according to Jakob Nielsen’s ten heuristics, the 7 classic UX laws and severity rating scale of 0-4. we prioritized our findings by severity and developed a series of findings. By addressing usability issues and providing recommendations, We hope to improve the Application’s usability."
          }
          textStyle="work-1-text"
          style="work-1-card"
        />
      </div>
      <div className="revamp-heuristic-counts">
        {heuristics.map(({ count, text }, index) => (
          <div key={index}>
            <div>
              <span>{count}</span>
              <span>{text}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="revamp-severity-report">
        <Card text={"Severity Report"} textStyle="" style="" />
        <div>
          <span>235+ Total Issues</span>
          <Image className="work-1-img" alt="phones" src={phones} />
        </div>
        <div>
          {severity.map(({ count, text }, index) => (
            <div key={index}>
              <div>
                <span>{count}</span>
                <span>{text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Card text={"S4 Usability Catastrophe"} textStyle="" style="" />
        {s4Issues.map(({ title, content }, index) => (
          <SummaryCard
            key={index}
            title={title}
            content={content}
            containerStyle=""
            titleStyle=""
            contentStyle=""
            buttonStyle=""
          />
        ))}
      </div>
      <div className="competitorAnalysis">
        competitorAnalysis
        <FeatureComparisonTable />
      </div>
      <div className="userPersona">
        User Persona
        <Image className="work-1-img" alt="phones" src={phones} />
      </div>

      <div className="swotAnalysis">
        SWOT Analysis
        {swotAnalysis.map(({ title, content }, index) => (
          <div key={index}>
            <span>
              <h2>{title}</h2>
            </span>
            <ul>
              {content.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div>
        <Card
          text={"Understanding the customers needs and problems"}
          textStyle=""
          style=""
        />
        <span>Scoring Done Against</span>
        {evaluationCriteria.map(({ title, text }, index) => (
          <div key={index}>
            <span>{title}</span>
            <p>{text}</p>
          </div>
        ))}
        <Image className="work-1-img" alt="phones" src={phones} />
      </div>
      <div>
        <Card text={"How Might We"} textStyle="" style="" />
        {howMight.map((text, index) => (
          <div key={index}>
            <span>{text}</span>
          </div>
        ))}
      </div>
      <div>
        <Card text={"Information Architecture"} textStyle="" style="" />
        <Image className="work-1-img" alt="phones" src={phones} />
      </div>
      <div>
        <Card text={"Wireframe"} textStyle="" style="" />
        <Image className="work-1-img" alt="phones" src={phones} />
      </div>
      <div>
        <Card text={"Design Iterations"} textStyle="" style="" />
        <Image className="work-1-img" alt="phones" src={phones} />
      </div>
      <div>
        <Card text={"Designs"} textStyle="" style="" />
        <Image className="work-1-img" alt="phones" src={phones} />
      </div>
      <div>
        {" "}
        <Card text={"Design Decisions"} textStyle="" style="" />
      </div>
      <div>
        {" "}
        <Card text={"Login and Signup"} textStyle="" style="" />
        <div>
          {loginAndSignUp.map(({ title, content }, index) => (
            <div key={index}>
              <span>{title}</span>
              <p>{content}</p>
            </div>
          ))}
        </div>
        <Image className="work-1-img" alt="phones" src={phones} />
      </div>
      <div>
        {" "}
        <Card text={"Remote Controls"} textStyle="" style="" />
        <div>
          {remoteControl.map(({ title, content }, index) => (
            <div key={index}>
              <span>{title}</span>
              <p>{content}</p>
            </div>
          ))}
        </div>
        <Image className="work-1-img" alt="phones" src={phones} />
      </div>
      <div>
        <Card text={"Prototype"} textStyle="" style="" />
        <Image className="work-1-img" alt="phones" src={phones} />
      </div>
    </div>
  );
};

export default StandardAutomobileAppRevamp;
