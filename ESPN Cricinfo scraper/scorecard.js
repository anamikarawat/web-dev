//team name, venue,date,result
//const url = 'https://www.espncricinfo.com//series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard'

//for only one match/ one score card
const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')
const path = require('path')

const xlsx = require('xlsx')

function processScoreCrad(url) {
    request(url, cb);
}

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

    //let innings = $('.card.content-block.match-scorecard-table>.Collapsible').html()
    //console.log(innings);

    let innings = $('.card.content-block.match-scorecard-table>.Collapsible')          //statistics table of both the teams

    let htmlString = ''
    //we have 2 forms-> text and html form

    for (let i = 0; i < innings.length; i++) {
        htmlString += $(innings[i]).html()

        let teamName = $(innings[i]).find('h5').text()  //innings.html
        //find function from cheerio to find the element

        teamName = teamName.split('INNINGS')[0].trim()//split for-> removing only team names
        //    teamName = teamName.split('INNINGS')
        //    teamName = teamName[0]
        //console.log(teamName)

        let opponentIndex = i == 0 ? 1 : 0;//ternary operator, team name->i==0 for 1st team ya 1 hoga & 1 for 2nd team

        let opponentName = $(innings[opponentIndex]).find('h5').text()
        opponentName = opponentName.split('INNINGS')[0].trim()

        console.log(teamName, "->", opponentName)

        let currInning = $(innings[i]);//current inning-1st team

        let allRows = currInning.find('.table.batsman tbody tr')


        for (let j = 0; j < allRows.length; j++) {
            let allCols = $(allRows[j]).find('td')
            let isWorthy = $(allCols[0]).hasClass('batsman-cell')// to select only runs and name of the player not the comentery

            if (isWorthy == true) {
                let playerName = $(allCols[0]).text().trim()
                //this $ sign is for cheerio
                let runs = $(allCols[2]).text().trim()
                let balls = $(allCols[3]).text().trim()
                let fours = $(allCols[5]).text().trim()
                let sixes = $(allCols[6]).text().trim()
                let STR = $(allCols[7]).text().trim()

                console.log(`${playerName} | ${runs} |${balls} | ${fours} | ${sixes} | ${STR}`
                );
                //template literal-> ${ } , do not need cancatination plus sign
                processPlayer(
                    teamName,
                    opponentName,
                    playerName,
                    runs,
                    balls,
                    fours,
                    sixes,
                    STR,
                    venue,
                    date,
                    result
                );
            }

        }

        console.log("````````````````````````````````````````````````````````")

    }
    //console.log(htmlString)

}

function processPlayer(
    teamName,
    opponentName,
    playerName,
    runs,
    balls,
    fours,
    sixes,
    STR,
    venue,
    date,
    result
) {
    let teamPath = path.join(__dirname, "IPL", teamName);
    dirCreator(teamPath);


    let filePath = path.join(teamPath, playerName + ".xlsx");

    let content = excelReader(filePath, playerName);//[] empty array ajaega


    let playerObj = {
        // "teamName" : teamName,
        //  "playerName" : playerName,

        // essea bhi bhej sakte or vese bhi

        playerName,
        teamName,
        opponentName,
        runs,
        balls,
        fours,
        sixes,
        STR,
        venue,
        date,
        result,
    };

    content.push(playerObj)

    excelWriter(filePath, playerName, content)
}



function dirCreator(folderPath) {
    if (fs.existsSync(folderPath) == false) {
        fs.mkdirSync(folderPath);
    }
}

function excelWriter(fileName, sheetName, jsonData) {
    let newWB = xlsx.utils.book_new();
    // Creating a new WorkBook
    let newWS = xlsx.utils.json_to_sheet(jsonData);
    // Json is converted to sheet format (rows and cols)
    xlsx.utils.book_append_sheet(newWB, newWS, sheetName);
    xlsx.writeFile(newWB, fileName);
}

function excelReader(fileName, sheetName) {
    if (fs.existsSync(fileName) == false) {//agar file exist nhi karti toh mea ek empty array return kardunga
        return [];
    }
    let wb = xlsx.readFile(fileName);

    let excelData = wb.Sheets[sheetName];
    let ans = xlsx.utils.sheet_to_json(excelData);
    return ans
}

module.exports = {
    ps: processScoreCrad
}