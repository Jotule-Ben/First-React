import React from "react";
import FormFunc from "./assignment/assignment2/form";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [modalShow, setModalShow] = React.useState(true);

  return (
    <>
      <FormFunc show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default App;
