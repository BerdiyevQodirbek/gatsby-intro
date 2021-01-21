import styled from "styled-components";

const S = {};

S.GroupsInner = styled.div`
  padding: 0 60px;
  width: 100%;
`;

S.GroupsCardInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 0 0 50px;
`;

S.InnerStudents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 16px;
    color: #000;
    font-weight: 700;
  }

  .subtitle {
    font-size: 14px;
    font-weight: regular;
    color: #8a8a8a;
  }

  .d-flex {
    display: flex;
  }

  .select {
    margin-right: 40px;
    position: relative;
  }

  .button {
    display: flex;
    align-items: center;
    padding: 14px;
    border-radius: 25px;
    border: 1px solid var(--main-green);
    background: #fff;
    cursor: pointer;
    width: 171px;
    height: 49px;
    justify-content: space-between;
  }

  .select__img {
    width: 16px;
  }

  .select__img-large {
    width: 20px;
  }

  .select__text {
    margin: 0 30px 0 14px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: var(--select-text);
  }

  .select__body {
    opacity: 0;
    display: none;
    position: absolute;
    left: 0;
    right: 0;
    flex-direction: column;
    border: 1px solid #03bd52;
    border-bottom: 0;
    transition: 1s;
  }

  .select__body--active {
    display: flex;
    opacity: 1;
  }

  .select__option {
    width: 100%;
    border: none;
    padding: 10px;
    border-bottom: 1px solid #03bd52;
    background: none;
    border-collapse: collapse;
    cursor: pointer;
    margin-top: 5px;
  }

  .sort__btn {
    padding: 13px;
    border-radius: 50%;
    border: 1px solid #03bd52;
    background: #fff;
    cursor: pointer;
    width: 50px;
    height: 49px;
  }

  .sort__btn img {
    width: 100%;
  }

  .sort__btn--space {
    margin-right: 16px;
  }

  .btn-green {
    background: var(--main-green);
  }

  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 50px;
    margin-bottom: 20px;
    padding: 20px 0;
    border-bottom: 1px solid var(--card-border);
  }

  .title__no-space {
    margin: 0px;
  }

  .create__btn {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    padding: 14px 46px;
    color: var(--white);
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

S.StyledCard = styled.div`
  border: 1px solid var(--card-border);
  border-radius: 18px;
  max-width: 290px;
  width: 100%;
  margin: 30px 25px;
  cursor: pointer;
  overflow: hidden;
  
  .card__img-inner {
    position: relative;
  }

  .card__img-inner::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 9;
    border-radius: 18px 18px 0px 0px;
  }

  .card__icon-inner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    z-index: 99;
    padding: 10px 20px;
    border-radius: 8px;
  }

  .card__img {
    width: 100%;
    objec-fit: cover;
  }

  .card__time {
    display: flex;
    font-size: 12px;
    color: var(--text-unselect);
    padding: 3px 10px;
    background: var(--greey);
    border-radius: 8px;
  }

  .card__icon {
    margin-right: 5px;
  }

  .card__body {
    padding: 0 20px;
  }

  .card__title {
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    text-transform: capitalize;
    margin: 21px 0;
  }

  .card__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }

  .card__profile {
    width: 34px;
    height: 34px;
    margin-right: 10px;
    border-radius: 50%;
  }

  .card__profile-title {
    font-size: 12px;
    font-weight: 400;
    color: var(--text-unselect);
    text-transform: capitalize;
    margin-bottom: 0px;
  }

  .card__status {
    border: none;
  }

  .card__price {
    font-size: 12px;
    color: var(--main-green);
    font-weight: 700;
  }

  .d-flex {
    display: flex;
    align-items: center;
  }

  .card__btn {
    width: 100%;
    background: var(--main-green);
    text-align: center;
    color: var(--white);
    font-size: 14px;
    font-weight: 400;
    border-radius: 8px;
    border: none;
    padding: 17px 30px;
    margin-top: 25px;
    cursor: pointer;
  }
`;

export default S;
