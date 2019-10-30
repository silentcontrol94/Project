<template>
    <div class="roomContent">
        <h1>Rooms</h1>
        <input type="text" placeholder="Ticket ID" v-model.lazy.trim="searchText" />
        <!-- <div  v-for="room in filteredRooms">{{room}}</div> -->
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <div v-if="searchText" v-for="room in filteredRooms" class="col-12">
                        <div class="card text-white bg-dark mb-3 text-left">
                            <div class="card-header text-center">Room Id : {{ room.id }}</div>
                            <div class="card-body">
                                <p class="card-text">Room Name : {{room.name}}</p>
                                <p class="card-text">Room Floor : {{room.floor}}</p>
                                <p class="card-text">Room Number : {{room.number}}</p>
                            </div>
                        </div>
                     </div>
                </div>
                <div class="col-6">
                    <div v-if="searchText" v-for="room in filteredRooms" class="col-12">
                        <div class="card text-white bg-dark mb-3 text-left">
                            <div class="card-header text-center">Room Devices</div>
                            <div class="card-body">
                                <ul v-for="devices in room.devices" class="card-text">
                                    <li>{{ devices.name }}</li>
                                </ul>
                            </div>
                        </div>
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
            searchText: "",

        }
    },
    computed: {
        ...mapGetters({
            rooms : 'rooms',
        }),
        filteredRooms(){
            if(this.searchText){
              return this.rooms.filter((item)=>{
                return item.ticketID === this.searchText
              })
            }else{
              return this.rooms;
            }
        }
    },
}
</script>

<style scoped>
div.roomContent{
    background-color: #32383e;
    color: white;
    text-align: center;
    margin-top: 5%;
}
div h1{
    padding: 10px 0;
}
div input{
    width: 25%;
    margin: 10px 0;
}
</style>