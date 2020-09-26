let p1 = document.getElementById("tekst");

let b1 = document.getElementById('dodaj');

let b2 = document.getElementById('usun');

b1.onclick = function () {
    p1.textContent = 'Dowolny tekst';
}

b2.onclick = function () {
    p1.textContent = '';
}