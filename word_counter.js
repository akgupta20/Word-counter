let textbox = document.getElementById('textbox');
textbox.addEventListener('paste', e => e.preventDefault())
textbox.addEventListener('cut', e => e.preventDefault())
textbox.addEventListener('copy', e => e.preventDefault())
var words;
textbox.addEventListener('input', function () {
    
    let charactesrs = this.value;
    charactesrs = charactesrs.trim();// for removing whitespace from start and end of string.
    document.getElementById('char').innerHTML = charactesrs.length;
     words = charactesrs.split(" ");
    words = words.filter(e=> {
        if (e != "")
            return e;
    })
    
    document.getElementById("word").innerHTML = words.length;
});
var count= 60;
function start() {
    document.getElementById('btn').style.display = 'none';
        document.getElementById("minContainer").style.display = "none";
        document.getElementById("secContainer").style.display = "inline";
        repeat();
        
        
        
}
var breaktimeout;
    function repeat()
    {
        if(count==0)
        {
            callend();
            return
        }
        
        document.getElementById('sec').innerHTML=--count;
         setTimeout("repeat()", 1000);
        
       
      }
function callend() {
    
          let c = document.getElementById('textbox');
    
          document.getElementById('tSpeed').innerHTML = words.length;
          document.getElementById('tPara').style.display = "inline";
          
          alert("Time's Up!");
      }