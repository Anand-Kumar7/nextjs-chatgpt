import Card from "@/components/Card";
import {someAction} from "@/app/actions/something";



export default function Home() {
  return (
    <>
      <h1>
         Hello World!
      </h1>
      <button
       className="bg-blue-500 text-while px-4 py-2 rounded hover: bg-blue-600 transition-colors duration-300"
       onClick={someAction}>
         Click me
      </button> 
    </>
  );
}
