import moment from "moment";
import menu from "@/data/menu.json";
import history from "@/data/history.json";
import { MacroChart } from "@/components/macro-chart";
import { isLastMonth, isLastWeek, isToday } from "@/utils/date.utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const reduceHistory = (data: typeof menu) =>
  data.reduce(
    (acc, e) => {
      acc.calories += e.calories;
      acc.energy += e.energy;
      acc.proteins += e.proteins;
      acc.fat += e.fat;
      return acc;
    },
    { calories: 0, energy: 0, proteins: 0, fat: 0 }
  );

export default function HistoryDiagrams() {
  const reducedToday = reduceHistory(
    history.filter((e) => isToday(moment(e.date)))
  );
  const reducedWeek = reduceHistory(
    history.filter((e) => isLastWeek(moment(e.date)))
  );
  const reducedMonth = reduceHistory(
    history.filter((e) => isLastMonth(moment(e.date)))
  );

  return (
    <div className="p-2 flex justify-center gap-4 items-center h-full flex-grow ">
      <Card className="w-72">
        <CardHeader className="flex flex-col items-start">
          <CardTitle className="font-bold">Today</CardTitle>
          <CardDescription>
            Calories: {reducedToday.calories || "unknown"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MacroChart
            energy={reducedToday.energy}
            proteins={reducedToday.proteins}
            fat={reducedToday.fat}
          />
        </CardContent>
      </Card>
      <Card className="w-72">
        <CardHeader className="flex flex-col items-start">
          <CardTitle className="font-bold">Week</CardTitle>
          <CardDescription>
            Calories: {reducedWeek.calories || "unknown"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MacroChart
            energy={reducedWeek.energy}
            proteins={reducedWeek.proteins}
            fat={reducedWeek.fat}
          />
        </CardContent>
      </Card>
      <Card className="w-72">
        <CardHeader className="flex flex-col items-start">
          <CardTitle className="font-bold">Month</CardTitle>
          <CardDescription>
            Calories: {reducedMonth.calories || "unknown"}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <MacroChart
            energy={reducedMonth.energy}
            proteins={reducedMonth.proteins}
            fat={reducedMonth.fat}
          />
        </CardContent>
      </Card>
    </div>
  );
}
