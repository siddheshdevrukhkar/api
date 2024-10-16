import React, { useState, useEffect } from "react";
import Accordion from "./Accordion";
import styled from "styled-components";

const SidebarContainer = styled.div`
  position: fixed;
  right: 0px;
  width: 350px;
  height: 100%;
  overflow-y: scroll;
  background: #3f5e7b;
  box-shadow: -5px 0px 5px 0px #171717a3;
  padding: 1rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  font-family: "Arial";
`;

const CloseButton = styled.button`
  background: transparent;
  margin-left: auto;
  border: 0;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
`;

const Title = styled.h3`
  margin: 0 0 1rem;
  text-align: center;
  text-align: center;
`;

const Sidebar: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [providers, setProviders] = useState<string[]>([]);

  useEffect(() => {
    const fetchProviders = async () => {
      const response = await fetch("https://api.apis.guru/v2/providers.json");
      const data = await response.json();
      setProviders(data.data);
    };

    fetchProviders();
  }, []);

  return (
    <SidebarContainer>
      <CloseButton onClick={onClose}>&times;</CloseButton>
      <Title>Select Provider</Title>
      {providers.map((provider) => (
        <Accordion key={provider} providerName={provider} />
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
