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
                                
                                <h1>How Productive Are You?</h1>
                                <form id="prodquiz" name="prodquiz">
                                    <p>What time do you wake up?</p>
                                    <input type="radio" id="quizradio" name="question1" value="5 AM">
                                    <label for="quizradio">5 AM</label>
                                    <input type="radio" id="quizradio" name="question1" value="5:30 AM">
                                    <label for="quizradio">5:30 AM</label>


                                    <p>Do you track the time it takes to complete daily tasks?</p>
                                    <input type="radio" id="quizradio" name="question2" value="Yes">
                                    <label for="quizradio">Yes</label>

                                    <input type="radio" id="quizradio" name="question2" value="No">
                                    <label for="quizradio">No</label>

                                    <input id="button" type="button" value="Finish Quiz!" onclick="answer();">
                                </form>

                                <div id="after_quiz">
                                    <p id="reply_quiz">You're done! You can always learn to become more productive!</p>
                                </div>


<div id="app">
  {{ message }}
</div>
<script>
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
</script>



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
