import React from "react";
import Message from "../Message";

import styles from "./scss/Messages.module.scss";

export default function Messages() {
  return (
    <div className={styles.messagesWindow}>
      <Message />
      <Message />
      <Message />
    </div>
  );
}
