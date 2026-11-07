const Button = ({ children, type = "primary" }) => {
    return (
        <button
            className={`flex items-center gap-2 py-2 px-4 
                rounded-full 
                cursor-pointer 
                duration-1000
                transition-colors
                ${type === "primary" && "bg-brown-dark hover:bg-brown text-cream"}
                ${type === "secondary" && "bg-butter hover:bg-butter-light text-brown-dark"}
                ${type === "outline" && "border border-line hover:border-butter hover:bg-butter-light  text-brown-dark"}
                `
            }
        >
            {children}
        </button>
    )
}

export default Button