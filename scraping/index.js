var querystring = require('querystring');
var request = require('request');
var fs = require('fs');
var form = {
    in_CUR_CODE: 'INR',
    in_holiday_year: '2018',
    in_output_fmt: 'CSV',
    TadiServer: 'TPASS',
    TadiUrl: "/testdx/curr_hols.call"
};

var formData = querystring.stringify(form);
var contentLength = formData.length;

request({
    headers: {
        'Content-Length': contentLength,
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    uri: 'https://dxtra.markets.reuters.com/dx/dxnrequest.aspx?RequestName=TadiPost',
    body: formData,
    method: 'POST'
}, function(err, res, body) {
    console.log(res.headers.location);
    request({ uri: res.headers.location }).pipe(fs.createWriteStream('temp.csv'));
});