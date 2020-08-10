//change运动框架1.0
function change(obj,name,target,fn){
	clearInterval(obj.timer)
	obj.timer=setInterval(function(){
		if (name=='opacity') {
			nowStyle=getComputedStyle(obj)[name]*100
		} else if (name=='border-radius'||name=='border-width'||name=='font-size'||name=='background-size'||name=='top') {
			nowStyle=parseInt(getComputedStyle(obj)[name])
		} else{
			nowStyle=getComputedStyle(obj)[name]
		}
		
		let speed=(target-nowStyle)/100
		speed=(speed>0)?Math.ceil(speed):Math.floor(speed)
		
		if (nowStyle==target) {
			clearInterval(obj.timer)
			if(fn){fn()}
		} else{
			if (name=='opacity') {
				obj.style[name]=(nowStyle+speed)/100
			} else if (name=='border-radius'||name=='border-width'||name=='font-size'||name=='background-size'||name=='top') {
				obj.style[name]=nowStyle+speed+'px'
			} else{
				obj.style[name]=target
			}
		}
	}
	,1)
}
			