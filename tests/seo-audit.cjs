const assert=require('node:assert/strict');
const {JSDOM}=require('jsdom');
const base=process.env.TEST_ORIGIN||'http://localhost:3104';
(async()=>{
 const sitemap=await fetch(base+'/sitemap.xml').then(r=>r.text());
 const urls=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);
 assert.ok(urls.includes('https://aikonic.cz/ai-skoleni-pro-firmy'));
 assert.equal(new Set(urls).size,urls.length);
 const rows=[],seenTitles=new Set(),seenDescriptions=new Set(),docs=new Map();
 for(const url of urls){
  const path=new URL(url).pathname;assert.ok(!new URL(url).search);
  const response=await fetch(base+path);assert.equal(response.status,200,path);
  const d=new JSDOM(await response.text()).window.document;docs.set(path,d);
  assert.equal(d.querySelectorAll('h1').length,1,`${path}: one H1`);
  const canonical=d.querySelector('link[rel="canonical"]')?.href;
  assert.equal(canonical,new URL(path,'https://aikonic.cz').href,path);
  const title=d.title,description=d.querySelector('meta[name="description"]')?.content;
  assert.ok(title&&description,path);assert.ok(!seenTitles.has(title),`duplicate title ${path}`);assert.ok(!seenDescriptions.has(description),`duplicate description ${path}`);seenTitles.add(title);seenDescriptions.add(description);
  assert.ok(d.querySelector('meta[property="og:title"]'),path);
  for(const script of d.querySelectorAll('script[type="application/ld+json"]'))JSON.parse(script.textContent);
  for(const img of d.querySelectorAll('img'))assert.ok(img.hasAttribute('alt'),`${path}: missing alt`);
  assert.ok(!/(60\s?000|115\s?000|350\s?000|550\s?000)\s*Kč|Kč\s+s DPH/.test(d.body.textContent),`${path}: stale price`);
  rows.push({path,title,canonical,h1:d.querySelector('h1').textContent});
 }
 const broken=[];
 for(const [path,d] of docs){for(const a of d.querySelectorAll('a[href]')){
  const raw=a.getAttribute('href');if(!raw.startsWith('/')&&!raw.startsWith('#'))continue;
  const u=new URL(raw,'https://aikonic.cz'+path);const target=docs.get(u.pathname);
  if(!target)continue;
  if(u.hash&&!target.getElementById(decodeURIComponent(u.hash.slice(1))))broken.push(`${path} -> ${raw}`);
 }}
 assert.deepEqual(broken,[],'broken anchors');
 const parameter=await fetch(base+'/?interest=AI%20%C5%A1kolen%C3%AD').then(r=>r.text());
 assert.equal(new JSDOM(parameter).window.document.querySelector('link[rel="canonical"]').href,'https://aikonic.cz/');
 const missing=await fetch(base+'/audit-nonexistent-page-404');assert.equal(missing.status,404);
 require('node:fs').writeFileSync('/tmp/aikonic-seo-check.json',JSON.stringify(rows,null,2));
 console.log(`PASS: ${urls.length} canonical URLs, unique titles/descriptions, one H1, JSON-LD syntax, alt attributes, current prices, internal anchors, query canonical and 404.`);
})().catch(e=>{console.error(e);process.exitCode=1});
