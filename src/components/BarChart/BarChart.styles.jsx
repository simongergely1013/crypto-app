import styled from "styled-components";

export const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding-top: 100px;
  background: ${(props) => props.theme.main};
  margin: 15px;
  border-radius: 10px;
`;
export const TopChartDiv = styled.div`
  width: 98%;
  height: 75%;
`;
