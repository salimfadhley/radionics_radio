var context=new webkitAudioContext();

var oscillator1=new Oscillator(context,'sine');
var oscillator2=new Oscillator(context,'sine');

oscillator1.setPhaseModBuffer(oscillator2.getWorkingBuffer());
oscillator2.setPhaseModBuffer(oscillator1.getWorkingBuffer());