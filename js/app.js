var initial = document.querySelector("#c7");
initial.style.backgroundColor = "#ff1304";
document.onkeydown = keyListener();

function keyListener(event) {
    if (event.keyCode == 37) { /**left*/
        moveBox();
    }
    if (event.keyCode == 38) { /**top*/
        moveBox();
    }
    if (event.keyCode == 39) { /**rigth*/
        moveBox();
    }
    if (event.keyCode == 40) { /**bottom*/
        moveBox();
    }
}