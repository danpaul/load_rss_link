var assert = require('assert');
var URL =  'https://news.ycombinator.com';
var RSS_URL = 'https://news.ycombinator.com/rss';

var loadRssLink = require('./index');

loadRssLink({url: URL}, function(err, link){
    assert(!err, err);
    assert(link === RSS_URL, 'RSS link should be ' + RSS_URL);
    console.log('load-rss-link tests passed');
});