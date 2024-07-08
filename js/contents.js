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
	//체크박스 전체 선택, 해제
	$("#allcheck").click(function() {
		if($("#allcheck").is(":checked"))
		$("input[name=check]").prop("checked", true);
		else $("input[name=check]").prop("checked", false);
	});
	
	$("input[name=check]").click(function() {
		var total = $("input[name=check]").length;
		var checked = $("input[name=check]:checked").length;
		
		if(total != checked) $("#allcheck").prop("checked", false);
		else $("#allcheck").prop("checked", true); 
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