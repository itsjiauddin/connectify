import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import Navbar from "@/components/Navbar";
import IntroCard from "@/components/IntroCard";
import FeedCard from "@/components/FeedCard";
import SponsorCard from "@/components/SponsorCard";

export default function Home() {
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  return (
    <div className="space-y-4">
      <Navbar />
      <div className="grid grid-cols-3">
        <IntroCard />
        <FeedCard />
        <div className="justify-self-end">
          <SponsorCard />
        </div>
      </div>
    </div>
  );
}
