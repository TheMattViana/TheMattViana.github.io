document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const backingAssets = ['assets/tarot_1.png', 'assets/tarot_2.png'];
    let currentBackIndex = 0; // Starts with index 0 (tarot 1.png)

    // Configuration
    const waitTime = 3000; // 3 seconds closed
    const holdTime = 10000; // 10 seconds open

    function runAnimationCycle() {
        // 1. Wait 3 seconds with cards closed
        setTimeout(() => {
            // 2. Action: Flip Open
            cards.forEach(card => card.classList.add('flipped'));

            // 3. Swap Backing Image Logic
            // We swap the image while the card is open (facing away) so that when it closes, the new back is revealed.
            currentBackIndex = (currentBackIndex + 1) % backingAssets.length;
            const nextBack = backingAssets[currentBackIndex];

            // Wait a short moment to ensure the flip has started so the user doesn't see the swap on the front face (if it were transparent, but it's not)
            // or just to be clean. The back face is hidden during the 10s open time.
            setTimeout(() => {
                cards.forEach(card => {
                    const patternFace = card.querySelector('.card-pattern');
                    // patternFace is the one with the backing image
                    patternFace.style.backgroundImage = `url('${nextBack}')`;
                });
            }, 1000); // 1s delay (after flip transition completes usually)

            // 4. Hold Open for 10 seconds
            setTimeout(() => {
                // 5. Action: Flip Closed
                cards.forEach(card => card.classList.remove('flipped'));

                // Cycle continues
                runAnimationCycle();

            }, holdTime);

        }, waitTime);
    }

    // Start the loop
    runAnimationCycle();
});
