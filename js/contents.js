//모달팝업 열기
function modalOpen(modal_id){
    $('.modal' + '#' + modal_id).addClass("active");
    $('body').addClass('open');
}
//모달팝업 닫기
function modalClose(modal_id){
    $('.modal' + '#' + modal_id).removeClass("active");
    $("body").removeClass("open").removeAttr("style");
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

	// 2번째 탭 컨텐츠 숨기기
    $(".tabin-body").hide();
    // 첫번째 탭콘텐츠 보이기
    $(".tabin").each(function(){
        $(this).children(".tabin-header").children("button").eq(0).addClass("active");
        $(this).children(".tabin-body").eq(0).show();
    });
    //탭메뉴 클릭 이벤트
    $(".tabin-header button").click(function(){
        $(this).parent(".tabin-header").children("button").removeClass("active");
        $(this).addClass("active");
        
        var activeTab = $(this).attr("rel");
        $(this).parents(".tabin").children(".tabin-body").hide();
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

    //커스텀 selectbox
    $(document).on('click', '.designSelect', function(event){
        $(this).toggleClass('on');
    });

    $(document).on("click", ".lists a", function(){
        var ht = $(this).html();
        $(this).parents(".designSelect").find("strong").children("a").html(ht);
    });


    //예문 안에 아무것도 없을때 hidden 클래스 추가
    $('.q_wrap').each(function() {
        if ($(this).html().trim() === '') {
            $(this).addClass('hidden');
        }
    });

    //파일찾기 커스텀1
    $("#file1").on('change',function(){
        var fileName = $("#file1").val();
        $(".upload-name1").val(fileName);
    });
    //파일찾기 커스텀2
    $("#file2").on('change',function(){
        var fileName = $("#file2").val();
        $(".upload-name2").val(fileName);
    });
    //파일찾기 커스텀3
    $("#file3").on('change',function(){
        var fileName = $("#file3").val();
        $(".upload-name3").val(fileName);
    });
    //파일찾기 커스텀4
    $("#file4").on('change',function(){
        var fileName = $("#file4").val();
        $(".upload-name4").val(fileName);
    });


});


