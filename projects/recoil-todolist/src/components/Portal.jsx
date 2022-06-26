import React from "react";
import { createPortal } from "react-dom";

const Portal: React.FC<Props> = ({ children }) => {
  const rootElement = document.getElementId("#modal-root");

  return <>{rootElement ? createPortal(children, rootElement) : children}</>;
};

export default Portal;
