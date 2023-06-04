export default function sad() {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="p-4">
        <div className="flex flex-col">
          <label>Calories</label>
          <div>
            <input></input>
            <span>kcal</span>
          </div>
        </div>{" "}
        <div className="flex flex-col">
          <label>Energy</label>
          <div>
            <input></input>
            <span>g</span>
          </div>
        </div>{" "}
        <div className="flex flex-col">
          <label>Protein</label>
          <div>
            <input></input>
            <span>g</span>
          </div>
        </div>{" "}
        <div className="flex flex-col">
          <label>Total lipid (fat)</label>
          <div>
            <input></input>
            <span>g</span>
          </div>
        </div>
      </div>{" "}
      <button className="border-lime-900 border-2 w-fit self-center p-1 rounded font-bold px-4 m-4">
        Add
      </button>
    </div>
  );
}
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function AddToMenuDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="h-12 w-64">
          Add new position
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new position</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="calories" className="text-right">
              Calories
            </Label>
            <Input id="calories" value="kcal" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="energy" className="text-right">
              Energy
            </Label>
            <Input id="energy" value="gram" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="protein" className="text-right">
              Protein
            </Label>
            <Input id="protein" value="gram" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="profattein" className="text-right">
              Total lipid (fat)
            </Label>
            <Input id="fat" value="gram" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
