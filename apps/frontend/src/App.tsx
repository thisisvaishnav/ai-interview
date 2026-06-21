import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import "../styles/globals.css";



export function App() {
  return (

	  <div className="h-screen w-screen flex justify-center items-center"> 
	  	<div>
			<Input />	
			<Input />
			<Button> Start interview </Button>
		</div>
	  </div>	  
 );
}

export default App

