var canvas  = document.getElementById('canvas');
ctx = canvas.getContext('2d');
function CanvasToCenterCoord(x,y, r){
    var width=canvas.scrollWidth;
    var height=canvas.scrollHeight;
    x=x/width*2-1;
    y=-y/height*2+1;
    return {x:x,y:y};
}
function CenterToCanvasCoord(x, y, r){
    var width=canvas.scrollWidth;
    var height=canvas.scrollHeight;
    x=(x+3*r/2)/3/r*width;
    y=(-y+3*r/2)/3/r*height;
    return {x:x,y:y};
}
function canvas_arrow(context, fromx, fromy, tox, toy) {
    var headlen = 10; // length of head in pixels
    var dx = tox - fromx;
    var dy = toy - fromy;
    var angle = Math.atan2(dy, dx);
    context.moveTo(fromx, fromy);
    context.lineTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
    context.moveTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
  }
  function draw_area(){
    var [w,h]=[canvas.scrollWidth,canvas.scrollHeight];
    ctx.fillStyle = "green";
    ctx.strokeStyle = "green";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(w/2,h/2);
    ctx.lineTo(5*w/6,h/2);
    ctx.lineTo(5*w/6,5*h/6);
    ctx.lineTo(w/2,5*h/6);
    ctx.lineTo(w/2,h/2);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(w/2,h/2);
    ctx.lineTo(4*w/6,h/2);
    ctx.lineTo(w/2,h/6);
    ctx.lineTo(w/2,h/2);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(w/2,h/2,w/3,-Math.PI/2,-Math.PI,true);
    ctx.lineTo(w/2,h/2);
    ctx.lineTo(w/2,h/3);
    ctx.stroke();
    ctx.fill();
}
function draw_legend(pr){
    var [w,h]=[canvas.scrollWidth,canvas.scrollHeight];
    ctx.beginPath();
    ctx.font="20px serif";
    ctx.strokeStyle="black";
    ctx.lineWidth=2;
    ctx.strokeText(pr, 5*w/6-4, h/2-5);//+x
    ctx.strokeText(`-${pr}`, w/6-4, h/2-5);//-x
    ctx.strokeText(pr, w/2+4, h/6+3);//+y
    ctx.strokeText(`-${pr}`, w/2+4, 5*h/6+3);//-y
    ctx.fillStyle="black";
    ctx.fillRect(5*w/6-1,h/2-3,2,6);//+x
    ctx.fillRect(w/6-1,h/2-3,2,6);//-x
    ctx.fillRect(w/2-3,h/6-1,6,2);//+y
    ctx.fillRect(w/2-3,5*h/6-1,6,2);//-y
}
function draw_scene(px,py,r){
    if(typeof(px)=="string")px=parseFloat(px);
    if(typeof(py)=="string")py=parseFloat(py);
    if(typeof(pr)=="string")pr=parseFloat(pr);
    ctx.clearRect(0,0,canvas.scrollWidth,canvas.scrollHeight);
    draw_area();
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle='black';
    canvas_arrow(ctx, 0, canvas.scrollHeight/2, canvas.scrollWidth, canvas.scrollHeight/2);
    canvas_arrow(ctx, canvas.scrollWidth/2, canvas.scrollHeight, canvas.scrollWidth/2, 0);
    ctx.stroke();
    draw_legend(r);
    if(px == null || py==null)return;
    ctx.beginPath();
    ctx.lineWidth = 2;
    if((px>=0 && px<=r && py<=0 && py>=r)||
    (px<=0 && py>=0 && x*x+y*y<=r*r)||
    (px>=0 && py>=0 && py+px*2<r)
    )
        ctx.strokeStyle='blue';
    else
        ctx.strokeStyle="red";
    var {x,y}=CenterToCanvasCoord(px,py,r);
    ctx.arc(x,y,3,0,2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.font="20px serif";
    ctx.strokeStyle='black';
    str=`(${(px).toFixed(2).toString()}; ${(py).toFixed(2).toString()})`;
    var offsetX=canvas.scrollWidth * 3 / 4-x;
    var offsetY=canvas.scrollHeight / 16-y;
    if(offsetX>=0)offsetX=0;
    if(offsetY<=0)offsetY=0;
    ctx.strokeText(str, x+5+offsetX, y-8+offsetY);
}
