import BooksSection from "../sections/books/books-section";
import { NextPage } from "next";
import Navigation from "../components/navigation";
import BackButton from "../components/back-button";
import { Main } from "../components/back-button-elements";

const Books: NextPage = () => {
  return (
    <Main>
      <Navigation isGlobal={true} />
      <BackButton />
      <BooksSection />
    </Main>
  );
};

export default Books;
