const AWS = require('aws-sdk');

let s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    region: 'us-east-1'
});

// let params = {
//     Body: "Hello world!",
//     Bucket: "spore-bucket",
//     Key: "images/thumbnail/hello-world.txt"
// }

// s3.putObject(params, (err, data) => {
//     if(err) console.log(err, err.stack);
//     else console.log(data);
// });

module.exports = s3;