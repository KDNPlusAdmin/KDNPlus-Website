 // Set the countdown date to November 15th of the current year  
 const countdownDate = new Date(new Date().getFullYear(), 10, 15, 0, 0, 0); // Month is 0-indexed, so 10 is November  

 function updateCountdown() {  
     const now = new Date().getTime();  
     const distance = countdownDate - now;  

     // Time calculations for days, hours, minutes, and seconds  
     const days = Math.floor(distance / (1000 * 60 * 60 * 24));  
     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  
     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));  
     const seconds = Math.floor((distance % (1000 * 60)) / 1000);  

     // Display the result in the elements with id  
     document.getElementById('days').innerText = days.toString().padStart(2, '0');  
     document.getElementById('hours').innerText = hours.toString().padStart(2, '0');  
     document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');  
     document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');  

     // If the countdown is finished, write some text  
     if (distance < 0) {  
         clearInterval(x);  
         document.querySelector(".countdown-container").innerHTML = "<h1>You can start streaming now!</h1>";  
     }  
 }  

 // Update the countdown every 1 second  
 const x = setInterval(updateCountdown, 1000);  
