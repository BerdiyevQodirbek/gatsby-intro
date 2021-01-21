import styled from 'styled-components'

const S = {};

S.InstructorImg = styled.div`
    width: 160px;
    height: 160px;
    background: var(--white);
    border: 6px solid var(--white);
    box-shadow: var(--center-logo-shadow);
    border-radius: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    transform: translatey(-50%) translateX(68%);

    img {
        border-radius: 10%;
        width: 98%;
        object-fit: cover;
    }
`

S.GroupsCardInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 0 0 px;
`;


S.StateButton = styled.button`
    height: 57px;
    width: calc(100% - 52px);
    margin: 12px 25px 0;
    border: none;
    border-radius: 48px;
    background: var(--btn-green-bc);
    color: var(--main-green);
    transition: 0.5s;
    cursor: pointer;


    &:hover {
        color: var(--white);
        background: var(--main-green);
    }


`
export default S;