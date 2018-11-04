var count = 100;
// プレーヤーHP
function inspect2(){
  document.getElementById('boss2_name').innerHTML = '駆逐すべき神';
  document.getElementById('hint2').innerHTML ='47, 6F, 64, 5F, 6F, 66, 5F, 46, 6C, 61, 6D, 65, 73, 3A, 48, 65, 6C, 6C, 46, 6C, 61, 6D, 65';

  var countdown = function(){
    console.log(count--);
  }
  var id = setInterval(function(){
    countdown();
    if(count <= 100 && count > 90){
      document.getElementById('message2').innerHTML = 'グオオオオオオオォ！！';
    }else if(count <= 90 && count > 80){
      document.getElementById('message2').innerHTML = 'ここで潰えろ、勇者・・・いや、けだもの！！';
    }else if(count <= 80 && count > 70){
      document.getElementById('message2').innerHTML = 'この一撃を放てばこの世界は消し飛ぶ';
    }else if(count <= 70 && count > 60){
      document.getElementById('message2').innerHTML = '無論、私とて例外ではない';
    }else if(count <= 60 && count > 50){
      document.getElementById('message2').innerHTML = 'だがそれでも構わん';
    }else if(count <= 50 && count > 40){
      document.getElementById('message2').innerHTML = '三百年、孤独の日々を過ごし・・・';
    }else if(count <= 40 && count > 30){
      document.getElementById('message2').innerHTML = 'ようやく巡り合えた友人だった・・・';
    }else if(count <= 30 && count > 20){
      document.getElementById('message2').innerHTML = 'それを貴様は・・・容赦なく殺した';
    }else if(count <= 20 && count > 10){
      document.getElementById('message2').innerHTML = 'この世界は、もう必要ない・・・';
    }
    if(count <= 8){
      alert("「この星もろとも・・・消えろ、けだもの」")
      alert("魔神は宇宙を・・・")
      alert("・・・引き裂いた")
      window.location.href = 'death2.html';
    }}, 1000);
}


function expose2(){
  var tbox_value = document.getElementById('name2').value;
  if(tbox_value == "God_of_Flames:HellFlame"){
    alert("「グオオオオオオオ！！！」");
    alert("「メリーナ・・・メリーナアアアアァァ！！！」");
    alert("「メリー・・・ナ・・・」")
    window.location.href = 'game_clear.html'
    // クリア画面へと進む
  }else{
    alert("「これで終わりだ・・・消えろ、けだもの！！」")
    alert("「魔神は宇宙を・・・」")
    alert("「・・・引き裂いた」")
    window.location.href = 'death2.html'
  }
}


function escape2(){
  document.getElementById('message2').innerHTML = '「どこに逃げるというのだ！！安楽の地などどこにもない！！この世の！！どこにも！！！」';
}
