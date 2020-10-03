import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import { ComingSoon } from './ComingSoon';
import PageHeader from './PageHeader';
import Profile from './Profile';
import Sidebar from './Sidebar';

class User extends Component {
  state = {
    userData: {}
  };

  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    const userId = parseInt(params.userId, 10);

    this.props.actions.getUserList().then(() => {
      const userData = this.props.users.find(user => user.id === userId);
      this.setState({ users: this.props.users, userData });
    });
  }

  render() {
    const { match } = this.props;
    console.log(match.url, match.path);

    return (
      <div className="profile-cont">
        <Sidebar matchUrl={match.url} />
        <div className="main-cont">
          <PageHeader />
          <Switch>
            <Route path={match.path + '/profile'}>
              <Profile userData={this.state.userData} />
            </Route>
            <Route path={match.path + '/posts'} component={ComingSoon} />
            <Route path={match.path + '/gallery'} component={ComingSoon} />
            <Route path={match.path + '/todo'} component={ComingSoon} />
            {/* <Route path={match.path + '/'}>
              <Profile userData={this.state.userData} />
            </Route> */}
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
