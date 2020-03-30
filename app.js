'use strict';
function Images(image_url, title, description, keyword, horns) {
    this.image_url = image_url;
    this.title = title;
    this.description = description;
    this.keyword = keyword;
    this.horns = horns;
    Images.all.push(this)
}
Images.all=[]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
$.get('./page-1.json')
    .then(data => {
        data.forEach((value) => {
            let img = new Images(value.image_url, value.title, value.description, value.keyword, value.horns)
            img.render();
            img.render2();

        });
    });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

Images.prototype.render = function () {
    let cont = $('<div></div>');
   $('.all-template').append(cont);
   let imgTitle = $('<h2></h2>').text(this.title);
   cont.append(imgTitle);
   let img = $('<img></img>').attr('src',this.image_url);
   cont.append(img);
   let imgDescr = $('<p></p>').text(this.description);
   cont.append(imgDescr);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
Images.prototype.render2 = function () {

    let optionlHorne = $('<option></option>').text(this.title);
    optionlHorne.attr('value',this.keyword)
    $('select').append(optionlHorne);    
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var selected = [];
$('select').on('change', function()  {
    var selectedImg = this.value; 
    selected = []; 
    for(let f = 0 ; f < Images.all.length ; f++){
        if (Images.all[f].keyword == selectedImg){
            selected.push(Images.all[f]);
        }
    }
    render3();
 }
 )       

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function render3 (){
    
    $('.all-template').empty();
    selected.forEach((value)=>{
        let cont2 = $('<div></div>');
        $('.all-template').append(cont2);
        let imgTitle = $('<h2></h2>').text(value.title);
        cont2.append(imgTitle);
       let img = $('<img></img>').attr('src',value.image_url);
       cont2.append(img);
       let imgDescr = $('<p></p>').text(value.description);
       cont2.append(imgDescr);
    })
};
////////////////////// NO.1 got stuck and needed another way ): ///////////////////////////////////////////
// Image.prototype.render = function (){
// let imgClone = $('.all-template').clone();
// imgClone.removeClass('all-template');
// imgClone.find('.imgTitle').text(this.title);
// console.log(this.title);

// imgClone.find("img").attr("src" , this.image_url);

// console.log(this.image_url);

// imgClone.find('.imgDesc').text(this.description);
// console.log(this.description);

// imgClone.find('.photo').text(this.keyword);
// $('.photo').append($('<option>').val(this.keyword).text(this.keyword))

// $('main').append(imgClone);

// }

// // function populate(selector) {
// //     $(selector)
// //       .append('<option value="foo">foo</option>')
// //       .append('<option value="bar">bar</option>')
// //   }
  
// //   populate('#myform .myselect');
// Image.prototype.render2 = function (){
// }
// render2 ();