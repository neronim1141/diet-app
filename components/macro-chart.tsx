"use client";
import { PieChart } from "react-minimal-pie-chart";

const defaultLabelStyle = {
  fontSize: "8px",
};
interface MacroChartProps {
  energy: number;
  proteins: number;
  fat: number;
}
export const MacroChart = ({ energy, proteins, fat }: MacroChartProps) => {
  if (energy === 0 && proteins === 0 && fat === 0)
    return (
      <div className="w-60 h-60 bg-slate-500/25 rounded-full grid place-content-center text-white text-7xl font-bold ">
        <span className="drop-shadow">?</span>
      </div>
    );

  return (
    <PieChart
      label={({ dataEntry }) => Math.round(dataEntry.percentage) + "%"}
      labelStyle={defaultLabelStyle}
      className="h-60"
      data={[
        {
          title: "Energy",
          value: energy,
          color: "rgb(250 204 21)",
        },
        {
          title: "Proteins",
          value: proteins,
          color: "rgb(96 165 250)",
        },
        {
          title: "Fat",
          value: fat,
          color: "rgb(239 68 68)",
        },
      ]}
    />
  );
};
