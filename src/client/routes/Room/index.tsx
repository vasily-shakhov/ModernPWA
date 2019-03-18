import React from 'react';
import { entities } from 'src/ioc/client';

const Chat = entities.components.chat.Chat;

/**
 * the main place for communication between users
 */
class Room extends React.Component {
  /** render v-dom */
  public render() {
    return (
      <div>
        Room page with chat
        <Chat />
      </div>
    );
  }
}

export default Room;
