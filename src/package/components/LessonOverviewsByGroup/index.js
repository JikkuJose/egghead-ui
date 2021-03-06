import React, {PropTypes} from 'react'
import {map, compact} from 'lodash'
import {publicLessonsUrl} from 'package/utils/urls'
import {selfReviewThreshold, hasUnlockedSelfReview} from 'package/utils/instructorMilestones' 
import Maybe from 'package/components/Maybe'
import Tabs from 'package/components/Tabs'
import LessonOverviews from 'package/components/LessonOverviews'
import Prompt from 'package/components/Prompt'

const LessonOverviewsByGroup = ({lessonsUrl, instructor}) => {

  const items = compact([
    {
      title: 'In Progress',
      states: [
        'accepted',
        'claimed',
        'rejected',
      ],
      includeLessonsInCourses: true,
    },
    {
      title: 'In Review',
      description: (
        <span>
          <div>
            These lessons are waiting for review to proceed.
          </div>
          <Maybe condition={Boolean(instructor && hasUnlockedSelfReview(instructor.published_lessons))}>
            <span>
              <span>{` `}</span>
              <span>Since you have {selfReviewThreshold}+ lessons published, you can review your own lessons.</span>
            </span>
          </Maybe>
        </span>
      ),
      states: [
        'proposed',
        'submitted',
        'updated',
      ],
      includeLessonsInCourses: true,
    },
    {
      title: 'In Queue',
      description: 'These lessons are in the publishing queue. The queue automatically publishes them from top to bottom. Lessons that are in a course are not shown here because they are held back until the entire course is published.',
      states: [
        'approved'
      ],
      includeLessonsInCourses: false,
    },
  ])

  return (
    <Tabs groups={[
      ...map(items, (item) => ({
        title: item.title,
        component: (
          <div>
            <Maybe condition={Boolean(item.description)}>
              <div className='pv3 f6'>
                {item.description}
              </div>
            </Maybe>
            <div className='mt3'>
              <LessonOverviews
                states={item.states}
                fallback={
                  <Prompt
                    description='No lessons to show'
                    actionText='Create a new lesson'
                    action={'/lessons/new'}
                  />
                }
                lessonsUrl={lessonsUrl}
                includeLessonsInCourses={item.includeLessonsInCourses}
              />
            </div>
          </div>
        ),
      })),
      {
        title: 'Published',
        component: (
          <div className='mt3'>
            <Prompt
              description='Published lessons and courses are available publicly for students to view on egghead.io.'
              actionText='View published content'
              action={publicLessonsUrl}
            />
          </div>
        ),
      },
    ]} />
  )
}

LessonOverviewsByGroup.propTypes = {
  lessonsUrl: PropTypes.string.isRequired,
  instructor: PropTypes.object,
}

export default LessonOverviewsByGroup
