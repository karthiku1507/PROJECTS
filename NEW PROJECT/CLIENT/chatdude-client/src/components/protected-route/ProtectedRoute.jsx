import {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { getLoggedUser } from "../../services/apiCalls/user";
import ActionCreator from "../../reduxStore/ActionCreater";
import store from "../../store/store";
function ProtectedRoute({children}){
    const navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem("token")){
            //action
            getLoggedUser().then((res)=>{
            const storedata = ActionCreator(res.data)
            store.dispatch(storedata)
            }).catch((error)=>{
                console.log(error);
            })
        }else{
            navigate("/home")
        }
    },[]);
    return <div>{children}</div>;
}

export default ProtectedRoute;