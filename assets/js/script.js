
/** criteria */
//GIVEN I am using a daily planner to create a schedule
//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
//WHEN I scroll down
//THEN I am presented with time blocks for standard business hours
//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future
//WHEN I click into a time block
//THEN I can enter an event
//WHEN I click the save button for that time block
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist

var saveBtn = $(".saveBtn");


// current day is displayed at the top of the calendar
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// each time block is color-coded to indicate whether it is in the past, present, or future
function timeBlockColor(){
    var NowHour = moment().hour();

    $(".time-block").each(function(){
        var allHour = parseInt($(this).attr("id"));
        console.log(this);

        if(allHour > NowHour){
            $(this).addClass("future");
        } else if(allHour === NowHour){
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }

    })
};

//when I click the save button for the time block
saveBtn.on("click", function(){
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();

    console.log(this);

    //the text for that event is saved in local storage
    localStorage.setItem(time,plan);
});

//when user refresh the page ,saved events persist
function usePlanner(){
    $(".hour").each(function(){
        var currhour = $(this).text();
        var currPlan = localStorage.getItem(currhour);
        console.log(this);
        console.log(currhour);

        if(currPlan !== null){
           $(this).siblings(".plan").val(currPlan);
        }
    });
    
};

timeBlockColor();
usePlanner();
