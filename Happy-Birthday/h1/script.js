new Vue({
    el: '#app',
    data: {
        wish: ''
    },
    methods: {
        submitWish() {
            if (!this.wish) {
                alert("Please write a wish before submitting.");
                return;
            }
            fetch('http://localhost:3000/submit-wish', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ wish: this.wish })
            })
            .then(response => response.json())
            .then(data => {
                alert("Wish submitted! Thank you for sharing.");
                this.wish = '';
            })
            .catch(error => console.error('Error:', error));
        },
        goToMealCatalog() {
            window.location.href = "/meal-catalog";
        }
    }
});

window.addEventListener('load', () => {
    const audioElement = document.getElementById('birthdayJingle');
    audioElement.play().catch(error => {
        console.log('Audio playback prevented. User interaction may be required.', error);
    });
});