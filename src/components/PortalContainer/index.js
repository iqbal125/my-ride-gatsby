import React from "react"

import JobProvisioningContainer from "./jobProvisioning/JobProvisioningContainer"
import CityContainer from "./city/CityContainer"
import SignContainer from "./sign/SignContainer"

export default props => {
  let WhichPortal
  console.log("PortalContainer: props:", props)
  switch (props.portal) {
    case "city":
      WhichPortal = CityContainer
      break
    case "sign":
      WhichPortal = SignContainer
      break

    case "jobprovisioning":
      WhichPortal = JobProvisioningContainer
      break
    default:
      return <h1>Page does not exist yet!</h1>
  }
  return (
    <div style={{ display: "flex" }}>
      <WhichPortal />
    </div>
  )
}
