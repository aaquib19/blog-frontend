import React, { Component, Children } from 'react';
import { getJwt } from '../../helpers/jwt';
import axios from 'axios';
class AuthenticateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: undefined
        }
    }

    async componentDidMount() {
        const jwt = getJwt();
        console.log(jwt);
        if (!jwt) {
            window.location.replace('/login');

        }
        const url = "auth/test"
        try {
            const res = await axios.get(url, {
                headers: {
                    Authorization: jwt
                }
            });
            // console.log(this.state.user)
            this.setState({
                user: res.data.user
            })
            // console.log(this.state.user);
        }
        catch (err) {
            console.log(err);
            localStorage.removeItem('cool-jwt');
            window.location.replace('/login');
        }

    }

    render() {
        if (this.state.user === undefined) {
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