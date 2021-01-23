import React, {useState} from "react";
import Card from "./left-card";
import RightTab from "./right-block";
import S from "../../styles/pages/center/index";
import Layout from "../../components/layout";
// import Logo from "../../assets/img/profile.jpg";

const { Inner } = S;

function Index(props) {

  const [isSchedule, setIsSchedule] = useState(false);

const showSchedule = () => {
  setIsSchedule(true)
}

const hideSchedule = () => {
  setIsSchedule(false)
}
  

  return (
    <Layout>
      <Inner>
        {!isSchedule 
        && 
        <Card
          data={{
            // // Logo: Logo,
            Profession: "Design",
            InstructorName: "Farruxbek Abdullayev",
            Students: 130,
            Groups: 2,
            Location: "London, England",
            Phone: "+99 554 46 60",
            Birthday: "08.02.1999",
          }}
        />}
        <RightTab chedule={isSchedule} data={{InstructorName: 'Farruxbek Abdullayev'}} scheduleHandlerOn={showSchedule} scheduleHandlerOff={hideSchedule} />
      </Inner>
    </Layout>
  );
}

export default Index;
