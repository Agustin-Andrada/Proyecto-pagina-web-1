const track = document.querySelector(".carousel-track");

const total = track.children.length;

let index = 0;

function mover(){

    index++;

    track.style.transition = "transform .8s ease";
    track.style.transform = `translateX(-${index*100}%)`;

    if(index === total-1){

        setTimeout(()=>{

            track.style.transition = "none";
            index = 0;
            track.style.transform = "translateX(0)";

        },800);

    }

}

setInterval(mover,4000);