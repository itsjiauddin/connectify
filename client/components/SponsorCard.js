import Image from "next/image";

import info4 from "../public/assets/info4.jpeg";

export default function SponsorCard() {
  return (
    <div className="bg-primary-1 rounded-md shadow-sm p-4 space-y-2 h-fit w-80 dark:bg-secondary-1">
      <div className="flex justify-between">
        <h3 className="text-h3 font-bold">Sponsored</h3>
        <p>Create Ad</p>
      </div>
      <Image
        src={info4}
        alt="#"
        className="rounded-md h-60 w-full object-cover"
      />
      <div className="flex justify-between">
        <p className="font-bold">MikaCosmetics</p>
        <p>mikacosmetics.com</p>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nulla at
        iure voluptate quae repellat, tempora ipsum itaque. Quibusdam, dolor.
      </p>
    </div>
  );
}
