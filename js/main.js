//header change on scroll

var navbar=document.querySelector(".navbar");
window.addEventListener("scroll",function () {
  var y=window.scrollY;
  if (y<1) {
    navbar.style.backgroundColor="transparent";
  }else{
    navbar.style.backgroundColor="rgba(0, 0, 0, 0.4)";
  }
})
//setfixed testimonal width//
var testimonial=document.querySelectorAll(".testimonial");
function setSize(){
  for (var i = 0; i < testimonial.length; i++) {
    testimonial[i].style.width=testimonial[i].scrollWidth+"px";
    console.log(testimonial[i].style.width);
  }
}
setSize();
window.addEventListener("resize",setSize);

//carousel//

function Carousel(containerId) {
  this.container=document.getElementById(containerId);
  this.imgArray=this.container.querySelectorAll(".carousel__img");
  this.btnContainer=document.createElement("div");
  this.btnContainer.className="carousel__btn-container";
  this.container.appendChild(this.btnContainer);
  for (var i = 0; i < this.imgArray.length; i++) {
    this.imgArray[i].width=this.imgArray[i].scrollWidth;
    this.imgArray[i].style.left=this.imgArray[i].width * i + "px";
    this.imgArray[i].pos=i;
    var btn=document.createElement("input");
    btn.setAttribute("type","radio");
    btn.setAttribute("name","radio-"+containerId);
    if (i==0) {
      btn.setAttribute("checked","true");
    }
    btn.className="carousel__btn";
    btn.pos=i;
    btn.imgs=this.imgArray;
    this.btnContainer.appendChild(btn);
  }
  this.btnArray=this.btnContainer.querySelectorAll(".carousel__btn");
  for (var i = 0; i < this.btnArray.length; i++) {
    this.btnArray[i].onclick=function () {
      for (var i = 0; i < this.imgs.length; i++) {
        if (this.imgs[i].pos==this.pos) {
          this.imgs[i].style.opacity=1;

         }else{
           this.imgs[i].style.opacity=0;
         }
        // if (this.imgs[i].pos==this.imgs.length-1) {
        //   this.imgs[i].pos=0;
        // }
        // console.log(this.imgs[i].pos);
        // this.imgs[i].pos++;

        this.imgs[i].style.left= (this.imgs[i].width * i) - (this.imgs[i].width * this.pos) +"px"  ;
      }
    }
  }
}

//different style of slider used on testimonial section
function Slider(containerId){
  this.container=document.getElementById(containerId);
  this.array=containerId.querySelectorAll("img");

}

Slider.prototype.slideLeft = function () {
  for (var i = 0; i < this.array.length; i++) {
    this.array[i].styu
  }
};
var xyz=new Carousel("interface-carousel");

 var testimonals= new Carousel("testimonial-carousel");
