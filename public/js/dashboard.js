(document).ready(function () {

    $("#Dashboard").click(function () {

        $("#mainWindow").load("dashboardContent.html", function (response, status, xhr) {

            if (status === "success") {


            }

        });
    });

    $("#FirstSemester").click(function () {
        $("#mainWindow").load("FirstSemesterProject.html", function (response, status, xhr) {
            if (status === "success") {



            }

        });
    });

    $("#SecondSemester").click(function () {
        $("#mainWindow").load("SecondSemesterProject.html", function (response, status, xhr) {
            if (status === "success") {


            }

        });
    });

    $("#Dashboard").click();

});