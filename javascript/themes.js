// Defining the buttons
const btnl = document.getElementById('theme');







// The actual function to change the theme to dark
const changeThemel =() =>{    
    document.getElementById('bg-b').style.background = '#212121';
    document.getElementById('bg-d').style.background = '#212121';
    
    
      // Inform the dev of the change
  console.log('Light theme initiated');
    
};



// Listening for a click from both buttons

btnl.addEventListener('click', changeThemel);
