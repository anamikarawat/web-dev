const url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595'

const request = require("request");
const cheerio = require("cheerio");

const fs = require('fs')

const path = require('path')

const allMatchObj = require("./allMatch");


let iplPath = path.join(__dirname , "IPL")


function dirCreator(filePath){
  if(fs.existsSync(filePath)==false){
    fs.mkdirSync(filePath)
  }
}

//console.log(__dirname) // parent direcorty Path

dirCreator(iplPath)

request(url, cb)

function cb(error, response, html) {
    if (error) {
        console.error(error)
    }
    else {
        extractLink(html);
        // console.log(html)
    }
}
//view all results link- ek anchor tag h which have href hoga usmea site ka link
function extractLink(html) {
    let $ = cheerio.load(html)
    //half link
    let anchorElem = $('a[data-hover="View All Results"]')
    let link = anchorElem.attr('href')
    //attr - attributes
    //console.log(link)

    //full link- concatination
    let fullLink = "https://www.espncricinfo.com/" + link;
    console.log(fullLink);

    allMatchObj.getAllMatch(fullLink);
}
//score table for one particular match - in scorecard.js
