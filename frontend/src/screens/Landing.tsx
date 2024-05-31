import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button";

export const Landing = () =>{
    const navigate=useNavigate();
    return <div>
        <div className="p-20 bg-slate-950">
            <p className="font-bold text-4xl text-white"> Play The Chess Game With Your Friends </p>
            <div className="mt-4">

            <Button onClick={()=>{navigate('/game')}}>
              Play Online

            </Button>  
            </div>
        </div>
    </div>
}