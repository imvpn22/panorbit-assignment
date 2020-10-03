import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

class Profile extends Component {
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
    console.log(this.state.userData);
    return <div>I am profile</div>;
  }
}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
