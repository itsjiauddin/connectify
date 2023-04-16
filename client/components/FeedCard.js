import Image from "next/image";
import { MdImage, MdMic, MdVideocam } from "react-icons/md";
import { FiUserPlus } from "react-icons/fi";

import p2 from "../public/assets/p2.jpeg";
import p3 from "../public/assets/p3.jpeg";
import post1 from "../public/assets/post1.jpeg";

export default function FeedCard() {
  return (
    <div className="space-y-4">
      <div className="bg-primary-1 py-3 px-4 rounded-md h-fit space-y-4 shadow-sm dark:bg-secondary-1">
        <div className="flex items-center space-x-4">
          <Image src={p2} className="h-12 w-12 rounded-full object-cover" />
          <input
            type="text"
            placeholder="What's on your mind.."
            className="outline-none bg-primary-2 px-20 py-3 rounded-full dark:bg-secondary-2"
          />
        </div>
        <div className="flex items-center justify-evenly">
          <div className="flex items-center space-x-2">
            <MdImage size={20} />
            <p>Image</p>
          </div>
          <div className="flex items-center space-x-2">
            <MdVideocam size={20} />
            <p>Video</p>
          </div>
          <div className="flex items-center space-x-2">
            <MdMic size={20} />
            <p>Audio</p>
          </div>
        </div>
      </div>
      <div className="bg-primary-1 py-3 px-4 rounded-md h-fit space-y-6 shadow-sm dark:bg-secondary-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image src={p3} className="h-12 w-12 rounded-full object-cover" />
            <div>
              <p className="font-bold">Steve Ralph</p>
              <p>Kolkata, IN</p>
            </div>
          </div>
          <FiUserPlus size={24} />
        </div>
        <div className="space-y-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic atque
            pariatur distinctio aliquam iusto minima sunt praesentium.
          </p>
          <Image src={post1} className="h-60 w-full object-cover rounded-md" />
        </div>
      </div>
    </div>
  );
}
