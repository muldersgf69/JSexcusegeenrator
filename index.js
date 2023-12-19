function generateExcuse() {
    var whoList = ['The dog', 'My grandma', 'His turtle', 'My bird'];
    var actionList = ['ate', 'peed', 'crushed', 'broke'];
    var whatList = ['my homework', 'the keys', 'the car'];
    var whenList = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];
  
    function getRandomElement(array) {
      return array[Math.floor(Math.random() * array.length)];
    }
  
    var excuse = getRandomElement(whoList) + ' ' + getRandomElement(actionList) + ' ' + getRandomElement(whatList) + ' ' + getRandomElement(whenList) + '.';
  
    return excuse;
  }
  function updateExcuse() {
    var excuseElement = document.getElementById('excuse');
    excuseElement.textContent = generateExcuse();
  }
  document.getElementById('button').addEventListener('click', updateExcuse);
  window.onload = function () {
    updateExcuse();}