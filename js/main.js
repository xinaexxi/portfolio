$(()=>{

    //project cover click
    let modal = $('#modal') ;
    $('section#project .content-wrap .content').on('click', function(){
        let winY = window.pageYOffset ;

        if( modal.hasClass('hide')){

            modal.css('top',winY); //현 위치 Y좌표만큼 modal창 배치
            modal.removeClass('hide');
            $('body').css('overflow', 'hidden');
        } ;

        //클릭한 cover의 id값과 같은 class인 modal content 열기
        let contentId = $(this).attr('id');
        $(`#modal .content .${contentId}`).css('display','block');

    });

    // modal background click
    $('#closeModal').on('click', ()=>{

        if( !modal.hasClass('hide')){
            modal.addClass('hide');
            $('body').css('overflow', 'auto');
        };
        $(`#modal .content > div`).css('display','none');
    });


    //modal button hover
    let goBtn = $('#goBtn > button')
    goBtn.mouseenter(function(){
        $(this).addClass('active');
    });
    goBtn.mouseleave(function(){
        $(this).removeClass('active');
    });

    $('.todoList #goBtn .goSite').on('click', ()=>{
        window.open('https://xinaexxi.github.io/','투두리스트');
    });
    $('.todoList #goBtn .goGithub').on('click', ()=>{
        window.open('https://github.com/xinaexxi/xinaexxi.github.io','투두리스트-깃허브');
    });

    $('.bank #goBtn .goSite').on('click', ()=>{
        window.open('https://xinaexxi.github.io/bank/','MG새마을금고');
    });
    $('.bank #goBtn .goGithub').on('click', ()=>{
        window.open('https://github.com/xinaexxi/bank','MG새마을금고-깃허브');
    });

    $('.museum #goBtn .goSite').on('click', ()=>{
        window.open('https://xinaexxi.github.io/museum/','국립현대미술관');
    });
    $('.museum #goBtn .goGithub').on('click', ()=>{
        window.open('https://github.com/xinaexxi/museum.git','국립현대미술관-깃허브');
    });
})