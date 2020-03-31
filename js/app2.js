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
$.get('../data/page-2.json')
    .then(data => {
        data.forEach((value) => {
            let img = new Images(value.image_url, value.title, value.description, value.keyword, value.horns)
            img.render();
            img.render2();

        });
    });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

Images.prototype.render = function () {
    //     let cont = $('<div></div>');
    //    $('.all-template').append(cont);
    //    let imgTitle = $('<h2></h2>').text(this.title);
    //    cont.append(imgTitle);
    //    let img = $('<img></img>').attr('src',this.image_url);
    //    cont.append(img);
    //    let imgDescr = $('<p></p>').text(this.description);
    //    cont.append(imgDescr);
         $('.first').remove();
    
          let template = $('#sec-template').html();
          let html = Mustache.render(template,this);
          console.log(this);
          
          console.log(html);
          
          $('.all-template').append(html);
          
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
