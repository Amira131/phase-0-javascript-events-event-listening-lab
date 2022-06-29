function addingEventListener() {
    const input= document.getElementById('input');
    //input.addEventListener('click', clickAlert);
    // input.addEventListener('click', function(event){
    //     alert('I was clicked!');
    // } )
    input.addEventListener('click', () => alert("dog") )
}
function clickAlert() {
    alert('I was clicked!');
    console.log("sup")
}
addingEventListener();