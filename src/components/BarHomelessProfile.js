import React from 'react';
import { ResponsiveBar } from "nivo";




  const myJson = require('../utils/data/HomelessProfile.json'); //(with path)
    console.log(myJson);


    class BarHomelessProfile extends React.Component {

      render() {

        return (

                <div title = "help" style={{ height: 450 }}>
          {<h4><i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The changing profile of those experiencing homelessness</i></h4>}


    <ResponsiveBar
        data={myJson}
        keys={[
            "Adult Male",
            "Adult Female",
            "Children"
        ]}
        indexBy="month"
        margin={{
            "top": 10,
            "right": 10,
            "bottom": 60,
            "left": 60
        }}
        padding={0.3}
        groupMode="grouped"
        colors="nivo"
        colorBy="id"
        defs={[
            {
                "id": "dots",
                "type": "patternDots",
                "background": "inherit",
                "color": "#38bcb2",
                "size": 3,
                "padding": 1,
                "stagger": true
            },
            {
                "id": "lines",
                "type": "patternLines",
                "background": "inherit",
                "color": "#eed312",
                "rotation": -45,
                "lineWidth": 6,
                "spacing": 10
            }
        ]}
        fill={[
            {
                "match": {
                    "id": "Adult Male"
                },
                "id": "dots"
            },
            {
                "match": {
                    "id": "Children"
                },
                "id": "lines"
            }
        ]}
        borderColor="inherit:darker(1.6)"
        axisBottom={{
            "orient": "bottom",
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "",
            "legendPosition": "center",
            "legendOffset": 36
        }}
        axisLeft={{
            "orient": "left",
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "",
            "legendPosition": "center",
            "legendOffset": -40
        }}
        labelSkipWidth={14}
        labelSkipHeight={16}
        labelTextColor="inherit:darker(10)"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        legends={[
            {
                "dataFrom": "keys",
                "anchor": "bottom-right",
                "direction": "column",
                "translateX": 120,
                "itemWidth": 120,
                "itemHeight": 20,
                "itemsSpacing": 2,
                "symbolSize": 40
            }
        ]}  />
        </div>
)


}
}


export default BarHomelessProfile;
