document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("oblicz");
    if (!btn) return;
    btn.addEventListener("click", fucntion () {
        const waga=parseFloat(document.getElementById("waga")value);
        const wzrost=parseFloat(document.getElementById("wzrost")value);
        const wynik=document.getElementById("wynik");
    if (!waga || !wzrost) {
        wynik.style.color = "red";
        wynik.textContent ="Wprowadż poprawne dane!";
        return;
    }
    if (wzrost === 0) {
        wynik.style.color = "pink";
        wynik.textContent = "Ty glupiasie ^_o!";
        return;
    }
    const bmi = waga / Math.pow (wzrost / 100, 2);
    if (bmi < 18.5) {
        wynik.style.color ="blue";
        wynik.textContent ="Klasyfikacja: Niedowaga";

    } else if (bmi < 24.9) {
        wynik.style.color = "green";
        wynik.textContent= "Klasyfikacja: Waga Prawidlowa";

    }else if (bmi < 24.9) {
        wynik.style.color = "orange";
        wynik.textContent= "Klasyfikacja: Nadwaga";
        
    } else  {
        wynik.style.color = "red";
        wynik.textContent= "Klasyfikacja: Otylość";
        
    
}
    });
});
