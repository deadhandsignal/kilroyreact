
import React from 'react';
import { ResponsiveLine } from "nivo";

/* I left behind some of my testing and debugging code considering I'm being assessed
I obviously would not normally do this :)

let fatFries = (this.props.kebab > 5) ? "True, muchos kebabos" : "False, slim";
/*<h1> {this.props.name}</h1>
<p> {this.props.burgerColor}</p>
  <p> {fatFries}</p>  */


  const myJson = require('../utils/data/homelessFamilies.json');
    console.log(myJson);


class HomelessFamilyChart extends React.Component {




  render() {


    return (

      <div  style={{ height: 480}}>
{<h4><i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Number of Families Experiencing Homelessness in Ireland</i></h4>}


        <ResponsiveLine


         height={525}
         width={510}
       data={myJson}
       margin={{
           "top": 10,
           "right": 10,
           "bottom": 90,
           "left": 20
       }}


       minY="auto"
       maxY={2000}
       stacked={false}
       axisBottom={{
           "orient": "bottom",
           "tickSize": 5,
           "tickPadding": 5,
           "tickRotation": 0,
           "legendOffset": 36,
           "legendPosition": "center",
           "tickValues": ["Jul '14",  "Jan '15", "Jul '15", "Jan '16", "Jul '16", "Jan '17","Jul '17","Jan '18"]
       }}

       axisLeft={{
           "orient": "left",
           "tickSize": 5,
           "tickPadding": 5,
           "tickRotation": 0,
           "legend": "",
           "legendOffset": -28,
           "legendPosition": "center"


       }}
       colors="set3"
       lineWidth={3}

       dotSize={10}
       dotColor="inherit:darker(0)"
       dotBorderWidth={2}
       dotBorderColor="#ffffff"
       enableDotLabel={false}
       dotLabel="y"
       dotLabelYOffset={-12}
       areaOpacity={0.25}
       animate={true}
       motionStiffness={30}
       motionDamping={40}

       legends={[
           {
               "anchor": "bottom-right",
               "direction": "column",
               "translateX": 100,
               "itemWidth": 75,
               "itemHeight": 20,
               "symbolSize": 12,
               "symbolShape": "circle"
           }
       ]}
   />

    </div>



    )
  }
}


export default HomelessFamilyChart;
