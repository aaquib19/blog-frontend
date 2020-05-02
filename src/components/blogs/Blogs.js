import React, { Component } from 'react';
import axios from 'axios';
import { getJwt } from '../../helpers/jwt';
import { Link } from 'react-router-dom'

class App extends Component {
    constructor(props) {

        super(props);

        this.state = {
            blogs: []

        }
        this.blogDelete = this.blogDelete.bind(this);

    }
    async componentDidMount() {
        const url = "/blogs";
        const res = await axios.get(url);
        console.log(res);
        this.setState({
            blogs: res.data
        })

    }




    async blogDelete(e) {
        console.log(e);
        const jwt = getJwt();
        const url = `http://137.116.139.150/blogs/${e}`;
        console.log(url)
        axios.delete(e, {},
            {
                headers: {
                    Authorization: jwt
                }
            });
        this.setState({
            blogs: this.state.blogs.filter(blog => blog.id !== e),
        });
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
                {
                    blogs.map((blog, index) => {
                        let del, upd;
                        if (this.props.user.id === blog.user_id) {
                            del = <button onClick={() => this.blogDelete((blog.id))}>Delete</button>
                            upd = <Link to={`/blog-update/${blog.id}`} >Update</Link>
                        }

                        return (
                            <div key={`d${blog.id}`}>
                                <p key={`t${blog.id}`}>{blog.title}</p>
                                <p key={blog.id} >{blog.content}</p>
                                {del}
                                {upd}
                                <hr />
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}

export default App;