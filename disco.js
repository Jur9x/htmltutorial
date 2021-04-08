var number = 0;

function disco() {
    if (number == 0){
    document.getElementById('button').classList.add('disco');
    document.getElementById('main').classList.add('disco');
    document.getElementById('button').classList.remove('discono');
    document.getElementById('main').classList.remove('discono');
    return number = 1;
    }
    if (number == 1){
        document.getElementById('button').classList.add('discono');
        document.getElementById('button').classList.remove('disco');
        document.getElementById('main').classList.add('discono');
        document.getElementById('main').classList.remove('disco');
        return number = 0;
    }   
}