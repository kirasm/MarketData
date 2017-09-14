
$("#mainWindow").load("project1Content.html", function (response, status, xhr) {
  if (status === "success") {

    projectID = window.location.href.toString().split("#")[1];

    $.get("/json", function(data, status){
    });



    $.getJSON("data/project-data.json", function(json) {

      var JSONstring = JSON.stringify(json);

      var handledJSONstring = JSON.parse(JSONstring.escapeSpecialChars());

      selectedProj = handledJSONstring[projectID];

      console.log(selectedProj)



      $("#projTitle").text(selectedProj.project.projTitle);
      $("#projParagraph").text(selectedProj.project.projParagraph);

      $("#probTitle").text(selectedProj.problem.probTitle);
      $("#probParagraph").text(selectedProj.problem.probParagraph);

      $("#lessonTitle").text(selectedProj.lesson.lessonTitle);
      $("#lessonParagraph").text(selectedProj.lesson.lessonParagraph);

    });


  }

});

String.prototype.escapeSpecialChars = function() {
  return this.replace(/\n/g, "\\\\n");

};
