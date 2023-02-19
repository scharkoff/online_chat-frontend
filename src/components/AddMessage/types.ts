import { IMessageDTO } from "../dto/message";
import { IAddMessageAction } from "../../utils/reducers/types/messages";

export interface IAddMessageProps {
  addMessage: (
    message: IMessageDTO,
    dispatch: React.Dispatch<IAddMessageAction>
  ) => void;
}
