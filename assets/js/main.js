 /*===== MOBILE MENU =====*/
 const menu = document.querySelector('#mobile-menu');
 const menuLinks = document.querySelector('#nav-menu');
 menu.addEventListener('click', function () {
   menu.classList.toggle('is-active');
   menu.classList.toggle('active');
 })

 /*===== MENU SHOW =====*/
 const showMenu = (toggleId, navId) => {
   const toggle = document.getElementById(toggleId),
     nav = document.getElementById(navId)

   if (toggle && nav) {
     toggle.addEventListener('click', () => {
       nav.classList.toggle('show')
     })
   }
 }
 showMenu('mobile-menu', 'nav-menu')

 /*===== ACTIVE AND REMOVE MENU =====*/
 const navLink = document.querySelectorAll('.nav__link');

 function linkAction() {
   /*Active link*/
   navLink.forEach(n => n.classList.remove('active'));
   this.classList.add('active');

   /*Remove menu mobile*/
   const navMenu = document.getElementById('nav-menu')
   navMenu.classList.remove('show')
 }
 navLink.forEach(n => n.addEventListener('click', linkAction));


 /*======ADD TO CARD===== */
 var score = 1

 function plus() {
   if (score < 5) {
     score++;
   }
   document.getElementById("result").innerHTML = score;
 }

 function minus() {
   if (score > 1) {
     score--;
   }
   document.getElementById("result").innerHTML = score;
 }