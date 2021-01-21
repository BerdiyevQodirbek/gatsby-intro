import Sty from "styled-components";

const S = {};

S.TableBlock = Sty.div`
    border: 1px solid var(--card-border);
    border-radius: 4px;
    padding: 24px; 

    .table__col-img{
        width: 28px;
        height: 28px;
        border-radius: 50%;
        object-fit: cover;

    }

    .table__action-view{
        width: 51px;
        height: 24px;
        background: var(--btn-green-bc);
        border-radius: 4px;
        text-align: center;
        cursor: pointer;
        color: var(--main-green);
        border: none;
        margin-left: 5px;
    }
`;
export default S;
