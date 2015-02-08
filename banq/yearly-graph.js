
AmCharts.makeChart("chartdiv",
	{
		"type": "serial",
		"pathToImages": "http://cdn.amcharts.com/lib/3/images/",
		"categoryField": "date",
		"dataDateFormat": "YYYY",
		"theme": "patterns",
		"categoryAxis": {
			"minPeriod": "YYYY",
			"parseDates": true
		},
		"chartCursor": {
			"animationDuration": 0,
			"categoryBalloonDateFormat": "YYYY"
		},
		"chartScrollbar": {},
		"trendLines": [],
		"graphs": [
			{
				"bullet": "round",
				"id": "AmGraph-1",
				"title": "graph 1",
				"valueField": "column-1"
			},
			{
				"bullet": "square",
				"id": "AmGraph-2",
				"title": "graph 2",
				"valueField": "column-2"
			}
		],
		"guides": [],
		"valueAxes": [
			{
				"id": "ValueAxis-1",
				"title": "Axis title"
			}
		],
		"allLabels": [],
		"balloon": {},
		"legend": {
			"useGraphSettings": true
		},
		"titles": [
			{
				"id": "Title-1",
				"size": 15,
				"text": "Chart Title"
			}
		],
		"dataProvider": [
			{
				"date": "2012",
				"column-1": 8,
				"column-2": 5
			},
			{
				"date": "2013",
				"column-1": 6,
				"column-2": 7
			},
			{
				"date": "2014",
				"column-1": 2,
				"column-2": 3
			},
			{
				"date": "2015",
				"column-1": 4,
				"column-2": 3
			},
			{
				"date": "2016",
				"column-1": 2,
				"column-2": 1
			},
			{
				"date": "2017",
				"column-1": 3,
				"column-2": 2
			},
			{
				"date": "2018",
				"column-1": 4,
				"column-2": 8
			}
		]
	}
);

