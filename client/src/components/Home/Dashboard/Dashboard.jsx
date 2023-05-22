import { Stats } from "./Stats/Stats";
import { AreaChart } from "./Charts/AreaChart";
import { VerticalBarChart } from "./Charts/VerticalBarChart";
export const Dashboard = () => {
  return (
    <>
      <h1 className="text-5xl font-bold flex justify-start px-5">Dashboard</h1>
      <Stats></Stats>
      <div className="flex lg:flex-row flex-col gap-2 mx-16">
        <div className="basis-1/2 shadow-lg p-5 rounded-sm  ">
          <span className="text-2xl">
            Niveles registrados en las ultimas 24 horas
          </span>
          <VerticalBarChart />
        </div>
        <div className="basis-1/2 shadow-lg p-5 rounded-sm ">
          <span className="text-2xl">Fluctuacion historica del rio</span>
          <AreaChart />
        </div>
      </div>
    </>
  );
};
