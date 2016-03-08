<?php snippet('header') ?>

<div class="container">
  <h1><?php echo $page->title()->html() ?></h1>

  <div class="login">

    <?php if($error): ?>
      <div class="alert"><?php echo $page->alert()->html() ?></div>
    <?php endif ?>

    <form method="post" class="form">
      <div class="input-container">
        <label for="username"><?php echo $page->username()->html() ?></label>
        <input type="text" id="username" name="username">
      </div>
      <div class="input-container">
        <label for="password"><?php echo $page->password()->html() ?></label>
        <input type="password" id="password" name="password">
      </div>
      <div class="submit-container">
        <input type="submit" name="login" value="<?php echo $page->button()->html() ?>">
      </div>
    </form>
  </div>
</div>


<?php snippet('footer') ?>
