import styled from "styled-components";

const success = `
    background: var(--btn-green-bc) !important;
    color: var(--main-green) !important;
   
`;
const danger = `
    background: var(--danger-status) !important;
    color: var(--danger-status-color) !important;
    
`;
const warning = `
    background: var(--warning-status) !important;
    color: var(--warning-status-color) !important;
    
`;

const custom = (props) => `
    margin: ${props.margin};
    padding: ${props.padding || "10px 15px"};
    background: ${props.background || "initial"};
    color: ${props.color || "initial"};
    border-color: ${props.borderColor || "initial"};
    border-radius: ${props.borderRadius || "4px"};
    font-size: ${props.fontSize || "10px"};
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;

`;

const status = {
  success,
  danger,
  warning,
};

export const Badge = styled.div`
  ${(props) => status[props.status] || custom}
  min-width: 50px;
  width: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  border-radius: 4px;
  outline: none;
  border: none;
  font-size: 12px;
  border: none;
`;
