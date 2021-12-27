import React, { useState, useRef, useEffect } from 'react'
import '../style/postsection.css'
import { Picker } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'
import InfiniteScroll from 'react-infinite-scroll-component'
import Menu from './Menu'
import Footer from './Footer'
import Post from './Post'
import { loader } from './Message'
import { getAllPost, getPostOnSkip } from '../apicaller/helper'
const Home = ({ history }) => {
  const [pageCount, setPageCount] = useState(0)
  const [hasMorePost, setHasMorePost] = useState(true)
  const [showLoader, setShowLoader] = useState(false)
  const [post, setPost] = useState([])

  const getMorePost = async () => {
    setShowLoader(true)
    setPageCount(pageCount + 1)
    const data = await getPostOnSkip((pageCount + 1) * 4)
    if (data.length === 0) setHasMorePost(false)
    setPost([...post, ...data])
    setShowLoader(false)
  }
  const preloadPost = async () => {
    const data = await getAllPost()
    setPost([...data])
  }
  useEffect(() => {
    preloadPost()
  }, [])

  return (
    <>
      <div className='fashion_section' style={{ backgroundColor: '#edb007' }}>
        <Menu />
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='logo'>
                <a href='/'>
                  <img
                    alt='logo'
                    style={{ maxwidth: '100%' }}
                    src='https://fontmeme.com/permalink/211220/293d7532b26cd531b84fcc2c6d4fa661.png'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='feed container col-12' style={{ minWidth: '800px' }}>
          <div>
            <InfiniteScroll
              className='container'
              dataLength={post.length}
              next={getMorePost}
              hasMore={hasMorePost}
              loader={<h4 className='text-center'>{/* some */}</h4>}
              endMessage={<p style={{ textAlign: 'center' }}>{/* some */}</p>}
              refreshFunction={getMorePost}
              pullDownToRefresh
              pullDownToRefreshThreshold={50}
              pullDownToRefreshContent={
                <h3 style={{ textAlign: 'center' }}>
                  &#8595; Pull down to refresh
                </h3>
              }
              releaseToRefreshContent={
                <h3 style={{ textAlign: 'center' }}>
                  &#8593; Release to refresh
                </h3>
              }
            >
              {post.map((post, index) => (
                <Post key={post._id} post={post} history={history} />
              ))}
              {showLoader && loader()}
            </InfiniteScroll>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
