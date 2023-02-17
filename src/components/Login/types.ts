import { IJoinDTO } from "../../utils/reducers/types/join";

export type TInputsDTO = {
  roomId: string;
  nickname: string;
};

export interface ILoginDTO {
  onJoin: (props: IJoinDTO) => void;
}
