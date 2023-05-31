import { Button } from "@/components/ui/button";
import menu from "@/data/menu.json";
import history from "@/data/history.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { InputHTMLAttributes } from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface MacroInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  unit: string;
}
const MacroInput = ({ label, unit, ...props }: MacroInputProps) => {
  return (
    <div className="flex flex-col">
      <Label className="mb-2">{label}</Label>
      <div className="relative">
        <Input
          className="pr-12 overflow-hidden w-full text-ellipsis"
          {...props}
        />
        <div className="absolute right-0 bottom-0 top-0 w-10 flex items-center">
          <Separator orientation="vertical" />
          <span className="p-1 w-full  text-center font-semibold">{unit}</span>
        </div>
      </div>
    </div>
  );
};
export default function Home() {
  return (
    <div className="p-2 flex justify-center gap-4 items-center h-full flex-grow ">
      <Card className="flex flex-col gap-4  mx-auto w-[275px]">
        <CardHeader>
          <CardTitle className="self-center">Just calories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 flex flex-col">
          <MacroInput label="Calories" unit="Kcal" />
          <MacroInput label="Energy" unit="g" />
          <MacroInput label="Protein" unit="g" />
          <MacroInput label="Total lipid" unit="g" />
          <div className="flex flex-col gap-4 items-center">
            <Label className="mb-2">Menu</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder={menu[0].meal_name} />
              </SelectTrigger>
              <SelectContent>
                {menu.map((m) => (
                  <SelectItem value={m.meal_name} key={m.id}>
                    {m.meal_name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button>add</Button>
        </CardContent>
      </Card>
    </div>
  );
}
