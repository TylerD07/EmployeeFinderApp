$(() => {
  const addEmployee = () => {
    // Here we grab the form elements
    const newEmployee = {
      name: $("#name")
        .val()
        .trim(),
      photo: $("#photo")
        .val()
        .trim(),
      scores: [
        $("#q1")
          .val()
          .trim(),
        $("#q2")
          .val()
          .trim(),
        $("#q3")
          .val()
          .trim(),
        $("#q4")
          .val()
          .trim(),
        $("#q5")
          .val()
          .trim(),
        $("#q6")
          .val()
          .trim(),
        $("#q7")
          .val()
          .trim(),
        $("#q8")
          .val()
          .trim(),
        $("#q9")
          .val()
          .trim(),
        $("#q10")
          .val()
          .trim()
      ]
    };

    // Clear the form when submitting
    $("#name").val("");
    $("#photo").val("");
    $("#q1").val("");
    $("#q2").val("");
    $("#q3").val("");
    $("#q4").val("");
    $("#q5").val("");
    $("#q6").val("");
    $("#q7").val("");
    $("#q8").val("");
    $("#q9").val("");
    $("#q10").val("");
  };
  const getMatch = $.ajax({
    method: "POST",
    url: "api/employees",
    data: newEmployee
  }).then(firstMatch => {
    $("#match-name").innerHTML(firstMatch.name);
    $("#match-img").innerHTML(firstMatch.photo);
  });

  $("#submit").on("click", addEmployee);
});
