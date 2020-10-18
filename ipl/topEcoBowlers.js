function topEcoBowlers(deliveries,yr) {
    const year = {'2008':[60,117],'2009':[118,174],'2010':[175,234],'2011':[235,307],'2012':[308,381],'2013':[382,457],'2014':[458,517],'2015':[518,576],'2016':[578,636],'2017':[1,59],'2018':[7894,7953],'2019':[11137,11415]};
    const result = {};
    const count = {};
    const economy = {};
    const start = year[yr][0];
    const end = year[yr][1];
    for (let bowl of deliveries) {
      const season = bowl.bowler;
      const match_id = Number(bowl.match_id);
      const run = bowl.total_runs;
      if (match_id>=start && match_id<=end){
        if(result[season]) {
        result[season] += Number(run);
        count[season] += 1;
        } else {
        result[season] = Number(run);
        count[season] = 1;
        }
      }
    }
    for (const property in result) {
      //console.log(`${property}: ${object[property]}`);
      const run = result[property];
      const ball = count[property];
      economy[property] = run/(ball/6)
    }

    return economy;
  }
  module.exports = topEcoBowlers;
  