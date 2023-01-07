import {Btn} from "./button-elements";
import Link from "next/link";


const Button = ({text, link}: {link: string, text: string}) => {
    return (
        <Btn>
            <Link href={link} aria-label={text} target="_blank" rel="noreferrer">
                {text}
            </Link>
        </Btn>
    )
}

export default Button