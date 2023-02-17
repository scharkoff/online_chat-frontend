import React from "react";

import TextareaAutosize from "@mui/base/TextareaAutosize";

import styles from "./scss/AddMessage.module.scss";
import Button from "@mui/material/Button";
import socket from "../../utils/socket";
import { IAddMessageDTO } from "./types";
import { IMessageDTO } from "../dto/message";
import {
  JoinContext,
  MessagesContext,
  IMessagesContextDTO,
} from "../../data/app/context";
import { IJoinStateDTO } from "../../utils/state/types/join";

export default function AddMessage({ addMessage }: IAddMessageDTO) {
  const [text, setText] = React.useState<string>("");

  const { roomId, userName } = React.useContext<IJoinStateDTO>(JoinContext);
  const { messagesState, messagesDispatch } =
    React.useContext<IMessagesContextDTO>(MessagesContext);

  function onSendMessage() {
    socket.emit("ROOM:NEW_MESSAGE", {
      roomId,
      text,
      userName,
    });
    const message: IMessageDTO = { userName, text };
    addMessage(message, messagesDispatch, messagesState);
    setText("");
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
