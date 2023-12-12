x = 0
function lalala(){
    const color = ['#FA9189','#FCAE7C','#FFE699','#B3F5BC','#D6F6FF','#D1BDFF'];
    if (x == color.length){
        x = 0
    }
    document.body.style.backgroundColor = color[x];
    x = x + 1;
}

console.log('Hi :D!')