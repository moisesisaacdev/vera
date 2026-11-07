import Container from "../components/Container"
import Title from "../components/ui/Title"
import { CgQuote } from "react-icons/cg"

const Atelier = () => {
    return (
        <section className="bg-butter-light">
            <Container className="text-center py-10 flex flex-col items-center">
                <div className="text-section-title font-serif">
                    <CgQuote />
                </div>
                <Title text="A melhor armação é aquela que
parece ter sido feita para si." />
                <p className="pt-6">VÉRA Óptica · Luanda</p>
            </Container>
        </section>
    )
}

export default Atelier