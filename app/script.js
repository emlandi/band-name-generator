$(function() {
  $("button").click(function() {
    // $("#adjective").text("hello world");
    $.get("adjective", function (response) {
      var adjective = response.word;
      $("#adjective").text(adjective);
    });
    $.get("verb", function (response) {
      var verb = response.word;
      $("#verb").text(verb);
    });
    $.get("noun", function (response) {
      var noun = response.word;
      $("#noun").text(noun);
    });
  });
});
