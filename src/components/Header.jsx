import Container from "./Container"
import Logo from "./ui/Logo"
import Navbar from "./ui/Navbar"
import Button from "./ui/Button"
import { LuArrowUpRight } from "react-icons/lu"

const Header = () => {
    return (
        <header className="px-5 pt-3 sticky top-0 z-40">
            <Container className="flex items-center justify-between p-3
             bg-white border border-line rounded-full">
                <Logo />
                <div className="hidden md:inline-block">
                    <Navbar />
                </div>
                <a href="#cta">
                    <Button>
                        Marcar consulta
                        <LuArrowUpRight />
                    </Button>
                </a>
            </Container>
        </header>
    )
}

export default Header