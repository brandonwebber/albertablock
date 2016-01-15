<?php snippet('header') ?>

<?php snippet('intro_menu') ?>

  <div class="container page">
    <div class="inquiries">

      <?php if($user = $site->user()): ?>
        <div class="content tenant-text">
          <?php echo $page->tenantText() ?>
        </div>
      <?php else: ?>
        <div class="content anonymous-text">
          <?php echo $page->anonymousText() ?>
        </div>
      <?php endif ?>

    </div>
  </div>

<?php snippet('footer') ?>
