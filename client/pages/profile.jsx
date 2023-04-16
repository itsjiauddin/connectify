import Navbar from "../components/Navbar";
import IntroCard from "../components/IntroCard";
import FeedCard from "../components/FeedCard";

export default function Profile() {
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
