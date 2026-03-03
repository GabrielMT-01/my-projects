function mudar(){
   const toggle = document.getElementById('toggle');
   const isYearly = toggle.checked;

   const prices = document.querySelectorAll('.value');
   const legends = document.querySelectorAll('.billed-yearly');


   const yearlyLabel = document.getElementById('yearly');
   const monthlyLabel = document.getElementById('monthly');

   for (var i = 0; i < prices.length; i++){
    const elementoPreco = prices[i]


    if (isYearly){
        prices[i].innerText = prices[i].getAttribute('data-yearly');
        legends[i].style.display = 'block';
    } else {
            prices[i].innerText = prices[i].getAttribute('data-monthly');
            legends[i].style.display = 'none';
     }        
   }

   if (isYearly) {
        yearlyLabel.classList.add('active');
        monthlyLabel.classList.remove('active');
    } else {
        monthlyLabel.classList.add('active');
        yearlyLabel.classList.remove('active');
    }
}


/*           <!-- =================  ================= -→         */

const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', function(){
    navMenu.classList.toggle('active')
})