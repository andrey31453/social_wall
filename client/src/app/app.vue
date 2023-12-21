<script setup lang="ts">
// users

import { use_user } from '@features'
use_user()

// messages

import { use_message } from '@features'
use_message()

// components

import {
  app_body,
  app_footer,
  app_header,
  app_messages,
  app_new_messages,
  app_record,
  app_theme,
  app_user,
  app_wrapper,
} from '@widgets'

import { the_wrapper } from '@ui'
</script>

<template>
  <app_wrapper>
    <!-- header -->
    <app_header>
      <template #start>
        <app_theme />
      </template>
      <template #end>
        <app_user />
      </template>
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
