const puppeteer = require('puppeteer');

const mediumCrawler = async () => {
    const blogName ="@payprotocol";   // 조회할 블로그 아이디
    
    const browser = await puppeteer.launch({  
        headless: false, 
        args: ['--ignore-certificate-errors', '--allow-insecure-localhost']  });
    const page = await browser.newPage();
    await page.goto(`https://medium.com/${blogName}`, {waitUntil: 'networkidle2'});
    console.log(`OK`);

    var counter = 1;
    let previousHeight = await page.evaluate("document.body.scrollHeight");

    async function scrollWithCounter() {
      await page.evaluate(() => {
          window.scrollBy(0, document.body.scrollHeight);
      });
      await page.waitForTimeout(4000);
      let afterHeight = await page.evaluate("document.body.scrollHeight");
     
      console.log(previousHeight,afterHeight);
      return afterHeight;
    }
    const linkData = [] ;
    while(true){
      let newHeight;
      const title = await page.$eval(`main article:nth-of-type(${counter}) h2`, data => data.textContent);
      const links = await page.$eval(`main article:nth-of-type(${counter}) div div div div div:nth-of-type(2) .ab .l a`, data => data.href);
    
      console.log("현재 : "+counter ,title);
      let medium_id = links.split("?")[0].split("-");
      medium_id = medium_id[medium_id.length-1];   // 최신거 체크

      var medium = {
        id : medium_id,
        link : links
      }
     
      linkData.push(medium);
      
      counter++;
      if(counter%10 === 0){
        await page.waitForTimeout(1000);
        newHeight = await scrollWithCounter();
        if (newHeight === previousHeight) {
          console.log("끝");
          break;
        }
        previousHeight = newHeight;
      }
    }
  
    for (const element of linkData) {
      console.log(element.id, " 고고");

      await page.goto(element.link);
      await page.waitForTimeout(3000);
      const contents = await page.$eval(`section div div:nth-of-type(2) div div`, (data) => data.textContent);
      console.log(contents);
    }
    await browser.close();
};

module.exports = mediumCrawler;
