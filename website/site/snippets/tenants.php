<?php $floors = array(
  'main'   => page('tenants')->children()->visible()->filterBy('floor', 'main'),
  'second' => page('tenants')->children()->visible()->filterBy('floor', 'second'),
  'third'  => page('tenants')->children()->visible()->filterBy('floor', 'third'),
  'fourth' => page('tenants')->children()->visible()->filterBy('floor', 'fourth'),
  'fifth'  => page('tenants')->children()->visible()->filterBy('floor', 'fifth'),
  'sixth'  => page('tenants')->children()->visible()->filterBy('floor', 'sixth')
); ?>

<?php foreach($floors as $floor => $tenants): ?>

  <h2><?php echo($floor) ?> Floor</h2>

  <section class="tenants__grid">
    <?php foreach($tenants as $tenant) : ?>
      <article class="tenant">
        <p class="tenant__title"><?php echo $tenant->name() ?></p>
        <p class="tenant__desc"><?php echo $tenant->description() ?></p>
        <div class="tenant__meta">
          <?php echo $tenant->location() ?><br>

          <?php if($site->user()): ?>
            <br>
            <span class="tenant__contact__title">External Contacts:</span><br>
          <?php endif ?>

          <?php echo $tenant->publicphone() ?><br>
          <a href="mailto:<?php echo $tenant->publicemail() ?>">
            <?php echo $tenant->publicemail() ?>
          </a>

          <!-- Extra info for tenants only -->
          <?php if($site->user()): ?>
            <br>
            <br>
            <strong>Internal Contacts:</strong><br>
            <?php echo $tenant->privatephone() ?><br>
            <a href="mailto:<?php echo $tenant->privateemail() ?>">
              <?php echo $tenant->privateemail() ?>
            </a>
          <?php endif ?>
        </div>
      </article>
    <?php endforeach; ?>
    <?php if(! $tenants->count()): ?>
      <p class="feature-wrap no-tenants">
        There are currently no tenants on the <?php echo $floor ?> floor.
      </p>
    <?php endif ?>
  </section>

<?php endforeach ?>
