import React from 'react'
import { Route , Routes} from 'react-router-dom';
import UserProfile from "../Pages/UserProfile"
import ProjectList from "../Pages/ProjectList"
const routes = () => {
  return (
    <>
   <Routes>
      <Route path="/" element={<UserProfile />} />
      <Route path="/projects" element={<ProjectList />} />

    </Routes>
    </>
  )
}

export default routes
