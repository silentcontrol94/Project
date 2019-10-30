<template>
    <div>
    <div class="row my-4">
      <div class="col-12">
        <div class="col-6 col-md-3" id="ticketContent" v-for="ticket in tickets" @click="getTicketInformations(ticket)">
          <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
            <div class="card-header text-center">Ticket : {{ ticket.ticketID }}</div>
              <div class="card-body">
                <p class="card-text">Ticket Number : {{ticket.ticketNumber}}</p>
                <p class="card-text">Start Date : {{ticket.startDate}}</p>
                <p class="card-text">Expire Date : {{ticket.expireDate}}</p>
                <p class="card-text">Hours : {{ ticket.hours }} </p>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6 col-md-4">
        <div class="col-12" id="ticketContent" v-for="ticket in tickets" @click="getTicketInformations(ticket)">
            <div class="drpdown">
              <div class="mainTicket">Ticket : {{ ticket.ticketID }}
              </div>
            </div>
        </div>
      </div>
      <div  class="col-6 col-md-8">
        <div v-if="selectedTicket.ticketID">
          <div class="col-12 bg-dark">
            <form class="offset-3 py-3">
            <h1>Change Ticket</h1>
            <div class="form-group">
              <label for="">Ticket Start Date</label>
              <input type="" class="form-control" v-model.lazy="selectedTicket.startDate">
            </div>
            <div class="form-group">
              <label for="">Ticket Expire Date</label>
              <input type="" class="form-control" v-model.lazy="selectedTicket.expireDate">
            </div>
            <div class="form-group">
              <label for="">Ticket Hour</label>
              <input type="" class="form-control" v-model.lazy="selectedTicket.hours">
            </div>
            <button @click.prevent="sendInformation" class="btn btn-success">Send</button>
          </form>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      selectedTicket : {},
    }
  },
    computed: {
      ...mapGetters({
        tickets : 'tickets',
        rooms : 'rooms'
      }),
    },
    methods : {
      getTicketInformations(data){
        this.selectedTicket = data;
        console.log(data)
      },
      sendInformation(){
        console.log(this.selectedTicket)
      }
    },
}
</script>

<style scoped>
#ticketContent {
  float: left;
}
form input{
  max-width: 250px;
}
.mainTicket{
  padding: 10px 10px;
  margin: 5px 0;
  border: 2px solid rgb(202, 202, 202);
  border-radius: 10px 10px;
  text-align: left;
  max-width: 250px;
  transform: translateX(0);
  transition: transform 0.5s;
}
.mainTicket:hover{
  transition: all 0.5 ease-in-out;
  transform: translateX(20%)
}
form h1{
  color: white;
}
form label{
  color: white;
}
</style>
