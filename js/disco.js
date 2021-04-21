var number = 0;

function disco() {
    if (number == 0){
    /*document.getElementById('button').classList.add('discobck');*/
    document.getElementById('main').classList.add('discobck');
    document.getElementById('disco1').classList.add('discoclr');
    document.getElementById('disco2').classList.add('discoclr');
    document.getElementById('disco3').classList.add('discoclr');
    document.getElementById('disco4').classList.add('discoclr');
    document.getElementById('disco5').classList.add('discoclr');
    document.getElementById('disco6').classList.add('discoclr');
    return number = 1;
    }
    if (number == 1){
        /*document.getElementById('button').classList.remove('discobck');*/
        document.getElementById('main').classList.remove('discobck');
        document.getElementById('disco1').classList.remove('discoclr');
        document.getElementById('disco2').classList.remove('discoclr');
        document.getElementById('disco3').classList.remove('discoclr');
        document.getElementById('disco4').classList.remove('discoclr');
        document.getElementById('disco5').classList.remove('discoclr');
        document.getElementById('disco6').classList.remove('discoclr');
        return number = 0;
    }   
}