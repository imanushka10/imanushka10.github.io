var x =0;
var textEffect = "I'm Anushka and I love web Development!!"
var container = document.getElementById('effect')
var pic = document.getElementById('image1')

function animate(){
    if(x < textEffect.length){
        container.innerHTML += textEffect.charAt(x)
        x++;
        setTimeout(animate, 100)
    }
}
animate()

