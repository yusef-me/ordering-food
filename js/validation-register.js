let Alert = document.getElementById("Alert");
let Button = document.getElementById("Button");


Button.addEventListener('click', show_alert);
Button.addEventListener('click', hide_alert);

function show_alert(e) {
     e.preventDefault();
    setTimeout(() => {
        Alert.style.display = 'block';
    }, 10)
}

function hide_alert(e) {
     e.preventDefault();
    setTimeout(() => {
        Alert.style.display = 'none';
    }, 5000)
}
