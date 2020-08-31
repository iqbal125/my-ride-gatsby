import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

import { DropDown, DropDownItem } from "../DropDown"

const AppHeader = styled.header`
  --AppLinkSize: 1.1em;
  --AppLinkWeight: 500;
  background-color: #ececec; //#282c34;
  margin: 0;
  padding: 0;
  min-height: var(--banner-height);
  display: grid;
  grid-template-columns: auto auto auto;
  font-size: 1.3em;
  font-weight: var(--AppLinkWeight);
  font-family: Roboto, Arial;
  color: rgba(0, 0, 0, 0.5); //black;
`

const AppHeaderWelcome = styled.div`
  text-align: center;
  font-family: "Shadows Into Light";
  padding: 1em;
  margin: 0;
  margin-left: 10px;
  font-weight: 800;
  font-size: 1.2em;
`

const AppHeaderEdgeLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //padding: 0 20px;
  font-size: 1.3em; // Not really used because this div is empty anyway
  flex-grow: 1;
`
const AppHeaderEdgeMiddle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //padding: 0 20px; consider removing, makes more responsive
`

const AppHeaderEdgeRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: right;
  flex-grow: 1;
`

const AppLinkBase = styled(Link)`
  padding: 0 20px;
  margin-right: 10px;
  text-decoration: none;
`

const AppLinkPortal = styled(AppLinkBase)`
  color: black; // !important;
  font-size: var(--AppLinkSize);
`
const AppLinkLogin = styled(AppLinkBase)`
  color: rgba(0, 0, 0, 0.5);
`

const LogoImg = styled.img`
  height: 25px; //calc(var(--banner-height)-10px);
  margin: 3px 5px;
  padding: 0;
  border-radius: 10%;
`

const LabelText = props => {
  //return "eat me";
  return (
    <span>
      Portal <FontAwesomeIcon icon={faChevronDown} />
    </span>
  )
}

export default function (props) {
  let DropDownItemStyle = { color: "rgba(0,0,0,0.9)" }
  return (
    <AppHeader>
      <AppHeaderEdgeLeft>
        <LogoImg src="logo.png" />
        {/*<AppHeaderWelcome>Welcome to my myRide!</AppHeaderWelcome>*/}
      </AppHeaderEdgeLeft>
      <AppHeaderEdgeMiddle>
        <DropDown
          label={<LabelText />}
          labelStyle={{
            backgroundColor: "inherit",
            widthXXX: "5em",
            color: "black",
            fontSize: "var(--AppLinkSize)",
            fontWeight: "var(--AppLinkWeight)",
            border: "none",
          }}
          dropDownStyle={{
            width: "10em",
            paddingLeft: 5,
          }}
        >
          <DropDownItem
            to="/jobprovisioning"
            as={Link}
            style={DropDownItemStyle}
          >
            Job Provisioning
          </DropDownItem>
          <DropDownItem to="/city" as={Link} style={DropDownItemStyle}>
            City Portal
          </DropDownItem>
          <DropDownItem to="/sign" as={Link} style={DropDownItemStyle}>
            Sign Labeling System
          </DropDownItem>
          <DropDownItem to="/garage" as={Link} style={DropDownItemStyle}>
            Garage Portal
          </DropDownItem>
          <DropDownItem to="/recaptcha" as={Link} style={DropDownItemStyle}>
            Re-captcha
          </DropDownItem>
        </DropDown>
        <AppLinkPortal exact={true} to="/about" activeStyle={{ color: "blue" }}>
          About us
        </AppLinkPortal>
        <AppLinkPortal
          exact={true}
          to="/contact"
          activeStyle={{ color: "blue" }}
        >
          Contact us
        </AppLinkPortal>
      </AppHeaderEdgeMiddle>

      <AppHeaderEdgeRight>
        <AppLinkLogin exact={true} to="/signup" activeStyle={{ color: "blue" }}>
          Sign up
        </AppLinkLogin>
        <DropDown
          label="Login"
          labelStyle={{
            backgroundColor: "inherit",
            color: "black",
            fontSize: "var(--AppLinkSize)",
            fontWeight: "var(--AppLinkWeight)",
            border: "none",
          }}
          dropDownStyle={{
            width: "10em",
            height: "10em",
            left: "-3em",
            paddingLeft: 5,
          }}
        >
          <DropDownItem
            to="/jobprovisioning"
            as="div"
            style={{ ...DropDownItemStyle, transition: "none", color: "black" }}
          >
            <div
              style={{
                textAlign: "center",
                fontWeight: "bold",
                marginTop: "0.1em",
                marginBottom: "1em",
              }}
            >
              Login
            </div>
            <form>
              <label
                htmlFor="nameID"
                style={{
                  fontSize: "0.8em",
                  fontWeight: "bold",
                }}
              >
                Username
              </label>
              <input id="nameID" />
            </form>
            <div
              style={{
                marginTop: "1em",
                textAlign: "center",
                border: "1px solid black",
                borderRadius: "5px",
                backgroundColor: "white",
                boxShadow: "2px 2px grey",
              }}
            >
              <Link
                exact={true}
                to="/login"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Send
              </Link>
            </div>
          </DropDownItem>
        </DropDown>
      </AppHeaderEdgeRight>
    </AppHeader>
  )
}
