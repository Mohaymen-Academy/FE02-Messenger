import { TYPE_USER } from '../../utility/Constants.js';
import ChatCardPreview from './ChatCardPreview.jsx';

const Chatlist = ({ dispatch }) => (
  <div className=" mt-4 w-full h-full overflow-y-auto">
    <ChatCardPreview chattype={TYPE_USER} chatid={1} setter={dispatch} unreadmessage={5} />
  </div>
);

export default Chatlist;
