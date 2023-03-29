import { FlexBox, FlexBoxDirection, ShellBar } from "@ui5/webcomponents-react";
import Chart from "./components/Chart";
import "./App.css";
//import CollapsiblePanel from "./components/Legends";
import { Grid } from "@ui5/webcomponents-react";
import MyComponentWithPopover from "./components/Popup";

function App() {
  return (
    <>
      <ShellBar primaryTitle="UI5 Web Components for React Template" />
      <FlexBox
        style={{ width: "100%", height: "100vh" }}
        direction={FlexBoxDirection.Column}
      >
        <Grid>
        
          <div  data-layout-indent="XL1 L1 M1 S0"
      data-layout-span="XL8 L8 M8 S12"><Chart/></div>
      {/* <div><MyComponentWithPopover/></div> */}
        </Grid>
      </FlexBox>
    </>
  );
}

export default App;
