import { LuGlasses, LuScanEye, LuTag, LuWrench } from "react-icons/lu"
import Container from "../components/Container"
import Badge from "../components/ui/Badge"
import Title from "../components/ui/Title"
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"

const Services = () => {
    const services = [
        {
            title: "Avaliação visual",
            description: "Uma análise cuidadosa das suas necessidades visuais.",
            icon: LuScanEye
        },
        {
            title: "Lentes personalizadas",
            description: "Soluções ópticas adaptadas à sua rotina.",
            icon: LuTag
        },
        {
            title: "Consultoria de armações",
            description: "Ajuda para encontrar uma armação que combine consigo.",
            icon: LuGlasses
        },
        {
            title: "Ajustes e manutenção",
            description: "Pequenos cuidados para manter os seus óculos confortáveis.",
            icon: LuWrench
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
                duration: 0.5,
                stagger: 0.05
            })

        }, sectionEl)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} id="services">
            <Container>
                <Badge text="Serviços" />
                <div className="texts flex flex-col gap-5 pb-10 md:flex-row md:justify-between">
                    <Title text="Cuidamos da sua visão por inteiro." />
                    <p className="md:self-end">Do primeiro exame à escolha da armação,
                        cada etapa é acompanhada com atenção.</p>
                </div>
                <div className="content border-t border-line text-brown">
                    {services.map((item, index) => (
                        <div
                            key={index}
                            className="py-4 flex items-center justify-between border-b border-line"
                        >
                            <div className="flex items-center gap-5">
                                <div>0{index + 1}</div>
                                <div>
                                    <h2 className="text-service-title font-serif">{item.title}</h2>
                                    <p className="text-xxs">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                            <div className="text-xl">
                                {(() => {
                                    const Icon = item.icon
                                    return (
                                        <Icon />
                                    )
                                })()}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Services