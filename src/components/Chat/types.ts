import { IMessageDTO } from "../dto/message";
import { IAddMessageAction } from "../../utils/reducers/types/messages";

export interface IChatProps {
  addMessage: (
    message: IMessageDTO,
    dispatch: React.Dispatch<IAddMessageAction>
  ) => void;
}
