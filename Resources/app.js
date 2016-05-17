(function() {
  var App, app;

  App = (function() {
    App.endTime = new Date(2016, 4, 24);

    App.watch = document.getElementById("watch");

    App.img = document.getElementById("hero");

    App.characters = ["76", "Bastion", "DVa", "Genji", "Hanzo", "Junkrat", "Lucio", "McCree", "Mei", "Mercy", "Pharah", "Reaper", "Reinhardt", "Roadhog", "Symmetra", "Torbjorn", "Tracer", "Widowmaker", "Winston", "Zarya", "Zenyatta"];

    function App() {
      this.startCountdown();
    }

    App.prototype.startCountdown = function() {
      App.Countdown();
      App.ImageChanger();
      window.setInterval(App.Countdown, 1000);
      return window.setInterval(App.ImageChanger, 3000);
    };

    App.Countdown = function() {
      var days, hours, minutes, outString, seconds, startTime, timeLeft;
      startTime = new Date(Date.now());
      timeLeft = App.endTime - startTime;
      if (timeLeft <= 0) {
        return;
      }
      days = parseInt(timeLeft / (1000 * 60 * 60 * 24));
      timeLeft = timeLeft - (days * 1000 * 60 * 60 * 24);
      hours = parseInt(timeLeft / (1000 * 60 * 60));
      timeLeft = timeLeft - (hours * 1000 * 60 * 60);
      minutes = parseInt(timeLeft / (1000 * 60));
      timeLeft = timeLeft - (minutes * 1000 * 60);
      seconds = parseInt(timeLeft / 1000);
      if (hours < 10) {
        hours = "0" + hours.toString();
      }
      if (minutes < 10) {
        minutes = "0" + minutes.toString();
      }
      if (seconds < 10) {
        seconds = "0" + seconds.toString();
      }
      outString = "0" + days + "<span class='altColor'>:</span>" + hours + "<span class='altColor'>:</span>" + minutes + "<span class='altColor'>:</span>" + seconds;
      return watch.innerHTML = outString;
    };

    App.ImageChanger = function() {
      var currentCharacter, image;
      currentCharacter = Math.floor(Math.random() * App.characters.length);
      image = App.characters[currentCharacter];
      return App.img.innerHTML = "<img src='Resources/Images/CBDS/CuteSprayAvatars-" + image + "_OW_JP_400x400.png'>";
    };

    return App;

  })();

  app = new App();

}).call(this);
