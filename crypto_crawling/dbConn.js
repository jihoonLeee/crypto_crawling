const AWS = require('aws-sdk');
const mysql = require("mysql");

AWS.config.update({
  region: 'ap-northeast-2', // AWS 리전을 설정
});
// ec2올리면 주석 필요 

const dbConn = {
     createConn : async () => {
        const db_host = await getParameter("db_host");
        const db_port = await getParameter("db_port");
        const db_user = await getParameter("db_user");
        const db_passwd = await getParameter("db_passwd");
        return new Promise((resolve, reject) => {
        const conn = mysql.createConnection({
            host : db_host,
            port : db_port,
            user : db_user,
            password : db_passwd,
            database : "practice"
        });
        conn.connect((err) => {
            if (err) {
            reject(err);
            } else {
            resolve(conn);
            }
        });
        });
    }
};

const ssm = new AWS.SSM();

const getParameter = async (parameterName) => {
    const params = {
        Name: parameterName,
        WithDecryption: true
    };
    try {
        const response = await ssm.getParameter(params).promise();
        return response.Parameter.Value;
    } catch (error) {
        console.error("에러", error.message);
    }
  };
module.exports = dbConn;