import React from 'react';
import Message from '../Message';
import styles from './scss/Messages.module.scss';
import { IMessagesContextDTO, MessagesContext } from 'data/app/context';

export default function Messages() {
  const { messagesState } =
    React.useContext<IMessagesContextDTO>(MessagesContext);

  return (
    <div className={styles.messagesWindow}>
      <Message messages={messagesState?.messages} />
    </div>
  );
}
