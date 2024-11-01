import { useRef } from "react";
import Card from "./Card";


export default function Forground() {
  const ref = useRef(null);

  const data = [
    { 
        desc: "Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Atque velit reiciendis.",
        fileSize: "1.2mb", 
        close: true, 
        tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" } 
    },
    { 
        desc: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        fileSize: "2.5mb", 
        close: false, 
        tag: { isOpen: true, tagTitle: "Get It Now", tagColor: "blue" } 
    },
    { 
        desc: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
        fileSize: "3.1mb", 
        close: true, 
        tag: { isOpen: false, tagTitle: "Start Download", tagColor: "red" } 
    },
    { 
        desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        fileSize: "0.5mb", 
        close: false, 
        tag: { isOpen: true, tagTitle: "Grab It Now", tagColor: "orange" } 
    }
];



  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-8 flex-wrap p-5">
      {data.map((item) => (
        <Card key={item.desc} data={item} refrence={ref}/>
      ))}
    </div>
  );
}
