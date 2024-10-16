import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.button`
  background: #049dd2;
  border: 0;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  &:hover {
    background: #037cb1;
  }
`;

const Home: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div>
      {isHomePage && (
        <>
          <StyledButton onClick={() => setSidebarOpen(true)}>
            Explore web APIs
          </StyledButton>

          {isSidebarOpen && <Sidebar onClose={() => setSidebarOpen(false)} />}
        </>
      )}
    </div>
  );
};

export default Home;
