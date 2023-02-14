import React from "react";

import PersonIcon from "@mui/icons-material/Person";
import Typography from "@mui/material/Typography";

import styles from "./scss/UserList.module.scss";

export default function UserList() {
  return (
    <div className={styles.userListWrapper}>
      <Typography variant="h6" color="initial">
        Users (3):
      </Typography>
      <ul className={styles.userList}>
        <li className={styles.userListItem}>
          <PersonIcon style={{ marginRight: 10 }} />
          nickname
        </li>
        <li className={styles.userListItem}>
          <PersonIcon style={{ marginRight: 10 }} />
          nickname
        </li>
        <li className={styles.userListItem}>
          <PersonIcon style={{ marginRight: 10 }} />
          nickname
        </li>
        <li className={styles.userListItem}>
          <PersonIcon style={{ marginRight: 10 }} />
          nickname
        </li>
      </ul>
    </div>
  );
}
