//for Player 1
var randomPic1 = Math.floor(Math.random() * 6) + 1;
var randomImg1 = "d" + randomPic1 + ".png"
var randomImgsrc1 = "images/" + randomImg1;
var img1 = document.querySelector('.img1');
img1.setAttribute('src', randomImgsrc1);//random image for player1

//for Player 2
var randomPic2 = Math.floor(Math.random() * 6) + 1;
var randomImg2 = "d" + randomPic2 + ".png"
var randomImgsrc2 = "images/" + randomImg2;
var img2 = document.querySelector('.img2');
img2.setAttribute('src', randomImgsrc2);//random image for player2

var title = document.querySelector('h1'); 
var player1 = document.querySelector('.p1');
var player2 = document.querySelector('.p2');


if (randomPic1 > randomPic2) {//when image1 is greater than the image2
    title.innerHTML = 'Dice #' + randomPic1 + ' WINS!';//title(h1)
    player1.innerHTML = '&#127942; <b>Player 1 Wins!</b>';//winner
    player2.innerHTML = '&#10060; <strike>Player 2</strike>';//loser
}else if (randomPic1 < randomPic2) {//when image1 is less than the image2
    title.innerHTML = 'Dice #' + randomPic2 + ' WINS!';//title(h1)
    player1.innerHTML = '&#10060; <strike>Player 1</strike>';//loser
    player2.innerHTML = '&#127942; <b>Player 2 Wins!</b>';//winner
}else {document.querySelector("h1").innerHTML = "Draw.";}//for identical image1 and 2
