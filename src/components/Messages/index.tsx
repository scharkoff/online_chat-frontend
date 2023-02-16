import React from "react";
import Message from "../Message";

import styles from "./scss/Messages.module.scss";
import { IMessagesProps } from "./types";

export default function Messages({ messages }: IMessagesProps) {
  return (
    <div className={styles.messagesWindow}>
      <Message messages={messages} />
    </div>
  );
}
