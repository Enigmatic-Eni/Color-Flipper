const color = document.getElementById('color');
const button = document.getElementById('btn');
const colors = ['green', 'red', 'rgba(133, 122, 200)', 'yellow', 'blueviolet','#fff', '#f15025'];

button.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}