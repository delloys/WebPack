let numTimesClicked = 0;
function win() {
    alert('супер класс победа!');
    reset();
}
function reset() {
    numTimesClicked = 0;
}
function click() {
    numTimesClicked++;
    console.log(`Вы жмякнули кнопку`);
    if (numTimesClicked === 20) win();
}
export default click;