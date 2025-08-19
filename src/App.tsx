import React from 'react'
import ListCourse from './components/ListCourse'
import Calculation from './components/Calculation'
import UserInfo from './components/UserInfo'
import ColorBox from './components/ColorBox'
import Bai5 from './components/bai5'
import AdminIndex from './components/AdminIndex'
import UserLayout from './components/UserLayout'
import App1 from './components/App'
export default function App() {
  return (
    <div>
      <ListCourse></ListCourse>
      <Calculation></Calculation>
      <UserInfo></UserInfo>
      <ColorBox></ColorBox>
      <Bai5></Bai5>
      <AdminIndex></AdminIndex>
      <UserLayout></UserLayout>
      {/* <App></App> */}
      
      
    </div>
  )
}

