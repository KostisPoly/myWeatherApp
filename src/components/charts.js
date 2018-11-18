import React from 'react';
import {LineChart, Line, CartesianGrid, AreaChart, Area} from 'recharts';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import LabelList from 'recharts/lib/component/LabelList';

 export function TempChart(props) {
    return <div>
        <LineChart width={600} height={200} data={props.data}>
          <Line type="monotone" dataKey="temp" stroke="#8884d8" >
                <LabelList dataKey="temp" position="top" />
          </Line>
          <CartesianGrid stroke="#ccc" strokeDasharray="2 2" />
          <XAxis dataKey="time" />
          <YAxis />
        </LineChart>
      </div>;
}
export function HumidChart(props) {
    return <div>
        <AreaChart width={600} height={200} data={props.data}>
            <Area type="monotone" dataKey="humid" stroke="#8884d8" >
                <LabelList dataKey="humid"  position="top" />
            </Area>
            <CartesianGrid stroke="#ccc" strokeDasharray="2 2" />
            <XAxis dataKey="time" />
            <YAxis />
        </AreaChart>
    </div>;
}
