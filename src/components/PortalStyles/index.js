import React from "react"
import styled from "styled-components"

const leftNavBackgroundColor = "rgba(209, 209, 209)"
const leftNavSelectedBackgroundColor = "rgba(120,120,120)"
const leftNavSelectedColor = "white"
const leftNavColor = "black"

const StyledLeftNav = styled.div`
  --ItemFontWeight: 500;
  resize: horizontal;
  overflow-y: scroll;
  padding: 0px;
  margin: 0px;
  background-color: ${leftNavBackgroundColor};
`

const StyledMainPortal = styled.div`
  flex-grow: 1;
  padding: 0px 10px;
`

const StyledNavPortalTitle = styled.div`
  background-color: rgba(118, 118, 118);
  font-size: 1.8em;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 700;
  height: 2.5em;
  padding: 5px 20px;
  margin: 0;
`

const StyledNavPortalItem = styled.div`
  margin-top: 20px;
  margin-left: 5px;
  font-size: 1.5em;
  font-weight: var(--ItemFontWeight);
  padding: 5px;
  cursor: pointer;
`

const NavPortalItem = props => {
  return (
    <StyledNavPortalItem
      onMouseOver={el => {
        //el.target.style.backgroundColor = leftNavSelectedBackgroundColor;
        el.target.style.fontWeight = 900
        el.target.style.color = leftNavSelectedColor
      }}
      onMouseLeave={el => {
        //el.target.style.backgroundColor = leftNavBackgroundColor;
        el.target.style.fontWeight = "var(--ItemFontWeight)" //700;
        el.target.style.color = leftNavColor
      }}
    >
      {props.children}
    </StyledNavPortalItem>
  )
}

export {
  StyledMainPortal,
  StyledLeftNav,
  StyledNavPortalTitle,
  StyledNavPortalItem,
  NavPortalItem,
}
