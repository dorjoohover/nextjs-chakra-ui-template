"use client";
import React from "react";
import { ReactNode, useState } from "react";
import { StoreContext } from "../context";

export default function StoreProvider({ children }: { children: ReactNode }) {
  const [cartData, setCartData] = useState([]);

  return (
    <StoreContext.Provider value={{ cartData, setCartData }}>
      {children}
    </StoreContext.Provider>
  );
}
