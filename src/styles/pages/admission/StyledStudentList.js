import styled from "styled-components";

const S = {};

S.ContainerStudents = styled.div`
  padding: 50px 30px;

  .up-title {
    font-size: 32px;
    color: #000;
    line-height: 48px;
    font-weight: 700;
  }

  .title--space {
    margin: 30px 0;
  }
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
    border-radius: 10px;
    cursor: pointer;
  }
`;

S.CardInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

S.Card = styled.div`
  min-width: 220px;
  width: 100%;
  max-width: 240px;
  background: var(--white);
  border: 1px solid var(--card-border);
  border-radius: 8px;
  margin-right: 20px;
  margin-bottom: 20px;
  transition: 1s;
  overflow: hidden;

  &:hover {
    box-shadow: var(--card-shadow);
  }

  &:hover .card__btn {
    background: var(--main-green);
    box-shadow: var(--card-btn-shadow);
    color: var(--white);
    transition: 1s;
  }

  .card__body {
    padding: 15px;
    text-align: center;
  }

  .card__inner {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .card__inp {
    background: var(--card-inp-bg);
    border-radius: 3px;
    border: none;
  }

  .card__img {
    width: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 13px;
  }

  .card__title {
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: var(--main-blue);
  }

  .card__subtitle {
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: var(--text-unselect);
    margin-bottom: 25px;
  }

  .d-flex {
    text-align: left;
    width: 130px;
    margin: 5px auto;
    font-size: 12px;
    line-height: 15px;
    color: var(--text-unselect);
  }

  .card__icon {
    width: 18px;
    margin-right: 15px;
  }

  .card__btn {
    display: block;
    width: 100%;
    margin-top: 14px;
    padding: 17px;
    background: var(--btn-green-bc);
    border: none;
    font-size: 14px;
    line-height: 18px;
    color: var(--green-status);
    cursor: pointer;
  }
`;

export default S;
