import React, { useState, useEffect } from "react"
import styled from "styled-components"

import {
  StyledNavPortalTitle,
  StyledLeftNav,
  StyledMainPortal,
  NavPortalItem,
} from "../PortalStyles"

export default props => {
  return (
    <>
      <StyledLeftNav>
        <StyledNavPortalTitle>Sign Labeling</StyledNavPortalTitle>
        <NavPortalItem>Filter Search</NavPortalItem>
        <NavPortalItem>Add New Templates</NavPortalItem>
        <NavPortalItem>Matched Photos & Illstrations</NavPortalItem>
        <NavPortalItem>Labeled POI</NavPortalItem>
        <NavPortalItem>Not-labeled POI</NavPortalItem>
        <NavPortalItem>Illustrated POI</NavPortalItem>
        <NavPortalItem>Search POI</NavPortalItem>
      </StyledLeftNav>
      <StyledMainPortal></StyledMainPortal>
    </>
  )
}
