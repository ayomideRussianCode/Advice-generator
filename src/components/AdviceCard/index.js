import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  Title,
  Content,
  Divider,
  Button
} from "./styles/AdviceCard";


export default function AdviceCard({ children, ...restProps }) {

  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState(null);

  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();

      setAdvice(data.slip.advice);
      setAdviceId(data.slip.id);
    } catch (error) {
      console.error("An error was encountered while fetching advice", error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <Container {...restProps}>
      <Card>
        <Title>Advice #{adviceId} </Title>
        <Content>"{advice}"</Content>
        <Divider></Divider>
        <Button onClick={fetchAdvice} {...restProps}>{children}</Button>
      </Card>
      {children}
    </Container>
  );
}
