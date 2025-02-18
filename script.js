document.addEventListener("DOMContentLoaded", function() {
    const slotSymbols = ["🍒", "🍋", "🍊", "🍇", "⭐", "💎"];
    const spinButton = document.getElementById("spin");
    const slots = document.querySelectorAll(".slot");
    const guessInput = document.getElementById("guess");
    const resultText = document.getElementById("result");

    spinButton.addEventListener("click", function() {
        let results = [];
        slots.forEach(slot => {
            let randomSymbol = slotSymbols[Math.floor(Math.random() * slotSymbols.length)];
            slot.textContent = randomSymbol;
            results.push(randomSymbol);
        });
        
        // Get player's guess
        let playerGuess = guessInput.value.trim();
        if (playerGuess && slotSymbols.includes(playerGuess)) {
            if (results.includes(playerGuess)) {
                resultText.textContent = `🎉 You guessed correctly! The symbol ${playerGuess} appeared.`;
                resultText.style.color = "green";
            } else {
                resultText.textContent = `❌ Better luck next time! The symbol ${playerGuess} did not appear.`;
                resultText.style.color = "red";
            }
        } else {
            resultText.textContent = "⚠️ Please enter a valid symbol (🍒, 🍋, 🍊, 🍇, ⭐, 💎).";
            resultText.style.color = "orange";
        }
    });
});
