var maxWidth = 0;
var maxHeight = 0;

var matrixrows;
var matrixrowheight;
var matrixrowwidth;

var letters = ["Tojiddin Web Programmer","TWP/WSC","NORTOJIYEV TOJIDDIN","NORTOJIYEV","TOJIDDIN","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

for(var i = 0;i<letters.length;i++){
document.body.innerHTML='<p id="text" style="background-color: red;position: absolute;">'+letters[i]+'</p>'
    document.body.style.fontFamily = "font3";
    var compstylewidth = Math.round(window.getComputedStyle(document.getElementById("text")).width.split("px")[0]);
    if(compstylewidth>maxWidth){
        maxWidth = compstylewidth;
        
    }
    var compstyleheight = Math.round(window.getComputedStyle(document.getElementById("text")).height.split("px")[0]);
    if(compstyleheight>maxHeight){
        maxHeight = compstyleheight;
        
    }
}
document.body.innerHTML="";

function intro (text){
    matrixbg = document.createElement("div");
    var text = document.createElement("h1");
    text.innerHTML="TWP/WSC TOJIDDIN";
    text.style.fontFamily = "font2";
    text.style.fontSize = "1000%";
    text.style.transition="5s";
    text.style.position="absolute";
    text.style.transform="translate(-50%, -50%)";
    text.style.top="50%";
    text.style.left="50%";
    text.style.letterSpacing="1000px";
    matrixbg.id="matrix";
    matrixbg.style.color="green";
    matrixbg.style.backgroundColor = "black";
    matrixbg.style.position="absolute";
    matrixbg.style.width="100%";
    matrixbg.style.height="100%";
    matrixbg.style.overflow="hidden";
    matrixbg.appendChild(text);
    document.body.appendChild(matrixbg)
    window.setTimeout(function (){text.style.letterSpacing="0px";window.setTimeout(function(){matrixbg.removeChild(text);matrixbg.style.color = "black"; matrix()}, 12000)}, 1000)}

function matrix (){
   var matrixbg = document.getElementById("matrix");
   matrixrowheight = Math.round(window.getComputedStyle(matrixbg).height.split("px")[0]/(maxHeight+1));
   matrixrowwidth = Math.round(window.getComputedStyle(matrixbg).width.split("px")[0]/(maxWidth+1));
   matrixrows = [];
   for (var i = 0;i<matrixrowwidth;i++){
    matrixrows.push(createrow(matrixrowheight, i*(maxWidth+5), maxHeight))
    }
    for (var i = 0;i<matrixrows.length;i++){
        selmxpoi.push([Math.round(Math.random()*(matrixrowheight)), Math.round(matrixrowheight/3)])
    }
    animateMatrix();
}

var selRow = 0;

var selmxpoi = [];
function animateMatrix (){
    for(selRow=0;selRow<matrixrows.length;selRow++){
    if(selmxpoi[selRow][0]<matrixrowheight){
    var matrixbg = document.getElementById("matrix");
    try{matrixrows[selRow][selmxpoi[selRow][0]-selmxpoi[selRow][1]].style.color="black";}catch(err){}
    try{matrixrows[selRow][selmxpoi[selRow][0]-1].style.color="green";}catch(err){}
    matrixrows[selRow][selmxpoi[selRow][0]].style.color = "white";
    selmxpoi[selRow][0]++
    }
    else{
        matrixrows[selRow][matrixrowheight-1].style.color = "green";
        matrixrows[selRow][selmxpoi[selRow][0]-selmxpoi[selRow][1]].style.color="black";
        selmxpoi[selRow][1]--;
        if(selmxpoi[selRow][1]==0){
            selmxpoi[selRow][1]=Math.round(matrixrowheight/3)
            selmxpoi[selRow][0]=0;
        }
        }}
    window.setTimeout(animateMatrix, 100)
}

function createrow (letrs, left, letheight){
    var objs = []
    for (var i = 0;i<letrs;i++){
        var txt = document.createElement("p");
        txt.style.position = "absolute";
        txt.style.left = left+"px";
        txt.style.top = letheight*i+"px";
        txt.style.textAlign = "center";
        txt.innerHTML = letters[Math.round(Math.random()*(letters.length-1))];
        objs.push(txt);
        document.getElementById("matrix").appendChild(txt)
    }
    return objs;
}
intro()
