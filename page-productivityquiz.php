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
                                    
                                        <p>What time do you wake up?</p>
                                        <input type="radio" id="one" value="5AM" v-model="YourAnswer">
                                        <label for="one">5 AM</label>
                                        <input type="radio" id="two" value="530AM" v-model="YourAnswer">
                                        <label for="two">5:30 AM</label>
                                        <input type="radio" id="three" value="6AM" v-model="YourAnswer">
                                        <label for="three">6:00</label>
                                    
                                        <input type="radio" id="four" value="630AM" v-model="YourAnswer">
                                        <label for="four">6:30</label>
                                    
                                        <button class="nextquestion" v-on:click="nextPage();">Next Question</button>

                                    
                                    <!-- You Chose: {{ YourAnswer }}   -->
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
