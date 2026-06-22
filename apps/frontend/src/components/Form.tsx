import { useState } from "react";
import "../../styles/globals.css";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

import { toast } from "sonner";
import axios from "axios";

export function Form() {

  const[githubUrl, setGithubUrl] = useState("");
  const[linkedinUrl, setLinkedinUrl] = useState("");

  async function onSubmit() {
    if ( !githubUrl || !linkedinUrl ) {
      toast("Please fill in all fields");
      return; 
    }

    try {
      await axios.post("{Backend URL}/api/v1/interview", {githubUrl, linkedinUrl});
    } catch (error) {
      toast("Error submitting form");
    }
  }


    return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Ai Interview Kickstart
        </h2>

        <div className="p-2">
          <Input placeholder="Linkedin URL" onChange={(e) => setLinkedinUrl(e.target.value)} />
        </div>

        <div className="p-2">
          <Input placeholder="Github URL" onChange={(e) => setGithubUrl(e.target.value)} />
        </div>

        <div className="flex justify-center p-4">
          <Button onClick={onSubmit}>Start interview</Button>
        </div>
      </div>
    </div>
  );
}