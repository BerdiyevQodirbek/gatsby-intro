import React, {useState} from "react";
import Layout from "../../components/layout";
// import Create from "./create";
// import Update from "./update";
// import { Link } from "gatsby";
// import Center from "../Center/index";
// const UserData = {
//   name: "Abdullayeva Malika Baxrom qizi",
//   subjectType: "IELTS",
//   phone: 998887766,
//   email: "Email@mail.ru",
//   adress: "24 uy Z Hamidov k. Zaribdor t.",
//   password: "123456",
// };

function Index(props) {
    const [check, setCheck] = useState(false)
  return (
    <Layout>
      {/* <Center /> */}
      <h1>Profile</h1>
      <br />
      {/* <Update data={UserData} /> */}
    </Layout>
  );
}

export default Index;
