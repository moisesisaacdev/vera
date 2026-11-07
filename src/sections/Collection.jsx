import Container from "../components/Container"
import Badge from "../components/ui/Badge"
import Button from "../components/ui/Button"
import Title from "../components/ui/Title"
import vera1 from "../assets/images/vera-1.jpeg"
import vera2 from "../assets/images/vera-2.jpeg"
import vera3 from "../assets/images/vera-3.jpeg"
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"

const Collection = () => {
    const products = [
        {
            description: "Acetato castanho",
            image: vera1
        },
        {
            description: "Metal dourado",
            image: vera2
        },
        {
            description: "Acetato transparente",
            image: vera3
        }
    ]

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
                duration: 1,
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
        <section ref={sectionRef} id="collection" className="bg-brown-dark">
            <Container>
                <Badge text="Coleção" />
                <div className="texts flex flex-col gap-5 pb-10 md:flex-row md:justify-between">
                    <Title text="Armações escolhidas para durar." className="text-cream" />
                    <p className="self-end text-cream">Criámos um espaço tranquilo para tornar a escolha
                        dos seus óculos numa experiência simples, pessoal
                        e cuidadosamente acompanhada.</p>
                </div>
                <div className="content grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {products.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-2xl overflow-hidden"
                        >
                            <img
                                src={item.image}
                                alt={item.description}
                                className="w-full"
                            />
                            <div className="p-5 bg-[#3a2f28]">
                                <h3 className="text-xl text-white">
                                    {`Véra 0${index + 1}`}
                                </h3>
                                <p className="text-gray-300">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Collection