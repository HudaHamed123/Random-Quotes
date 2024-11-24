var lastIndex = -1; 

function randomText() {
    var text = [
        `"Resentment is like drinking poison and waiting for your enemies to die."`,`"It's not what happens to you, but how you react to it that matters."`,`"The best revenge is massive success."`, `"You miss 100% of the shots you don't take."`,`"Do not take life too seriously. You will not get out alive."`
    ];
    var userName = [
        "--Nelson Mandela","--Epictetus", "--Frank Sinatra", "--Wayne Gretzky","--Elbert Hubbard"
    ];

    var num;
    do {
        num = Math.floor(Math.random() * userName.length);
    } while (num === lastIndex); 

    lastIndex = num; 

    document.getElementById("quoteOutput").innerHTML = text[num];
    document.getElementById("authorOutput").innerHTML = userName[num];
}
