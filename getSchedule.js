
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
            return "Monday: Maili works 7am-11:30am"
        case 2:
            return "Tuesday: Maili is off work";
            break;
        case 3:
            return "Wednesday: Maili works 7am-11:30am";
            break;
        case 4: 
            return "Thursday: Maili works 4:30pm-8pm";
            break;
        case 5:
            if (weeknumber%2 == 0) {
                return "Friday: Even Week: Maili is off work ";
            } else {
                return "Friday: Odd Week: Maili is off work";
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
