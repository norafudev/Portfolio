"use client";

import { useState } from "react";

interface ToggleProps {
  label: string;
  children: React.ReactNode;
}

const Toggle: React.FC<ToggleProps> = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="toggle-container">
      <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "▼" : "►"} {label}
      </button>
      {isOpen && <div className="toggle-content">{children}</div>}
    </div>
  );
};

export default Toggle;
