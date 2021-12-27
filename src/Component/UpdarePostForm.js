import React from 'react'

const UpdatePostForm = ({ handleChange, info, handleSubmit }) => {
  const { author, title, description } = info
  return (
    <div className='row'>
      <div className='col-md-6 offset-sm-3 text-left'>
        <form>
          <div className='mb-3'>
            <label className='fw-bold' style={{ fontSize: '20px' }}>
              Author Name
            </label>
            <input
              className='form-control'
              type='text'
              placeholder='Author Name'
              value={author}
              onChange={handleChange}
              name='author'
            />
          </div>
          <div className='mb-3'>
            <label className='fw-bold' style={{ fontSize: '20px' }}>
              Title
            </label>
            <input
              className='form-control'
              type='text'
              placeholder='Title'
              value={title}
              onChange={handleChange}
              name='title'
            />
          </div>
          <div className='mb-3' style={{ position: 'relative' }}>
            <label className='fw-bold' style={{ fontSize: '20px' }}>
              Description
            </label>
            <input
              className='form-control'
              type='text'
              placeholder='Enter the description'
              value={description}
              onChange={handleChange}
              name='description'
            />
          </div>
          <div class='addtoCart mt-4 mb-4'>
            <a href type='submit' onClick={handleSubmit}>
              Update
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}
export default UpdatePostForm
