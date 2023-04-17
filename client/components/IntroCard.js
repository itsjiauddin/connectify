import Link from "next/link";
import Image from "next/image";
import { FiUser } from "react-icons/fi";
import { MdEdit, MdOutlineLocationOn } from "react-icons/md";
import { BsBag } from "react-icons/bs";

import p2 from "../public/assets/p2.jpeg";
import linkedin from "../public/assets/linkedin.png";
import twitter from "../public/assets/twitter.png";

export default function IntroCard() {
  return (
    <div className="bg-primary-1 shadow-md rounded-md p-4 space-y-4 h-fit w-80 dark:bg-secondary-1 ">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image
            src={p2}
            alt="#"
            className="h-12 w-12 rounded-full object-cover"
          />
          <Link href={`/profile`}>
            <div>
              <h2 className="font-bold text-h2">Amelia Elizabeth</h2>
              <p>0 Friends</p>
            </div>
          </Link>
        </div>
        <FiUser size={30} />
      </div>
      <div className="space-y-2">
        <div className="flex items-center space-x-4">
          <MdOutlineLocationOn size={24} />
          <p>Bangalore, IN</p>
        </div>
        <div className="flex items-center space-x-4">
          <BsBag size={24} />
          <p>A Developer</p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <p>Who viewed your profile</p>
          <p>6790</p>
        </div>
        <div className="flex justify-between">
          <p>Impressions on your post</p>
          <p>7850</p>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="font-bold text-h3">Social Profiles</h3>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image src={twitter} alt="#" className="h-6 w-6" />
            <div>
              <p className="font-bold">Twitter</p>
              <p>Social Network</p>
            </div>
          </div>
          <MdEdit size={24} />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image src={linkedin} alt="#" className="h-6 w-6" />
            <div>
              <p className="font-bold">LinkedIn</p>
              <p>Network Platform</p>
            </div>
          </div>
          <MdEdit size={24} />
        </div>
      </div>
    </div>
  );
}
