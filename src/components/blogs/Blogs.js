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
        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
        this.blogDelete = this.blogDelete.bind(this);
        // console.log(this.props);

    }
    async componentDidMount() {
        const url = "/blogs";
        const res = await axios.get(url);
        console.log(res);
        this.setState({
            blogs: res.data
        })

    }


    change(e) {
        this.setState({
            [e.target.name]: e.target.value

        })
    }

    async blogDelete(e) {
        console.log(e);
        const jwt = getJwt();
        const url = `/blogs/${e}`;
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


    submit(e) {
        e.preventDefault();
        const url = "/blogs";
        const jwt = getJwt();
        // console.log(jwt);
        axios.post(
            url, {
            blog: {
                title: this.state.title,
                content: this.state.content,
                slug: this.state.title,
                user_id: this.props.user.id
            }
        }, {
            headers: {
                Authorization: jwt
            }
        }).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })


    }

    render() {
        // console.log(this.props.user.id);
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