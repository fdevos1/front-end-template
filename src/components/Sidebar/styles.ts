import styled from "styled-components";

export const Container = styled.div`
  height: 100%;

  background-color: #101213;

  padding: 0.5rem;

  .pandorga {
    font-family: "Gotham Black", sans-serif;

    font-size: 1.25rem;

    color: white;
  }

  .logo {
    height: 75%;
  }

  .pandorga-logo {
    height: 100%;
  }

  .header-box {
    transition: all 0.5s;
  }

  .open {
    width: 15rem;

    transition: all 0.6s ease-out;
    transition: width 0.25s ease-out;
  }

  .closed {
    width: 5rem;

    transition: all 0.4s ease-out;
    transition: width 0.25s ease-out;

    text-align: center;
  }

  .text-open {
    opacity: 1;
    transition: all 0.5s;
    transition: opacity 1s;
  }

  .text-closed {
    opacity: 0;
    transition: all 0.5s;
    transition: opacity 0.4s;
  }

  .opened-div {
    width: 15rem;

    transition: all 0.5s;
  }

  .closed-div {
    width: 5rem;

    transition: all 0.5s;
  }

  img {
    transition: all 0.4s;
  }
`;
