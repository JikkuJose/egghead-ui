import React, {PropTypes} from 'react'
import {keys} from 'lodash'
import {
EggheadArrowDown,
EggheadArrowLeft,
EggheadArrowRight,
EggheadArrowUp,
EggheadCheck,
EggheadCross,
EggheadEdit,
EggheadEnterSearch,
EggheadFullCoursesHeadline,
EggheadHistory,
EggheadIcoCheckWatched,
EggheadIcoCircleArrowDownOutline,
EggheadIcoClockTime,
EggheadIcoFacebook,
EggheadIcoFolderLanguage,
EggheadIcoPlayCourse,
EggheadIcoPlayLesson,
EggheadIcoStarFill,
EggheadIcoStarOutline,
EggheadIcoTwitter,
EggheadInfo,
EggheadLessonPlayPlaylist,
EggheadPlus,
EggheadProfile,
EggheadProgressRing,
EggheadQuestion,
EggheadQuickLessonsHeadline,
EggheadRss,
EggheadTechnology,
EggheadUpload,
} from 'react-icons/lib/egghead'
import {
  FaAngleDoubleDown,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleDoubleUp,
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
  FaAngleUp,
  FaBars,
  FaCaretDown,
  FaCaretLeft,
  FaCaretRight,
  FaCaretSquareODown,
  FaCaretSquareOLeft,
  FaCaretSquareORight,
  FaCaretSquareOUp,
  FaCaretUp,
  FaCheckCircle,
  FaCheckCircleO,
  FaCheckSquareO,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
  FaClockO,
  FaClone,
  FaClose,
  FaDownload,
  FaExclamationCircle,
  FaExternalLink,
  FaEye,
  FaFileO,
  FaFileTextO,
  FaFolderOpenO,
  FaGithub,
  FaHome,
  FaInfoCircle,
  FaListAlt,
  FaListUl,
  FaLongArrowDown,
  FaLongArrowLeft,
  FaLongArrowRight,
  FaLongArrowUp,
  FaMailReply,
  FaMinusCircle,
  FaMoney,
  FaPencil,
  FaPlay,
  FaPrint,
  FaRefresh,
  FaSearch,
  FaSignOut,
  FaSlack,
  FaSquare,
  FaSquareO,
  FaTimesCircle,
  FaUser,
} from 'react-icons/lib/fa'
import colors from 'package/utils/colors'

const typeToSvgIcon = {
  'add': EggheadPlus,
  'angle-double-down': FaAngleDoubleDown,
  'angle-double-left': FaAngleDoubleLeft,
  'angle-double-right': FaAngleDoubleRight,
  'angle-double-up': FaAngleDoubleUp,
  'angle-down': FaAngleDown,
  'angle-left': FaAngleLeft,
  'angle-right': FaAngleRight,
  'angle-up': FaAngleUp,
  'arrow-down': EggheadArrowDown,
  'arrow-left': EggheadArrowLeft,
  'arrow-right': EggheadArrowRight,
  'arrow-up': EggheadArrowUp,
  'box': FaSquareO,
  'box-check': FaCheckSquareO,
  'cancel': EggheadCross,
  'caret-down': FaCaretDown,
  'caret-left': FaCaretLeft,
  'caret-right': FaCaretRight,
  'caret-square-o-down': FaCaretSquareODown,
  'caret-square-o-left': FaCaretSquareOLeft,
  'caret-square-o-right': FaCaretSquareORight,
  'caret-square-o-up': FaCaretSquareOUp,
  'caret-up': FaCaretUp,
  'check': EggheadCheck,
  'check-circle': FaCheckCircle,
  'check-circle-o': FaCheckCircleO,
  'check-watched': EggheadIcoCheckWatched,
  'circle-arrow-down-outline': EggheadIcoCircleArrowDownOutline,
  'clock-time': EggheadIcoClockTime,
  'facebook': EggheadIcoFacebook,
  'folder-language': EggheadIcoFolderLanguage,
  'play-course': EggheadIcoPlayCourse,
  'play-lesson': EggheadIcoPlayLesson,
  'star-fill': EggheadIcoStarFill,
  'star-outline': EggheadIcoStarOutline,
  'lesson-play-playlist': EggheadLessonPlayPlaylist,
  'twitter': EggheadIcoTwitter,
  'chevron-down': FaChevronDown,
  'chevron-left': FaChevronLeft,
  'chevron-right': FaChevronRight,
  'chevron-up': FaChevronUp,
  'clock': FaClockO,
  'clone': FaClone,
  'close': FaClose,
  'course': FaFolderOpenO,
  'course-headline': EggheadFullCoursesHeadline,
  'dollar': FaMoney,
  'download': FaDownload,
  'edit': EggheadEdit,
  'enter': EggheadEnterSearch,
  'external-link': FaExternalLink,
  'eye': FaEye,
  'file-text-o': FaFileTextO,
  'github': FaGithub,
  'history': EggheadHistory,
  'home': FaHome,
  'info': EggheadInfo,
  'info-circle': FaInfoCircle,
  'lesson': FaFileO,
  'lesson-headline': EggheadQuickLessonsHeadline,
  'list-alt': FaListAlt,
  'list-ul': FaListUl,
  'long-arrow-down': FaLongArrowDown,
  'long-arrow-left': FaLongArrowLeft,
  'long-arrow-right': FaLongArrowRight,
  'long-arrow-up': FaLongArrowUp,
  'menu': FaBars,
  'pencil': FaPencil,
  'play': FaPlay,
  'print': FaPrint,
  'profile': EggheadProfile,
  'progress-ring': EggheadProgressRing,
  'question': EggheadQuestion,
  'refresh': FaRefresh,
  'remove': FaMinusCircle,
  'reply': FaMailReply,
  'rss': EggheadRss,
  'search': FaSearch,
  'sign-out': FaSignOut,
  'slack': FaSlack,
  'square': FaSquare,
  'success': FaCheckCircle,
  'technology': EggheadTechnology,
  'times-circle': FaTimesCircle,
  'upload': EggheadUpload,
  'user': FaUser,
  'warning': FaExclamationCircle,
}

export const types = keys(typeToSvgIcon)

const sizeToClass = {
  1: 'f1',
  2: 'f2',
  3: 'f3',
  4: 'f4',
  5: 'f5',
  6: 'f6'
}

export const sizes = keys(sizeToClass)

const Icon = ({
  type,
  size,
  color,
}) => {
  const DynamicIcon = typeToSvgIcon[type]
  return <DynamicIcon className={`${sizeToClass[size]} ${color}`} />
}

Icon.propTypes = {
  type: PropTypes.oneOf(types).isRequired,
  size: PropTypes.oneOf(sizes),
  color: PropTypes.oneOf(colors),
}

Icon.defaultProps = {
  size: '3',
  color: 'dark-gray',
}

export default Icon
