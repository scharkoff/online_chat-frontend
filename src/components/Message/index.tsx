import React from 'react';

import styles from './scss/Message.module.scss';
import clsx from 'clsx';
import { IMessageProps } from './types';
import { JoinContext } from 'data/app/context';

export default function Message({ messages }: IMessageProps) {
  const { userName } = React.useContext(JoinContext);
  return (
    <>
      {messages
        ? messages.map((message, i) => {
            return (
              <div
                className={clsx({
                  [styles.message]: true,
                  [styles.myMessage]: userName === message?.userName,
                })}
                key={message?.text ? message?.text + i : i + Math.random() * 10}
              >
                <div className={styles.messageText}>{message?.text}</div>
                <div className={styles.messageAuthor}>{message?.userName}</div>
              </div>
            );
          })
        : []}
    </>
  );
}
