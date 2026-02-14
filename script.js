// Logo carousel rotation
const logos = document.querySelectorAll('.isp-logo');
let currentLogo = 0;

function rotateLogo() {
    logos[currentLogo].classList.remove('active');
    currentLogo = (currentLogo + 1) % logos.length;
    logos[currentLogo].classList.add('active');
}

setInterval(rotateLogo, 1500);

// Amount button selection
const amountButtons = document.querySelectorAll('.amount-btn');

amountButtons.forEach(button => {
    button.addEventListener('click', function() {
        amountButtons.forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');
    });
});

// Random notification generator
const networks = ['MTN network', 'Glo network', 'Airtel network', '9mobile network'];
const dataAmounts = ['1.5GB', '2GB', '3GB', '5GB', '7GB', '10GB', '15GB', '20GB'];
const phoneNumber = document.getElementById('phoneNumber');
const networkName = document.getElementById('networkName');
const dataAmount = document.getElementById('dataAmount');

function generateRandomPhone() {
    const prefixes = ['0803', '0806', '0810', '0813', '0816', '0905', '0907', '0701', '0708', '0802', '0812', '0818'];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const lastTwo = Math.floor(Math.random() * 100).toString().padStart(2, '0');
    return `${prefix}****${lastTwo}`;
}

function updateNotification() {
    phoneNumber.textContent = generateRandomPhone();
    networkName.textContent = networks[Math.floor(Math.random() * networks.length)];
    dataAmount.textContent = dataAmounts[Math.floor(Math.random() * dataAmounts.length)];
}

// Update notification every 3 seconds
setInterval(updateNotification, 3000);

// Add pulse effect to check button
const checkBtn = document.getElementById('checkBtn');

setInterval(() => {
    checkBtn.style.animation = 'none';
    setTimeout(() => {
        checkBtn.style.animation = 'pulse 0.5s ease';
    }, 10);
}, 5000);

// Add pulse animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.02); }
    }
`;
document.head.appendChild(style);
