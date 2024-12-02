import {
  ButtonGroup,
  Container,
  LargeTitle,
  ProjectBox,
  ProjectContent,
  Section,
  StyledButton,
  StyledTech,
  SubText,
  SubTextLight,
  Title,
} from "./projects-elements";
import React from "react";
import { StyledImage } from "./projects-elements";
import { RiFlutterFill } from "react-icons/ri";
import { SiDart, SiGithub, SiTauri } from "react-icons/si";
import { BiLogoFirebase, BiLogoTypescript } from "react-icons/bi";
import { FaReact, FaRust, FaSwift } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { FiDownload } from "react-icons/fi";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import { Howl } from "howler";

const Projects = () => {
  interface Technology {
    name: string;
    link: string;
    icon: React.ElementType;
  }

  const technologyMap: Record<string, Technology> = {
    Flutter: {
      name: "Flutter",
      link: "https://flutter.dev/",
      icon: RiFlutterFill,
    },
    Dart: {
      name: "Dart",
      link: "https://dart.dev/",
      icon: SiDart,
    },
    Firebase: {
      name: "Firebase",
      link: "https://firebase.google.com/",
      icon: BiLogoFirebase,
    },
    React: {
      name: "React",
      link: "https://react.dev/",
      icon: FaReact,
    },
    Typescript: {
      name: "Typescript",
      link: "https://typescriptlang.org/",
      icon: BiLogoTypescript,
    },
    Rust: {
      name: "Rust",
      link: "https://www.rust-lang.org/",
      icon: FaRust,
    },
    Tauri: {
      name: "Tauri",
      link: "https://v2.tauri.app/",
      icon: SiTauri,
    },
    Swift: {
      name: "Swift",
      link: "https://www.swift.org/",
      icon: FaSwift,
    },
  };

  type TechnologyName = keyof typeof technologyMap;

  interface Project {
    title: string;
    description: string;
    details: string;
    technologies: TechnologyName[];
    image: string;
    downloadLink?: string;
    sourceLink?: string;
  }

  const projectsData: Project[] = [
    {
      title: "FoodyShare",
      description: "A recipe curation and sharing app for Android.",
      details:
        "FoodyShare enables you to search for recipes, interact with curators," +
        " access specific food categories, and save desired recipes to lists, all in one place.",
      technologies: ["Flutter", "Dart", "Firebase"],
      image: "/projects/foodyshare.png",
      downloadLink:
        "https://play.google.com/store/apps/details?id=com.samwahome.foodshare.food_share&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
    },
    {
      title: "SysScope",
      description:
        "A feature-packed system monitor to view resources such as disk, battery, CPU and memory usage. ",
      details:
        "SysScope is a macOS system monitoring application that provides detailed system information," +
        " including battery, CPU, memory and disk stats, together with the various running processes specific to those stats.",
      technologies: ["React", "Typescript", "Rust", "Tauri", "Swift"],
      image: "/projects/syscope.jpg",
      sourceLink: "https://github.com/Samuel-dot-cloud/sys-scope",
      downloadLink: "https://github.com/Samuel-dot-cloud/sys-scope/releases",
    },
  ];

  const sound = new Howl({
    src: ["/turn.mp3"],
    rate: 1.5,
  });

  let isManualTurn = false;

  return (
    <Section id="projects">
      <LargeTitle>Projects</LargeTitle>
      <Container>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ type: "fraction" }}
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
          className="mySwiper"
          allowTouchMove={true}
          onTransitionStart={() => {
            if (isManualTurn) {
              sound.play();
              isManualTurn = false;
            }
          }}
          onTouchStart={() => {
            isManualTurn = true;
          }}
          // onSlideChangeTransitionStart={(swiper) => {
          //   if (swiper.autoplay.running) {
          //     isManualTurn = false;
          //   }
          // }}
          onClick={() => {
            isManualTurn = true;
          }}
        >
          {projectsData.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectBox>
                <StyledImage
                  src={project.image}
                  alt={`${project.title} project image`}
                  width={300}
                  height={300}
                />
                <ProjectContent>
                  <Title>{project.title}</Title>
                  <SubText>{project.description}</SubText>
                  <SubTextLight>{project.details}</SubTextLight>
                  <div>
                    {project.technologies.map((tech) => {
                      const techData = technologyMap[tech];
                      if (!techData) return null;
                      return (
                        <Link
                          href={techData.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          key={techData.name}
                        >
                          <StyledTech aria-label={techData.name}>
                            <techData.icon size={20} aria-hidden="true" />
                            <span>{techData.name}</span>
                          </StyledTech>
                        </Link>
                      );
                    })}
                  </div>
                  <ButtonGroup>
                    {project.downloadLink && (
                      <StyledButton
                        href={project.downloadLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Download live app"
                      >
                        <FiDownload
                          size={18}
                          title="Download"
                          aria-hidden="true"
                        />
                        <span>Download</span>
                      </StyledButton>
                    )}
                    {project.sourceLink && (
                      <StyledButton
                        href={project.sourceLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View source code on GitHub"
                      >
                        <SiGithub size={18} title="Github" aria-hidden="true" />
                        <span>Source code</span>
                      </StyledButton>
                    )}
                  </ButtonGroup>
                </ProjectContent>
              </ProjectBox>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className="swiper-button-prev"
          onClick={() => sound.play()}
          aria-label="Previous slide"
          role="button"
          tabIndex={0}
        ></div>
        <div
          className="swiper-button-next"
          onClick={() => sound.play()}
          aria-label="Next slide"
          role="button"
          tabIndex={0}
        ></div>
      </Container>
    </Section>
  );
};

export default Projects;
