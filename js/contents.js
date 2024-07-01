function modalOpen(modal_id){
    $('.modal' + '#' + modal_id).css({display: 'flex'});
    /*if(typeof modal_open !== 'undefined'){
        modal_open = true;
    }*/
}

function modalClose(modal_id){
    $('.modal' + '#' + modal_id).css({display: 'none'});
    /*if(typeof modal_open !== 'undefined'){
        modal_open = false;
    }*/
}

//모달화면 위로가기
function popupTop(){
    $('.pop-test-wrap').animate({scrollTop:0}, 300);
}

$(document).ready(function(){
    $('.designSelect,.designSelect.type01, .designSelect.type02, .designSelect.type03, .designSelect.type04').on('click', function (event) {
        $(this).toggleClass('on');
    });
    
    $('body').on('click', function (e) {
        if (!$('.designSelect,.designSelect.type01, .designSelect.type02, .designSelect.type03, .designSelect.type04').is(e.target)
        && $('.designSelect,.designSelect.type01, .designSelect.type02, .designSelect.type03, .designSelect.type04').has(e.target).length === 0 
        && $('.on').has(e.target).length === 0
        ) {
            $('.designSelect.designSelect.type01, .designSelect.type02, .designSelect.type03, .designSelect.type04').removeClass('on');
        }
    });
    
    $('#stageBtn01, #stageBtn02, #stageBtn03').on('click', function (event) {
        $(this).toggleClass('on');
        $('.stage__wrap').toggleClass('on');
        $('.grap__wrap').toggleClass('off');
        if($('.stage__wrap').hasClass('on')){
            moveScroll();
        }
    });
    
    // checkbox 전체선택
    $("#step1_chk_all").click(function(){
        if($(this).prop("checked")){
            $(".step1_chk").prop("checked", true);
        } else {
            $(".step1_chk").prop("checked", false);
        }
    });
    $("#step2_chk_all").click(function(){
        if($(this).prop("checked")){
            $(".step2_chk").prop("checked", true);
        } else {
            $(".step2_chk").prop("checked", false);
        }
    });
    $('#step3_chk_all').click(function(){
        if($(this).prop("checked")){
            $(".step3_chk").prop("checked", true);
        } else {
            $(".step3_chk").prop("checked", false);
        }
    });

 
	// 탭 컨텐츠 숨기기
    $(".tab-body").hide();
    // 첫번째 탭콘텐츠 보이기
    $(".tabs").each(function(){
        $(this).children(".tab-header").children("button").eq(0).addClass("active");
        $(this).children(".tab-body").eq(0).show();
    });
    //탭메뉴 클릭 이벤트
    $(".tab-header button").click(function(){
        $(this).parent(".tab-header").children("button").removeClass("active");
        $(this).addClass("active");
        
        var activeTab = $(this).attr("rel");
        $(this).parents(".tabs").children(".tab-body").hide();
        $("#" + activeTab).fadeIn();
    });

    // 펼쳐보기
    $(".accordion").click(function(){
        $(this).toggleClass("on");
        if($(this).hasClass("on")){
            $(".accgrap").hide();
        } else {
            $(".accgrap").show();
        }
    });
});