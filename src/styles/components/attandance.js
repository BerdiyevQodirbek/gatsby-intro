import styled from 'styled-components'

const S = {}

S.BtnWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 12px;
`

S.ModalWrapper = styled.div`

font-size: 12px;
    .table__col-img {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        object-fit: cover;

    }
`

S.NoteText = styled.button`
    width: 50px;
    height: 50px;
    border: none;
    background: transparent;
    svg {
        cursor: pointer;
    }
`

export default S;