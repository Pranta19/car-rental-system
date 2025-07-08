document.addEventListener('DOMContentLoaded', () => {

    const bookingForm = document.getElementById('bookingForm');
    const bookRideBtn = document.getElementById('bookRideBtn');

    // Smooth scroll to booking section
    if (bookRideBtn && bookingForm) {
        bookRideBtn.addEventListener('click', () => {
            bookingForm.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Existing booking form logic
    const urlParams = new URLSearchParams(window.location.search);
    const selectedCar = urlParams.get('car');

    if (selectedCar) {
        const carTypeSelect = document.getElementById('carType');
        if (carTypeSelect) {
            for (let option of carTypeSelect.options) {
                if (option.value === selectedCar) {
                    option.selected = true;
                    break;
                }
            }
            bookingForm.scrollIntoView({ behavior: 'smooth' });
        }
    }

    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const carType = document.getElementById('carType').value;
        const pickup = document.getElementById('pickup').value.trim();
        const dropoff = document.getElementById('dropoff').value.trim();
        const pickupDate = document.getElementById('pickupDate').value;

        if (!carType || !pickup || !dropoff || !pickupDate) {
            alert('Please fill in all the fields to book your ride.');
            return;
        }

        alert(`✅ Booking Confirmed!\n\nCar: ${carType}\nPick-up: ${pickup}\nDrop-off: ${dropoff}\nDate: ${pickupDate}`);
        this.reset();
    });
});
