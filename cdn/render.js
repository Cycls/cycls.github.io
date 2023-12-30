function timestamp(){var now=new Date();return now.toLocaleTimeString([],{hour:'numeric',minute:'2-digit'})}

function Bubble(dir,body,y){let x=document.createElement('div');
x.innerHTML = 
`<div class="flex items-start p-1">
    <div class="p-2">
    ${dir === 'req' ?
        '<div class="h-8 w-8 rounded-full bg-gradient-to-r from-pink-300 to-purple-400"></div>' :
        '<div class="h-8 w-8 rounded-full bg-gradient-to-r from-yellow-200 to-orange-400"></div>'}
    </div>
    <div class="p-2 rounded-2xl border border-gray-200 max-w-md">
        ${body}
        <p class="pt-2 text-right text-xs text-gray-400">${dir === 'req' ? '@you ' + timestamp() + ' ' : '@marid ' + timestamp() + ' ✓'}</p>
    </div>
</div>`;
y.appendChild(x)}

function Tree(x) {
switch (x.type) {
case 'text':   return `<span>${x.text}</span>`;
case 'image':  return `<img class="class-image rounded-lg" alt="Image" src="${x.image}" />`;
case 'vstack': return `<div class="flex flex-col justify-center items-center">${x.vstack.map(item => Engine(item)).join('')}</div>`;
case 'hstack': return `<div class="flex flex-row justify-center items-center">${x.hstack.map(item => Engine(item)).join('')}</div>`;
default:       return `<span>sorry, couldn't show</span>`}}

function render(x,y){x.body.forEach((z)=>{Bubble(x.dir,Tree(z),y)})}
function R(x,y){x.forEach((i)=>{render(i,y)})}
