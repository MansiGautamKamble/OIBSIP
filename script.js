let celsius = document.getElementById('celsius');
let fahrenhelt = document.getElementById('fahrenhelt');
celsius.oninput = () => {
    let output = (parseFloat(celsius.value) *9) /5+32;
    fahrenhelt.value = parseFloat(output.toFixed(2));
};
fahrenhelt.oninput = () => {
    let output = (parseFloat( fahrenhelt.value)-32 ) *5/9;
    celsius.value = parseFloat(output.toFixed(2));
};