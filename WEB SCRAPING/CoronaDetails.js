//https://www.worldometers.info/coronavirus/
const request = require('request')
const cheerio = require('cheerio')

console.log('Before')


request('https://www.worldometers.info/coronavirus/', cb)

function cb(error, response, html) {
    if (error) {
        console.error(error)
    } else {
        //console.log('body' , body)
        handleHtml(html);
    }
}


function handleHtml(html) {
    let selTool = cheerio.load(html)
    // //console.log(selTool);
    let contentArr = selTool('.maincounter-number span')
    ////console.log(contentArr);

    // for (let i = 0; i<contentArr.length; i++) {
    //     let data = selTool(contentArr[i]).text()
    //     console.log(data)
    // }
    let totalcases = selTool(contentArr[0]).text()
    console.log('Total cases:' + totalcases)

    let totalDeaths = selTool(contentArr[1]).text()
    console.log('Total Deaths:' + totalDeaths)

    let totalRecoveries = selTool(contentArr[2]).text()
    console.log('Total Recovered:' + totalRecoveries)
}
console.log('after')

