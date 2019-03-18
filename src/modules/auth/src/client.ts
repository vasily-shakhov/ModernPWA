import components from './components';
import actionCreators from './redux/actionCreators';
import reducer from './redux/reducer';
import { IAuthModule } from '../index';

const authClientModule: IAuthModule = {
  components,
  actionCreators,
  reducer,
};

export default authClientModule;
