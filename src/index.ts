import { register } from './register'
import defaultType from './formatTypes/default'
import detailType from './formatTypes/detail'
import commentType from './formatTypes/comment'
import chatType from './formatTypes/chat'
import messageType from './formatTypes/message'

register('DEFAULT', defaultType)
register('DETAIL', detailType)
register('COMMENT', commentType)
register('CHAT', chatType)
register('MESSAGE', messageType)

export { format } from './format'

export { register }
