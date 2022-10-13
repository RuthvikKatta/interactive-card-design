function NameInp(){
    var name = document.getElementById('Name').value;
    document.getElementById('CardName').innerHTML = name; 
}
function NumInp(){
    var num = document.getElementById('Number').value;
    document.getElementById('CardNum').innerHTML = num;
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
    document.getElementById('CardExp').innerHTML = m+'/'+y;
}
function validCV (){
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
    document.getElementById('Cvv').innerHTML = c;
}

document.querySelector('.conf').addEventListener('click',function(){
    console.log('hi');
    document.querySelector('.details').classList.add('active');
    document.querySelector('.succ').classList.add('active');
})