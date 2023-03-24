// card input left 
function getInputLeftCard(id) {
    const inputLeft = document.getElementById(id)
    const inputLeftString = inputLeft.value
    const inputLeftInt = parseInt(inputLeftString)
    inputLeft.value = ""
    return inputLeftInt
}
// card input right
function getInputRightCard(id) {
    const inputRight = document.getElementById(id)
    const inputRightString = inputRight.value
    const inputRightInt = parseInt(inputRightString)
    inputRight.value = ""
    return inputRightInt
}
// for input varification 
function verification(input1, input2, leftInput, rightInput, cardName, isFalse) {
    if ((input1 && input2) == "" || (parseInt(input1) && parseInt(input2)) <= 0) {
        alert('input numebr')
    } else {
        cardFunction1(leftInput, rightInput, cardName, isFalse)
    }
}

let serial = 0

// to make sub total in area calculation
function cardFunction1(leftInput, rightInput, cardName, isDifferent) {
    let total = 0
    if (isDifferent == true) {
        const subTotal = leftInput * rightInput
        total = subTotal
    } else {
        const subTotal = 0.5 * leftInput * rightInput
        total = subTotal
    }
    serial += 1
    // target t-body
    const tBody = document.getElementById('tBody')


    const tr = document.createElement("tr")
    tr.innerHTML = `
             <tr>
              <td>${serial}.${cardName}</td>
              <td>${total} cm</td>  
              <td><button id="clcButton">to meter</button></td>
             </tr>
            `
            const bttn = document.getElementById('clcButton')
}

// click handler card 1
document.getElementById('cardButton1').addEventListener('click', function () {
    //for validation
    const input1 = document.getElementById("triangleInputLeft").value
    const input2 = document.getElementById("triangleInputRight").value

    // getting from callback fucntion
    const leftInput = getInputLeftCard("triangleInputLeft")
    const rightInput = getInputRightCard("triangleInputRight")
    const cardName = document.getElementById("cardTriangle").innerText

    verification(input1, input2, leftInput, rightInput, cardName, false)
})

// click handler card 2
document.getElementById('cardButton2').addEventListener('click', function () {
    //for validation
    const input1 = document.getElementById("rectangleInputLeft").value
    const input2 = document.getElementById("rectangleInputRight").value

    // getting from callback fucntion
    const leftInput = getInputLeftCard("rectangleInputLeft")
    const rightInput = getInputRightCard("rectangleInputRight")
    const cardName = document.getElementById("cardRectangle").innerText

    verification(input1, input2, leftInput, rightInput, cardName, true)
})

// click handler card 3
document.getElementById('cardButton3').addEventListener('click', function () {
    //for validation
    const input1 = document.getElementById("parallelogramInputLeft").value
    const input2 = document.getElementById("parallelogramInputRight").value

    // getting from callback fucntion
    const leftInput = getInputLeftCard("parallelogramInputLeft")
    const rightInput = getInputRightCard("parallelogramInputRight")
    const cardName = document.getElementById("cardParallelogram").innerText

    verification(input1, input2, leftInput, rightInput, cardName, false)


})
// click handler card 4
document.getElementById('cardButton4').addEventListener('click', function () {
    //for validation
    const input1 = document.getElementById("rhombusInputLeft").value
    const input2 = document.getElementById("rhombusInputRight").value

    // getting from callback fucntion
    const leftInput = getInputLeftCard("rhombusInputLeft")
    const rightInput = getInputRightCard("rhombusInputRight")
    const cardName = document.getElementById("cardRhambus").innerText

    verification(input1, input2, leftInput, rightInput, cardName, false)
})
// click handler card 5
document.getElementById('cardButton5').addEventListener('click', function () {
    //for validation
    const input1 = document.getElementById("pentagonInputLeft").value
    const input2 = document.getElementById("pentagonInputRight").value

    // getting from callback fucntion
    const leftInput = getInputLeftCard("pentagonInputLeft")
    const rightInput = getInputRightCard("pentagonInputRight")
    const cardName = document.getElementById("cardPentagon").innerText

    verification(input1, input2, leftInput, rightInput, cardName, false)
})
// click handler card 6
document.getElementById('cardButton6').addEventListener('click', function () {

    //for validation
    const input1 = document.getElementById("pentagonInputLeft").value
    const input2 = document.getElementById("pentagonInputRight").value

    // getting from callback fucntion
    const leftInput = getInputLeftCard("ellipseInputLeft")
    const rightInput = getInputRightCard("ellipseInputRight")
    const cardName = document.getElementById("cardEllipse").innerText

    verification(input1, input2, leftInput, rightInput, cardName, true)
})

// set random background color on elememt

// make random color
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
//card-1
const card1 = document.getElementById("card-1");
card1.addEventListener("mouseover", function () {
    card1.style.backgroundColor = getRandomColor();
});
card1.addEventListener("mouseout", function () {
    card1.style.backgroundColor = "";
});

//card-2
const card2 = document.getElementById("card-2");
card2.addEventListener("mouseover", function () {
    card2.style.backgroundColor = getRandomColor();
});
card2.addEventListener("mouseout", function () {
    card2.style.backgroundColor = "";
});

//card-3
const card3 = document.getElementById("card-3");
card3.addEventListener("mouseover", function () {
    card3.style.backgroundColor = getRandomColor();
});
card3.addEventListener("mouseout", function () {
    card3.style.backgroundColor = "";
});
//card-4
const card4 = document.getElementById("card-4");
card4.addEventListener("mouseover", function () {
    card4.style.backgroundColor = getRandomColor();
});
card4.addEventListener("mouseout", function () {
    card4.style.backgroundColor = "";
});

//card-5
const card5 = document.getElementById("card-5");
card5.addEventListener("mouseover", function () {
    card5.style.backgroundColor = getRandomColor();
});
card5.addEventListener("mouseout", function () {
    card5.style.backgroundColor = "";
});
//card-6
const card6 = document.getElementById("card-6");
card6.addEventListener("mouseover", function () {
    card6.style.backgroundColor = getRandomColor();
});
card6.addEventListener("mouseout", function () {
    card6.style.backgroundColor = "";
});

// navigate 
document.getElementById('blogBtn').addEventListener('click', function () {
    window.location.href = 'http://127.0.0.1:5500/blog.html'
})
document.getElementById('useBtn').addEventListener('click', function () {
    window.location.href = 'http://127.0.0.1:5500/use.html'
})