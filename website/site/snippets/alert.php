<?php if (trim($site->alert_text())): ?>
  <div class="container">
    <?php if ($site->alert_link()): ?>
      <a href="<?php echo $site->alert_link() ?>" class="intro__cta">
        <?php echo $site->alert_text() ?>
      </a>
    <?php endif ?>
  </div>
<?php endif ?>
