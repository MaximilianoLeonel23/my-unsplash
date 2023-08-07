"use client";

import { createContext, useContext, useState } from "react";

export const PhotoContext = createContext(false);

interface Props {
  children: React.ReactNode;
}

export const PhotoProvider = ({ children }) => {
  return <PhotoContext.Provider>{children}</PhotoContext.Provider>;
};
