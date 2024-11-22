import {
  Box,
  Container,
  Section,
  SubText,
  SubTextLight,
  Title,
} from "./projects-elements";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { StyledImage } from "./projects-elements";
import { Avatar, Chip, Stack } from "@mui/material";
import { useIsomorphicLayoutEffect } from "react-use";

const Projects = () => {
  // const ref = useRef(null);
  // gsap.registerPlugin(ScrollTrigger);

  // useIsomorphicLayoutEffect(() => {
  //     let element = ref.current;
  //
  //     ScrollTrigger.create({
  //         trigger: element,
  //         start: 'top top',
  //         end: 'bottom top',
  //         pin: true,
  //         pinSpacing: false,
  //         scrub: true,
  //         markers: false,
  //     });
  //
  //     return () => {
  //         ScrollTrigger.killAll();
  //     };
  // }, []);

  interface Technology {
    name: string;
    link: string;
    icon: string;
  }

  const technologyMap: Record<string, Technology> = {
    Flutter: {
      name: "Flutter",
      link: "https://flutter.dev/",
      icon: "/flutter.svg",
    },
    Dart: {
      name: "Dart",
      link: "https://dart.dev/",
      icon: "/dart.svg",
    },
    Firebase: {
      name: "Firebase",
      link: "https://firebase.google.com/",
      icon: "/firebase.svg",
    },
    React: {
      name: "React",
      link: "https://react.dev/",
      icon: "/react.svg",
    },
    Typescript: {
      name: "Typescript",
      link: "https://typescriptlang.org/",
      icon: "/typescript.svg",
    },
  };

  interface Project {
    title: string;
    description: string;
    details: string;
    technologies: string[];
    image: string;
    downloadLink?: string;
    sourceLink?: string;
  }

  return (
    <Section id="projects">
      <Container>
        <Box>
          <StyledImage
            src="/projects/foodyshare.png"
            alt="Foodyshare project image"
            width={600}
            height={500}
          />
        </Box>
        <Box>
          <Title>FoodyShare</Title>
          <SubText>A recipe curation and sharing app for Android.</SubText>
          <SubTextLight>
            FoodyShare is an application that enables you to search for recipes,
            interact with curators, access specific food categories, and save
            desired recipes to lists, all in one place.
          </SubTextLight>
          <Stack direction="row" spacing={2} paddingX={3}>
            <Chip
              component="a"
              href="https://flutter.dev/"
              target="_blank"
              size="medium"
              label={<SubTextLight>Flutter</SubTextLight>}
              avatar={<Avatar src="/flutter.svg" />}
              clickable
            />
            <Chip
              component="a"
              href="https://dart.dev/"
              target="_blank"
              size="medium"
              label={<SubTextLight>Dart</SubTextLight>}
              avatar={<Avatar src="/dart.svg" />}
              clickable
            />
            <Chip
              component="a"
              href="https://firebase.google.com/"
              target="_blank"
              size="medium"
              label={<SubTextLight>Firebase</SubTextLight>}
              avatar={<Avatar src="/firebase.svg" />}
              clickable
            />
          </Stack>
          <Link
            href="https://play.google.com/store/apps/details?id=com.samwahome.foodshare.food_share&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
            target="_blank"
          >
            <Image
              alt="Get it on Google Play"
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              width={200}
              height={100}
            />
          </Link>
        </Box>
      </Container>
    </Section>
  );
};

export default Projects;
