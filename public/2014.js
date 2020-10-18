
function fetchAndVisualizeData2014() {
    fetch("./data_2014.json")
      .then(r => r.json())
      .then(visualizeData);
  }
  
  
  
  function visualizeData(data) {
    visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
    return;
  }
  
  function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
    const seriesData = [];
    var count = 0;
        for (let year in matchesPlayedPerYear) {
            if(count<10)  {
            seriesData.push([year, matchesPlayedPerYear[year]]);}
            count = count + 1;
          }
      
    
  
    Highcharts.chart("matches-played-per-year", {
      chart: {
        type: "column"
      },
      title: {
        text: ""
      },
      subtitle: {
        text:
          'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
        type: "category"
      },
      yAxis: {
        min: 0,
        title: {
          text: "Matches"
        }
      },
      series: [
        {
          name: "Bowlers",
          data: seriesData
        }
      ]
    });
  }
  