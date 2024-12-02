import styled from "styled-components";
import { Tabs } from "antd";

export const Section = styled.section`
  min-height: 65vh;
  width: 80%;
  background-color: ${(props) => props.theme.body};
  transition: all 0.3s linear;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 10%;
  padding-right: 10%;
  overflow-x: hidden;
`;

export const ExperienceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const StyledTabs = styled(Tabs)`
  width: 100%;
  font-size: ${(props) => props.theme.fontlg};

  .ant-tabs-nav {
    display: flex;
    justify-content: center;

    @media (min-width: 768px) {
      justify-content: center;
    }
  }

  .ant-tabs-tab {
    margin: 0 8px;
    font-size: ${(props) => props.theme.fontlg};
    font-family: "Nunito", sans-serif;
  }

  .ant-tabs-content-holder {
    margin-top: 1rem;
    overflow-x: hidden;

    @media (min-width: 768px) {
      margin-left: 2rem;
    }
  }
`;

export const TabContent = styled.div`
  padding: 2rem;
  background-color: ${(props) => props.theme.body};
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(${(props) => props.theme.bodyRgba}, 0.1);
  transition: all 0.3s ease-in-out;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  width: 100%;
  box-sizing: border-box;

  height: 450px;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const DetailItem = styled.li`
  margin: 0.5rem 0;
  font-size: ${(props) => props.theme.fontlg};
  font-family: "Nunito", sans-serif;
  color: ${(props) => props.theme.text};
  line-height: 1.6;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
`;

export const LargeTitle = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 90%;
  color: ${(props) => props.theme.text};
  align-self: center;
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxl};
  text-transform: capitalize;
  width: 100%;
  color: ${(props) => props.theme.text};
  align-self: center;
  margin-bottom: 2rem;
`;

export const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => `rgba(${props.theme.textRgba},0.6)`};
  align-self: flex-start;
  margin: 1rem auto;
  font-weight: 400;
`;
