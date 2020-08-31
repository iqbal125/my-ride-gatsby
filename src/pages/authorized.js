import React from "react"

const Authorized = props => {
  console.log("Authorized: Rendering...")
  return (
    <div style={{ marginLeft: "250px", marginTop: "100px" }}>
      <h2>Authorized Status</h2>
      <p>
        {" "}
        {/*You are {auth.isAuthenticated ? "authenticated" : "not authenticated"}*/}
      </p>
      <p>Now you may select a portal from the Portal drop-down.</p>
    </div>
  )
}

export default Authorized
