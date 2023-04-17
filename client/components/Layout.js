import { useSelector } from "react-redux";

export default function Layout({ children }) {
  const { mode } = useSelector((state) => state.mode);

  return (
    <div className={`${mode}`}>
      <div className="text-text bg-primary-2 h-screen dark:bg-secondary-2 dark:text-primary-2">
        <div className="max-w-7xl mx-auto">{children}</div>
      </div>
    </div>
  );
}
