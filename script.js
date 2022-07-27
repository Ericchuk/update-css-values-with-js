let input = document.querySelectorAll("input");
let imgContainer = document.querySelector(".imgContainer");
let img = document.querySelector(".grass");

for(let i = 0; i < input.length; i++){
    function update(){
        // console.log(this.value);
        img.style.padding = `${input[0].value}px`;
        img.style.backgroundColor = `${input[2].value}`;
        img.style.filter = `blur(${input[1].value}px)`;
    }

    input[i].addEventListener("change", update);
};