import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

import InputNative from "./InputNative";
import SocialMediaLinks from "./SocialMediaLinks";
import Footer from "./Footer";
import { formatCurrency } from "./utils";

interface StateProps {
  [key: string]: number;
}

const item = {
  SALES: "Income from sales",
  COMMISSIONS: "Commissions",
  CONSTRUCTION: "Construction",
  OTHERS: "Other income"
};

const initialState: StateProps = {
  [item.SALES]: 0,
  [item.COMMISSIONS]: 0,
  [item.CONSTRUCTION]: 0,
  [item.OTHERS]: 0
};

const Main = () => {
  const [total, setTotal] = useState<string>(formatCurrency(0));
  const [state, setState] = useState<StateProps>(initialState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: strValue } = event.target;
    const valueArr = strValue.split(".");
    const value = Number(strValue);
    if (value < 0 || (valueArr.length > 1 && valueArr[1].length > 2)) return;
    const newState = {
      ...state,
      [event.target.name]: value
    };
    setState(newState);
    updateTotal(newState);
  };

  const updateTotal = (newState: StateProps) => {
    const totalValue = Object.values(newState).reduce(
      (itemTotal, itemValue) => itemTotal + itemValue
    );
    setTotal(formatCurrency(totalValue));
  };

  return (
    <MainWrapper>
      <CalculatorWrapper>
        <h1>The QuickBooks Calculator</h1>
        <ColumnWrapper>
          <Column>
            <InputNative
              label={item.SALES}
              value={state[item.SALES]}
              onChange={handleChange}
            />
            <InputNative
              label={item.COMMISSIONS}
              value={state[item.COMMISSIONS]}
              onChange={handleChange}
            />
          </Column>
          <Column>
            <InputNative
              label={item.CONSTRUCTION}
              value={state[item.CONSTRUCTION]}
              onChange={handleChange}
            />
            <InputNative
              label={item.OTHERS}
              value={state[item.OTHERS]}
              onChange={handleChange}
            />
          </Column>
          <Column>
            <TotalLabel>Total</TotalLabel>
            <TotalBox>{total}</TotalBox>
          </Column>
        </ColumnWrapper>

        <SocialMediaLinks />
      </CalculatorWrapper>
      <Footer />
    </MainWrapper>
  );
};

const MainWrapper = styled.section`
  width: 60vw;
  margin: 0 auto;
`;

const CalculatorWrapper = styled.div`
  background-color: #eceef1;
  padding: 40px;
  margin-bottom: 40px;
`;

const ColumnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 125%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
`;

const TotalLabel = styled.div`
  margin-top: 30px;
`;

const TotalBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(29, 143, 1);
  background: linear-gradient(
    90deg,
    rgba(29, 143, 1, 1) 0%,
    rgba(0, 176, 87, 1) 50%,
    rgba(13, 241, 217, 1) 100%
  );
  color: #ffffff;
  height: 100%;
  font-size: 42px;
  font-weight: bold;
`;

export default Main;
