import { Sidebar } from "./Sidebar/Sidebar";
import { Dashboard } from "./Dashboard/Dashboard";
export const Home = () => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="p-7 h-screen flex-1">
        <Dashboard />
      </div>
    </div>
  );
};
