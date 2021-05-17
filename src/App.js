// App Class to Function Component
import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
// import User from './components/users/User';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'
import About from './components/pages/About';
import './App.css';

// import GithubState from './context/github/GithubState';
// import AlertState from './context/alert/AlertState';

import axios from 'axios';
import Search from './components/users/Search';
import Users from './components/users/Users';
import User from './components/users/User';

class App extends Component { 
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null,
    repos: [],
  }

  async componentDidMount(){
    this.setState({ loading: true})

    // const res = await axios.get('https://api.github.com/users');

    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    console.log(res.data)
    this.setState({ users: res.data, loading: false })
  }

  searchUsers = async text => {
    this.setState({ loading: true})
    console.log(text);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&
    client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data.items, loading: false })
  };

  getUser = async (username) => {
    console.log("username ", username);
    const res = await axios.get(`https://api.github.com/users/${username}?
    client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ user: res.data, loading: false })
  }

  getUserRepos = async (username) => {
    console.log("username ", username);
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ repos: res.data, loading: false })
  }

  clearUsers = () => this.setState({ users: [], loading: false });

  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type }})  // alert: { msg, type } 

    setTimeout(()=> this.setState({alert: null}), 5000)
  }

  render(){
    // const { users, loading, user, repos } = this.state;

    return (
      <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Alert alert={this.state.alert} />  
          <Switch>
          <Route exact path='/' render={props => (
            <Fragment>
              <Search
                searchUsers={this.searchUsers}  
                clearUsers={this.clearUsers} 
                showClear={this.state.users.length > 0 ? true : false }
                setAlert={this.setAlert}
              />
              <Users loading={this.state.loading} users={this.state.users }/>
            </Fragment>
          )} />
          <Route exact path='/about' component={About} />
          <Route exact path='/user/:login' render={props => (
            <User {...props } getUser={this.getUser} getUserRepos={this.getUserRepos} user={this.state.user} repos={this.state.repos} loading={this.state.loading} />
          )} />
          </Switch>
        </div>
      </div>
      </Router>
    );
  }
};

export default App;


<Switch>
<Route exact path='/' component={Home} />
<Route exact path='/about' component={About} />
{/* <Route exact path='/user/:login' component={User} /> */}
<Route component={NotFound} />
</Switch>