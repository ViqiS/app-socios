import React from "react";

const AssociateContext = React.createContext();

function AssociateProvider({children}) {
  return (
    <AssociateContext.Provider value={
      {

      }
    }>
      {children}
    </AssociateContext.Provider>
  )
}


export { AssociateContext, AssociateProvider };