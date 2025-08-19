import React from 'react';

// Khai báo hàm formatName
const formatName = (user: { firstName: string; lastName: string }) => {
  return `${user.firstName} ${user.lastName}`;
};

// Khai báo đối tượng user
const user = {
  firstName: "Changiuoi",
  lastName: "Chloe"
};

// Component chính
export default function Bai5() {
  return (
    <div>
      <h2>Full Name:</h2>
      <p>{formatName(user)}</p>
    </div>
  );
}
