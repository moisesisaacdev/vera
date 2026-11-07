const Title = ({ text, className = "text-brown-dark" }) => {
    return (
        <h2 className={`text-section-title max-w-2xl font-serif ${className}`}>
            {text}
        </h2>
    )
}

export default Title