
AmCharts.makeChart("chartdiv",
	{
		"type": "pie",
		"pathToImages": "http://cdn.amcharts.com/lib/3/images/",
		"balloonText": "[[title]]<br><spafontn style='font-size:14px'><b>[[value]] USD</b></span>",
		"innerRadius": "42%",
		"labelRadiusField": "Not set",
		"minRadius": 4,
		"pieX": "50%",
		"pieY": "50%",
		"radius": "40%",
		"baseColor": "#FFE879",
		"brightnessStep": 255,
		"colorField": "Not set",
		"descriptionField": "category",
		"gradientRatio": [],
		"labelTickAlpha": 0,
		"labelTickColor": "#F1F1F1",
		"marginBottom": 0,
		"marginTop": 0,
		"maxLabelWidth": 52,
		"outlineAlpha": 0,
		"outlineColor": "#F1F1F1",
		"outlineThickness": 0,
		"startDuration": 0.5,
		"titleField": "category",
		"valueField": "column-1",
		"visibleInLegendField": "category",
		"backgroundAlpha": 0.92,
		"backgroundColor": "#F1F1F1",
		"borderColor": "#F1F1F1",
		"classNamePrefix": "graph",
		"color": "#F1F1F1",
		"fontFamily": "'Quicksand', sans-serif",
		"fontSize": 10,
		"handDrawn": true,
		"theme": "dark",
		"allLabels": [
			{
				"align": "center",
				"bold": true,
				"color": "#693CFF",
				"id": "title",
				"size": 15,
				"text": "+ USD 500",
				"x": "0%",
				"y": "47%"
			}
		],
		"balloon": {},
		"legend": {
			"align": "center",
			"backgroundColor": "#F1F1F1",
			"borderColor": "#F1F1F1",
			"bottom": 0,
			"color": "#877CB0",
			"fontSize": 12,
			"marginLeft": 19,
			"maxColumns": 0,
			"periodValueText": "",
			"reversedOrder": true,
			"rollOverColor": "#12073B",
			"switchable": false,
			"switchColor": "#F1F1F1",
			"textClickEnabled": true,
			"valueText": "USD [[value]]",
			"valueWidth": 69
		},
		"titles": [],
		"dataProvider": [
			{
				"category": "Withdrawals",
				"column-1": "500"
			},
			{
				"category": "Deposits",
				"column-1": "1000"
			}
		]
	}
);