import Calendar from './calendar.svg'
import Check from './check.svg'
import Chevron from './chevron.svg'
import Close from './close.svg'
import EyeClosed from './eyeClosed.svg'
import EyeOpened from './eyeOpened.svg'
import Logout from './logout.svg'
import Minus from './minus.svg'
import Plus from './plus.svg'
import Question from './question.svg'
import ThumbsDown from './thumbsDown.svg'
import ThumbsUp from './thumbsUp.svg'
import Upload from './upload.svg'
import User from './user.svg'

const icons = {
  calendar: Calendar,
  check: Check,
  chevron: Chevron,
  close: Close,
  eyeClosed: EyeClosed,
  eyeOpened: EyeOpened,
  logout: Logout,
  minus: Minus,
  plus: Plus,
  question: Question,
  thumbsDown: ThumbsDown,
  thumbsUp: ThumbsUp,
  upload: Upload,
  user: User,
}

const Icon = ({ id, size = 24 }) => {
  const SVG = icons[id]
  if (!SVG) {
    return null
  }

  return <img src={SVG} style={{ width: size, height: size }} />
}
export default Icon
