const donationBtn = document.querySelectorAll('.donation-freq');

donationBtn.forEach((btn) => {

  btn.addEventListener('click', function() {
    donationBtn.forEach((b) => {
      b.classList.remove('donate-btn--selected')
    });
    this.classList.add('donate-btn--selected');
  });

});

document.getElementById('donation-form').addEventListener('submit', function(event) {
  alert('Thank you for your donation!');
});
