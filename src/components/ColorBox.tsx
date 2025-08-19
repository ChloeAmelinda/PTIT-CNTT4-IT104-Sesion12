import React from 'react';

// Component ColorBox nhận màu từ props và hiển thị khối vuông
const ColorBox = ({ color }: { color: string }) => (
  <div
    style={{
      width: 200,
      height: 200,
      backgroundColor: color,
      border: '2px solid #333',
      borderRadius: 8,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    }}
  >
    {color}
  </div>
);

// Component App hiển thị danh sách màu bằng Flexbox
const App = () => {
  const colors = ['red', 'blue', 'green', 'orange', 'purple'];

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 20,
        justifyContent: 'center',
        padding: 40,
      }}
    >
      {colors.map((color) => (
        <ColorBox key={color} color={color} />
      ))}
    </div>
  );
};

export default App;
