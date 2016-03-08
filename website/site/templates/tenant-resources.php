<?php if(! $site->user()) go('login') ?>

<?php snippet('header') ?>

<?php snippet('intro_menu') ?>

<div class="container page">
  <div class="resources__files_resources">
    <h1>Alberta Block Tenant Files &amp; Resource</h1>
    <div class="resources__grid">
      <?php foreach($page->children() as $resource) : ?>
        <div class="resource">
          <p class="resource__title"><?php echo $resource->title() ?></p>
          <p class="resource__desc"><?php echo $resource->description() ?></p>
          <?php if ($resource->file()): ?>
            <a
              class="resource__dl"
              href="<?php echo $resource->file()->url(); ?>">Download -></a>
          <?php endif; ?>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</div>

<div class="container page">
  <div class="resources__files_resources">
    <h1>Property Manager</h1>
    <div class="property_manager__grid">
      <div class="pm_column">
        <h2 class="pm__title"><?php echo $page->property_manager() ?></h2>
        <?php echo $page->pm_contacts()->kirbytext() ?>
      </div>
      <div class="pm_column">
        <h2 class="pm__title">Emergency Contacts</h3>
        <p>
          <?php echo $page->emergency_contacts()->kirbytext() ?>
        </p>
      </div>
    </div>
  </div>
</div>

<div class="container page">
  <div class="content">
    <h2>Info</h2>
    <?php echo $page->info()->kirbytext() ?>
  </div>
</div>

<?php snippet('footer') ?>
