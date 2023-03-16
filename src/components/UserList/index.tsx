import React from 'react';

import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';

import styles from './scss/UserList.module.scss';
import { UsersContext, JoinContext } from 'data/app/context';
import { IUsersState } from 'utils/state/types/user';
import { IJoinState } from 'utils/state/types/join';

export default function UserList() {
  const { users } = React.useContext<IUsersState>(UsersContext);
  const { userName, roomId } = React.useContext<IJoinState>(JoinContext);

  return (
    <div className={styles.userListWrapper}>
      <Typography variant="subtitle1" color="initial" className={styles.roomId}>
        Room: <b>{roomId}</b>
      </Typography>
      <Typography variant="h6" color="initial" style={{ marginTop: 10 }}>
        Online ({users ? users.length : 0}):
      </Typography>
      <ul className={styles.userList}>
        {users
          ? users.map((user, i) => {
              return (
                <li className={styles.userListItem} key={i}>
                  <PersonIcon style={{ marginRight: 10 }} />
                  {user.userName}
                </li>
              );
            })
          : []}
      </ul>
      <div className={styles.helloUser}>
        <Typography
          variant="subtitle1"
          color="initial"
          className={styles.userName}
          fontSize={15}
        >
          Hello, <b style={{ color: '#651fff' }}>{userName}</b>
        </Typography>
      </div>
    </div>
  );
}
