import styled from 'styled-components';

export const Box = styled.div`
  padding: 80px 60px;
  background: black;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 50px 30px 1rem 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1800px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 10px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(205px, 1fr));
  grid-gap: 20px;
  // @media (max-width: 1800px) {
  //   grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  // }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  font-weight: bold;
`;

export const Icon = styled.i`
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga;
  -webkit-font-smoothing: antialiased;
  color: #fff;
`;

export const Title = styled.div`
  font-size: 24px;
  color: #fff;
  font-weight: bold;
`;
