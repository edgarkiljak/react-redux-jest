import React from 'react';

export default function Messages({ timestamp, message }) {
  //Format the timestamp of the message to be human readable
  timestamp = new Date(timestamp).toString();
  return (
    <div className="messages">
      <div className="timestamp underline">{timestamp}:</div>
      <div className="message">{message}</div>
    </div>
  );
}
