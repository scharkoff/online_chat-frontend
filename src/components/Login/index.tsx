import React from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './scss/Login.module.scss';
import axios from 'utils/axios/axios';
import Typography from '@mui/material/Typography';
import { TInputsDTO, ILoginProps } from './types';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IJoinDTO } from 'utils/reducers/types/join';

export const Login = ({ onJoin }: ILoginProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TInputsDTO>();

  const [roomId, setRoomId] = React.useState<string>('');
  const [nickname, setNickname] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);

  const onSubmitConnect: SubmitHandler<TInputsDTO> = async (data) => {
    setLoading(true);
    await axios.post('/rooms', data).then(() => {
      const options: IJoinDTO = {
        joined: true,
        roomId: data.roomId,
        userName: data.nickname,
      };
      onJoin(options);
    });
  };

  return (
    <Paper elevation={1} className={styles.formWrapper}>
      <form
        onSubmit={handleSubmit(onSubmitConnect)}
        className={styles.loginForm}
      >
        <Typography
          variant="h6"
          color="initial"
          style={{ textAlign: 'center', marginBottom: 20 }}
        >
          Choose a room and chat!
        </Typography>
        <TextField
          style={{ marginBottom: 10 }}
          variant="outlined"
          label="Room ID"
          value={roomId}
          {...register('roomId', { required: true })}
          helperText={errors.roomId && 'The field cannot be empty'}
          error={errors.roomId && true}
          onChange={(e) => setRoomId(e.target.value)}
        ></TextField>

        <TextField
          style={{ marginBottom: 10 }}
          variant="outlined"
          label="Your nickname"
          value={nickname}
          {...register('nickname', { required: true, maxLength: 30 })}
          helperText={
            errors.nickname &&
            'The field cannot be empty and more than 30 characters'
          }
          error={errors.nickname && true}
          onChange={(e) => setNickname(e.target.value)}
        ></TextField>

        <Button type="submit" variant="contained" disabled={loading}>
          {loading ? 'Connecting...' : 'Connect'}
        </Button>
      </form>
    </Paper>
  );
};
