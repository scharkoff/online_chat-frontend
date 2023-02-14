export type TInputs = {
  roomId: string;
  nickname: string;
};

export interface IRoom {
  roomId: string;
}

export interface INickname {
  nickname: string;
}

export interface ILoginProps {
  onLogin: () => void;
}
