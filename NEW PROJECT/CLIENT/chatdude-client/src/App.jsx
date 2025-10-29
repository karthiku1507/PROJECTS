import RouteComp from "./Routes/Route";
import {Toaster} from "react-hot-toast";
function App(){
  return(
    <div>
       <RouteComp /> 
      {/* <Toaster  position ="top-center" 
      reverseOrder={false} 
      toastOptions={{
    // Define default options
    duration: 4000,
  }}/>
      <RouteComp /> */}
    </div>
  );
}

export default App;



// import SignUp from "./pages/signup/signup";
// import Signin from "./pages/signin/signin";
// import Home from "./pages/Home/home";
// import {Routes,Route} from 'react-router-dom'
// function App() {
//   return(
//     <div>
//       {/* <h1>Chatdude App</h1> */}
// <Routes>
//   <Route path='' element={<SignUp/>}/>
//   <Route path='/login' element={<Signin/>}/>//login
//   <Route path='/home' element={<Home/>}/>
// </Routes>


//           </div>
//   );
// }

// export default App;