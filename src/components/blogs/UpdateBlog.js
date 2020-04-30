import React, {Component} from 'react';
import axios from 'axios';
import { getJwt } from '../../helpers/jwt';

class App extends Component{
    constructor(props){

        super(props);

        this.state={
            title:"",
            content:""

        }
        this.change= this.change.bind(this);
        this.submit= this.submit.bind(this);
        // console.log(this.props);

    }

    async componentDidMount(){
        console.log(this.props);
        const url =`/blogs/${this.props.id}`;
        const res = await axios.get(url);
        console.log(res.data);
        if(res.data.user_id!== this.props.user.id){
            window.location.replace('/blogs');

        }
        console.log(res.data.user_id,this.props.user.id);
        this.setState({
            title:res.data.title,
            content:res.data.content,
        })


    }

    change(e){
        this.setState({
            [e.target.name]:e.target.value
       
        })
    }


    submit(e){
        e.preventDefault();
        const url = `/blogs/${this.props.id}`;
        const jwt = getJwt();
        // console.log(jwt);
        axios.put(
        url,{
           blog:{
               title:this.state.title,
               content:this.state.content,
               slug:this.state.title,
               user_id:this.props.user.id
           }
        },{
            headers:{
                Authorization:jwt
            }
        }).then(res=>{
            console.log(res.data);
        }).catch(err=>{
            console.log(err);
        })


    }

    render(){
        // console.log(this.props.user.id);
        console.log(this.state);
        if(this.state.title===""){
            return (
                <div>loading ...</div>
            )
        }
        return( 
            <div>
              <form onSubmit={e=>this.submit(e)}>
              <div>
                <label>Title</label> <input type="text" name="title"  onChange={this.change } value={this.state.title} /><br/><br/>
                <label>Content</label>   <textarea type="text" name="content" onChange={this.change} value={this.state.content} /><br/><br/>
                
                <button >create Blog</button>
                </div>
              </form>
            </div>
        )
    }
}

export default App;