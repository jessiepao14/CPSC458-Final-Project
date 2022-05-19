import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import PieChartRoundedIcon from "@mui/icons-material/PieChartRounded";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";
import Link from "next/link";

export default function SideNav({ active }) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  return (
    <Nav>
      {isTabletOrMobile ? (
        <>
          <Link href="/dashboard">
            <a className={active === "dashboard" ? "active" : null}>
              <DashboardRoundedIcon />
            </a>
          </Link>
          <Link href="/summary">
            <a className={active === "summary" ? "active" : null}>
              <PieChartRoundedIcon />
            </a>
          </Link>
          <Link href="/history">
            <a className={active === "history" ? "active" : null}>
              <HistoryRoundedIcon />
            </a>
          </Link>
        </>
      ) : (
        <>
          <Link href="/dashboard">
            <a className={active === "dashboard" ? "active" : null}>
              <DashboardRoundedIcon />
              Dashboard
            </a>
          </Link>
          <Link href="/summary">
            <a className={active === "summary" ? "active" : null}>
              <PieChartRoundedIcon />
              Summary
            </a>
          </Link>
          <Link href="/history">
            <a className={active === "history" ? "active" : null}>
              <HistoryRoundedIcon />
              History
            </a>
          </Link>
        </>
      )}
    </Nav>
  );
}

const Nav = styled.div`
  height: 100%;
  width: 20%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #fff;
  transition: 0.5s ease;
  overflow-x: hidden;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;

  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  //   border-right: 1px solid gray;
  gap: 5px;

  a {
    color: #000;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    background-color: #fff;
    text-decoration: none;
    width: 80%;
    border: 1px solid transparent;
    border-radius: 5px;
    // fill: #c0c0c0;
  }
  a.active {
    background-color: #ff725e;
    color: #000;
  }
  a:hover {
    background-color: #ff725e;
    color: #000;
  }

  @media screen and (max-width: 1000px) {
    width: 60px;
    align-items: center;
    a {
      display: block;
      padding: 5px 5px 5px 10px;
      //   top right bottom left
    }
  }
`;
