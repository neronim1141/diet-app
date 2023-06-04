import { AddToMenuDialog } from "@/components/dialogs/addToMenu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import menu from "@/data/menu.json";

export default function Menu() {
  return (
    <div className="flex gap-4 p-2">
      {menu.map((e) => (
        <Card key={e.id}>
          <CardHeader>
            <CardTitle>{e.meal_name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div>Calories: {e.calories}</div>
            <div>Energy: {e.energy}</div>
            <div>Protein: {e.proteins}</div>
            <div>Total lipid (fat): {e.fat}</div>
          </CardContent>
        </Card>
      ))}{" "}
      <div className="absolute bottom-0 right-0 m-12">
        <AddToMenuDialog />
      </div>
    </div>
  );
}
