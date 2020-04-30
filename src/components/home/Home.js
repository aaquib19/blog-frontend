import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

class App extends Component {
    constructor(props) {

        super(props);


        this.state = {
            blogs: []

        }

    }
    async componentDidMount() {
        const url = "http://localhost:8000/blogs";
        const res = await axios.get(url);
        console.log(res);
        this.setState({
            blogs: res.data
        })

    }





    render() {
        const { blogs } = this.state;
        console.log(this.props)
        if (blogs.length === 0) {
            return (
                <div>Loading ... </div>
            )
        }
        return (
            <div>
                <div>
                    <Link to="/login">Login</Link>
                    <hr></hr>
                    <Link to="/register">register</Link>
                    <hr></hr>

                    <Link to="/blogs">Blogs [Login Required]</Link>
                    <hr></hr>

                    <Link to="/create">create Blogs [Login Required]</Link>
                    <hr></hr>

                </div>
                <h1>Blogs List</h1>
                <ol>
                    {
                        blogs.map((blog, index) => {


                            return (
                                <li key={`d${blog.id}`}>
                                    <ul>
                                        <li key={`t${blog.id}`}>{blog.title}</li>
                                        <li key={blog.id} >{blog.content}</li>
                                    </ul>
                                    <br></br>
                                </li>
                            )
                        })
                    }
                </ol>
            </div>
        )
    }
}

export default App;