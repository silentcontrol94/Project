import Vue from "vue";
import Vuex from "vuex";

import service from '../../services/service';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        users: [
            {"id":3001,"name":"Alex","Age":"25"},
            {"id":3002,"name":"John","Age":"30"},
            {"id":3003,"name":"Deigo","Age":"45"}
        ],
        users : [
            {"id":3001,"name":"Alex","Age":"25"},
            {"id":3002,"name":"John","Age":"30"},
            {"id":3003,"name":"Deigo","Age":"45"}
        ],
        tickets :[
            {"ticketID":1001,
            "ticketNumber":"2783sA",
            "startDate":"05/10/2018",
            "expireDate":"10/21/2022",
            "hours":"08:00-22:00"},
            {"ticketID":1002,
            "ticketNumber":"8a210j",
            "startDate":"01/03/2018",
            "expireDate":"01/03/2020",
            "hours":"14:00-18:00"},
            {"ticketID":1003,
            "ticketNumber":"L90Np1",
            "startDate":"10/01/2015",
            "expireDate":"10/01/2020",
            "hours":"10:00-20:00"},
            {"ticketID":1004,
            "ticketNumber":"L90Np1",
            "startDate":"05/01/2015",
            "expireDate":"05/01/2016",
            "hours":"15:00-23:00"}],
        rooms :[
            {"id":2001,"ticketID":"1001","name":"Conference Hall","floor":2,"number":100,"devices":
            [{"id":"20011","type":"none","name":"Chair 1"},
            {"id":"20012","type":"none","name":"Chair 2"},
            {"id":"20013","type":"none","name":"Table"},
            {"id":"20013","type":"interactable","name":"TV"},
            {"id":"20014","type":"none","name":"Big Table"}]},
            {"id":2002,"ticketID":"1002","name":"CEO Office","floor":8,"number":510,"devices":
            [{"id":"20021","type":"none","name":"Office Chair Set"},
            {"id":"20022","type":"interactable","name":"Video Projector"},
            {"id":"20023","type":"interactable","name":"TV"},
            {"id":"20024","type":"none","name":"Shredder"},
            {"id":"20025","type":"none","name":"Paperbox"},
            {"id":"20026","type":"interactable","name":"Air Conditioner"}]},
            {"id":2003,"ticketID":"1003","name":"Library","floor":5,"number":315,"devices":
            [{"id":"20031","type":"none","name":"Bookshelf 1"},
            {"id":"20032","type":"none","name":"Bookshelf 2"},
            {"id":"20033","type":"none","name":"Bookshelf 3"},
            {"id":"20034","type":"interactable","name":"Light 1"},
            {"id":"20035","type":"interactable","name":"Light 2"},
            {"id":"20036","type":"interactable","name":"Light 3"},
            {"id":"20037","type":"none","name":"Desk 1"},
            {"id":"20038","type":"none","name":"Desk 2"},
            {"id":"20039","type":"none","name":"Large Table 1"},
            {"id":"200310","type":"none","name":"Large Table 2"}]},
            {"id":2004,"ticketID":"1004","name":"Computer Science Classroom","floor":1,"number":15,"devices":
            [{"id":"20041","type":"none","name":"Computer Desk 1"},
            {"id":"20042","type":"none","name":"Computer Desk 2"},
            {"id":"20043","type":"none","name":"Computer Desk 3"},
            {"id":"20044","type":"interactable","name":"Mac Book Air"},
            {"id":"20045","type":"interactable","name":"Mac Book Pro"},
            {"id":"20046","type":"interactable","name":"Dell System"},
            {"id":"20047","type":"none","name":"Wall Plug 1"},
            {"id":"20048","type":"none","name":"Wall Plug 2"},
            null,
            {"id":"20049","type":"none","name":"Large Center Table"}]}
        ]
    },
    getters : {
        rooms(state){
            return state.rooms
        },
        users(state){
            return state.users
        },
        tickets(state){
            return state.tickets
        }
    },
    mutations : {
    },
    actions:{
        fetchInialData(context){
            return service.fetchInialData().then(json => {
                
            })
        }
    }
});