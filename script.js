console.log("IranVerse OS Initialized");
console.log(IranVerseHeroes);
document.body.innerHTML += `
<hr>
<h2>System Test</h2>
<p>Heroes Database Connected</p>
<p>${IranVerseHeroes[0].name}</p>
`;
