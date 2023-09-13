const puppeteer = require('puppeteer');

const ethereumCrawler = async () => {
    const browser = await puppeteer.launch({  
        headless: false, 
        args: ['--ignore-certificate-errors', '--allow-insecure-localhost']  });
    const page = await browser.newPage();
    await page.goto(`https://blog.ethereum.org/`, {waitUntil: 'networkidle2'});
    console.log(`OK`);
    await page.click("main div a");
    await page.waitForTimeout(2000);
    //영어로 전환
    let counter = 1; 
    let paging =1;
    let nextBtnStat;
    while(true){
        const title = await page.$eval(`main div div:nth-of-type(${counter}) div div:nth-of-type(2) div:nth-of-type(1) a`, data => data.textContent);
        const link = await page.$eval(`main div div:nth-of-type(${counter}) div div:nth-of-type(2) div:nth-of-type(1) a`, data => data.href);
        const total_count = await page.$eval(`main div`, data => data.childElementCount);
        // console.log("현재:" + counter," 총:" +total_count ," "+paging+"페이지 ",title, " 링크"+link);
        const reg_date = link.split("/")[3]+"/"+link.split("/")[4]+"/"+link.split("/")[5];
        await page.click(`main div div:nth-of-type(${counter}) div div:nth-of-type(2) div:nth-of-type(1) a`);
        await page.waitForTimeout(2000);
        const contents = await page.$eval(`main article`, data => data.textContent);
        await page.goBack();
        await page.waitForTimeout(2000);
        
        if(counter===total_count){
            nextBtnStat = await page.$eval(`main div:nth-of-type(2) a:nth-of-type(2)`, data =>  {
                return window.getComputedStyle(data).display;
                });
            if(nextBtnStat==="none") break;
            paging++;
            counter = 1;
            // 다음 페이지로 넘어가기
            page.click(`main div:nth-of-type(2) a:nth-of-type(2)`);
            await page.waitForTimeout(2000);
        }else{
            counter++;
        }
      
    }
    console.log("끝");
    await browser.close();
};

module.exports = ethereumCrawler;
