const loginLink = "https://www.hackerrank.com/auth/login";
let email = "dohabi3468@votooe.com";
let password = "pepcoding123";
let puppeteer = require("puppeteer");
const codeFile = require("./code");

console.log("Before");

(async function () {
  try {
    let browserWillbeLaunced = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      args: ["--start-maximized"],
    });

    let newTab = await browserWillbeLaunced.newPage();

    await newTab.goto(loginLink);

    await newTab.type("input[id='input-1']", email, {
      delay: 100,
    });

    await newTab.type("input[id='input-2']", password, {
      delay: 100,
    });

    await newTab.click('button[data-analytics="LoginPassword"]', {
      delay: 100,
    });
  } catch (error) {}
})();