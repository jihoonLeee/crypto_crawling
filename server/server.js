var express = require("express");
var app = express();
const cron = require("node-cron");
const upbitCrawler = require("../crawlers/upbitCrawler");
const bithumbCrawler = require("../crawlers/bithumbCrawling");
const tistoryCrawler = require("../crawlers/tistoryCrawler");
const mediumCrawler = require("../crawlers/mediumCrawler");
const ethereumCrawler = require("../crawlers/ethereumCrawler");


app.get('/crawler/upbit', async (req, res) => {
    const crawling = await upbitCrawler();
    res.send(crawling);
});

app.get('/crawler/bitumb', (req, res) => {
    bithumbCrawler.bithumb();
    res.send('bithumb');
  });

// cron.schedule("10 * * * * *",async function(req, res){
//     console.log("cron실행");
//     const crawling = await upbitCrawler();
//     res.send(crawling);
//     console.log("cron끝");
// });

app.get('/crawler/eth', async (req, res) => {
    const crawling = await ethereumCrawler();
    res.send(crawling);
});

app.get('/crawler/medium', async (req, res) => {
    const crawling = await mediumCrawler();
    res.send(crawling);
});

app.get('/crawler/tistory', async (req, res) => {
    const crawling = await tistoryCrawler();
    res.send(crawling);
});

var server = app.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s",host,port);
});