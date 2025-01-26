'use client';
import { useState, useEffect, useRef, ChangeEvent } from "react";

export default function Home() {
  const [number, setNumber] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const getCurrentDate = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setNumber(getCurrentDate());
    }, 15 * 60 * 1000);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d{0,3}$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleInputSubmit = () => {
    if (inputValue) {
      setNumber(inputValue);
      setInputValue('');
      resetTimeout();
    }
  };

  useEffect(() => {
    resetTimeout();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const isDate = /^\d{2}\/\d{2}\/\d{4}$/.test(number);

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
      <h1
        style={{
          fontSize: isDate ? '15rem' : '45rem',
          textAlign: 'center',
        }}
      >
        {number}
      </h1>
      <input
        type="number"
        placeholder="Type een nummer"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleInputSubmit();
          }
        }}
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
