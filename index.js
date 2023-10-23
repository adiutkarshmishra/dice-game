function numberRandomizer(){
    $("div div div").removeClass("visibility")
    $("div div div").addClass("makeVisible")

    var num1 = Math.floor(Math.random() * 6)
    var num2 = Math.floor(Math.random() * 6)
    if (num1>num2){
        $("h1").text("←Player 1 Wins")
    }
    else if (num1<num2){
        $("h1").text("Player 2 Wins→")
    }
    else if (num1===num2){
        $("h1").text("Draw!!")
    }
        
        function dice1uno(){
            $(".uno .one").toggleClass("visibility")
            $(".uno .two").toggleClass("visibility")
            $(".uno .three").toggleClass("visibility")
            $(".uno .four").toggleClass("visibility")
            $(".uno .six").toggleClass("visibility")
            $(".uno .seven").toggleClass("visibility")
            $(".uno .eight").toggleClass("visibility")
            $(".uno .nine").toggleClass("visibility")
        }
        function dice2uno(){
            $(".uno .one").toggleClass("visibility")
            $(".uno .two").toggleClass("visibility")
            $(".uno .five").toggleClass("visibility")
            $(".uno .four").toggleClass("visibility")
            $(".uno .six").toggleClass("visibility")
            $(".uno .nine").toggleClass("visibility")
            $(".uno .eight").toggleClass("visibility")
        }
        function dice3uno(){
            $(".uno .one").toggleClass("visibility")
            $(".uno .two").toggleClass("visibility")
            $(".uno .four").toggleClass("visibility")
            $(".uno .six").toggleClass("visibility")
            $(".uno .nine").toggleClass("visibility")
            $(".uno .eight").toggleClass("visibility")  
        }
        function dice4uno(){
            $(".uno .two").toggleClass("visibility")
            $(".uno .four").toggleClass("visibility")
            $(".uno .five").toggleClass("visibility")
            $(".uno .six").toggleClass("visibility")
            $(".uno .eight").toggleClass("visibility")
        }
        function dice5uno(){
            $(".uno .two").toggleClass("visibility")
            $(".uno .four").toggleClass("visibility")
            $(".uno .six").toggleClass("visibility")
            $(".uno .eight").toggleClass("visibility")
        }
        function dice6uno(){
            $(".uno .two").toggleClass("visibility")
            $(".uno .five").toggleClass("visibility")
            $(".uno .eight").toggleClass("visibility")
        }
        
        
        function dice1dos(){
            $(".dos .one").toggleClass("visibility")
            $(".dos .two").toggleClass("visibility")
            $(".dos .three").toggleClass("visibility")
            $(".dos .four").toggleClass("visibility")
            $(".dos .six").toggleClass("visibility")
            $(".dos .seven").toggleClass("visibility")
            $(".dos .eight").toggleClass("visibility")
            $(".dos .nine").toggleClass("visibility")
        }
        function dice2dos(){
            $(".dos .one").toggleClass("visibility")
            $(".dos .two").toggleClass("visibility")
            $(".dos .five").toggleClass("visibility")
            $(".dos .four").toggleClass("visibility")
            $(".dos .six").toggleClass("visibility")
            $(".dos .nine").toggleClass("visibility")
            $(".dos .eight").toggleClass("visibility")
        }
        function dice3dos(){
            $(".dos .one").toggleClass("visibility")
            $(".dos .two").toggleClass("visibility")
            $(".dos .four").toggleClass("visibility")
            $(".dos .six").toggleClass("visibility")
            $(".dos .nine").toggleClass("visibility")
            $(".dos .eight").toggleClass("visibility")  
        }
        function dice4dos(){
            $(".dos .two").toggleClass("visibility")
            $(".dos .four").toggleClass("visibility")
            $(".dos .five").toggleClass("visibility")
            $(".dos .six").toggleClass("visibility")
            $(".dos .eight").toggleClass("visibility")
        }
        function dice5dos(){
            $(".dos .two").toggleClass("visibility")
            $(".dos .four").toggleClass("visibility")
            $(".dos .six").toggleClass("visibility")
            $(".dos .eight").toggleClass("visibility")
        }
        function dice6dos(){
            $(".dos .two").toggleClass("visibility")
            $(".dos .five").toggleClass("visibility")
            $(".dos .eight").toggleClass("visibility")
        }

var A = [dice1uno, dice2uno, dice3uno, dice4uno, dice5uno, dice6uno]
var B = [dice1dos, dice2dos, dice3dos, dice4dos, dice5dos, dice6dos]



// $("div div div").addClass("makeVisible")
function roll(){
    A[num1]()
    B[num2]()
}

    roll()
    $("div div div").removeClass("makeVisible")    
}

// numberRandomizer()
