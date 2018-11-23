var show = false;
    function showSide(){
        if(show == false){
            document.getElementById("sideIntro").style.display = "block";
            document.getElementById("mobile-btn").innerHTML='Hide my information';
            show = true;
        }else{
            document.getElementById("sideIntro").style.display = "none";
            document.getElementById("mobile-btn").innerHTML='Show my information';
            show = false;
        }
    }  