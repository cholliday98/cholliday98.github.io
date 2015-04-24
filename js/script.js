var post;var upvote;var gold;var items;var upgrades;
var pstcnt = document.getElementById('pos');
var golcnt = document.getElementById('gol');
var upvcnt = document.getElementById('upv');
var pstbtn = document.getElementById('button_holder');
var upvbtn = document.getElementById('upvotebutton_holder');
var golbtn = document.getElementById('goldbutton_holder');
post = [0, 1, 1, 1250];
upvote = [0, 1, 1, 500, 0];
gold = [0, 1, 1, 2500, 0];
store = [0, 0, 0, 0, 0];

function initializing() { 
	console.log("Initializing()");
}

function unlock(){
	if(upvote[4] == 0 && post[0] >= 5){
		upvote[4]++;
		upvbtn.setAttribute('class','active');
	}
}

function buy(num){
	if(num == 1){
		var cost = Math.ceil(store[0]+(store[0]*store[0])+15);
		if(upvote[0] >= cost){
			store[0] += 1;
			upvote[0] -= cost;
			document.getElementById('1').innerHTML = store[0];
			upvcnt.innerHTML= upvote[0];
		}else{
			console.log("Not enough upvotes");
		}
	}
}

var f= [0, 0, 0];
function failurecount(type){
	if (type == 'pos') {;
		f[0]+= 1;
		console.log("Post Overload #" + f[0]);
	}else if(type == 'upv'){
		f[1]+= 1;
		console.log("Upvote Overload #" + f[1]);
	}else if (type == 'gol'){
		f[2]+= 1;
		console.log("Gold Overload #" + f[2]);
	}
}

function actionclick(type){
	if(type == "pos"){
		pstbtn.setAttribute('onclick','failurecount("pos")');
		upvbtn.setAttribute('onclick','failurecount("upv")');
		golbtn.setAttribute('onclick','failurecount("gol")');
		setTimeout(function(){
			pstbtn.setAttribute('onclick','actionclick("pos")');
			upvbtn.setAttribute('onclick','actionclick("upv")');
			golbtn.setAttribute('onclick','actionclick("gol")');
			post[0] += post[1] * post[2];
			pstcnt.innerHTML= post[0];
		},post[3]);
	}else if(type == "upv"){
		pstbtn.setAttribute('onclick','failurecount("pos")');
		upvbtn.setAttribute('onclick','failurecount("upv")');
		golbtn.setAttribute('onclick','failurecount("gol")');
		setTimeout(function(){
			pstbtn.setAttribute('onclick','actionclick("pos")');
			upvbtn.setAttribute('onclick','actionclick("upv")');
			golbtn.setAttribute('onclick','actionclick("gol")');
			upvote[0] += upvote[1] * upvote[2];
			upvcnt.innerHTML= upvote[0];
		},upvote[3]);
	}else if(type == "gol"){
		pstbtn.setAttribute('onclick','failurecount("pos")');
		upvbtn.setAttribute('onclick','failurecount("upv")');
		golbtn.setAttribute('onclick','failurecount("gol")');
		setTimeout(function(){
			pstbtn.setAttribute('onclick','actionclick("pos")');
			upvbtn.setAttribute('onclick','actionclick("upv")');
			golbtn.setAttribute('onclick','actionclick("gol")');
			gold[0] += gold[1] * gold[2];
			golcnt.innerHTML= gold[0];
		},gold[3]);
	}
}

window.onload = function(){
	initializing();
};
