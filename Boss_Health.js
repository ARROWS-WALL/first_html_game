var count = 100;
// プレーヤーHP
function inspect(){
  document.getElementById('boss_name').innerHTML = '倒すべき魔王';
  document.getElementById('hint').innerHTML ='46, 6C, 61, 6D, 65, 5F, 44, 65, 6D, 6F, 6E'

  var countdown = function(){
    console.log(count--);
  }
  var id = setInterval(function(){
    countdown();
    if(count <= 100 && count > 90){
      document.getElementById('message').innerHTML = '始めるぞ・・・！';
    }else if(count <= 90 && count > 80){
      document.getElementById('message').innerHTML = 'ここが貴様の墓場と知れ！！';
    }else if(count <= 80 && count > 70){
      document.getElementById('message').innerHTML = 'よく考えるがいいさ・・・時間はあまりないがな！！';
    }else if(count <= 70 && count > 60){
      document.getElementById('message').innerHTML = 'お前が殺したのはただの魔獣だったかもしれんが・・・';
    }else if(count <= 60 && count > 50){
      document.getElementById('message').innerHTML = '奴は私の友人だったのだよ、唯一のな・・・';
    }else if(count <= 50 && count > 40){
      document.getElementById('message').innerHTML = '炎に包まれている私は、そこにあるだけで災害と化す';
    }else if(count <= 40 && count > 30){
      document.getElementById('message').innerHTML = '水の性質を持った奴だけは、私の横にいても無事だった';
    }else if(count <= 30 && count > 20){
      document.getElementById('message').innerHTML = 'それを貴様は・・・！！';
    }else if(count <= 20 && count > 10){
      document.getElementById('message').innerHTML = 'これは奴の仇だ、受け取れ！！';
    }
    if(count <= 8){
      alert("「孤独の炎に焼かれろ！！」")
      alert("魔獣は破壊光線を放った")
      window.location.href = 'death2.html';
    }}, 1000);
}


function expose(){
  var tbox_value = document.getElementById('name').value;
  if(tbox_value == "Flame_Demon"){
    alert("「ああ・・・そうだ・・・」")
    alert("「俺の名は・・・フレイムデーモンだ！！」")
    window.location.href = 'final2.html';
  }else{
    alert("「残念だったなあ・・・勇者よ・・・外れだ!!」")
    window.location.href = 'death2.html';
  }
}


function escape(){
  alert("「逃げるがいいさ・・・破滅は等しく訪れる」")
  window.location.href = 'index2.html';
  }
