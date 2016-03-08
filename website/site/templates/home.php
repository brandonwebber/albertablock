<?php snippet('header') ?>

<?php snippet('intro_menu') ?>

<div class="hero">
  <?php foreach($page->images() as $image): ?>
    <div class="hero-image" style="background-image: url(<?php echo $image->url() ?>);"></div>
  <?php endforeach ?>
</div>

<div class="feature-wrap container">
  <div class="feature__image"></div>
  <div class="feature__content">
    <div class="feature">
      <h2 class="feature__heading">Alberta Block embodies Edmonton’s spirit and character: it’s independence, creativity, and entrepreneurship</h2>
      <p>Edmonton is also about community. We know good things happen when people come together. This space embraces what it means to work with each other to build something bigger than ourselves.</p>
    </div>
  </div>
</div>

<div class="feature-wrap map">
  <div id="map"></div>
  <div class="map-content">
    <div class="container">
      <h2 class="map-heading">A part of a vibrant neighbourhood.</h2>
      <div class="map-features">
        <div class="map__feature"><p>Downtown’s best restaurants, coffee shops, and green spaces are just steps away.</p></div>
        <div class="map__feature"><p>New residential developments are bringing an all-day vibrancy back to Jasper Ave.</p></div>
        <div class="map__feature"><p>Light-rail transit is expanding, making more of downtown  accessible via car-free travel.</p></div>
      </div>
    </div>
  </div>
</div>

<div class="outro-wrap">
  <div class="outro__content container">
    <div class="outro">
      <h2 class="outro__heading">This place has always been a host to independent people: the radicals and mavericks who create their own brand of success.</h2>
      <div class="break"></div>
    </div>
    <div class="outro__image">
      <img src="assets/img/building-cross-section.svg" alt="">
    </div>
    <div class="outro last">
      <p>For over 100 years, Alberta Block has been home to entrepreneurs and innovators. From seamstresses to lawyers to music teachers and cigar makers, independent businesses have sought out the Block. The longest running tenant was CKUA Radio; for over five decades, this community-supported Alberta radio station called Alberta Block home.</p>
    </div>
  </div>
</div>

<?php snippet('footer') ?>
