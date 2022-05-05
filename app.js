function calc(){
    // collect all user input
    const user_date = document.getElementById("user_date").value;
    const user_month = document.getElementById("user_month").value;
    const user_year = document.getElementById("user_year").value;


    // make date object
    var date = new Date();

    var system_date = date.getDate();
    var system_month = 1 + date.getMonth();
    var system_year = date.getFullYear();


    // collect all month
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


    // check condition
    if(user_date > system_date){
        system_date = system_date + month[system_month - 1];
        system_month = system_month - 1;
    }

    if(user_month > system_month){
        system_month = system_month + 12;
        system_year = system_year - 1;
    }


    var finalDate = system_date - user_date;
    var finalMonth = system_month - user_month;
    var finalYear = system_year - user_year;

    document.querySelector(".result").innerHTML = `Your age is ${finalYear} year, ${finalMonth} month & ${finalDate} days`;
}