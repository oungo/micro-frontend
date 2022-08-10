import React, { useState, useEffect } from "react";
import { jwt } from './cart';
import Login from './Login';

export default function CartContent() { 
  const [token, setToken] = useState("");

  useEffect(() => {
    return jwt.subscribe((val) => setToken(val ?? ''))
  }, []);
  
  return (
    <div>
      <div>JWT: {token} 
        <Login />
      </div>
    </div>
  )
}