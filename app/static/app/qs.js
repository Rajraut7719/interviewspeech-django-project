function ques() {
  document.getElementById("media").disabled = true;
  qraw = `Tell me something about yourself in brief
Describe who you are? or Tell me about your background.
What are your strengths and weaknesses?
What are your strong points? or What are your strengths?
What do your friends/co-workers say about you?
What did you do in the last year to improve your knowledge?
Explain the difference between group and team. Are you a team player?
What is your ideal company or workplace?
What is the most difficult thing that you’ve ever accomplished? or What is the most difficult thing you have ever done?
What is the difference between hard work and smart work?
How do you feel about working weekends and night shifts?
Where do you see yourself 3 years from now? or Where do you see yourself in 5 years?
How quickly do you adapt to new technology?
What software packages are you familiar with?
On a scale of 1 to 10 how would you rate yourself as a leader?
Are you open to take risks? or Do you like experimenting?
What are your future goals? Tell me about your short term and long-term goals.
What motivates you?
What are your hobbies? or What are you passionate about?
What are your biggest achievements till date?
What are you most proud of?
What has been your greatest failure?
What do you always regret? or Do you have any regrets?
How do you respond to change?
Are you an organized person?
Can you describe your time management skills?
What’s your absenteeism record like?
Are you reliable? or Can I trust you with responsibilities?
What are the three things that are most important for you in a job?
What was the toughest decision you ever had to make?
Give me an example of your creativity.
What makes you happy?
How do you work under pressure? Can you handle the pressure?
What do you know about us or our company?
How long do you think you will work for us after we hire you?
Why do you want to work for us or our company? or Why do you want this job?
Do you know anyone who works for us?
Why should we hire you? or Why should I hire you?
Do you have a good work ethic?
How do you deal with feedback and criticism?
Tell me about yourself
Why should we hire you?
What’s your greatest weakness?
What are your career goals?
What’s your greatest strength?
What’s your greatest accomplishment?
How do you handle conflict?
How do you handle stress?
What are you most proud of?
What are you passionate about?
What makes you unique?
How would you describe yourself?
Where do you see yourself in 5 years?
Why do you want to work for us?
Why did you leave your last job?
What motivates you?
How do you work under pressure?
How do you handle conflict?
What is your salary range expectation?
Do you have any questions for us?`;
  const items = qraw.split("\n");

  setTimeout(function () {
    document.getElementById("start-vid-recording").click();
    var item = items[Math.floor(Math.random() * items.length)];
    document.getElementById("question").innerHTML = "Question: " + item;

    var timeLeft = 10;
    var elem = document.getElementById("Timer");

    var timerId = setInterval(countdown, 1000);

    function countdown() {
      if (timeLeft == 0) {
        clearTimeout(timerId);
        doSomething();
      } else {
        elem.innerHTML = timeLeft + " seconds remaining";
        timeLeft--;
      }
    }
  }, 3000);

  setTimeout(function () {
    var item = items[Math.floor(Math.random() * items.length)];
    document.getElementById("question").innerHTML = "Question: " + item;

    var timeLeft = 10;
    var elem = document.getElementById("Timer");

    var timerId = setInterval(countdown, 1000);

    function countdown() {
      if (timeLeft == 0) {
        clearTimeout(timerId);
        doSomething();
      } else {
        elem.innerHTML = timeLeft + " seconds remaining";
        timeLeft--;
      }
    }
  }, 17000);

  setTimeout(function () {
    var item = items[Math.floor(Math.random() * items.length)];
    document.getElementById("question").innerHTML = "Question: " + item;

    var timeLeft = 10;
    var elem = document.getElementById("Timer");

    var timerId = setInterval(countdown, 1000);

    function countdown() {
      if (timeLeft == 0) {
        clearTimeout(timerId);
        doSomething();
      } else {
        elem.innerHTML = timeLeft + " seconds remaining";
        timeLeft--;
      }
    }
  }, 30000);

  setTimeout(function () {
    document.getElementById("stop-vid-recording").click();
  }, 60000);
}

function doSomething() {
  document.getElementById("myBtn").click();
}

pos = [
  "absolutely",
  "accepted",
  "acclaimed",
  "accomplish",
  "accomplishment",
  "accomplished",
  "achievement",
  "action",
  "active",
  "admire",
  "adorable",
  "adventure",
  "affirmative",
  "affluent",
  "agree",
  "accomplished",
  "quickly",
  "Fast",
  "agreeable",
  "amazing",
  "angelic",
  "appealing",
  "approve",
  "aptitude",
  "attractive",
  "awesome",
  "beaming",
  "beautiful",
  "believe",
  "beneficial",
  "bliss",
  "bountiful",
  "bounty",
  "brave",
  "bravo",
  "brilliant",
  "bubbly",
  "calm",
  "celebrated",
  "certain",
  "champ",
  "champion",
  "charming",
  "cheery",
  "choice",
  "classic",
  "classical",
  "clean",
  "commend",
  "composed",
  "congratulation",
  "constant",
  "cool",
  "courageous",
  "creativecute",
  "dazzling",
  "delight",
  "delightful",
  "distinguished",
  "divine",
  "earnest",
  "easy",
  "ecstatic",
  "effective",
  "effervescent",
  "efficient",
  "effortless",
  "electrifying",
  "elegant",
  "enchanting",
  "encouraging",
  "endorsed",
  "energetic",
  "energized",
  "engaging",
  "enthusiastic",
  "essential",
  "esteemed",
  "ethical",
  "excellent",
  "exciting",
  "exquisite",
  "fabulous",
  "fair",
  "familiar",
  "famous",
  "fantastic",
  "favorable",
  "fetching",
  "fine",
  "fitting",
  "flourishing",
  "fortunate",
  "free",
  "fresh",
  "friendly",
  "fun",
  "funny",
  "generous",
  "genius",
  "genuine",
  "giving",
  "glamorous",
  "glowing",
  "good",
  "gorgeous",
  "graceful",
  "great",
  "green",
  "grin",
  "growing",
  "handsome",
  "happy",
  "harmonious",
  "healing",
  "healthy",
  "hearty",
  "heavenly",
  "honest",
  "honorable",
  "honored",
  "hug",
  "idea",
  "ideal",
  "imaginative",
  "imagine",
  "impressive",
  "independent",
  "innovate",
  "innovative",
  "instant",
  "instantaneous",
  "instinctive",
  "intellectual",
  "intelligent",
  "intuitive",
  "inventive",
  "jovial",
  "joy",
  "jubilant",
  "keen",
  "kind",
  "knowing",
  "knowledgeable",
  "laugh",
  "learned",
  "legendary",
  "light",
  "lively",
  "lovely",
  "lucid",
  "lucky",
  "luminous",
  "marvelous",
  "masterful",
  "meaningful",
  "merit",
  "meritorious",
  "miraculous",
  "motivating",
  "moving",
  "natural",
  "nice",
  "novel",
  "now",
  "nurturing",
  "nutritious",
  "okay",
  "one",
  "one hundred percent",
  "open",
  "optimistic",
  "paradise",
  "perfect",
  "phenomenal",
  "pleasant",
  "pleasurable",
  "plentiful",
  "poised",
  "polished",
  "popular",
  "positive",
  "powerful",
  "prepared",
  "pretty",
  "principled",
  "productive",
  "progress",
  "prominent",
  "protected",
  "proud",
  "quality",
  "quick",
  "quiet",
  "ready",
  "reassuring",
  "refined",
  "refreshing",
  "rejoice",
  "reliable",
  "remarkable",
  "resounding",
  "respected",
  "restored",
  "reward",
  "rewarding",
  "right",
  "robust",
  "safe",
  "satisfactory",
  "secure",
  "seemly",
  "simple",
  "skilled",
  "skillful",
  "smile",
  "soulful",
  "sparkling",
  "special",
  "spirited",
  "spiritual",
  "stirring",
  "stunning",
  "stupendous",
  "success",
  "successful",
  "sunny",
  "super",
  "superb",
  "supporting",
  "surprising",
  "terrific",
  "thorough",
  "thrilling",
  "thriving",
  "tops",
  "tranquil",
  "transformative",
  "transforming",
  "trusting",
  "truthful",
  "unreal",
  "unwavering",
  "up",
  "upbeat",
  "upright",
  "upstanding",
  "valued",
  "vibrant",
  "victorious",
  "victory",
  "vigorous",
  "virtuous",
  "vital",
  "vivacious",
  "wealthy",
  "welcome",
  "well",
  "whole",
  "wholesome",
  "willing",
  "wonderful",
  "wondrous",
  "worthy",
  "wow",
  "yes",
  "yummy",
  "zeal",
  "zealous",
  "forward",
  "looking",
  "morning",
  "evening",
  "afternoon",
  "Thanks",
  "Thank you",
  "pardon",
  "i can",
  "i will",
  "definetly",
  "ofcourse",
  "night",
  "try",
  "grateful",
  "best",
  "contribute",
  "Respect",
  "Opportunity",
  "Experience",
  "Flexible",
  "highest",
  "empathy",
  "learned",
  "learned",
  "leader",
  "example",
  "Reliable",
  "Trustworthy",
  "Independent",
  "Management",
  "Team",
  "work",
  "player",
  "Gifted",
  "Talent",
  "talented",
  "independent",
  "responsiblities",
  "responsible",
  "successfully",
  "very",
  "immediately",
];

neg = [
  "abysmal",
  "adverse",
  "alarming",
  "angry",
  "annoy",
  "anxious",
  "apathy",
  "appalling",
  "atrocious",
  "awful",
  "bad",
  "banal",
  "barbed",
  "belligerent",
  "bemoan",
  "beneath",
  "boring",
  "broken",
  "callous",
  "clumsy",
  "coarse",
  "cold",
  "cold-hearted",
  "collapse",
  "confused",
  "contradictory",
  "contrary",
  "corrosive",
  "corrupt",
  "crazy",
  "creepy",
  "criminal",
  "cruel",
  "cry",
  "cutting",
  "damage",
  "damaging",
  "dastardly",
  "dead",
  "decaying",
  "deformed",
  "deny",
  "deplorable",
  "depressed",
  "deprived",
  "despicable",
  "detrimental",
  "dirty",
  "disease",
  "disgusting",
  "disheveled",
  "dishonest",
  "dishonorable",
  "dismal",
  "distress",
  "dreadful",
  "dreary",
  "enraged",
  "eroding",
  "evil",
  "fail",
  "faulty",
  "fear",
  "feeble",
  "fight",
  "filthy",
  "foul",
  "frighten",
  "frightful",
  "gawky",
  "ghastly",
  "grave",
  "greed",
  "grimgrimace",
  "gross",
  "grotesque",
  "gruesome",
  "guilty",
  "haggard",
  "hard",
  "hard-hearted",
  "harmful",
  "hate",
  "hideous",
  "homely",
  "horrendous",
  "horrible",
  "hostile",
  "hurt",
  "hurtful",
  "icky",
  "ignorant",
  "ignoreill",
  "immature",
  "imperfect",
  "impossible",
  "inane",
  "inelegant",
  "infernal",
  "injure",
  "injurious",
  "insane",
  "insidious",
  "jealous",
  "junky",
  "lose",
  "lousy",
  "lumpy",
  "malicious",
  "mean",
  "menacing",
  "messy",
  "misshapen",
  "missing",
  "misunderstood",
  "moan",
  "moldy",
  "monstrous",
  "naive",
  "nasty",
  "naughty",
  "negate",
  "negative",
  "never",
  "no",
  "nobody",
  "nondescript",
  "nonsense",
  "not",
  "noxious",
  "objectionable",
  "odious",
  "offensive",
  "old",
  "oppressive",
  "pain",
  "perturb",
  "pessimistic",
  "petty",
  "plain",
  "poisonous",
  "poor",
  "prejudice",
  "questionable",
  "quirky",
  "quit",
  "reject",
  "renege",
  "repellant",
  "reptilian",
  "repugnant",
  "repulsive",
  "revenge",
  "revolting",
  "rocky",
  "rotten",
  "rude",
  "ruthless",
  "sad",
  "savage",
  "scare",
  "scary",
  "scream",
  "severe",
  "shocking",
  "shoddy",
  "sick",
  "sickening",
  "sinister",
  "slimy",
  "smelly",
  "sobbing",
  "sorry",
  "spiteful",
  "sticky",
  "stinky",
  "stormy",
  "stressful",
  "stuck",
  "stupid",
  "sub",
  "standard",
  "suspect",
  "suspicious",
  "tense",
  "terrible",
  "terrifying",
  "threatening",
  "ugly",
  "undermine",
  "unfair",
  "unfavorable",
  "unhappy",
  "unhealthy",
  "unjust",
  "unlucky",
  "unpleasant",
  "unsatisfactory",
  "unsightly",
  "untoward",
  "unwanted",
  "unwelcome",
  "unwholesome",
  "unwieldy",
  "unwise",
  "upset",
  "vice",
  "vicious",
  "vile",
  "villainous",
  "vindictive",
  "wary",
  "weary",
  "wicked",
  "woeful",
  "worthless",
  "wound",
  "yellyucky",
  "zero",
  "can't",
  "cannot",
];
var transcript;
function runSpeechRecognition() {
  setTimeout(function speed() {
    // get output div reference
    var output = document.getElementById("output");
    // get action element reference
    var action = document.getElementById("action");
    // new speech recognition object
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    // This runs when the speech recognition service starts
    recognition.onstart = function () {
      action.innerHTML = "<br><small>listening, please speak...</small>";
    };

    recognition.onspeechend = function () {
      action.innerHTML =
        "<br><small>stopped listening, hope you are done...</small>";
      speed();
    };

    // This runs when the speech recognition service returns result
    recognition.onresult = function (event) {
      transcript = transcript + event.results[0][0].transcript;
      const transdata = transcript.split(" ");
      var confidence;
      var pw = 0;
      var ng = 0;
      for (i = 0; i < transdata.length; i++) {
        for (j = 0; j < pos.length; j++) {
          if (transdata[i] == pos[j]) {
            pw = pw + 1;
          }
        }

        for (k = 0; k < neg.length; k++) {
          if (transdata[i] == neg[k]) {
            ng = ng + 1;
          }
        }
      }

      console.log("Postive Words ", pw);
      console.log("Negative Words", ng);
      var pt = pw * 1.5;
      var tn = ng * 0.5;
      var tl = pt - tn;
      if (tl > 10) {
        confidence = "9.9 %  Postivity";
      } else {
        confidence = tl + "% Postivity ";
      }
      //   output.innerHTML =
      console.log(transcript, "   Confidence ", confidence);
      output.classList.remove("hide");
    };

    // start recognition
    recognition.start();
  }, 3000);
}
