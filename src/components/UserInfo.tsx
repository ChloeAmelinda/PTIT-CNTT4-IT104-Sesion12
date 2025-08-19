import React from 'react'

const user = {
    name: 'Nguyễn Văn A',
    age: 25,
    email: 'vana@example.com',
    address: 'Hà Nội, Việt Nam'
  };
  
export default function UserInfo() {
    return (
        <div>
          <h2>Thông tin cá nhân</h2>
          <p>Họ tên: {user.name}</p>
          <p>Tuổi: {user.age}</p>
          <p>Email: {user.email}</p>
          <p>Địa chỉ: {user.address}</p>
        </div>
      );
      
}
