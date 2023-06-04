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

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="p-2 flex sm:w-3/4 gap-4 self-center h-full flex-grow ">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Just calories</AccordionTrigger>
          <AccordionContent className="m-2">
            <MacroInput label="Name" unit="name" />
            <MacroInput label="Calories" unit="kcal" />
            <MacroInput label="Energy" unit="g" />
            <MacroInput label="Protein" unit="g" />
            <MacroInput label="Total lipid" unit="g" />
            <Button className="w-full">add</Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>From menu</AccordionTrigger>
          <AccordionContent>
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
            <MacroInput label="Calories" unit="kcal" />
            <MacroInput label="Energy" unit="g" />
            <MacroInput label="Protein" unit="g" />
            <MacroInput label="Total lipid" unit="g" />
            <Button className="w-full">add</Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>From history</AccordionTrigger>
          <AccordionContent>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder={menu[0].meal_name} />
              </SelectTrigger>
              <SelectContent>
                {history.map((m) => (
                  <SelectItem value={m.meal_name} key={m.id}>
                    {m.meal_name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <MacroInput label="Calories" unit="kcal" />
            <MacroInput label="Energy" unit="g" />
            <MacroInput label="Protein" unit="g" />
            <MacroInput label="Total lipid" unit="g" />
            <Button className="w-full">add</Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

// change todays date Date Picker
