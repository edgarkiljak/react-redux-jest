import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadMessages } from '../action-creators/messages';
import { loadMembers } from '../action-creators/members';
import UserPost from '../components/UserPost';

class Home extends React.Component {
  componentDidMount() {
    this.props.loadMessages();
    this.props.loadMembers();
  }

  render() {
    //Includes sort method to sort the messages by time
    const msgs = this.props.messages
      .sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1))
      .map((msg, idx) => {
        const memberValidation = this.props.members.find(
          member => member.id === msg.userId
        );
        if (memberValidation) {
          return (
            <UserPost key={idx} members={memberValidation} message={msg} />
          );
        }
      });
    return <div className="messages-container">{msgs}</div>;
  }
}

const mapStateToProps = state => {
  const { messages, members } = state;
  return { messages: messages.messages, members: members.members };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loadMessages, loadMembers }, dispatch);

Home.propTypes = {
  messages: PropTypes.array,
  members: PropTypes.array,
  loadMessages: PropTypes.func,
  loadMembers: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
