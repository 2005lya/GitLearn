define(['MVC', 'jquery', 'css!./bg.css'], function(MVC, $){


    // console.log('bg');
    // console.log(MVC);
    // console.log($);

    // $('#app').html(123)



    // define(['MVC', 'jquery', 'css!./bg.css'], function(MVC, $){
    
        // Model
        MVC.addModel('bg',  {
            imgs : [
                './images/01.jpeg',
                './images/02.jpeg',
                './images/03.jpeg',
                './images/04.jpeg',
                './images/05.jpeg',
                './images/06.jpeg',
            ]
        })

        //View
        MVC.addView('bg', function(M){

            let data = M.get('bg');
            // console.log(data);
            let dom = $('<div class="bg"></div>');
            let html = "";
            data.imgs.forEach(item => {
                html += `<div class="bg-item" style="background-image:url(${item});"></div>`
            });
            return dom.html(html).insertBefore('#app');
        })

        //Ctrl

        MVC.addCtrl('bg', function(M, V){
            let dom = V.render('bg');
            
            let imgs = dom.find('.bg-item');
            
            let len = imgs.length;
            let index = 0;
           
            setInterval(() => {
                imgs
                   .eq(index % len).fadeIn(500)
                   .siblings().fadeOut(500);
                index++;


            }, 2000)


        })

        //install

        // MVC.install();
})