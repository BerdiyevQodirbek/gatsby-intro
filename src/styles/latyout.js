import styled from 'styled-components'

const S = {}

S.MainWrapper = styled.main`
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
`
export default S