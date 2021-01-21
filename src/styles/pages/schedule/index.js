import styled from "styled-components";

const S = {};

S.Wrapper = styled.div`
  .schedule {
    display: flex;
    min-height: 100%;
    font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
    font-size: 14px;
  }

  .schedule__block {
    flex-grow: 1;
    padding: 3em;
  }

  .fc {
    /* the calendar root */
    max-width: 1100px;
    margin: 0 auto;
  }
  .fc-button-group {
    background: #edf1fb;
    border-radius: 16px;
  }
  .fc-button {
    background: transparent;
    color: #717579;
    border: none;
    width: 100px;
    max-width: 120px;
  }
  .fc-button-primary {
    height: 35px;
    border-radius: 16px;
    outline-color: #edf1fb;
  }
  .fc-button.fc-button-primary.fc-button-active,
  .fc .fc-button-primary:hover,
  .fc .fc-button:focus,
  .fc .fc-button-primary:focus {
    color: #303134;
    background: #ffffff;
    box-shadow: 0px 6px 20px rgba(181, 181, 181, 0.42);
    transform: scale(1.1);
    transition: all 0.3s;
    border-radius: 16px;
    padding: 0px 20px;
  }
  .fc .fc-button-primary:not(:disabled):active:focus,
  .fc .fc-button-primary:not(:disabled).fc-button-active:focus {
    box-shadow: 0;
  }
  .fc-toolbar-title {
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    color: #303134;
  }
  .fc-icon {
    color: #1b48bb;
  }
`;

export default S;
