import React , {Component,Children} from 'react';
import { getJwt } from '../../helpers/jwt';
import axios from 'axios';
import { Link } from 'react-router-dom'

import { withRouter } from "react-router-dom";
import AddBlog  from '../blogs/AddBlog';
class AuthenticateComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            user:undefined
        }
        // console.log(this.pr/ops)
        // console.log(this.props.match.params.id);
    }

     async componentDidMount(){
        const jwt = getJwt();
        console.log(jwt);
        if(!jwt){
            window.location.replace('/login');

        }
        const url = "http://localhost:3000/auth/test"
     try{
         const res =await  axios.get(url,{
            headers:{
                Authorization:jwt
            }
        });
        // console.log(this.state.user)
        this.setState({
            user:res.data.user
        })
        // console.log(this.state.user);
     }
     catch(err){
         console.log(err);
            localStorage.removeItem('cool-jwt');
            window.location.replace('/login');
     }
      
    }

    render(){
        if(this.state.user === undefined){
            return (
                <div>Loading ...</div>
            );
        }

        return (
            <div>
         
           <this.props.customcomponent {...this.state} id={this.props.match.params.id} /> 

           </div>
        );
    }
}

export default AuthenticateComponent;