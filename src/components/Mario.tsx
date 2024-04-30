import { Link, useNavigate } from "react-router-dom";

function Mario (){
    
    const navigate = useNavigate(); 
    return(
        <>
        <div>
            <h2>HI I AM MARIO!!!!</h2>
            <nav>
                <li>
                    <ul>
                    <button onClick={() => navigate('/')}>Here to main page...</button>
          
                    </ul>
                </li>
            </nav>
        </div>
        </>
    );
};

export default Mario;