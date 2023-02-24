import {LogoImage} from "./logo-elements"
import Link from "next/link";


const Logo = () => {
    return (
        <Link href="/">
            <LogoImage src="/logo.png" alt="Logo" width={60} height={60}/>
        </Link>
    )
}

export default Logo