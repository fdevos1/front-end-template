import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  align-items: center;
  background-color: #fff;
  padding: 1rem;
`;

export const Content = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
  background-color: #000;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  > p {
    color: white;
    font-size: 5rem;
    font-family: "Gotham Black", sans-serif;
  }
  .light {
    font-family: "Gotham Light", sans-serif;
  }
`;

export const LoginSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  background-color: #fff;
  border-radius: 0.5rem;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
