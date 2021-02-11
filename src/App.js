// import './App.css';
 import {Homepage} from './components/homepage/homepage'
import {Signup} from './components/signup/Signup'
import {Login} from './components/login/Login'
import {Forgotpassword} from './components/forgotpassword/Forgotpassword'
import PrivateRoute from './components/PrivateRoute'
// import { Container } from 'react-bootstrap'
import {AuthProvider} from './components/contexts/AuthContext'
import {BrowserRouter as Router,Switch,Route,HashRouter} from 'react-router-dom'

function App() {
  return (
    //here the AuthProvider encloses the entire components inside which  can be accessed/passed from the childrens attribute. Checking the AuthContext file gives better understanding
           <Router> 
              <AuthProvider>
              <HashRouter>   
             <Switch>
                 <PrivateRoute  exact path='/' component={Homepage}/>            
                 {/* <Container className='d-flex align-items-center justify-content-center' style={{minHeight:'100vh'}}> */}
                      <Route path={"/signup"} component={Signup}/>
                      <Route path={"/login"} component={Login}/>
                      <Route path="/forgotPassword" component={Forgotpassword}/>   
                 {/* </Container> */}
                  
             </Switch>
             </HashRouter>
              </AuthProvider>
           
           </Router>
        
         
     
 
 
  );
}
export default App;
