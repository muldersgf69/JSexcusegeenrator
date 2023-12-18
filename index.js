window.onload = () => {
    document.querySelector('#button').addEventListener("click", () => {
        document.querySelector('#excuse').innerHTML = generateExcuses(); 
    });
};
