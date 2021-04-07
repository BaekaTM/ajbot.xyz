		let PREFIX = "aj!";

		function strUcFirst(a) { // fonction qui met la première lettre en Maj
            return (a + '').charAt(0).toUpperCase() + a.substr(1);
        }
		
		var COMMANDS = [
        {
            name: "test",
            description: "To see if the bot is on.",
            category: strUcFirst("info | About the bot"),
            usage: [`${PREFIX}test`]
        },
        {
            name: "supportlink",
            description: "To join the Ajbot-Support discord server.",
            category: strUcFirst("info | About the bot"),
            usage: [`${PREFIX}supportlink`]
        },
        {
            name: "botinfo",
            description: "Sends informations about the bot.",
            category: strUcFirst("info | About the bot"),
            usage: [`${PREFIX}botinfo`]
        },
        {
            name: "botguilds",
            description: "How many guilds the bot is in.",
            category: strUcFirst("info | About the bot"),
            usage: [`${PREFIX}botguilds`]
        },
        {
            name: "addbot",
            description: "To invite the bot in your discord server.",
            category: strUcFirst("info | About the bot"),
            usage: [`${PREFIX}addbot`]
        },
        {
            name: "vote",
            description: "To vote for the bot on top.gg (please vote for me <span class=\"emoji pray\"></span>).",
            category: strUcFirst("info | About the bot"),
            usage: [`${PREFIX}vote`]
        },
        {
            name: "i<3you",
            description: "Sends an \"I LOVE YOU\" gif.",
            category: strUcFirst("love"),
            usage: [`${PREFIX}I<3YOU <user>`]
        },
        {
            name: "poke",
            description: "Do you want to poke someone with a gif ?",
            category: strUcFirst("love"),
            usage: [`${PREFIX}poke <user>`]
        },
        {
            name: "hug",
            description: "Let's hug someone by a gif !",
            category: strUcFirst("love"),
            usage: [`${PREFIX}hug <user>`]
        },
        {
            name: "kiss",
            description: "Oh ! It's so cute ! You're kissing someone.",
            category: strUcFirst("love"),
            usage: [`${PREFIX}kiss <user>`]
        },
        {
            name: "blush",
            description: "You're blushing! Is it because of love ?",
            category: strUcFirst("love"),
            usage: [`${PREFIX}blush`]
        },
        {
            name: "hello",
            description: "Say hello to someone or to everyone.",
            category: strUcFirst("politeness"),
            usage: [`${PREFIX}hello`, `${PREFIX}hello <user>`]
        },
        {
            name: "bye",
            description: "Say goodbye to someone or to everyone.",
            category: strUcFirst("politeness"),
            usage: [`${PREFIX}bye`, `${PREFIX}bye <user>`]
        },
        {
            name: "sorry",
            description: "Say sorry to someone or to everyone.",
            category: strUcFirst("politeness"),
            usage: [`${PREFIX}sorry`, `${PREFIX}sorry <user>`]
        },
        {
            name: "please",
            description: "Say please to someone.",
            category: strUcFirst("politeness"),
            usage: [`${PREFIX}please <user>`]
        },
        {
            name: "thanks",
            description: "Thank someone or everyone.",
            category: strUcFirst("politeness"),
            usage: [`${PREFIX}thanks`, `${PREFIX}thanks <user>`]
        },
        {
            name: "laugh",
            description: "This command will make you laugh...",
            category: strUcFirst("happiness"),
            usage: [`${PREFIX}laugh`]
        },
        {
            name: "smile",
            description: "You're smiling like a POTATOOOOoo0O <span class=\"emoji potato\"></span> (sorry).",
            category: strUcFirst("happiness"),
            usage: [`${PREFIX}smile`]
        },
        {
            name: "evilsmile",
            description: "You're making the smile of death <span class=\"emoji scream\"></span>.",
            category: strUcFirst("happiness"),
            usage: [`${PREFIX}evilsmile`]
        },
        {
            name: "fakesmile",
            description: "It's a fake smile that you're doing here.",
            category: strUcFirst("happiness"),
            usage: [`${PREFIX}fakesmile`]
        },
        {
            name: "dance",
            description: "Let's dance !",
            category: strUcFirst("happiness"),
            usage: [`${PREFIX}dance`]
        },
        {
            name: "cursedance",
            description: "Don't you know the meme ?",
            category: strUcFirst("happiness"),
            usage: [`${PREFIX}cursedance`]
        },
        {
            name: "afraid",
            description: "Sends a gif in which you're afraid.",
            category: strUcFirst("violence"),
            usage: [`${PREFIX}afraid`]
        },
        {
            name: "angry",
            description: "You're going to explode with anger : goodbye !",
            category: strUcFirst("violence"),
            usage: [`${PREFIX}angry`]
        },
        {
            name: "wasted",
            description: "Go in a coffin or make someone go in it!",
            category: strUcFirst("violence"),
            usage: [`${PREFIX}wasted`, `${PREFIX}wasted <user>`]
        },
        {
            name: "slap",
            description: "Slap someone who has got you angry.",
            category: strUcFirst("violence"),
            usage: [`${PREFIX}slap <user>`]
        },
        {
            name: "bang",
            description: "Do you want to bang someone ?",
            category: strUcFirst("violence"),
            usage: [`${PREFIX}slap <user>`]
        },
        {
            name: "slice",
            description: "Lets cut people up !",
            category: strUcFirst("violence"),
            usage: [`${PREFIX}slice <user>`]
        },
        {
            name: "kill",
            description: "Think carefully before you kill someone. This command can send anyone to the cemetery <span class=\"emoji coffin\"> <span class=\"emoji skull_crossbones\"></span> ...",
            category: strUcFirst("violence"),
            usage: [`${PREFIX}kill <user>`]
        },
        {
            name: "shutup",
            description: "Tell someone or unspecified people to <strong>shut up</strong>.",
            category: strUcFirst("unsorted"),
            usage: [`${PREFIX}shutup`, `${PREFIX}shutup <user>`]
        },
        {
            name: "baka",
            description: "Tell someone or unspecified people that they are idiots.",
            category: strUcFirst("unsorted"),
            usage: [`${PREFIX}baka`, `${PREFIX}baka <user>`]
        },
        {
            name: "really",
            description: "Oh ! Is it true ?",
            category: strUcFirst("unsorted"),
            usage: [`${PREFIX}really`]
        },
        {
            name: "shrug",
            description: "You don't care about that using this command.",
            category: strUcFirst("unsorted"),
            usage: [`${PREFIX}shrug`]
        },
        {
            name: "punch", // ELLE EST PAS AVEC LES AUTRES "violence" JE L'AI OUBLIEE
            description: "This command will punch someone with a gif!",
            category: strUcFirst("violence"),
            usage: [`${PREFIX}punch <user>`]
        },
        {
            name: "sad",
            description: "Oooh... How can I console you?",
            category: strUcFirst("unsorted"),
            usage: [`${PREFIX}sad`]
        },
        {
            name: "cry",
            description: "NO NO, no don't cry !",
            category: strUcFirst("unsorted"),
            usage: [`${PREFIX}cry`]
        },
        {
            name: "bored",
            description: "A gif will show others that you are bored.",
            category: strUcFirst("unsorted"),
            usage: [`${PREFIX}bored`]
        },
        {
            name: "bruh",
            description: "No comments...",
            category: strUcFirst("unsorted"),
            usage: [`${PREFIX}bruh`]
        },
        {
            name: "confused",
            description: "A gif will show others that you are confused.",
            category: strUcFirst("unsorted"),
            usage: [`${PREFIX}confused`]
        },
        {
            name: "afraid", // mais elle aussi ptn elle est déjà passée... snif g fé koi ?? (regarder angry juste en dessous c'est elle qui est déjà passée aussi)
            description: "Don't be afraid or I'll send a gif!",
            category: strUcFirst("unsorted"),
            usage: [`${PREFIX}afraid`]
        },
        {
            name: "angry", // ptn keskel fout là elle est déjà passée humhum... Bon après tout c'est pas très grave on ferme les yeux '-'...
            description: "Don't get angry, I'm going to send a gif",
            category: strUcFirst("unsorted"),
            usage: [`${PREFIX}angry`]
        },
        {
            name: "sleep",
            description: "Shhhht! I don't want to wake you up!",
            category: strUcFirst("unsorted"),
            usage: [`${PREFIX}sleep`]
        },
        {
            name: "dramatic",
            description: "You're being dramtic !!!",
            category: strUcFirst("unsorted"),
            usage: [`${PREFIX}dramatic`]
        },
        {
            name: "reverse",
            description: "Do you want to use reverse ?",
            category: strUcFirst("unsorted"),
            usage: [`${PREFIX}reverse`]
        },
        {
            name: "pat",
            description: "Pat someone (with a gif)",
            category: strUcFirst("unsorted"),
            usage: [`${PREFIX}pat <user>`]
        },
        {
            name: "proud",
            description: "A gif will show others that you are proud (of yourself or someone else)!",
            category: strUcFirst("unsorted"),
            usage: [`${PREFIX}proud`, `${PREFIX}proud <user>`]
        },
        {
            name: "stare",
            description: "You're staring at someone with my gifs!",
            category: strUcFirst("unsorted"),
            usage: [`${PREFIX}stare <user>`]
        },
        {
            name: "givecookie",
            description: "You're giving a cookie to someone.",
            category: strUcFirst("unsorted"),
            usage: [`${PREFIX}givecookie <user>`]
        },
        {
            name: "feed",
            description: "It's very nice to feed someone!",
            category: strUcFirst("unsorted"),
            usage: [`${PREFIX}feed <user>`]
        },
        {
            name: "run",
            description: "<strong>RUUUUUUUUUN !!!</strong>",
            category: strUcFirst("unsorted"),
            usage: [`${PREFIX}run`]
        },
        {
            name: "exited",
            description: "STOP MOVIIIING !!!!!!!",
            category: strUcFirst("exited"),
            usage: [`${PREFIX}exited`]
        },
        {
            name: "random",
            description: "This command works again ! Sends a random command from aaaall the bot's commands. <br><strong>It's better to ask <code>AJ!random <user></code> because the bot has a lot of commands with mentions only and if not he'll answer <code>PLS MENTION SOMEONE</code>.</strong>",
            category: "unsorted",
            usage: [`${PREFIX}random`, `${PREFIX}random <user>`]
        },
        {
            name: "tags",
            description: "Send the names of all users who have the same tag (#xxxx) as you.",
            category: strUcFirst("info | About the bot"),
            usage: [`${PREFIX}tags`, `${PREFIX}tags <user>`]
        },
        {
            name: "happy",
            description: "We're glad that ur happy :)",
            category: strUcFirst("happiness"),
            usage: [`${PREFIX}happy`]
		    },
        {
          name: "tweet",
          description: "Post something on tweeter!",
          category: "image",
          usage: [`${PREFIX}tweet <text>`]
        },
        {
          name: "deepfry",
          description: "Horrible",
          category: "image",
          usage: [`${PREFIX}deepfry`, `${PREFIX}deepfry <user>`]
        }
    ];
