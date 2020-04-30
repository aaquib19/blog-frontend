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
        // console.log(this.props);

    }


    change(e){
        this.setState({
            [e.target.name]:e.target.value
       
        })
    }
    componentWillReceiveProps(nextProps){
        this.setState(nextProps);
        console.log('componentWillReceiveProps', nextProps);
    
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
        console.log(this.props);

        return( 
            <div>
              <form onSubmit={e=>this.submit(e)}>
              <div>
                <input type="text" name="title"  onChange={this.change } value={this.state.email} /><br/><br/>
                <textarea type="text" name="content" onChange={this.change} value={this.state.password} /><br/><br/>
                
                <button >create Blog</button>
                </div>
              </form>
            </div>
        )
    }
}

export default App;