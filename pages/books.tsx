import BooksSection from "../sections/books/books-section";
import {NextPage} from "next";
import Navigation from "../components/navigation";

const Books: NextPage = () => {
    return (
        <main>
            <Navigation isGlobal={true}/>
            <BooksSection/>
        </main>
    );
}

export default Books;