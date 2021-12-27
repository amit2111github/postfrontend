import React from 'react'
import timediff from 'timediff'
import '../style/NewPost.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import NearMeIcon from '@material-ui/icons/NearMe'
import { ExpandMoreOutlined, Create } from '@material-ui/icons'

const getTimeString = (time) => {
  return time.years
    ? time.years + ' years'
    : false || time.months
    ? time.months + ' months'
    : false || time.weeks
    ? time.weeks + ' weeks'
    : false || time.days
    ? time.days + ' days'
    : false || time.hours
    ? time.hours + ' hours'
    : false || time.minutes
    ? time.minutes + ' minutes'
    : false || time.seconds
    ? time.seconds + ' seconds'
    : 'just now'
}
const Post = ({ post, history }) => {
  const { author, description, title, createdAt } = post

  const time = getTimeString(
    timediff(createdAt, new Date(), { returnZeros: false })
  )
  return (
    <div className='post-content' style={{ width: '700px' }}>
      <div className='post-header'>
        <img src='https://i.imgur.com/t9toMAQ.jpg' alt='Avatar' />
        <div className='post-header-info'>
          <strong>{author}</strong>
          <small>{time} ago</small>
        </div>
      </div>
      <h6 className='mt-4'>{title.toUpperCase()}</h6>
      <p style={{ fontSize: '20px', fontWeight: 'normal' }}>{description}</p>
      <div className='post-options'>
        <div className='post-option'>
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div
          className='post-option'
          onClick={(event) => history.push(`/update/${post._id}`)}
        >
          <Create />
        </div>
        <div className='post-option'>
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className='post-option'>
          <AccountCircleIcon />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  )
}
export default Post
