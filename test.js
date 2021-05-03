var myCurrentDate = new Date();
    var myPastDate = new Date(myCurrentDate);
    myPastDate.setDate(myPastDate.getDate() );
    var dt = myPastDate;
    var mm = dt.getMonth() + 1;
    var dd = dt.getDate();
    var yyyy = dt.getFullYear();
    var format = dd + '/' + mm + '/' + yyyy
    


    console.log(format);

    