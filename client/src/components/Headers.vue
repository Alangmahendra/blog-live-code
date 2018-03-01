<template>
   <div class="bawah">
    <b-navbar toggleable="md" type="dark" variant="success">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand class="pointer" @click="toBlog">Blog</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <!-- <b-navbar-nav>
      <b-nav-item href="#">Link</b-nav-item>
      <b-nav-item href="#" disabled>Disabled</b-nav-item>
    </b-navbar-nav> -->

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item @click="toAdmin">Profile</b-dropdown-item>
        <b-dropdown-item @click="signout">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
