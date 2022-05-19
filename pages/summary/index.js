import { useEffect, useState } from "react";

import SideNav from "../../components/SideNav";
import TopNav from "../../components/TopNav";
import styled from "styled-components";
import Header from "../../components/Header";
import { fetchFood } from "../../services/foodService";
import { fetchExercise } from "../../services/exerciseService";
import DailyConsumptionCard from "../../components/DailyConsumptionCard";
import { getAuth } from "firebase/auth";
import dynamic from "next/dynamic";

export default function Summary() {
  //   const user = useAuthentication();
  const DonutChart = dynamic(() => import("react-donut-chart"), {
    ssr: false,
  });
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
        <SideNav active={"summary"} />
        <Body>
          <Header type={"Summary"} />
          <DonutChart
            className=""
            data={[
              {
                label: "Carbs",
                value:
                  Math.round(
                    foodRows.reduce((x, y) => x + y.nf_total_carbohydrate, 0) *
                      100
                  ) / 100,
              },
              {
                label: "Fats",
                value:
                  Math.round(
                    foodRows.reduce((x, y) => x + y.nf_total_fat, 0) * 100
                  ) / 100,
              },
              {
                label: "Protein",
                value:
                  Math.round(
                    foodRows.reduce((x, y) => x + y.nf_protein, 0) * 100
                  ) / 100,
              },
            ]}
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
