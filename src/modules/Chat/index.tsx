import Paper from '@mui/material/Paper';
import styles from './scss/Chat.module.scss';
import { IChatProps } from './types';
import { UserList, Messages, AddMessage } from 'components';

export function Chat({ addMessage }: IChatProps) {
  return (
    <Paper elevation={1} className={styles.chat}>
      <UserList />
      <div className={styles.chatWindow}>
        <Messages />
        <AddMessage addMessage={addMessage} />
      </div>
    </Paper>
  );
}
