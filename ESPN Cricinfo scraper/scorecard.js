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

    console.log(venue);
    console.log(date);
    console.log(result);

    console.log('....................................');

    let innings = $('.card.content-block.match-scorecard-table>.Collapsible')
    //console.log(innings);
    let htmlString = ''

    for (let i = 0; i < innings.length; i++) {
        htmlString += $(innings[i]).html()

        let teamName = $(innings[i]).find('h5').text()


        teamName = teamName.split('INNINGS')[0].trim()
        //    teamName = teamName.split('INNINGS')
        //    teamName = teamName[0]
        let opponentIndex = i == 0 ? 1 : 0;
        let opponentName = $(innings[opponentIndex]).find('h5').text()
        opponentName = opponentName.split('INNINGS')[0].trim()

        //console.log(teamName, "->", opponentName)

        let currInning = $(innings[i]);
        
    }
    //console.log(htmlString)

}



