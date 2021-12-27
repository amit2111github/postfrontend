import React, { useState } from 'react'
import PostCreationForm from './PostCreationForm'
import Menu from './Menu'
import Footer from './Footer'
import { errorMessage, successMessage, loadingMessage } from './Message'
import { postSubmit } from '../apicaller/helper'

const PostCreation = ({ history }) => {
  const [values, setValues] = useState({ error: '', success: '', loading: '' })
  const [info, setInfo] = useState({ author: '', title: '', description: '' })
  const { author, title, description } = info
  const { error, success, loading } = values
  const handleChange = (event) => {
    event.preventDefault()
    setInfo((info) => {
      return { ...info, [event.target.name]: event.target.value }
    })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    setValues({ ...values, error: false, success: false, loading: false })
    if (!author) {
      setValues({ ...values, error: 'Author Name is Mandatory' })
      return
    }
    if (!title) {
      setValues({ ...values, error: 'Title is Mandatory' })
      return
    }
    if (!description) {
      setValues({ ...values, error: 'Description is Mandatory' })
      return
    }
    setValues({ ...values, loading: true })
    const data = await postSubmit(author, title, description)
    setValues({ ...values, loading: false })
    if (data.error) {
      setValues({ ...values, error: data.error })
      return
    }
    setInfo({ author: '', title: '', description: '' })
    setValues({ ...values, success: true })
    setTimeout(() => {
      history.push('/')
    }, 1500)
  }
  return (
    <>
      <div className='fashion_section' style={{ backgroundColor: '#edb007' }}>
        <Menu />
        <div className='logo_section mb-2'>
          {/* // logo section */}
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
            <p className='messages font-weight-normal'>Welcome</p>
            {error && errorMessage(error)}
            {success && successMessage('Post created successfully')}
            {loading && loadingMessage('Loading...')}
            <PostCreationForm
              info={info}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
          {/* logo ends here */}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PostCreation
