function Oscillator(context,shape){
console.log(context);
this.context=context;
this.node=context.createJavaScriptNode(1024,0,2);
this.phase=0;
this.shape=shape;
this.frequency=440;
this.sampleRate=this.context.sampleRate;
this.amplitude=1
this.outputBufferLeft=[];
this.outputBufferRight=[];
this.workingBuffer=[];
this.phaseModBuffer=[];
this.phaseModAmount=0;
this.overSample=false;
this.cutoff=1;
this.filterBuffer=0;
this.playing=false;
var $this=this;
this.node.onaudioprocess=function(e){$this.process(e)};
}

Oscillator.prototype.setAmplitude=function(amplitude){
if(typeof(amplitude)=='number'){
this.amplitude=amplitude;
}
else{throw'setAmplitude only accepts numeric values';};
}

Oscillator.prototype.setFrequency=function(frequency){
if(typeof(frequency)=='number'){
this.frequency=frequency;
}
else{throw'setFrequency only accepts numeric values';};
}

Oscillator.prototype.getWorkingBuffer=function(){return this.workingBuffer;}

Oscillator.prototype.getOutputBuffer=function(){return this.outputBuffer;}

Oscillator.prototype.setPhaseModBuffer=function(phaseModBuffer){
if(typeof(phaseModBuffer)!='object')throw'Phase Modulation buffer type mistmatch.';
if(phaseModBuffer.length!=this.workingBuffer.length)throw'Phase Modulation buffer size must be equal to the oscillator buffer size';
this.phaseModBuffer=phaseModBuffer;
}

Oscillator.prototype.setPhaseModAmount=function(phaseModAmount){
if(typeof(phaseModAmount)=='number'){this.phaseModAmount=phaseModAmount;}else{throw'phaseModAmount only accepts numeric values';}
}

Oscillator.prototype.process=function(e){
this.outputBufferLeft=e.outputBuffer.getChannelData(0);
this.outputBufferRight=e.outputBuffer.getChannelData(1);
for(var i=0;i<this.outputBufferLeft.length;i++){
this.workingBuffer[i]=this.getSample();
this.outputBufferLeft[i]=this.outputBufferRight[i]=this.workingBuffer[i]*this.amplitude;this.phase+=this.frequency/this.sampleRate+ this.calculatePhaseModulation(i);while(this.phase>1.0)this.phase-=1;}}

Oscillator.prototype.play=function(){
this.node.connect(this.context.destination);this.playing=true;}

Oscillator.prototype.pause=function(){
this.node.disconnect();this.playing=false;}

Oscillator.prototype.getSample=function(){
switch(this.shape){case'square':return(this.phase>0.5)?1:0;
break;
case'sawtooth':return this.phase;
break;
case'triangle':return(this.phase>0.5)?1.0-((this.phase- 0.5)*2):this.phase*2;break;case'sine':default:return Math.sin(this.phase*Math.PI*2.0);break;}}

Oscillator.prototype.calculatePhaseModulation=function(offset){
if(this.phaseModBuffer.length==0)return 0;
if(typeof(this.phaseModBuffer)!='object')return 0;
if(this.phaseOscillatorAmplitude==0)return 0;
if(this.phaseModBuffer.length!=this.workingBuffer.length)return 0;
return this.phaseModBuffer[offset]*this.phaseModAmount;}