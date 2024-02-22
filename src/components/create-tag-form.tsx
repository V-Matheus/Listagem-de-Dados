import { Button } from "./ui/button";
import { Check, X } from "lucide-react";
export function CreateTagForm() {
  return (
    <form className="w-full space-y-6">
      <div className="space-y-2">
        <label className="text-sm block font-medium"  htmlFor="name">Tag Name</label>
        <input type="text" name="name" id="name" className="border border-zinc-800 rounded-lg px-3 py-2.5 bg-zinc-800/50 w-full text-sm" />
      </div>

      <div className="space-y-2">
        <label className="text-sm block font-medium" htmlFor="nameSlug">Slug</label>
        <input type="text" name="nameSlug" id="nameSlug" className="border border-zinc-800 rounded-lg px-3 py-2.5 bg-zinc-800/50 w-full text-sm" readOnly/>
      </div>

    <div className="flex items-center justify-end gap-2">
      <Button>
        <X className="size-3"/>
        Cancel
        </Button>
      <Button className="bg-teal-400 text-teal-950" type="submit">
        <Check className="size-3"/>
        Save
        </Button>
    </div>
    </form>
  )
}