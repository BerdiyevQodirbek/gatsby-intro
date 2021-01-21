import Sty from "styled-components";

const S = {};

S.Block = Sty.div`
    display: flex;
    margin: 30px 0 25px 0;
    align-item: center;
    justify-content: space-between;
    color: #B3B3B3;
    .nav__center{
        display: flex;
    }

    .nav__switch{
        font-weight: 300;
        font-size: 12px;
        
        margin-right: 10px;
    }

    .nav__date{
        font-weight: 300;
        font-size: 12px;
        line-height: 16px;
        color: var(--unselected-text);
    }
`;

export default S;
