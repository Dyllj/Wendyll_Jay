import React from 'react';
import styled from 'styled-components';

const Radio = () => {
  return (
    <StyledWrapper>
      <div className="radio-input-wrapper">
        <label className="label">
          <input defaultValue="value-2" name="value-radio" id="value-2" className="radio-input" type="radio" />
          <div className="radio-design" />
          <div className="label-text">Clouds</div>
        </label>
        <label className="label">
          <input defaultValue="value-3" name="value-radio" id="value-3" className="radio-input" type="radio" />
          <div className="radio-design" />
          <div className="label-text">Earth</div>
        </label>
        <label className="label">
          <input defaultValue="value-4" name="value-radio" id="value-4" className="radio-input" type="radio" />
          <div className="radio-design" />
          <div className="label-text">Water</div>
        </label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* MAIN */
  /* =============================================== */
  .label {
    display: flex;
    align-items: center;
    border-radius: 100px;
    padding: 14px 16px;
    margin: 5px 0;
    cursor: pointer;
    transition: .3s;
  }

  .label:hover,
  .label:focus-within,
  .label:active {
    background: hsla(0, 0%, 80%, .14);
  }

  .radio-input {
    position: absolute;
    left: 0;
    top: 0;
    width: 1px;
    height: 1px;
    opacity: 0;
    z-index: -1;
  }

  .radio-design {
    width: 22px;
    height: 22px;
    border-radius: 100px;
    background: linear-gradient(to right bottom, hsl(154, 97%, 62%), hsl(225, 97%, 62%));
    position: relative;
  }

  .radio-design::before {
    content: '';
    display: inline-block;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    background: hsl(0, 0%, 90%);
    transform: scale(1.1);
    transition: .3s;
  }

  .radio-input:checked+.radio-design::before {
    transform: scale(0);
  }

  .label-text {
    color: hsl(0, 0%, 60%);
    margin-left: 14px;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 900;
    transition: .3s;
  }

  .radio-input:checked~.label-text {
    color: hsl(0, 0%, 40%);
  }`;

export default Radio;
