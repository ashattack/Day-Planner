$(document).ready(function () {

    // get date with moment js and displaying the date on page
    $("#currentDay").text(moment().format("MMMM Da YYYY"));
    var currentHour = parseInt(moment().format('HH'));
    //global variables
    var varTime = " AM";
    var txtTime = 8;
    var liveTime = 8;
    var day;
    var storedDay = [];

    init();

    function init() {
        //if doesnt have local storage going to create one empty
        if (localStorage.getItem("day") === null) {
            day = ["", "", "", "", "", "", "", "", ""];
            localStorage.setItem("day", JSON.stringify(day));
        }
        //using variable to play with the local storage
        storedDay = JSON.parse(localStorage.getItem("day"));

        createPage();

    }
    //adding the class to each textarea depending the value (time) they have
    $("textarea").each(function () {
        var name = parseInt($(this).attr("value"));

        if (name < currentHour) {
            $(this).addClass("past");
        }
        if (name > currentHour) {
            $(this).addClass("future")
        }
        if (name === currentHour) {
            $(this).addClass("present")
        }
    })

    //this function is to create the page 
    function createPage() {

        for (i = 0; i < 9; i++) {

            ++;
            liveTime++;

            if (i >= 3) varTime = " PM";
            if (i === 4)  = 1;
            //creating the elements and giving them class and attr
            var divRow = $("<div>");
            divRow.addClass("row time-block");
            divRow.attr("id", "hour-" + liveTime);
            var divHour = $("<div>");
            divHour.addClass("col-md-1 hour p-1");
            divHour.text(+ varTime);
            var textHour = $("<textarea>");
            textHour.attr("value", liveTime);
            textHour.addClass("col-md-10 description");
            textHour.text(storedDay[i]);
            var btnHour = $("<button>");
            btnHour.addClass("btn saveBtn col-md-1");
            btnHour.attr("value", liveTime);
            var btnIcon = $("<i>");
            btnIcon.addClass("fas fa-save");

            //adding the elements to the page
            $(divRow).appendTo(".container");
            $(divHour).appendTo("#hour-" + liveTime);
            $(textHour).appendTo("#hour-" + liveTime);
            $(btnHour).appendTo("#hour-" + liveTime);
            $(btnIcon).appendTo(btnHour);

        }
    }

    //save button, adding the value of the buttton to local storage.
    $(".saveBtn").on("click", function () {

        var btnText = ($(this).siblings("textarea").val());
        console.log(btnText);
        var horaTest = $(this).val();
        console.log(horaTest);
        storedDay[horaTest - 9] = btnText;
        localStorage.setItem("day", JSON.stringify(storedDay));

    });





});