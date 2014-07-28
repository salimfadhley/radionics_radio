(function () {



var audio_context, oscillator;  
        
        
    function stop() {
    oscillator.noteOff(0);
    }
     
    function play(freq) {
    
    oscillator = audio_context.createOscillator();
    gainNode = audio_context.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audio_context.destination);
    
    gainNode.gain.value = 0.5;
    oscillator.frequency.value = freq;
    oscillator.noteOn(0);
    
    
    
    console.log("ok");
    }    
    


  (function init(g){
    try {
      audio_context = new (g.AudioContext || g.webkitAudioContext);
      oscillator = audio_context.createOscillator();
    } catch (e) {
      alert('No web audio oscillator support in this browser');
    }
  }(window));






});