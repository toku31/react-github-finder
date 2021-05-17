import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class UserItem extends Component {
//     constructor() {
//         super();
//         this.state={
//             id: 'id',
//             login:'login',
//             avatar_url: '',
//             html_url: ''
//         }
// }   
    state = {
        id: 'id',
        login:'login',
        avatar_url: '',
        html_url: ''
    }

    render() {

        // const { login, avatar_url, html_url } = this.props.user
        // console.log("user", this.props.user)
        return (
            <div className="card text-center">
                <img src={this.props.user.avatar_url} alt="" className="round-img" style={{ width: '60px' }}/>
                <h3>{this.props.user.login}</h3>
                <div>
                    {/* <a href={this.props.user.html_url} className='btn btn-dark btn-sm my-1'>More</a> */}
                    <Link to={`/user/${this.props.user.login}`} 
                          className="btn btn-dark btn-sm my-1">More
                    </Link>
                </div>
            </div>
        );
    };
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserItem
