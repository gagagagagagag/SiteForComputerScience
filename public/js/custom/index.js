// Templates
const passwordTemplateHTML = $("#password-template").html();
const passwordTemplate = Handlebars.compile(passwordTemplateHTML);

// Passwords
const passwordsForLabs = ["", "", "", "", "", ""];
const boratQuotes = ["You telling me that the man who try to put a rubber fist in my anus was a homosexual?", "He is my neighbor Nursultan Tuliagby. He is pain in my assholes. I get a window from a glass, he must get a window from a glass. I get a step, he must get a step. I get a clock radio, he cannot afford. Great success!", "Can you make me look like this man?", "Please, come and see my film. If it not success, I will be execute.", "They have cleverly shifted their shapes. One of them has taken the form of a little old woman. You can barely see her horns. She has tried to poison me already.", "My wife is dead? …. High five!", "She is my sister. She is number four prostitute in all of Kazakhstan. Nice.", "Who is this lady you have shrunk? Was she the owner of this house that you camp in front of? Do not try and shrink me gypsy, I serious.", "What’s up with it, Vanilla face? Me and my homie Azamat just parked our slab outside. We’re looking for somewhere to post up our black asses for the night.", "Kazakhstan is more civilised now. Women can now travel on inside of bus, and homosexuals no longer have to wear blue hat.", "America national sport is called baseballs. It very similar to our sport, shurik, where we take dogs, shoot them in a field and then have a party.", "In U.S. and A. they treat horses like we in Kazakhstan treat our women. They feed them two times a day. They have them sleep on straw in a small box. And for entertainment, they make them jump over fences while being whipped.", "American wine is like Kazakhstani wine, but not made from fermented horse urine.", "Very sorry to interrupt politic. Might I make a shit in your house?", "Yakshemash! In US of A, democracy is very different from Kazakhstan. In America, woman *can* vote, but horse - *cannot*!", "My wife she is dead...she die in a field...she die from work, an accident, but is not important, I have a new wife.", "Every Englishman must have a hobby. Some like to collect the stamp, some like to make the jam, but the most fun is to a kill a little animal with a shotgun or rip them up with wild dog.", "In Kazakhstan we have many hobbies: disco dancing, archery, rape, and table tennis.", "There are many job opportunities in the US and of A. For men, construction worker, taxi driver or accountant. For woman, prostitute.", "But if she cheat on me, I will crush her!", "My wife, she is scared of men with chocolate face, there won't be any around here?", "I hope you kill every man, woman and child in Iraq, down to the lizards. And may George W. Bush drink the blood of every man, woman and child in Iraq."];
const aligQuotes = ["Is it ‘cos I is black?", "Boh!", "Big up yourself.", "Booyakasha!", "Is you knocking out a drum and bass sound or is it more speed garage?", "Is you on crack or somethin’?", "So hows bout them WMD’s and them BLT’s.", "Respek.", "So what is the FB… AAAAAYYYY", "This is going to be like 60 Minutes, but just with more sex.", "Sex can lead to nasty things like herpes, gonorrhea, and something called relationships.", "Is Disneyland a part of the UN?", "Can I borrow your underwear?", "This show brings politicalist interviewing into this, the twentieth century.", "Why did Jesus go ’round with all them reindeers?", "With men and women, does you think that men should marry only one woman? Does you believe in mahogany?", "I don’t know if you know this, but dolphins ain’t fish. They is like us, they is mammaries.", "You betta check yo’self before you wreck yo’self.", "Ain’t dat a bit racialist?", "Let’s talk about some conspiracy things. Let’s go back to the grassy knoll. Who actually shot J.R.?", "When you arrived on the moon, was the people who lived there very friendly, or was they scared of you?", "Innit a coincidence dat Jesus was born on Chris’mas day?", "Sex. You has probably heard the word out there. And some of you probably know what it means. For those of you who don’t, it means boning. But with boning comes responsi-lib-ity.", "Why don’t they teach proper maffs in schools? Why teach in kilos and grams when you should deal in ounces, quarters and eighths?", "That’s a very sexist way to talk abou’ dees bitches!", "Africa ain’t just a country that gave us Bob Marley.", "One time when me was high, me sold me car for like 24 chicken McNuggets.", "But what harm has violence ever done?"];
const michaelQuotes = ["I’m Beyoncé, always.", "It’s Britney, bitch.", "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.", "Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.", "The worst thing about prison was the Dementors. They were flying all over the place and they were scary and they’d come down and they’d suck the soul out of your body and it hurt!", "When the son of the deposed king of Nigeria emails you directly, asking for help, you help! His father ran the freaking country! Okay?", "I have cause. It is beCAUSE I hate him.", "Society teaches us that having feelings and crying is bad and wrong. Well, that’s baloney, because grief isn’t wrong. There’s such a thing as good grief. Just ask Charlie Brown.", "You know what they say. Fool me once, strike one, but fool me twice … strike three.", "Well, well, well, how the turntables.", "I’m not superstitious, but I am a little ‘stitious.", "I love inside jokes. I’d love to be a part of one someday.", "Wikipedia is the best thing ever. Anyone in the world can write anything they want about any subject. So you know you are getting the best possible information.", "I don’t understand. We have a day honoring Martin Luther King, but he didn’t even work here.", "And I knew exactly what to do. But in a much more real sense, I had no idea what to do.", "I understand nothing.", "Well, it’s love at first sight. Actually, it was … No, it was when I heard her voice. It was love at first see with my ears.", "Okay, too many different words from coming at me from too many different sentences.", "It’s a pimple, Phyllis. Avril Lavigne gets them all the time and she rocks harder than anyone alive.", "I would not miss it for the world. But if something else came up I would definitely not go.", "That’s what she said."];
const ginaQuotes = ["Hi, Gina Linetti. The human form of the 100 emoji.", "My mother cried on the day I was born because she knew she would never be better than me.", "I feel like I’m the Paris of people.", "As everyone knows, my spirit animal is nature’s greatest predator, the wolf.", "I grew up forging report cards. If people knew how smart I was, it would have been harder to control them.", "What? The only thing I’m not good at is modesty, because I’m great at it.", "I’d describe the workflow today as dismal with a tiny dash of pathetic.", "Every time you talk I hear that sound that plays when Pacman dies.", "Oh, boy. Look, I’m not a cop. I don’t really like cops. Honestly, I think crime’s kind of cool.", "I worked at a sunglass kiosk at the mall for four years, so not only have I been through hell, I was assistant manager there.", "How am I not a cop, Terry? ‘Cause I don’t have a badge? Being a cop is a state of mind.", "I was thinking how I would make the perfect American president based upon my skill set, dance ability, and blood lust.", "You should make me your campaign manager. I was born for politics. I have great hair, and I love lying.", "This man is a Timberlake and you need to stop treating him like a Fatone.", "But watching Oprah have lunch with her strong female friends has taught me that it’s okay to forgive.", "I would spend my $5,000 to buy backstage passes to Britney, and then I’d ask her one question: You think you’re a better dancer than me?", "Attention, skeezy nobodies! Tina Knowles, Beyonce’s mom-ager, has contacted me and wants to audition me tonight. I’ve transcended you now.", "The English language cannot fully capture the depth and complexity of my thoughts, so I’m incorporating emoji into my speech to better express myself. Winky face.", "It’s Gina’s phone. Leave me a voice-mail. I won’t check it ’cause it’s not 1993.", "Amateur. Always say your insults to someone’s face. No paper trail.", "Okay, but if you do lie, you can’t go wrong with dental emergency. Or death of a triplet. Now, that one you can use twice. Smart."];
const ronQuotes = ["There’s only one thing I hate more than lying: skim milk. Which is water that’s lying about being milk.", "The less I know about other people’s affairs, the happier I am. I’m not interested in caring about people. I once worked with a guy for three years and never learned his name. Best friend I ever had. We still never talk sometimes.", "Dear frozen yogurt, you are the celery of desserts. Be ice cream, or be nothing.", "Fishing relaxes me. It’s like yoga, except I still get to kill something.", "When I eat, it is the food that is scared.", "ust give me all the bacon and eggs you have. Wait … I worry what you heard was, ‘Give me a lot of bacon and eggs.’ What I said was, give me all the bacon and eggs you have. Do you understand?", "I’ve cried twice in my life. Once when I was 7 and hit by a school bus. And then again when I heard that Li’l Sebastian had passed.", "Don’t start chasing applause and acclaim. That way lies madness.", "I call this turf ‘n’ turf. It’s a 16-ounce T-bone and a 24-ounce porterhouse. Also, whiskey and a cigar. I am going to consume all of this at the same time because I am a free American.", "I’m a simple man. I like pretty, dark-haired women and breakfast food.", "When people get too chummy with me, I like to call them by the wrong name to let them know I don’t really care about them.", "If there were more food and fewer people, this would be a perfect party.", "That is a canvas sheet, the most versatile object known to man. It can be used to make tents, backpacks, shoes, stretchers, sails, tarpaulins, and I suppose, in the most dire of circumstances, it can be a surface on which to make art.", "Any dog under 50 pounds is a cat, and cats are useless.", "I regret nothing. The end."];
const dwightQuotes = ["Would I ever leave this company? Look, I’m all about loyalty. In fact, I feel like part of what I’m being paid for here is my loyalty. But if there were somewhere else that valued loyalty more highly… I’m going wherever they value loyalty the most.", "I am fast. To give you a reference point I am somewhere between a snake and a mongoose… And a panther.", "Security in this office park is a joke. Last year I came to work with my spud-gun in a duffel bag. I sat at my desk all day with a rifle that shoots potatoes at 60 pounds per square inch. Can you imagine if I was deranged?", "I grew up on a farm. I have seen animals having sex in every position imaginable. Goat on chicken. Chicken on goat. Couple of chickens doing a goat, couple of pigs watching.", "Through concentration, I can raise and lower my cholesterol at will.", "I come from a long line of fighters. My maternal grandfather was the toughest guy I ever knew. World War II veteran, killed twenty men, and spent the rest of the war in an Allied prison camp. My father battled blood pressure and obesity all his life. Different kind of fight.", "As a volunteer Sheriff’s Deputy I’ve been doing surveillance for years. One time I suspected an ex-girlfriend of mine of cheating on me, so I tailed her for six nights straight. Turns out… she was. With a couple of guys actually, so… mystery solved.", "And I did not become a Lackawanna County volunteer sheriff’s deputy to make friends. And by the way, I haven’t.", "As a farmer I know that when an animal is sick sometimes the right thing to do is put it out of its misery. With the electricity we are using to keep Meredith alive, we could power a small fan for two days. You tell me what’s unethical.", "I signed up for Second Life about a year ago. Back then, my life was so great that I literally wanted a second one. Absolutely everything was the same…except I could fly.", "People say, ‘oh it’s dangerous to keep weapons in the home, or the workplace.’ Well I say, it’s better to be hurt by someone you know, accidentally, than by a stranger, on purpose.", "I wish I could menstruate. If I could menstruate, I wouldn’t have to deal with idiotic calendars anymore. I’d just be able to count down from my previous cycle. Plus I’d be more in tune with the moon and the tides.", "Once I’m officially Regional Manager, my first order of business will be to demote Jim Halpert. So I will need a new number two. My ideal choice? Jack Bauer. But he is unavailable. Fictional. And overqualified.", "In the wild, there is no healthcare. Healthcare is “Oh, I broke my leg!” A lion comes and eats you, you’re dead. Well, I’m not dead, I’m the lion, you’re dead!", "Congratulations on your one cousin. I have seventy, each one better than the last!", "Now that I own the building I’m looking for new sources of revenue. And a daycare center? Muahahahahahahahaha…Well I guess it’s not an evil idea, it’s just a regular idea, but there’s no good laugh for a regular idea.", "The principle is sound. To avoid illness, expose yourself to germs, enabling your immune system to develop antibodies. I don’t know why everyone doesn’t do this… Maybe they have something against living forever.", "It’s never the person who you most suspect. It’s also never the person you least suspect since anyone with half a brain would suspect them the most. Therefore, I know the killer to be Phyllis… The person who I most medium suspect.", "No, don’t call me a hero. Do you know who the real heroes are? The guys who wake up every morning and go into their normal jobs, and get a distress call from the Commissioner and take off their glasses and change into capes and fly around fighting crime. Those are the real heroes.", "It’s a real shame because studies have shown that more information gets passed through water cooler gossip than through official memos. Which puts me at a disadvantage because I bring my own water to work.", "Nothing stresses me out. Except having to seek the approval of my inferiors.", "Why are all these people here? There are too many people on this earth. We need a new plague.", "No, I disagree. “R” is one of the most menacing of sounds. That’s why they call it murder not ‘muckduck’.", "Reject a woman, and she will never let it go. One of the many defects of their kind. Also, weak arms.", "I don’t have a lot of experience with vampires, but I have hunted werewolves. I shot one once, but by the time I got to it, it had turned back into my neighbor’s dog.", "In an ideal world, I would have all 10 fingers on my left hand so my right hand could just be a fist for punching.", "You couldn’t handle my undivided attention.", "I saw Wedding Crashers accidentally. I bought a ticket for “Grizzly Man” and went into the wrong theater. After an hour, I figured I was in the wrong theater, but I kept waiting. Cuz that’s the thing about bear attacks… they come when you least expect it.", "Of course Martial arts training is relevant… Uh, I know about a billion Asians that would beg to differ… You know what, you can go to hell, and I will see you there. Burning!", "There are a huge number of yeast infections in this county. Probably because we’re downriver from that old bread factory."];

function fallbackCopyTextToClipboard(text, login) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position="fixed";  //avoid scrolling to bottom
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        if (msg === 'successful') {
            toastr.info(`${login ? "Login" : "Password"} copied to clipboard!`);
        } else {
            toastr.error(`Failed to copy the ${login ? "login" : "password"}.`);
        }
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
        toastr.error(`Failed to copy the ${login ? "login" : "password"}.`);
    }

    document.body.removeChild(textArea);
}
function copyTextToClipboard(text, login) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text, login);
        return;
    }
    navigator.clipboard.writeText(text).then(function() {
        toastr.info(`${login ? "Login" : "Password"} copied to clipboard!`);
    }, function(err) {
        toastr.error(`Failed to copy the ${login ? "login" : "password"}.`);
    });
}

const showPasswords = () => {
    const passwordList = $("#passwordList");

    passwordsForLabs.forEach((password, index) => {
        console.log(password);
        $(passwordList).append(passwordTemplate({
            labNumber: index + 1,
            labPassword: password,
            passwordPresent: password === "" ? "d-none" : ""
        }));
    });
};

const showQuotes = () => {
    $("#boratQuote").text(boratQuotes[Math.floor(Math.random() * boratQuotes.length)]);
    $("#aligQuote").text(aligQuotes[Math.floor(Math.random() * aligQuotes.length)]);
    $("#michaelQuote").text(michaelQuotes[Math.floor(Math.random() * michaelQuotes.length)]);
    $("#ginaQuote").text(ginaQuotes[Math.floor(Math.random() * ginaQuotes.length)]);
    $("#ronQuote").text(ronQuotes[Math.floor(Math.random() * ronQuotes.length)]);
    $("#dwightQuote").text(dwightQuotes[Math.floor(Math.random() * dwightQuotes.length)]);
};

const moveTo = where => {
    if (where === "top") {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    } else if (where === "sem3") {
        document.getElementById("semesterIII").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    } else if (where === "sem2") {
        document.getElementById("semesterII").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
};

showQuotes();
showPasswords();
