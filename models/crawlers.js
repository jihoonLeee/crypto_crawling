const db = require('../dbConn');

const crawlers = {
    getRecentlyNoti : (query) => {
        return new Promise(async (resolve, reject) => {
            const conn = await db.createConn();
            conn.query(query, (error, results, fields) => {
                if (error) reject(error);
                if(results.length===1){
                  resolve(results[0]);
                }else{
                  resolve(results);
                }
              });
        });
    },
    insertNotification : (data,query) => {
        return new Promise(async (resolve, reject) => {
            const conn = await db.createConn();
            conn.query(query, data, (error, results, fields) => {
                if (error) reject(error);
                resolve(results);
              });
        });
    },
}

module.exports = crawlers;