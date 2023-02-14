import React from "react";

import styles from "./scss/Message.module.scss";

export default function Message() {
  return (
    <div className={styles.message}>
      <div className={styles.messageText}>
        Some text written by userSome text written by user...
      </div>
      <div className={styles.messageAuthor}>user</div>
    </div>
  );
}
