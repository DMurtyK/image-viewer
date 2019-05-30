import React, { Component } from 'react';
//import Profile from '../../screens/profile/Profile';
import './Home.css';
import Header from '../../common/header/Header';
//import {BrowserRouter as Router, Route} from 'react-router-dom';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            unixDateTimestamp: [],
            ownerInfo: [],
            mediaInfo: [],
            isHeartIconSelected :false
            

        }
    }
        componentWillMount(){
            let data = null;
            let xhr = new XMLHttpRequest();
            let that = this;
        
            xhr.addEventListener("readystatechange",function(){
                if(this.readyState === 4){
                   
                        console.log(JSON.parse(this.responseText));
    
                    
                }

            })
            xhr.open("GET",this.props.baseUrl + "?access_token=13521022383.d5e23ae.c9785a17269b494eb996c2cbc490a6f3");
          //  xhr.setRequestHeader("Cache-Control","no-cache");
            xhr.send(data);
        }
    
    render() {
        return (	    
            <div>
            
            <Header baseUrl={this.props.baseUrl} />
            Home Page 
            </div>
        )
    }
}

export default Home;