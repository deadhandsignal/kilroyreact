
import React from 'react';
import ReactDOM from 'react-dom';
import { ResponsiveHeatMap } from "nivo";


/*let fatFries = (this.props.kebab > 5) ? "True, muchos kebabos" : "False, slim";
/*<h1> {this.props.name}</h1>
<p> {this.props.burgerColor}</p>
  <p> {fatFries}</p>

This is a test chart I did - I said I'd leave it purely due this being an assesment
would not do this normally */

class Charter extends React.Component {


  render() {

    return (

      <div style={{ height: 400 }}>
        <ResponsiveHeatMap
          data={[
          {
            country: "AD",
            "hot dog": 35,
            "hot dogColor": "hsl(68, 70%, 50%)",
            burger: 1,
            burgerColor: "hsl(81, 70%, 50%)",
            sandwich: 88,
            sandwichColor: "hsl(79, 70%, 50%)",
            kebab: 37,
            kebabColor: "hsl(135, 70%, 50%)",
            fries: 61,
            friesColor: "hsl(359, 70%, 50%)",
            donut: 72,
            donutColor: "hsl(26, 70%, 50%)",
            junk: 70,
            junkColor: "hsl(342, 70%, 50%)",
            sushi: 7,
            sushiColor: "hsl(157, 70%, 50%)",
            ramen: 19,
            ramenColor: "hsl(70, 70%, 50%)",
            curry: 93,
            curryColor: "hsl(42, 70%, 50%)",
            udon: 16,
            udonColor: "hsl(221, 70%, 50%)"
          },
          {
            country: "AE",
            "hot dog": 9,
            "hot dogColor": "hsl(295, 70%, 50%)",
            burger: 63,
            burgerColor: "hsl(360, 70%, 50%)",
            sandwich: 31,
            sandwichColor: "hsl(202, 70%, 50%)",
            kebab: 65,
            kebabColor: "hsl(208, 70%, 50%)",
            fries: 34,
            friesColor: "hsl(6, 70%, 50%)",
            donut: 28,
            donutColor: "hsl(262, 70%, 50%)",
            junk: 20,
            junkColor: "hsl(152, 70%, 50%)",
            sushi: 40,
            sushiColor: "hsl(54, 70%, 50%)",
            ramen: 66,
            ramenColor: "hsl(92, 70%, 50%)",
            curry: 43,
            curryColor: "hsl(174, 70%, 50%)",
            udon: 2,
            udonColor: "hsl(277, 70%, 50%)"
          },
          {
            country: "AF",
            "hot dog": 95,
            "hot dogColor": "hsl(102, 70%, 50%)",
            burger: 24,
            burgerColor: "hsl(215, 70%, 50%)",
            sandwich: 3,
            sandwichColor: "hsl(183, 70%, 50%)",
            kebab: 45,
            kebabColor: "hsl(299, 70%, 50%)",
            fries: 33,
            friesColor: "hsl(244, 70%, 50%)",
            donut: 14,
            donutColor: "hsl(230, 70%, 50%)",
            junk: 11,
            junkColor: "hsl(63, 70%, 50%)",
            sushi: 86,
            sushiColor: "hsl(44, 70%, 50%)",
            ramen: 91,
            ramenColor: "hsl(5, 70%, 50%)",
            curry: 9,
            curryColor: "hsl(350, 70%, 50%)",
            udon: 66,
            udonColor: "hsl(331, 70%, 50%)"
          },
          {
            country: "AG",
            "hot dog": 14,
            "hot dogColor": "hsl(311, 70%, 50%)",
            burger: 65,
            burgerColor: "hsl(124, 70%, 50%)",
            sandwich: 11,
            sandwichColor: "hsl(72, 70%, 50%)",
            kebab: 43,
            kebabColor: "hsl(268, 70%, 50%)",
            fries: 61,
            friesColor: "hsl(346, 70%, 50%)",
            donut: 30,
            donutColor: "hsl(218, 70%, 50%)",
            junk: 18,
            junkColor: "hsl(352, 70%, 50%)",
            sushi: 26,
            sushiColor: "hsl(190, 70%, 50%)",
            ramen: 44,
            ramenColor: "hsl(327, 70%, 50%)",
            curry: 2,
            curryColor: "hsl(138, 70%, 50%)",
            udon: 98,
            udonColor: "hsl(279, 70%, 50%)"
          },
          {
            country: "AI",
            "hot dog": 74,
            "hot dogColor": "hsl(92, 70%, 50%)",
            burger: 55,
            burgerColor: "hsl(147, 70%, 50%)",
            sandwich: 45,
            sandwichColor: "hsl(81, 70%, 50%)",
            kebab: 73,
            kebabColor: "hsl(253, 70%, 50%)",
            fries: 45,
            friesColor: "hsl(220, 70%, 50%)",
            donut: 80,
            donutColor: "hsl(239, 70%, 50%)",
            junk: 4,
            junkColor: "hsl(208, 70%, 50%)",
            sushi: 0,
            sushiColor: "hsl(66, 70%, 50%)",
            ramen: 61,
            ramenColor: "hsl(71, 70%, 50%)",
            curry: 51,
            curryColor: "hsl(297, 70%, 50%)",
            udon: 60,
            udonColor: "hsl(44, 70%, 50%)"
          },
          {
            country: "AL",
            "hot dog": 47,
            "hot dogColor": "hsl(279, 70%, 50%)",
            burger: 96,
            burgerColor: "hsl(204, 70%, 50%)",
            sandwich: 21,
            sandwichColor: "hsl(348, 70%, 50%)",
            kebab: 100,
            kebabColor: "hsl(268, 70%, 50%)",
            fries: 96,
            friesColor: "hsl(259, 70%, 50%)",
            donut: 9,
            donutColor: "hsl(91, 70%, 50%)",
            junk: 34,
            junkColor: "hsl(340, 70%, 50%)",
            sushi: 65,
            sushiColor: "hsl(137, 70%, 50%)",
            ramen: 40,
            ramenColor: "hsl(19, 70%, 50%)",
            curry: 34,
            curryColor: "hsl(216, 70%, 50%)",
            udon: 85,
            udonColor: "hsl(240, 70%, 50%)"
          },
          {
            country: "AM",
            "hot dog": 57,
            "hot dogColor": "hsl(55, 70%, 50%)",
            burger: 87,
            burgerColor: "hsl(191, 70%, 50%)",
            sandwich: 72,
            sandwichColor: "hsl(90, 70%, 50%)",
            kebab: 89,
            kebabColor: "hsl(18, 70%, 50%)",
            fries: 74,
            friesColor: "hsl(294, 70%, 50%)",
            donut: 38,
            donutColor: "hsl(244, 70%, 50%)",
            junk: 20,
            junkColor: "hsl(131, 70%, 50%)",
            sushi: 59,
            sushiColor: "hsl(259, 70%, 50%)",
            ramen: 6,
            ramenColor: "hsl(227, 70%, 50%)",
            curry: 14,
            curryColor: "hsl(313, 70%, 50%)",
            udon: 100,
            udonColor: "hsl(70, 70%, 50%)"
          },
          {
            country: "AO",
            "hot dog": 58,
            "hot dogColor": "hsl(30, 70%, 50%)",
            burger: 11,
            burgerColor: "hsl(132, 70%, 50%)",
            sandwich: 54,
            sandwichColor: "hsl(125, 70%, 50%)",
            kebab: 92,
            kebabColor: "hsl(111, 70%, 50%)",
            fries: 13,
            friesColor: "hsl(40, 70%, 50%)",
            donut: 14,
            donutColor: "hsl(202, 70%, 50%)",
            junk: 1,
            junkColor: "hsl(140, 70%, 50%)",
            sushi: 33,
            sushiColor: "hsl(337, 70%, 50%)",
            ramen: 28,
            ramenColor: "hsl(323, 70%, 50%)",
            curry: 24,
            curryColor: "hsl(353, 70%, 50%)",
            udon: 39,
            udonColor: "hsl(309, 70%, 50%)"
          },
          {
            country: "AQ",
            "hot dog": 22,
            "hot dogColor": "hsl(337, 70%, 50%)",
            burger: 61,
            burgerColor: "hsl(244, 70%, 50%)",
            sandwich: 81,
            sandwichColor: "hsl(66, 70%, 50%)",
            kebab: 26,
            kebabColor: "hsl(113, 70%, 50%)",
            fries: 48,
            friesColor: "hsl(13, 70%, 50%)",
            donut: 19,
            donutColor: "hsl(248, 70%, 50%)",
            junk: 51,
            junkColor: "hsl(297, 70%, 50%)",
            sushi: 76,
            sushiColor: "hsl(325, 70%, 50%)",
            ramen: 13,
            ramenColor: "hsl(139, 70%, 50%)",
            curry: 88,
            curryColor: "hsl(189, 70%, 50%)",
            udon: 68,
            udonColor: "hsl(344, 70%, 50%)"
          }
        ]}
          keys={[
            "hot dog",
            "burger",
            "sandwich",
            "kebab",
            "fries",
            "donut",
            "junk",
            "sushi",
            "ramen",
            "curry",
            "udon"
          ]}
          indexBy="country"
          margin={{
            top: 100,
            right: 60,
            bottom: 60,
            left: 60
          }}
          forceSquare={true}
          axisTop={{
            orient: "top",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: -90,
            legend: "",
            legendOffset: 36
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "country",
            legendPosition: "center",
            legendOffset: -40
          }}
          cellOpacity={1}
          cellBorderColor="inherit:darker(0.4)"
          labelTextColor="inherit:darker(1.8)"
          defs={[
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(0, 0, 0, 0.1)",
              rotation: -45,
              lineWidth: 4,
              spacing: 7
            }
          ]}
          fill={[
            {
              id: "lines"
            }
          ]}
          animate={true}
          motionStiffness={80}
          motionDamping={9}
          hoverTarget="cell"
          cellHoverOthersOpacity={0.25}
        />

    </div>



    )
  }
}


export default Charter;
