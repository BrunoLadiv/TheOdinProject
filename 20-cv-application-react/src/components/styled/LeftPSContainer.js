import styled from 'styled-components'


export const LeftPSContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  color: white;

  & > h3 {
    margin-top: 10px;
    font-size: 18px;
    font-weight: 200;
  }
 
  & > p {
    font-weight: 100;
    font-size: 13px;
    margin-left: 10px;
  }
  & > .date{
    margin-left: 15px;
    font-size: 11px;
    font-weight: 50;
  }

  @media print{
    color: black;
    font-weight: bold;
   

  }
`
