import styled from "styled-components";

const s = {};

s.Inner = styled.div`
  display: flex;
`;

s.LeftCard = styled.div`
  margin: 0 22px 0 10px;
  min-width: 387px;
  border-radius: 20px;
  background: var(--white);
  padding-bottom: 100px;

  p {
    margin: 0px;
  }

  .card__img {
    width: 100%;
    border-radius: 20px;
  }

  .d-flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .flex-column {
    flex-direction: column;
  }

  .card__logo-inner {
    width: 160px;
    height: 160px;
    background: var(--white);
    border: 6px solid var(--white);
    box-shadow: var(--center-logo-shadow);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    transform: translatey(-50%) translateX(68%);
  }

  .card__logo-img {
    width: 125px;
  }

  h1.card__title {
    margin-top: 100px;
    text-align: center;
    font-weight: 700;
    font-size: 22px;
    line-height: 33px;
    color: var(--black);
  }

  .card__subtitle {
    text-align: center;
    font-size: 16px;
    line-height: 24px;
  }

  .card__body {
    padding: 40px 25px 0;
  }

  .card__inner {
    display: flex;
    justify-content: space-between;
    margin-bottom: 36px;
  }

  .card__inner-block {
    display: flex;
    align-items: center;
  }

  .card__img-inner {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background: var(--purple);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 14px;
    overflow: hidden;
  }

  .card__inner-man, .card__inner-people {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card__inner-man {
      background: var(--blue);
  }

  .card__inner-people {
      background: var(--orange);
  }

  .yellow-orange {
    background: var(--yellow-orange);
  }

  .title {
    font-weight: 600;
    font-size: 18px;
    line-height: 30px;
    color: var(--black);
    margin-bottom: 0;
  }

  .subtitle {
    font-size: 14px;
    line-height: 21px;
    color: var(--sub-text);
  }

  .card__block {
    display: flex;
    align-items: center;
    margin-bottom: 26px;
  }

  .card__block-img-inner {
    min-width: 46px;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    padding: 10px;
    background: #ececec;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
  }
`;

s.RightBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

s.RightInner = styled.div`
  background: var(--white);
  border-radius: 20px;
  width: 100%;
  padding: 40px;

  .title__inner,
  .d-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title__inner {
    margin-bottom: 33px;
  }

  .title {
    font-size: 16px;
    color: #000;
    font-weight: 700;
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
`;

s.RightButton = styled.button`
    height: 36px;
    padding: 10px 20px;
    border-radius: 5px;
    background: var(--main-green);
    border: none;
    cursor: pointer;
    text-align: center;
    color: var(--white);
    margin-right: 40px;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
`

s.RightCard = styled.div`
  background: var(--white);
  border: 1px solid var(--grey);
  box-sizing: border-box;
  box-shadow: var(--center-card-shadow);
  border-radius: 14px;
  text-align: center;
  padding: 20px;
  width: 276px;
  margin: 20px 10px 20px 0;

  .card__dots {
    display: block;
    margin-left: auto;
  }

  .card__inner {
    position: relative;

    a {
      color: black;
      widht: 100%;
      height: 100%;
    }
  }
  .card__img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .status {
    background: var(--orange);
    border-radius: 52px;
    width: 138px;
    padding: 4px 20px;
    margin: 0 auto;
    position: relative;
    top: -20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
    font-size: 14px;
  }

  .status__img {
    margin-right: 5px;
  }

  .card__title {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #202020;
    margin-bottom: 4px;
  }

  .card__subtitle {
    font-size: 14px;
    line-height: 20px;
    color: var(--grey);
    margin-bottom: 8px;
  }

  .card__subtitle-img {
    margin-right: 5px;
  }

  .card__text {
    margin-top: 15px;
    font-size: 12px;
    line-height: 18px;
  }

  .d-flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default s;
