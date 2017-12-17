
var wd = require('selenium-webdriver');

describe("Player", function() {
  var Player = require('../../lib/jasmine_examples/Player');
  var Song = require('../../lib/jasmine_examples/Song');
  var player;
  var song;

  
  var driver;

  beforeAll(function () {
    // デフォルトだと、5秒しか待ってくれないので、20秒くらい待たせる
    console.log("before all");
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
    driver = new wd.Builder().forBrowser("chrome").build();

    //driver = new Builder().forBrowser('firefox').build();
  });
  
  beforeEach(function() {
    player = new Player();
    song = new Song();
  });


  it("firefoxのテストを実施", function(done) {

    console.log("start connecting to google.");
    
    driver.get('https://www.google.com')
    driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    driver.wait(until.titleIs('webdriver - Google 検索'), 5000);
    console.log('終了します...');
    
    driver.close();
    driver.quit();

   // expect(player.currentlyPlayingSong).toEqual(song);

  });

  describe("when song has been paused", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", function() {
      expect(player.isPlaying).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(player).not.toBePlaying(song);
    });

    it("should be possible to resume", function() {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toEqual(song);
    });
  });

  // demonstrates use of spies to intercept and test method calls
  it("tells the current song if the user has made it a favorite", function() {
    spyOn(song, 'persistFavoriteStatus');

    player.play(song);
    player.makeFavorite();

    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  //demonstrates use of expected exceptions
  describe("#resume", function() {
    it("should throw an exception if song is already playing", function() {
      player.play(song);

      expect(function() {
        player.resume();
      }).toThrowError("song is already playing");
    });
  });
});
