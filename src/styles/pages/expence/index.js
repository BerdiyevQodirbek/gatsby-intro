import styled from "styled-components";

const S = {};

S.Wrapper = styled.div`
  width: 100%;
  padding: 30px;
  margin: 10px;

  .ant-table-cell {
    font-size: 14px;
  }

  .table__col-img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

S.Nav = styled.div`
  padding: 0px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  border-top: 0.7px solid #efeded;
  border-left: 0.7px solid #efeded;
  border-right: 0.7px solid #efeded;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  .nav__block {
    max-width: 50%;
    display: flex;
    width: 40%;
    justify-content: space-between;
    align-items: center;
    color: var(--sub-text);
  }
  .nav__title {
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
  }
  .nav__block-right {
    justify-content: flex-end;
  }

  .nav__switch {
    display: flex;
    margin-right: 20px;
    align-items: center;
  }

  .nav__switch-label {
    margin: 0;
    margin-right: 15px;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
  }
`;

export default S;
