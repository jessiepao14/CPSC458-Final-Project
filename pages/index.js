import Head from "next/head";

import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";
import styles from "../styles/Home.module.css";
// import { Date } from "../components/Date";
import styled from "styled-components";
import DailyConsumptionCard from "../components/DailyConsumptionCard";
import Header from "../components/Header";
import FoodCards from "../components/FoodCards";
import LocalGroceryStoreRoundedIcon from "@mui/icons-material/LocalGroceryStoreRounded";
import Link from "next/link";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const SignIn = () => {
    signInWithPopup(auth, new GoogleAuthProvider()).then(() => {
      router.push("/dashboard");
    });
  };
  return (
    <>
      <Head>
        <title>NutriPal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title>
        Welcome to
        <LocalGroceryStoreRoundedIcon sx={{ fontSize: 200 }} />
        MyNutriPal
        <button className="btn" onClick={SignIn}>
          Click to Login
        </button>
      </Title>
    </>
  );
}

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #91c788;
  font-size: 100px;
  button {
    background-color: #91c788;
    color: #fff;
    font-size: 50px;
  }
  button:hover {
    color: grey;
  }
`;
