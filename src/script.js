const matcher = () => {
    const matchSorter = require('match-sorter');
    const listJson = require('../places.json');
    
    const cities = listJson.map(x => {   
            if(x.city !== null){
                return x.city;
            }
        });


    console.log(matchSorter(cities, 'lon'));

}

module.exports = matcher;