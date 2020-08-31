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
        <StyledNavPortalTitle>Job Provisioning</StyledNavPortalTitle>
        <NavPortalItem>Create Orders</NavPortalItem>
        <NavPortalItem>Create Profiles</NavPortalItem>
        <NavPortalItem>Provision Gigs</NavPortalItem>
        <NavPortalItem>Field tests</NavPortalItem>
        <NavPortalItem>Tutorials</NavPortalItem>
        <NavPortalItem>Quizes</NavPortalItem>
      </StyledLeftNav>
      <StyledMainPortal></StyledMainPortal>
    </>
  )
}
