import styled from "styled-components";

export { Header, NavList, Brand, Nav, Input as SearchInput } from "./header";
export { Button } from "./button";

export const Main = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 100vh;
`;

export const Section = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 15px;
  padding-left: 250px;
  padding-top: 75px;
  background: var(--bc);
  @media (max-width: 1024px) {
    & {
      padding-left: 85px;
    }
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  flex-direction: ${(props) => props.fd || "row"};
`;

export const StatusBtn = styled.button`
  width: ${(props) => props.width || "auto"};
  text-align: ${(props) => props.width || "center"};
  padding: ${(props) => props.padding || "3px 15px"};
  font-size: ${(props) => props.fontSize || "12px"};
  font-weight: ${(props) => props.fontWeight || "500"};
  border: ${(props) => props.border || "0px  solid"};
  border-radius: ${(props) => props.borderRadius || "4px"};
  background: var(--btn-green-bc);
  color: var(${(props) => props.color});
`;
