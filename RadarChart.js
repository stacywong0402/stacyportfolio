AmCharts.ready(function() {
    var chart = AmCharts.makeChart( "chartdiv", {
        "type": "radar",
        "theme": "light",
        "dataProvider": [ {
            "languages": "Java",
            "scale": 50
        }, {
            "languages": "HTML",
            "scale": 60
        }, {
            "languages": "CSS",
            "scale": 50
        }, {
            "languages": "JavaScript",
            "scale": 40
        }, {
            "languages": "MySQL",
            "scale": 40
        }, {
            "languages": "C#",
            "scale": 30
        } ],
        "valueAxes": [ {
            "axisTitleOffset": 20,
            "minimum": 0,
            "maximum": 100,
            "axisAlpha": 0.15
        } ],
        "startDuration": 2,
        "graphs": [ {
            "balloonText": "[[value]] on a scale of 100",
            "bullet": "round",
            "valueField": "scale"
        } ],
        "categoryField": "languages",
        "export": {
            "enabled": true
        }
    } );
});

