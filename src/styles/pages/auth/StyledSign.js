import styled from 'styled-components'

export const S = {}

S.StyledSign = styled.div `
    
    width: 100%;
    height: 100vh;
    z-index: 100;

.img-wrapper {
    position: absolute;
    top: 10%;
    right: 50%;
    height: 80%;
    width: 600px;
    transition: 0.8s;

    & > img {
        position: absolute;

        &:nth-child(2) {
            width: 250px;
            bottom: 8%;
        }
    }
}

.ant-btn {
    background: #7fdd9a;
    border-radius: 8px;

    &:hover {
        border-color: transparent;
        color: white;
    }
}

.sign__wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 400px;
    max-width: 80%;
    position: absolute;
    top: 50%;
    left: 70%;
    transform: translate(-50%, -50%);
    transition: 0.8s;
}

input, .ant-input-affix-wrapper.ant-input-password {
    border-radius: 8px;
    padding: 5px 15px;
}

@media only screen and (max-width: 1250px) {
    .img-wrapper {
        right: 42%;
    }
}

@media only screen and (max-width: 1000px) {
    .img-wrapper {
        opacity: 0;
    }

    .sign__wrapper {
        left: 50%;
    }
}


`