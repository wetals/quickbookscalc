import React, { useState, useRef } from "react";
import styled from "styled-components";

interface CollapsibleProps {
  title: string;
  description: string;
}

const Collapsible = ({ title, description }: CollapsibleProps) => {
  const [active, setActive] = useState<boolean>(false);
  const [maxHeight, setMaxHeight] = useState<string>("0px");

  const content = useRef<HTMLDivElement>(null);

  const toggleCollapsible = () => {
    setActive(!active);
    setMaxHeight(active ? "0px" : `${content.current?.scrollHeight}px`);
  };

  return (
    <Section>
      <Title onClick={toggleCollapsible}>
        <p>{title}</p>
      </Title>
      <Content
        ref={content}
        active={active}
        style={{ maxHeight: `${maxHeight}` }}
      >
        <div>{description}</div>
      </Content>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #d4d6d8;
`;

const Content = styled.div<{ active: boolean }>`
  background-color: white;
  overflow: auto;
  transition: max-height 0.4s ease;
  margin-left: 40px;
  font-size: 14px;
  margin-bottom: ${props => (props.active ? "20px" : 0)};
`;

const Title = styled.div`
  cursor: pointer;
  padding: 4px 0;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  margin-left: 40px;
  transition: background-color 0.4s ease;
`;

export default Collapsible;
