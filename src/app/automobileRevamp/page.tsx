import React from "react";
import Image from "next/image";
import icon1 from "../../../public/Frame 28.png";
import icon4 from "../../../public/Frame 25.png";
import icon6 from "../../../public/Frame 23.png";
import icon7 from "../../../public/Frame 22.png";
import phones from "../../../public/Frame 13.png";
import userPersona from "../../../public/userPersona.png";
import remVampCar from "../../../public/revampCar.png";
import darkPhone from "../../../public/darkPhone.png";
import issueCar from "../../../public/issueCar.png";
import wireframe from "../../../public/wireframe.png";
import design from "../../../public/design.png";
import designIteration from "../../../public/designIteration.png";
import infoArc from "../../../public/infoArc.png";
import keyProblemCarRevamp from "../../../public/keyProblemCarRevamp.png";
import cars3 from "../../../public/3cars.png";
import sticky from "../../../public/stickyNotes.png";
import SummaryCard from "../components/summaryCard/SummaryCard";
import Card from "../components/card/card";
import FeatureComparisonTable from "./FeatureComparisonTable";
import "./styles.css";
import { constants } from "@/app/shared/constants";
import StatusCard from "./statusCard";

const StandardAutomobileAppRevamp = () => {
  const iconList = [icon1, icon4, icon6, icon7];

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
    <div className="revamp-head-page">
      <div className="revamp-head-image-section">
        <div className="revamp-head-icons">
          {iconList.map((icon, index) => (
            <Image
              src={icon}
              alt="revamp-icons"
              className="revamp-icons"
              key={index}
            />
          ))}
        </div>
        <Image
          className="revamp-head-car-image"
          alt="remVampCar"
          src={remVampCar}
        />
      </div>
      <div className="revamp-head-main-title-section">
        <SummaryCard
          title={constants.standardAutomobile}
          content={constants.carRevampTitleTag}
          containerStyle="revamp-page-heading-container"
          titleStyle="revamp-page-heading-title"
          contentStyle="revamp-page-heading-content"
        />
      </div>
      <div className="revamp-head-main-phone-content-section">
        <div className="revamp-phone-wrapper">
          <Image className="revamp-phone" alt="phones" src={darkPhone} />
        </div>
        <Card
          text={constants.comprehensive}
          textStyle="revamp-phone-description-text"
          style="revamp-phone-description"
        />
      </div>
      <div className="car-revamp-key-problem">
        <div className="car-revamp-text-wrapper-container">
          {constants.carRevampIssues.map((issue, index) => (
            <Card
              key={index}
              text={issue}
              textStyle="car-revamp-text"
              style="car-revamp-text-wrapper"
            />
          ))}
        </div>

        <div className="car-revamp-image-text-wrapper">
          <span className="car-revamp-key-problem-text">
            {constants.keyProblem}
          </span>
          <Image
            className="work-1-img"
            alt="phones"
            src={keyProblemCarRevamp}
          />
        </div>
      </div>

      <div className="revamp-heuristic-evaluation">
        <Card
          text={constants.heuristicEvaluation}
          textStyle="revamp-heuristic-evaluation-text"
          style="revamp-heuristic-evaluation-wrapper"
        />

        <div className="revamp-heuristic-image-content-section">
          <div className="revamp-heuristic-image-wrapper">
            <Image className="revamp-heuristic-image" alt="cars" src={cars3} />
          </div>

          <Card
            text={constants.heuristicDescription}
            textStyle="revamp-heuristic-description"
            style="revamp-heuristic-wrapper"
          />
        </div>

        <div className=" revamp-heuristic-counts-main-wrapper">
          <div className="flex flex-col gap-4">
            {heuristics.slice(0, 5).map(({ count, text }, index) => (
              <StatusCard
                key={index}
                count={count}
                content={text}
                containerClassName="revamp-heuristic-count-container"
                countContainerClassName="revamp-heuristic-count-wrapper"
                countTextClassName="revamp-heuristic-count"
                contentContainerClassName="revamp-heuristic-count-text-wrapper"
                contentTextClassName="revamp-heuristic-count-text"
              />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {heuristics.slice(5).map(({ count, text }, index) => (
              <StatusCard
                key={index + 5}
                count={count}
                content={text}
                containerClassName="revamp-heuristic-count-container"
                countContainerClassName="revamp-heuristic-count-wrapper"
                countTextClassName="revamp-heuristic-count"
                contentContainerClassName="revamp-heuristic-count-text-wrapper"
                contentTextClassName="revamp-heuristic-count-text"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="revamp-severity-report">
        <Card
          text={constants.severityReport}
          textStyle="revamp-heuristic-evaluation-text"
          style="revamp-heuristic-evaluation-wrapper"
        />
        <div className="car-revamp-severity-issue-image-list">
          <div className="revamp-severity-image-text-wrapper">
            <span className="car-revamp-key-problem-text">
              {constants.issue235}
            </span>
            <Image className="" alt="issueCar" src={issueCar} />
          </div>
          <div className="revamp-severity-issue-list">
            {severity.map(({ count, text }, index) => (
              <StatusCard
                key={index}
                count={count}
                content={text}
                containerClassName="revamp-heuristic-count-container"
                countContainerClassName="revamp-heuristic-count-wrapper"
                countTextClassName="revamp-heuristic-count"
                contentContainerClassName="revamp-heuristic-count-text-wrapper"
                contentTextClassName="revamp-heuristic-count-text"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="revamp-usability-section">
        <Card
          text={constants.s4usability}
          textStyle="revamp-heuristic-evaluation-text"
          style="revamp-heuristic-evaluation-wrapper"
        />

        <div className="flex justify-center gap-12">
          <div className="flex flex-col gap-4 flex-1">
            {s4Issues.slice(0, 3).map(({ title, content }, index) => (
              <SummaryCard
                key={index}
                title={title}
                content={content}
                containerStyle="revamp-usability-issue-wrapper"
                titleStyle="revamp-usability-usability-text-container"
                contentStyle="revamp-usability-count-text"
              />
            ))}
          </div>
          <div className="flex flex-col gap-4 flex-1">
            {s4Issues.slice(3).map(({ title, content }, index) => (
              <SummaryCard
                key={index + 3}
                title={title}
                content={content}
                containerStyle="revamp-usability-issue-wrapper "
                titleStyle="revamp-usability-usability-text-container"
                contentStyle="revamp-usability-count-text"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="revamp-competitor-analysis">
        <Card
          text={constants.competitorAnalysis}
          textStyle="revamp-heuristic-evaluation-text"
          style="revamp-heuristic-evaluation-wrapper"
        />

        <FeatureComparisonTable />
      </div>
      <div className="revamp-user-persona">
        <Card
          text={constants.UserPersona}
          textStyle="revamp-heuristic-evaluation-text"
          style="revamp-heuristic-evaluation-wrapper"
        />

        <Image className="work-1-img" alt="userPersona" src={userPersona} />
      </div>

      <div className="revamp-swot-analysis">
        <Card
          text={constants.SWOTAnalysis}
          textStyle="revamp-heuristic-evaluation-text"
          style="revamp-heuristic-evaluation-wrapper"
        />
        {
          <div className="revamp-swot-list-item-wrapper">
            {swotAnalysis.map(({ title, content }, index) => (
              <div key={index} className="revamp-swot-list-items">
                <span className="revamp-swot-list-head">{title}</span>
                <div className="revamp-swot-list-points">
                  <ul className="revamp-swot-list-text-list">
                    {content.map((text, i) => (
                      <li key={i}>{text}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        }
      </div>
      <div className="revamp-understand">
        <Card
          text={constants.understand}
          textStyle="revamp-heuristic-evaluation-text"
          style="revamp-heuristic-evaluation-wrapper"
        />
        <div className="revamp-understand-text-image">
          <div className="revamp-understand-head">
            <h2 className="revamp-understand-head-text">{constants.score}</h2>
            {evaluationCriteria.map(({ title, text }, index) => (
              <div key={index}>
                <div className="flex items-start gap-3">
                  <span className="text-[82px] leading-none  mt-[-23px] text-[#C7C7BB]">
                    &#8226;
                  </span>
                  <div>
                    <span className="revamp-understand-sub block">{title}</span>
                    <p className="revamp-understand-sub-text mt-1">{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="stick-image">
            <Image className="work-1-img" alt="phones" src={sticky} />
          </div>
        </div>
      </div>
      <div className="how-might-we-main-wrapper">
        <Card
          text={constants.howMight}
          textStyle="revamp-heuristic-evaluation-text"
          style="revamp-heuristic-evaluation-wrapper"
        />

        <div className="revamp-how-might-list-wrapper flex justify-center gap-6">
          <div className="w-1/2 flex flex-col gap-3">
            {howMight.slice(0, 3).map((text, index) => (
              <div key={index} className="revamp-how-might-wrapper">
                <p className="revamp-how-might-text">{text}</p>
              </div>
            ))}
          </div>
          <div className="w-1/2 flex flex-col gap-3">
            {howMight.slice(3).map((text, index) => (
              <div key={index + 3} className="revamp-how-might-wrapper">
                <p className="revamp-how-might-text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="revamp-information-architecture">
        <Card
          text={constants.informationArchitecture}
          textStyle="revamp-heuristic-evaluation-text"
          style="revamp-heuristic-evaluation-wrapper"
        />
        <Image alt="infoArc" src={infoArc} />
      </div>
      <div className="revamp-information-architecture">
        <Card
          text={constants.wireframe}
          textStyle="revamp-wire-text"
          style="revamp-wire-wrapper"
        />
        <Image alt="wireframe" src={wireframe} />
      </div>

      <div>
        <Card
          text={constants.designIterations}
          textStyle="revamp-wire-text"
          style="revamp-wire-wrapper"
        />
        <Image className="work-1-img" alt="phones" src={designIteration} />
      </div>
      <div>
        <Card
          text={constants.designs}
          textStyle="revamp-wire-text"
          style="revamp-wire-wrapper"
        />
        <Image className="work-1-img" alt="phones" src={design} />
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
