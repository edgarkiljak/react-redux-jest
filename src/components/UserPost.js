import React from 'react';
import PropTypes from 'prop-types';
import Messages from './Messages';
import Members from './Members';

class UserPost extends React.Component {
  constructor() {
    super();
    this.state = {
      showEmail: false
    };
    // this.toggleEmail = this.toggleEmail.bind(this);
  }

  // toggleEmail() {
  //   this.setState(oldState => ({ showEmail: !oldState.showEmail }));
  // }
  render() {
    const { showEmail } = this.state;
    return (
      <div
        className="user-post"
        onMouseOver={() => this.setState({ showEmail: true })}
        onMouseLeave={() => this.setState({ showEmail: false })}>
        <Members {...this.props.members} showEmail={showEmail} />
        <Messages {...this.props.message} />
      </div>
    );
  }
}

UserPost.propTypes = {
  message: PropTypes.object
};

export default UserPost;
