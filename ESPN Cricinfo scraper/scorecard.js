

//team name, venue,date,result
const url = 'https://www.espncricinfo.com//series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard'


const request = require('request')
const cheerio = require('cheerio')


request(url, cb)

function cb(error, response, html) {
    if (error) {
        console.error(error)
    }
    else {
        extractData(html);
        // console.log(html)
    }
}

function extractData(html) {
    let $ = cheerio.load(html)

    let descString = $('.header-info .description')
    let descStringArr = descString.text().split(',')


    // console.log(descStringArr)
    let venue = descStringArr[1].trim()
    let date = descStringArr[2].trim()
    //trim method is used to remove white/wide spaces
    let result = $('.match-info.match-info-MATCH.match-info-MATCH-half-width .status-text span').text()

    console.log(venue)
    console.log(date)
    console.log(result)
}