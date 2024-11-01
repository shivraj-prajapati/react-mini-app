import { FaRegFileAlt } from "react-icons/fa";

export default function Card() {
  return (
    <div className="w-60 h-72 relative rounded-[50px] overflow-hidden bg-zinc-900/90 text-white p-7">
      <FaRegFileAlt />
      <p className="text-xs mt-5 leading-tight">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam numqua</p>
      <div className="footer absolute left-0 bottom-0 w-full py-4 bg-orange-400"></div>
    </div>
  )
}
