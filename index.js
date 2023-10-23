function numberRandomizer(){
    
    var num1 = Math.floor(Math.random() * 6)
    var num2 = Math.floor(Math.random() * 6)
    if (num1>num2){
        document.querySelector("h1").textContent="←Player 1 Wins"
    }
    else if (num1<num2){
        document.querySelector("h1").textContent="Player 2 Wins→"
    }
    else if (num1===num2){
        document.querySelector("h1").textContent="Draw!!"
    }
        
        function dice1uno(){
            document.querySelector(".uno .one").classList.toggle("visibility")
            document.querySelector(".uno .two").classList.toggle("visibility")
            document.querySelector(".uno .three").classList.toggle("visibility")
            document.querySelector(".uno .four").classList.toggle("visibility")
            document.querySelector(".uno .six").classList.toggle("visibility")
            document.querySelector(".uno .seven").classList.toggle("visibility")
            document.querySelector(".uno .eight").classList.toggle("visibility")
            document.querySelector(".uno .nine").classList.toggle("visibility")
        }
        function dice2uno(){
            document.querySelector(".uno .one").classList.toggle("visibility")
            document.querySelector(".uno .two").classList.toggle("visibility")
            document.querySelector(".uno .five").classList.toggle("visibility")
            document.querySelector(".uno .four").classList.toggle("visibility")
            document.querySelector(".uno .six").classList.toggle("visibility")
            document.querySelector(".uno .nine").classList.toggle("visibility")
            document.querySelector(".uno .eight").classList.toggle("visibility")
        }
        function dice3uno(){
            document.querySelector(".uno .one").classList.toggle("visibility")
            document.querySelector(".uno .two").classList.toggle("visibility")
            document.querySelector(".uno .four").classList.toggle("visibility")
            document.querySelector(".uno .six").classList.toggle("visibility")
            document.querySelector(".uno .nine").classList.toggle("visibility")
            document.querySelector(".uno .eight").classList.toggle("visibility")  
        }
        function dice4uno(){
            document.querySelector(".uno .two").classList.toggle("visibility")
            document.querySelector(".uno .four").classList.toggle("visibility")
            document.querySelector(".uno .five").classList.toggle("visibility")
            document.querySelector(".uno .six").classList.toggle("visibility")
            document.querySelector(".uno .eight").classList.toggle("visibility")
        }
        function dice5uno(){
            document.querySelector(".uno .two").classList.toggle("visibility")
            document.querySelector(".uno .four").classList.toggle("visibility")
            document.querySelector(".uno .six").classList.toggle("visibility")
            document.querySelector(".uno .eight").classList.toggle("visibility")
        }
        function dice6uno(){
            document.querySelector(".uno .two").classList.toggle("visibility")
            document.querySelector(".uno .five").classList.toggle("visibility")
            document.querySelector(".uno .eight").classList.toggle("visibility")
        }
        
        
        function dice1dos(){
            document.querySelector(".dos .one").classList.toggle("visibility")
            document.querySelector(".dos .two").classList.toggle("visibility")
            document.querySelector(".dos .three").classList.toggle("visibility")
            document.querySelector(".dos .four").classList.toggle("visibility")
            document.querySelector(".dos .six").classList.toggle("visibility")
            document.querySelector(".dos .seven").classList.toggle("visibility")
            document.querySelector(".dos .eight").classList.toggle("visibility")
            document.querySelector(".dos .nine").classList.toggle("visibility")
        }
        function dice2dos(){
            document.querySelector(".dos .one").classList.toggle("visibility")
            document.querySelector(".dos .two").classList.toggle("visibility")
            document.querySelector(".dos .five").classList.toggle("visibility")
            document.querySelector(".dos .four").classList.toggle("visibility")
            document.querySelector(".dos .six").classList.toggle("visibility")
            document.querySelector(".dos .nine").classList.toggle("visibility")
            document.querySelector(".dos .eight").classList.toggle("visibility")
        }
        function dice3dos(){
            document.querySelector(".dos .one").classList.toggle("visibility")
            document.querySelector(".dos .two").classList.toggle("visibility")
            document.querySelector(".dos .four").classList.toggle("visibility")
            document.querySelector(".dos .six").classList.toggle("visibility")
            document.querySelector(".dos .nine").classList.toggle("visibility")
            document.querySelector(".dos .eight").classList.toggle("visibility")  
        }
        function dice4dos(){
            document.querySelector(".dos .two").classList.toggle("visibility")
            document.querySelector(".dos .four").classList.toggle("visibility")
            document.querySelector(".dos .five").classList.toggle("visibility")
            document.querySelector(".dos .six").classList.toggle("visibility")
            document.querySelector(".dos .eight").classList.toggle("visibility")
        }
        function dice5dos(){
            document.querySelector(".dos .two").classList.toggle("visibility")
            document.querySelector(".dos .four").classList.toggle("visibility")
            document.querySelector(".dos .six").classList.toggle("visibility")
            document.querySelector(".dos .eight").classList.toggle("visibility")
        }
        function dice6dos(){
            document.querySelector(".dos .two").classList.toggle("visibility")
            document.querySelector(".dos .five").classList.toggle("visibility")
            document.querySelector(".dos .eight").classList.toggle("visibility")
        }

var A = [dice1uno, dice2uno, dice3uno, dice4uno, dice5uno, dice6uno]
var B = [dice1dos, dice2dos, dice3dos, dice4dos, dice5dos, dice6dos]

function roll(){
    A[num1]()
    B[num2]()
}
roll()
}

numberRandomizer()