import React from 'react'
import { withRouter } from 'react-router-dom'
import '../style/cardStyle.css'

const Menu = () => (
  <div class='container' style={{ height: '50px' }}>
    <div class='header_section_top'>
      <div class='row'>
        <div class='col-sm-12'>
          <div class='custom_menu'>
            <ul>
              <li>
                <a style={{ textDecoration: 'none' }} href='/'>
                  Home
                </a>
              </li>
              <li>
                <a style={{ textDecoration: 'none' }} href='/post'>
                  Post
                </a>
              </li>

              <li>
                <a style={{ textDecoration: 'none' }} href='/'>
                  Update
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default withRouter(Menu)
