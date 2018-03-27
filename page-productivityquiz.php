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

                                    <div v-for="(value, key) in questionSets[0].questionChoices">
                                    <!-- <template v-for="(value, key) in questionSets[0].questionChoices"> -->

                                    <ul>
                                        <li class="answer-choices">
                                    <!-- <label id="label" for="choice">{{ value }}: {{ key }}</label> -->
                                    <label id="label" for="choice">{{ questionChoi }}</label>

                                    <input type="radio" id="inputchoice" name="choice" value="1">
                                        </li>
                                    </ul>
                                    </div>

                                        <quiz-form></quiz-form>
                                    
                                        <button class="nextquestion" v-bind:style="styleObj" v-on:click="nextPage();score();">Next Question</button>




                                    
                                    <!-- You Chose: {{ yourAnswer }}   -->
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
