const url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595'

const request = require('request')
const cheerio = require('cheerio')


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
//view all results- ek anchor tag h which have href hoga usmea site ka link
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



    getAllMatchLink(fullLink)
}
//link for score card of all matches
function getAllMatchLink(uri) {
    request(uri, function (error, response, html) {
        if (error) {
            console.error(error)
        }
        else {
            extractAllLink(html);
        }
    })
}

function extractAllLink(html) {
    let $ = cheerio.load(html)

    let scoreCardArr = $('a[data-hover="Scorecard"]')

    for (let i = 0; i < scoreCardArr.length; i++) {
        let link = $(scoreCardArr[i]).attr('href');

        let fullLink = 'https://www.espncricinfo.com/' + link;
        console.log(fullLink);
    }

}