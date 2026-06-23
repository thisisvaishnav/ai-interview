import expres from "express";
import { PreInterviewBody } from "./types";
import axios from "axios";
const app = express();

app.use(express.json());

app.post("/api/v1/interview", async (req, res) => { 
   
    const { success , data } = PreInterviewBody.safeParse(req.body);
    if ( !success ) {
        res.status(400).json({error: "Invalid request body"})
        return; 
    }
    
    let githubUrl = data.github;

    if (githubUrl.endsWith("/")) {
        githubUrl = githubUrl.slice(0, -1);
    }

    let linkedinUrl = data.linkedin;

    if (linkedinUrl.endsWith("/")) {
        linkedinUrl = linkedinUrl.slice(0, -1);
    }

    const githubUsername = githubUrl.split("/").pop();
    const linkedinUsername = linkedinUrl.split("/").pop();

    console.log(githubUsername);
    console.log(linkedinUsername);
    const userRepos = await axios.get(`https://api.github.com/users/${githubUsername}/repos`)
    const filteredRepos = userRepos.data.map((x: any ) => ({
        description: x.description,
        name: x.name,
        fullName: x.full_name,
    }))
    // so the next thing is to get the linkedin profile data, but linkedin does not have public api 
    // so we will use a third party api to get the linkedin profile data
    const linkedinProfile = await axios.get(`https://www.linkedin.com/in/${linkedinUsername}/`)
    console.log(linkedinProfile.data);
    res.status(200).json({message: "Success", data: {github: filteredRepos, linkedin: linkedinProfile.data}});

    }
);

app.listen(3001); 