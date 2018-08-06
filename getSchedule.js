
Date.prototype.isLeapYear = function() {
    var year = this.getFullYear();
    if((year & 3) != 0) return false;
    return ((year % 100) != 0 || (year % 400) == 0);
};

// Get Day of Year
Date.prototype.getDOY = function() {
    var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    var mn = this.getMonth();
    var dn = this.getDate();
    var dayOfYear = dayCount[mn] + dn;
    if(mn > 1 && this.isLeapYear()) dayOfYear++;
    return dayOfYear;
};

Date.prototype.getWeekNumber = function () {
    var day = new Date().getDOY();
    var week = (day/7) + 1;
    return Math.floor(week);
}

function mailiworking(weeknumber) {
    let today = new Date();
    // console.log(today.getDay());
    switch (today.getDay()) {
        case 1:
            if (weeknumber%2 == 1) {
                return "Monday: Odd Week: Maili works until 4pm";
            } else {
                return "Monday: Even Week: Maili has the day off";
            } break;
        case 2:
            return "Tuesday: Maili works until 4pm";
            break;
        case 3:
            return "Wednesday: Maili works until 6pm";
            break;
        case 4: 
            return "Thursday: Maili works until 3pm";
            break;
        case 5:
            if (weeknumber%2 == 0) {
                return "Friday: Even Week: Maili has the day off";
            } else {
                return "Friday: Odd Week: Maili works until noon";
            } break;
        case 6: 
            return "It's Saturday! Maili don't werk on weekendz!";
            break;
        case 0:
            return "It's Sunday! Aint nobody got time to work on no Sunday!"

    }
}

// set h2 text
document.getElementById("atwork").innerHTML = mailiworking(new Date().getWeekNumber());
