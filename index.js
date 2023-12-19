window.onload = () => {
    document.querySelector('#button').addEventListener("click", () => {
        document.querySelector('#excuse').innerHTML = generateExcuse(); 
    });
};
let generateExcuse = () => {
    let pronoun = ['A','The'];
    let subject = [ 'jogger', 'raccoon','dog','driver','comedian','pincone'];
    let action = ['took my','threw my','yelled at my', 'stole my', 'bit my'];
    let thing = ['homework','toe','car','shoe'];
    let where = ['on the street','in my house','in my driveway'];

    let proIndx = Math.floor(Math.random() * pronoun.length);
    let subjIndx = Math.floor(Math.random() * subject.length);
    let actionIndx = Math.floor(Math.random() * action.length);
    let thingIndx = Math.floor(Math.random() * thing.length);
    let whereIndx = Math.floor(Math.random() * where.length);
    return pronoun[proIndx]+''+subject[subjIndx]+''+action[actionIndx]+''+thing[thingIndx]+''+where[whereIndx]




}
