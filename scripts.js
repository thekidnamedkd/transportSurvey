$( document ).ready(function() {
  $("form#transitForm").submit(function() {
    event.preventDefault()
    $(".answerContainer").show();

    $("input:checkbox[name=main-transport]:checked").each(function() {
      const mainTransportMode = $(this).val();
      $("#Q1Answer").append(mainTransportMode + "<br>")
    })

    $("input:checkbox[name=main-reasons]:checked").each(function() {
      const mainReasons = $(this).val();
      $("#Q2Answer").append(mainReasons + "<br>")
    })

    $("input:checkbox[name=busiest-days]:checked").each(function() {
      const mainTransportDay = $(this).val();
      $("#Q3Answer").append(mainTransportDay + "<br>")
    })
  });
});