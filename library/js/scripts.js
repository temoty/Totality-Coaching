/*
 * Bones Scripts File
 * Author: Eddie Machado
 *
 * This file should contain any js scripts you want to add to the site.
 * Instead of calling it in the header or throwing it inside wp_head()
 * this file will be called automatically in the footer so as not to
 * slow the page load.
 *
 * There are a lot of example functions and tools in here. If you don't
 * need any of it, just remove it. They are meant to be helpers and are
 * not required. It's your world baby, you can do whatever you want.
 */


/*
 * Get Viewport Dimensions
 * returns object with viewport dimensions to match css in width and height properties
 * ( source: http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript )
 */
function updateViewportDimensions() {
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight || e.clientHeight || g.clientHeight;
    return { width: x, height: y };
}
// setting the viewport width
var viewport = updateViewportDimensions();


/*
 * Throttle Resize-triggered Events
 * Wrap your actions in this function to throttle the frequency of firing them off, for better performance, esp. on mobile.
 * ( source: http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed )
 */
var waitForFinalEvent = (function() {
    var timers = {};
    return function(callback, ms, uniqueId) {
        if (!uniqueId) { uniqueId = "Don't call this twice without a uniqueId"; }
        if (timers[uniqueId]) { clearTimeout(timers[uniqueId]); }
        timers[uniqueId] = setTimeout(callback, ms);
    };
})();

// how long to wait before deciding the resize has stopped, in ms. Around 50-100 should work ok.
var timeToWaitForLast = 100;


/*
 * Here's an example so you can see how we're using the above function
 *
 * This is commented out so it won't work, but you can copy it and
 * remove the comments.
 *
 *
 *
 * If we want to only do it on a certain page, we can setup checks so we do it
 * as efficient as possible.
 *
 * if( typeof is_home === "undefined" ) var is_home = $('body').hasClass('home');
 *
 * This once checks to see if you're on the home page based on the body class
 * We can then use that check to perform actions on the home page only
 *
 * When the window is resized, we perform this function
 * $(window).resize(function () {
 *
 *    // if we're on the home page, we wait the set amount (in function above) then fire the function
 *    if( is_home ) { waitForFinalEvent( function() {
 *
 *	// update the viewport, in case the window size has changed
 *	viewport = updateViewportDimensions();
 *
 *      // if we're above or equal to 768 fire this off
 *      if( viewport.width >= 768 ) {
 *        console.log('On home page and window sized to 768 width or more.');
 *      } else {
 *        // otherwise, let's do this instead
 *        console.log('Not on home page, or window sized to less than 768.');
 *      }
 *
 *    }, timeToWaitForLast, "your-function-identifier-string"); }
 * });
 *
 * Pretty cool huh? You can create functions like this to conditionally load
 * content and other stuff dependent on the viewport.
 * Remember that mobile devices and javascript aren't the best of friends.
 * Keep it light and always make sure the larger viewports are doing the heavy lifting.
 *
 */

/*
 * We're going to swap out the gravatars.
 * In the functions.php file, you can see we're not loading the gravatar
 * images on mobile to save bandwidth. Once we hit an acceptable viewport
 * then we can swap out those images since they are located in a data attribute.
 */
function loadGravatars() {
    // set the viewport using the function above
    viewport = updateViewportDimensions();
    // if the viewport is tablet or larger, we load in the gravatars
    if (viewport.width >= 768) {
        jQuery('.comment img[data-gravatar]').each(function() {
            jQuery(this).attr('src', jQuery(this).attr('data-gravatar'));
        });
    }
} // end function


/*
 * Put all your regular jQuery in here.
 */
jQuery(document).ready(function($) {

    /*
     * Let's fire off the gravatar function
     * You can remove this if you don't need it
     */
    loadGravatars();


});



/* Below is the JS code for the Hamburger mobile menu code */

// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
var topNav = document.querySelector(".top-nav");
// On click
hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    topNav.classList.toggle("hidden-sm");
    // Do something else, like open/close menu
});

/* End of Hamburger mobile menu code */

/* Code for Vue.js Quiz App */

var app = new Vue({
    el: '#app',
    data: {
        questionCounter: 0,
        quizScore: 0,
        finalQuizScore: 0,
        urls: 'https://npr.org',
        styleObj: {
            color: 'blue'
        },
        viewnextpagebutton: true,
        viewlastbutton: false,
        questionSets: [{
                questionText: 'What time do you wake up in the morning?',
                questionChoices: [{
                        answerr: '5:00 AM',
                        letter: 'a',
                        score: 5
                    },
                    {
                        answerr: '6:00 AM',
                        letter: 'b',
                        score: 4
                    },
                    {
                        answerr: '7:00 AM',
                        letter: 'c',
                        score: 3
                    },
                    {
                        answerr: '8:00 AM or after',
                        letter: 'd',
                        score: 2
                    }
                ]
            },
            {
                questionText: 'Do you track the time it takes you to complete daily work tasks?',
                questionChoices: [{
                        answerr: 'Yes',
                        letter: 'a',
                        score: 5
                    },
                    {
                        answerr: 'No',
                        letter: 'b',
                        score: 1
                    }
                ]
            },
            {
                questionText: 'What time do you normally start your first work task?',
                questionChoices: [{
                        answerr: '5:00 AM',
                        letter: 'a',
                        score: 5
                    },
                    {
                        answerr: '6:00 AM',
                        letter: 'b',
                        score: 4
                    },
                    {
                        answerr: '7:00 AM',
                        letter: 'c',
                        score: 3
                    },
                    {
                        answerr: '8:00 AM or after',
                        letter: 'd',
                        score: 2
                    }
                ]
            },
            {
                questionText: 'Do you routinely write down your work tasks for the next day?',
                questionChoices: [{
                        answerr: 'Yes',
                        letter: 'a',
                        score: 5
                    },
                    {
                        answerr: 'No',
                        letter: 'b',
                        score: 1
                    }
                ]
            },
            {
                questionText: 'Do you exercise before work?',
                questionChoices: [{
                        answerr: 'Yes',
                        letter: 'a',
                        score: 5
                    },
                    {
                        answerr: 'No',
                        letter: 'b',
                        score: 1
                    }
                ]
            },
            {
                questionText: 'Is your mobile phone normally out of sight and silenced during a work task?',
                questionChoices: [{
                        answerr: 'Yes',
                        letter: 'a',
                        score: 5
                    },
                    {
                        answerr: 'No',
                        letter: 'b',
                        score: 1
                    }
                ]
            },
            {
                questionText: 'How many times per day do you check email?',
                questionChoices: [{
                        answerr: 'Once or less',
                        letter: 'a',
                        score: 5
                    },
                    {
                        answerr: 'Twice',
                        letter: 'b',
                        score: 4
                    },
                    {
                        answerr: 'Three',
                        letter: 'b',
                        score: 3
                    },
                    {
                        answerr: 'Four or more',
                        letter: 'b',
                        score: 2
                    }
                ]
            },
            {
                questionText: 'Do you normally take a walk or do any other aerobic workout at lunch or a work break?',
                questionChoices: [{
                        answerr: 'Yes',
                        letter: 'a',
                        score: 5
                    },
                    {
                        answerr: 'No',
                        letter: 'b',
                        score: 1
                    }
                ]
            },
            {
                questionText: 'How would most people view your desk and workspace?',
                questionChoices: [{
                        answerr: 'Very organized and clutter free.',
                        letter: 'a',
                        score: 5
                    },
                    {
                        answerr: 'Mostly clutter free.',
                        letter: 'b',
                        score: 4
                    },
                    {
                        answerr: 'Mostly cluttered.',
                        letter: 'c',
                        score: 3
                    },
                    {
                        answerr: 'A disaster zone.',
                        letter: 'd',
                        score: 1
                    }
                ]
            },
            {
                questionText: 'How long is your daily task list?',
                questionChoices: [{
                        answerr: '3 items or less.',
                        letter: 'a',
                        score: 5
                    },
                    {
                        answerr: '5 items or less.',
                        letter: 'b',
                        score: 4
                    },
                    {
                        answerr: '7 items or less.',
                        letter: 'c',
                        score: 3
                    },
                    {
                        answerr: 'I do not usually have a task list.',
                        letter: 'd',
                        score: 1
                    }
                ]
            },
            {
                questionText: 'Which work task do you start at the beginning of your day?',
                questionChoices: [{
                        answerr: 'A small task I can complete quickly.',
                        letter: 'a',
                        score: 3
                    },
                    {
                        answerr: 'I normally start working on something I am enthused about.',
                        letter: 'b',
                        score: 4
                    },
                    {
                        answerr: 'I start working on my most difficult task.',
                        letter: 'c',
                        score: 5
                    },
                    {
                        answerr: 'I usually try to complete something new that has just appeared today.',
                        letter: 'd',
                        score: 2
                    }
                ]
            },
            {
                questionText: 'Have you designed your workspace to be beautiful(ex: plants, favorite colors, paintings, etc.)?',
                questionChoices: [{
                        answerr: 'Yes',
                        letter: 'a',
                        score: 5
                    },
                    {
                        answerr: 'No',
                        letter: 'b',
                        score: 2
                    }
                ]
            },
            {
                questionText: 'Do you normally complete a work task immediately upon waking up?',
                questionChoices: [{
                        answerr: 'Yes',
                        letter: 'a',
                        score: 5
                    },
                    {
                        answerr: 'No',
                        letter: 'b',
                        score: 2
                    }
                ]
            },
            {
                questionText: 'Do you spend time in meditation or prayer in the morning?',
                questionChoices: [{
                        answerr: 'Yes',
                        letter: 'a',
                        score: 5
                    },
                    {
                        answerr: 'No',
                        letter: 'b',
                        score: 1
                    }
                ]
            },
            {
                questionText: 'How often do you review your major goals?',
                questionChoices: [{
                        answerr: 'Every day',
                        letter: 'a',
                        score: 5
                    },
                    {
                        answerr: 'Once per week',
                        letter: 'b',
                        score: 4
                    },
                    {
                        answerr: 'Once per month',
                        letter: 'c',
                        score: 3
                    },
                    {
                        answerr: 'Every 6 months or longer.',
                        letter: 'd',
                        score: 2
                    }
                ]
            },
            {
                questionText: 'How many hours of TV(Netflix, etc.) do you watch per day?',
                questionChoices: [{
                        answerr: 'None',
                        letter: 'a',
                        score: 5
                    },
                    {
                        answerr: '30 minutes',
                        letter: 'b',
                        score: 4
                    },
                    {
                        answerr: '1 hour',
                        letter: 'c',
                        score: 3
                    },
                    {
                        answerr: 'Over 1 hour per day.',
                        letter: 'd',
                        score: 1
                    }
                ]
            },
            {
                questionText: 'When driving or commuting, what do you normally listen to?',
                questionChoices: [{
                        answerr: 'Educational content related to my goals.',
                        letter: 'a',
                        score: 5
                    },
                    {
                        answerr: 'The news.',
                        letter: 'd',
                        score: 2
                    },
                    {
                        answerr: 'Nothing, I use this time to relax.',
                        letter: 'b',
                        score: 4
                    },
                    {
                        answerr: 'Enjoyable music.',
                        letter: 'c',
                        score: 3
                    }

                ]
            },
            {
                questionText: 'Do you schedule feedback sessions with your supervisor or colleagues about your work progress?',
                questionChoices: [{
                        answerr: 'Yes',
                        letter: 'a',
                        score: 5
                    },
                    {
                        answerr: 'No',
                        letter: 'b',
                        score: 1
                    }
                ]
            },
            {
                questionText: 'Sometimes family time needs to be sacrificed to be more productive at work.',
                questionChoices: [{
                        answerr: 'Yes, this is unfortunately True.',
                        letter: 'a',
                        score: 2
                    },
                    {
                        answerr: 'This is False. I should not have to sacrifice family time.',
                        letter: 'b',
                        score: 5
                    }
                ]
            },
            {
                questionText: 'I am mostly satisfied with my level of productivity thus far in my life.',
                questionChoices: [{
                        answerr: 'Yes, I am mostly satisfied.',
                        letter: 'a',
                        score: 5
                    },
                    {
                        answerr: 'No, I am not satisfied.',
                        letter: 'b',
                        score: 1
                    }
                ]
            }
        ]
    },
    template: `
    <div class="quizApp" ref="qApp">
          <form ref="formm" v-on:submit.prevent>
         <p>Question {{this.questionCounter + 1}} out of 20</p>

            <h2 class="quizApp__h2QuestionHeading" ref="qHeading">{{ questionHeading }}</h2>
            
            <div class="quizApp__questions" v-for="choices in questionChoi">
                <ul class="quizApp__list">
                    <li class="quizApp__choices">
                    <input type="radio" v-bind:id="choices.letter" name="choice" class="quizApp__input" ref="radioinput" v-bind:value="choices.score">
                    <label v-bind:for="choices.letter" class="quizApp__label">{{ choices.answerr }} </label>
                    </li>
                </ul>
            </div>
            <button type="submit" class="quizApp__button" v-show="viewnextpagebutton" v-bind:style="styleObj" v-on:click="nextPage();lastPage();">Next Question</button>
            <button type="submit" class="quizApp__button" v-show="viewlastbutton" v-bind:style="styleObj" v-on:click="submitQuiz();finalScreen();">Submit Quiz</button>
          </form>
            </div>
    `,


    computed: {
        questionHeading: function() {

            return this.questionSets[this.questionCounter].questionText;

        },
        questionChoi: function() {
            return this.questionSets[this.questionCounter].questionChoices;
        }
    },
    methods: {
        nextPage: function() {
            let radios = this.$refs.radioinput;
            let radiosChecked = radios.filter(item => item.checked);

            if (radiosChecked.length >= 1) {
                for (var i = 0; i < radios.length; i++) {
                    if (radios[i].type === 'radio' && radios[i].checked) {
                        this.quizScore += parseInt(radios[i].value, 10);
                    }
                }
                this.questionCounter++;
                app.$refs.qApp.classList.remove('quizApp');

                function addIt() {
                    app.$refs.qApp.classList.add('quizApp');
                }
                setTimeout(addIt, 10);
            }
            this.$refs.formm.reset();

        },
        lastPage: function() {
            if (this.$refs.qHeading.innerHTML == this.questionSets[this.questionSets.length - 2].questionText) {
                this.viewlastbutton = true;
                this.viewnextpagebutton = false;
            }
        },
        submitQuiz: function() {
            let radios = this.$refs.radioinput;
            for (var i = 0; i < radios.length; i++) {
                if (radios[i].type === 'radio' && radios[i].checked) {
                    this.quizScore += parseInt(radios[i].value, 10);

                }
            }
            this.finalQuizScore = this.quizScore;

        },
        finalScreen: function() {
            document.querySelector('.quizApp').innerHTML = '';
            let divv = document.createElement('H2');
            document.querySelector('.quizApp').appendChild(divv);

            if (this.quizScore <= 25 && this.finalQuizScore !== 0) {
                var finMessage = `You scored ${this.finalQuizScore} out of 100. Compared to others taking this quiz, your productivity is far below average. <a href="https://totalitycoaching.com/how-to-become-more-productive-in-the-morning/">Click Here</a> to immediately increase your productivity`;
            } else if (this.quizScore > 25 && this.quizScore < 50 && this.finalQuizScore !== 0) {
                var finMessage = `You scored ${this.finalQuizScore} out of 100. Compared to others taking this quiz, your productivity is a little below average. <a href="https://totalitycoaching.com/how-to-become-more-productive-in-the-morning/">Click Here</a> to immediately increase your productivity.`;
            } else
            if (this.quizScore >= 50 && this.quizScore < 75 && this.finalQuizScore !== 0) {
                var finMessage = `You scored ${this.quizScore} out of 100. Good news, your productivity is a little higher than most people taking this quiz. <a href="https://totalitycoaching.com/how-to-become-more-productive-in-the-morning/">Click Here</a> to immediately increase your productivity.`;
            } else {
                var finMessage = `You scored ${this.quizScore} out of 100. Wow, your productivity is much higher than most people taking this quiz. <a href="https://totalitycoaching.com/how-to-become-more-productive-in-the-morning/">Click Here</a> to immediately increase your productivity.`;
            }

            divv.innerHTML = finMessage;

            // Remove and add Class for fadeIn effect.
            app.$refs.qApp.classList.remove('quizApp');

            function addIt() {
                app.$refs.qApp.classList.add('quizApp');
            }
            setTimeout(addIt, 10);

        }
    }
});


/* End code for Vue.js Quiz */
/* end of as page load scripts */