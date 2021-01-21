import React, { Component } from "react";
import S from "../../../../styles/pages/center";
import Card from "./card/index";
// import Profile from "../../../assets/img/profile.jpg";
// import List from "../../../assets/img/svg/list.svg";
// import Block from "../../../assets/img/svg/sutudentsBlock.svg";
// import Create from "../../Profile/create";

export default class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleEvent = this.handleEvent.bind(this);
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.name !== this.state.name) {
      this.handler();
    }
  }

  componentWillUnmount() {}

  // Prototype methods, Bind in Constructor (ES2015)
  handleEvent() {}

  // Class Properties (Stage 3 Proposal)
  handler = () => {
    this.setState();
  };

  render() {
    return (
      <>
        <S.RightInner>
          <div className="title__inner">
            <div>
              <h4 className="title">246 ta o’quvchi bor</h4>
            </div>
            <div className="d-flex">
              {/* <Create /> */}
              <button className="sort__btn sort__btn--space">
                {/* <img className="sort__btn-img" src={List} alt="" /> */}
              </button>
              <button className="sort__btn btn-green">
                {/* <img className="sort__btn-img" src={Block} alt="" /> */}
              </button>
            </div>
          </div>
          <S.RightBlock>
            <Card
              data={{
                // Img: Profile,
                Status: "Reception",
                Title: "Brian Corner",
                Phone: "(480) 555-0103",
                LocationText: "775 Rolling Green Rd.",
                Text:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
              }}
            />
            <Card
              data={{
                // Img: Profile,
                Status: "Reception",
                Title: "Brian Corner",
                Phone: "(480) 555-0103",
                LocationText: "775 Rolling Green Rd.",
                Text:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
              }}
            />
            <Card
              data={{
                // Img: Profile,
                Status: "Reception",
                Title: "Brian Corner",
                Phone: "(480) 555-0103",
                LocationText: "775 Rolling Green Rd.",
                Text:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
              }}
            />
            <Card
              data={{
                // Img: Profile,
                Status: "Reception",
                Title: "Brian Corner",
                Phone: "(480) 555-0103",
                LocationText: "775 Rolling Green Rd.",
                Text:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
              }}
            />

            <Card
              data={{
                // Img: Profile,
                Status: "Reception",
                Title: "Brian Corner",
                Phone: "(480) 555-0103",
                LocationText: "775 Rolling Green Rd.",
                Text:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
              }}
            />
          </S.RightBlock>
        </S.RightInner>
      </>
    );
  }
}
