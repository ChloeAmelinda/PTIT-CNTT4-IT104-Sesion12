import React from 'react'

let list =["HTML" , "CSS" , "JavaScript" , "ReactJS"]
export default function ListCourse() {
  return (
    <div>
      <h2>Danh sach khoa hoc</h2>
      <ul>
        { list.map( (course , index) => (
            <li key = {index}> {course}</li>
        ))}
      </ul>
    </div>
  )
}
