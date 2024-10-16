import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const ProviderContainer = styled.div`
  color: #fff;
  padding: 1rem;
  width: 90%;
  margin: auto;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoContainer = styled.div`
  margin-bottom: 3rem;
`;

const Text = styled.p`
  margin: 0 0 0.5rem;
`;

const TitleTd = styled.td`
  width: 20%;
  padding-bottom: 0.5rem;
`;

const DataTd = styled.td`
  padding-bottom: 0.5rem;
`;

const StyledButton = styled.button`
  background: #049dd2;
  border: 0;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #037cb1;
  }
`;

const ProviderDetails: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { api } = location.state || {};

  const handleExploreMore = () => {
    navigate("/");
  };

  return (
    <ProviderContainer>
      <TitleContainer>
        <img
          src={api?.info["x-logo"]?.url}
          alt="logo"
          style={{ width: "80px", marginRight: "1rem" }}
        />
        <h2>{api?.info.title}</h2>
      </TitleContainer>
      <InfoContainer>
        <Text>Description</Text>
        <Text dangerouslySetInnerHTML={{ __html: api?.info.description }} />
      </InfoContainer>
      <InfoContainer>
        <Text>Swagger</Text>
        <Text>{api?.swaggerUrl}</Text>
      </InfoContainer>
      <InfoContainer>
        <Text>Contact</Text>
        <table>
          <tbody>
            <tr>
              <TitleTd>Email</TitleTd>
              <DataTd>{api?.info.contact.email}</DataTd>
            </tr>
            <tr>
              <TitleTd>Name</TitleTd>
              <DataTd>{api?.info.contact.name}</DataTd>
            </tr>
            <tr>
              <TitleTd>Url</TitleTd>
              <DataTd>{api?.info.contact.url}</DataTd>
            </tr>
          </tbody>
        </table>
      </InfoContainer>
      <div style={{ textAlign: "center" }}>
        <StyledButton onClick={handleExploreMore}>
          Explore more APIs
        </StyledButton>
      </div>
    </ProviderContainer>
  );
};

export default ProviderDetails;
