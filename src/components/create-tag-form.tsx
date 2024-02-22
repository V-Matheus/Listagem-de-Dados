import { Button } from "./ui/button";
import { Check, X } from "lucide-react";
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from '@radix-ui/react-dialog'


const createTagSchema = z.object({
  title: z.string().min(3, { message: 'Minimum 3 characters.' }),
})

type CreateTagSchema = z.infer<typeof createTagSchema>

function getSlugFromString(input: string): string {
  return  input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, '-');
}

export function CreateTagForm() {

  const {register, handleSubmit, watch} = useForm<CreateTagSchema>({
    resolver: zodResolver(createTagSchema)
  })

  function createTag({title}: CreateTagSchema) {
    console.log(title);
  }
  
  const slug = watch('title') 
    ? getSlugFromString(watch('title')) 
    : '' 

  return (
    <form onSubmit={handleSubmit(createTag)} className="w-full space-y-6">
      <div className="space-y-2">
        <label className="text-sm block font-medium"  htmlFor="title">Tag Name</label>
        <input {...register('title')} type="text" id="name" className="border border-zinc-800 rounded-lg px-3 py-2.5 bg-zinc-800/50 w-full text-sm" />
      </div>

      <div className="space-y-2">
        <label className="text-sm block font-medium" htmlFor="slug">Slug</label>
        <input value={slug} type="text" id="slug" className="border border-zinc-800 rounded-lg px-3 py-2.5 bg-zinc-800/50 w-full text-sm" readOnly/>
      </div>

    <div className="flex items-center justify-end gap-2">
      <Dialog.Close asChild>
        <Button>
          <X className="size-3"/>
          Cancel
        </Button>
      </Dialog.Close>
      <Button className="bg-teal-400 text-teal-950" type="submit">
        <Check className="size-3"/>
        Save
        </Button>
    </div>
    </form>
  )
}