import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import Navbar from "@/components/Navbar";
import IntroCard from "@/components/IntroCard";
import FeedCard from "@/components/FeedCard";

export default function Profile() {
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
      </div>
    </div>
  );
}
