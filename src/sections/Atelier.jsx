import Container from "../components/Container"
import Badge from "../components/ui/Badge"
import Button from "../components/ui/Button"
import Title from "../components/ui/Title"
import image from "../assets/images/atelier.jpeg"
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"

const Atelier = () => {
    const sectionRef = useRef()

    useLayoutEffect(() => {
        const sectionEl = sectionRef.current
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionEl,
                    start: "top 80%",
                    end: "bottom bottom"
                }
            })

            tl.fromTo(".texts > *", {
                y: 80,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.05
            }).fromTo(".content > *", {
                    y: 80,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.05
                })

    }, sectionEl)

    return () => ctx.revert()
}, [])

return (
    <section ref={sectionRef} id="atelier">
        <Container>
            <div className="texts">
                <Badge text="Atelier" />
                <div className="flex flex-col gap-5 pb-10 md:flex-row md:justify-between">
                    <Title text="Uma óptica onde a visão encontra o design." />
                    <p className="self-end">Criámos um espaço tranquilo para tornar a escolha
                        dos seus óculos numa experiência simples, pessoal
                        e cuidadosamente acompanhada.</p>
                </div>
            </div>
            <div className="content grid gap-8 md:grid-cols-2">
                <div className="rounded-3xl overflow-hidden">
                    <img src={image} alt="Imagem Atelier" className="w-full h-full object-cover" />
                </div>
                <div className="bg-cream rounded-3xl p-5 flex items-center justify-center">
                    <div className="space-y-5">
                        <h3 className="text-story-title text-brown-dark font-serif">
                            Menos excesso.
                            Mais intenção.
                        </h3>
                        <p>
                            Acreditamos que um bom par de óculos não precisa
                            de chamar atenção para si. Precisa simplesmente
                            de fazer sentido em quem o usa.
                        </p>
                        <p>
                            Por isso selecionamos armações com linhas
                            equilibradas, materiais cuidadosamente escolhidos
                            e soluções ópticas pensadas para o dia a dia.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    </section>
)
}

export default Atelier