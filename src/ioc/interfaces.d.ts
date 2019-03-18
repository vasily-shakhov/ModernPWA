import { ITheme } from 'src/modules/themes';
import { IAuthComponents } from 'src/modules/auth';
import { IChatComponents } from 'src/modules/chat';

export interface IThemedProps {
  theme: ITheme;
}

export { ITheme };

export interface IComponents {
  auth: IAuthComponents;
  chat: IChatComponents;
}
