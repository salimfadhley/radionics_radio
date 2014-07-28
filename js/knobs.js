$(function() {

$(".demo").click(function () {

					var val = $("#freqmain").val();
					var new_nal = val.replace(/(Hz)/, '') / 500;
					var esatta = new_nal - $('#inf-knob').val();
					//document.getElementById('inf-knob').value = new_nal;
					$('#inf-knob').val(new_nal);
					
					
					
					console.log($('#inf-knob').val());
					console.log(new_nal);
					console.log(esatta);
					
					$('#inf-knob').on('knobdrag', function(){
                    //called until mouse button released
    		
    				//var val = $("#freqmain").val();
					//var new_nal = val.replace(/(Hz)/, '') / 500;
					$('#inf-knob').val($('#inf-knob').val());

                    console.log(new_nal, "okok");
                    console.log($('#inf-knob').val());

    		        var dial = (500 * $('#inf-knob').val()).toFixed(1);
    		
                    oscillator.frequency.value = dial; 
                    document.getElementById('freqmain').value = dial + " Hz";    
                    document.getElementById('freqmain2').value = dial;  
                    
                    //console.log(dial);   

}); 


 
  });
    	

				
$('#inf-knob').knobRot({
				
					classes: ['inf-knob'],
					frameWidth: 250,
					frameHeight: 250,
					frameCount: 100,
					detent: false,					
					discreteSteps: false,
					stepCount: 0,
					minimumValue: 0,
					maximumValue: 2,
					dragMultiplier: 0.01,
					hideInput: true,
});

$('#inf-knob').on('knobdrag', function(e){
    //called until mouse button released
    		
 

    		        var dial = (500 * $('#inf-knob').val()).toFixed(1);
    		
                    oscillator.frequency.value = dial; 
                    document.getElementById('freqmain').value = dial + " Hz";    
                    document.getElementById('freqmain2').value = dial;  
                    
                    //console.log(dial);   

}); 


$('#inf-knob1').knobRot({
				
					classes: ['inf-knob'],
					frameWidth: 250,
					frameHeight: 250,
					frameCount: 100,
					detent: false,					
					discreteSteps: false,
					stepCount: 0,
					minimumValue: 2,
					maximumValue: 4,
					dragMultiplier: 0.01,
					hideInput: true,
});

$('#inf-knob1').on('knobdrag', function(e){
    //called until mouse button released
    		
    		var dial = (500 * this.value).toFixed(1);
    		//console.log(dial);
                    oscillator.frequency.value = dial; 
                    document.getElementById('freqmain').value = dial + " Hz";
                    document.getElementById('freqmain2').value = dial;                 
}); 

$('#inf-knob2').knobRot({
				
					classes: ['inf-knob'],
					frameWidth: 250,
					frameHeight: 250,
					frameCount: 100,
					detent: false,					
					discreteSteps: false,
					stepCount: 0,
					minimumValue: 4,
					maximumValue: 6,
					dragMultiplier: 0.01,
					hideInput: true,
});

$('#inf-knob2').on('knobdrag', function(e){
    //called until mouse button released
    		
    		var dial = (500 * this.value).toFixed(1);
    		//console.log(dial);
                    oscillator.frequency.value = dial; 
                    document.getElementById('freqmain').value = dial + " Hz";  
                    document.getElementById('freqmain2').value = dial;               
}); 
 
$('#inf-knob3').knobRot({
				
					classes: ['inf-knob'],
					frameWidth: 250,
					frameHeight: 250,
					frameCount: 100,
					detent: false,					
					discreteSteps: false,
					stepCount: 0,
					minimumValue: 6,
					maximumValue: 8,
					dragMultiplier: 0.01,
					hideInput: true,
});

$('#inf-knob3').on('knobdrag', function(e){
    //called until mouse button released
    		
    		var dial = (500 * this.value).toFixed(1);
    		//console.log(dial);
                    oscillator.frequency.value = dial; 
                    document.getElementById('freqmain').value = dial + " Hz";  
                    document.getElementById('freqmain2').value = dial;               
}); 

//END DIAL KNOBS 
 
 
$('#black-knob').knobRot({
				
					classes: ['black'],
					frameWidth: 100,
					frameHeight: 100,
					frameCount: 31,
					detent: false,
					discreteSteps: false,
					stepCount: 0,
					minimumValue: 0,
					maximumValue: 1,
					dragMultiplier: 0.01,
					hideInput: true,
});

$('#black-knob').on('knobdrag', function(e){
    //called until mouse button released
                  gainNode.gain.value = this.value;
                  console.log(this.value * 2);
                  
                  
                  $('#inf-knob').val(this.value * 2);
                  
                    
}); 


$('#range-knob').knobRot({
				
					classes: ['rot-knob'],
					frameWidth: 100,
					frameHeight: 100,
					frameCount: 4,
					detent: false,
					discreteSteps: true,
		            stepCount: 4,
		            minimumValue: 0,
		            maximumValue: 3,
		            dragMultiplier: 0.3,
					hideInput: true,
                    });

//RANGE 0
$('#range-knob').on('knobdrag', function(e){
                  //console.log("value knob");
       if (this.value == '0'){
          $('.knob-container0').css({display: "block"});
          $('.knob-container01').css({display: "none"});
          $('.knob-container02').css({display: "none"});
          $('.knob-container03').css({display: "none"});
          //$('#inf-knob').knobrot('set', 90);
                      
          }
//RANGE 1
 else if (this.value == '1') {
         $('.knob-container0').css({display: "none"});
          $('.knob-container01').css({display: "block"});
          $('.knob-container02').css({display: "none"});
          $('.knob-container03').css({display: "none"});
          } 
          
else if (this.value == '2') {
         $('.knob-container0').css({display: "none"});
          $('.knob-container01').css({display: "none"});
          $('.knob-container02').css({display: "block"});
          $('.knob-container03').css({display: "none"});
          } 

else  {
         $('.knob-container0').css({display: "none"});
          $('.knob-container01').css({display: "none"});
          $('.knob-container02').css({display: "none"});
          $('.knob-container03').css({display: "block"});
          } 
          
             
});




});
