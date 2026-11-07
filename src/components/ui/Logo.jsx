import { LuEye } from "react-icons/lu"

const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
        <span className="border border-brown rounded-full p-2 text-brown">
          <LuEye/>
        </span>
        <span className="text-xl font-bold">VÉRA</span>
    </div>
  )
}

export default Logo