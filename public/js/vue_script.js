var socket = io();

var vm = new Vue({
    el: '#menuBurger',
    data: {
        burgers: food,
        chosen: [],
        name: "",
        email: "",
        payment: "",
        picked: "",
        orderlist: "",
        orders: {},
        details:{},
        oID: 0
      },
      created: function () {
        socket.on('initialize', function (data) {
        this.oID = (Object.keys(data.orders).length);
        }.bind(this));
        console.log(this.oID);
    },
      methods: {
          markDone: function () {
              this.orderlist = "Your order: " + this.chosen + "; " + this.name + " " + this.email + " " + this.payment + " " + this.picked
          },

          getNext: function () {
            this.oID=this.oID+1;
            console.log(this.oID);
            return this.oID
          },

          displayOrder: function (event) {
            var offset = {x: event.currentTarget.getBoundingClientRect().left,
                          y: event.currentTarget.getBoundingClientRect().top};
                                     this.details= { x: event.clientX - 10 - offset.x,
                                                     y: event.clientY - 10 - offset.y };
          },
          addOrder: function (event) {
            document.getElementById("orders").style.display = "block";
            socket.emit("addOrder", { orderId: this.getNext(),
              details: this.details,
              orderItems: this.chosen,
              orderName: this.name,
              orderMail: this.email,
              orderPayment: this.payment,
              orderGender: this.picked
                                    });
          }
      }
  });
