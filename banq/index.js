AmCharts.makeChart("chartdiv",
	{
		"type": "pie",
		"pathToImages": "http://cdn.amcharts.com/lib/3/images/",
		"balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]] USD</b></span>",
		"innerRadius": "40%",
		"labelRadiusField": "Not set",
		"minRadius": 4,
		"pieX": "50%",
		"pieY": "50%",
		"radius": "40%",
		"baseColor": "#9400D3",
		"brightnessStep": 255,
		"colorField": "Not set",
		"descriptionField": "category",
		"hoverAlpha": 0.86,
		"labelTickAlpha": 0,
		"labelTickColor": "#F1F1F1",
		"marginBottom": 0,
		"marginTop": 0,
		"maxLabelWidth": 50,
		"outlineAlpha": 0,
		"outlineColor": "#F1F1F1",
		"outlineThickness": 0,
		"pullOutEffect": "elastic",
		"startDuration": 0,
		"startEffect": "easeOutSine",
		"titleField": "category",
		"valueField": "column-1",
		"visibleInLegendField": "category",
		"backgroundAlpha": 0.92,
		"backgroundColor": "#F1F1F1",
		"borderColor": "#F1F1F1",
		"classNamePrefix": "graph",
		"color": "#F1F1F1",
		"fontFamily": "Arial",
		"fontSize": 10,
		"handDrawn": true,
		"theme": "dark",
		"allLabels": [
			{
				"align": "center",
				"color": "#261758",
				"id": "title",
				"size": 11,
				"text": "+ USD 500",
				"x": "0%",
				"y": "45%"
			}
		],
		"balloon": {},
		"legend": {
			"align": "center",
			"backgroundColor": "#F1F1F1",
			"borderColor": "#F1F1F1",
			"bottom": 0,
			"color": "#877CB0",
			"fontSize": 14,
			"marginLeft": 19,
			"maxColumns": 0,
			"periodValueText": "",
			"reversedOrder": true,
			"rollOverColor": "#12073B",
			"switchable": false,
			"switchColor": "#F1F1F1",
			"textClickEnabled": true,
			"valueAlign": "left",
			"valueText": "[[value]] USD"
		},
		"titles": [],
		"dataProvider": [
			{
				"category": "Deposits",
				"column-1": "1000"
			},
			{
				"category": "Withdrawals",
				"column-1": "500"
			}
		]
	}
);


$(document).ready(function(){
	$("h2").click(function(){
		$("h2").hide();
		$("#login-form").show();
	})
})
