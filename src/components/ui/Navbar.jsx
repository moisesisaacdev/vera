const Navbar = ({ direction = "rows", gap = 5 }) => {
    const links = [
        { label: "Início", href: "#hero" },
        { label: "Atelier", href: "#atelier" },
        { label: "Coleção", href: "#collection" },
        { label: "Serviços", href: "#services" },
        { label: "Contato", href: "#cta" }
    ]

    return (
        <nav>
            <ul className={`flex gap-${gap} flex-${direction}`}>
                {links.map((link) => (
                    <li key={link.label.toLowerCase()} className="text-muted">
                        <a className="transition-all duration-1000" href={link.href}>
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar