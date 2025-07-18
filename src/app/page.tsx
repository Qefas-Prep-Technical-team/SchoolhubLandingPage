import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import IntroSection from "@/components/home/IntroSection";


export default function Home() {
  return (
    <div className="min-h-screen flex items-center flex-col justify-center bg-white dark:bg-black text-black dark:text-gray-200 transition-all duration-300">
      <IntroSection />
      <div className="max-w-3xl text-center space-y-10">

        <h1 className="text-6xl font-semibold"> welcome to schoolhub</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis tempore optio id iusto repellendus ad fugiat labore fuga modi pariatur. Similique iure quo odio dicta eveniet, error sed officiis tempora.</p>

      </div>
      <div className="space-x-2">
        <Button> button 1 </Button>
        <Button variant="secondary"> button 2 </Button>
      </div>
      <ThemeToggle />
      hello world
    </div>
  );
}
