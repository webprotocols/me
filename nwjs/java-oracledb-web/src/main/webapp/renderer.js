// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var java = require('java');
var oracledb = require('oracledb');
console.dir(java);
console.dir(oracledb);

/*
 * java
 */
var System = java.import('java.lang.System');
System.out.println("#######################");
System.out.println("java 연동 성공");
System.out.println("#######################");
System.out.flush();

/*
 * oracledb
 */
var dbConfig = require('./dbconfig_orcl.js');

oracledb.getConnection(
        {
            user: dbConfig.user,
            password: dbConfig.password,
            connectString: dbConfig.connectString
        },
        function (err, connection) {
            if (err) {
                console.error(err.message);
                return;
            }
            connection.execute(
                "select * from emp",
                [],
                function (err, result) {
                    if (err) {
                        console.error(err.message);
                        doRelease(connection);
                        return;
                    }
                    console.log(result.metaData);
                    console.log(result.rows);
                    doRelease(connection);
                });
        });

function doRelease(connection) {
    connection.release(function (err) {
            if (err) {
                console.error(err.message);
            }
    });
}