## About

Simple module to retireve a site's RSS link if one is declared. I.e.: `<link rel="alternate" type="application/rss+xml" title="RSS" href="rss">`

## Usage

`npm install load-rss-link`

```javascript
var loadRssLink = requre('load-rss-link');

loadRssLink('https://news.ycombinator.com', function(err, rssLink) {
    if( err ){ return console.log(err); }
    if( rssLink === null ){
        console.log('No rss link found.');
    } else {
        console.log(rssLink);
    }
});
```