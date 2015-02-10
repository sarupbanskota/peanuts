// dashboard pie

AmCharts.makeChart("dashboard",
	{
		"type": "pie",
		"pathToImages": "http://cdn.amcharts.com/lib/3/images/",
		"balloonText": "[[title]]<br><spafontn style='font-size:14px'><b>[[value]] USD</b></span>",
		"innerRadius": "55%",
		"labelRadiusField": "Not set",
		"minRadius": 4,
		"pieX": "50%",
		"pieY": "50%",
		"radius": "40%",
		"baseColor": "#605492",
		"brightnessStep": 50,
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
				"text": "USD 7000",
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
				"category": "Current",
				"column-1": "3000"
			},
			{
				"category": "Savings",
				"column-1": "4000"
			}
		]
	}
);

// feb chart

AmCharts.makeChart("february-overview",
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
				"text": "- USD 4900",
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
				"column-1": "5000"
			},
			{
				"category": "Deposits",
				"column-1": "100"
			}
		]
	}
);

// jan overview

AmCharts.makeChart("january-overview",
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
				"text": "+ USD 7500",
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
				"column-1": "8000"
			}
		]
	}
);

// 2015 overview

AmCharts.makeChart("2015-overview",
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
				"text": "- USD 1000",
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
				"column-1": "1100"
			},
			{
				"category": "Deposits",
				"column-1": "100"
			}
		]
	}
);

// 2014 overview

AmCharts.makeChart("2014-overview",
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
				"text": "+ USD 0",
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
				"column-1": "100"
			},
			{
				"category": "Deposits",
				"column-1": "100"
			}
		]
	}
);

AmCharts.makeChart("predictor",
	{
		"type": "serial",
		"pathToImages": "http://cdn.amcharts.com/lib/3/images/",
		"categoryField": "date",
		"columnSpacing": 0,
		"columnWidth": 0.66,
		"dataDateFormat": "YYYY",
		"maxSelectedSeries": 7,
		"mouseWheelZoomEnabled": true,
		"plotAreaFillAlphas": 1,
		"plotAreaFillColors": "#F1F1F1",
		"zoomOutButtonAlpha": 1,
		"zoomOutButtonColor": "#FFFFFF",
		"zoomOutButtonPadding": 7,
		"startDuration": 1,
		"startEffect": "easeOutSine",
		"backgroundAlpha": 1,
		"backgroundColor": "#F1F1F1",
		"classNamePrefix": "graphs",
		"color": "#12073B",
		"fontFamily": "'Quicksand', sans-serif",
		"fontSize": 12,
		"handDrawn": true,
		"handDrawScatter": 1,
		"hideBalloonTime": 146,
		"categoryAxis": {
			"minPeriod": "YYYY",
			"parseDates": true,
			"startOnAxis": true,
			"axisColor": "#AAB3B3",
			"color": "#AAB3B3",
			"titleColor": "#877CB0",
			"titleFontSize": 12
		},
		"chartCursor": {
			"animationDuration": 0,
			"categoryBalloonDateFormat": "YYYY"
		},
		"chartScrollbar": {
			"backgroundAlpha": 0.21,
			"backgroundColor": "#BBBBBB",
			"color": "#F1F1F1",
			"gridAlpha": 0.64,
			"hideResizeGrips": true
		},
		"trendLines": [],
		"graphs": [
			{
				"bullet": "round",
				"id": "AmGraph-1",
				"title": "Dividend",
				"valueField": "Dividend"
			},
			{
				"bullet": "square",
				"id": "AmGraph-2",
				"title": "Coupon",
				"valueField": "Coupon"
			}
		],
		"guides": [],
		"valueAxes": [
			{
				"id": "ValueAxis-1",
				"title": "Value in USD"
			}
		],
		"allLabels": [],
		"balloon": {},
		"legend": {
			"align": "center",
			"color": "#12073B",
			"fontSize": 12,
			"rollOverColor": "#877CB0",
			"switchable": false,
			"textClickEnabled": true,
			"useGraphSettings": true
		},
		"titles": [
			{
				"id": "Title-1",
				"size": 15,
				"text": "Yearly Overview"
			}
		],
		"dataProvider": [
			{
				"Coupon": 5,
				"Dividend": 8,
				"date": "2012"
			},
			{
				"Coupon": 7,
				"Dividend": 6,
				"date": "2013"
			},
			{
				"Coupon": 3,
				"Dividend": 2,
				"date": "2014"
			},
			{
				"Coupon": 3,
				"Dividend": 4,
				"date": "2015"
			},
			{
				"Coupon": 1,
				"Dividend": 2,
				"date": "2016"
			},
			{
				"Coupon": 2,
				"Dividend": 3,
				"date": "2017"
			},
			{
				"Coupon": 8,
				"Dividend": 4,
				"date": "2018"
			}
		]
	}
);
