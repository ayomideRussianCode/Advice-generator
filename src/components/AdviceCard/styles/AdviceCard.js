import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Card = styled.div`
  background-color: hsl(217, 19%, 38%);
  padding: 2rem;
  border-radius: 0.75rem;
  max-width: 400px;
  text-align: center;
`;

export const Title = styled.h1`
  color: hsl(150, 100%, 66%);
  font-size: 12px;
  margin-bottom: 1rem;
  text-transform: capitalize;
`;

export const Content = styled.p`
  color: hsl(193, 38%, 86%);
  font-size: 28px;
`;

export const Divider = styled.div`
  img{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  width: 24px;

  }


  img {
   @media (max-width: 375px) {
  width: 20px;
  }
  }

 
`;

export const Button = styled.button`
  img {
  color: hsl(150, 100%, 66%);
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  }

`;
