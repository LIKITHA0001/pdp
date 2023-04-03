import React, { useState, useCallback } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export function onClickHighlight(){
   const state = {
        opacity: {
          uv: 1,
          pv: 1,
        },
      };
    
      const handleMouseEnter = (o) => {
        const { dataKey } = o;
        const { opacity } = this.state;
    
        this.setState({
          opacity: { ...opacity, [dataKey]: 0.5 },
        });
      };
    
      const handleMouseLeave = (o) => {
        const { dataKey } = o;
        const { opacity } = this.state;
    
        this.setState({
          opacity: { ...opacity, [dataKey]: 1 },
        });
      };
    }
export default onClickHighlight;