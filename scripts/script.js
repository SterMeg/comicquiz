// Array of objects containing comic names and question categorizations
const comics = [
    { title: 'Saga',
      genre: 'sci-fi',
      romance: 'yes',
      mood: 'drama',
      emoji: 'spaceship',
      drink: 'beer',
      rating: 'adult'
    },
    
    {   title: 'Rat Queens',
        genre: 'fantasy',
        romance: 'some',
        mood: 'funny',
        emoji: 'sword',
        drink: 'beer',
        rating: 'adult'
    },

    {     
        title: "Giant Days", 
        genre: 'fiction',
        romance: 'some',
        mood: 'funny',
        emoji: 'rainbow',
        drink: 'coffee',
        rating: 'teen'
      },

      {
          title: "Monstress",
          genre: 'fantasy',
          romance: 'no',
          mood: 'dark',
          emoji: 'sword',
          drink: 'wine',
          rating: 'teen'
      },

     {
          title: "Descender",
          genre: 'sci-fi',
          romance: 'no',
          mood: 'drama',
          emoji: 'spaceship',
          drink: 'wine',
          rating: 'teen'
      },

     {
          title: "Backstagers",
          genre: 'fantasy',
          romance: 'yes',
          mood: 'cute',
          emoji: 'rainbow',
          drink: 'soda',
          rating: 'allAges'
      },
      {
          title: 'Joyride',
          genre: 'sci-fi',
          romance: 'all',
          mood: 'cute',
          emoji: 'rainbow',
          drink: 'coffee',
          rating: 'teen'
      },
      {
          title: 'Bingo Love',
          genre: 'fiction',
          romance: 'all',
          mood: 'cute',
          emoji: 'rainbow',
          drink: 'soda',
          rating: 'allAges'
      },
      {
          title: 'Kim & Kim',
          genre: 'sci-fi',
          romance: 'no',
          mood: 'funny',
          emoji: 'guitar',
          drink: 'beer',
          rating: 'adult'
      },
      {
          title: 'Lady Killer',
          genre: 'fiction',
          romance: 'no',
          mood: 'dark',
          emoji: 'sword',
          drink: 'wine',
          rating: 'adult'
      },
      {
          title: 'Paper Girls',
          genre: 'sci-fi',
          romance: 'no',
          mood: 'drama',
          emoji: 'guitar',
          drink: 'soda',
          rating: 'teen'
      }

         
];



// Get random title in case of tie
const getRandomTitle = function (array) {
    const randomTitle = Math.floor(Math.random() * array.length);
    return array[randomTitle];
}
//get checked value from each question and assign it to variable
$(function () {

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

        console.log(genreList);
        //Returns array from selections that match romance
        const romanceList = comics
            .filter((comic) => {
                return comic.romance === romanceAnswer;
            })
            .map((comic) => {
                return comic;
            }); 

        console.log(romanceList);

        //Returns array from selections that match mood
        const moodList = comics
            .filter((comic) => {
                return comic.mood === moodAnswer;
            })
            .map((comic) => {
                return comic;
            });

        console.log(moodList); 
            
        //Returns array from selections that match emoji
        const emojiList = comics
            .filter((comic) => {
                return comic.emoji === emojiAnswer;
            })
            .map((comic) => {
                return comic;
            });
        console.log(emojiList);

        //Returns array from selections that match drink
        const drinkList = comics
            .filter((comic) => {
                return comic.drink === drinkAnswer;
            })
            .map((comic) => {
                return comic;
            });
        console.log(drinkList);

        //Returns array from selections that match rating
        const ratingList = comics
            .filter((comic) => {
                return comic.rating === ratingAnswer;
            })
            .map((comic) => {
                return comic;
            });
        console.log(ratingList);
        
        // Get title that is chosen most number of times
        //if tie occurs choose random title of tied titles
        // Concatanate returned arrays from each question to create list of possible answers
        const answerList = genreList.concat(romanceList, moodList, emojiList, drinkList, ratingList);
        console.log(answerList);
        
        //Get number of times each title occurs
        const resultsShortlist = _.countBy(answerList, 'title');
        
        //iterate over resultsShortlist array and get title with highest value
        const finalResult = _.max(Object.keys(resultsShortlist), function (title) { 
            return resultsShortlist[title];
        });

        // Return the result as the comic object for appending data
        const answerObject = comics.map((comic) => {
            if comic.title === finalResult {
                return comic;
            }
        });

        console.log(answerObject);

        
        // finalResult.push(resultsShortlist);
        console.log(resultsShortlist);
        console.log(finalResult);
        
        $('.result-container').append(`Your result is ${answerObject.title} by `)
    //   x

    }); //Form submit end
}); //Document Ready End



