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
  onJoin: (props: IonJoinProps) => void;
}

export interface IonJoinProps {
  roomId: string;
  userName: string;
}
