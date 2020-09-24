// questions onject

const questions = [
    `Nimm das Buch, das am nächsten bei dir liegt, schlag Seite 18 auf und suche dir Zeile vier raus. Was steht drin?`,
    `Nimmst du hin und wieder mal Shampoos und Conditioner aus Hotels mit?`,
    `Wer war die letzte Person mit der du geschrieben hast?`,
    `Bräunst du dich oder verbrennst du dich in der Sonne?`,
    `Musstest du dich je einer OP unterziehen?`,
    `Hast du Sommersprossen?`,
    `Bist du Links- oder Rechtshänder?`,
    `Lächelst du in Fotos immer? Und zeigst du dabei die Zähne?`,
    `Hast du schon mal ein Straßenschild gestohlen?`,
    `Was ist das Letzte, das du dir auf deinem Computer runtergeladen hast?`,
    `Was ist dein Sternzeichen?`,
    `Warst du schon mal im Wald pinkeln?`,
    `Warst du schon mal im Wald groß?`,
    `Mit wie vielen Leuten hast du diese Woche geschlafen?`,
    `Trägst du die Kapuze von Kapuzenpullis?`,
    `Ist es okay für dich, wenn ein Mann pink trägt?`,
    `Wie weit warst du bereits weg von zuhause`,
    `Reagierst du auf irgendwas allergisch?`,
    `Trägst du eine Brille/Kontaktlinsen?`,
    `Wohin würdest du gerne reisen?`,
    `Siehst du dir gerne unheimliche Filme an?`,
    `Was hast du letzte Nacht um Mitternacht getan?`,
    `Welche Filme könntest du dir immer und immer wieder ansehen und sie nach wie vor lieben?`,
    `Die letzte Person, die du geküsst hast?`,
    `Würdest du jemals Strippen oder nackt in einem Magazin posieren?`,
    `Was ist unter deinem Bett?`,
    `Ist dir mal beim Fahren der Tank ausgegangen?`,
    `Das beste was man zum Frühstück verputzen kann?`,
    `Welche Magazine und Zeitungen liest du?`,
    `Wie fühlst du dich gerade?`,
    `Was ist dein Lieblingsduft einer Kerze?`,
    `Singst du im Auto?`,
    `Sind dir in der Öffentlichkeit je die Hosen runtergerutscht?`,
    `Singst du in der Dusche?`,
    `Kannst du deine Augen schließen und eine Augenbraue anheben?`,
    `Denkst du Musicals sind kitschig?`,
    `Hunde oder Katzen?`,
    `Kannst du deine Nase mit deiner Zunge berühren?`,
    `Kannst du in High Heels laufen?`,
    `Was wolltest du werden, als du noch ein Kind warst?`,
    `Hast du manchmal ein Déjà-vu?`,
    `Trägst du Hausschuhe?`,
    `Was trägst du, wenn du schlafen gehst?`,
    `Hast du jemals Kreide gegessen?`,
    `Trägst du Bademäntel?`,
    `Drehst du das Wasser ab, wenn du dir die Zähne putzt?`,
    `Kannst du deine Zunge einrollen?`,
    `Mac oder PC?`,
    `Trägst du Parfum?`,
    `Wo würdest du leben, wenn du ÜBERALL leben könntest?`,
    `Wenn du über Nacht ein Multimilliardär werden würdest, was würdest du dir kaufen?`,
    `Kannst du beim Schwimmen die Luft anhalten, ohne dir die Nase zuzuhalten?`,
    `Hattest du je eine Schönheits-OP?`,
    `Nach welchem Motto/Zitat lebst du?`,
    `Gibt es etwas, das dich enttäuscht?`,
    `Hast du irgendwelche Haustiere?`


];


// grab the element
let btn = document.getElementById("btn");
let question = document.querySelector("p");

// console.log(questions.length);

btn.addEventListener("click", ()=>{
    let randome = Math.floor(Math.random() * questions.length);
    question.innerText = questions[randome];
    
    console.log(randome);
})



// let randome = Math.floor(Math.random() * questions.length)

// function test (){

//     question.innerText = questions[randome];


// }
// btn.addEventListener("click", test())
