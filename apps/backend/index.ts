import expres from "express";
import { PreInterviewBody } from "./types";

const app = express();

app.use(express.json());

app.post("/api/v1/interview", (req, res) => { 
   
    const { success , data } = PreInterviewBody.safeParse(req.body);
    if ( !success ) {
        res.status(400).json({error: "Invalid request body"});
        return; 
    }

    const githubUrl = data.github;
    if (githubUrl[-1] === "/" ) {
        githubUrl = githubUrl.slice(-1); 
    }

    const linkedinUrl = data.linkein;
    if (linkedinUrl[-1] === "/" ) {
        linkedinUrl = linkedinUrl.slice(-1); 
    }
    const githubusername = githubUrl.split("/").pop();
    const linkedinusername = linkedinUrl.split("/").pop();


}
);

app.listen(3001); 