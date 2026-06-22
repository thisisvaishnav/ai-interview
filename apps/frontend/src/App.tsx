import "styles/globals.css";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Form } from "./components/Form";
import {useState} from "react";
import { Interview } from "./components/Interview";
import { Result } from "./components/Result";
import { Toaster } from "./components/ui/sonner";


export function App() {

  const [page, setPage] = useState<"Form" | "Interview" | "Result">("Form");
  return (
    <div>
       {page == "Form" && <Form />}
       {page == "Interview" && <Interview />}
       {page == "Result" && <Result />} 
    <Toaster />
    </div>

   
  );  
}



