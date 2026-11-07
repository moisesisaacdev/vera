import Container from "../components/Container"
import Title from "../components/ui/Title"
import Button from "../components/ui/Button"
import { LuArrowUpRight } from "react-icons/lu"

const Cta = () => {
    return (
        <section id="cta">
            <Container>
                <div className="bg-brown sm:p-20 p-8 rounded-2xl relative overflow-hidden">
                    <Title
                        text="Está na hora de olhar de perto."
                        className="text-cream"
                    />
                    <p className="py-6 text-cream max-w-100">
                        Visite o nosso espaço e descubra uma experiência
óptica mais tranquila, personalizada e próxima.
                    </p>
                    <a href="#">
                        <Button type="secondary">
                            Marcar uma visita
                            <LuArrowUpRight />
                        </Button>
                    </a>
                    <div className="absolute h-60 w-60 bg-[#92745e] rounded-full top-0 right-0 translate-x-1/2 -translate-y-1/2"></div>
                </div>
            </Container>
        </section>
    )
}

export default Cta