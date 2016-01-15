<?php snippet('header') ?>

<?php snippet('intro_menu') ?>

<div class="container page">
  <div class="content">
    <h2><?php echo $page->title()->html() ?></h2>
    <?php echo $page->text()->kirbytext() ?>
  </div>
</div>

<?php snippet('footer') ?>
