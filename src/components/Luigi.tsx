import { Link, useNavigate } from "react-router-dom";

function Luigi (){
    const navigate = useNavigate(); 
    return(
        <>
        <div>
            <h2>I AM LUIGI WWUUAAAA</h2>
            <nav>
                <ul>
                    <li>
                    <button onClick={() => navigate('/')}>vacio</button>
          
                    </li>
                </ul>
            </nav>
        </div>
        </>
    );
};

export default Luigi;