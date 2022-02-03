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
function extractLink(html){
    let $ = cheerio.load(html)
    let anchorElem = $('a[data-hover="View All Results"]')
}