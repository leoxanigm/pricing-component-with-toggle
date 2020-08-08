document.addEventListener('DOMContentLoaded', () => {
  const priceToggler = document.getElementById('price-toggle');
  const subscriptionType = document.querySelectorAll('.price-toggle-container .lead');
  const prices = document.querySelectorAll('.price-card .price');

  //resetting priceToggler checkbox
  priceToggler.checked = false;

  priceToggler.addEventListener('change', function() {

    subscriptionType.forEach( type => type.classList.remove('selected'));

    if ( this.getAttribute('data-selected') === 'annually' ) {
      prices.forEach( node => {
        const currentPrice = node.querySelector('span').textContent;
        const dataPrice = node.getAttribute('data-price-monthly');

        node.querySelector('span').textContent = dataPrice;
        node.removeAttribute('data-price-monthly');
        node.setAttribute('data-price-anually', currentPrice);

        this.setAttribute('data-selected', 'monthly');

        subscriptionType.forEach( type => {
          if ( type.getAttribute('data-subscription') === 'monthly' ) {
            type.classList.add('selected')
          }  
        });
      });
    } else if ( this.getAttribute('data-selected') === 'monthly' ) {
      prices.forEach( node => {
        const currentPrice = node.querySelector('span').textContent;
        const dataPrice = node.getAttribute('data-price-anually');

        node.querySelector('span').textContent = dataPrice;
        node.removeAttribute('data-price-anually');
        node.setAttribute('data-price-monthly', currentPrice);

        this.setAttribute('data-selected', 'annually');

        subscriptionType.forEach( type => {
          if ( type.getAttribute('data-subscription') === 'annually' ) {
            type.classList.add('selected')
          }  
        });
      });
    }
  }); 
});