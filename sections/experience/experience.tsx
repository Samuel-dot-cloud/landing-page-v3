import {
  DetailItem,
  ExperienceContainer,
  LargeTitle,
  Section,
  StyledTabs,
  SubTextLight,
  TabContent,
  Title,
} from "./experience-elements";
import { useEffect, useState } from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

interface ExperienceItem {
  position: string;
  timePeriod: string;
  details: string[];
}

const experienceData: ExperienceItem[] = [
  {
    position: "Software Engineer @Kino AI",
    timePeriod: "Jan 2023 - Present",
    details: [
      "Write modern and maintainable code for an AI powered video processing web-based platform.",
      "Work with a variety of different languages, platforms and frameworks such as React and Typescript.",
      "Communicate with a multi-disciplinary team of engineers on a daily basis.",
    ],
  },
  {
    position: "Software Engineer @Senseg",
    timePeriod: "Jan 2022 - Dec 2022",
    details: [
      "Built up the Senseg V1 app from the ground up using Flutter with Dart in order to leverage Android and iOS within a single codebase.",
      "Built the Senseg V2 public-facing website using React, which served as a reference point for users looking to learn more about the service.",
      "Built RESTful APIs using NodeJS to verify phone numbers during sign-up on mobile, and also power the merchant charge experience on the web.",
      "Developed internal tooling with NodeJS and React for processing transaction requests.",
      "Conducted tests, reviewed, and contributed to the Senseg V2 app.",
    ],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState<string>("0");
  const [tabPosition, setTabPosition] = useState<"top" | "left">("top");

  useEffect(() => {
    const updateTabPosition = () => {
      setTabPosition(window.innerWidth > 768 ? "left" : "top");
    };
    updateTabPosition();
    window.addEventListener("resize", updateTabPosition);

    return () => {
      window.removeEventListener("resize", updateTabPosition);
    };
  }, []);

  const handleChange = (key: string) => {
    setActiveTab(key);
  };

  return (
    <Section id="experience">
      <LargeTitle>Experience</LargeTitle>
      <ExperienceContainer>
        <StyledTabs
          activeKey={activeTab}
          onChange={handleChange}
          tabPosition={tabPosition}
        >
          {experienceData.map((experience, index) => (
            <TabPane
              tab={
                <SubTextLight>{experience.position.split("@")[1]}</SubTextLight>
              }
              key={index.toString()}
            >
              <TabContent>
                <Title>{experience.position}</Title>
                <SubTextLight>{experience.timePeriod}</SubTextLight>
                <ul>
                  {experience.details.map((detail, detailIndex) => (
                    <DetailItem key={detailIndex}>{detail}</DetailItem>
                  ))}
                </ul>
              </TabContent>
            </TabPane>
          ))}
        </StyledTabs>
      </ExperienceContainer>
    </Section>
  );
};

export default Experience;
