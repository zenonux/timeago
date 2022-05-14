import { register } from './register';
import  {commonType} from './formatTypes/common'
import  {commentType} from './formatTypes/comment'
import  {msgDetailType} from './formatTypes/msg_detail'
import  {msgListType} from './formatTypes/msg_list'
import  {worksDetailType} from './formatTypes/works_detail'

register('common', commonType);
register('comment', commentType);
register('msgDetail', msgDetailType);
register('msgList', msgListType);
register('worksDetail', worksDetailType);

export { format } from './format';

export { register };