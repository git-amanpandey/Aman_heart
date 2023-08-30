document.addEventListener('DOMContentLoaded', function () {
  const selectQuality = document.getElementById('select-quality');
  const crackers = document.getElementById('crackers');
  const shivaSection = document.getElementById('shiva-section');
  const shivaImage = document.getElementById('shiva-image');
  const overlay = document.getElementById('overlay');
  const animationContainer = document.getElementById('animation-container');
  const errorMessage = document.getElementById('error-message');
  selectQuality.addEventListener('change', function () {
    const selectedQuality = selectQuality.value;

  
    crackers.style.opacity = '0';
    shivaSection.style.display = 'none';
    shivaImage.style.opacity = '0'; 
    if (selectedQuality === 'None') {
      errorMessage.style.display = 'block';
      shivaSection.style.display = 'none';
    }
   
    else if (selectedQuality === '1080p') {
      errorMessage.style.display = 'none';
      crackers.style.opacity = '1';
      crackers.style.transform = 'scale(1)'; 
      overlay.style.display = 'block';
      animateCrackers();
      hideOtherImages(); 
    } else {
      const imageSections = document.querySelectorAll('.image-section');
      
      for (const imageSection of imageSections) {
        if (imageSection.id === 'image-section-' + selectedQuality) {
          imageSection.style.display = 'block';
          errorMessage.style.display = 'none';
        } else {
          imageSection.style.display = 'none';
          errorMessage.style.display = 'none';
        }
      }
      overlay.style.display = 'none';
      errorMessage.style.display = 'none';
    }
  });

  function animateCrackers() {
    overlay.innerHTML = ''; 
    const crackersClone = crackers.cloneNode(true); 
    overlay.appendChild(crackersClone); 
    setTimeout(() => {
      overlay.style.display = 'none';
      shivaSection.style.display = 'block';
      shivaImage.style.opacity = '1'; 
      shivaImage.style.transform = 'scale(1) translate(0)'; 
    }, 1500); 
  }

  function hideOtherImages() {
    const imageSections = document.querySelectorAll('.image-section');
    for (const imageSection of imageSections) {
      if (imageSection.id !== 'image-section-1080p') {
        imageSection.style.display = 'none';
      }
    }
  }
});
