import React from "react"
import { navigate } from "gatsby"
import styled from "styled-components"

const AppFooter = styled.div`
  min-height: var(--footer-height);
  justify-content: flex-end;
  padding-right: 40px;
  display: flex;
  align-items: center;
  background-color: #282c34;
  font-size: 1em;
  font-weight: 500;
  color: white;
`

const AppFooterItem = styled.div`
  text-align: right;
  cursor: pointer;
  margin: 0 40px;
`

export default props => {
  return (
    <AppFooter>
      <div style={{ marginLeft: "10px" }}>© Copyright 2020 myRide</div>
      <div style={{ flexGrow: 1 }} />
      <AppFooterItem onClick={() => navigate("/contact")}>
        Contact Us
      </AppFooterItem>
      <AppFooterItem onClick={() => navigate("/support")}>
        Support
      </AppFooterItem>
    </AppFooter>
  )
}
