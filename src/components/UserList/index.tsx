import React from "react";

import PersonIcon from "@mui/icons-material/Person";
import Typography from "@mui/material/Typography";

import styles from "./scss/UserList.module.scss";
import { IUserListProps } from "./types";

export default function UserList({ users, messages }: IUserListProps) {
  return (
    <div className={styles.userListWrapper}>
      <Typography variant="h6" color="initial">
        Online ({users ? users.length : 0}):
      </Typography>
      <ul className={styles.userList}>
        {users
          ? users.map((user, i) => {
              return (
                <li className={styles.userListItem} key={i}>
                  <PersonIcon style={{ marginRight: 10 }} />
                  {user}
                </li>
              );
            })
          : []}
      </ul>
    </div>
  );
}
