const https = require('https');
const fs = require('fs');

https.get('https://en.wikipedia.org/wiki/List_of_Indian_Premier_League_players', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Regex to match Wikipedia table rows with player links
    const matches = [...data.matchAll(/<tr>\s*<td[^>]*><a href="\/wiki\/[^"]*"[^>]*>([^<]+)<\/a><\/td>/g)];
    const names = matches.map(m => m[1]);
    
    // De-duplicate and clean
    const uniqueNames = [...new Set(names)].filter(n => n && n.length > 2);
    
    fs.mkdirSync('scratch', { recursive: true });
    fs.writeFileSync('scratch/ipl_players.json', JSON.stringify(uniqueNames, null, 2));
    console.log(`Extracted ${uniqueNames.length} unique players`);
  });
});
