import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

class Home extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    // APi call to load profiles
    this.props.actions.getUserList().then(() => {
      this.setState({ users: this.props.users });
    });
  }

  render() {
    return (
      <div className="page-cont">
        <div className="user-list-cont">
          <div className="list-header">Select an account</div>
          <div className="list-body">
            {this.state.users.map((user, idx) => (
              <a className="list-item" key={idx} href={'/profile/' + user.id}>
                <div
                  className="item-img"
                  src={user.profilepicture}
                  style={{
                    backgroundImage: 'url(' + user.profilepicture + ')'
                  }}
                ></div>
                <div>{user.name}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
