import { useEffect, useState } from "react";

import SideNav from "../../components/SideNav";
import TopNav from "../../components/TopNav";
import styled from "styled-components";
import Header from "../../components/Header";
import { fetchFood } from "../../services/foodService";
import { fetchExercise } from "../../services/exerciseService";
import DailyConsumptionCard from "../../components/DailyConsumptionCard";
import { getAuth } from "firebase/auth";

export default function History() {
  //   const user = useAuthentication();
  const auth = getAuth();
  const user = auth.currentUser;

  const [foodRows, setfoods] = useState([]);
  const [exerciseRows, setExercise] = useState({});

  useEffect(() => {
    if (user) {
      fetchFood(user.uid).then((data) => {
        setfoods(data);
      });

      fetchExercise(user.uid).then((data) => {
        setExercise(data);
      });
    }
  }, []);

  const current = new Date();

  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <>
      <TopNav />
      <Wrapper>
        <SideNav active={"history"} />
        <Body>
          <Header type={"History"} />
          <DailyConsumptionCard
            type={"Food"}
            rows={foodRows}
            adding={false}
            addingItem={null}
          />
          <DailyConsumptionCard
            type={"Exercise"}
            rows={exerciseRows}
            adding={false}
            addingItem={null}
          />
        </Body>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  // flex-direction: column;
  // position: fixed;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20%;
  margin-top: 60px;
  border-top-left-radius: 30px;

  background-color: #f8f8f8;
  min-width: 80%;
  min-height: 100%;
  height: 100vh;
  overflow: auto;
  gap: 30px;
  @media screen and (max-width: 1000px) {
    width: calc(100vw - 60px);
    margin-left: 60px;
  }
`;
