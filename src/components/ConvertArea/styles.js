import styled from 'styled-components';

export const ContainerTitulo = styled.div`
  flex-direction: row;
  text-align: center;
  
  h1 {
    font-size: 35px;
    font-weight: normal;
    color: black;
    margin-top: 1.8%;
    padding-bottom: 12px;
    color: #274653;
 }  

  p {
   margin:5px 5px;
 }

`
export const CodeArea = styled.div`
  margin-top: 4%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  h1 {
    color: #274653;
  }

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;

    .csvBox ,textarea {
      font-size: 16px;
      padding: 10px;
      height: 40vh;
      width: 30vw;
      border-radius: 3px;
      border: 1px solid #01A993;
    }

      table, td, th {
        font-weight: lighter;
        font-size: 16px;
        border: 1px solid #01A993; 
      }

        table {
          width: 70%;
          border-collapse: collapse;
        }
  }

  .buttons {
    width: 10vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
    button {
      background-color: white;
      width: 100px;
      height: 40px;
      border-radius: 4px;
      color: #01A993;
      border-color: #01A993;
    }

    button:nth-child(2) {
      margin-top: 30px;
    }
  
}
`
