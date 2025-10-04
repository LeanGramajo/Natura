
  const carousel = document.getElementById('productCarousel');

  function scrollCarousel(direction) {
    const productWidth = carousel.querySelector('.producto').offsetWidth;
    const gap = 20; // el gap que pusiste en CSS
    const scrollAmount = productWidth + gap;

    carousel.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }
