import React from 'react';

import TextareaAutosize from '@mui/base/TextareaAutosize';

import styles from './scss/AddMessage.module.scss';
import Button from '@mui/material/Button';
import socket from 'utils/socket';
import { IAddMessageProps } from './types';

import {
  JoinContext,
  MessagesContext,
  IMessagesContextDTO,
} from 'data/app/context';
import { IJoinState } from 'utils/state/types/join';
import { IMessageDTO } from 'utils/dto/message';

export default function AddMessage({ addMessage }: IAddMessageProps) {
  const [text, setText] = React.useState<string>('');

  const { roomId, userName } = React.useContext<IJoinState>(JoinContext),
    { messagesDispatch } =
      React.useContext<IMessagesContextDTO>(MessagesContext);

  function onSendMessage() {
    socket.emit('ROOM:NEW_MESSAGE', {
      roomId,
      text,
      userName,
    });
    const message: IMessageDTO = { userName, text };
    addMessage(message, messagesDispatch);
    setText('');
  }
  return (
    <div className={styles.addMessageWrapper}>
      <TextareaAutosize
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        className={styles.messageArea}
        aria-label="Message"
        placeholder="Enter the text..."
        maxRows={5}
      />

      <Button
        onClick={onSendMessage}
        variant="contained"
        color="primary"
        disabled={Boolean(!text)}
      >
        Send
      </Button>
    </div>
  );
}
