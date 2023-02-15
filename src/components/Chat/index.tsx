import React from "react";

import Paper from "@mui/material/Paper";
import UserList from "../UserList";
import Messages from "../Messages";

import styles from "./scss/Chat.module.scss";
import AddMessage from "../AddMessage";
import { IChatProps } from "./types";

export default function Chat({ state }: IChatProps) {
  return (
    <Paper elevation={1} style={{ display: "flex" }}>
      <UserList {...state} />
      <div className={styles.chatWindow}>
        <Messages />
        <AddMessage />
      </div>
    </Paper>
  );
}
