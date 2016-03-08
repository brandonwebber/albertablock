  <footer class="footer">
    <div class="container">
      <div class="footer__logo">
        <img src="/assets/img/logo-white.svg" alt="">
      </div>

      <div class="footer__address">
        10526 Jasper Avenue<br />
        Edmonton, AB T5J 1Z7<br />
        <a href="mailto:info@albertablock.com">info@albertablock.com</a>
      </div>

      <div class="footer__nav">
        <div class="menu__footer">
          <?php snippet('menu') ?>
        </div>
      </div>
    </div>
  </footer>
</div>

<?php echo js('assets/js/jquery-2.1.4.min.js') ?>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDCRCGAocujzvEdoSctUwJpiz4T6T2nMiM&amp"></script>
<?php echo js('assets/js/jquery.bxslider.min.js') ?>
<?php echo js('assets/js/app.js') ?>
<?php echo $page->isHomePage() ? js('assets/js/map.js') : '' ?>
</body>
</html>
