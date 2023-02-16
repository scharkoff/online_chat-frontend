import React from "react";

import styles from "./scss/Message.module.scss";
import { IMessageProps } from "./types";

export default function Message({ messages }: IMessageProps) {
  console.log("messages", messages);
  return (
    <>
      {messages
        ? messages.map((message, i) => {
            return (
              <div
                className={styles.message}
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
