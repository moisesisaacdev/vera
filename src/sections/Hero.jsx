import Container from "../components/Container"
import Badge from "../components/ui/Badge"
import Button from "../components/ui/Button"
import image from "../assets/images/hero.jpeg"
import { LuArrowRight, LuScanEye } from "react-icons/lu"
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"

const Hero = () => {
    const heroRef = useRef()

    useLayoutEffect(() => {
        const heroEl = heroRef.current
        const ctx = gsap.context(() => {
            const tl = gsap.timeline()
            tl.fromTo(".texts > *", {
                y: 80,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: .8,
                stagger: .5
            }).fromTo(".btns > a", {
                x: -100,
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                duration: .5,
                stagger: 0.05
            }).fromTo(".image-area > *", {
                y: 80,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: .8,
                stagger: .8
            })
        }, heroEl)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={heroRef} id="hero">
            <Container className="grid md:grid-cols-2 items-center min-h-[calc(100vh-78px)] gap-6 py-12.5">
                <div className="texts space-y-5 max-w-150">
                    <div className="badge">
                        <Badge text="Óptica contemporânea" />
                    </div>
                    <h1 className="title text-brown-dark text-hero font-serif">
                        Veja o mundo com <span className="text-brown font-italic">outra perspectiva.</span>
                    </h1>
                    <p className="description max-w-100 pt-4 text-muted">
                        Uma experiência óptica pensada para quem procura
                        precisão visual, design intemporal e uma relação
                        mais próxima com os seus óculos.
                    </p>
                    <div className="btns flex flex-col sm:flex-row gap-2">
                        <a href="#collection">
                            <Button>
                                Explorar coleção
                                <LuArrowRight />
                            </Button>
                        </a>
                        <a href="#atelier">
                            <Button type="outline">
                                Conhecer a Véra
                            </Button>
                        </a>
                    </div>
                </div>
                <div className="image-area rounded-3xl overflow-hidden relative">
                    <img src={image} alt="Lentís" className="md:min-h-112.5 lg:min-h-137.5 object-cover" />
                    <div className="h-25 w-25 rounded-full 
                        absolute right-2 top-2 bg-butter
                        flex flex-col items-center justify-center 
                        rotate-30 text-xxs font-bold">
                        <span>DESIGN</span>
                        <span>+</span>
                        <span>VISÃO</span>
                    </div>
                    <div className="bg-white rounded-3xl p-5 max-w-60 
                        space-y-4 absolute bottom-4 left-4">
                        <div className="p-4 bg-butter-light w-fit rounded-full">
                            <LuScanEye />
                        </div>
                        <strong>Precisão em cada detalhe</strong>
                        <p className="text-xxs">
                            Avaliação visual e aconselhamento personalizado para cada pessoa.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Hero