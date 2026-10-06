const assert = require('node:assert/strict');
const { JSDOM } = require('jsdom');
const html = require('../lib/calculators/subsidy-html.json');
let payload;
let ok = false;
const dom = new JSDOM(html.replace('__FORMSPREE_ID__','test'), {
  url: 'https://aikonic.cz/dotace-na-skoleni', runScripts: 'dangerously',
  beforeParse(w) {
    w.ResizeObserver = class { observe() {} };
    w.HTMLElement.prototype.scrollIntoView = () => {};
    w.fetch = async (_, request) => { payload=request.body; return { ok }; };
  }
});
const w=dom.window,d=w.document;
const amount=id=>Number(d.getElementById(id).textContent.replace(/[^\d-]/g,''));
function input(id,value){const e=d.getElementById(id);e.value=value;e.dispatchEvent(new w.Event('input'));}
async function main(){
 assert.equal(amount('total'),358643);
 assert.equal(amount('companyBalance'),16605);
 input('hpp',16); input('ico',4);d.getElementById('autoFill').click();
 assert.equal(d.querySelectorAll('.editGroup').length,2);
 assert.equal(amount('trainingPrice'),598000);
 assert.equal(amount('total'),Math.round(20*50*260.73+16*50*217.46));
 d.querySelector('[data-h="80"]').click();
 assert.equal(amount('trainingPrice'),958000);
 assert.equal(amount('total'),Math.round(20*80*260.73+16*80*217.46));
 d.getElementById('clearGroups').click();
 assert.match(d.getElementById('allocStatus').textContent,/20/);
 d.getElementById('autoFill').click();
 const f=d.getElementById('quoteForm');
 f.elements.name.value='Test';f.elements.company.value='Test s.r.o.';f.elements.email.value='test@example.com';
 f.dispatchEvent(new w.Event('submit',{cancelable:true}));
 await new Promise(r=>setImmediate(r));
 assert.match(d.getElementById('quoteStatus').textContent,/nezdařilo/);
 assert.equal(f.elements.email.value,'test@example.com');
 assert.deepEqual(JSON.parse(payload.get('calculation')).groups,[{hpp:15,ico:0},{hpp:1,ico:4}]);
 ok=true;f.dispatchEvent(new w.Event('submit',{cancelable:true}));
 await new Promise(r=>setImmediate(r));
 assert.match(f.textContent,/Děkujeme/);
 input('hpp',0);input('ico',0);
 assert.equal(amount('total'),0);assert.equal(amount('trainingPrice'),0);
 console.log('PASS: supplied rates, 50/80 h, mixed HPP/ICO, 15-person groups, zero totals, form payload, failure retention, success (network mocked).');
 dom.window.close();
}
main().catch(e=>{console.error(e);dom.window.close();process.exitCode=1;});
