define(['MVC', 'jquery'], function(MVC, $){
  


//   let name = "msg";

//     MVC.addModel(name, 'hello')
//     MVC.addView(name, function(M){
//         let data = M.get(name);
//         console.log(data);     
       
//         let dom = $('<div class="msg"></div>');
//         let html = data;
        

//         return dom.html(html).insertBefore('#app');
        
//     });
//     MVC.addCtrl(name, function(M, V){
//         let dom = V.render(name);
//         console.log(dom);
//     })



    
    let name = 'common.header';
    MVC.addModel(name, {
        // icon:[
        //     './images/logo.png',
        //     './images/icon-rss.png',
        //     './images/icon-facebook.png',
        //     './images/icon-twitter',
        //     './images/icon-googleplus.png',
        //     './images/icon-dribble.png',
        //     './images/icon-flickr.png',
        //     './images/icon-tumblr.png'
        // ]

       
        });


    // MVC.addView(name, function(Model){
    //     let data = Model.get(name);

    //     // let data =  $.get('../data/header.json')
       
    //     // console.log(111,data);
    //     let dom = $("<div class='header'></div>");
    //     let shareIconHtml = '';
    //     data.icon.forEach(item => {
    //         // console.log(111, item.img);
    //         shareIconHtml += `
    //         <a href= "${item.href}">
    //         <img src="${item.img}" alt="">
    //         </a>
    //         `
    //     })
        // console.log(shareIconHtml)

//         let navHtml = '';
//         function renderChildTpl(child){
//             return child.map(child => {
//                 return `
//                 <li>
//                 <a href="${child.href}">${child.title}</a>
//                 </li>
//                 `
//             }).join('')
//         } 
//         data.nav.forEach(item => {
//             navHtml += `
//             <li>
//             <a href="${item.href}">${item.title}<a>
//             ${item.list ? `<ul class=""nav-sub-list>${
//                 item.list.map(child => {
//                     return `
//                     <li>
//                     <a href="${child.href}">${child.title}</a>
//                     </li> 
//                     `
//                 }).join('')
//             }</ul>` : ''}
//             </li>
// `
//         })

    //     return dom.html(shareIconHtml).insertAfter('#app');
       
    // })



    $.get('./data/header.json', data => {

        let logodom = $("<div class='logo'></div>");
        let logoHtml = `<img src="${data.logo}" alt="">`;
        $('#app').append( logodom.html(logoHtml));
        // MVC.addView(name, function(Model){
            let dom = $("<div class='header'></div>");
            let shareIconHtml = '';
            data.icon.forEach(item => {
                console.log(111, item.img);
                shareIconHtml += `
                <a href= "${item.href}">
                <img src="${item.img}" alt="">
                </a>
                `
            });

             $('#app').append(dom.html(shareIconHtml));
        // })


    });

    MVC.addCtrl(name, function(M, V){
        let dom = V.render(name);

    })

})
