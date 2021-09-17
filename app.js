
function reverseStr (str){
  var listOfChar = str.split('');
  var reverseListOfStr = listOfChar.reverse();
  var reversedStr = reverseListOfStr.join('');
  return reversedStr;
  
}

function ispalindrome(str){
    var reverse = reverseStr(str);
    if(str === reverse){
        return true
    }
    return false
   
}
var dateStr = {
    day : '',
    month: '',
    year: ''
}
function convertDateToStr(date){
    if(date.day <10){
        dateStr.day = '0' +date.day;
    }else{
        dateStr.day = date.day.toString();
    }
    if(date.month <10){
        dateStr.month = '0' +date.month;
    }else{
        dateStr.month = date.month.toString();
    }
    dateStr.year = date.year.toString();
    return dateStr;

}
function getAllDateFormat(date){
    var dateStr = convertDateToStr(date);
    var ddmmyyyy=  dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy=  dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd=   dateStr.year +dateStr.month + dateStr.day;
    var ddmmyy=      dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy= dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

    return [ddmmyyyy , mmddyyyy, yyyymmdd , ddmmyy , mmddyy , yymmdd ];

}
function checkPalindromeForAllDateFormat (date){
  var listOfPalindrome = getAllDateFormat(date);
  for (var i=0; i< listOfPalindrome.length ; i++){
      var flag = false;
      if(ispalindrome(listOfPalindrome[i])){
         flag = true;
         break;
    
      }

  }
  return flag;
}
function isLeapYear(year){
    if(year % 400 === 0){
        return true;
    }
    if(year % 100 ===0){
        return false;
    }
    if( year % 4 === 0){
        return true;
    }
    return false;
}

function getNextDate(date){
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;
    var dayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31,30, 31];
    
    if(month === 2){
         if(isLeapYear(month)){
             if(day >29){
                 day = 1;
                 month++;
             }
         }else{
             if(day >28){
                 day = 1;
                 month++;
             }
         }
    }else {
        if(day >dayInMonth[month -1]){
            day = 1;
            month++;
        }
    }
    if(month > 12){
        month =1;
        year++;
    }
    return {
        day : day,
        month : month,
        year : year
    };
    

}
function getNextPalindrome(date){
    var ctr = 0;
    var nextDate = getNextDate(date);

    while(1){
        ctr++;
        var ispalindrome = checkPalindromeForAllDateFormat(nextDate);
        if(ispalindrome){
            break;
        }
        nextDate = getNextDate(nextDate);
    }
    return [ctr , nextDate];

}

var date = {
    day : 11,
    month: 2,
    year: 2021
}
console.log(getNextPalindrome(date));


