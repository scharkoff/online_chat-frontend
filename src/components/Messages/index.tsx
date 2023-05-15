import React from 'react';
import styles from './scss/Messages.module.scss';
import { IMessagesContextDTO, MessagesContext } from 'data/app/context';
import { Message } from 'components';

export function Messages() {
  const { messagesState } = React.useContext<IMessagesContextDTO>(MessagesContext);

  return (
    <div className={styles.messagesWindow}>
      <Message messages={messagesState?.messages} />
    </div>
  );
}
