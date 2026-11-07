const Container = ({ children, className = "" }) => {
    return (
        <div className={`w-[90vw] max-w-295 mx-auto ${className}`}>
            {children}
        </div>
    )
}

export default Container