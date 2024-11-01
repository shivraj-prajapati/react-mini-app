import { FaRegFileAlt } from "react-icons/fa";
import { IoDownloadOutline, IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

export default function Card({ data , refrence }) {
  // Define Tailwind classes directly for colors
  const tagColorClasses = {
    blue: "bg-blue-600",
    green: "bg-green-600",
    red: "bg-red-600",
    orange: "bg-orange-600",
  };

  return (
    <motion.div drag dragConstraints={refrence}  whileDrag={{scale:1.2}} dragElastic={5} dragTransition={{ bounceStiffness: 300, bounceDamping: 15 }} className="w-60 h-72 flex-shrink-0 relative rounded-[45px] overflow-hidden bg-zinc-900/90 text-white py-10 px-8">
      <FaRegFileAlt />
      <p className="text-xs mt-5 leading-tight">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-8 py-3 mb-3">
          <h5 className="text-sm">{data.fileSize}</h5>
          <span className="w-6 h-6 rounded-full bg-white cursor-pointer flex items-center justify-center">
            {data.close ? <IoClose className="text-black" /> : <IoDownloadOutline size=".8em" className="text-black" />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full py-4 ${tagColorClasses[data.tag.tagColor] || "bg-gray-600"} flex items-center justify-center`}>
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}
