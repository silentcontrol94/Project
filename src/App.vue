<template>
  <div class="container">
    <app-users></app-users>
    <app-ticket-information></app-ticket-information>
    <app-rooms></app-rooms>
  </div>
</template>

<script>
import Users from "./components/Users";
import TicketInformation from "./components/TicketsInformation";
import Rooms from "./components/Rooms";
import { mapGetters, mapMutations, dispatch, mapState } from "vuex";
export default {
  components: {
    appUsers: Users,
    appTicketInformation: TicketInformation,
    appRooms: Rooms
  },
};
</script>

<style>
</style>
