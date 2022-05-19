import SideNav from "../../components/SideNav";
import TopNav from "../../components/TopNav";
import styled from "styled-components";
import DailyConsumptionCard from "../../components/DailyConsumptionCard";
import Header from "../../components/Header";
import FoodCards from "../../components/FoodCards";
import { fetchFood } from "../../services/foodService";
import { useEffect, useState } from "react";
import { fetchExercise } from "../../services/exerciseService";
import { getAuth } from "firebase/auth";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { addExercise } from "../../services/exerciseService";
import { addFood } from "../../services/foodService";
import SearchedFood from "../../components/SearchedFood";

export default function Dashboard() {
  const auth = getAuth();
  const user = auth.currentUser;

  const [foodRows, setfoods] = useState([]);
  const [exerciseRows, setExercise] = useState([]);

  const [openFood, setOpenFood] = useState(false);
  const [openExercise, setOpenExercise] = useState(false);

  const [exerciseLength, setExerciseLength] = useState(0);
  const [exerciseType, setExerciseType] = useState("");
  const [exerciseCal, setExerciseCal] = useState(0);

  const [foodSearch, setFoodSearch] = useState("");
  const [foodResults, setFoodResults] = useState([]);

  const handleClickOpenFood = () => {
    setOpenFood(true);
  };

  const handleCloseFood = () => {
    setOpenFood(false);
    setFoodSearch("");
    setFoodResults([]);
  };

  const handleClickOpenExercise = () => {
    setOpenExercise(true);
  };

  const handleCloseExercise = () => {
    setExerciseLength(0);
    setExerciseCal(0);
    setExerciseType("");
    setOpenExercise(false);
  };

  useEffect(() => {
    if (user) {
      fetchFood(user.uid).then((data) => {
        // data.map((row) => {
        //   createFoodData(row);
        // });
        setfoods(data);
        console.log(data);
        console.log(foodRows.reduce((x, y) => x + y.nf_total_carbohydrate, 0));
      });

      fetchExercise(user.uid).then((data) => {
        // data.map((row) => {
        //   createExerciseData(row);
        // });
        setExercise(data);
        console.log(data);
      });
    }
  }, [user]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "nutritionix-api.p.rapidapi.com",
      "X-RapidAPI-Key": "d3e288df0dmsh1ac4462fbacdc30p11ced6jsn597ebd34c064",
    },
  };

  const getFoodSearch = () => {
    let food = encodeURIComponent(foodSearch.trim());
    console.log(food);
    fetch(
      `https://nutritionix-api.p.rapidapi.com/v1_1/search/${food}?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat%2Cnf_total_carbohydrate%2Cnf_protein`,
      options
    )
      .then((response) => response.json())
      .then((response) => setFoodResults(response.hits))
      .catch((err) => console.error(err));
  };

  const addingFood = (
    foodTitle,
    nf_calories,
    nf_protein,
    nf_total_carbohydrate,
    nf_total_fat
  ) => {
    addFood(
      date,
      foodTitle,
      nf_calories,
      nf_protein,
      nf_total_carbohydrate,
      nf_total_fat,
      user.uid
    );
    if (user) {
      fetchFood(user.uid).then((data) => {
        setfoods(data);
      });
    }
    handleCloseFood();
  };

  const addingExercise = () => {
    addExercise(exerciseCal, date, exerciseType, exerciseLength, user.uid);
    if (user) {
      fetchExercise(user.uid).then((data) => {
        setExercise(data);
      });
    }
    handleCloseExercise();
  };

  const current = new Date();

  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <>
      <TopNav />
      <Wrapper>
        <SideNav active={"dashboard"} />
        <Body>
          <Header type={"Dashboard"} />
          <Cards>
            <FoodCards
              type={"Carbs"}
              amount={
                Math.round(
                  foodRows.reduce((x, y) => x + y.nf_total_carbohydrate, 0) *
                    100
                ) / 100
              }
            />
            <FoodCards
              type={"Protein"}
              amount={
                Math.round(
                  foodRows.reduce((x, y) => x + y.nf_protein, 0) * 100
                ) / 100
              }
            />
            <FoodCards
              type={"Fats"}
              amount={
                Math.round(
                  foodRows.reduce((x, y) => x + y.nf_total_fat, 0) * 100
                ) / 100
              }
            />
          </Cards>
          <DailyConsumptionCard
            type={"Food"}
            rows={foodRows}
            adding={true}
            addingItem={handleClickOpenFood}
          />
          <DailyConsumptionCard
            type={"Exercise"}
            rows={exerciseRows}
            adding={true}
            addingItem={handleClickOpenExercise}
          />
        </Body>
      </Wrapper>

      <Dialog open={openFood} onClose={handleCloseFood}>
        <DialogTitle>Add Food</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Search for the food below to add
          </DialogContentText>
          <TextField
            id="standard-search"
            label="Search field"
            type="search"
            variant="standard"
            onChange={(e) => {
              setFoodSearch(e.target.value);
            }}
          />
          <Button className="mt-2" onClick={getFoodSearch}>
            Search
          </Button>
          {foodResults.length > 0 ? (
            foodResults.map((e) => (
              <SearchedFood food={e.fields} addingItem={addingFood} />
            ))
          ) : (
            <DialogContentText>No results</DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseFood}>Cancel</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openExercise} onClose={handleClickOpenExercise}>
        <DialogTitle>Add Exercise</DialogTitle>
        <DialogContent>
          <DialogContentText class="d-flex mb-4">
            Fill out the form below to add an exercise
          </DialogContentText>
          <div className="d-flex flex-column justify-content-around">
            <TextField
              id="standard-required"
              label="Type of Exercise"
              variant="standard"
              value={exerciseType}
              onChange={(e) => {
                setExerciseType(e.target.value);
              }}
            />
            <TextField
              id="standard-number-required"
              label="Length (Min)"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
              value={exerciseLength}
              onChange={(e) => {
                setExerciseLength(e.target.value);
              }}
            />
            <TextField
              id="standard-number-required"
              label="Est. Calories Burned (cal)"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
              value={exerciseCal}
              onChange={(e) => {
                setExerciseCal(e.target.value);
              }}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseExercise}>Cancel</Button>
          <Button onClick={addingExercise}>Add Exercise</Button>
        </DialogActions>
      </Dialog>
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
  height: 100%;
  gap: 30px;
  @media screen and (max-width: 1000px) {
    width: calc(100vw - 60px);
    margin-left: 60px;
  }
`;

const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  // padding-top: 40px;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding-top: 0px;
  }
`;
