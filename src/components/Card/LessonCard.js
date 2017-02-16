import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import PlayButton from '../Button/PlayButton'
import Card from './StyledCard'
import { expansions } from './'


const StyledPlayButton = styled(PlayButton)`
  top: 50%;
  margin-top: -2rem;
  ${props => props.hover ? `&:hover { opacity: 1; }` : ''}
`

export const LessonMeta = ({meta}) => {
  return (
    <div className='flex items-center gray'>
      <img src={meta.langImg} className='w2' alt='' />
      <i className='fa fa-clock-o o-60 f5 ml3' />
      <div className='w3 ml2 o-60 f6'>{meta.videoLength}</div>
    </div>
  )
}
LessonMeta.propTypes = {
  meta: PropTypes.object
}

export const LessonHeader = ({meta, expanded}) => {
  return <StyledPlayButton hover type='lesson' />
}
LessonHeader.propTypes = {
  meta: PropTypes.object,
  expanded: PropTypes.oneOf(expansions)
}

const LessonCard = ({response}) => {
  return (
    <Card type='lesson' response={response} />
  )
}
LessonCard.propTypes = {
  response: PropTypes.object
}

export default LessonCard
