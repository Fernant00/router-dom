
import {Link, useNavigate} from "react-router-dom";

function ErrorPage(){
    const navigate = useNavigate(); 
    return(
        <div>
        <h1>sorry,this page does't exist!signo signo</h1>
        <button onClick={() => navigate('/')}> you can go to main page by click click!!</button>
          
        </div>
    );
};
export default ErrorPage;