import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import Navbar from "../components/Navbar";
import IntroCard from "../components/IntroCard";
import FeedCard from "../components/FeedCard";
import SponsorCard from "../components/SponsorCard";

export default function Home() {
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);
  const { mode } = useSelector((state) => state.mode);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  return (
    <div className={`${mode}`}>
      <div className=" bg-primary-2  dark:bg-secondary-2 dark:text-primary-2">
        <div className="max-w-7xl mx-auto space-y-4">
          <Navbar />
          <div className="grid grid-cols-3">
            <IntroCard />
            <FeedCard />
            <div className="justify-self-end">
              <SponsorCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
