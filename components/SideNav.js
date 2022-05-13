import styled from "styled-components";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import PieChartRoundedIcon from "@mui/icons-material/PieChartRounded";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";
import { useMediaQuery } from "react-responsive";

export default function SideNav() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  return (
    <Nav>
      {isTabletOrMobile ? (
        <>
          <a class="active disabled">
            <DashboardRoundedIcon />
          </a>
          <a>
            <PieChartRoundedIcon />
          </a>
          <a>
            <HistoryRoundedIcon />
          </a>
        </>
      ) : (
        <>
          <a class="active disabled">
            <DashboardRoundedIcon />
            Dashboard
          </a>
          <a>
            <PieChartRoundedIcon />
            Summary
          </a>
          <a>
            <HistoryRoundedIcon />
            History
          </a>
        </>
      )}
    </Nav>
  );
}

const Nav = styled.div`
  height: 100%;
  width: 25%;
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

  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  border-right: 1px solid gray;
  gap: 5px;
  a {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    background-color: #fff;
    text-decoration: none;
    width: 80%;
    border: 2px solid transparent;
    border-radius: 5px;
    // fill: #c0c0c0;
  }
  a.active {
    background-color: #000;
    color: #fff;
  }
  a:hover {
    background-color: #000;
    color: #fff;
  }
  //   a:hover {
  //     background-color: #d0d0d0;
  //     color: #fff;
  //   }
`;
