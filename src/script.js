//
//
// const matcher = (request, response) => {
//     //const domFile = require('../public/dom.js');
//     const matchSorter = require('match-sorter');
//     const jsDom = require('jsdom');
//     const { JSDOM } = jsDom;
//     const listJson = require('../places.json');
//     const cities = listJson.map(x => {
//             if(x.city !== null){
//                 return x.city;
//             }
//         });
//         // const dom = new JSDOM(`<!DOCTYPE html><p>Hello World</p>`)
//         // JSDOM.fromFile("../public/index.html", options).then(dom => {
//         //   console.log(dom.getElementById('paragraph').textContent);
//         // })
//     console.log(matchSorter(cities, 'london'));
//     //console.log(dom.window.document.querySelector('i').textContent);
// }
//
// module.exports = matcher;
