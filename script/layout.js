//layout.js

$(document).ready(function(){

  //모달창 서식
  //1. 모달 변수 생성하기
  const modal=`
    <div class="modal">
      <div class="inner">
        <a href="#" title=""><img src="./images/modal01.jpg" alt=""></a>
        <p>
          <input type="checkbox" id="ch">
          <label for="ch">오늘 하루 열지 않음</label>
          <input type="button" value="닫기" id="c_btn">  
        </p>
      </div>
    </div>
  `;

  // 모달변수를 body의 맨 뒤쪽에 출력한다.
  $('body').append(modal);

  //쿠키생성하기
  let ch = $('.modal #ch'); //체크박스 변수

  //현재 브라우저에 쿠키정보가 있는지 없는지 유무를 판단하여 모달이 나오지 않게 함.
  if($.cookie('popup')=='none'){
    $('.modal').hide();
  }

  //쿠키의 존재 유무를 체크하여 쿠키를 생성하거나 모달윈도 숨기기
  function closeModal(){
    if(ch.is(':checked')){ //만약에 체크박스에 체크가 된 경우라면
      //쿠키를 생성하기
      $.cookie('popup','none',{expires:1,path:'/'});
    }
    //체크박스에 체크 안한 경우 그냥 모달 숨기기
    $('.modal').hide();
  }
  //닫기 버튼을 클릭하면 closeModal함수 실행하여 쿠키생성하고 모달 숨기기 한다.
  $('.modal #c_btn').click(function(){
    closeModal();
  });
  
  
  //스크롤하지 않았을 때 마우스 오버시 색상 변경
  //헤더에 마우스 오버시 색상 변경
  $('header').hover(function(){
    $('header').addClass('act'); 
    $('header h1 img').attr('src', './images/disney_logo_c.png');
    $('header .gnb > li > a, header i.fas').css('color','#1A3675');

  },
    //마우스 헤더 밖으로 나갔을때 원래대로
    function(){
      $('header').removeClass();
      $('header h1 img').attr('src', './images/disney_logo_cw.png');
      $('header .gnb > li > a, header i.fas').css('color','#fff');
    }
  );

  //세로스크롤 값 구하기
  $(window).scroll(function(){

    let sPos = $(this).scrollTop();
    //console.log(sPos);

    //스크롤 일정이상 내려갈시 헤더 서식 변경
    if(sPos>=900){
      $('header').addClass('act');
      $('header h1 img').attr('src','./images/disney_logo_c.png');
      $('header .gnb > li > a, header i.fas').css('color','#1A3675');

      $('header').mouseleave(function(){
        $('header').addClass('act');
        $('header h1 img').attr('src','./images/disney_logo_c.png');
        $('header .gnb > li > a, header i.fas').css('color','#1A3675');
      });
    }else { //세로스크롤값이 900보다 작으면
        $('header').removeClass();
        $('header h1 img').attr('src', './images/disney_logo_cw.png');
        $('header .gnb > li > a, header i.fas').css('color','#fff');
      
      //헤더에 마우스 오버시 색상 변경
      $('header').hover(function(){
        $('header').addClass('act'); 
        $('header h1 img').attr('src', './images/disney_logo_c.png');
        $('header .gnb > li > a, header i.fas').css('color','#1A3675');

      },
        //마우스 헤더 밖으로 나갔을때 원래대로
        function(){
          $('header').removeClass();
          $('header h1 img').attr('src', './images/disney_logo_cw.png');
          $('header .gnb > li > a, header i.fas').css('color','#fff');
        }
      );
    }
  });

  //내비게이션 변수선언
  let gnb = $('.gnb li');

  gnb.click(function(){
    let i = $(this).index()+1;
    //console.log(i); //1,2,3,4,5

    $('html, body').animate({scrollTop:$('main section').eq(i).offset().top-80},400,'easeOutCubic');
    return false;
  });

  //원형내비게이션
  let m_nav = $('#m_nav > ul >li');

  m_nav.click(function(){
    let i = $(this).index()+1;
    //console.log(i); //1,2,3,4,5

    $('html, body').animate({scrollTop:$('main section').eq(i).offset().top-80},400,'easeOutCubic');
    return false;
  });

});