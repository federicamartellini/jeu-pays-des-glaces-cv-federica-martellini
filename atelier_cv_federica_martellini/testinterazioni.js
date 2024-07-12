/* Explication du code :
1 - Tout d'abord : je déclare mes variables*/
     
let glace1 = document.getElementById("coll1");
let p = document.getElementById("paydesglaces");
let glace2 = document.getElementById("coll2");
let glace3 = document.getElementById("coll3");
let glace4 = document.getElementById("coll4");
let glace5 = document.getElementById("coll5");
let glace6 = document.getElementById("coll6");
let masque = window.document.getElementById('masque');
let sprite = window.document.getElementById('sprite');
const mvtInterval = 150;
let moveRight = false;
let moveLeft = false;
let moveSpeed = 2;
let affichagescore = window.document.getElementById('score');
/* Explication du code :
2 - Tout d'abord : je vais parametrer les fleches pour faire marcher le manchot dans le Pays des Glaces. Ceci comporte l'utilisation des touches 37,38,39 et 40. Le manchot va pouvoir marcher, sauter, descendre et tourner en arriere*/    

window.addEventListener("keydown", startMoving);

    function startMoving(event) {
        let code = event.keyCode;
            switch (code) {
                case 37:               
                    sprite.style.transform="scaleX(-1)";
                    //*instructions*
                    //alert('gauche');
                    //initialisation
                    moveLeft = true;
                    moveRight = false;
                    moveSpeed = 2;
                    
                    if (sprite.style.left == '') {
                        sprite.style.left = '0px';
                    };
                    var decalageSprite = 101;
                    sprite.style.top = '-0px';
                    //animation
                    var spriteLeftPosition = parseFloat(sprite.style.left) - decalageSprite;
                    if (Math.abs(spriteLeftPosition) > (4 * decalageSprite)) {
                        spriteLeftPosition = -101;
                    };
                    sprite.style.left = spriteLeftPosition + 'px';
                    //mouvement
                    var decalageMasque = 1;
                    if (masque.style.left == '') {
                        masque.style.left = '0px';
                    }
                    var masqueLeftPosition = parseFloat(masque.style.left) - decalageMasque;
                    masque.style.left = masqueLeftPosition + 'px';
                    break;
                case 38:
                    //instructions
                    //alert('haut');
                    //initialisation
                    sprite.style.top = '-135px';
                    //animation
                    if (sprite.style.left == '') {
                        sprite.style.left = '0px';
                    };
                    //on va commencer à faire le mouvement du sprite à l'interieur du masque
                    var decalageSprite = 105;
                    var spriteLeftPosition = parseFloat(sprite.style.left) - decalageSprite;
                    if (Math.abs(spriteLeftPosition) > (2 * decalageSprite)) {
                        spriteLeftPosition = 0;
                    };
                    sprite.style.left = spriteLeftPosition + 'px';
                    //mouvement
                    var decalageMasque = 2;
                    if (masque.style.top == '') {
                        masque.style.top = '220px'; //le masque reste en bas dans le fond de l image
                    }
                    var masqueTopPosition = parseFloat(masque.style.top) - decalageMasque;
                    masque.style.top = masqueTopPosition + 'px';
                    break;     
                case 39:
                    sprite.style.transform="";
                    //instructions
                    //alert('droite');
                    //initialisation
                    moveLeft = false;
                    moveRight = true;
                    moveSpeed = 3;
                    var decalageSprite = 101;
                    sprite.style.top = '0px';
                    if (sprite.style.left == '') {
                        sprite.style.left = '0px';
                    };
                    
                    // if (!event.repeat) {
                        // setInterval(() => {
                            //animation
                            var spriteLeftPosition = parseFloat(sprite.style.left) - decalageSprite;
                            if (Math.abs(spriteLeftPosition) > (3 * decalageSprite)) {
                                spriteLeftPosition = 0;
                            };
                            //mouvement
                            sprite.style.left = spriteLeftPosition + 'px';
                            // var decalageMasque = 2;
                            if (masque.style.left == '') {
                                masque.style.left = '0px';
                            }
                            var masqueLeftPosition = parseFloat(masque.style.left) + moveSpeed;
                            masque.style.left = masqueLeftPosition + 'px';
                        // }, mvtInterval);
                    // }
                    break;
                case 40:
                    //instructions
                    //alert('bas');
                    //initialisation
                    sprite.style.top = '-260px';
                    //animation
                    if (sprite.style.left == '') {
                        sprite.style.left = '0px';
                    };
                    var decalageSprite = 130;
                    var spriteLeftPosition = parseFloat(sprite.style.left) - decalageSprite;
                    if (Math.abs(spriteLeftPosition) > (1 * decalageSprite)) {
                        spriteLeftPosition = 0;
                    };
                    sprite.style.left = spriteLeftPosition + 'px';
                    //mouvement
                    var decalageMasque = 1;
                    if (masque.style.top == '') {
                        masque.style.top = '0px';
                    }
                    var masqueTopPosition = parseFloat(masque.style.top) + decalageMasque;
                    masque.style.top = masqueTopPosition + 'px';
                    
                    break;
            };

            setTimeout(detectioncollision, 150);
        
    }

/* Explication du code : 
3 - Ensuite, ayant placé les glaces, je peux generer des collision entre le manchot et les glaces. (Pour l'instant je parametre comme ça, l'ideal est de mettre tout ça dans un tableau !)
*/ 
function detectioncollision(){  
    let m = masque.getBoundingClientRect();
    let a = glace1.getBoundingClientRect();
    let b = glace2.getBoundingClientRect();
    let c = glace3.getBoundingClientRect();
    let d = glace4.getBoundingClientRect();
    let e = glace5.getBoundingClientRect();
    let f = glace6.getBoundingClientRect();
    if(collisionglaces(m, a)){       
        console.log(' in if ', collisionglaces(m, a))
        glace1.style.display='none'; //glace1
        alert('Excellent ! Notre voyage dans le Pays des Glaces vient de commencer ! Vous vous apprêtez à manger la première glace qui vous montre mes competences dans le design d\'interface ❤️ Au prochain tour, n\'hesitez pas à regarder le tableau à votre droite, vous y trouverez deux de mes programmes préférés : Figma et Jira ! Allons découvrir les autres compétences qui se cachent derrière les autres glaces ⭐ ');
        score (); 
        document.getElementById('comp1').style.display = 'block';
        document.getElementById('comp2').style.display = 'block';
    }         
    if(collisionglaces(m, b)){       
        console.log(' in if ', collisionglaces(m, b))
        glace2.style.display='none'; //glace2
        alert('Merveilleux ! Vous avez mangé la deuxième glace, celle qui laissera apparaitre mes compétences dans l\'optimisation d\'interface via la mise en place d\'AB testing et d\'un bon balisage en html 🥳');
        score (); 
        document.getElementById('comp3').style.display = 'block';
        document.getElementById('comp4').style.display = 'block';
    } 
    if(collisionglaces(m, c)){       
        console.log(' in if ', collisionglaces(m, c))
        glace3.style.display='none'; //glace3
        alert('Délicieux ! C\'est ici que nous allons entrer dans les langages de programmation ! Vous allez voir que je sais modifier l\'apparence et la mise en forme des documents grâce aux CSS 🎨 Continuons à découvrir les autres compétences dans notre parcours ! ');
        score (); 
        document.getElementById('comp5').style.display = 'block';
    }         
    if(collisionglaces(m, d)){       
        console.log(' in if ', collisionglaces(m, d))
        glace4.style.display='none'; //glace4
        alert('Magnifique ! Vous avez reussi à manger la cerise qui vous attendez ! Elle affichera mes compétences en Bootstrap et GIT 🍒 D\'ailleurs, vous avez peut être découvert mon CV sur GIT HUB, n\'est ce pas ? 😊');
        score (); 
        document.getElementById('comp6').style.display = 'block';
        document.getElementById('comp7').style.display = 'block';
    } 
    if(collisionglaces(m, e)){       
        console.log(' in if ', collisionglaces(m, e))
        glace5.style.display='none'; //glace5
        alert('Bravo ! Vous venez de manger ma cinquième glace ! Elle a le goût doux du JavaScript 🥇 Je suis capable d\'améliorer l\'expérience utilisateur d\'un site web et de concevoir des sites web interactifs en utlilisant ce langage « orienté objet »');
        score (); 
        document.getElementById('comp8').style.display = 'block';
    } 
    if(collisionglaces(m, f)){       
        console.log(' in if ', collisionglaces(m, f))
        glace6.style.display='none'; //glace6
        alert('🎉 Félicitations ! Vous vous apprêtez à manger la dernière glace qui a le goût épicé d\'Angular ! C’est un parfum qui a la réputation d’être hyper gourmand ! Etant claire et modulaire, il se marie très bien avec le JavaScript et le TypeScript, bref il est vraiment tout-terrain 🏆 Nous sommes en train de terminer notre voyage dans "Le Pays des Glaces" et avant cela une dernière surprise vous attend : cliquez sur le bouton "CV" qui se trouve en bas du tableau et decouvrez la version pdf de mon CV 🌟 Rencontrons nous pour un entretien !');
        score (); 
        document.getElementById('comp9').style.display = 'block';
    } 
    findujeu();
}


    /*function collision generale*/
    function collisionglaces (mange, glace){   
        return !( mange.left > glace.right ||
           mange.right < glace.left||
           mange.top > glace.bottom ||
           mange.bottom < glace.top )   
        }
    
    
    /*Explication du code : 
    4 - je vais parametrer un score. A chaque glace touché, la valeur du score augmente de 1 et la glace desparait. 
    */
    let punteggio = 0;
    
    function score (){
        punteggio++;//c'est la variable punteggio + 1
        affichagescore.innerHTML = 'score: '+ punteggio;
    }
    
    function findujeu(){
        if (punteggio >= 6) {
        glace6termine();
    }
    }
        
    function glace6termine() {
        if (getComputedStyle(glace6).display === 'none') {
            resetGame();
        } else {
            setTimeout(glace6termine, 200); // Vérifie toutes les 100 ms
        }    
    }
    
    /*Explication du code : 
    5 - A la fin du jeu, lorsque le score est >= a 6, les elements retournent en place comme au debut du jeu 
    */
    function resetGame() {
        glace1.style.display = 'block';
        glace2.style.display = 'block';
        glace3.style.display = 'block';
        glace4.style.display = 'block';
        glace5.style.display = 'block';
        glace6.style.display = 'block';
        punteggio = 0;
        affichagescore.innerHTML = 'score: ' + punteggio;
    }
    
  