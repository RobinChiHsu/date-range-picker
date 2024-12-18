import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import tw from "twin.macro";
import DateRangePicker from "./pages/DateRangePicker";
import DateRangePicker2 from "./pages/DateRangePicker2";

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-row
    justify-evenly
  `}
`;

const Divider = styled.div`
  ${tw`
    items-center
    flex
  `}
`;

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <AppContainer>
      <DateRangePicker />

      <Divider>{"<"}Task 1</Divider>
      <Divider>Task 2{">"}</Divider>
      <DateRangePicker2 />
    </AppContainer>
  );
}

export default App;
