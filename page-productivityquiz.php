<?php
/*
 Template Name: Page Productivity Quiz
 *
 *
 * For more info: http://codex.wordpress.org/Page_Templates
*/
?>



<?php get_header(); ?>

			<div id="content">
                


				<div id="inner-content" class="wrap cf">

						<main id="main" class="m-all t-2of3 d-5of7 cf" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
                                       
							<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                            

							<article id="post-<?php the_ID(); ?>" class="hentry" <?php/* post_class( 'cf' ); */?> role="article" itemscope itemtype="http://schema.org/BlogPosting">

								<header class="article-header">

									<h1 class="page-title" itemprop="headline"><?php the_title(); ?></h1>

									<p class="byline vcard">
										<?php/* printf( __( 'Posted', 'bonestheme').' <time class="updated" datetime="%1$s" itemprop="datePublished">%2$s</time> '.__( 'by',  'bonestheme').' <span class="author">%3$s</span>', get_the_time('Y-m-j'), get_the_time(get_option('date_format')), get_the_author_link( get_the_author_meta( 'ID' ) )); */?>
									</p>

								</header> <?php // end article header ?>

								<section class="entry-content cf" itemprop="articleBody">
                           
                                    <div id="app">
                                    <h1>How Productive Are You?</h1>
                                    <h2 class="q_h1">{{ questionHeading }}</h2>
                                    <!-- Below, we want to start looping through the array of questionSets -->
                                    <!-- <div id="questions" v-for="(answerr, letter) in questionChoi"> -->
                                    <div id="questions" v-for="choices in questionChoi">

                                    <ul class="answer-choices-ul">
                                        <li class="answer-choices">
                                        <!-- Now we start using results from function questionChoi and pass them into our two variables aswerr and letter -->
                                        <input type="radio" v-bind:score="choices.score" v-bind:class="choices.letter" name="choice" v-bind:value="choices.answerr" required>
                                        <label v-bind:class="choices.letter" for="choice">{{ choices.letter }}: {{ choices.answerr }}</label>
                                        </li>
                                    </ul>
                                    </div>
                                        <!-- <quiz-form-button></quiz-form-button> -->
                                        <button class="nextquestion" v-show="viewnextpagebutton" v-bind:style="styleObj" v-on:click="nextPage();lastPage();">Next Question</button>
                                        <button class="nextquestion" v-show="viewlastbutton" v-bind:style="styleObj" v-on:click="submitQuiz();">Hidden Submit Quiz</button>

                                        <!-- v-on:click="this.buttononclick" -->
                         
                                    </div>

								</section> <?php // end article section ?>

								<footer class="article-footer cf">

								</footer>

								<?php comments_template(); ?>

							</article>

							<?php endwhile; endif; ?>

						</main>

						<?php get_sidebar(); ?>

				</div>

			</div>

<?php get_footer(); ?>
