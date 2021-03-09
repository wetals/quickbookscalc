import React, { ChangeEvent } from "react";
import styled from "styled-components";

interface InputNativeProps {
  label: string;
  value: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputNative = ({ label, value, onChange }: InputNativeProps) => {
  const identifier = label.split(" ").join("_").toLowerCase();

  return (
    <div>
      <Label htmlFor={identifier}>{label}</Label>
      <InputWrapper>
        <input
          type="number"
          id={identifier}
          name={label}
          value={Number(value).toString()}
          onChange={onChange}
          step="0.01"
        />
      </InputWrapper>
    </div>
  );
};

const Label = styled.label`
  display: block;
  margin-top: 30px;
`;

const InputWrapper = styled.div`
  position: relative;

  &:before {
    position: absolute;
    top: 0;
    content: "£";
    left: 8px;
    padding-top: 10px;
    font-size: 13px;
  }

  input {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #666;
    padding: 8px 8px 8px 16px;

    &:focus {
      outline: none;
    }
  }
`;

export default InputNative;
