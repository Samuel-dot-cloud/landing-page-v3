import {
  Bottom,
  Column,
  ColumnTitle,
  Container,
  IconList,
  Item,
  ItemsTitle,
  Left,
  MenuContainer,
  MenuItems,
  Section,
} from "./footer-elements";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdEmail } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { FaFilePdf, FaGithub, FaLinkedin, FaRegFilePdf } from "react-icons/fa";
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
            >
              <FaGithub size={22} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/samuel-wahome-571a1a1b0/"
              target="_blank"
              rel="noopener"
            >
              <FaLinkedin size={22} />
            </Link>
            <Link
              href="https://twitter.com/samuelwahome_"
              target="_blank"
              rel="noopener"
            >
              <BsTwitterX size={22} />
            </Link>
            <Link
              href="mailto:hey@samwahome.com"
              target="_blank"
              rel="noopener"
            >
              <MdEmail size={22} />
            </Link>
            <Link
              href={resumePDF}
              download="resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaRegFilePdf size={22} />
            </Link>
          </IconList>
        </Left>
        <MenuContainer>
          <Column>
            <ColumnTitle>Sections</ColumnTitle>
            <Item onClick={() => scrollTo("home")}>Home</Item>
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
