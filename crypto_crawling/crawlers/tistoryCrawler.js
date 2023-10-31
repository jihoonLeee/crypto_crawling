const fetch = require('node-fetch');
const xml2js = require("xml2js");

const access_token = "20047a2555eb917bfa0b8dea45020d24_735e3047d1c1e6a74ac52b1a1c637c0b";
const contents_list_url =`https://www.tistory.com/apis/post/list?access_token=${access_token}&output=json&blogName=jihoon2723&page=1`;
const contents_url=`https://www.tistory.com/apis/post/read?access_token=${access_token}&blogName=coin-one&postId=20`;

const tistoryCrawler = async () => {
    const url = contents_url;
    await request(url);

    async function request(url) {
        try {
          const response = await fetch(url);
          
          if (response.headers.get("Content-Type").includes("text/xml;")) {
            const text = await response.text();
            const parser = new xml2js.Parser();
            const data = await parser.parseStringPromise(text);
            console.log(data.tistory.item[0].title,data.tistory.item[0].content);
          } else if (response.headers.get("Content-Type").includes("application/json")) {
            const data = await response.json();
            console.log(data);
          } else {
            throw new Error("Unexpected content type");
          }
        } catch (error) {
          console.error("Error :", error);
        }
      }
};

module.exports = tistoryCrawler;