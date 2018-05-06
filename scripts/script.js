//Future Goals
    //Add more comics
    //Question about favourite colours
    //Animate down arrow on radio selection for desktop view
    //Create logic so that if options other than mature are selected, those options are filtered out, but the rest of the questions are chosen by best match
    //create more modular system of getting best comic result

// Array of objects containing comic names and question categorizations
const comics = [
    { title: 'Saga',
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
    
    {   title: 'Rat Queens',
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
        title: "Giant Days", 
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
          title: "Monstress",
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
          title: "Descender",
          genre: 'sci-fi',
          romance: 'no',
          mood: 'drama',
          emoji: 'spaceship',
          drink: 'wine',
          rating: 'teen',
          author: 'Jeff Lemire and  Dustin Nguyen'
      },

     {
          title: "Backstagers",
          genre: 'fantasy',
          romance: 'yes',
          mood: 'cute',
          emoji: 'rainbow',
          drink: 'soda',
          rating: 'allAges',
          author: 'James Tynion IV and Rian Syngh',
          description: `Harry Potter meets high school theatre in this adorable fantasy. A new student joins his high school theatre's stage crew and discovers a whole magical backstage world.`
      },
      {
          title: 'Joyride',
          genre: 'sci-fi',
          romance: 'all',
          mood: 'cute',
          emoji: 'rainbow',
          drink: 'coffee',
          rating: 'teen',
          author: 'Jackson Lanzing, Collin Kelly, and Marcus To',
          description: ``
      },
      {
          title: 'Bingo Love',
          genre: 'fiction',
          romance: 'all',
          mood: 'cute',
          emoji: 'rainbow',
          drink: 'soda',
          rating: 'allAges',
          author: 'Tee Franklin, Jenn St-Onge, and Joy San'
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
        description: 'A hard-rocking, high-flying space adventure about two bounty hunters just trying to make it in the universe!'
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
        description: `A 50's housewife who is also an assassin? What could possibly go wrong?`
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
        description: `It's like if "Stranger Things" was about paper delivery girls and had time travel!`
      }        
];



//get checked value from each question and assign it to variable
$(function () {
    $('.result-container').hide();
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
        
        //create array from objects shortlist & iterate over and get title with highest value
        const resultsArray = Object.entries(resultsShortlist);

            const sortResults = resultsArray.sort((arr1, arr2) => {
                return arr1[1] < arr2[1];
            }); 

        const topScore = sortResults[0];


        //check to see if any other scores match this score, if so, push them to array
        const tieArray = [];

        const tie = sortResults.forEach(element => {
            console.log(element);
            if (element[1] === topScore[1]) {
                tieArray.push(element);
                
                console.log(sortResults[element]);
            }
            return tieArray;
        });

        //Check for a tie. If there is a tie, run getRandomTitleFunction, else just return title
        function finalResult () {
            if (tieArray.length > 1) {
                return getRandomTitle(tieArray);
            } else {
                return tieArray[0][0];
            } 
        }   

        // Get random title in case of tie
        const getRandomTitle = function (array) {
            const randomTitle = Math.floor(Math.random() * array.length);
            return array[randomTitle][0];
        }


        // Return the result as the comic object for appending data
        const answerObject = comics
            .filter((comic) => {
                return comic.title === finalResult();
            })
            .map((comic) => {
                return comic;
            }); 

        

        // display results page
        showResults();

        function showResults () {
            $('.result-container').fadeIn();
            scrollDown();
        }

        // Scroll to page on display
        function scrollDown () {
            $('html, body').animate({
                scrollTop: $("#result").offset().top
            }, 500);
            showResultsContent();
        }

        //Put results on to page   
        function showResultsContent () {
            $('.image').attr('src', answerObject[0].image);
            $('.text-container').html(`<h2>You should read ${answerObject[0].title}!</h2><h3>by ${answerObject[0].author}</h3><p>${answerObject[0].description}</p>`); 
        }
        

    }); //Form submit end
}); //Document Ready End



