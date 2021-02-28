import styled from 'styled-components';

export const Container = styled.header`
  @media print {
    .noprint {
      visibility: hidden;
    }
    body {
      background: #fff;
    }
  }
  
  height: 70px;
  background-color: #01A993;
  display: flex;
  align-items: center;
  border-bottom: 1px solid grey;

  h2 {
    margin-left: 3%;
    color: #fff;
    font-size: 26px;
  }
`;
