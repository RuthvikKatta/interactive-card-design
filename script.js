function NameInp(){
    var name = document.getElementById('Name').value;
    if (name ==''){
        document.getElementById('CardName').innerHTML = 'CARD HOLDER NAME';
        return; 
    }
    document.getElementById('CardName').innerHTML = name; 
}

/*Card number*/
function NumInp(){
    var num = document.getElementById('Number');
    if(num.value == ''){
        document.getElementById('CardNum').innerHTML = '0000 0000 0000 0000';
        return;
    }
    var regex = /^[0-9\s]*$/;
    if (regex.test(num.value)){
        document.getElementById('CardNum').innerHTML = format(num.value);
    }
    if(num.value.length==16){
        num.value = format(num.value);
    }
}

function format(s) {
    return s.toString().replace(/\d{4}(?=.)/g, '$& ');
}

function ValidNum(){
    var v = document.getElementById('Number').value;
    var regex = /^[0-9\s]*$/;
    if(regex.test(v)){
        document.querySelector('.Number').classList.remove('error');
        document.querySelector('.format').classList.remove('error');
    }
    else{
        document.querySelector('.Number').classList.add('error');
        document.querySelector('.format').classList.add('error');
    }
}
function ValidM(){
    var m = document.getElementById('mm').value;
    if(m == ''){
        document.querySelector('.exp').classList.add('empty');
        document.querySelector('.my').classList.add('error');
    }
    else{
        document.querySelector('.exp').classList.remove('empty');
        document.querySelector('.my').classList.remove('error');
    }
}
function ValidY(){
    var y = document.getElementById('yy').value;
    if(y == ''){
        document.querySelector('.exp').classList.add('empty');
        document.querySelector('.my').classList.add('error');
    }
    else{
        document.querySelector('.exp').classList.remove('empty');
        document.querySelector('.my').classList.remove('error');
    }
}
function MYInp(){
    var m = document.getElementById('mm').value;
    var y = document.getElementById('yy').value;
    if (m ==''||y==''){
        document.getElementById('CardExp').innerHTML = '00/00';
        return;
    }
    document.getElementById('CardExp').innerHTML = m+'/'+y;
}
function validCV(){
    var c = document.getElementById('cvc').value;
    if(c==''){
        document.querySelector('.cvv').classList.add('empty');
        document.querySelector('.c').classList.add('error');
    } 
    else{
        document.querySelector('.cvv').classList.remove('empty');
        document.querySelector('.c').classList.remove('error');
    }
}
function CVVInp(){
    var c = document.getElementById('cvc').value;
    if (c==''){
        document.getElementById('Cvv').innerHTML = '000';
        return;
    }
    document.getElementById('Cvv').innerHTML = c;
}

document.querySelector('.conf').addEventListener('click',function(){ 
    var name = document.getElementById('Name').value;
    var num = document.getElementById('Number').value;
    var m = document.getElementById('mm').value;
    var y = document.getElementById('yy').value;
    var c = document.getElementById('cvc').value;
    if(name != '' && num != '' && m != '' && y != '' && c != ''){
        document.querySelector('.details').classList.add('active');
        document.querySelector('.succ').classList.add('active');
    }
})
