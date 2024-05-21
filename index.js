window.addEventListener('scroll', function() {
    console.log('escutou')
    document.querySelector('.arrow-down').classList.remove('animation-fade');
    document.querySelector('.arrow-down').classList.add('hidden');
  });