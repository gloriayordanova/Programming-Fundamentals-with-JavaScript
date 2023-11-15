function requiredReading(pages, pagesPerHour, days){

    totalTimeBookRead = pages / pagesPerHour;
    requiredTimePerDay = totalTimeBookRead / days;

    console.log(requiredTimePerDay);

}

requiredReading(212, 20 , 2);
requiredReading(432, 15 , 4);