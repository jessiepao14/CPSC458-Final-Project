import * as React from "react";
import styled from "styled-components";

import LocalGroceryStoreRoundedIcon from "@mui/icons-material/LocalGroceryStoreRounded";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { useAuthentication } from "../services/authService";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import Link from "next/link";
import { useRouter } from "next/router";

export default function TopNav() {
  const router = useRouter();

  const user = useAuthentication();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const SignIn = () => {
    signInWithPopup(auth, new GoogleAuthProvider());
    handleClose();
    console.log(user);
  };

  const SignOut = () => {
    signOut(auth);
    handleClose();
    router.push("/");
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <TopNavWrapper>
      <Brand>
        <LocalGroceryStoreRoundedIcon sx={{ fontSize: 30 }} />
        MyNutriPal
      </Brand>
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Avatar />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {!user ? (
            <MenuItem onClick={SignIn}>Sign In</MenuItem>
          ) : (
            <MenuItem onClick={SignOut}>Sign Out</MenuItem>
          )}
        </Menu>
      </div>
    </TopNavWrapper>
  );
}

const TopNavWrapper = styled.div`
  position: fixed;
  width: 100%;
  background-color: #fff;
  z-index: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  color: #91c788;
  font-size: 30px;
`;
