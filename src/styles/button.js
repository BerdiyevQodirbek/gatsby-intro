import styled from "styled-components";
const S = {}

S.PrimBtn = styled.button`
display: flex;
flex-direction: column;
align-items: center;
padding: 6px 15px;
background: var(--btn-green-bc);
color: var(--main-green);
border-radius: 4px;
border: none;
cursor: pointer;
&:hover, &:focus {
  background: var(--main-green);
  color:var(--white)
}
`

S.WarnBtn = styled.button`
display: flex;
flex-direction: column;
align-items: center;
padding: 6px 15px;
background: var(--orange-bc);
color: var(--warning-status-color);
border-radius: 4px;
border: none;
cursor: pointer;
margin: 0 10px;
&:hover, &:focus {
  background: var(--warning-status-color);
  color:var(--white)
}
`

S.DangerBtn = styled.button`
display: flex;
flex-direction: column;
align-items: center;
padding: 6px 15px;
background: var(--danger-status);
color: var(--danger-status-color);
border-radius: 4px;
border: none;
cursor: pointer;
&:hover, &:focus {
  background: var(--danger-status-color);
  color:var(--white)
}
`

const success = `
    display: inline-block;
    margin: 0 5px;
    padding: 5px 10px;
    background: var(--main-green) !important;
    color: var(--white) !important;
    border-color: var(--main-green) !important;
    border-radius: 5px;
    outline: none;
    width: 86.26px;
    height: 36px;
    font-size: 12px;
    cursor: pointer;
    border:none;
    &.active, &:hover {
        background: var(--bc-hover) !important;
        color: #fff !important;
    }
    &.light {
        background: var(--success-light) !important;
        color: var(--success) !important;
    }
`;
const pink = `
    display: inline-block;
    margin: 0 5px;
    padding: 5px 10px;
    background: #FF6584 !important;
    color: var(--white) !important;
    border-color: #FF6584 !important;
    border-radius: 5px;
    outline: none;
    width: 86.26px;
    height: 36px;
    font-size: 12px;
    cursor: pointer;
    border:none;
    &.active, &:hover {
        background: var(--bc-hover) !important;
        color: #fff !important;
    }
    &.light {
        background: var(--success-light) !important;
        color: var(--success) !important;
    }
`;
const blue = `
    display: inline-block;
    margin: 0 5px;
    padding: 5px 10px;
    background: #00A1F6 !important;
    color: var(--white) !important;
    border-color: #00A1F6 !important;
    border-radius: 5px;
    outline: none;
    width: 86.26px;
    height: 36px;
    font-size: 12px;
    cursor: pointer;
    border:none;
    &.active, &:hover {
        background: var(--bc-hover) !important;
        color: #fff !important;
    }
    &.light {
        background: var(--success-light) !important;
        color: var(--success) !important;
    }
`;

const custom = (props) => `
    display: ${props.display || "block"};
    width: ${props.width || "auto"};
    margin: ${props.margin};
    margin-top: ${props.marginTop};
    margin-right: ${props.marginRight};
    margin-bottom: ${props.marginBottom};
    margin-left: ${props.marginLeft};
    padding: ${props.padding || "10px 15px"};
    background: ${props.background || "initial"};
    color: ${props.color || "initial"};
    border-color: ${props.borderColor || "initial"};
    border-radius: ${props.borderRadius || "20px"};
    font-size: ${props.fontSize || "12px"};
    outline: none;
    cursor: pointer;
    font-weight: 300;
    line-height: 16px;
`;

const status = {
  success,
  blue,
  pink,
};

export const Button = styled.button`
  ${(props) => status[props.status] || custom}
  text-transform: capitalize;
  line-height: 100%;
  min-width: 80px;
  &:disabled {
    background: var(--grey);
    border: 1px solid var(--grey);
    cursor: not-allowed;
  }
  &.btn-sm {
    padding: 5px 10px;
    border-radius: 0px;
  }
  &.btn-grid-toggle {
    font-size: 14px;
    width: 25px !important;
    min-width: auto;
    border-radius: 2px;
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--blue);
  }
  &:first-of-type {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  &:last-of-type {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  &.active {
    background-color: var(--light);
    border-color: var(--light);
    color: #fff;
  }
`;

export default S