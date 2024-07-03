document.getElementById('connect-button').addEventListener('click', async () => {
    if (window.solana) {
        try {
            // Request to connect to the Phantom Wallet
            const response = await window.solana.connect();
            console.log('Connected to Phantom Wallet:', response.publicKey.toString());
            alert(`Connected to Phantom Wallet: ${response.publicKey.toString()}`);
        } catch (err) {
            console.error('Error connecting to Phantom Wallet:', err);
        }
    } else {
        alert('Phantom Wallet not found. Please install the Phantom Wallet extension.');
    }
});

// Check if Phantom Wallet is installed
window.addEventListener('load', () => {
    if (window.solana && window.solana.isPhantom) {
        console.log('Phantom Wallet is installed!');
    } else {
        console.log('Phantom Wallet not found. Please install the Phantom Wallet extension.');
    }
});
// JavaScript Document