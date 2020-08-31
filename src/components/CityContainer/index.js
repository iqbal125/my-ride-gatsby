import React, { useState, useEffect } from "react"
import styled from "styled-components"

import {
  StyledNavPortalTitle,
  StyledLeftNav,
  StyledMainPortal,
  NavPortalItem,
} from "../PortalStyles"

const City = props => {
  return (
    <>
      <StyledLeftNav>
        <StyledNavPortalTitle>City Portal</StyledNavPortalTitle>
        <NavPortalItem>Filter Search</NavPortalItem>
        <NavPortalItem>Document Loader</NavPortalItem>
        <NavPortalItem>Add Statute</NavPortalItem>
        <NavPortalItem>Add Exception</NavPortalItem>
        <NavPortalItem>Parse Document</NavPortalItem>
        <NavPortalItem>Rule Editor</NavPortalItem>
      </StyledLeftNav>
      <StyledMainPortal></StyledMainPortal>
    </>
  )
}

export default City
