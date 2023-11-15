function vacation(group, type, day){
    let price = 0;

    if(day == 'Friday'){
        switch (type){
            case 'Students':
                price = 8.45;
                break;
            case 'Business':
                price = 10.90;
                break;
            case 'Regular':
                price = 15;
                break;
        }
    } else if (day == 'Saturday'){
        switch (type){
            case 'Students':
                price = 9.80;
                break;
            case 'Business':
                price = 15.60;
                break;
            case 'Regular':
                price = 20;
                break;
        }
    } else { (day == 'Sunday')
        switch (type){
            case 'Students':
                price = 10.46;
                break;
            case 'Business':
                price = 16;
                break;
            case 'Regular':
                price = 22.50;
                break;
        }
    }

    if(type == 'Students' && group >= 30){
        price = price - (price * 0.15);
    } else if(type == 'Business' && group >= 100){
        group = group - 10;
    } else if(type == 'Regular' && (group >= 10 && group <= 20)){
        price = price - (price * 0.005);
    }

    console.log(`Total price: ${(price * group).toFixed(2)}`);

}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");