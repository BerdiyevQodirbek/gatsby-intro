import React from "react";
import Card from "./left-card";
import RightTab from "./right-block";
import S from "../../styles/pages/center/index";
// import Logo from "../../assets/img/profile.jpg";

const { Inner } = S;

function Info() {
  return (
    <div>
      <Inner>
        <Card
          data={{
            current: "Studying",
            email: "farrukhbekabdullayev@gmail.com",
            // Logo: Logo,
            Profession: "Design",
            InstructorName: "Farruxbek Abdullayev",
            Location: "London, England",
            Phone: "+99 554 46 60",
            Birthday: "08.02.1999",
          }}
        />
        <RightTab />
      </Inner>
    </div>
  );
}

export default Info;
