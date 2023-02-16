import React from "react";

import TextareaAutosize from "@mui/base/TextareaAutosize";

import styles from "./scss/AddMessage.module.scss";
import Button from "@mui/material/Button";
import socket from "../../utils/socket";
import { IAddMessageProps } from "./types";

export default function AddMessage({
  userName,
  roomId,
  addMessage,
  state,
  dispatch,
}: IAddMessageProps) {
  const [text, setText] = React.useState<string>("");

  function onSendMessage() {
    socket.emit("ROOM:NEW_MESSAGE", {
      roomId,
      text,
      userName,
    });
    addMessage({ userName, text }, dispatch, state);
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
