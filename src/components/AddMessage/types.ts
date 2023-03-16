import { IAddMessageAction } from 'utils/reducers/types/messages';
import { IMessageDTO } from 'utils/dto/message';

export interface IAddMessageProps {
  addMessage: (
    message: IMessageDTO,
    dispatch: React.Dispatch<IAddMessageAction>
  ) => void;
}
