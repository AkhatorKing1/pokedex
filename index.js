// function Animal() {
//     let poo = "poo"
//     function walk() {
//         let wk = "I can walk very well"
//         return "I am walking"
//     }

//     function speak() {
//         return "I can speak"
//     }

//     return {
//         walk, 
//         speak,
//         poo
//     }
    
// }

// const animal = new Animal();
// console.log(animal.poo)
// jkhljj

// const pokemonList = (function() {
//     let pokemon = [{
//         name: "glad",
//     },
//     {
//         name: "lad"
//     },
//     {
//         name: "pete"
//     },
//     {
//          name: "goal"
//     },
//     {
//         name: "yun"
//     }]

//     // const arr = new Array(9)

//     function display() {
//         return pokemon
//     }

console.log("Paid")

    function displayGrid() {
        const body = document.querySelector('body');
        const container = document.querySelector('.container');
        const gridWrapper1 = document.createElement('div');
        gridWrapper1.setAttribute('class', 'grid-wrapper');
        const gridWrapper = document.createElement('div');
        gridWrapper.setAttribute('class', 'grid-wrapper');
        const PlayerTurn = document.querySelector('.player-turn')
        const resetButton = document.querySelector('button');
        const Xscore = document.querySelector('#Xscore');
        const Oscore = document.querySelector('#Oscore');

        const player2 = document.querySelector('#player');
        const comEasy = document.querySelector('#com-easy');
        const comNormal = document.querySelector('#com-normal')
        const comHard = document.querySelector('#com-hard')
        const section = document.querySelectorAll('section');

        const arr = new Array(9)
        arr[0] = 0; arr[1] = 1; arr[2] =2; arr[3] =3; arr[4] =4;
        arr[5] = 5; arr[6] = 6; arr[7] =7; arr[8] = 8;

        const h2 = document.createElement('h2');
        const text = document.createTextNode('Tic-Tac-Toe');
        h2.appendChild(text);
        container.appendChild(h2);

        const gameOutcome = document.createElement('div');
        gameOutcome.setAttribute('class', 'game-outcome');
        const outcomeTextX = document.createTextNode('PLAYER X WINS');
        const outcomeTextO = document.createTextNode('PLAYER O WINS');
        const outcomeTextD = document.createTextNode('DRAW');
        
        const startGame = document.createElement('div');
        startGame.setAttribute('class', 'start-game')
        const beginText = document.createTextNode("START GAME")
        startGame.appendChild(beginText);
        container.appendChild(startGame);

        const instruction = document.createElement('p');
        instruction.setAttribute('class', 'inst');
        instruction.innerHTML = 'Click "start game" to begin!';
        container.appendChild(instruction);

        function resetArr() {
            arr[0] = 0; arr[1] = 1; arr[2] =2; arr[3] =3; arr[4] =4;
            arr[5] = 5; arr[6] = 6; arr[7] =7; arr[8] = 8;
        }

        function resetGrid() {
            grid0.innerText = ""
            grid1.innerText = ""
            grid2.innerText = ""
            grid3.innerText = ""
            grid4.innerText = ""
            grid5.innerText = ""
            grid6.innerText = ""
            grid7.innerText = ""
            grid8.innerText = ""
        }

        gameOutcome.addEventListener('click', () => {
            // location.reload();
            resetArr();
            resetGrid();
            player = 1;
            gameOutcome.innerHTML = ''
            container.removeChild(gameOutcome);
            PlayerTurn.innerHTML = "Player X turn";
        })

        section[1].remove();
        startGame.addEventListener('click', () => {
            container.removeChild(startGame);
            container.removeChild(instruction)
            start();
            body.appendChild(section[1]);
        })

        

        let player = 1;
        let XscoreVal = 0;
        let OscoreVal = 0;

        function restartGame() {
            resetArr();
            resetGrid();
            player = 1;
            PlayerTurn.innerText = "Player X turn";
            gameOutcome.innerHTML = ''
            if(container.appendChild(gameOutcome)) {
                container.removeChild(gameOutcome);
            }
        }

        function Xwins() {
            if((arr[0] === "X" && arr[1] === "X" && arr[2] === "X")
                ||(arr[0] === "X" && arr[3] === "X" && arr[6] === "X")
                ||(arr[0] === "X" && arr[4] === "X" && arr[8] === "X")
                ||(arr[1] === "X" && arr[4] === "X" && arr[7] === "X")
                ||(arr[2] === "X" && arr[5] === "X" && arr[8] === "X")
                ||(arr[2] === "X" && arr[4] === "X" && arr[6] === "X")
                ||(arr[3] === "X" && arr[4] === "X" && arr[5] === "X")
                ||(arr[6] === "X" && arr[7] === "X" && arr[8] === "X") ) {
                    return true
            }
        }

        function Owins() {
            if((arr[0] === "O" && arr[1] === "O" && arr[2] === "O")
                ||(arr[0] === "O" && arr[3] === "O" && arr[6] === "O")
                ||(arr[0] === "O" && arr[4] === "O" && arr[8] === "O")
                ||(arr[1] === "O" && arr[4] === "O" && arr[7] === "O")
                ||(arr[2] === "O" && arr[5] === "O" && arr[8] === "O")
                ||(arr[2] === "O" && arr[4] === "O" && arr[6] === "O")
                ||(arr[3] === "O" && arr[4] === "O" && arr[5] === "O")
                ||(arr[6] === "O" && arr[7] === "O" && arr[8] === "O") ) {
                    return true
            }
        }

        function Draw() {
            if(!Xwins() && !Owins() && arr[0] !== 0 && arr[1] !== 1
                && arr[2] !== 2 && arr[3] !== 3 && arr[4] !== 4
                && arr[5] !== 5 && arr[6] !== 6 && arr[7] !== 7
                && arr[8] !== 8) {
                   return true 
            }
        }
        

        function start() {
            PlayerTurn.innerHTML = "Player X turn";
            resetButton.innerHTML = "RESTART";
            resetButton.addEventListener('click', () => {
                restartGame()
            })
            
            arr.forEach((a, i) => {
                const grid = document.createElement('div');
                grid.setAttribute('class', 'grid');
                grid.setAttribute('id', `grid${i}`);
                grid.innerText = "";
                gridWrapper1.appendChild(grid);
                container.append(gridWrapper1);

                const grid0 = document.getElementById('grid0');
                const grid1 = document.getElementById('grid1');
                const grid2 = document.getElementById('grid2');
                const grid3 = document.getElementById('grid3');
                const grid4 = document.getElementById('grid4');
                const grid5 = document.getElementById('grid5');
                const grid6 = document.getElementById('grid6');
                const grid7 = document.getElementById('grid7');
                const grid8 = document.getElementById('grid8');

                grid.addEventListener('click', () => {
                
                    if(gameOutcome.innerHTML === '' && player2.checked) {
                        if (player === 1 && arr[i] !== "X" && arr[i] !== "O") {
                            arr[i] = "X";
                            grid.innerText = "X";
                            player = 2;

                            if(Xwins()) {
                                gameOutcome.appendChild(outcomeTextX);
                                container.appendChild(gameOutcome);
                                PlayerTurn.innerHTML = "Player X wins";
                                XscoreVal += 1;
                                Xscore.innerHTML = `${XscoreVal}`
                               
                            }
                            else if (Draw()) {
                                gameOutcome.appendChild(outcomeTextD);
                                container.appendChild(gameOutcome);
                                PlayerTurn.innerHTML = "Draw";
                            }
                            else {PlayerTurn.innerHTML = "Player O turn"}
                        }
                        
                        else if(player === 2 && arr[i] !== "X" && arr[i] !== "O") {
                            arr[i] = "O";
                            grid.innerText = "O";
                            player = 1;
                            if(Owins()) {
                                gameOutcome.appendChild(outcomeTextO);
                                container.appendChild(gameOutcome);
                                PlayerTurn.innerHTML = "Player O wins";
                                OscoreVal += 1;
                                Oscore.innerText = `${OscoreVal}`
                            }
                            else if(Draw()) {
                                gameOutcome.appendChild(outcomeTextD);
                                container.appendChild(gameOutcome);
                                PlayerTurn.innerHTML = "Draw"
                            }
                            else {PlayerTurn.innerHTML = "Player X turn"};
                        }
                    }
                })

                
                comEasy.addEventListener('change', () => {
                    restartGame();
                    
                    grid.addEventListener('click', () => {
                
                        if(gameOutcome.innerHTML === '' && comEasy.checked) {
                            if (player === 1 && arr[i] !== "X" && arr[i] !== "O") {
                                arr[i] = "X";
                                grid.innerText = "X";
                                player = 2;
                                
                                if(Xwins()) {
                                    gameOutcome.appendChild(outcomeTextX);
                                    container.appendChild(gameOutcome);
                                    PlayerTurn.innerHTML = "Player X win";
                                    XscoreVal += 1;
                                    Xscore.innerHTML = `${XscoreVal}`
                                }
                                else if (Draw()) {
                                    gameOutcome.appendChild(outcomeTextD);
                                    container.appendChild(gameOutcome);
                                    PlayerTurn.innerHTML = "Draw";
                                }
                                else {
                                    PlayerTurn.innerHTML = "Player O turn";
                                    if (i === 0){
                                        let newArr = [arr[1], arr[2], arr[3], arr[4], arr[6], arr[8]];
                                        let newArr2 = [];
                                        
                                        newArr2 = newArr.filter((i) => typeof(i) === "number");
                                        let comVal = newArr2[Math.floor(Math.random() * newArr2.length)];
                                        for (let z = 0; z < arr.length; z++) {
                                            if(comVal === undefined && arr[z] !== "X" && arr[z] !== "O") {
                                                setTimeout(() => {
                                                    arr[z] = "O";
                                                    document.getElementById(`grid${z}`).innerText = "O";
                                                    // player = 1;
                                                    // PlayerTurn.innerHTML = "Player X turn";
                                                    if (Owins()) {
                                                    gameOutcome.appendChild(outcomeTextO);
                                                    container.appendChild(gameOutcome);
                                                    PlayerTurn.innerHTML = "Player O win";
                                                    OscoreVal += 1;
                                                    Oscore.innerText = `${OscoreVal}`
                                                    }
                                                    else {
                                                        player = 1;
                                                        PlayerTurn.innerHTML = "Player X turn";
                                                    }
                                                }, 1000);
                                                return
                                            }
                                            else if(arr[z] === comVal) {
                                                console.log(arr[z]);
                                                setTimeout(() => {
                                                    arr[z] = "O";
                                                    document.getElementById(`grid${z}`).innerText = "O";
                                                    // player = 1;
                                                    // PlayerTurn.innerHTML = "Player X turn";
                                                    if (Owins()) {
                                                    gameOutcome.appendChild(outcomeTextO);
                                                    container.appendChild(gameOutcome);
                                                    PlayerTurn.innerHTML = "Player O win";
                                                    OscoreVal += 1;
                                                    Oscore.innerText = `${OscoreVal}`
                                                    }
                                                    else {
                                                        player = 1;
                                                        PlayerTurn.innerHTML = "Player X turn";
                                                    }
                                                }, 1000);
                                                
                                            } 
                                        }
                                    }
                                    else if (i === 1){
                                        let newArr = [arr[0], arr[2], arr[4], arr[7]];
                                        console.log(newArr);
                                        let newArr2 = [];
                                        
                                        newArr2 = newArr.filter((i) => typeof(i) === "number");
                                        let comVal = newArr2[Math.floor(Math.random() * newArr2.length)];
                                        for (let z = 0; z < arr.length; z++) {
                                            if(comVal === undefined && arr[z] !== "X" && arr[z] !== "O") {
                                                setTimeout(() => {
                                                    arr[z] = "O";
                                                    document.getElementById(`grid${z}`).innerText = "O";
                                                    // player = 1;
                                                    // PlayerTurn.innerHTML = "Player X turn";
                                                    if (Owins()) {
                                                    gameOutcome.appendChild(outcomeTextO);
                                                    container.appendChild(gameOutcome);
                                                    PlayerTurn.innerHTML = "Player O win";
                                                    OscoreVal += 1;
                                                    Oscore.innerText = `${OscoreVal}`
                                                    }
                                                    else {
                                                        player = 1;
                                                        PlayerTurn.innerHTML = "Player X turn";
                                                    }
                                                }, 1000);
                                                return
                                            }
                                            else if(arr[z] === comVal) {
                                                console.log(arr[z]);
                                                setTimeout(() => {
                                                    arr[z] = "O";
                                                    document.getElementById(`grid${z}`).innerText = "O";
                                                    // player = 1;
                                                    // PlayerTurn.innerHTML = "Player X turn";
                                                    if (Owins()) {
                                                    gameOutcome.appendChild(outcomeTextO);
                                                    container.appendChild(gameOutcome);
                                                    PlayerTurn.innerHTML = "Player O win";
                                                    OscoreVal += 1;
                                                    Oscore.innerText = `${OscoreVal}`
                                                    }
                                                    else {
                                                        player = 1;
                                                        PlayerTurn.innerHTML = "Player X turn";
                                                    }
                                                }, 1000);
                                                
                                            } 
                                        }
                                    }
                                    else if (i === 2){
                                        let newArr = [arr[0], arr[1], arr[4], arr[5], arr[6], arr[8]];
                                        console.log(newArr);
                                        let newArr2 = [];
                                        
                                        newArr2 = newArr.filter((i) => typeof(i) === "number");
                                        let comVal = newArr2[Math.floor(Math.random() * newArr2.length)];
                                        for (let z = 0; z < arr.length; z++) {
                                            if(comVal === undefined && arr[z] !== "X" && arr[z] !== "O") {
                                                setTimeout(() => {
                                                    arr[z] = "O";
                                                    document.getElementById(`grid${z}`).innerText = "O";
                                                    // player = 1;
                                                    // PlayerTurn.innerHTML = "Player X turn";
                                                    if (Owins()) {
                                                    gameOutcome.appendChild(outcomeTextO);
                                                    container.appendChild(gameOutcome);
                                                    PlayerTurn.innerHTML = "Player O win";
                                                    OscoreVal += 1;
                                                    Oscore.innerText = `${OscoreVal}`
                                                    }
                                                    else {
                                                        player = 1;
                                                        PlayerTurn.innerHTML = "Player X turn";
                                                    }
                                                }, 1000);
                                                return
                                            }
                                            else if(arr[z] === comVal) {
                                                console.log(arr[z]);
                                                setTimeout(() => {
                                                    arr[z] = "O";
                                                    document.getElementById(`grid${z}`).innerText = "O";
                                                    // player = 1;
                                                    // PlayerTurn.innerHTML = "Player X turn";
                                                    if (Owins()) {
                                                    gameOutcome.appendChild(outcomeTextO);
                                                    container.appendChild(gameOutcome);
                                                    PlayerTurn.innerHTML = "Player O win";
                                                    OscoreVal += 1;
                                                    Oscore.innerText = `${OscoreVal}`
                                                }
                                                else {
                                                    player = 1;
                                                    PlayerTurn.innerHTML = "Player X turn";
                                                }
                                                }, 1000);
                                                
                                            } 
                                        }
                                    }
                                    else if (i === 3){
                                        let newArr = [arr[0], arr[4], arr[5], arr[6]];
                                        console.log(newArr);
                                        let newArr2 = [];
                                        
                                        newArr2 = newArr.filter((i) => typeof(i) === "number");
                                        let comVal = newArr2[Math.floor(Math.random() * newArr2.length)];
                                        for (let z = 0; z < arr.length; z++) {
                                            if(comVal === undefined && arr[z] !== "X" && arr[z] !== "O") {
                                                setTimeout(() => {
                                                    arr[z] = "O";
                                                    document.getElementById(`grid${z}`).innerText = "O";
                                                    // player = 1;
                                                    // PlayerTurn.innerHTML = "Player X turn";
                                                    if (Owins()) {
                                                    gameOutcome.appendChild(outcomeTextO);
                                                    container.appendChild(gameOutcome);
                                                    PlayerTurn.innerHTML = "Player O win";
                                                    OscoreVal += 1;
                                                    Oscore.innerText = `${OscoreVal}`
                                                    }
                                                    else {
                                                        player = 1;
                                                        PlayerTurn.innerHTML = "Player X turn";
                                                    }
                                                }, 1000);
                                                return
                                            }
                                            else if(arr[z] === comVal) {
                                                console.log(arr[z]);
                                                setTimeout(() => {
                                                    arr[z] = "O";
                                                    document.getElementById(`grid${z}`).innerText = "O";
                                                    // player = 1;
                                                    // PlayerTurn.innerHTML = "Player X turn";
                                                    if (Owins()) {
                                                    gameOutcome.appendChild(outcomeTextO);
                                                    container.appendChild(gameOutcome);
                                                    PlayerTurn.innerHTML = "Player O win";
                                                    OscoreVal += 1;
                                                    Oscore.innerText = `${OscoreVal}`
                                                    }
                                                    else {
                                                        player = 1;
                                                        PlayerTurn.innerHTML = "Player X turn";
                                                    }
                                                }, 1000);
                                                
                                            } 
                                        }
                                    }
                                    else if (i === 4){
                                        let newArr = [arr[0], arr[1], arr[2], arr[3], arr[5], arr[6], arr[7], arr[8]];
                                        console.log(newArr);
                                        let newArr2 = [];
                                        
                                        newArr2 = newArr.filter((i) => typeof(i) === "number");
                                        let comVal = newArr2[Math.floor(Math.random() * newArr2.length)];
                                        for (let z = 0; z < arr.length; z++) {
                                            if(comVal === undefined && arr[z] !== "X" && arr[z] !== "O") {
                                                setTimeout(() => {
                                                    arr[z] = "O";
                                                    document.getElementById(`grid${z}`).innerText = "O";
                                                    // player = 1;
                                                    // PlayerTurn.innerHTML = "Player X turn";
                                                    if (Owins()) {
                                                    gameOutcome.appendChild(outcomeTextO);
                                                    container.appendChild(gameOutcome);
                                                    PlayerTurn.innerHTML = "Player O win";
                                                    OscoreVal += 1;
                                                    Oscore.innerText = `${OscoreVal}`
                                                    }
                                                    else {
                                                        player = 1;
                                                        PlayerTurn.innerHTML = "Player X turn";
                                                    }
                                                }, 1000);
                                                return
                                            }
                                            else if(arr[z] === comVal) {
                                                console.log(arr[z]);
                                                setTimeout(() => {
                                                    arr[z] = "O";
                                                    document.getElementById(`grid${z}`).innerText = "O";
                                                    // player = 1;
                                                    // PlayerTurn.innerHTML = "Player X turn";
                                                    if (Owins()) {
                                                    gameOutcome.appendChild(outcomeTextO);
                                                    container.appendChild(gameOutcome);
                                                    PlayerTurn.innerHTML = "Player O win";
                                                    OscoreVal += 1;
                                                    Oscore.innerText = `${OscoreVal}`
                                                    }
                                                    else {
                                                        player = 1;
                                                        PlayerTurn.innerHTML = "Player X turn";
                                                    }
                                                }, 1000);
                                                
                                            } 
                                        }
                                    }
                                    else if (i === 5){
                                        let newArr = [arr[2], arr[3], arr[4], arr[8]];
                                        console.log(newArr);
                                        let newArr2 = [];
                                        
                                        newArr2 = newArr.filter((i) => typeof(i) === "number");
                                        let comVal = newArr2[Math.floor(Math.random() * newArr2.length)];
                                        for (let z = 0; z < arr.length; z++) {
                                            if(comVal === undefined && arr[z] !== "X" && arr[z] !== "O") {
                                                setTimeout(() => {
                                                    arr[z] = "O";
                                                    document.getElementById(`grid${z}`).innerText = "O";
                                                    // player = 1;
                                                    // PlayerTurn.innerHTML = "Player X turn";
                                                    if (Owins()) {
                                                    gameOutcome.appendChild(outcomeTextO);
                                                    container.appendChild(gameOutcome);
                                                    PlayerTurn.innerHTML = "Player O win";
                                                    OscoreVal += 1;
                                                    Oscore.innerText = `${OscoreVal}`
                                                    }
                                                    else {
                                                        player = 1;
                                                        PlayerTurn.innerHTML = "Player X turn";
                                                    }
                                                }, 1000);
                                                return
                                            }
                                            else if(arr[z] === comVal) {
                                                console.log(arr[z]);
                                                setTimeout(() => {
                                                    arr[z] = "O";
                                                    document.getElementById(`grid${z}`).innerText = "O";
                                                    // player = 1;
                                                    // PlayerTurn.innerHTML = "Player X turn";
                                                    if (Owins()) {
                                                        gameOutcome.appendChild(outcomeTextO);
                                                        container.appendChild(gameOutcome);
                                                        PlayerTurn.innerHTML = "Player O win";
                                                        OscoreVal += 1;
                                                        Oscore.innerText = `${OscoreVal}`
                                                    }
                                                    else {
                                                        player = 1;
                                                        PlayerTurn.innerHTML = "Player X turn";
                                                    }
                                                }, 1000);
                                                
                                            } 
                                        }
                                    }
                                    else if (i === 6){
                                        let newArr = [arr[0], arr[2], arr[3], arr[4], arr[7], arr[8]];
                                        console.log(newArr);
                                        let newArr2 = [];
                                        
                                        newArr2 = newArr.filter((i) => typeof(i) === "number");
                                        let comVal = newArr2[Math.floor(Math.random() * newArr2.length)];
                                        for (let z = 0; z < arr.length; z++) {
                                            if(comVal === undefined && arr[z] !== "X" && arr[z] !== "O") {
                                                setTimeout(() => {
                                                    arr[z] = "O";
                                                    document.getElementById(`grid${z}`).innerText = "O";
                                                    // player = 1;
                                                    // PlayerTurn.innerHTML = "Player X turn";
                                                    if (Owins()) {
                                                    gameOutcome.appendChild(outcomeTextO);
                                                    container.appendChild(gameOutcome);
                                                    PlayerTurn.innerHTML = "Player O win";
                                                    OscoreVal += 1;
                                                    Oscore.innerText = `${OscoreVal}`
                                                    }
                                                    else {
                                                        player = 1;
                                                        PlayerTurn.innerHTML = "Player X turn";
                                                    }
                                                }, 1000);
                                                return
                                            }
                                            else if(arr[z] === comVal) {
                                                console.log(arr[z]);
                                                setTimeout(() => {
                                                    arr[z] = "O";
                                                    document.getElementById(`grid${z}`).innerText = "O";
                                                    // player = 1;
                                                    // PlayerTurn.innerHTML = "Player X turn";
                                                    if (Owins()) {
                                                        gameOutcome.appendChild(outcomeTextO);
                                                        container.appendChild(gameOutcome);
                                                        PlayerTurn.innerHTML = "Player O win";
                                                        OscoreVal += 1;
                                                        Oscore.innerText = `${OscoreVal}`
                                                    }
                                                    else {
                                                        player = 1;
                                                        PlayerTurn.innerHTML = "Player X turn";
                                                    }
                                                }, 1000);
                                               
                                            } 
                                        }
                                    }
                                    else if (i === 7){
                                        let newArr = [arr[1], arr[4], arr[6], arr[8]];
                                        console.log(newArr);
                                        let newArr2 = [];
                                        
                                        newArr2 = newArr.filter((i) => typeof(i) === "number");
                                        let comVal = newArr2[Math.floor(Math.random() * newArr2.length)];
                                        for (let z = 0; z < arr.length; z++) {
                                            if(comVal === undefined && arr[z] !== "X" && arr[z] !== "O") {
                                                setTimeout(() => {
                                                    arr[z] = "O";
                                                    document.getElementById(`grid${z}`).innerText = "O";
                                                    // player = 1;
                                                    // PlayerTurn.innerHTML = "Player X turn";
                                                    if (Owins()) {
                                                    gameOutcome.appendChild(outcomeTextO);
                                                    container.appendChild(gameOutcome);
                                                    PlayerTurn.innerHTML = "Player O win";
                                                    OscoreVal += 1;
                                                    Oscore.innerText = `${OscoreVal}`
                                                    }
                                                    else {
                                                        player = 1;
                                                        PlayerTurn.innerHTML = "Player X turn";
                                                    }
                                                }, 1000);
                                                return
                                            }
                                            else if(arr[z] === comVal) {
                                                console.log(arr[z]);
                                                setTimeout(() => {
                                                    arr[z] = "O";
                                                    document.getElementById(`grid${z}`).innerText = "O";
                                                    // player = 1;
                                                    // PlayerTurn.innerHTML = "Player X turn";
                                                    if (Owins()) {
                                                        gameOutcome.appendChild(outcomeTextO);
                                                        container.appendChild(gameOutcome);
                                                        PlayerTurn.innerHTML = "Player O win";
                                                        OscoreVal += 1;
                                                        Oscore.innerText = `${OscoreVal}`
                                                    }
                                                    else {
                                                        player = 1;
                                                        PlayerTurn.innerHTML = "Player X turn";
                                                    }
                                                }, 1000);
                                                
                                            } 
                                        }
                                    }
                                    else if (i === 8){
                                        let newArr = [arr[0], arr[2], arr[4], arr[5], arr[6], arr[7]];
                                        console.log(newArr);
                                        let newArr2 = [];
                                        
                                        newArr2 = newArr.filter((i) => typeof(i) === "number");
                                        let comVal = newArr2[Math.floor(Math.random() * newArr2.length)];
                                        for (let z = 0; z < arr.length; z++) {
                                            if(comVal === undefined && arr[z] !== "X" && arr[z] !== "O") {
                                                setTimeout(() => {
                                                    arr[z] = "O";
                                                    document.getElementById(`grid${z}`).innerText = "O";
                                                    // player = 1;
                                                    // PlayerTurn.innerHTML = "Player X turn";
                                                    if (Owins()) {
                                                    gameOutcome.appendChild(outcomeTextO);
                                                    container.appendChild(gameOutcome);
                                                    PlayerTurn.innerHTML = "Player O win";
                                                    OscoreVal += 1;
                                                    Oscore.innerText = `${OscoreVal}`
                                                    }
                                                    else {
                                                        player = 1;
                                                        PlayerTurn.innerHTML = "Player X turn";
                                                    }
                                                }, 1000);
                                                return
                                            }
                                            else if(arr[z] === comVal) {
                                                console.log(arr[z]);
                                                setTimeout(() => {
                                                    arr[z] = "O";
                                                    document.getElementById(`grid${z}`).innerText = "O";
                                                    // player = 1;
                                                    // PlayerTurn.innerHTML = "Player X turn";
                                                    if (Owins()) {
                                                        gameOutcome.appendChild(outcomeTextO);
                                                        container.appendChild(gameOutcome);
                                                        PlayerTurn.innerHTML = "Player O win";
                                                        OscoreVal += 1;
                                                        Oscore.innerText = `${OscoreVal}`
                                                    }
                                                    else {
                                                        player = 1;
                                                        PlayerTurn.innerHTML = "Player X turn";
                                                    }
                                                }, 1000);
                                               
                                            } 
                                        }
                                    }
                                };
                            }
                        } 
                    })
                })
                //ooooGJGKTKTKJTJTJIRURURYHFJDFKDJDHJDJDKFKLFLFLFLFKKDDJDHDHJFKFKFLFLFKFJFJFJFKFLDFLFDKFDJJKLSDHVSIUGBSLDJKLJVGGHJGJHUITYFJH
               
                comNormal.addEventListener('change', () => {
                    restartGame();
                    

                    function setTime() {setTimeout(() => {
                        if (Owins()) {
                        gameOutcome.appendChild(outcomeTextO);
                        container.appendChild(gameOutcome);
                        PlayerTurn.innerHTML = "Player O win";
                        OscoreVal += 1;
                        Oscore.innerText = `${OscoreVal}`
                        }
                        else {
                            player = 1;
                            PlayerTurn.innerHTML = "Player X turn";
                        }
                        }, 1000);
                    }
                   
                    grid.addEventListener('click', () => {
                
                        if(gameOutcome.innerHTML === '' && comNormal.checked) {
                            if (player === 1 && arr[i] !== "X" && arr[i] !== "O") {
                                arr[i] = "X";
                                grid.innerText = "X";
                                player = 2;
                                
                                if(Xwins()) {
                                    gameOutcome.appendChild(outcomeTextX);
                                    container.appendChild(gameOutcome);
                                    PlayerTurn.innerHTML = "Player X win";
                                    XscoreVal += 1;
                                    Xscore.innerHTML = `${XscoreVal}`
                                }
                                
                                else if (Draw()) {
                                    gameOutcome.appendChild(outcomeTextD);
                                    container.appendChild(gameOutcome);
                                    PlayerTurn.innerHTML = "Draw";
                                }
                                else {
                                    PlayerTurn.innerHTML = "Player O turn";
                                    if (i === 0){
                                        if(arr[1] === "O" && arr[4] === "O" && arr[7] === 7) {setTimeout(() => {arr[7] = "O"; document.getElementById('grid7').innerText = "O";}, 1000); setTime()}
                                        else if(arr[1] === "O" && arr[7] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[7] === "O" && arr[1] === 1) {setTimeout(() => {arr[1] = "O"; document.getElementById('grid1').innerText = "O";}, 1000); setTime()}

                                        else if(arr[2] === "O" && arr[5] === "O" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[2] === "O" && arr[8] === "O" && arr[5] === 5) {setTimeout(() => {arr[5] = "O"; document.getElementById('grid5').innerText = "O";}, 1000); setTime()}
                                        else if(arr[5] === "O" && arr[8] === "O" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}

                                        else if(arr[2] === "O" && arr[4] === "O" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[6] === "O" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}
                                        else if(arr[6] === "O" && arr[2] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}

                                        else if(arr[3] === "O" && arr[4] === "O" && arr[5] === 5) {setTimeout(() => {arr[5] = "O"; document.getElementById('grid5').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[5] === "O" && arr[3] === 3) {setTimeout(() => {arr[3] = "O"; document.getElementById('grid3').innerText = "O";}, 1000); setTime()}
                                        else if(arr[5] === "O" && arr[3] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}

                                        else if(arr[6] === "O" && arr[7] === "O" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[7] === "O" && arr[8] === "O" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[8] === "O" && arr[6] === "O" && arr[7] === 7) {setTimeout(() => {arr[7] = "O"; document.getElementById('grid7').innerText = "O";}, 1000); setTime()}

                                        else if(arr[1] === "X" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}
                                        else if(arr[2] === "X" && arr[1] === 1) {setTimeout(() => {arr[1] = "O"; document.getElementById('grid1').innerText = "O";}, 1000); setTime()}
                                        else if(arr[3] === "X" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[6] === "X" && arr[3] === 3) {setTimeout(() => {arr[3] = "O"; document.getElementById('grid3').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "X" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[8] === "X" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}

                                        else {
                                            let newArr = [arr[1], arr[2], arr[3], arr[4], arr[6], arr[8]];
                                            let newArr2 = [];
                                            
                                            newArr2 = newArr.filter((i) => typeof(i) === "number");
                                            let comVal = newArr2[Math.floor(Math.random() * newArr2.length)];
                                            for (let z = 0; z < arr.length; z++) {
                                                if(comVal === undefined && arr[z] !== "X" && arr[z] !== "O") {
                                                    setTimeout(() => {
                                                        arr[z] = "O";
                                                        document.getElementById(`grid${z}`).innerText = "O";
                                                       
                                                        if (Owins()) {
                                                        gameOutcome.appendChild(outcomeTextO);
                                                        container.appendChild(gameOutcome);
                                                        PlayerTurn.innerHTML = "Player O win";
                                                        OscoreVal += 1;
                                                        Oscore.innerText = `${OscoreVal}`
                                                        }
                                                        else {
                                                            player = 1;
                                                            PlayerTurn.innerHTML = "Player X turn";
                                                        }
                                                    }, 1000);
                                                    return
                                                }
                                                else if(arr[z] === comVal) {
                                                    setTimeout(() => {
                                                        arr[z] = "O";
                                                        document.getElementById(`grid${z}`).innerText = "O";
                                                        if (Owins()) {
                                                        gameOutcome.appendChild(outcomeTextO);
                                                        container.appendChild(gameOutcome);
                                                        PlayerTurn.innerHTML = "Player O win";
                                                        OscoreVal += 1;
                                                        Oscore.innerText = `${OscoreVal}`
                                                        }
                                                        else {
                                                            player = 1;
                                                            PlayerTurn.innerHTML = "Player X turn";
                                                        }
                                                    }, 1000);
                                                    
                                                } 
                                            }
                                        }
                                    }
                                    else if (i === 1){
                                        if(arr[0] === "O" && arr[3] === "O" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[3] === "O" && arr[6] === "O" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}
                                        else if(arr[6] === "O" && arr[0] === "O" && arr[3] === 3) {setTimeout(() => {arr[3] = "O"; document.getElementById('grid3').innerText = "O";}, 1000); setTime()}

                                        else if(arr[0] === "O" && arr[4] === "O" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[0] === "O" && arr[8] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[8] === "O" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}

                                        else if(arr[2] === "O" && arr[5] === "O" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[2] === "O" && arr[8] === "O" && arr[5] === 5) {setTimeout(() => {arr[5] = "O"; document.getElementById('grid5').innerText = "O";}, 1000); setTime()}
                                        else if(arr[5] === "O" && arr[8] === "O" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}

                                        else if(arr[2] === "O" && arr[4] === "O" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[6] === "O" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}
                                        else if(arr[6] === "O" && arr[2] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}

                                        else if(arr[3] === "O" && arr[4] === "O" && arr[5] === 5) {setTimeout(() => {arr[5] = "O"; document.getElementById('grid5').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[5] === "O" && arr[3] === 3) {setTimeout(() => {arr[3] = "O"; document.getElementById('grid3').innerText = "O";}, 1000); setTime()}
                                        else if(arr[5] === "O" && arr[3] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}

                                        else if(arr[6] === "O" && arr[7] === "O" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[7] === "O" && arr[8] === "O" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[8] === "O" && arr[6] === "O" && arr[7] === 7) {setTimeout(() => {arr[7] = "O"; document.getElementById('grid7').innerText = "O";}, 1000); setTime()}

                                        else if(arr[0] === "X" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}
                                        else if(arr[2] === "X" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "X" && arr[7] === 7) {setTimeout(() => {arr[7] = "O"; document.getElementById('grid7').innerText = "O";}, 1000); setTime()}
                                        else if(arr[7] === "X" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}
                                        
                                        else {
                                            let newArr = [arr[0], arr[2], arr[4], arr[7]];
                                            
                                            let newArr2 = [];
                                            
                                            newArr2 = newArr.filter((i) => typeof(i) === "number");
                                            let comVal = newArr2[Math.floor(Math.random() * newArr2.length)];
                                            console.log(comVal);
                                            for (let z = 0; z < arr.length; z++) {
                                                if(comVal === undefined && arr[z] !== "X" && arr[z] !== "O") {
                                                    setTimeout(() => {
                                                        arr[z] = "O";
                                                        document.getElementById(`grid${z}`).innerText = "O";
                                                        if (Owins()) {
                                                        gameOutcome.appendChild(outcomeTextO);
                                                        container.appendChild(gameOutcome);
                                                        PlayerTurn.innerHTML = "Player O win";
                                                        OscoreVal += 1;
                                                        Oscore.innerText = `${OscoreVal}`
                                                        }
                                                        else {
                                                            player = 1;
                                                            PlayerTurn.innerHTML = "Player X turn";
                                                        }
                                                    }, 1000);
                                                    return
                                                }
                                                else if(arr[z] === comVal) {
                                                    setTimeout(() => {
                                                        arr[z] = "O";
                                                        document.getElementById(`grid${z}`).innerText = "O";
                                                        if (Owins()) {
                                                        gameOutcome.appendChild(outcomeTextO);
                                                        container.appendChild(gameOutcome);
                                                        PlayerTurn.innerHTML = "Player O win";
                                                        OscoreVal += 1;
                                                        Oscore.innerText = `${OscoreVal}`
                                                        }
                                                        else {
                                                            player = 1;
                                                            PlayerTurn.innerHTML = "Player X turn";
                                                        }
                                                    }, 1000);
                                                    
                                                } 
                                            }
                                        }
                                        
                                    }
                                    else if (i === 2){
                                        if(arr[0] === "O" && arr[3] === "O" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[3] === "O" && arr[6] === "O" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}
                                        else if(arr[6] === "O" && arr[0] === "O" && arr[3] === 3) {setTimeout(() => {arr[3] = "O"; document.getElementById('grid3').innerText = "O";}, 1000); setTime()}

                                        else if(arr[0] === "O" && arr[4] === "O" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[0] === "O" && arr[8] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[8] === "O" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}

                                        else if(arr[1] === "O" && arr[4] === "O" && arr[7] === 7) {setTimeout(() => {arr[7] = "O"; document.getElementById('grid7').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[7] === "O" && arr[1] === 1) {setTimeout(() => {arr[1] = "O"; document.getElementById('grid1').innerText = "O";}, 1000); setTime()}
                                        else if(arr[7] === "O" && arr[1] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}

                                        else if(arr[3] === "O" && arr[4] === "O" && arr[5] === 5) {setTimeout(() => {arr[5] = "O"; document.getElementById('grid5').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[5] === "O" && arr[3] === 3) {setTimeout(() => {arr[3] = "O"; document.getElementById('grid3').innerText = "O";}, 1000); setTime()}
                                        else if(arr[5] === "O" && arr[3] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}

                                        else if(arr[6] === "O" && arr[7] === "O" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[7] === "O" && arr[8] === "O" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[8] === "O" && arr[6] === "O" && arr[7] === 7) {setTimeout(() => {arr[7] = "O"; document.getElementById('grid7').innerText = "O";}, 1000); setTime()}

                                        else if(arr[0] === "X" && arr[1] === 1) {setTimeout(() => {arr[1] = "O"; document.getElementById('grid1').innerText = "O";}, 1000); setTime()}
                                        else if(arr[1] === "X" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "X" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[6] === "X" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}
                                        else if(arr[5] === "X" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[8] === "X" && arr[5] === 5) {setTimeout(() => {arr[5] = "O"; document.getElementById('grid5').innerText = "O";}, 1000); setTime()}
                                        
                                        else {
                                            let newArr = [arr[0], arr[1], arr[4], arr[5], arr[6], arr[8]];
                                            
                                            let newArr2 = [];
                                            
                                            newArr2 = newArr.filter((i) => typeof(i) === "number");
                                            let comVal = newArr2[Math.floor(Math.random() * newArr2.length)];
                                            console.log(comVal);
                                            for (let z = 0; z < arr.length; z++) {
                                                if(comVal === undefined && arr[z] !== "X" && arr[z] !== "O") {
                                                    setTimeout(() => {
                                                        arr[z] = "O";
                                                        document.getElementById(`grid${z}`).innerText = "O";
                                                        if (Owins()) {
                                                        gameOutcome.appendChild(outcomeTextO);
                                                        container.appendChild(gameOutcome);
                                                        PlayerTurn.innerHTML = "Player O win";
                                                        OscoreVal += 1;
                                                        Oscore.innerText = `${OscoreVal}`
                                                        }
                                                        else {
                                                            player = 1;
                                                            PlayerTurn.innerHTML = "Player X turn";
                                                        }
                                                    }, 1000);
                                                    return
                                                }
                                                else if(arr[z] === comVal) {
                                                    setTimeout(() => {
                                                        arr[z] = "O";
                                                        document.getElementById(`grid${z}`).innerText = "O";
                                                        if (Owins()) {
                                                        gameOutcome.appendChild(outcomeTextO);
                                                        container.appendChild(gameOutcome);
                                                        PlayerTurn.innerHTML = "Player O win";
                                                        OscoreVal += 1;
                                                        Oscore.innerText = `${OscoreVal}`
                                                    }
                                                    else {
                                                        player = 1;
                                                        PlayerTurn.innerHTML = "Player X turn";
                                                    }
                                                    }, 1000);
                                                    
                                                } 
                                            }
                                        }
                                    }
                                    else if (i === 3){
                                        if(arr[0] === "O" && arr[1] === "O" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}
                                        else if(arr[1] === "O" && arr[2] === "O" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}
                                        else if(arr[2] === "O" && arr[0] === "O" && arr[1] === 1) {setTimeout(() => {arr[1] = "O"; document.getElementById('grid1').innerText = "O";}, 1000); setTime()}

                                        else if(arr[0] === "O" && arr[4] === "O" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[0] === "O" && arr[8] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[8] === "O" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}

                                        else if(arr[2] === "O" && arr[5] === "O" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[2] === "O" && arr[8] === "O" && arr[5] === 5) {setTimeout(() => {arr[5] = "O"; document.getElementById('grid5').innerText = "O";}, 1000); setTime()}
                                        else if(arr[5] === "O" && arr[8] === "O" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}

                                        else if(arr[2] === "O" && arr[4] === "O" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[6] === "O" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}
                                        else if(arr[6] === "O" && arr[2] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}

                                        else if(arr[1] === "O" && arr[4] === "O" && arr[7] === 7) {setTimeout(() => {arr[7] = "O"; document.getElementById('grid7').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[7] === "O" && arr[1] === 1) {setTimeout(() => {arr[1] = "O"; document.getElementById('grid1').innerText = "O";}, 1000); setTime()}
                                        else if(arr[7] === "O" && arr[1] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}

                                        else if(arr[6] === "O" && arr[7] === "O" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[7] === "O" && arr[8] === "O" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[8] === "O" && arr[6] === "O" && arr[7] === 7) {setTimeout(() => {arr[7] = "O"; document.getElementById('grid7').innerText = "O";}, 1000); setTime()}

                                        else if(arr[0] === "X" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[6] === "X" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "X" && arr[5] === 5) {setTimeout(() => {arr[5] = "O"; document.getElementById('grid5').innerText = "O";}, 1000); setTime()}
                                        else if(arr[5] === "X" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}
                                        
                                        else {
                                            let newArr = [arr[0], arr[4], arr[5], arr[6]];
                                            
                                            let newArr2 = [];
                                            
                                            newArr2 = newArr.filter((i) => typeof(i) === "number");
                                            let comVal = newArr2[Math.floor(Math.random() * newArr2.length)];
                                            console.log(comVal);
                                            for (let z = 0; z < arr.length; z++) {
                                                if(comVal === undefined && arr[z] !== "X" && arr[z] !== "O") {
                                                    setTimeout(() => {
                                                        arr[z] = "O";
                                                        document.getElementById(`grid${z}`).innerText = "O";
                                                        if (Owins()) {
                                                        gameOutcome.appendChild(outcomeTextO);
                                                        container.appendChild(gameOutcome);
                                                        PlayerTurn.innerHTML = "Player O win";
                                                        OscoreVal += 1;
                                                        Oscore.innerText = `${OscoreVal}`
                                                        }
                                                        else {
                                                            player = 1;
                                                            PlayerTurn.innerHTML = "Player X turn";
                                                        }
                                                    }, 1000);
                                                    return
                                                }
                                                else if(arr[z] === comVal) {
                                                    setTimeout(() => {
                                                        arr[z] = "O";
                                                        document.getElementById(`grid${z}`).innerText = "O";
                                                        if (Owins()) {
                                                        gameOutcome.appendChild(outcomeTextO);
                                                        container.appendChild(gameOutcome);
                                                        PlayerTurn.innerHTML = "Player O win";
                                                        OscoreVal += 1;
                                                        Oscore.innerText = `${OscoreVal}`
                                                        }
                                                        else {
                                                            player = 1;
                                                            PlayerTurn.innerHTML = "Player X turn";
                                                        }
                                                    }, 1000);
                                                    
                                                } 
                                            }
                                        }
                                    }
                                    else if (i === 4){
                                        if(arr[0] === "O" && arr[1] === "O" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}
                                        else if(arr[1] === "O" && arr[2] === "O" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}
                                        else if(arr[2] === "O" && arr[0] === "O" && arr[1] === 1) {setTimeout(() => {arr[1] = "O"; document.getElementById('grid1').innerText = "O";}, 1000); setTime()}

                                        else if(arr[0] === "O" && arr[3] === "O" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[3] === "O" && arr[6] === "O" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}
                                        else if(arr[6] === "O" && arr[0] === "O" && arr[3] === 3) {setTimeout(() => {arr[3] = "O"; document.getElementById('grid3').innerText = "O";}, 1000); setTime()}

                                        else if(arr[2] === "O" && arr[5] === "O" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[2] === "O" && arr[8] === "O" && arr[5] === 5) {setTimeout(() => {arr[5] = "O"; document.getElementById('grid5').innerText = "O";}, 1000); setTime()}
                                        else if(arr[5] === "O" && arr[8] === "O" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}

                                        else if(arr[6] === "O" && arr[7] === "O" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[7] === "O" && arr[8] === "O" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[8] === "O" && arr[6] === "O" && arr[7] === 7) {setTimeout(() => {arr[7] = "O"; document.getElementById('grid7').innerText = "O";}, 1000); setTime()}

                                        else if(arr[0] === "X" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[8] === "X" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}
                                        else if(arr[3] === "X" && arr[5] === 5) {setTimeout(() => {arr[5] = "O"; document.getElementById('grid5').innerText = "O";}, 1000); setTime()}
                                        else if(arr[5] === "X" && arr[3] === 3) {setTimeout(() => {arr[3] = "O"; document.getElementById('grid3').innerText = "O";}, 1000); setTime()}
                                        else if(arr[1] === "X" && arr[7] === 7) {setTimeout(() => {arr[7] = "O"; document.getElementById('grid7').innerText = "O";}, 1000); setTime()}
                                        else if(arr[7] === "X" && arr[1] === 1) {setTimeout(() => {arr[1] = "O"; document.getElementById('grid1').innerText = "O";}, 1000); setTime()}
                                        else if(arr[2] === "X" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[6] === "X" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}
                                        
                                        else {
                                            let newArr = [arr[0], arr[1], arr[2], arr[3], arr[5], arr[6], arr[7], arr[8]];
                                            
                                            let newArr2 = [];
                                            
                                            newArr2 = newArr.filter((i) => typeof(i) === "number");
                                            let comVal = newArr2[Math.floor(Math.random() * newArr2.length)];
                                            console.log(comVal);
                                            for (let z = 0; z < arr.length; z++) {
                                                if(comVal === undefined && arr[z] !== "X" && arr[z] !== "O") {
                                                    setTimeout(() => {
                                                        arr[z] = "O";
                                                        document.getElementById(`grid${z}`).innerText = "O";
                                                        if (Owins()) {
                                                        gameOutcome.appendChild(outcomeTextO);
                                                        container.appendChild(gameOutcome);
                                                        PlayerTurn.innerHTML = "Player O win";
                                                        OscoreVal += 1;
                                                        Oscore.innerText = `${OscoreVal}`
                                                        }
                                                        else {
                                                            player = 1;
                                                            PlayerTurn.innerHTML = "Player X turn";
                                                        }
                                                    }, 1000);
                                                    return
                                                }
                                                else if(arr[z] === comVal) {
                                                    setTimeout(() => {
                                                        arr[z] = "O";
                                                        document.getElementById(`grid${z}`).innerText = "O";
                                                        if (Owins()) {
                                                        gameOutcome.appendChild(outcomeTextO);
                                                        container.appendChild(gameOutcome);
                                                        PlayerTurn.innerHTML = "Player O win";
                                                        OscoreVal += 1;
                                                        Oscore.innerText = `${OscoreVal}`
                                                        }
                                                        else {
                                                            player = 1;
                                                            PlayerTurn.innerHTML = "Player X turn";
                                                        }
                                                    }, 1000);
                                                    
                                                } 
                                            }
                                        }
                                    }
                                    else if (i === 5){
                                        if(arr[0] === "O" && arr[1] === "O" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}
                                        else if(arr[1] === "O" && arr[2] === "O" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}
                                        else if(arr[2] === "O" && arr[0] === "O" && arr[1] === 1) {setTimeout(() => {arr[1] = "O"; document.getElementById('grid1').innerText = "O";}, 1000); setTime()}

                                        else if(arr[0] === "O" && arr[4] === "O" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[0] === "O" && arr[8] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[8] === "O" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}

                                        else if(arr[0] === "O" && arr[3] === "O" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[3] === "O" && arr[6] === "O" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}
                                        else if(arr[6] === "O" && arr[0] === "O" && arr[3] === 3) {setTimeout(() => {arr[3] = "O"; document.getElementById('grid3').innerText = "O";}, 1000); setTime()}

                                        else if(arr[2] === "O" && arr[4] === "O" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[6] === "O" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}
                                        else if(arr[6] === "O" && arr[2] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}

                                        else if(arr[1] === "O" && arr[4] === "O" && arr[7] === 7) {setTimeout(() => {arr[7] = "O"; document.getElementById('grid7').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[7] === "O" && arr[1] === 1) {setTimeout(() => {arr[1] = "O"; document.getElementById('grid1').innerText = "O";}, 1000); setTime()}
                                        else if(arr[7] === "O" && arr[1] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}

                                        else if(arr[6] === "O" && arr[7] === "O" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[7] === "O" && arr[8] === "O" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[8] === "O" && arr[6] === "O" && arr[7] === 7) {setTimeout(() => {arr[7] = "O"; document.getElementById('grid7').innerText = "O";}, 1000); setTime()}

                                        else if(arr[2] === "X" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[8] === "X" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}
                                        else if(arr[3] === "X" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "X" && arr[3] === 3) {setTimeout(() => {arr[3] = "O"; document.getElementById('grid3').innerText = "O";}, 1000); setTime()}
                                        
                                        else {
                                            let newArr = [arr[2], arr[3], arr[4], arr[8]];
                                            
                                            let newArr2 = [];
                                            
                                            newArr2 = newArr.filter((i) => typeof(i) === "number");
                                            let comVal = newArr2[Math.floor(Math.random() * newArr2.length)];
                                            console.log(comVal);
                                            for (let z = 0; z < arr.length; z++) {
                                                if(comVal === undefined && arr[z] !== "X" && arr[z] !== "O") {
                                                    setTimeout(() => {
                                                        arr[z] = "O";
                                                        document.getElementById(`grid${z}`).innerText = "O";
                                                        if (Owins()) {
                                                        gameOutcome.appendChild(outcomeTextO);
                                                        container.appendChild(gameOutcome);
                                                        PlayerTurn.innerHTML = "Player O win";
                                                        OscoreVal += 1;
                                                        Oscore.innerText = `${OscoreVal}`
                                                        }
                                                        else {
                                                            player = 1;
                                                            PlayerTurn.innerHTML = "Player X turn";
                                                        }
                                                    }, 1000);
                                                    return
                                                }
                                                else if(arr[z] === comVal) {
                                                    setTimeout(() => {
                                                        arr[z] = "O";
                                                        document.getElementById(`grid${z}`).innerText = "O";
                                                        if (Owins()) {
                                                            gameOutcome.appendChild(outcomeTextO);
                                                            container.appendChild(gameOutcome);
                                                            PlayerTurn.innerHTML = "Player O win";
                                                            OscoreVal += 1;
                                                            Oscore.innerText = `${OscoreVal}`
                                                        }
                                                        else {
                                                            player = 1;
                                                            PlayerTurn.innerHTML = "Player X turn";
                                                        }
                                                    }, 1000);
                                                    
                                                } 
                                            }
                                        }
                                    }
                                    else if (i === 6){
                                        if(arr[0] === "O" && arr[1] === "O" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}
                                        else if(arr[1] === "O" && arr[2] === "O" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}
                                        else if(arr[2] === "O" && arr[0] === "O" && arr[1] === 1) {setTimeout(() => {arr[1] = "O"; document.getElementById('grid1').innerText = "O";}, 1000); setTime()}

                                        else if(arr[2] === "O" && arr[5] === "O" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[2] === "O" && arr[8] === "O" && arr[5] === 5) {setTimeout(() => {arr[5] = "O"; document.getElementById('grid5').innerText = "O";}, 1000); setTime()}
                                        else if(arr[5] === "O" && arr[8] === "O" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}

                                        else if(arr[1] === "O" && arr[4] === "O" && arr[7] === 7) {setTimeout(() => {arr[7] = "O"; document.getElementById('grid7').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[7] === "O" && arr[1] === 1) {setTimeout(() => {arr[1] = "O"; document.getElementById('grid1').innerText = "O";}, 1000); setTime()}
                                        else if(arr[7] === "O" && arr[1] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}

                                        else if(arr[3] === "O" && arr[4] === "O" && arr[5] === 5) {setTimeout(() => {arr[5] = "O"; document.getElementById('grid5').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[5] === "O" && arr[3] === 3) {setTimeout(() => {arr[3] = "O"; document.getElementById('grid3').innerText = "O";}, 1000); setTime()}
                                        else if(arr[5] === "O" && arr[3] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}

                                        else if(arr[0] === "O" && arr[4] === "O" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[0] === "O" && arr[8] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[8] === "O" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}

                                        else if(arr[4] === "X" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}
                                        else if(arr[2] === "X" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}
                                        else if(arr[3] === "X" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}
                                        else if(arr[0] === "X" && arr[3] === 3) {setTimeout(() => {arr[3] = "O"; document.getElementById('grid3').innerText = "O";}, 1000); setTime()}
                                        else if(arr[7] === "X" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[8] === "X" && arr[7] === 7) {setTimeout(() => {arr[7] = "O"; document.getElementById('grid7').innerText = "O";}, 1000); setTime()}

                                        else {
                                            let newArr = [arr[0], arr[2], arr[3], arr[4], arr[7], arr[8]];
                                            
                                            let newArr2 = [];
                                            
                                            newArr2 = newArr.filter((i) => typeof(i) === "number");
                                            let comVal = newArr2[Math.floor(Math.random() * newArr2.length)];
                                            console.log(comVal);
                                            for (let z = 0; z < arr.length; z++) {
                                                if(comVal === undefined && arr[z] !== "X" && arr[z] !== "O") {
                                                    setTimeout(() => {
                                                        arr[z] = "O";
                                                        document.getElementById(`grid${z}`).innerText = "O";
                                                        if (Owins()) {
                                                        gameOutcome.appendChild(outcomeTextO);
                                                        container.appendChild(gameOutcome);
                                                        PlayerTurn.innerHTML = "Player O win";
                                                        OscoreVal += 1;
                                                        Oscore.innerText = `${OscoreVal}`
                                                        }
                                                        else {
                                                            player = 1;
                                                            PlayerTurn.innerHTML = "Player X turn";
                                                        }
                                                    }, 1000);
                                                    return
                                                }
                                                else if(arr[z] === comVal) {
                                                    setTimeout(() => {
                                                        arr[z] = "O";
                                                        document.getElementById(`grid${z}`).innerText = "O";
                                                        if (Owins()) {
                                                            gameOutcome.appendChild(outcomeTextO);
                                                            container.appendChild(gameOutcome);
                                                            PlayerTurn.innerHTML = "Player O win";
                                                            OscoreVal += 1;
                                                            Oscore.innerText = `${OscoreVal}`
                                                        }
                                                        else {
                                                            player = 1;
                                                            PlayerTurn.innerHTML = "Player X turn";
                                                        }
                                                    }, 1000);
                                                
                                                } 
                                            }
                                        }
                                    }
                                    else if (i === 7){
                                        if(arr[0] === "O" && arr[1] === "O" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}
                                        else if(arr[1] === "O" && arr[2] === "O" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}
                                        else if(arr[2] === "O" && arr[0] === "O" && arr[1] === 1) {setTimeout(() => {arr[1] = "O"; document.getElementById('grid1').innerText = "O";}, 1000); setTime()}

                                        else if(arr[0] === "O" && arr[4] === "O" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[0] === "O" && arr[8] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[8] === "O" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}

                                        else if(arr[0] === "O" && arr[3] === "O" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[3] === "O" && arr[6] === "O" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}
                                        else if(arr[6] === "O" && arr[0] === "O" && arr[3] === 3) {setTimeout(() => {arr[3] = "O"; document.getElementById('grid3').innerText = "O";}, 1000); setTime()}

                                        else if(arr[2] === "O" && arr[4] === "O" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[6] === "O" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}
                                        else if(arr[6] === "O" && arr[2] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}

                                        else if(arr[2] === "O" && arr[5] === "O" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[2] === "O" && arr[8] === "O" && arr[5] === 5) {setTimeout(() => {arr[5] = "O"; document.getElementById('grid5').innerText = "O";}, 1000); setTime()}
                                        else if(arr[5] === "O" && arr[8] === "O" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}

                                        else if(arr[3] === "O" && arr[4] === "O" && arr[5] === 5) {setTimeout(() => {arr[5] = "O"; document.getElementById('grid5').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[5] === "O" && arr[3] === 3) {setTimeout(() => {arr[3] = "O"; document.getElementById('grid3').innerText = "O";}, 1000); setTime()}
                                        else if(arr[5] === "O" && arr[3] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}

                                        else if(arr[6] === "X" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[8] === "X" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[1] === "X" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "X" && arr[1] === 1) {setTimeout(() => {arr[1] = "O"; document.getElementById('grid1').innerText = "O";}, 1000); setTime()}
                                        
                                        else {
                                            let newArr = [arr[1], arr[4], arr[6], arr[8]];
                                            
                                            let newArr2 = [];
                                            
                                            newArr2 = newArr.filter((i) => typeof(i) === "number");
                                            let comVal = newArr2[Math.floor(Math.random() * newArr2.length)];
                                            console.log(comVal);
                                            for (let z = 0; z < arr.length; z++) {
                                                if(comVal === undefined && arr[z] !== "X" && arr[z] !== "O") {
                                                    setTimeout(() => {
                                                        arr[z] = "O";
                                                        document.getElementById(`grid${z}`).innerText = "O";
                                                        if (Owins()) {
                                                        gameOutcome.appendChild(outcomeTextO);
                                                        container.appendChild(gameOutcome);
                                                        PlayerTurn.innerHTML = "Player O win";
                                                        OscoreVal += 1;
                                                        Oscore.innerText = `${OscoreVal}`
                                                        }
                                                        else {
                                                            player = 1;
                                                            PlayerTurn.innerHTML = "Player X turn";
                                                        }
                                                    }, 1000);
                                                    return
                                                }
                                                else if(arr[z] === comVal) {
                                                    setTimeout(() => {
                                                        arr[z] = "O";
                                                        document.getElementById(`grid${z}`).innerText = "O";
                                                        if (Owins()) {
                                                            gameOutcome.appendChild(outcomeTextO);
                                                            container.appendChild(gameOutcome);
                                                            PlayerTurn.innerHTML = "Player O win";
                                                            OscoreVal += 1;
                                                            Oscore.innerText = `${OscoreVal}`
                                                        }
                                                        else {
                                                            player = 1;
                                                            PlayerTurn.innerHTML = "Player X turn";
                                                        }
                                                    }, 1000);
                                                    
                                                } 
                                            }
                                        }
                                    }
                                    else if (i === 8){
                                        if(arr[0] === "O" && arr[1] === "O" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}
                                        else if(arr[1] === "O" && arr[2] === "O" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}
                                        else if(arr[2] === "O" && arr[0] === "O" && arr[1] === 1) {setTimeout(() => {arr[1] = "O"; document.getElementById('grid1').innerText = "O";}, 1000); setTime()}

                                        else if(arr[2] === "O" && arr[4] === "O" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[6] === "O" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}
                                        else if(arr[6] === "O" && arr[2] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}

                                        else if(arr[1] === "O" && arr[4] === "O" && arr[7] === 7) {setTimeout(() => {arr[7] = "O"; document.getElementById('grid7').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[7] === "O" && arr[1] === 1) {setTimeout(() => {arr[1] = "O"; document.getElementById('grid1').innerText = "O";}, 1000); setTime()}
                                        else if(arr[7] === "O" && arr[1] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}

                                        else if(arr[3] === "O" && arr[4] === "O" && arr[5] === 5) {setTimeout(() => {arr[5] = "O"; document.getElementById('grid5').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[5] === "O" && arr[3] === 3) {setTimeout(() => {arr[3] = "O"; document.getElementById('grid3').innerText = "O";}, 1000); setTime()}
                                        else if(arr[5] === "O" && arr[3] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}

                                        else if(arr[0] === "O" && arr[3] === "O" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[3] === "O" && arr[6] === "O" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}
                                        else if(arr[6] === "O" && arr[0] === "O" && arr[3] === 3) {setTimeout(() => {arr[3] = "O"; document.getElementById('grid3').innerText = "O";}, 1000); setTime()}

                                        else if(arr[4] === "X" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}
                                        else if(arr[0] === "X" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}
                                        else if(arr[2] === "X" && arr[5] === 5) {setTimeout(() => {arr[5] = "O"; document.getElementById('grid5').innerText = "O";}, 1000); setTime()}
                                        else if(arr[5] === "X" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}
                                        else if(arr[7] === "X" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[6] === "X" && arr[7] === 7) {setTimeout(() => {arr[7] = "O"; document.getElementById('grid7').innerText = "O";}, 1000); setTime()}

                                        else {
                                            let newArr = [arr[0], arr[2], arr[4], arr[5], arr[6], arr[7]];
                                            
                                            let newArr2 = [];
                                            
                                            newArr2 = newArr.filter((i) => typeof(i) === "number");
                                            let comVal = newArr2[Math.floor(Math.random() * newArr2.length)];
                                            console.log(comVal);
                                            for (let z = 0; z < arr.length; z++) {
                                                if(comVal === undefined && arr[z] !== "X" && arr[z] !== "O") {
                                                    setTimeout(() => {
                                                        arr[z] = "O";
                                                        document.getElementById(`grid${z}`).innerText = "O";
                                                        if (Owins()) {
                                                        gameOutcome.appendChild(outcomeTextO);
                                                        container.appendChild(gameOutcome);
                                                        PlayerTurn.innerHTML = "Player O win";
                                                        OscoreVal += 1;
                                                        Oscore.innerText = `${OscoreVal}`
                                                        }
                                                        else {
                                                            player = 1;
                                                            PlayerTurn.innerHTML = "Player X turn";
                                                        }
                                                    }, 1000);
                                                    return
                                                }
                                                else if(arr[z] === comVal) {
                                                    setTimeout(() => {
                                                        arr[z] = "O";
                                                        document.getElementById(`grid${z}`).innerText = "O";
                                                        if (Owins()) {
                                                            gameOutcome.appendChild(outcomeTextO);
                                                            container.appendChild(gameOutcome);
                                                            PlayerTurn.innerHTML = "Player O win";
                                                            OscoreVal += 1;
                                                            Oscore.innerText = `${OscoreVal}`
                                                        }
                                                        else {
                                                            player = 1;
                                                            PlayerTurn.innerHTML = "Player X turn";
                                                        }
                                                    }, 1000);
                                                
                                                } 
                                            }
                                        }
                                    }
                                };
                            }
                        } 
                       
                    })
                })

                //SERHGJAEHJKGGHFGJGDFDGSFGHSHARTHSTHSJDGHJDGHDGHXFGNSFGHFDHGFHSFGHFGSAAQERWHGFNDGFNHNCVBNNGHJGFKUOLFHM
                //DIFFICULTY: HARD;

                comHard.addEventListener('change', () => {
                    restartGame();

                    function setTime() {setTimeout(() => {
                        if (Owins()) {
                        gameOutcome.appendChild(outcomeTextO);
                        container.appendChild(gameOutcome);
                        PlayerTurn.innerHTML = "Player O win";
                        OscoreVal += 1;
                        Oscore.innerText = `${OscoreVal}`
                        }
                        else {
                            player = 1;
                            PlayerTurn.innerHTML = "Player X turn";
                        }
                        }, 1000);
                    }
                   
                    grid.addEventListener('click', () => {
                
                        if(gameOutcome.innerHTML === '' && comHard.checked) {
                            if (player === 1 && arr[i] !== "X" && arr[i] !== "O") {
                                arr[i] = "X";
                                grid.innerText = "X";
                                player = 2;
                                
                                if(Xwins()) {
                                    gameOutcome.appendChild(outcomeTextX);
                                    container.appendChild(gameOutcome);
                                    PlayerTurn.innerHTML = "Player X win";
                                    XscoreVal += 1;
                                    Xscore.innerHTML = `${XscoreVal}`
                                }
                                
                                else if (Draw()) {
                                    gameOutcome.appendChild(outcomeTextD);
                                    container.appendChild(gameOutcome);
                                    PlayerTurn.innerHTML = "Draw";
                                }
                                else {
                                    PlayerTurn.innerHTML = "Player O turn";
                                    if (i === 0){
                                        if(arr[1] === "O" && arr[4] === "O" && arr[7] === 7) {setTimeout(() => {arr[7] = "O"; document.getElementById('grid7').innerText = "O";}, 1000); setTime()}
                                        else if(arr[1] === "O" && arr[7] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[7] === "O" && arr[1] === 1) {setTimeout(() => {arr[1] = "O"; document.getElementById('grid1').innerText = "O";}, 1000); setTime()}

                                        else if(arr[2] === "O" && arr[5] === "O" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[2] === "O" && arr[8] === "O" && arr[5] === 5) {setTimeout(() => {arr[5] = "O"; document.getElementById('grid5').innerText = "O";}, 1000); setTime()}
                                        else if(arr[5] === "O" && arr[8] === "O" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}

                                        else if(arr[2] === "O" && arr[4] === "O" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[6] === "O" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}
                                        else if(arr[6] === "O" && arr[2] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}

                                        else if(arr[3] === "O" && arr[4] === "O" && arr[5] === 5) {setTimeout(() => {arr[5] = "O"; document.getElementById('grid5').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[5] === "O" && arr[3] === 3) {setTimeout(() => {arr[3] = "O"; document.getElementById('grid3').innerText = "O";}, 1000); setTime()}
                                        else if(arr[5] === "O" && arr[3] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}

                                        else if(arr[6] === "O" && arr[7] === "O" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[7] === "O" && arr[8] === "O" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[8] === "O" && arr[6] === "O" && arr[7] === 7) {setTimeout(() => {arr[7] = "O"; document.getElementById('grid7').innerText = "O";}, 1000); setTime()}

                                        else if(arr[1] === "X" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}
                                        else if(arr[2] === "X" && arr[1] === 1) {setTimeout(() => {arr[1] = "O"; document.getElementById('grid1').innerText = "O";}, 1000); setTime()}
                                        else if(arr[3] === "X" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[6] === "X" && arr[3] === 3) {setTimeout(() => {arr[3] = "O"; document.getElementById('grid3').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "X" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[8] === "X" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}

                                        else {
                                            if(arr[4] === 4){
                                                setTimeout(() => {
                                                    arr[4] = "O";
                                                    document.getElementById(`grid4`).innerText = "O";
                                                    if (Owins()) {
                                                    gameOutcome.appendChild(outcomeTextO);
                                                    container.appendChild(gameOutcome);
                                                    PlayerTurn.innerHTML = "Player O win";
                                                    OscoreVal += 1;
                                                    Oscore.innerText = `${OscoreVal}`
                                                    }
                                                    else {
                                                        player = 1;
                                                        PlayerTurn.innerHTML = "Player X turn";
                                                    }
                                                }, 1000);
                                            }
                                            else {
                                                let newArr =  [arr[2], arr[6], arr[8]];
                                                let newArr2 = [];
                                                
                                                newArr2 = newArr.filter((i) => typeof(i) === "number");
                                                let comVal = newArr2[Math.floor(Math.random() * newArr2.length)];
                                                for (let z = 0; z < arr.length; z++) {
                                                    if(comVal === undefined && arr[z] !== "X" && arr[z] !== "O") {
                                                        setTimeout(() => {
                                                            arr[z] = "O";
                                                            document.getElementById(`grid${z}`).innerText = "O";
                                                        
                                                            if (Owins()) {
                                                            gameOutcome.appendChild(outcomeTextO);
                                                            container.appendChild(gameOutcome);
                                                            PlayerTurn.innerHTML = "Player O win";
                                                            OscoreVal += 1;
                                                            Oscore.innerText = `${OscoreVal}`
                                                            }
                                                            else {
                                                                player = 1;
                                                                PlayerTurn.innerHTML = "Player X turn";
                                                            }
                                                        }, 1000);
                                                        return
                                                    }
                                                    else if(arr[z] === comVal) {
                                                        setTimeout(() => {
                                                            arr[z] = "O";
                                                            document.getElementById(`grid${z}`).innerText = "O";
                                                            if (Owins()) {
                                                            gameOutcome.appendChild(outcomeTextO);
                                                            container.appendChild(gameOutcome);
                                                            PlayerTurn.innerHTML = "Player O win";
                                                            OscoreVal += 1;
                                                            Oscore.innerText = `${OscoreVal}`
                                                            }
                                                            else {
                                                                player = 1;
                                                                PlayerTurn.innerHTML = "Player X turn";
                                                            }
                                                        }, 1000);
                                                        
                                                    } 
                                                }
                                            }
                                            
                                        }
                                    }
                                    else if (i === 1){
                                        if(arr[0] === "O" && arr[3] === "O" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[3] === "O" && arr[6] === "O" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}
                                        else if(arr[6] === "O" && arr[0] === "O" && arr[3] === 3) {setTimeout(() => {arr[3] = "O"; document.getElementById('grid3').innerText = "O";}, 1000); setTime()}

                                        else if(arr[0] === "O" && arr[4] === "O" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[0] === "O" && arr[8] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[8] === "O" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}

                                        else if(arr[2] === "O" && arr[5] === "O" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[2] === "O" && arr[8] === "O" && arr[5] === 5) {setTimeout(() => {arr[5] = "O"; document.getElementById('grid5').innerText = "O";}, 1000); setTime()}
                                        else if(arr[5] === "O" && arr[8] === "O" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}

                                        else if(arr[2] === "O" && arr[4] === "O" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[6] === "O" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}
                                        else if(arr[6] === "O" && arr[2] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}

                                        else if(arr[3] === "O" && arr[4] === "O" && arr[5] === 5) {setTimeout(() => {arr[5] = "O"; document.getElementById('grid5').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[5] === "O" && arr[3] === 3) {setTimeout(() => {arr[3] = "O"; document.getElementById('grid3').innerText = "O";}, 1000); setTime()}
                                        else if(arr[5] === "O" && arr[3] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}

                                        else if(arr[6] === "O" && arr[7] === "O" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[7] === "O" && arr[8] === "O" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[8] === "O" && arr[6] === "O" && arr[7] === 7) {setTimeout(() => {arr[7] = "O"; document.getElementById('grid7').innerText = "O";}, 1000); setTime()}

                                        else if(arr[0] === "X" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}
                                        else if(arr[2] === "X" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "X" && arr[7] === 7) {setTimeout(() => {arr[7] = "O"; document.getElementById('grid7').innerText = "O";}, 1000); setTime()}
                                        else if(arr[7] === "X" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}
                                        
                                        else {
                                            if(arr[4] === 4){
                                                setTimeout(() => {
                                                    arr[4] = "O";
                                                    document.getElementById(`grid4`).innerText = "O";
                                                    if (Owins()) {
                                                    gameOutcome.appendChild(outcomeTextO);
                                                    container.appendChild(gameOutcome);
                                                    PlayerTurn.innerHTML = "Player O win";
                                                    OscoreVal += 1;
                                                    Oscore.innerText = `${OscoreVal}`
                                                    }
                                                    else {
                                                        player = 1;
                                                        PlayerTurn.innerHTML = "Player X turn";
                                                    }
                                                }, 1000);
                                            }
                                            else {
                                                let newArr =  [arr[0], arr[2], arr[6], arr[8]];
                                                let newArr2 = [];
                                                
                                                newArr2 = newArr.filter((i) => typeof(i) === "number");
                                                let comVal = newArr2[Math.floor(Math.random() * newArr2.length)];
                                                for (let z = 0; z < arr.length; z++) {
                                                    if(comVal === undefined && arr[z] !== "X" && arr[z] !== "O") {
                                                        setTimeout(() => {
                                                            arr[z] = "O";
                                                            document.getElementById(`grid${z}`).innerText = "O";
                                                        
                                                            if (Owins()) {
                                                            gameOutcome.appendChild(outcomeTextO);
                                                            container.appendChild(gameOutcome);
                                                            PlayerTurn.innerHTML = "Player O win";
                                                            OscoreVal += 1;
                                                            Oscore.innerText = `${OscoreVal}`
                                                            }
                                                            else {
                                                                player = 1;
                                                                PlayerTurn.innerHTML = "Player X turn";
                                                            }
                                                        }, 1000);
                                                        return
                                                    }
                                                    else if(arr[z] === comVal) {
                                                        setTimeout(() => {
                                                            arr[z] = "O";
                                                            document.getElementById(`grid${z}`).innerText = "O";
                                                            if (Owins()) {
                                                            gameOutcome.appendChild(outcomeTextO);
                                                            container.appendChild(gameOutcome);
                                                            PlayerTurn.innerHTML = "Player O win";
                                                            OscoreVal += 1;
                                                            Oscore.innerText = `${OscoreVal}`
                                                            }
                                                            else {
                                                                player = 1;
                                                                PlayerTurn.innerHTML = "Player X turn";
                                                            }
                                                        }, 1000);
                                                        
                                                    } 
                                                }
                                            }
                                        }
                                        
                                    }
                                    else if (i === 2){
                                        if(arr[0] === "O" && arr[3] === "O" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[3] === "O" && arr[6] === "O" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}
                                        else if(arr[6] === "O" && arr[0] === "O" && arr[3] === 3) {setTimeout(() => {arr[3] = "O"; document.getElementById('grid3').innerText = "O";}, 1000); setTime()}

                                        else if(arr[0] === "O" && arr[4] === "O" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[0] === "O" && arr[8] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[8] === "O" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}

                                        else if(arr[1] === "O" && arr[4] === "O" && arr[7] === 7) {setTimeout(() => {arr[7] = "O"; document.getElementById('grid7').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[7] === "O" && arr[1] === 1) {setTimeout(() => {arr[1] = "O"; document.getElementById('grid1').innerText = "O";}, 1000); setTime()}
                                        else if(arr[7] === "O" && arr[1] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}

                                        else if(arr[3] === "O" && arr[4] === "O" && arr[5] === 5) {setTimeout(() => {arr[5] = "O"; document.getElementById('grid5').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[5] === "O" && arr[3] === 3) {setTimeout(() => {arr[3] = "O"; document.getElementById('grid3').innerText = "O";}, 1000); setTime()}
                                        else if(arr[5] === "O" && arr[3] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}

                                        else if(arr[6] === "O" && arr[7] === "O" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[7] === "O" && arr[8] === "O" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[8] === "O" && arr[6] === "O" && arr[7] === 7) {setTimeout(() => {arr[7] = "O"; document.getElementById('grid7').innerText = "O";}, 1000); setTime()}

                                        else if(arr[0] === "X" && arr[1] === 1) {setTimeout(() => {arr[1] = "O"; document.getElementById('grid1').innerText = "O";}, 1000); setTime()}
                                        else if(arr[1] === "X" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "X" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[6] === "X" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}
                                        else if(arr[5] === "X" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[8] === "X" && arr[5] === 5) {setTimeout(() => {arr[5] = "O"; document.getElementById('grid5').innerText = "O";}, 1000); setTime()}
                                        
                                        else {
                                            if(arr[4] === 4){
                                                setTimeout(() => {
                                                    arr[4] = "O";
                                                    document.getElementById(`grid4`).innerText = "O";
                                                    if (Owins()) {
                                                    gameOutcome.appendChild(outcomeTextO);
                                                    container.appendChild(gameOutcome);
                                                    PlayerTurn.innerHTML = "Player O win";
                                                    OscoreVal += 1;
                                                    Oscore.innerText = `${OscoreVal}`
                                                    }
                                                    else {
                                                        player = 1;
                                                        PlayerTurn.innerHTML = "Player X turn";
                                                    }
                                                }, 1000);
                                            }
                                            else {
                                                let newArr =  [arr[0], arr[6], arr[8]];
                                                let newArr2 = [];
                                                
                                                newArr2 = newArr.filter((i) => typeof(i) === "number");
                                                let comVal = newArr2[Math.floor(Math.random() * newArr2.length)];
                                                for (let z = 0; z < arr.length; z++) {
                                                    if(comVal === undefined && arr[z] !== "X" && arr[z] !== "O") {
                                                        setTimeout(() => {
                                                            arr[z] = "O";
                                                            document.getElementById(`grid${z}`).innerText = "O";
                                                        
                                                            if (Owins()) {
                                                            gameOutcome.appendChild(outcomeTextO);
                                                            container.appendChild(gameOutcome);
                                                            PlayerTurn.innerHTML = "Player O win";
                                                            OscoreVal += 1;
                                                            Oscore.innerText = `${OscoreVal}`
                                                            }
                                                            else {
                                                                player = 1;
                                                                PlayerTurn.innerHTML = "Player X turn";
                                                            }
                                                        }, 1000);
                                                        return
                                                    }
                                                    else if(arr[z] === comVal) {
                                                        setTimeout(() => {
                                                            arr[z] = "O";
                                                            document.getElementById(`grid${z}`).innerText = "O";
                                                            if (Owins()) {
                                                            gameOutcome.appendChild(outcomeTextO);
                                                            container.appendChild(gameOutcome);
                                                            PlayerTurn.innerHTML = "Player O win";
                                                            OscoreVal += 1;
                                                            Oscore.innerText = `${OscoreVal}`
                                                            }
                                                            else {
                                                                player = 1;
                                                                PlayerTurn.innerHTML = "Player X turn";
                                                            }
                                                        }, 1000);
                                                        
                                                    } 
                                                }
                                            }
                                        }
                                    }
                                    else if (i === 3){
                                        if(arr[0] === "O" && arr[1] === "O" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}
                                        else if(arr[1] === "O" && arr[2] === "O" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}
                                        else if(arr[2] === "O" && arr[0] === "O" && arr[1] === 1) {setTimeout(() => {arr[1] = "O"; document.getElementById('grid1').innerText = "O";}, 1000); setTime()}

                                        else if(arr[0] === "O" && arr[4] === "O" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[0] === "O" && arr[8] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[8] === "O" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}

                                        else if(arr[2] === "O" && arr[5] === "O" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[2] === "O" && arr[8] === "O" && arr[5] === 5) {setTimeout(() => {arr[5] = "O"; document.getElementById('grid5').innerText = "O";}, 1000); setTime()}
                                        else if(arr[5] === "O" && arr[8] === "O" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}

                                        else if(arr[2] === "O" && arr[4] === "O" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[6] === "O" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}
                                        else if(arr[6] === "O" && arr[2] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}

                                        else if(arr[1] === "O" && arr[4] === "O" && arr[7] === 7) {setTimeout(() => {arr[7] = "O"; document.getElementById('grid7').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[7] === "O" && arr[1] === 1) {setTimeout(() => {arr[1] = "O"; document.getElementById('grid1').innerText = "O";}, 1000); setTime()}
                                        else if(arr[7] === "O" && arr[1] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}

                                        else if(arr[6] === "O" && arr[7] === "O" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[7] === "O" && arr[8] === "O" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[8] === "O" && arr[6] === "O" && arr[7] === 7) {setTimeout(() => {arr[7] = "O"; document.getElementById('grid7').innerText = "O";}, 1000); setTime()}

                                        else if(arr[0] === "X" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[6] === "X" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "X" && arr[5] === 5) {setTimeout(() => {arr[5] = "O"; document.getElementById('grid5').innerText = "O";}, 1000); setTime()}
                                        else if(arr[5] === "X" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}
                                        
                                        else {
                                            if(arr[4] === 4){
                                                setTimeout(() => {
                                                    arr[4] = "O";
                                                    document.getElementById(`grid4`).innerText = "O";
                                                    if (Owins()) {
                                                    gameOutcome.appendChild(outcomeTextO);
                                                    container.appendChild(gameOutcome);
                                                    PlayerTurn.innerHTML = "Player O win";
                                                    OscoreVal += 1;
                                                    Oscore.innerText = `${OscoreVal}`
                                                    }
                                                    else {
                                                        player = 1;
                                                        PlayerTurn.innerHTML = "Player X turn";
                                                    }
                                                }, 1000);
                                            }
                                            else {
                                                let newArr =  [arr[0], arr[2], arr[6], arr[8]];
                                                let newArr2 = [];
                                                
                                                newArr2 = newArr.filter((i) => typeof(i) === "number");
                                                let comVal = newArr2[Math.floor(Math.random() * newArr2.length)];
                                                for (let z = 0; z < arr.length; z++) {
                                                    if(comVal === undefined && arr[z] !== "X" && arr[z] !== "O") {
                                                        setTimeout(() => {
                                                            arr[z] = "O";
                                                            document.getElementById(`grid${z}`).innerText = "O";
                                                        
                                                            if (Owins()) {
                                                            gameOutcome.appendChild(outcomeTextO);
                                                            container.appendChild(gameOutcome);
                                                            PlayerTurn.innerHTML = "Player O win";
                                                            OscoreVal += 1;
                                                            Oscore.innerText = `${OscoreVal}`
                                                            }
                                                            else {
                                                                player = 1;
                                                                PlayerTurn.innerHTML = "Player X turn";
                                                            }
                                                        }, 1000);
                                                        return
                                                    }
                                                    else if(arr[z] === comVal) {
                                                        setTimeout(() => {
                                                            arr[z] = "O";
                                                            document.getElementById(`grid${z}`).innerText = "O";
                                                            if (Owins()) {
                                                            gameOutcome.appendChild(outcomeTextO);
                                                            container.appendChild(gameOutcome);
                                                            PlayerTurn.innerHTML = "Player O win";
                                                            OscoreVal += 1;
                                                            Oscore.innerText = `${OscoreVal}`
                                                            }
                                                            else {
                                                                player = 1;
                                                                PlayerTurn.innerHTML = "Player X turn";
                                                            }
                                                        }, 1000);
                                                        
                                                    } 
                                                }
                                            }
                                        }
                                    }
                                    else if (i === 4){
                                        if(arr[0] === "O" && arr[1] === "O" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}
                                        else if(arr[1] === "O" && arr[2] === "O" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}
                                        else if(arr[2] === "O" && arr[0] === "O" && arr[1] === 1) {setTimeout(() => {arr[1] = "O"; document.getElementById('grid1').innerText = "O";}, 1000); setTime()}

                                        else if(arr[0] === "O" && arr[3] === "O" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[3] === "O" && arr[6] === "O" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}
                                        else if(arr[6] === "O" && arr[0] === "O" && arr[3] === 3) {setTimeout(() => {arr[3] = "O"; document.getElementById('grid3').innerText = "O";}, 1000); setTime()}

                                        else if(arr[2] === "O" && arr[5] === "O" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[2] === "O" && arr[8] === "O" && arr[5] === 5) {setTimeout(() => {arr[5] = "O"; document.getElementById('grid5').innerText = "O";}, 1000); setTime()}
                                        else if(arr[5] === "O" && arr[8] === "O" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}

                                        else if(arr[6] === "O" && arr[7] === "O" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[7] === "O" && arr[8] === "O" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[8] === "O" && arr[6] === "O" && arr[7] === 7) {setTimeout(() => {arr[7] = "O"; document.getElementById('grid7').innerText = "O";}, 1000); setTime()}

                                        else if(arr[0] === "X" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[8] === "X" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}
                                        else if(arr[3] === "X" && arr[5] === 5) {setTimeout(() => {arr[5] = "O"; document.getElementById('grid5').innerText = "O";}, 1000); setTime()}
                                        else if(arr[5] === "X" && arr[3] === 3) {setTimeout(() => {arr[3] = "O"; document.getElementById('grid3').innerText = "O";}, 1000); setTime()}
                                        else if(arr[1] === "X" && arr[7] === 7) {setTimeout(() => {arr[7] = "O"; document.getElementById('grid7').innerText = "O";}, 1000); setTime()}
                                        else if(arr[7] === "X" && arr[1] === 1) {setTimeout(() => {arr[1] = "O"; document.getElementById('grid1').innerText = "O";}, 1000); setTime()}
                                        else if(arr[2] === "X" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[6] === "X" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}
                                        
                                        else {
                                            let newArr = [arr[0], arr[2], arr[6], arr[8]];
                                            
                                            let newArr2 = [];
                                            
                                            newArr2 = newArr.filter((i) => typeof(i) === "number");
                                            let comVal = newArr2[Math.floor(Math.random() * newArr2.length)];
                                            console.log(comVal);
                                            for (let z = 0; z < arr.length; z++) {
                                                if(comVal === undefined && arr[z] !== "X" && arr[z] !== "O") {
                                                    setTimeout(() => {
                                                        arr[z] = "O";
                                                        document.getElementById(`grid${z}`).innerText = "O";
                                                        if (Owins()) {
                                                        gameOutcome.appendChild(outcomeTextO);
                                                        container.appendChild(gameOutcome);
                                                        PlayerTurn.innerHTML = "Player O win";
                                                        OscoreVal += 1;
                                                        Oscore.innerText = `${OscoreVal}`
                                                        }
                                                        else {
                                                            player = 1;
                                                            PlayerTurn.innerHTML = "Player X turn";
                                                        }
                                                    }, 1000);
                                                    return
                                                }
                                                else if(arr[z] === comVal) {
                                                    setTimeout(() => {
                                                        arr[z] = "O";
                                                        document.getElementById(`grid${z}`).innerText = "O";
                                                        console.log(arr)
                                                        if (Owins()) {
                                                        gameOutcome.appendChild(outcomeTextO);
                                                        container.appendChild(gameOutcome);
                                                        PlayerTurn.innerHTML = "Player O win";
                                                        OscoreVal += 1;
                                                        Oscore.innerText = `${OscoreVal}`
                                                        }
                                                        else {
                                                            player = 1;
                                                            PlayerTurn.innerHTML = "Player X turn";
                                                        }
                                                    }, 1000);
                                                    return
                                                } 
                                            }
                                        }
                                    }
                                    else if (i === 5){
                                        if(arr[0] === "O" && arr[1] === "O" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}
                                        else if(arr[1] === "O" && arr[2] === "O" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}
                                        else if(arr[2] === "O" && arr[0] === "O" && arr[1] === 1) {setTimeout(() => {arr[1] = "O"; document.getElementById('grid1').innerText = "O";}, 1000); setTime()}

                                        else if(arr[0] === "O" && arr[4] === "O" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[0] === "O" && arr[8] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[8] === "O" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}

                                        else if(arr[0] === "O" && arr[3] === "O" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[3] === "O" && arr[6] === "O" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}
                                        else if(arr[6] === "O" && arr[0] === "O" && arr[3] === 3) {setTimeout(() => {arr[3] = "O"; document.getElementById('grid3').innerText = "O";}, 1000); setTime()}

                                        else if(arr[2] === "O" && arr[4] === "O" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[6] === "O" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}
                                        else if(arr[6] === "O" && arr[2] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}

                                        else if(arr[1] === "O" && arr[4] === "O" && arr[7] === 7) {setTimeout(() => {arr[7] = "O"; document.getElementById('grid7').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[7] === "O" && arr[1] === 1) {setTimeout(() => {arr[1] = "O"; document.getElementById('grid1').innerText = "O";}, 1000); setTime()}
                                        else if(arr[7] === "O" && arr[1] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}

                                        else if(arr[6] === "O" && arr[7] === "O" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[7] === "O" && arr[8] === "O" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[8] === "O" && arr[6] === "O" && arr[7] === 7) {setTimeout(() => {arr[7] = "O"; document.getElementById('grid7').innerText = "O";}, 1000); setTime()}

                                        else if(arr[2] === "X" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[8] === "X" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}
                                        else if(arr[3] === "X" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "X" && arr[3] === 3) {setTimeout(() => {arr[3] = "O"; document.getElementById('grid3').innerText = "O";}, 1000); setTime()}
                                        
                                        else {
                                            if(arr[4] === 4){
                                                setTimeout(() => {
                                                    arr[4] = "O";
                                                    document.getElementById(`grid4`).innerText = "O";
                                                    if (Owins()) {
                                                    gameOutcome.appendChild(outcomeTextO);
                                                    container.appendChild(gameOutcome);
                                                    PlayerTurn.innerHTML = "Player O win";
                                                    OscoreVal += 1;
                                                    Oscore.innerText = `${OscoreVal}`
                                                    }
                                                    else {
                                                        player = 1;
                                                        PlayerTurn.innerHTML = "Player X turn";
                                                    }
                                                }, 1000);
                                            }
                                            else {
                                                let newArr =  [arr[0], arr[2], arr[6], arr[8]];
                                                let newArr2 = [];
                                                
                                                newArr2 = newArr.filter((i) => typeof(i) === "number");
                                                let comVal = newArr2[Math.floor(Math.random() * newArr2.length)];
                                                for (let z = 0; z < arr.length; z++) {
                                                    if(comVal === undefined && arr[z] !== "X" && arr[z] !== "O") {
                                                        setTimeout(() => {
                                                            arr[z] = "O";
                                                            document.getElementById(`grid${z}`).innerText = "O";
                                                        
                                                            if (Owins()) {
                                                            gameOutcome.appendChild(outcomeTextO);
                                                            container.appendChild(gameOutcome);
                                                            PlayerTurn.innerHTML = "Player O win";
                                                            OscoreVal += 1;
                                                            Oscore.innerText = `${OscoreVal}`
                                                            }
                                                            else {
                                                                player = 1;
                                                                PlayerTurn.innerHTML = "Player X turn";
                                                            }
                                                        }, 1000);
                                                        return
                                                    }
                                                    else if(arr[z] === comVal) {
                                                        setTimeout(() => {
                                                            arr[z] = "O";
                                                            document.getElementById(`grid${z}`).innerText = "O";
                                                            if (Owins()) {
                                                            gameOutcome.appendChild(outcomeTextO);
                                                            container.appendChild(gameOutcome);
                                                            PlayerTurn.innerHTML = "Player O win";
                                                            OscoreVal += 1;
                                                            Oscore.innerText = `${OscoreVal}`
                                                            }
                                                            else {
                                                                player = 1;
                                                                PlayerTurn.innerHTML = "Player X turn";
                                                            }
                                                        }, 1000);
                                                        
                                                    } 
                                                }
                                            }
                                        }
                                    }
                                    else if (i === 6){
                                        if(arr[0] === "O" && arr[1] === "O" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}
                                        else if(arr[1] === "O" && arr[2] === "O" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}
                                        else if(arr[2] === "O" && arr[0] === "O" && arr[1] === 1) {setTimeout(() => {arr[1] = "O"; document.getElementById('grid1').innerText = "O";}, 1000); setTime()}

                                        else if(arr[2] === "O" && arr[5] === "O" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[2] === "O" && arr[8] === "O" && arr[5] === 5) {setTimeout(() => {arr[5] = "O"; document.getElementById('grid5').innerText = "O";}, 1000); setTime()}
                                        else if(arr[5] === "O" && arr[8] === "O" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}

                                        else if(arr[1] === "O" && arr[4] === "O" && arr[7] === 7) {setTimeout(() => {arr[7] = "O"; document.getElementById('grid7').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[7] === "O" && arr[1] === 1) {setTimeout(() => {arr[1] = "O"; document.getElementById('grid1').innerText = "O";}, 1000); setTime()}
                                        else if(arr[7] === "O" && arr[1] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}

                                        else if(arr[3] === "O" && arr[4] === "O" && arr[5] === 5) {setTimeout(() => {arr[5] = "O"; document.getElementById('grid5').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[5] === "O" && arr[3] === 3) {setTimeout(() => {arr[3] = "O"; document.getElementById('grid3').innerText = "O";}, 1000); setTime()}
                                        else if(arr[5] === "O" && arr[3] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}

                                        else if(arr[0] === "O" && arr[4] === "O" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[0] === "O" && arr[8] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[8] === "O" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}

                                        else if(arr[4] === "X" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}
                                        else if(arr[2] === "X" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}
                                        else if(arr[3] === "X" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}
                                        else if(arr[0] === "X" && arr[3] === 3) {setTimeout(() => {arr[3] = "O"; document.getElementById('grid3').innerText = "O";}, 1000); setTime()}
                                        else if(arr[7] === "X" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[8] === "X" && arr[7] === 7) {setTimeout(() => {arr[7] = "O"; document.getElementById('grid7').innerText = "O";}, 1000); setTime()}

                                        else {
                                            if(arr[4] === 4){
                                                setTimeout(() => {
                                                    arr[4] = "O";
                                                    document.getElementById(`grid4`).innerText = "O";
                                                    if (Owins()) {
                                                    gameOutcome.appendChild(outcomeTextO);
                                                    container.appendChild(gameOutcome);
                                                    PlayerTurn.innerHTML = "Player O win";
                                                    OscoreVal += 1;
                                                    Oscore.innerText = `${OscoreVal}`
                                                    }
                                                    else {
                                                        player = 1;
                                                        PlayerTurn.innerHTML = "Player X turn";
                                                    }
                                                }, 1000);
                                            }
                                            else {
                                                let newArr =  [arr[0], arr[2], arr[8]];
                                                let newArr2 = [];
                                                
                                                newArr2 = newArr.filter((i) => typeof(i) === "number");
                                                let comVal = newArr2[Math.floor(Math.random() * newArr2.length)];
                                                for (let z = 0; z < arr.length; z++) {
                                                    if(comVal === undefined && arr[z] !== "X" && arr[z] !== "O") {
                                                        setTimeout(() => {
                                                            arr[z] = "O";
                                                            document.getElementById(`grid${z}`).innerText = "O";
                                                        
                                                            if (Owins()) {
                                                            gameOutcome.appendChild(outcomeTextO);
                                                            container.appendChild(gameOutcome);
                                                            PlayerTurn.innerHTML = "Player O win";
                                                            OscoreVal += 1;
                                                            Oscore.innerText = `${OscoreVal}`
                                                            }
                                                            else {
                                                                player = 1;
                                                                PlayerTurn.innerHTML = "Player X turn";
                                                            }
                                                        }, 1000);
                                                        return
                                                    }
                                                    else if(arr[z] === comVal) {
                                                        setTimeout(() => {
                                                            arr[z] = "O";
                                                            document.getElementById(`grid${z}`).innerText = "O";
                                                            if (Owins()) {
                                                            gameOutcome.appendChild(outcomeTextO);
                                                            container.appendChild(gameOutcome);
                                                            PlayerTurn.innerHTML = "Player O win";
                                                            OscoreVal += 1;
                                                            Oscore.innerText = `${OscoreVal}`
                                                            }
                                                            else {
                                                                player = 1;
                                                                PlayerTurn.innerHTML = "Player X turn";
                                                            }
                                                        }, 1000);
                                                        
                                                    } 
                                                }
                                            }
                                        }
                                    }
                                    else if (i === 7){
                                        if(arr[0] === "O" && arr[1] === "O" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}
                                        else if(arr[1] === "O" && arr[2] === "O" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}
                                        else if(arr[2] === "O" && arr[0] === "O" && arr[1] === 1) {setTimeout(() => {arr[1] = "O"; document.getElementById('grid1').innerText = "O";}, 1000); setTime()}

                                        else if(arr[0] === "O" && arr[4] === "O" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[0] === "O" && arr[8] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[8] === "O" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}

                                        else if(arr[0] === "O" && arr[3] === "O" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[3] === "O" && arr[6] === "O" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}
                                        else if(arr[6] === "O" && arr[0] === "O" && arr[3] === 3) {setTimeout(() => {arr[3] = "O"; document.getElementById('grid3').innerText = "O";}, 1000); setTime()}

                                        else if(arr[2] === "O" && arr[4] === "O" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[6] === "O" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}
                                        else if(arr[6] === "O" && arr[2] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}

                                        else if(arr[2] === "O" && arr[5] === "O" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[2] === "O" && arr[8] === "O" && arr[5] === 5) {setTimeout(() => {arr[5] = "O"; document.getElementById('grid5').innerText = "O";}, 1000); setTime()}
                                        else if(arr[5] === "O" && arr[8] === "O" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}

                                        else if(arr[3] === "O" && arr[4] === "O" && arr[5] === 5) {setTimeout(() => {arr[5] = "O"; document.getElementById('grid5').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[5] === "O" && arr[3] === 3) {setTimeout(() => {arr[3] = "O"; document.getElementById('grid3').innerText = "O";}, 1000); setTime()}
                                        else if(arr[5] === "O" && arr[3] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}

                                        else if(arr[6] === "X" && arr[8] === 8) {setTimeout(() => {arr[8] = "O"; document.getElementById('grid8').innerText = "O";}, 1000); setTime()}
                                        else if(arr[8] === "X" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[1] === "X" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "X" && arr[1] === 1) {setTimeout(() => {arr[1] = "O"; document.getElementById('grid1').innerText = "O";}, 1000); setTime()}
                                        
                                        else {
                                            if(arr[4] === 4){
                                                setTimeout(() => {
                                                    arr[4] = "O";
                                                    document.getElementById(`grid4`).innerText = "O";
                                                    if (Owins()) {
                                                    gameOutcome.appendChild(outcomeTextO);
                                                    container.appendChild(gameOutcome);
                                                    PlayerTurn.innerHTML = "Player O win";
                                                    OscoreVal += 1;
                                                    Oscore.innerText = `${OscoreVal}`
                                                    }
                                                    else {
                                                        player = 1;
                                                        PlayerTurn.innerHTML = "Player X turn";
                                                    }
                                                }, 1000);
                                            }
                                            else {
                                                let newArr =  [arr[0], arr[2], arr[6], arr[8]];
                                                let newArr2 = [];
                                                
                                                newArr2 = newArr.filter((i) => typeof(i) === "number");
                                                let comVal = newArr2[Math.floor(Math.random() * newArr2.length)];
                                                for (let z = 0; z < arr.length; z++) {
                                                    if(comVal === undefined && arr[z] !== "X" && arr[z] !== "O") {
                                                        setTimeout(() => {
                                                            arr[z] = "O";
                                                            document.getElementById(`grid${z}`).innerText = "O";
                                                        
                                                            if (Owins()) {
                                                            gameOutcome.appendChild(outcomeTextO);
                                                            container.appendChild(gameOutcome);
                                                            PlayerTurn.innerHTML = "Player O win";
                                                            OscoreVal += 1;
                                                            Oscore.innerText = `${OscoreVal}`
                                                            }
                                                            else {
                                                                player = 1;
                                                                PlayerTurn.innerHTML = "Player X turn";
                                                            }
                                                        }, 1000);
                                                        return
                                                    }
                                                    else if(arr[z] === comVal) {
                                                        setTimeout(() => {
                                                            arr[z] = "O";
                                                            document.getElementById(`grid${z}`).innerText = "O";
                                                            if (Owins()) {
                                                            gameOutcome.appendChild(outcomeTextO);
                                                            container.appendChild(gameOutcome);
                                                            PlayerTurn.innerHTML = "Player O win";
                                                            OscoreVal += 1;
                                                            Oscore.innerText = `${OscoreVal}`
                                                            }
                                                            else {
                                                                player = 1;
                                                                PlayerTurn.innerHTML = "Player X turn";
                                                            }
                                                        }, 1000);
                                                        
                                                    } 
                                                }
                                            }
                                        }
                                    }
                                    else if (i === 8){
                                        if(arr[0] === "O" && arr[1] === "O" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}
                                        else if(arr[1] === "O" && arr[2] === "O" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}
                                        else if(arr[2] === "O" && arr[0] === "O" && arr[1] === 1) {setTimeout(() => {arr[1] = "O"; document.getElementById('grid1').innerText = "O";}, 1000); setTime()}

                                        else if(arr[2] === "O" && arr[4] === "O" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[6] === "O" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}
                                        else if(arr[6] === "O" && arr[2] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}

                                        else if(arr[1] === "O" && arr[4] === "O" && arr[7] === 7) {setTimeout(() => {arr[7] = "O"; document.getElementById('grid7').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[7] === "O" && arr[1] === 1) {setTimeout(() => {arr[1] = "O"; document.getElementById('grid1').innerText = "O";}, 1000); setTime()}
                                        else if(arr[7] === "O" && arr[1] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}

                                        else if(arr[3] === "O" && arr[4] === "O" && arr[5] === 5) {setTimeout(() => {arr[5] = "O"; document.getElementById('grid5').innerText = "O";}, 1000); setTime()}
                                        else if(arr[4] === "O" && arr[5] === "O" && arr[3] === 3) {setTimeout(() => {arr[3] = "O"; document.getElementById('grid3').innerText = "O";}, 1000); setTime()}
                                        else if(arr[5] === "O" && arr[3] === "O" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}

                                        else if(arr[0] === "O" && arr[3] === "O" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[3] === "O" && arr[6] === "O" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}
                                        else if(arr[6] === "O" && arr[0] === "O" && arr[3] === 3) {setTimeout(() => {arr[3] = "O"; document.getElementById('grid3').innerText = "O";}, 1000); setTime()}

                                        else if(arr[4] === "X" && arr[0] === 0) {setTimeout(() => {arr[0] = "O"; document.getElementById('grid0').innerText = "O";}, 1000); setTime()}
                                        else if(arr[0] === "X" && arr[4] === 4) {setTimeout(() => {arr[4] = "O"; document.getElementById('grid4').innerText = "O";}, 1000); setTime()}
                                        else if(arr[2] === "X" && arr[5] === 5) {setTimeout(() => {arr[5] = "O"; document.getElementById('grid5').innerText = "O";}, 1000); setTime()}
                                        else if(arr[5] === "X" && arr[2] === 2) {setTimeout(() => {arr[2] = "O"; document.getElementById('grid2').innerText = "O";}, 1000); setTime()}
                                        else if(arr[7] === "X" && arr[6] === 6) {setTimeout(() => {arr[6] = "O"; document.getElementById('grid6').innerText = "O";}, 1000); setTime()}
                                        else if(arr[6] === "X" && arr[7] === 7) {setTimeout(() => {arr[7] = "O"; document.getElementById('grid7').innerText = "O";}, 1000); setTime()}

                                        else {
                                            if(arr[4] === 4){
                                                setTimeout(() => {
                                                    arr[4] = "O";
                                                    document.getElementById(`grid4`).innerText = "O";
                                                    if (Owins()) {
                                                    gameOutcome.appendChild(outcomeTextO);
                                                    container.appendChild(gameOutcome);
                                                    PlayerTurn.innerHTML = "Player O win";
                                                    OscoreVal += 1;
                                                    Oscore.innerText = `${OscoreVal}`
                                                    }
                                                    else {
                                                        player = 1;
                                                        PlayerTurn.innerHTML = "Player X turn";
                                                    }
                                                }, 1000);
                                            }
                                            else {
                                                let newArr =  [arr[0], arr[2], arr[6]];
                                                let newArr2 = [];
                                                
                                                newArr2 = newArr.filter((i) => typeof(i) === "number");
                                                let comVal = newArr2[Math.floor(Math.random() * newArr2.length)];
                                                for (let z = 0; z < arr.length; z++) {
                                                    if(comVal === undefined && arr[z] !== "X" && arr[z] !== "O") {
                                                        setTimeout(() => {
                                                            arr[z] = "O";
                                                            document.getElementById(`grid${z}`).innerText = "O";
                                                        
                                                            if (Owins()) {
                                                            gameOutcome.appendChild(outcomeTextO);
                                                            container.appendChild(gameOutcome);
                                                            PlayerTurn.innerHTML = "Player O win";
                                                            OscoreVal += 1;
                                                            Oscore.innerText = `${OscoreVal}`
                                                            }
                                                            else {
                                                                player = 1;
                                                                PlayerTurn.innerHTML = "Player X turn";
                                                            }
                                                        }, 1000);
                                                        return
                                                    }
                                                    else if(arr[z] === comVal) {
                                                        setTimeout(() => {
                                                            arr[z] = "O";
                                                            document.getElementById(`grid${z}`).innerText = "O";
                                                            if (Owins()) {
                                                            gameOutcome.appendChild(outcomeTextO);
                                                            container.appendChild(gameOutcome);
                                                            PlayerTurn.innerHTML = "Player O win";
                                                            OscoreVal += 1;
                                                            Oscore.innerText = `${OscoreVal}`
                                                            }
                                                            else {
                                                                player = 1;
                                                                PlayerTurn.innerHTML = "Player X turn";
                                                            }
                                                        }, 1000);
                                                        
                                                    } 
                                                }
                                            }
                                        }
                                    }
                                };
                            }
                        } 
                        // else {
                        //     resetArr();
                        //     resetGrid();
                        //     player = 1;
                        //     gameOutcome.innerHTML = ''
                        //     container.removeChild(gameOutcome);
                        //     PlayerTurn.innerHTML = "Player X turn";
                        // }
                    })
                })

                // ghgjgjgjgjg

                player2.addEventListener('change', () => {
                    restartGame();
                    grid.addEventListener('click', () => {
                
                        if(gameOutcome.innerHTML === '' && player2.checked) {
                            if (player === 1 && arr[i] !== "X" && arr[i] !== "O") {
                                arr[i] = "X";
                                grid.innerText = "X";
                                player = 2;
                                console.log(i)
                                console.log(arr.indexOf(arr[i]));
                                console.log(!arr.includes(0||1));
    
                                if(Xwins()) {
                                    gameOutcome.appendChild(outcomeTextX);
                                    container.appendChild(gameOutcome);
                                    PlayerTurn.innerHTML = "Player X wins";
                                    XscoreVal += 1;
                                    Xscore.innerHTML = `${XscoreVal}`
                                   
                                }
                                else if (Draw()) {
                                    gameOutcome.appendChild(outcomeTextD);
                                    container.appendChild(gameOutcome);
                                    PlayerTurn.innerHTML = "Draw";
                                }
                                else {PlayerTurn.innerHTML = "Player O turn"}
                            }
                            
                            else if(player === 2 && arr[i] !== "X" && arr[i] !== "O") {
                                arr[i] = "O";
                                grid.innerText = "O";
                                player = 1;
                                if(Owins()) {
                                    gameOutcome.appendChild(outcomeTextO);
                                    container.appendChild(gameOutcome);
                                    PlayerTurn.innerHTML = "Player O wins";
                                    OscoreVal += 1;
                                    Oscore.innerText = `${OscoreVal}`
                                }
                                else if(Draw()) {
                                    gameOutcome.appendChild(outcomeTextD);
                                    container.appendChild(gameOutcome);
                                    PlayerTurn.innerHTML = "Draw"
                                }
                                else {PlayerTurn.innerHTML = "Player X turn"};
                            }
                        }

                    })
                })
            })
        }

        
    }
        
        
    displayGrid();

    // function getDisplay() {
    //     return display();
    // }

//     function add(value) {
//         if(typeof value !== 'object') {
//             console.log("please add an object");
//             return
//         }

//         pokemon.push(value)
//     }

//     return {
//         getDisplay,
//         add,
//         displayGrid

//     }
// })()

// setTimeout(() => console.log("set"), 10000);
// pokemonList.add({name: "john"})
// pokemonList.add({name: "James"})
// pokemonList.add({name: "Fati", ability: ["fire", "air"]})
// pokemonList.getDisplay().forEach(element => {
//     console.log(element.name)
// });

// pokemonList.displayGrid();
// console.log('get');

// const nono = (value, callback) => {
//     return callback(value)
// }

// function callMeLater(value) {
//     return value * 3
// }

// console.log(nono(3, callMeLater))


// async function getUsers(names) {
//     const response = await fetch(`https://api.github.com/users/${names}`).then(res => res.json()).then(dat => console.log(dat))

//     // const users = await response.json()

//     // console.log(users)
   
//     // return users]
//     /* your code */
// }


// getUsers(')))s')