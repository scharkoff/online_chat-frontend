import React from "react";

import Paper from "@mui/material/Paper";
import UserList from "../UserList";
import Messages from "../Messages";

import styles from "./scss/Chat.module.scss";
import AddMessage from "../AddMessage";
import { IChatDTO } from "./types";

export default function Chat({ addMessage }: IChatDTO) {
  return (
    <Paper elevation={1} style={{ display: "flex" }}>
      <UserList />
      <div className={styles.chatWindow}>
        <Messages />
        <AddMessage addMessage={addMessage} />
      </div>
    </Paper>
  );
}
