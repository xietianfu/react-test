import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: block;
`;

const Label = styled.p`
  padding: 0 0 1em 0;
  color: #bec2d4;
  font-size: 14px;
`;

const Input = styled.input`
  padding-bottom: 0.5em;
  width: 100%;
  border: none;
  font-size: 14px;
  border-top: 0.5em solid rgba(0, 0, 0, 0);
  border-bottom: 1px solid #ced0d7;
  color: #333333;
  background-clip: padding-box;
  transition: border-bottom 0.5s, font-size 0.5s;
  /* font-weight: 600; */
  letter-spacing: 0.2em;

  &:focus {
    border-bottom: 1px solid #305fff;
    /* font-size: 1.5em; */
    /* .label {
      padding-top: 0;
    } */
  }
  &::-webkit-input-placeholder {
    color: #bec2d4;
  }
  &::-moz-placeholder {
    color: #bec2d4;
  }
  &::-moz-placeholder {
    color: #bec2d4;
  }
  &::-ms-input-placeholder {
    color: #bec2d4;
  }
`;

const Line = styled.div`
  /* position: absolute; */
  /* z-index: 10;
  bottom: 0;
  left: 0;
  right: 0; */
  background: #ced0d7;
  height: 1px;
  width: 100%;
`;

const BaseInput = ({ label, placeholder = '', mode, getChange, id }) => {
  return (
    <Wrap>
      <Label className="label">{label}</Label>
      <Input
        placeholder={placeholder}
        onChange={e => getChange(id, e.target.value)}
      />
    </Wrap>
  );
};

export default BaseInput;
