<div class="intro__menu">
  <nav class="menu">
    <ul class="menu-list">

      <li class="menu-item">
        <a href="/tenants" class="menu-link">
          <span>Directory</span>
        </a>
      </li>

      <li class="menu-item">
        <?php if($site->user()): ?>
          <a href="<?php snippet('service-request') ?>" class="menu-link">
            <span>Submit A Service Request</span>
          </a>
        <?php else: ?>
          <a href="<?php snippet('inquiries') ?>" class="menu-link">
            <span>Inquiries</span>
          </a>
        <?php endif ?>
      </li>

      <li class="menu-item">
        <?php if($site->user()): ?>
          <a href="/tenant-resources" class="menu-link">
            <span>Tenant Resources</span>
          </a>
        <?php else: ?>
          <a href="/login" class="menu-link">
            <span>Login</span>
          </a>
        <?php endif ?>
      </li>

    </ul>
  </nav>
</div>
