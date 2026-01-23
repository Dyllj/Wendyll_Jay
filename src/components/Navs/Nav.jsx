import React from 'react';
import styled from 'styled-components';

const Nav = ({ children = "Follow me" }) => {
  return (
    <StyledWrapper>
      <button>
        <p>{children}</p>
        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    background-color: #fff;
    border: 1px solid #d97706;
    padding: 5px;
    position: relative;
    width: 7.2em;
    height: 2em;
    transition: 0.5s;
    font-size: 17px;
    border-radius: 0.4em;
  }

  button p {
    position: absolute;
    top: 0.4em;
    left: 1.2em;
    margin: 0;
    padding: 0;
    transition: .5s;
    color: #d97706;
  }

  button svg {
    position: absolute;
    top: 0.45em;
    right: 0.5em;
    margin: 0;
    padding: 0;
    opacity: 0;
    transition: 0.5s;
    height: 1em;
    fill: #fff
  }

  button:hover p {
    left: 0.6em;
    color: #fff
  }

  button:hover svg {
    opacity: 1;
  }

  button:hover {
    background-color: #d97706;
  }
`;

export default Nav;