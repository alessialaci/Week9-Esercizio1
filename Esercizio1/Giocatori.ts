var numeroCasuale: number = Math.round(Math.random() * (100 - 1) + 1);
var giocatore1: number = Math.round(Math.random() * (100 - 1) + 1);
var giocatore2: number = Math.round(Math.random() * (100 - 1) + 1);

console.log('Il numero estratto è ' + numeroCasuale);
console.log('Il numero del giocatore 1 è ' + giocatore1);
console.log('Il numero del giocatore 2 è ' + giocatore2);

if(giocatore1 == numeroCasuale) {
    console.log('Ha vinto il giocatore 1!')
} else if(giocatore2 == numeroCasuale) {
    console.log('Ha vinto il giocatore 2!')
} else if(giocatore1 == giocatore2) {
    console.log('Entrambi avete dato lo stesso numero, riprovate!')
} else if ((numeroCasuale - giocatore1) > (numeroCasuale - giocatore2)) {
    console.log('Nessuno dei due giocatori ha indovinato il numero, ma il giocatore 1 si è avvicinato di più!')
} else if ((numeroCasuale - giocatore1) < (numeroCasuale - giocatore2)) {
    console.log('Nessuno dei due giocatori ha indovinato il numero, ma il giocatore 2 si è avvicinato di più!')
}