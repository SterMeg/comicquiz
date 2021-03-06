//Future Goals
    //Add more comics
    //Question about favourite colours
    //Animate down arrow on radio selection for desktop view
    //Create logic so that if options other than mature are selected, those options are filtered out, but the rest of the questions are chosen by best match
    //create more modular system of getting best comic result
    //refactor into function blocks
    //prompt user to make selections if inputs are not selected
    //'more results' option that returns other close matches

// Array of objects containing comic names, info and question categorizations
const comics = [
    {   title: 'Saga',
        genre: 'sci-fi',
        romance: 'yes',
        mood: 'drama',
        emoji: 'spaceship',
        drink: 'beer',
        rating: 'adult',
        author: 'Brian K. Vaughn and Fiona Staples',
        description: `Basically the gateway drug to comics, Saga is like Romeo and Juliet in space if they lived and it was narrated by their kid.`,
        image: 'assets/Saga_vol1.png'
    },
    { 
        title: 'Rat Queens',
        genre: 'fantasy',
        romance: 'some',
        mood: 'funny',
        emoji: 'sword',
        drink: 'beer',
        rating: 'adult',
        author: 'Kurtis J Wiebe and Roc Upchurch',
        description: `Sass, sorcery, and shenanigans! Join this all-female band of hard-fighting, hard-partying adventurers-for-hire on their quest to make enough money to party even harder.`,
        image: 'assets/rat-queens_vol1.jpg'
    },

    {     
        title: 'Giant Days', 
        genre: 'fiction',
        romance: 'some',
        mood: 'funny',
        emoji: 'rainbow',
        drink: 'coffee',
        rating: 'teen',
        author: 'John Allison, Lissa Treiman, and Whitney Cogar',
        description: `Heartwarming and hilarious, "Giant Days" follows a goth, a homeschooler, and a pre-med student who end up roommates in their first year at university.`,
        image: 'assets/giant-days_vol1.jpg'
    },
    {
        title: 'Monstress',
        genre: 'fantasy',
        romance: 'no',
        mood: 'dark',
        emoji: 'sword',
        drink: 'wine',
        rating: 'teen',
        author: 'Marjorie Liu and Sana Takeda',
        description: `This darkly beautiful fantasy follows a former slave on her quest to understand her past. But in order to do so, she must also grapple with a voracious monster that lives inside her.`,
        image: 'assets/Monstress_Vol1.png'
    },
    {
        title: 'Descender',
        genre: 'sci-fi',
        romance: 'no',
        mood: 'drama',
        emoji: 'spaceship',
        drink: 'wine',
        rating: 'adult',
        author: 'Jeff Lemire and  Dustin Nguyen',
        description: `An android boy wakes up after years of being powered down to find that everyone from his home has gone, and robots are being hunted down after a robot attack on humanity.`,
        image: 'assets/Descender_vol1.png'
    },
    {
        title: 'Backstagers',
        genre: 'fantasy',
        romance: 'yes',
        mood: 'cute',
        emoji: 'rainbow',
        drink: 'soda',
        rating: 'allAges',
        author: 'James Tynion IV and Rian Syngh',
        description: `Harry Potter meets high school theatre in this adorable fantasy. A new student joins his high school theatre's stage crew and discovers a whole magical backstage world.`,
        image: 'assets/backstagers.jpg'
    },
    {
        title: 'Joyride',
        genre: 'epic',
        romance: 'yes',
        mood: 'cute',
        emoji: 'rainbow',
        drink: 'coffee',
        rating: 'teen',
        author: 'Jackson Lanzing, Collin Kelly, and Marcus To',
        description: `Alien life has been discovered among the stars, but earth has blocked itself off with a giant shield. Uma Akkolyte thinks this is a drag, so she steals a spaceship and goes to explore the universe.`,
        image: 'assets/joyride.jpg'
    },
    {
        title: 'Bingo Love',
        genre: 'fiction',
        romance: 'all',
        mood: 'cute',
        emoji: 'rainbow',
        drink: 'soda',
        rating: 'allAges',
        author: 'Tee Franklin, Jenn St-Onge, and Joy San',
        description: `Two girls fall in love in the 1960s, but their families force them apart. Then, nearly 50 years later, they reunite in the same bingo hall where they first met.`,
        image: 'assets/BingoLove.png'
    },
    {
        title: 'Kim & Kim',
        genre: 'sci-fi',
        romance: 'no',
        mood: 'funny',
        emoji: 'guitar',
        drink: 'beer',
        rating: 'adult',
        author: 'Magdalene Visaggio, Eva Cabrera, and Claudia Aguirre',
        description: 'A hard-rocking, high-flying space adventure about two bounty hunters just trying to make it in the universe!',
        image: 'assets/kimandkim_vol1.jpg'
      },
      {
        title: 'Lady Killer',
        genre: 'fiction',
        romance: 'no',
        mood: 'dark',
        emoji: 'sword',
        drink: 'wine',
        rating: 'adult',
        author: 'Joelle Jones and Jamie S. Rich',
        description: `A seemingly picture-perfect 50's housewife who is also an assassin? What could possibly go wrong?`,
        image: 'assets/lady-killer.jpg'
      },
      {
        title: 'Paper Girls',
        genre: 'sci-fi',
        romance: 'no',
        mood: 'drama',
        emoji: 'guitar',
        drink: 'soda',
        rating: 'teen',
        author: 'Brian K. Vaughan and Cliff Chiang',
        description: `It's like if "Stranger Things" was about paper delivery girls and had time travel!`,
        image: 'assets/PaperGirls_Vol1.png'
      }, 

      {
        title: 'Mech Cadet Yu',
        genre: 'sci-fi',
        romance: 'no',
        mood: 'drama',
        emoji: 'spaceship',
        drink: 'soda',
        rating: 'allAges',
        author: 'Grek Pak, Takeshi Miyazawa, Triona Farrell',
        description: `Giant mechs help protect humanity from alien invasion, and students attend elite training in the hopes of getting a chance at being chosen to pilot one. But this year, one of the mechs doesn't choose a student, but a janitor's son instead.`,
        image: 'assets/mech-cadet-yu_vol1.jpg'
      },
      {
        title: 'Heathen',
        genre: 'epic',
        romance: 'no',
        mood: 'drama',
        emoji: 'rainbow',
        drink: 'beer',
        rating: 'teen',
        author: 'Natasha Alterici',
        description: `A woman is forced to leave her village after it is discovered that she loves another woman. Instead of letting it get her down, she goes on an epic adventure to save a Valkyrie, smash the patriarchy, and take on Odin.`,
        image: `assets/heathen.jpg`
      }      
];



$(function () {
    // Hide results container until results generated
    $('.result-container').hide();
    $('footer').hide();

    //Apply smooth scroll
    $('a').smoothScroll();
    
    $('form').on('submit', function (e) {
        //prevent default action on form submit
        e.preventDefault();

        //Gets answers from each set of question and assigns to variable
        const genreAnswer = $('input[name=genre]:checked').val();
        const romanceAnswer = $('input[name=romance]:checked').val();
        const moodAnswer = $('input[name=mood]:checked').val();
        const emojiAnswer = $('input[name=emoji]:checked').val();
        const drinkAnswer = $('input[name=drink]:checked').val();
        const ratingAnswer = $('input[name=rating]:checked').val();

        // Compare value from answer to objects in array and look for matches
        // create array of titles which have matching question properties for questions
        //Returns array from selections that match genre
        const genreList = comics
        .filter((comic) => {
            return comic.genre === genreAnswer;
        })
        .map((comic) => {
            return comic;
        });

        //Returns array from selections that match romance
        const romanceList = comics
            .filter((comic) => {
                return comic.romance === romanceAnswer;
            })
            .map((comic) => {
                return comic;
            }); 

        //Returns array from selections that match mood
        const moodList = comics
            .filter((comic) => {
                return comic.mood === moodAnswer;
            })
            .map((comic) => {
                return comic;
            });

        //Returns array from selections that match emoji
        const emojiList = comics
            .filter((comic) => {
                return comic.emoji === emojiAnswer;
            })
            .map((comic) => {
                return comic;
            });

        //Returns array from selections that match drink
        const drinkList = comics
            .filter((comic) => {
                return comic.drink === drinkAnswer;
            })
            .map((comic) => {
                return comic;
            });

        //Returns array from selections that match rating
        const ratingList = comics
            .filter((comic) => {
                return comic.rating === ratingAnswer;
            })
            .map((comic) => {
                return comic;
            });
        
        // Get title that is chosen most number of times
        //if tie occurs choose random title of tied titles

        // Concatanate returned arrays from each question to create list of possible answers
        const answerList = genreList.concat(romanceList, moodList, emojiList, drinkList, ratingList);
        
        //Get number of times each title occurs
        const resultsShortlist = _.countBy(answerList, 'title');
        
        //create array from objects shortlist & sort by highest value
        const resultsArray = Object.entries(resultsShortlist);

            const sortResults = resultsArray.sort((arr1, arr2) => {
                return arr1[1] < arr2[1];
            }); 
        //Use first array position to get highest value
        const topScore = sortResults[0];

        //check to see if any other scores match this score, if so, push them to array
        const tieArray = [];

        const tie = sortResults.forEach(element => {
            if (element[1] === topScore[1]) {
                tieArray.push(element);
            }
            return tieArray;
        });
        
       
        // Get random title in case of tie
        const getRandomTitle = function (array) {
            const randomTitle = Math.floor(Math.random() * array.length);
            return array[randomTitle];
        }
        
        //run getRandomTitle function. If there is no tie, the function should just return the item in the array.
        let finalResult = getRandomTitle(tieArray);

        // Return the result as the comic object for appending data
        const answerObject = comics
            .filter((comic) => {
                return comic.title === finalResult[0];
            })
            .map((comic) => {
                return comic;
            }); 

        // display results page
        showResults();

        function showResults () {
            $('.result-container').fadeIn();
            $('footer').fadeIn();
            showResultsContent();
        }

        // Scroll to page on display
        function scrollDown () {
            $('html, body').animate({
                scrollTop: $("#result").offset().top
            }, 500);  
        }

        //Put results on page   
        function showResultsContent () {
            $('.image').attr('src', answerObject[0].image);
            $('.text-container').html(`<h2>You should read ${answerObject[0].title}!</h2><h3>by ${answerObject[0].author}</h3><p>${answerObject[0].description}</p>`);
            scrollDown(); 
        }
        

        //Reset quiz to top
        $('.reset-button').on('click', function () {
            location.reload();
            $('html,body').scrollTop(0);
        });

        //Tweet sharing
        window.twttr = (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0],
                t = window.twttr || {};
            if (d.getElementById(id)) return t;
            js = d.createElement(s);
            js.id = id;
            js.src = "https://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);

            t._e = [];
            t.ready = function (f) {
                t._e.push(f);
            };

            return t;
        }(document, "script", "twitter-wjs"));
    
    }); //Form submit end
    

}); //Document Ready End



