import React, { Component } from 'react';
import Home from '../screens/home/Home';
import Profile from '../screens/profile/Profile';
import Login from '../screens/login/Login';
import { BrowserRouter as Router, Route,Redirect } from 'react-router-dom';



class Controller extends Component {



    constructor() {
        super();
        this.state = {
        loggedIn: sessionStorage.getItem("access-token") == null ? false : true
        }
        this.baseUrl = "https://api.instagram.com/v1/users/self/";
    }
   
    
    
    render() {
        const AuthService = {
            isAuthenticated: false,
            authenticate(cb) {
              this.isAuthenticated = true
              setTimeout(cb, 100)
            },
            logout(cb) {
              this.isAuthenticated = false
              setTimeout(cb, 100)
            }
          }
        
        const PrivateRoute = ({component: Component, ...rest}) => {
            return (
        
                // Show the component only when the user is logged in
                // Otherwise, redirect the user to /signin page
                <Route {...rest} render={props => (
                    AuthService.isAuthenticated === true ?<Component {...props} /> : <Redirect to="/" />
                )} />
            );
        };
        

        return (
            <div>
                <Router>
               

               
                    
                   
                    <Route path='/profile/' render={(props) => <Profile {...props} baseUrl={this.baseUrl} />} />
                    <Route exact path='/' render={(props) => <Login {...props} baseUrl={this.baseUrl} />} />
                    <PrivateRoute component={Home} path="/home/" exact />
                    
               
                
                 
                

                   
                   

                </Router>
            </div>


        );
    }

}
export default Controller;
  // <Route exact path='/' render={(props) => <Login {...props} baseUrl={this.baseUrl} />} />
  //<Route path='/home/' render={(props) => <Home {...props} baseUrl={this.baseUrl} />} />
