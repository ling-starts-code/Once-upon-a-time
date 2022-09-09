import { combineReducers } from 'redux'

import fruits from './fruits'
import sentences from './sentences'
import paragraphies from './paragraphies'

export default combineReducers({
  fruits,
  sentences,
  paragraphies,
})
