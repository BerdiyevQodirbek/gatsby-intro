import styled from "styled-components";

export const FlexWrapper = styled.div`
  display: flex;
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  flex-direction: ${(props) => props.fd || "row"};
`;
