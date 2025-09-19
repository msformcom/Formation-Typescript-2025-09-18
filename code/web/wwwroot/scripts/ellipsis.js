function ellipsis(s,maxCar){
    if(s.length<=maxCar){
        return s;
    }
    return s.substring(0,maxCar-3)+"...";
    return `${s.substring(0,maxCar-3)}...`;
}
String.prototype.ellipsis=function(maxCar){
    return ellipsis(this ,maxCar);
}