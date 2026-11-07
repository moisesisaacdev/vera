import Container from "./Container"
import Logo from "./ui/Logo"
import Navbar from "./ui/Navbar"
import Button from "./ui/Button"
import { LuArrowUpRight } from "react-icons/lu"

const Footer = () => {
    return (
        <footer className="px-5 pt-3 sticky top-0 z-40 text-muted">
            <Container>
                <div className="sm:flex justify-between space-y-5 pb-6">
                    <div className="space-y-4 max-w-75">
                        <Logo />
                        <p>
                            Óptica contemporânea dedicada à visão,
                            ao conforto e ao design.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h2 className="font-semibold uppercase text-brown">Navegação</h2>
                        <Navbar direction="col" gap={2} />
                    </div>
                </div>
                <div className="border-t border-line py-6 sm:flex justify-between">
                    <p>© {new Date().getFullYear()} VÉRA Óptica</p>
                    <p>Visão com intenção.</p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer