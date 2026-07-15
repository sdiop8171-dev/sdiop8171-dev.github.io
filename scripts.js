const facts = [
    "The word 'Quran' means 'The Recitation.'",
    "Muslims believe the Quran was revealed over about 23 years.",
    "The Quran is divided into 114 chapters called surahs.",
    "It was first revealed in the Cave of Hira near Makkah.",
    "Millions of Muslims around the world have memorized the entire Quran.",
    "The Quran is written in Arabic."
];

function showFact() {
    let random = Math.floor(Math.random() * facts.length);
    document.getElementById("fact").innerHTML = facts[random];
}
