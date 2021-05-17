import React, { Component } from 'react';
import UserItem from './UserItem';
// import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
// import GithubContext from '../../context/github/githubContext';

class Users extends Component {
    state= {
        users: [
         {
             id: '1',
             login: 'mojombo',
             avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
             html_url: 'https://github.com/mojombo',
         },
        ]
    }

    static propTypes = {
        users: PropTypes.array.isRequired,
        loading: PropTypes.bool.isRequired,
    }

    render() {
        // const { loading, users } = this.props;
        console.log("loading", this.props.loading)
        console.log("users", this.state.users)
        return (
            <div style={userStyle}>
                {this.props.users.map(user => (
                <UserItem key={user.id} user={user} />
                ))}
            </div>
        );
    }
}

// Users.propTypes = {
//     users: PropTypes.array.isRequired,
//     loading: PropTypes.bool.isRequired,
// }

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
