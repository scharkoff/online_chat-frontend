import React from "react";

import TextareaAutosize from "@mui/base/TextareaAutosize";

import styles from "./scss/AddMessage.module.scss";
import Button from "@mui/material/Button";

export default function AddMessage() {
  return (
    <div className={styles.addMessageWrapper}>
      <TextareaAutosize
        className={styles.messageArea}
        aria-label="Message"
        placeholder="Enter the text..."
        maxRows={5}
      />

      <Button variant="contained" color="primary">
        Send
      </Button>
    </div>
  );
}
