import { Plus } from "lucide-react"
import { Header } from "./components/header"
import { Tabs } from "./components/tabs"
import { Button } from "./components/ui/button"

function App() {

  return (
      <div className="py-10 space-y-8">
        <div>
          <Header/>
          <Tabs/>
        </div>
        <main className="max-w-6xl mx-auto space-y-5">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold">Tags</h1>
            <Button variant="primary">
              <Plus className="size-3"/>            
              Create New
            </Button>
          </div>
        </main>
      </div>
  )
}

export default App
