import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProviderButton = styled.button`
  background: transparent;
  border: 0;
  color: #fff;
  width: 100%;
  text-align: left;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const ProviderContainer = styled.div<{ $isOpen: boolean }>`
  background: ${({ $isOpen }) => ($isOpen ? "#000000ab" : "transparent")};
  border-radius: 5px;
  margin-bottom: 0.5rem;
`;

const Arrow = styled.span<{ $isOpen: boolean }>`
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(90deg)" : "rotate(0deg)")};
`;

const StyledList = styled.ul`
  list-style: none;
  padding-left: 1rem;
`;

interface AccordionProps {
  providerName: string;
}

const Accordion: React.FC<AccordionProps> = ({ providerName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [providerDetails, setProviderDetails] = useState<any[]>([]);

  useEffect(() => {
    if (isOpen) {
      const fetchDetails = async () => {
        const response = await fetch(
          `https://api.apis.guru/v2/${providerName}.json`
        );
        const data = await response.json();
        setProviderDetails(Object.values(data.apis));
      };

      fetchDetails();
    }
  }, [isOpen, providerName]);

  return (
    <ProviderContainer $isOpen={isOpen}>
      <ProviderButton onClick={() => setIsOpen(!isOpen)}>
        <div>{providerName}</div>
        <Arrow $isOpen={isOpen}>➤</Arrow>
      </ProviderButton>
      {isOpen && (
        <StyledList>
          {providerDetails.map((api: any, index: number) => (
            <li key={index}>
              <Link
                to="/provider"
                state={{ api }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#fff",
                  textDecoration: "none",
                  marginBottom: "0.5rem",
                }}
              >
                <img
                  src={api.info["x-logo"]?.url}
                  alt="logo"
                  style={{
                    width: "20px",
                    marginRight: ".5rem",
                  }}
                />
                {api.info.title}
              </Link>
            </li>
          ))}
        </StyledList>
      )}
    </ProviderContainer>
  );
};

export default Accordion;
