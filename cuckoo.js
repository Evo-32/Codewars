function cuckooClock(inputTime, chimes) {
    let [hour,minutes] = inputTime.split(':').map(Number)
    let  count = 0
    while(true){
        if(minutes === 0){
            let hourChime = hour === 12 ? 12: hour
            count += hourChime
            if(count >= chimes){
                return `${hour.toString().padStart(2,'0')}:00`
            }
        }
        else if(minutes === 15 ||minutes === 30 || minutes === 45){
            count+=1
            if(count >= chimes){
                return `${hour.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}`;
            }
        }
        
        if (minutes < 15) minutes = 15;
        else if (minutes < 30) minutes = 30;
        else if (minutes < 45) minutes = 45;
        else {
            minutes = 0;
            hour = hour === 12 ? 1 : hour + 1;
        }
    }
}