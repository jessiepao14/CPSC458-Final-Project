import Head from "next/head";

import SideNav from "../components/SideNav";
import styles from "../styles/Home.module.css";
// import { Date } from "../components/Date";
import styled from "styled-components";
import DailyConsumptionCard from "../components/DailyConsumptionCard";
import Header from "../components/Header";
import FoodCards from "../components/FoodCards";

export default function Home() {
  function createFoodData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  function createExerciseData(name, length, calBurned) {
    return { name, length, calBurned };
  }

  const foodRows = [
    createFoodData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createFoodData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createFoodData("Eclair", 262, 16.0, 24, 6.0),
    createFoodData("Cupcake", 305, 3.7, 67, 4.3),
    createFoodData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  const exerciseRows = [
    createExerciseData("Running", 30, 100),
    createExerciseData("Squats", 15, 60),
    createExerciseData("Biking", 60, 300),
  ];

  const addingFood = () => {
    console.log("adding food");
  };

  const addingExercise = () => {
    console.log("adding exercise");
  };

  const current = new Date();

  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <>
      <Head>
        <title>NutriPal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <SideNav />

        <Body>
          <Header type={"Dashboard"} />
          <Cards>
            <FoodCards type={"Carbs"} amount={"300"} />
            <FoodCards type={"Protein"} amount={"500"} />
            <FoodCards type={"Fats"} amount={"200"} />
          </Cards>
          <DailyConsumptionCard
            type={"Food"}
            rows={foodRows}
            adding={true}
            addingItem={addingFood}
          />
          <DailyConsumptionCard
            type={"Exercise"}
            rows={exerciseRows}
            adding={true}
            addingItem={addingExercise}
          />
          {/* <FoodCards /> */}
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
  margin-left: 25%;
  background-color: #f8f8f8;
  min-width: 75%;
  height: 100%;
`;

const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 40px;
`;
