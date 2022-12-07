import React from "react";
import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProgressIndicatorContainer } from "./features/ProgressIndicator/ProgressIndicatorContainer";
import { GlobalStyle } from "./GlobalStyle";
import { Surface } from "./features/Surface/Surface";
import { FormContainer } from "./features/FormContainer/FormContainer";

function App() {

  //   fetch('https://vast-basin-98801.herokuapp.com/register/',{
  //     method:"POST",
  //     body:JSON.stringify(
  //         {
  //             name: "NAME",
  //             email: "EMAIL",
  //             password: "PASSWORD",
  //             shop_token: "SHOP",
  //             google_token: "GOOGLE",
  //         }
  //     ),
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     },
  // })
  //     .then(res=>res.json())
  //     .then(json=>console.log(json))


  //     fetch('https://jsonplaceholder.typicode.com/posts', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         title: 'foo',
  //         body: 'bar',
  //         userId: 1,
  //         ggg: 332,
  //       }),
  //       headers: {
  //         'Content-type': 'application/json; charset=UTF-8',
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((json) => console.log(json));

  return (
    <div className="App">
      <GlobalStyle/>
      <Box component="div" sx={{width: "100%", minHeight: "100%", background: "#FFFFFF", position: "relative"}}>
        <Surface/>
        <ProgressIndicatorContainer/>
        <FormContainer/>
      </Box>
      {/* <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="*" element={<></>} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
};

export default App;
