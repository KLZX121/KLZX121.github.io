const words = ["ability","able","about","above","accept","according","account","across","act","action","activity","actually","add","address","administration","admit","adult","affect","after","again","against","age","agency","agent","ago","agree","agreement","ahead","air","all","allow","almost","alone","along","already","also","although","always","American","among","amount","analysis","and","animal","another","answer","any","anyone","anything","appear","apply","approach","area","argue","arm","around","arrive","art","article","artist","as","ask","assume","at","attack","attention","attorney","audience","author","authority","available","avoid","away","baby","back","bad","bag","ball","bank","bar","base","be","beat","beautiful","because","become","bed","before","begin","behavior","behind","believe","benefit","best","better","between","beyond","big","bill","billion","bit","black","blood","blue","board","body","book","born","both","box","boy","break","bring","brother","budget","build","building","business","but","buy","by","call","camera","campaign","can","cancer","candidate","capital","car","card","care","career","carry","case","catch","cause","cell","center","central","century","certain","certainly","chair","challenge","chance","change","character","charge","check","child","choice","choose","church","citizen","city","civil","claim","class","clear","clearly","close","coach","cold","collection","college","color","come","commercial","common","community","company","compare","computer","concern","condition","conference","Congress","consider","consumer","contain","continue","control","cost","could","country","couple","course","court","cover","create","crime","cultural","culture","cup","current","customer","cut","dark","data","daughter","day","dead","deal","death","debate","decade","decide","decision","deep","defense","degree","Democrat","democratic","describe","design","despite","detail","determine","develop","development","die","difference","different","difficult","dinner","direction","director","discover","discuss","discussion","disease","do","doctor","dog","door","down","draw","dream","drive","drop","drug","during","each","early","east","easy","eat","economic","economy","edge","education","effect","effort","eight","either","election","else","employee","end","energy","enjoy","enough","enter","entire","environment","environmental","especially","establish","even","evening","event","ever","every","everybody","everyone","everything","evidence","exactly","example","executive","exist","expect","experience","expert","explain","eye","face","fact","factor","fail","fall","family","far","fast","father","fear","federal","feel","feeling","few","field","fight","figure","fill","film","final","finally","financial","find","fine","finger","finish","fire","firm","first","fish","five","floor","fly","focus","follow","food","foot","for","force","foreign","forget","form","former","forward","four","free","friend","from","front","full","fund","future","game","garden","gas","general","generation","get","girl","give","glass","go","goal","good","government","great","green","ground","group","grow","growth","guess","gun","guy","hair","half","hand","hang","happen","happy","hard","have","he","head","health","hear","heart","heat","heavy","help","her","here","herself","high","him","himself","his","history","hit","hold","home","hope","hospital","hot","hotel","hour","house","how","however","huge","human","hundred","husband","I","idea","identify","if","image","imagine","impact","important","improve","in","include","including","increase","indeed","indicate","individual","industry","information","inside","instead","institution","interest","interesting","international","interview","into","investment","involve","issue","it","item","its","itself","job","join","just","keep","key","kid","kill","kind","kitchen","know","knowledge","land","language","large","last","late","later","laugh","law","lawyer","lay","lead","leader","learn","least","leave","left","leg","legal","less","let","letter","level","lie","life","light","like","likely","line","list","listen","little","live","local","long","look","lose","loss","lot","love","low","machine","magazine","main","maintain","major","majority","make","man","manage","management","manager","many","market","marriage","material","matter","may","maybe","me","mean","measure","media","medical","meet","meeting","member","memory","mention","message","method","middle","might","military","million","mind","minute","miss","mission","model","modern","moment","money","month","more","morning","most","mother","mouth","move","movement","movie","Mr","Mrs","much","music","must","my","myself","name","nation","national","natural","nature","near","nearly","necessary","need","network","never","new","news","newspaper","next","nice","night","no","none","nor","north","not","note","nothing","notice","now","n't","number","occur","of","off","offer","office","officer","official","often","oh","oil","ok","old","on","once","one","only","onto","open","operation","opportunity","option","or","order","organization","other","others","our","out","outside","over","own","owner","page","pain","painting","paper","parent","part","participant","particular","particularly","partner","party","pass","past","patient","pattern","pay","peace","people","per","perform","performance","perhaps","period","person","personal","phone","physical","pick","picture","piece","place","plan","plant","play","player","PM","point","police","policy","political","politics","poor","popular","population","position","positive","possible","power","practice","prepare","present","president","pressure","pretty","prevent","price","private","probably","problem","process","produce","product","production","professional","professor","program","project","property","protect","prove","provide","public","pull","purpose","push","put","quality","question","quickly","quite","race","radio","raise","range","rate","rather","reach","read","ready","real","reality","realize","really","reason","receive","recent","recently","recognize","record","red","reduce","reflect","region","relate","relationship","religious","remain","remember","remove","report","represent","Republican","require","research","resource","respond","response","responsibility","rest","result","return","reveal","rich","right","rise","risk","road","rock","role","room","rule","run","safe","same","save","say","scene","school","science","scientist","score","sea","season","seat","second","section","security","see","seek","seem","sell","send","senior","sense","series","serious","serve","service","set","seven","several","sex","sexual","shake","share","she","shoot","short","shot","should","shoulder","show","side","sign","significant","similar","simple","simply","since","sing","single","sister","sit","site","situation","six","size","skill","skin","small","smile","so","social","society","soldier","some","somebody","someone","something","sometimes","son","song","soon","sort","sound","source","south","southern","space","speak","special","specific","speech","spend","sport","spring","staff","stage","stand","standard","star","start","state","statement","station","stay","step","still","stock","stop","store","story","strategy","street","strong","structure","student","study","stuff","style","subject","success","successful","such","suddenly","suffer","suggest","summer","support","sure","surface","system","table","take","talk","task","tax","teach","teacher","team","technology","television","tell","ten","tend","term","test","than","thank","that","the","their","them","themselves","then","theory","there","these","they","thing","think","third","this","those","though","thought","thousand","threat","three","through","throughout","throw","thus","time","to","today","together","tonight","too","top","total","tough","toward","town","trade","traditional","training","travel","treat","treatment","tree","trial","trip","trouble","true","truth","try","turn","TV","two","type","under","understand","unit","until","up","upon","us","use","usually","value","various","very","victim","view","violence","visit","voice","vote","wait","walk","wall","want","war","watch","water","way","we","weapon","wear","week","weight","well","west","western","what","whatever","when","where","whether","which","while","white","who","whole","whom","whose","why","wide","wife","will","win","wind","window","wish","with","within","without","woman","wonder","word","work","worker","world","worry","would","write","writer","wrong","yard","yeah","year","yes","yet","you","young","your","yourself"];
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const morseCode = {
    a: '·−',
    b: '−···',
    c: '−·−·',
    d: '−··',
    e: '·',
    f: '··−·',
    g: '−−·',
    h: '····',
    i: '··',
    j: '·−−−',
    k: '−·−',
    l: '·−··',
    m: '−−',
    n: '−·',
    o: '−−−',
    p: '·−−·',
    q: '−−·−',
    r: '·−·',
    s: '···',
    t: '−',
    u: '··−',
    v: '···−',
    w: '·−−',
    x: '−··−',
    y: '−·−−',
    z: '−−··',
    '0': '−−−−−',
    '1': '·−−−−',
    '2': '··−−−',
    '3': '···−−',
    '4': '····−',
    '5': '·····',
    '6': '−····',
    '7': '−−···',
    '8': '−−−··',
    '9': '−−−−·'
};
const dashTime = 300;
const doAutoSpace = true;
const autoSpaceInt = 500;

function newWord(){
    showInput.innerHTML = '';

    if (/[−·]/.test(showWord.innerHTML)) showWord.innerHTML = morseToEng(showWord.innerHTML);

    const mode = {
        language: document.querySelector('input[name="language"]:checked').id,
        type: document.querySelector('input[name="type"]:checked').id, 
        mode: document.querySelector('input[name="mode"]:checked').id
    }

    switch(mode.type){
        case 'wordsType':
            if (randomMode.checked){
                var word = words[Math.floor(Math.random() * words.length)];
            } else {
                var word = words[words.indexOf(showWord.innerHTML) === (words.length - 1) ? 0 : words.indexOf(showWord.innerHTML) + 1];
            }
            break;
        case 'lettersType':
            if (randomMode.checked){
                var word = alphabet[Math.floor(Math.random() * alphabet.length)];
            } else {
                var word = alphabet[alphabet.indexOf(showWord.innerHTML) === 25 ? 0 : alphabet.indexOf(showWord.innerHTML) + 1];
            }
            break;
        case 'numbersType':
            if (randomMode.checked){
                var word = numbers[Math.floor(Math.random() * 10)];
                for (let i = 0; i < 6; i++){
                    if (Math.random() <= 0.5) {
                        word += numbers[Math.floor(Math.random() * 10)];
                    }
                }
            } else {
                var word = numbers[numbers.indexOf(showWord.innerHTML) === 9 ? 0 : numbers.indexOf(showWord.innerHTML) + 1];
            }
            break;
        
    };
    if (mode.language === 'morseLanguage') word = engToMorse(word)
    
    showWord.innerHTML = '';
    showWord.innerHTML = word;


    let spacePressed = false;
    let spaceId;

    document.onkeydown = event => {
        clearTimeout(spaceId);
        switch (event.code){
            case 'ControlLeft': //skip word
                newWord();
                break;
            case 'Enter': //submit word
                score.innerHTML += mode.language === 'morseLanguage' ? submit(word, showInput.innerHTML.trim()) : submit(showInput.innerHTML.trim(), word);
                newWord();
                break;
            case 'Space': //dots or dashes
                if (spacePressed) return;
                spacePressed = true;

                showInput.innerHTML += '·';

                const dashId = setTimeout(() => {
                    showInput.innerHTML = showInput.innerHTML.slice(0, -1);
                    showInput.innerHTML += '−';
                }, dashTime);
                

                document.addEventListener('keyup', event => {
                    spacePressed = false;
                    clearTimeout(dashId);

                    if (!doAutoSpace) return;
                    spaceId = setTimeout(() => {
                        showInput.innerHTML += ' ';
                    }, autoSpaceInt)
                }, { once: true });
                
                break;
            case 'Comma': //space
                showInput.innerHTML += ' ';
                break;
            case 'Backspace': //delete last char
                showInput.innerHTML = showInput.innerHTML.slice(0, -1);
                break;
            default:
                if (mode.language === 'morseLanguage' && /[a-z0-9]+/i.test(event.key)) {
                    showInput.innerHTML += event.key;
                }
                break;
        }
    };
    function submit(morse, eng){
        let translateMorse = engToMorse(eng);
        let translateEng = morseToEng(morse);

        const correct = morse === translateMorse;

        lastWord.innerHTML = mode.language === 'morseLanguage' ? morse : eng;
        lastWordMorse.innerHTML =  mode.language === 'morseLanguage' ? translateEng : translateMorse;
        answerMorse.innerHTML =  mode.language === 'morseLanguage' ? eng :morse;
        translation.innerHTML =  mode.language === 'morseLanguage' ? translateMorse : translateEng;

        return correct ? '&#10004;' : '&#10005;';
    }
    function morseToEng(inputMorse){
        //convert input to english
        const inputMorseLetters = inputMorse.split(" ");
        let inputEng = [];
        inputMorseLetters.forEach(morseLetter => {
            let len = inputEng.length;
            for (const letter in morseCode) {
                if (morseLetter === morseCode[letter]) {
                    inputEng.push(letter);
                    return;
                }
            }
            if (len === inputEng.length) inputEng.push(`[${morseLetter}]`);
        });
        return inputEng.join('');
    }
    function engToMorse(wordEng){
        //convert word to morse
        let wordMorse = [];
        const wordEngLetters = wordEng.split('');
        wordEngLetters.forEach(letter => {
            wordMorse.push(morseCode[letter]);
        });
        return wordMorse.join(' ');
    }
};
newWord();

setInterval(() => {
    cursorDash.style.display = cursorDash.style.display === 'none' ? 'inline' : 'none';
}, 200);