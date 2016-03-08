<?php snippet('header') ?>

<?php snippet('intro_menu') ?>

  <div class="container page">
    <div class="tenants__inner">
      <!-- <div class="tenants__head">
        <h3>Tenant Directory</h3>
      </div> -->
      <!-- <nav class="tenants__nav">
        <a href="?floor=1"<?php if(kirby()->request()->get('floor', '1') === '1'): ?> class="active"<?php endif ?>>Floor 1</a>
        <a href="?floor=2"<?php if(kirby()->request()->get('floor') === '2'): ?> class="active"<?php endif ?>>Floor 2</a>
        <a href="?floor=3"<?php if(kirby()->request()->get('floor') === '3'): ?> class="active"<?php endif ?>>Floor 3</a>
        <a href="?floor=4"<?php if(kirby()->request()->get('floor') === '4'): ?> class="active"<?php endif ?>>Floor 4</a>
      </nav> -->
      <?php snippet('tenants') ?>
    </div>
  </div>

<?php snippet('footer') ?>
