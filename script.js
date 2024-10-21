function calculate(){
    var name = document.getElementById('name').value;
    var currentAge = parseInt(document.getElementById('currentAge').value);
    var maxAge = parseInt(document.getElementById('maxAge').value);
    var snackRate = parseInt(document.getElementById('snackRate').value);
    var calculate = document.getElementById('calculate');

    calculate.innerHTML = `${(maxAge-currentAge)*365*snackRate} ${name} needed to last ${(maxAge-currentAge)} years.`
}

function refresh(){
    document.getElementById('name').value=null;
    document.getElementById('currentAge').value=null;
    document.getElementById('maxAge').value=null;
    document.getElementById('snackRate').value=null;
    document.getElementById('calculate').innerHTML=null;
    // document.refresh;
}