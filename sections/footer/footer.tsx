import {
  Bottom,
  Column,
  ColumnTitle,
  Container,
  IconList,
  Item,
  Left,
  MenuContainer,
  Section,
} from "./footer-elements";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdEmail } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaRegFilePdf } from "react-icons/fa";
import resumePDF from "../../public/ resume.pdf";

const Footer = () => {
  const router = useRouter();

  const scrollTo = (id: string) => {
    let element = document.getElementById(id);

    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <Section>
      <Container>
        <Left>
          <IconList>
            <Link
              href="https://github.com/Samuel-dot-cloud"
              target="_blank"
              rel="noopener"
              aria-label="GitHub repo"
            >
              <FaGithub size={22} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/samuel-wahome-571a1a1b0/"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin size={22} />
            </Link>
            <Link
              href="https://twitter.com/samuelwahome_"
              target="_blank"
              rel="noopener"
              aria-label="X profile"
            >
              <BsTwitterX size={22} />
            </Link>
            <Link
              href="mailto:hey@samwahome.com"
              target="_blank"
              rel="noopener"
              aria-label="Email address"
            >
              <MdEmail size={22} />
            </Link>
            <Link
              href={resumePDF}
              download="resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download resume"
            >
              <FaRegFilePdf size={22} />
            </Link>
          </IconList>
        </Left>
        <MenuContainer>
          <Column>
            <ColumnTitle>Sections</ColumnTitle>
            <Item onClick={() => scrollTo("about")}>About</Item>
            <Item onClick={() => scrollTo("experience")}>Experience</Item>
            <Item onClick={() => scrollTo("projects")}>Projects</Item>
          </Column>
          <Column>
            <ColumnTitle>Info Diet</ColumnTitle>
            <Item onClick={() => router.push("/books")}>Books</Item>
            <Item onClick={() => router.push("/podcasts")}>Podcasts</Item>
            <Item onClick={() => router.push("/newsletters")}>Newsletters</Item>
          </Column>
        </MenuContainer>
      </Container>
      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} Samuel Wahome. All rights reserved.
        </span>
      </Bottom>
    </Section>
  );
};

export default Footer;
