import React, { Component } from 'react'
// import AlertContext from '../../context/alert/alertContext';

export class Search extends Component {  
    state = {
        text: ''
    };

    // ptfr  ptbr
    // static propTypes = {
    //     searchUsers: PropTypes.func.isRequired,
    //     clearUsers: PropTypes.func.isRequired,
    //     showClear: PropTypes.bool.isRequired,
    //     setAlert: PropTypes.func.isRequired,
    // }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.text);
        if (this.state.text === '') {
            this.props.setAlert('Please enter somrthing', 'light')
        } else {
            this.props.searchUsers(this.state.text)
            this.setState({ text: ''})
        }
    };

    onChange = (e)=> {
        // this.setState({text: e.target.value});
        this.setState({[e.target.name]: e.target.value});
    };
    // const onChange = e => setText(e.target.value);

    render () {
        // const{ showClear, clearUsers } = this.props

        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)} className="form"> 
                    <input type="text" name="text" placeholder="Search Users..." value={this.state.text} onChange={this.onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
                {this.props.showClear && (<button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button>)}
            </div>
        )
    }
}

export default Search
