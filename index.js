var cheerio = require('cheerio');
var request = require('request');
var url = require('url');

/**
    Required:
        options.url
    Callback: function(err, feedUrl/null)
*/
module.exports = function(options, callbackIn){
    var callback = callbackIn ? callbackIn : function(){};
    var feedUrl = options.url ? options.url : '';

    request(feedUrl, function(err, response, body) {
        if( err ){ return callback(err, null); }
        if( !response || response.statusCode != 200  ){
            return callback(null, null);
        }

        var $ = cheerio.load(body);
        var rssEl = $( "link[type='application/rss+xml']" );
        if( !rssEl || rssEl.length === 0 ){ return callback(null, null); }

        var href = rssEl.attr('href');

        if( !href ){ return callback(null, null); }

        // resolve relative URLs
        if( href.indexOf('http') === -1 ){
            var urlObj = url.parse(options.url);
            var site = urlObj.protocol + '//' + urlObj.host;
            href = url.resolve(site, href);
        } 
        callback(null, href);
    })
}