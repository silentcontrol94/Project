<template>
    <div class="row">
        <div class="col-12">
            <h4 class="text-center my-4">Users Information</h4>
            <div class="b" v-for="user in users">
                <div id="userContent" class="users card-1 my-1">
                <p>User Name & age : <strong>{{user.name}} & </strong><strong>{{ user.Age }}</strong></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters({
            users : 'users'
        })
    },
}
</script>
<style scoped>
.row .col-12 h4{
    padding: 10px 20px;
    background-color: #32383e;
    color: rgb(255, 255, 255);
    border-radius: 10px 10px;
    font-family: sans-serif;
    font-size: 25px;
}
.users{
    float: left;
    padding: 2px 2px;
    margin : 0 10px;
}
#userContent{
    border: 2px solid rgb(197, 197, 197);
    border-radius: 10px 10px;
}
.card-1 {
    padding: 10px 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    transform: translateY();
}

.card-1:hover {
    transform: translateY(-10%);
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
</style>