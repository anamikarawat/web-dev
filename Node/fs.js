// File System Module


// ****files****//

const fs = require('fs')


// //1. we will be reading ,writing ,updating and deleting files

//read file
  let content = fs.readFileSync("f1.txt")
 console.log("this is F1 data -> "+ content)


 //Writing to a file
//writeFileSync
// // if the file name that is passed doesnt not exists the a new file will be created with its
// //name and the data will be written on that file

 fs.writeFileSync('f2.txt', 'This data will be written on F2')
 console.log('Data written')

 fs.writeFileSync('f3.txt' , 'This data will be written on F3')
console.log('Data written')


// // append a file - to update a file

// // appnedFileSync method adds new data to a previosuly written file

 fs.appendFileSync('f2.txt' , ' This is new data')


// // delete a file

// // unlinkSync

fs.unlinkSync('f2.txt')
console.log('F2 Deleted')

//*****Directories*****//

// creating a directory

// mkdirSync method is used to create a new Directory or folder

 fs.mkdirSync('myDirectory')
console.log('Directory Created')


//delete a directory
//rmdirsync

fs.rmdirSync('myDirectory')
console.log('Directory Removed')

//To check whether a directory exists or not
//existsSync


//this return true or false based on whether the passed directory exists or not

let doesExist = fs.existsSync('myDirectory')
console.log(doesExist)

let doesExist = fs.existsSync('f1.txt')
 console.log(doesExist)

let statsOfDirectory = fs.lstatSync('myDirectory')
 console.log(statsOfDirectory)

console.log('isFile?' , statsOfDirectory.isFile())

console.log('isDirectory?' , statsOfDirectory.isDirectory())

//readDirectorSync
// readdirSync

// readdirSync is a method which is used to check content inside a directory

let folderpath = 'C:\\Users\\hp\\Desktop\\WEB DEV\\Node\\myDirectory'  //copy path of folder & make double slash between the path
let foldercontent = fs.readdirSync(folderpath)
console.log("Directory Content   "+ foldercontent)