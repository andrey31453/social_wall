<script setup lang="ts">
import {
  app_body,
  app_footer,
  app_header,
  app_record,
  app_user,
  app_messages,
  app_wrapper,
  app_new_messages,
} from '@widgets'

import { the_wrapper } from '@ui'

// users

import { use_user } from '@features'
use_user()

// messages

import { use_message } from '@features'
use_message()
</script>

<template>
  <app_wrapper>
    <!-- header -->
    <app_header>
      <app_user />
    </app_header>
    <!-- /header -->

    <!-- body -->
    <app_body>
      <the_wrapper column>
        <app_new_messages />
        <app_messages />
      </the_wrapper>
    </app_body>
    <!-- /body -->

    <!-- footer -->
    <app_footer>
      <app_record />
    </app_footer>
    <!-- /footer -->
  </app_wrapper>
</template>
