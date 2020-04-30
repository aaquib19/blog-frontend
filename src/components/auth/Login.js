import React, {Component} from 'react';
import axios from 'axios';
class App extends Component{
    constructor(props){

        super(props);

        this.state={
            email:"",
            password:""

        }
        this.change= this.change.bind(this);
        this.submit= this.submit.bind(this);
        console.log(this.props);

    }


    change(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }


    submit(e){
        e.preventDefault();
        const url = "http://localhost:3000/auth/login";
        axios.post(
        url,{
            email:this.state.email,
            password:this.state.password
        }).then(res=>localStorage.setItem('cool-jwt',res.data.access_token))


    }

    render(){
        return( 
            <div>
              <form onSubmit={e=>this.submit(e)}>
              <div>
                <input type="text" name="email"  onChange={this.change } value={this.state.email} /><br/><br/>
                <input type="text" name="password" onChange={this.change} value={this.state.password} /><br/><br/>
                
                <button >Login</button>
                </div>
              </form>
            </div>
        )
    }
}

export default App;