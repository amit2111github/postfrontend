import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Component/Home'
import UpdatePost from './Component/UpdatePost'
import PostCreation from './Component/PostCreation'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/post' exact component={PostCreation} />
        <Route path='/update/:postId' exact component={UpdatePost} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
