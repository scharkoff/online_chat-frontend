import { IMessageDTO } from "../dto/message";
import { IMessagesStateDTO } from "../../utils/state/types/messages";
import { ISetMessagesAction } from "../../utils/reducers/types/messages";

export interface IAddMessageDTO {
  addMessage: (
    message: IMessageDTO,
    dispatch: React.Dispatch<ISetMessagesAction>,
    state: IMessagesStateDTO
  ) => void;
}
