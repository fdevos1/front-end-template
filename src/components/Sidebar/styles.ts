import styled from "styled-components";

export const Container = styled.div`
  height: 100%;

  background-color: #101213;

  .pandorga {
    font-family: "Gotham Black", sans-serif;

    font-size: 1.25rem;

    color: white;
  }

  .pandorga.full-title {
    transition: all 0.4s;
  }

  .pandorga.initial-letter {
    width: 2rem;

    text-align: center;
  }

  .open {
    width: 17rem;

    transition: all 0.4s ease-in;
  }

  .closed {
    width: 5rem;

    transition: all 0.2s ease-in;
  }

  .text-open {
    opacity: 1;
    transition: all 0.5s;
  }

  .text-closed {
    opacity: 0;
    transition: all 0.5s;
  }
`;
