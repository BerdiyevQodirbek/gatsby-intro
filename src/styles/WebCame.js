import styled from 'styled-components';

// export default styled.main`
//   display: flex;
//   align-items: flex-start;
//   justify-content: flex-start;
//   min-height: 100vh;
// `;

// Modal
const Modal = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    padding: 30px;
    background-color: rgba(0,0,0,0.35);
    overflow: auto;
    z-index: 1050;
    @media (max-width: 500px) {
        &{  
            padding: 20px;
        }
    }
`;

const ModalContainer = styled.div`
    position: relative;
    width: 90%;
    max-width: 700px;
    height: 90vh;
    margin: auto;
    padding: 0px 30px 20px;
    background-color: #fff;
    border-radius: 4px;
    overflow: auto;
    
    .web-cam__buttons {
        position: absolute;
        top: 70%;
        left: 50%;
        transform: translate(-50%, 10px);

        button {
            border: 1px solid var(--main-green);
            background: var(--main-green);
            color: var(--white);
            margin: 0 10px;
            padding: 5px 16px;
            border-radius: 4px;
            cursor: pointer;
        }
    }


    video {
        position: absolute;
        left: 50%;
        top: 38%;
        transform: translate(-50%, -50%) !important;
        border-radius: 50%;
        border: 1px solid var(--main-green);
    }

    @media (max-width: 500px) {
        &{  
            width: 100%;
        }
    }
`;

const ModalList = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 15px;
    border-bottom: 1px solid var(--grey);
    &.hoverable:hover {
        background: var(--success-light);
    }
    &:first-child {
        border-top: 1px solid var(--grey);
    }
    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    a {
        text-decoration: none;
        color: inherit;
        width: 100%;
    }
    h4 {
        flex: 1;
        margin-left: 10px;
        text-align: left;
        text-transform: capitalize; 
    }
    button {
        margin-left: auto;
        background-color: var(--success-light);
        color: var(--success);
        padding: 5px 10px;
        border: none;
        border-radius: 4px;
        outline: none;
        &:hover {
            background-color: var(--success);
            color: #fff;
        }
    }
    & .note-msg {
        width: auto;
        margin-right: 30px;
        display: flex;
        align-items: center;
        span {
          color: var(--orange);
          border-right: 1px solid;
          padding-right: 5px;
          margin-right: 5px;
          line-height: 16px;
        }
        p {
          color: #797979;
          font-size: 14px;
        }
      }
    .note {
      vertical-align: bottom;
      border-radius: 2px;
      padding: 3px;
      border: none;
      width: 0;
      margin: 0px;
      height: 30px;
      resize: none;
      opacity: 0;
      transition: width 0.2s ease-in;
      .note::-webkit-scrollbar {
        width: 0;
      }
      &:focus {
        width: 100px;
        opacity: 1;
        border: 1px solid var(--orange);
        transition: width 0.4s ease-out;
      }
      &:focus + button {
        display: none;
      }
    }
    @media (max-width: 500px) {
        &{  
            padding: 0;
        }
    }
`;


const ModalClose = styled.button`
    position: absolute;
    right: 10px;
    top: 10px;
    padding: 7px 15px;
    background-color: #ff9f9f;
    color: black;
    border:  1px solid #ff6060;
    border-radius: 4px;
    text-align: center;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
        background-color: #ff9f9f;
        color: #fff;
   
    @  a (max-width  0px) {
        &              top: 0;
            right: 0;
            padding: 4px 10px;
        }
    }
`;

export {
  Modal,
  ModalClose,
  ModalContainer,
  ModalList,
};