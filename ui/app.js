$(function () {
  window.addEventListener("message", function (e) {
    if (e.data.action === "ShowJobStage") {
      $(".status-header .title").html(e.data.notification.job);
      $(".status-top .notification-title").html(e.data.notification.stage);
      $(".status-header .line .inner-line").css(
        "width",
        $(".status-header .title").width() + 100 + "px"
      );

      if (e.data.notification.hasStatus == true) {
        $(".status-top .notification-text .status-message").html(
          e.data.notification.statusMessage
        );
        $(".status-top .notification-text .status-value").html(
          e.data.notification.statusValue
        );
      } else {
        $(".status-top .notification-text .status-message").html("");
        $(".status-top .notification-text .status-value").html("");
      }

      $(".status-container").css("opacity", 1);
    } else if (e.data.action === "UpdateJobStage") {
      $(".status-header .title").html(e.data.notification.job);
      $(".status-top .notification-title").html(e.data.notification.stage);

      if (e.data.notification.hasStatus == true) {
        $(".status-top .notification-text .status-message").html(
          e.data.notification.statusMessage
        );
        $(".status-top .notification-text .status-value").html(
          e.data.notification.statusValue
        );
      } else {
        $(".status-top .notification-text .status-message").html("");
        $(".status-top .notification-text .status-value").html("");
      }
    } else if (e.data.action === "HideJobStage") {
      $(".status-container").css("opacity", 0);

      setTimeout(() => {
        $(".status-header .title").html("");
        $(".status-top .notification-title").html("");

        $(".status-top .notification-text .status-message").html("");
        $(".status-top .notification-text .status-value").html("");
      }, 500);
    }
  });
});
