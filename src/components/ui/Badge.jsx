const Badge = ({ text }) => {
    return (
        <div className="flex items-center gap-2 text-brown uppercase">
            <span className="inline-block h-px w-7.5 bg-brown"></span>
            <span>{text}</span>
        </div>
    )
}

export default Badge