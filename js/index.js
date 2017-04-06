var redditData;
var title = [];

function preload(){
    redditData = loadJSON("https://www.reddit.com/r/worldnews.json");
    console.log(redditData);
}

function setup(){
  var data = getReddit(redditData);
}

function getReddit(reddit) {
  var title0 = reddit.data.children[0].data.title;
  var title1 = reddit.data.children[1].data.title;
  var title2 = reddit.data.children[2].data.title;
  var title3 = reddit.data.children[3].data.title;
  var title4 = reddit.data.children[4].data.title;
  var title5 = reddit.data.children[5].data.title;
  var title6 = reddit.data.children[6].data.title;
  var title7 = reddit.data.children[7].data.title;
  var title8 = reddit.data.children[8].data.title;
  var title9 = reddit.data.children[9].data.title;
  var title10 = reddit.data.children[10].data.title;
  var title11 = reddit.data.children[11].data.title;
  var title12 = reddit.data.children[12].data.title;
  var title13 = reddit.data.children[13].data.title;
  var title14 = reddit.data.children[14].data.title;
  var title15 = reddit.data.children[15].data.title;
  var title16 = reddit.data.children[16].data.title;
  var title17 = reddit.data.children[17].data.title;
  var title18 = reddit.data.children[18].data.title;
  var title19 = reddit.data.children[19].data.title;
  var title20 = reddit.data.children[20].data.title;

////////////////////////////////////////////////////////////////////////////////////////

  var time0 = reddit.data.children[0].data.created_utc;
  var time1 = reddit.data.children[1].data.created_utc;
  var time2 = reddit.data.children[2].data.created_utc;
  var time3 = reddit.data.children[3].data.created_utc;
  var time4 = reddit.data.children[4].data.created_utc;
  var time5 = reddit.data.children[5].data.created_utc;
  var time6 = reddit.data.children[6].data.created_utc;
  var time7 = reddit.data.children[7].data.created_utc;
  var time8 = reddit.data.children[8].data.created_utc;
  var time9 = reddit.data.children[9].data.created_utc;
  var time10 = reddit.data.children[10].data.created_utc;
  var time11 = reddit.data.children[11].data.created_utc;
  var time12 = reddit.data.children[12].data.created_utc;
  var time13 = reddit.data.children[13].data.created_utc;
  var time14 = reddit.data.children[14].data.created_utc;
  var time15 = reddit.data.children[15].data.created_utc;
  var time16 = reddit.data.children[16].data.created_utc;
  var time17 = reddit.data.children[17].data.created_utc;
  var time18 = reddit.data.children[18].data.created_utc;
  var time19 = reddit.data.children[19].data.created_utc;
  var time20 = reddit.data.children[20].data.created_utc;

////////////////////////////////////////////////////////////////////////////////////////

  var fullDate0 = new Date(time0 * 1000);
  var fullDate1 = new Date(time1 * 1000);
  var fullDate2 = new Date(time2 * 1000);
  var fullDate3 = new Date(time3 * 1000);
  var fullDate4 = new Date(time4 * 1000);
  var fullDate5 = new Date(time5 * 1000);
  var fullDate6 = new Date(time6 * 1000);
  var fullDate7 = new Date(time7 * 1000);
  var fullDate8 = new Date(time8 * 1000);
  var fullDate9 = new Date(time9 * 1000);
  var fullDate10 = new Date(time10 * 1000);
  var fullDate11 = new Date(time11 * 1000);
  var fullDate12 = new Date(time12 * 1000);
  var fullDate13 = new Date(time13 * 1000);
  var fullDate14 = new Date(time14 * 1000);
  var fullDate15 = new Date(time15 * 1000);
  var fullDate16 = new Date(time16 * 1000);
  var fullDate17 = new Date(time17 * 1000);
  var fullDate18 = new Date(time18 * 1000);
  var fullDate19 = new Date(time19 * 1000);
  var fullDate20 = new Date(time20 * 1000);

////////////////////////////////////////////////////////////////////////////////////////

  var hours0 = fullDate0.getHours();
  var hours1 = fullDate1.getHours();
  var hours2 = fullDate2.getHours();
  var hours3 = fullDate3.getHours();
  var hours4 = fullDate4.getHours();
  var hours5 = fullDate5.getHours();
  var hours6 = fullDate6.getHours();
  var hours7 = fullDate7.getHours();
  var hours8 = fullDate8.getHours();
  var hours9 = fullDate9.getHours();
  var hours10 = fullDate10.getHours();
  var hours11 = fullDate11.getHours();
  var hours12 = fullDate12.getHours();
  var hours13 = fullDate13.getHours();
  var hours14 = fullDate14.getHours();
  var hours15 = fullDate15.getHours();
  var hours16 = fullDate16.getHours();
  var hours17 = fullDate17.getHours();
  var hours18 = fullDate18.getHours();
  var hours19 = fullDate19.getHours();
  var hours20 = fullDate20.getHours();

////////////////////////////////////////////////////////////////////////////
  if (hours0 > 12 && hours0 < 22)  {
    hours0 = ("0" + (hours0 - 12));
  } 
  else if (hours0 < 10) {
    hours0 = ("0" + hours0);
  }
  else if (hours0 > 9 && hours0 < 13) {
  }
  else {
    hours0 = (hours0 - 12);
  }
////////////////////////////////
  if (hours1 > 12 && hours1 < 22) {
    hours1 = ("0" + (hours1 - 12));
  }
  else if (hours1 < 10) {
    hours1 = ("0" + hours1);
  } 
  else if (hours1 > 9 && hours1 < 13) {
  }
  else {
    hours1 = (hours1 - 12);
  }
////////////////////////////////
  if (hours2 > 12 && hours2 < 22) {
    hours2 = ("0" + (hours2 - 12));
  } 
  else if (hours2 < 10) {
    hours2 = ("0" + hours2);
  }
  else if (hours2 > 9 && hours2 < 13) {
  }
  else {
    hours2 = (hours2 - 12);
  }
////////////////////////////////
  if (hours3 > 12 && hours3 < 22) {
    hours3 = ("0" + (hours3 - 12));
  } 
  else if (hours3 < 10) {
    hours3 = ("0" + hours3);
  }
  else if (hours3 > 9 && hours3 < 13) {
  }
  else {
    hours3 = (hours3 - 12);
  }
////////////////////////////////
  if (hours4 > 12 && hours4 < 22) {
    hours4 = ("0" + (hours4 - 12));
  } 
  else if (hours4 < 10) {
    hours4 = ("0" + hours4);
  }
  else if (hours4 > 9 && hours4 < 13) {
  }
  else {
    hours4 = (hours4 - 12);
  }
////////////////////////////////
  if (hours5 > 12 && hours5 < 22) {
    hours5 = ("0" + (hours5 - 12));
  } 
  else if (hours5 < 10) {
    hours5 = ("0" + hours5);
  }
  else if (hours5 > 9 && hours5 < 13) {
  }
  else {
    hours5 = (hours5 - 12);
  }
////////////////////////////////
  if (hours6 > 12 && hours6 < 22) {
    hours6 = ("0" + (hours6 - 12));
  } 
  else if (hours6 < 10) {
    hours6 = ("0" + hours6);
  }
  else if (hours6 > 9 && hours6 < 13) {
  }
  else {
    hours6 = (hours6 - 12);
  }
////////////////////////////////
  if (hours7 > 12 && hours7 < 22) {
    hours7 = ("0" + (hours7 - 12));
  } 
  else if (hours7 < 10) {
    hours7 = ("0" + hours7);
  }
  else if (hours7 > 9 && hours7 < 13) {
  }
  else {
    hours7 = (hours7 - 12);
  }
////////////////////////////////
  if (hours8 > 12 && hours8 < 22) {
    hours8 = ("0" + (hours8 - 12));
  } 
  else if (hours8 < 10) {
    hours8 = ("0" + hours8);
  }
  else if (hours8 > 9 && hours8 < 13) {
  }
  else {
    hours8 = (hours8 - 12);
  }
////////////////////////////////
  if (hours9 > 12 && hours9 < 22) {
    hours9 = ("0" + (hours9 - 12));
  } 
  else if (hours9 < 10) {
    hours9 = ("0" + hours9);
  }
  else if (hours9 > 9 && hours9 < 13) {
  }
  else {
    hours9 = (hours9 - 12);
  }
////////////////////////////////
  if (hours10 > 12 && hours10 < 22) {
    hours10 = ("0" + (hours10 - 12));
  } 
  else if (hours10 < 10) {
    hours10 = ("0" + hours10);
  }
  else if (hours10 > 9 && hours10 < 13) {
  }
  else {
    hours10 = (hours10 - 12);
  }
////////////////////////////////
  if (hours11 > 12 && hours11 < 22) {
    hours11 = ("0" + (hours11 - 12));
  } 
  else if (hours11 < 10) {
    hours11 = ("0" + hours11);
  }
  else if (hours11 > 9 && hours11 < 13) {
  }
  else {
    hours11 = (hours11 - 12);
  }
////////////////////////////////
   if (hours12 > 12 && hours12 < 22) {
    hours12 = ("0" + (hours12 - 12));
  } 
  else if (hours12 < 10) {
    hours12 = ("0" + hours12);
  }
  else if (hours12 > 9 && hours12 < 13) {
  }
  else {
    hours12 = (hours12 - 12);
  }
////////////////////////////////  
  if (hours13 > 12 && hours13 < 22) {
    hours13 = ("0" + (hours13 - 12));
  } 
  else if (hours13 < 10) {
    hours13 = ("0" + hours13);
  }
  else if (hours13 > 9 && hours13 < 13) {
  }
  else {
    hours13 = (hours13 - 12);
  }
////////////////////////////////
  if (hours14 > 12 && hours14 < 22) {
    hours14 = ("0" + (hours14 - 12));
  }
  else if (hours14 < 10) {
    hours14 = ("0" + hours14);
  }
  else if (hours14 > 9 && hours14 < 13) {
  }
  else {
    hours14 = (hours14 - 12);
  } 
////////////////////////////////
  if (hours15 > 12 && hours15 < 22) {
    hours15 = ("0" + (hours15 - 12));
  } 
  else if (hours15 < 10) {
    hours15 = ("0" + hours15);
  }
  else if (hours15 > 9 && hours15 < 13) {
  }
  else {
    hours15 = (hours15 - 12);
  } 
////////////////////////////////
  if (hours16 > 12 && hours16 < 22) {
    hours16 = ("0" + (hours16 - 12));
  } 
  else if (hours16 < 10) {
    hours16 = ("0" + hours16);
  }
  else if (hours16 > 9 && hours16 < 13) {
  }
  else {
    hours16 = (hours16 - 12);
  } 
////////////////////////////////
  if (hours17 > 12 && hours17 < 22) {
    hours17 = ("0" + (hours17 - 12));
  } 
  else if (hours17 < 10) {
    hours17 = ("0" + hours17);
  }
  else if (hours17 > 9 && hours17 < 13) {
  }
  else {
    hours17 = (hours17 - 12);
  } 
////////////////////////////////
  if (hours18 > 12 && hours18 < 22) {
    hours18 = ("0" + (hours18 - 12));
  } 
  else if (hours18 < 10) {
    hours18 = ("0" + hours18);
  }
  else if (hours18 > 9 && hours18 < 13) {
  }
  else {
    hours18 = (hours18 - 12);
  } 
////////////////////////////////
  if (hours19 > 12 && hours19 < 22) {
    hours19 = ("0" + (hours19 - 12));
  } 
  else if (hours19 < 10) {
    hours19 = ("0" + hours19);
  }
  else if (hours19 > 9 && hours19 < 13) {
  }
  else {
    hours19 = (hours19 - 12);
  } 
/////////////////////////////////
  if (hours20 > 12 && hours20 < 22) {
    hours20 = ("0" + (hours20 - 12));
  } 
  else if (hours20 < 10) {
    hours20 = ("0" + hours20);
  }
  else if (hours20 > 9 && hours20 < 13) {
  }
  else {
    hours20 = (hours20 - 12);
  } 
////////////////////////////////////////////////////////////////////////////
  var mins0 = fullDate0.getMinutes();
  var mins1 = fullDate1.getMinutes();
  var mins2 = fullDate2.getMinutes();
  var mins3 = fullDate3.getMinutes();
  var mins4 = fullDate4.getMinutes();
  var mins5 = fullDate5.getMinutes();
  var mins6 = fullDate6.getMinutes();
  var mins7 = fullDate7.getMinutes();
  var mins8 = fullDate8.getMinutes();
  var mins9 = fullDate9.getMinutes();
  var mins10 = fullDate10.getMinutes();
  var mins11 = fullDate11.getMinutes();
  var mins12 = fullDate12.getMinutes();
  var mins13 = fullDate13.getMinutes();
  var mins14 = fullDate14.getMinutes();
  var mins15 = fullDate15.getMinutes();
  var mins16 = fullDate16.getMinutes();
  var mins17 = fullDate17.getMinutes();
  var mins18 = fullDate18.getMinutes();
  var mins19 = fullDate19.getMinutes();
  var mins20 = fullDate20.getMinutes();

////////////////////////////////////////////////////////////////////////////////////////
  if (mins0.toString().length == 1) {
    mins0 = ( "0" + mins0);
  }
////////////////////////////////////////////
  if (mins1.toString().length == 1) {
    mins1 = ( "0" + mins1);
  }
////////////////////////////////////////////
  if (mins2.toString().length == 1) {
    mins2 = ( "0" + mins2);
  }
////////////////////////////////////////////
  if (mins3.toString().length == 1) {
    mins3 = ( "0" + mins3);
  }
////////////////////////////////////////////
  if (mins4.toString().length == 1) {
    mins4 = ( "0" + mins4);
  }
////////////////////////////////////////////
  if (mins5.toString().length == 1) {
    mins5 = ( "0" + mins5);
  }
////////////////////////////////////////////
  if (mins6.toString().length == 1) {
    mins6 = ( "0" + mins6);
  }
////////////////////////////////////////////
  if (mins7.toString().length == 1) {
    mins7 = ( "0" + mins7);
  }
////////////////////////////////////////////
  if (mins8.toString().length == 1) {
    mins8 = ( "0" + mins8);
  }
////////////////////////////////////////////
  if (mins9.toString().length == 1) {
    mins9 = ( "0" + mins9);
  }
////////////////////////////////////////////
  if (mins10.toString().length == 1) {
    mins10 = ( "0" + mins10);
  }
////////////////////////////////////////////
  if (mins11.toString().length == 1) {
    mins11 = ( "0" + mins11);
  }
////////////////////////////////////////////
  if (mins12.toString().length == 1) {
    mins12 = ( "0" + mins12);
  }
////////////////////////////////////////////
  if (mins13.toString().length == 1) {
    mins13 = ( "0" + mins13);
  }
////////////////////////////////////////////
  if (mins14.toString().length == 1) {
    mins14 = ( "0" + mins14);
  }
////////////////////////////////////////////
  if (mins15.toString().length == 1) {
    mins15 = ( "0" + mins15);
  }
////////////////////////////////////////////
  if (mins16.toString().length == 1) {
    mins16 = ( "0" + mins16);
  }
////////////////////////////////////////////
  if (mins17.toString().length == 1) {
    mins17 = ( "0" + mins17);
  }
////////////////////////////////////////////
  if (mins18.toString().length == 1) {
    mins18 = ( "0" + mins18);
  }
////////////////////////////////////////////
  if (mins19.toString().length == 1) {
    mins19 = ( "0" + mins19);
  } 
////////////////////////////////////////////
if (mins20.toString().length == 1) {
    mins20 = ( "0" + mins20);
  } 
////////////////////////////////////////////////////////////////////////////////////////

  var stamp0 = hours0 + ":" + mins0;
  var stamp1 = hours1 + ":" + mins1;
  var stamp2 = hours2 + ":" + mins2;
  var stamp3 = hours3 + ":" + mins3;
  var stamp4 = hours4 + ":" + mins4;
  var stamp5 = hours5 + ":" + mins5;
  var stamp6 = hours6 + ":" + mins6;
  var stamp7 = hours7 + ":" + mins7;
  var stamp8 = hours8 + ":" + mins8;
  var stamp9 = hours9 + ":" + mins9;
  var stamp10 = hours10 + ":" + mins10;
  var stamp11 = hours11 + ":" + mins11;
  var stamp12 = hours12 + ":" + mins12;
  var stamp13 = hours13 + ":" + mins13;
  var stamp14 = hours14 + ":" + mins14;
  var stamp15 = hours15 + ":" + mins15;
  var stamp16 = hours16 + ":" + mins16;
  var stamp17 = hours17 + ":" + mins17;
  var stamp18 = hours18 + ":" + mins18;
  var stamp19 = hours19 + ":" + mins19;
  var stamp20 = hours20 + ":" + mins20;
/* HEADLINE AND TIME INJECTERS *////////////////////////////////////////////////////////////  
  $('#feed div:nth-of-type(1) h3').html("<h3>"+title0+"</h3>");
  $('#feed div:nth-of-type(2) h3').html("<h3>"+title1+"</h3>");
  $('#feed div:nth-of-type(3) h3').html("<h3>"+title2+"</h3>");
  $('#feed div:nth-of-type(4) h3').html("<h3>"+title3+"</h3>");
  $('#feed div:nth-of-type(5) h3').html("<h3>"+title4+"</h3>");
  $('#feed div:nth-of-type(6) h3').html("<h3>"+title5+"</h3>");
  $('#feed div:nth-of-type(7) h3').html("<h3>"+title6+"</h3>");
  $('#feed div:nth-of-type(8) h3').html("<h3>"+title7+"</h3>");
  $('#feed div:nth-of-type(9) h3').html("<h3>"+title8+"</h3>");
  $('#feed div:nth-of-type(10) h3').html("<h3>"+title9+"</h3>");
  $('#feed div:nth-of-type(11) h3').html("<h3>"+title10+"</h3>");
  $('#feed div:nth-of-type(12) h3').html("<h3>"+title11+"</h3>");
  $('#feed div:nth-of-type(13) h3').html("<h3>"+title12+"</h3>");
  $('#feed div:nth-of-type(14) h3').html("<h3>"+title13+"</h3>");
  $('#feed div:nth-of-type(15) h3').html("<h3>"+title14+"</h3>");
  $('#feed div:nth-of-type(16) h3').html("<h3>"+title15+"</h3>");
  $('#feed div:nth-of-type(17) h3').html("<h3>"+title16+"</h3>");
  $('#feed div:nth-of-type(18) h3').html("<h3>"+title17+"</h3>");
  $('#feed div:nth-of-type(19) h3').html("<h3>"+title18+"</h3>");
  $('#feed div:nth-of-type(20) h3').html("<h3>"+title19+"</h3>");
  $('#feed div:nth-of-type(21) h3').html("<h3>"+title20+"</h3>");
  
//test appends//$('#feed').append("<div class=div'><div class='timeWrap'><div class='timeBox'><h2>"+stamp8+"</h2></div></div><h3>"+title8+"</h3></div><span></span>");
//test appends//$('#feed').append("<div class=div'><div class='timeWrap'><div class='timeBox'><h2>"+stamp1+"</h2></div></div><h3>"+title10+"</h3></div><span></span>");
   
  $('#feed .patches:nth-of-type(1) h2').html("<h2>"+stamp0+"</h2>");
  $('#feed .patches:nth-of-type(2) h2').html("<h2>"+stamp1+"</h2>");
  $('#feed .patches:nth-of-type(3) h2').html("<h2>"+stamp2+"</h2>");
  $('#feed .patches:nth-of-type(4) h2').html("<h2>"+stamp3+"</h2>");
  $('#feed .patches:nth-of-type(5) h2').html("<h2>"+stamp4+"</h2>");
  $('#feed .patches:nth-of-type(6) h2').html("<h2>"+stamp5+"</h2>");
  $('#feed .patches:nth-of-type(7) h2').html("<h2>"+stamp6+"</h2>");
  $('#feed .patches:nth-of-type(8) h2').html("<h2>"+stamp7+"</h2>");
  $('#feed .patches:nth-of-type(9) h2').html("<h2>"+stamp8+"</h2>");
  $('#feed .patches:nth-of-type(10) h2').html("<h2>"+stamp9+"</h2>");
  $('#feed .patches:nth-of-type(11) h2').html("<h2>"+stamp10+"</h2>");
  $('#feed .patches:nth-of-type(12) h2').html("<h2>"+stamp11+"</h2>");
  $('#feed .patches:nth-of-type(13) h2').html("<h2>"+stamp12+"</h2>");
  $('#feed .patches:nth-of-type(14) h2').html("<h2>"+stamp13+"</h2>");
  $('#feed .patches:nth-of-type(15) h2').html("<h2>"+stamp14+"</h2>");
  $('#feed .patches:nth-of-type(16) h2').html("<h2>"+stamp15+"</h2>");
  $('#feed .patches:nth-of-type(17) h2').html("<h2>"+stamp16+"</h2>");
  $('#feed .patches:nth-of-type(18) h2').html("<h2>"+stamp17+"</h2>");
  $('#feed .patches:nth-of-type(19) h2').html("<h2>"+stamp18+"</h2>");
  $('#feed .patches:nth-of-type(20) h2').html("<h2>"+stamp19+"</h2>");
  $('#feed .patches:nth-of-type(21) h2').html("<h2>"+stamp20+"</h2>");
/* ARTICLE DROPPER *////////////////////////////////////////////////////////////////////////
  $(document).ready(function() {
    $('#feed div:nth-of-type(1)').click(function() {
      $('#feed span:nth-of-type(1)').toggle();
    });
    $('#feed div:nth-of-type(2)').click(function() {
      $('#feed span:nth-of-type(2)').toggle();
    });
    $('#feed div:nth-of-type(3)').click(function() {
      $('#feed span:nth-of-type(3)').toggle();
    });
    $('#feed div:nth-of-type(4)').click(function() {
      $('#feed span:nth-of-type(4)').toggle();
    });
    $('#feed div:nth-of-type(5)').click(function() {
      $('#feed span:nth-of-type(5)').toggle();
    });
    $('#feed div:nth-of-type(6)').click(function() {
      $('#feed span:nth-of-type(6)').toggle();
    });
    $('#feed div:nth-of-type(7)').click(function() {
      $('#feed span:nth-of-type(7)').toggle();
    });
    $('#feed div:nth-of-type(8)').click(function() {
      $('#feed span:nth-of-type(8)').toggle();
    });
    $('#feed div:nth-of-type(9)').click(function() {
      $('#feed span:nth-of-type(9)').toggle();
    });
    $('#feed div:nth-of-type(10)').click(function() {
      $('#feed span:nth-of-type(10)').toggle();
    });
    $('#feed div:nth-of-type(11)').click(function() {
      $('#feed span:nth-of-type(11)').toggle();
    });
    $('#feed div:nth-of-type(12)').click(function() {
      $('#feed span:nth-of-type(12)').toggle();
    });
    $('#feed div:nth-of-type(13)').click(function() {
      $('#feed span:nth-of-type(13)').toggle();
    });
    $('#feed div:nth-of-type(14)').click(function() {
      $('#feed span:nth-of-type(14)').toggle();
    });
    $('#feed div:nth-of-type(15)').click(function() {
      $('#feed span:nth-of-type(15)').toggle();
    });
    $('#feed div:nth-of-type(16)').click(function() {
      $('#feed span:nth-of-type(16)').toggle();
    });
    $('#feed div:nth-of-type(17)').click(function() {
      $('#feed span:nth-of-type(17)').toggle();
    });
    $('#feed div:nth-of-type(18)').click(function() {
      $('#feed span:nth-of-type(18)').toggle();
    });
    $('#feed div:nth-of-type(19)').click(function() {
      $('#feed span:nth-of-type(19)').toggle();
    });
    $('#feed div:nth-of-type(20)').click(function() {
      $('#feed span:nth-of-type(20)').toggle();
    });
/* MENU DROPDOWNER */////////////////////////////////////////////////////////////////////////////
    $('#dropDownNav img:nth-of-type(1)').click(function() {
      $('#mobileDropContainer').toggle();
      $('[id=inputPopup]').hide();
    });
    $('#closer').click(function() {
      $('#mobileDropContainer').toggle();
    });
/* FILTER BUTTONS *//////////////////////////////////////////////////////////////////////////////   
    $('#headerContainer li:nth-of-type(1)').click(function() {
      $('[id=politics]').toggle();
      $('[id=politics] + span').hide();
      $('#headerContainer li:nth-of-type(1)').css('background-color', 'rgb(200, 200, 200)');
    });
    $('#headerContainer li:nth-of-type(2)').click(function() {
      $('[id=tech]').toggle();
      $('[id=tech] + span').hide();
    });
    $('#headerContainer li:nth-of-type(3)').click(function() {
      $('[id=industry]').toggle();
      $('[id=industry] + span').hide();
    });
    $('#headerContainer li:nth-of-type(4)').click(function() {
      $('[id=foreign]').toggle();
      $('[id=foreign] + span').hide();
    });
    $('#headerContainer li:nth-of-type(5)').click(function() {
      $('[id=culture]').toggle();
      $('[id=culture] + span').hide();
    });
    $('#headerContainer li:nth-of-type(6)').click(function() {
      $('[class=patches]').show();
    });
/* FILTER BUTTONS *//////////////////////////////////////////////////////////////////////////////   
    $('#footerContainer li:nth-of-type(2)').click(function() {
      $('[id=inputPopup]').toggle();
    });
  });
///^^^^^^^^^END OF DOC READY THING^^^^^^^////////////////////////////////////////////////////////////
}



