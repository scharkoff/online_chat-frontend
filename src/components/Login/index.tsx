import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import styles from "./scss/Login.module.scss";

import { IRoom, TInputs, INickname, ILoginProps } from "./types";
import axios from "../../utils/axios";
import socket from "../../utils/socket";

export default function Login({ onLogin }: ILoginProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TInputs>();

  const [roomId, setRoomId] = React.useState<IRoom | string>("");
  const [nickname, setNickname] = React.useState<INickname | string>("");

  const onSubmitConnect: SubmitHandler<TInputs> = (data) => {
    socket.connect();
    axios.post("/rooms", data).then((rooms) => {
      onLogin();
      console.log(rooms);
    });
  };

  return (
    <Paper elevation={1} className={styles.formWrapper}>
      <form
        onSubmit={handleSubmit(onSubmitConnect)}
        className={styles.loginForm}
      >
        <TextField
          style={{ marginBottom: 10 }}
          variant="outlined"
          label="Room ID"
          value={roomId}
          {...register("roomId", { required: true })}
          helperText={errors.roomId && "The field cannot be empty"}
          error={errors.roomId && true}
          onChange={(e) => setRoomId(e.target.value)}
        ></TextField>

        <TextField
          style={{ marginBottom: 10 }}
          variant="outlined"
          label="Your nickname"
          value={nickname}
          {...register("nickname", { required: true })}
          helperText={errors.roomId && "The field cannot be empty"}
          error={errors.nickname && true}
          onChange={(e) => setNickname(e.target.value)}
        ></TextField>

        <Button type="submit" variant="contained">
          Connect
        </Button>
      </form>
    </Paper>
  );
}
