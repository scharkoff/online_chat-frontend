import { IAddMessageAction } from 'utils/reducers/types/messages';
import { IMessageDTO } from 'utils/dto/message';

export interface IChatProps {
  addMessage: (
    message: IMessageDTO,
    dispatch: React.Dispatch<IAddMessageAction>
  ) => void;
}
