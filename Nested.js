let leapyear=2004

if(leapyear%4===0){
    if(leapyear%400===0){
        if(leapyear%100===0){
            console.log("it is leap year")
        }
        else{
            console.log("it is not a leap year")
        }

    }else{
        console.log("it is not a leapyear"+leapyear)
    }

}else{
    console.log("it is not a leap year"+leapyear)
}