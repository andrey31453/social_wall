<script setup lang="ts">
import {
  app_body,
  app_footer,
  app_header,
  app_record,
  choise_user,
  the_news,
  app_wrapper,
} from '@widgets'

// users

import { use_users } from '@features'
use_users()
</script>

<template>
  <app_wrapper>
    <!-- header -->
    <app_header>
      <choise_user />
    </app_header>
    <!-- /header -->

    <!-- body -->
    <app_body>
      <the_news />
    </app_body>
    <!-- /body -->

    <!-- footer -->
    <app_footer>
      <app_record />
    </app_footer>
    <!-- /footer -->
  </app_wrapper>
</template>
