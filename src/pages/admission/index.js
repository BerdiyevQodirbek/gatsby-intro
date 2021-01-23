import React, { Component } from "react";
import S from "../../styles/pages/admission";
import Card from "./card";
import NestedTable from './list'
import Layout from '../../components/layout'
// import List from "../../assets/img/svg/list.svg";
// import Block from "../../assets/img/svg/sutudentsBlock.svg";
// import Arrow from "../../assets/img/svg/selectArrowDown.svg";
// import Face from "../../assets/img/profile.jpg";
const { ContainerStudents, InnerStudents, CardInner } = S;

export default class Admission extends Component {
  constructor(props) {
    super(props);

    this.state = {
      select: "Fanlar",
      clicked: false,
      isList: false,
    };
  }

  componentDidMount() { }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.name !== this.state.name) {
      this.handler();
    }
  }

  componentWillUnmount() { }

  // Prototype methods, Bind in Constructor (ES2015)

  // Class Properties (Stage 3 Proposal)
  selectHandler = () => {
    this.setState();
  };

  selectChekedHandler = () => {
    const { clicked } = this.state;
    clicked
      ? this.setState({ clicked: false })
      : this.setState({ clicked: true });
    console.log(clicked);
  };

  listHandler = () => {
    this.setState({isList : true})
  }

  cardHandler = () => {
    this.setState({isList : false})
  }

  render() {
    const { clicked, isList } = this.state;
    return (
      <Layout>
        <ContainerStudents>
          <h1 className="up-title up-title--space">Admission</h1>
          <InnerStudents>
            <div>
              <h4 className="title">246 ta o’quvchi bor</h4>
              <p className="subtitle">Sizning filterlaringizga mos keladigan</p>
            </div>
            <div className="d-flex">
              <div className="select">
                <button className="button" onClick={this.selectChekedHandler}>
                  <img
                    className="select__img select__img-large"
                    // src={List}
                    alt=""
                  />
                  <div className="select__text">{this.state.select}</div>
                  {/* <img className="select__img" src={Arrow} alt="" /> */}
                </button>
                <div
                  className={
                    clicked
                      ? "select__body select__body--active"
                      : "select__body"
                  }
                >
                  <button
                    onClick={this.selectHandler}
                    className="select__option"
                  >
                    Ona tili
                  </button>
                  <button
                    onClick={this.selectHandler}
                    className="select__option"
                  >
                    Ona tili
                  </button>
                  <button
                    onClick={this.selectHandler}
                    className="select__option"
                  >
                    Ona tili
                  </button>
                </div>
              </div>
              <button onClick={this.listHandler} className="sort__btn sort__btn--space">
                {/* <img className="sort__btn-img" src={List} alt="" /> */}
              </button>
              <button onClick={this.cardHandler} className="sort__btn btn-green">
                {/* <img className="sort__btn-img" src={Block} alt="" /> */}
              </button>
            </div>
          </InnerStudents>
          {isList ? <NestedTable /> :
            <><div className="card">
              <InnerStudents>
                <div className="inner">
                  <h4 className="title title__no-space">English</h4>
                  <button className="btn-green create__btn">Create group</button>
                </div>
              </InnerStudents>
              <CardInner>
                <Card
                  title="Shane Robertson"
                  subtitle="Intermediate"
                  phone="(319) 555-0115"
                  time="11:00 - 13:00"
                  // userImg={Face}
                />
                <Card
                  title="Shane Robertson"
                  subtitle="Intermediate"
                  phone="(319) 555-0115"
                  time="11:00 - 13:00"
                />
                <Card
                  title="Shane Robertson"
                  subtitle="Intermediate"
                  phone="(319) 555-0115"
                  time="11:00 - 13:00"
                />
                <Card
                  title="Shane Robertson"
                  subtitle="Intermediate"
                  phone="(319) 555-0115"
                  time="11:00 - 13:00"
                />
                <Card
                  title="Shane Robertson"
                  subtitle="Intermediate"
                  phone="(319) 555-0115"
                  time="11:00 - 13:00"
                />
                <Card
                  title="Shane Robertson"
                  subtitle="Intermediate"
                  phone="(319) 555-0115"
                  time="11:00 - 13:00"
                />
                <Card
                  title="Shane Robertson"
                  subtitle="Intermediate"
                  phone="(319) 555-0115"
                  time="11:00 - 13:00"
                />
              </CardInner>
            </div>
              <div className="card">
                <InnerStudents>
                  <div className="inner">
                    <h4 className="title title__no-space">English</h4>
                  </div>
                </InnerStudents>
                <CardInner>
                  <Card
                    title="Shane Robertson"
                    subtitle="Intermediate"
                    phone="(319) 555-0115"
                    time="11:00 - 13:00"
                  />
                  <Card
                    title="Shane Robertson"
                    subtitle="Intermediate"
                    phone="(319) 555-0115"
                    time="11:00 - 13:00"
                  />
                  <Card
                    title="Shane Robertson"
                    subtitle="Intermediate"
                    phone="(319) 555-0115"
                    time="11:00 - 13:00"
                  />
                  <Card
                    title="Shane Robertson"
                    subtitle="Intermediate"
                    phone="(319) 555-0115"
                    time="11:00 - 13:00"
                  />
                  <Card
                    title="Shane Robertson"
                    subtitle="Intermediate"
                    phone="(319) 555-0115"
                    time="11:00 - 13:00"
                  />
                  <Card
                    title="Shane Robertson"
                    subtitle="Intermediate"
                    phone="(319) 555-0115"
                    time="11:00 - 13:00"
                  />
                  <Card
                    title="Shane Robertson"
                    subtitle="Intermediate"
                    phone="(319) 555-0115"
                    time="11:00 - 13:00"
                  />
                </CardInner>
              </div></>}
        </ContainerStudents>
      </Layout>
    );
  }
}
