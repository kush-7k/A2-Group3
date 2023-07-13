main_img = document.getElementById('main_img');

thumb1 = document.getElementById('thumb1');
thumb1src = document.getElementById('img1').src; 
//fetching the image first by id call method
thumb2 = document.getElementById('thumb2');
thumb2src = document.getElementById('img2').src; 
//fetching the image second by id call method
thumb3 = document.getElementById('thumb3');
thumb3src = document.getElementById('img3').src; 

//fetching the image third by id call method
thumb4 = document.getElementById('thumb4');
thumb4src = document.getElementById('img4').src; 

//fetching the image fourth by id call method
thumb5 = document.getElementById('thumb5');
thumb5src = document.getElementById('img5').src; 

//fetching the image fifth by id call method

pic  = main_img.src;//setting the main image variable into the pic variable

//image 1 is been displayed on full screen when clicked
thumb1.addEventListener("click",function displayImage(){
    main_img.src = thumb1src;
    document.getElementById("caption").innerHTML = "This pink Flowers grow more in euqator"
}
)

//image 2 is been displayed on full screen when clicked
thumb2.addEventListener("click",function displayImage(){
    main_img.src = thumb2src;
    document.getElementById("caption").innerHTML = "This pink Flowers grow more in euqator"
}
)

//image 3 is been displayed on full screen when clicked
thumb3.addEventListener("click",function(){
    this.src = thumb3src;
    document.getElementById("caption").innerHTML = "This pink Flowers grow more in euqator"
 
}
)




thumb1.addEventListener("click",function(){
    main_img.src = thumb1src;
}
)






// Display an image to display bar
function displayImage(img) {
	display.querySelector('img').setAttribute('src', img.getAttribute('src').replace('small', 'large'));
	display.querySelector('img').setAttribute('alt', img.getAttribute('alt'));
	
	
}

