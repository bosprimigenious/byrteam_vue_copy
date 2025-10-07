const fs = require('fs');

const SOURCE = 'C:/project/北邮人团队.html';
const OUT = 'C:/project/byrteam-vue/products-snippet.html';

function main() {
  const html = fs.readFileSync(SOURCE, 'utf8');
  const key = '我们的产品';
  let start = html.indexOf(key);
  if (start < 0) {
    console.log('NOT_FOUND');
    return;
  }
  let end = html.indexOf('</section>', start);
  if (end < 0) end = start + 20000;
  const snippet = html.slice(start, Math.min(html.length, end + 10));
  fs.writeFileSync(OUT, snippet, 'utf8');
  console.log('OK');
}

main();


