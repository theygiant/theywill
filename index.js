const codeStyle = `background: #3C3C3B; color: #00FF00; padding: -20px`;

console.log(`%c they will update 'habinakaneover' at 1732395600`, codeStyle);

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
    while (true) {
        console.log(`%c i know you are here`, codeStyle);
        console.log(`%c i know you are here?`, codeStyle);
        await delay(50);
    }
})();