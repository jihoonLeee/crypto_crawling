const tistoryCrawler = require('../crawlers/tistoryCrawler');
const ethereumCrawler = require('../crawlers/ethereumCrawler');
const mediumCrawler = require('../crawlers/mediumCrawler');
const upbitCrawler = require('../crawlers/upbitCrawler');
const crawlers = require('../models/crawlers');

const crawlerController = {
    tistory: async(req,res) => {
        await tistoryCrawler(crawlers);
        res.send("tistory");
    },
    ethereum: async(req,res) => {
        await ethereumCrawler(crawlers);
        res.send("ethereum");
    },
    medium: async(req,res) => {
        await mediumCrawler(crawlers);
        res.send("medium");
    },
    upbit : async(req,res) => {
        await upbitCrawler(crawlers);
        res.send("upbit");
    }
}

module.exports = crawlerController;