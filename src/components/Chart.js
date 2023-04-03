import React,  { useState, useCallback } from "react";
import { renderCustomizeLengend } from "./New_Legend";
import {handleMouseEnter,handleMouseLeave} from "./Highlight";
import {handleLegendMouseOver} from "./legendPopup";
import {
  ComposedChart,
  Line,
  Bar,
  YAxis,
  XAxis,
  Legend,
  Area,
  Tooltip,
  CartesianGrid,
 
} from 'recharts';
import { Grid,Button } from "@ui5/webcomponents-react";
import MyComponentWithPopover from "./Popup";
const data = [
  {
    "name": "Page A",
    "Volume": 4000,
    "User": 2400,
    "ActiveSession": 2400
  },
  {
    "name": "Page B",
    "Volume": 3000,
    "User": 1398,
    "ActiveSession": 2210
  },
  {
    "name": "Page C",
    "Volume": 2000,
    "User": 9800,
    "ActiveSession": 2290
  },
  {
    "name": "Page D",
    "Volume": 2780,
    "User": 3908,
    "ActiveSession": 2000
  },
  {
    "name": "Page E",
    "Volume": 1890,
    "User": 4800,
    "ActiveSession": 2181
  },
  {
    "name": "Page F",
    "Volume": 2390,
    "User": 3800,
    "ActiveSession": 2500
  },
  {
    "name": "Page G",
    "Volume": 3490,
    "User": 4300,
    "ActiveSession": 2100
  }
];

function Chart(){
  const [opacity, setOpacity] = useState({
    uv: 1,
    pv: 1
  });

  const handleMouseEnter = useCallback(
    (o) => {
      console.log("Mouse Enter");
      const { dataKey } = o;

      setOpacity({ ...opacity, [dataKey]: 0.5 });
    },
    [opacity, setOpacity]
  );

  const handleMouseLeave = useCallback(
    (o) => {
      console.log("Mouse leave");
      const { dataKey } = o;
      setOpacity({ ...opacity, [dataKey]: 1 });
    },
    [opacity, setOpacity]
  );


  return(
    <Grid ><ComposedChart width={850} height={400} data={data}
   >
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
   
    <Legend width={100} wrapperStyle={{ top: 40, right: 20, border: '0px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} verticalAlign="right" content={renderCustomizeLengend}
    onMouseUp={handleMouseEnter}
    onMouseDown={handleMouseLeave}  />
    <CartesianGrid stroke="#f5f5f5" />
    
    <Area  type="monotone" dataKey="ActiveSession" onClick={MyComponentWithPopover} strokeOpacity={opacity.ActiveSession} fill="#8884d8" stroke="#8884d8"/>
    
    <Bar  dataKey="User" barSize={50} fill="#413ea0" onClick={MyComponentWithPopover}/>
    <Line type="monotone" dataKey="Volume" onClick={MyComponentWithPopover} strokeOpacity={opacity.Volume} stroke="#ff7300" />
  </ComposedChart> </Grid>
    
  )
}

                            



export default Chart;