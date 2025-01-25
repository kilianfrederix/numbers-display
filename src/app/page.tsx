'use client';
import { SetStateAction, useState } from "react";

export default function Home() {
const [number, setNumber] = useState('');

  const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setNumber(e.target.value);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        position: 'relative',
      }}
    >
      {/* Display the number */}
      <h1 style={{ fontSize: '50rem', }}>{number}</h1>

      {/* Input field at the bottom */}
      <input
        type="number"
        placeholder="Type a number"
        value={number}
        onChange={handleChange}
        style={{
          position: 'absolute',
          bottom: '20px',
          padding: '10px',
          fontSize: '1.2rem',
          border: '1px solid #ccc',
          borderRadius: '5px',
          width: '200px',
          textAlign: 'center',
        }}
      />
    </div>
  );
}
