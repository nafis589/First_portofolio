var h, min, s, ms, sp, btn_start, btn_stop, t;
window.onload = function() {
    sp = document.getElementsByTagName('span');
    h = 0, min = 0,  s = 0, ms = 0;
    btn_start = document.getElementById('btn_start');
    btn_stop = document.getElementById('btn_stop');
};
function topchrono(){
    ms+=1;
    if (ms == 10){
        ms = 0;
        s +=1;
    }
    if (s == 60){
        s = 0;
        min += 1;
    }
    if (min == 60){
        min = 0;
        h += 1;
    }
    sp[0].innerHTML = h + "h" + ':';
    sp[1].innerHTML = min + "min" + ':';
    sp[2].innerHTML = s + "s" + ':';
    sp[3].innerHTML = ms + "ms";
}
function start(){
    t = setInterval(topchrono, 100);
    btn_start.disabled = true;

}
function stop(){
    clearInterval(t);
    btn_start.disabled = false;
}
function reset(){
    h = 0;
    min = 0;
    s = 0;
    ms = 0;
    clearInterval(t);
    btn_start.disabled = false;
    sp[0].innerHTML = h + "h" + ':';
    sp[1].innerHTML = min + "min" + ':';
    sp[2].innerHTML = s + "s" + ':';
    sp[3].innerHTML = ms + "ms";
}
