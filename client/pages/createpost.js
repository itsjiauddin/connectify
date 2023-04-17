import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import Navbar from "@/components/Navbar";

export default function CreatePost() {
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
      <div className="bg-primary-1 p-4 space-y-4 text-center shadow-sm rounded-md dark:bg-secondary-1">
        <h2 className="font-bold text-h2">Create a new post</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Type Something..."
            className="block mx-auto pb-20 pt-2 px-10 rounded-md outline-none bg-primary-2 dark:bg-secondary-2"
          />
          <input type="file" className="block mx-auto pl-20" />
          <button
            type="submit"
            className="bg-primary-3 px-10 py-2 rounded-md text-primary-1"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
}
