
  document.getElementById("delivery").addEventListener("click", function () { 
    prompt("enter your address");
    alert("thank you for using our services,your order willbe delivered at your place");
    
  })
  function Pizza(type,size,crust,topping,numbers, totalPrice) {
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.topping= topping;
    this.numbers=numbers
    this.totalPrice=totalPrice;
    this.orders = [];
  }
  /*function Pizzas(type1, size1, crust1,topping1) {
    this.type1 = type1;
    this.size1 = size1;
    this.crust1 = crust1;
    this.topping1 = topping1;
  }*/
  Pizza.prototype.fullOrder = function() {
    return this.type+ " " + this.size + " " + this.crust + " " +this.topping+ " "+this. totalPrice;
  }
  
  /*Pizza.prototype.fullOrders = function() {
    return this.type1+ " " +this.size1+ " " +this.crust1+ " " +this.topping1;
  }*/

$(document).ready(function() {
    
   /* $("#add-order").click(function() {
      $("#new-order").append('<div class="new-order">' + ' <div class="container-fluid bg-light py-3">'+ ' <div class="row">' + ' <div class="col-md-6 mx-auto">'+ '<div class="card card-body">'+
                                   
                                     '<label for="sel1">select the pizza type:</label>' +
                                     ' <select class="form-control" id="sel1">'+
                                     '<option>Pepperoni</option>' +
                                    '<option>Margherita</option>' +
                                     '<option>Hawai</option>' +
                                     '<option>4season</option>' +
                                     '<option>vegeterian</option>' +
                                   '</select>' +
                                 
                                   
                                     '<label for="sel1">select the pizza size:</label>' +
                                     '<select class="form-control" id="sel2">' +
                                     '<option>Large</option>' +
                                     '<option>Medium</option>' +
                                     '<option>Small</option>' +
                                    
                                   '</select>' +
                                 
                                   '<label for="sel1">select the pizza crust:</label>' +
                                 '<select class="form-control" id="sel3">' +
                                '<option>Thin Crust</option>'+
                                '<option>Thick Crust</option>' +
                                '<option>Deep Crust</option>' +
                                '<option>Crunchy Crust</option>' +
                                '<option>No gluten Crust</option>' +
                              '</select>' +
                                
                                     '<label for="sel1">select the topping:</label>' +
                                     '<select class="form-control" id="sel4">' +
                                      '<option>Pepperoni</option>' +
                                      '<option>Mushrooms</option>' +
                                      '<option>Sausage</option>'+
                                      '<option>Extra cheese</option>'+
                                      '<option>Black olives</option>' +
                                    '</select>' +
                                     '</div>' +
                                     '</div>' +
                                     '</div>' + 
                                 '</div>');
    });
  
 
   /*$("#order,.order").click(function() {
      $("#order").toggle();

      $(".order").toggle();
    });*/
  
   
  
    $("form#orderz").submit(function(event) {
      event.preventDefault();
  
      var typeA = $("select#sel1").val();
      var sizeB = $("select#sel2").val();
      var crustC = $("select#sel3").val();
      var toppingD =$("select#sel4").val();
      var numberz = $("input#sel5").val();
     

      var newPizza = new Pizza(typeA,sizeB,crustC,toppingD,numberz,total);
  console.log(newPizza);
  
     /*$(".new-order").each(function() {
        var type1 = $(this).find("select#sel1").val();
        var size1 = $(this).find("select#sel2").val();
        var crust1 = $(this).find("select#sel3").val();
        var topping1 = $(this).find("select#sel4").val();
        var newpizzas = new pizzas(type1,size1,crust1,topping1);
        newpizza.pizzas.push(newpizzas)
      });*/
      /*$("ul#contacts").append("<li><span class='contact'>" + newPizza.type+ "</span></li>");*/
    
      $(".btn").last().click(function() {
        $("#show-contact").show();
        $("#show-contact h2").text(newPizza.type);
        $(".type").text(newPizza.type);
        $(".size").text(newPizza.size);
        $(".crust").text(newPizza.crust);
        $(".topping").text(newPizza.topping);
        $(".numbers").text(newPizza.numbers);
        $(".totalPrice").text(newPizza.totalPrice);

        $("ul#addresses").text("");
        //newPizza.orders.forEach(function(address) {
         // $("ul#addresses").append("<li>" + address.fullOrder() + "</li>");
       // });
      });
    });
      $(".btn").click(function() {
        var typec = $("select#sel1").val();
      var sized = $("select#sel2").val();
      var cruste = $("select#sel3").val();
      var toppingd =$("select#sel4").val();
      var number = $("input#sel5").val();
     
       var price, totalPrice;
       switch (typec) {
           case type = "Pepperoni":
               switch (sized) {
                   case size = "Small":
                       price = 3500;
                       if (cruste === "Thin Crust") {
                           total = (price * number) +1000;
                       } else if (cruste === "Thin Crust") {
                           total = (price * number)+ 2000;
                       } else if (cruste === "Deep Crust") {
                           total = (price * number)+ 2500;
                       }else if (cruste === "Crunchy Crust") {
                         total = (price * number)+ 1500; 
                       }else {
                           total = (price * number) + 5000;
                       }
                       break;
                   case size = "Medium":
                       price = 5000;
                       if (cruste === "Thin Crust") {
                        total = (price * number) +1000;
                    } else if (cruste === "Thin Crust") {
                        total = (price * number)+ 2000;
                    } else if (cruste === "Deep Crust") {
                        total = (price * number)+ 2500;
                    }else if (cruste === "Crunchy Crust") {
                      total = (price * number)+ 1500; 
                    }else {
                        total = (price * number) + 5000;
                    }
                     break;
                   case size = "Large":
                       price = 7000;
                       if (cruste === "Thin Crust") {
                        total = (price * number) +1000;
                    } else if (cruste === "Thin Crust") {
                        total = (price * number)+ 2000;
                    } else if (cruste === "Deep Crust") {
                        total = (price * number)+ 2500;
                    }else if (cruste === "Crunchy Crust") {
                      total = (price * number)+ 1500; 
                    }else {
                        total = (price * number) + 5000;
                    }
                    break;
               }
               break;
               case type = "Margherita":
               switch (sized) {
                case size = "Small":
                    price = 3500;
                    if (cruste === "Thin Crust") {
                        total = (price * number) +1000;
                    } else if (cruste === "Thin Crust") {
                        total = (price * number)+ 2000;
                    } else if (cruste === "Deep Crust") {
                        total = (price * number)+ 2500;
                    }else if (cruste === "Crunchy Crust") {
                      total = (price * number)+ 1500; 
                    }else {
                        total = (price * number) + 5000;
                    }
                    break;
                case size = "Medium":
                    price = 5000;
                    if (cruste === "Thin Crust") {
                        total = (price * number) +1000;
                    } else if (cruste === "Thin Crust") {
                        total = (price * number)+ 2000;
                    } else if (cruste === "Deep Crust") {
                        total = (price * number)+ 2500;
                    }else if (cruste === "Crunchy Crust") {
                      total = (price * number)+ 1500; 
                    }else {
                        total = (price * number) + 5000;
                    }
                    break;
                 
                case size = "Large":
                    price = 7000;
                    if (cruste === "Thin Crust") {
                        total = (price * number) +1000;
                    } else if (cruste === "Thin Crust") {
                        total = (price * number)+ 2000;
                    } else if (cruste === "Deep Crust") {
                        total = (price * number)+ 2500;
                    }else if (cruste === "Crunchy Crust") {
                      total = (price * number)+ 1500; 
                    }else {
                        total = (price * number) + 5000;
                    }
                    break;
            }
            break;
            case type = "Hawai":
            switch (sized) {
             case size = "Small":
                 price = 3500;
                 if (cruste === "Thin Crust") {
                    total = (price * number) +1000;
                } else if (cruste === "Thin Crust") {
                    total = (price * number)+ 2000;
                } else if (cruste === "Deep Crust") {
                    total = (price * number)+ 2500;
                }else if (cruste === "Crunchy Crust") {
                  total = (price * number)+ 1500; 
                }else {
                    total = (price * number) + 5000;
                }
                break;
             case size = "Medium":
                 price = 5000;
                 if (cruste === "Thin Crust") {
                    total = (price * number) +1000;
                } else if (cruste === "Thin Crust") {
                    total = (price * number)+ 2000;
                } else if (cruste === "Deep Crust") {
                    total = (price * number)+ 2500;
                }else if (cruste === "Crunchy Crust") {
                  total = (price * number)+ 1500; 
                }else {
                    total = (price * number) + 5000;
                }
                break;
             case size = "Large":
                 price = 7000;
                 if (cruste === "Thin Crust") {
                    total = (price * number) +1000;
                } else if (cruste === "Thin Crust") {
                    total = (price * number)+ 2000;
                } else if (cruste === "Deep Crust") {
                    total = (price * number)+ 2500;
                }else if (cruste === "Crunchy Crust") {
                  total = (price * number)+ 1500; 
                }else {
                    total = (price * number) + 5000;
                }
                break;
         }
         break;
         case type = "4season":
         switch (sized) {
          case size = "Small":
              price = 3500;
              if (cruste === "Thin Crust") {
                total = (price * number) +1000;
            } else if (cruste === "Thin Crust") {
                total = (price * number)+ 2000;
            } else if (cruste === "Deep Crust") {
                total = (price * number)+ 2500;
            }else if (cruste === "Crunchy Crust") {
              total = (price * number)+ 1500; 
            }else {
                total = (price * number) + 5000;
            }
            break;
          case size = "Medium":
              price = 5000;
              if (cruste === "Thin Crust") {
                total = (price * number) +1000;
            } else if (cruste === "Thin Crust") {
                total = (price * number)+ 2000;
            } else if (cruste === "Deep Crust") {
                total = (price * number)+ 2500;
            }else if (cruste === "Crunchy Crust") {
              total = (price * number)+ 1500; 
            }else {
                total = (price * number) + 5000;
            }
            break;
          case size = "Large":
              price = 7000;
              if (cruste === "Thin Crust") {
                total = (price * number) +1000;
            } else if (cruste === "Thin Crust") {
                total = (price * number)+ 2000;
            } else if (cruste === "Deep Crust") {
                total = (price * number)+ 2500;
            }else if (cruste === "Crunchy Crust") {
              total = (price * number)+ 1500; 
            }else {
                total = (price * number) + 5000;
            }
            break;
      }
      break;
      case type = "vegeterian":
         switch (sized) {
          case size = "Small":
              price = 3500;
              if (cruste === "Thin Crust") {
                total = (price * number) +1000;
            } else if (cruste === "Thin Crust") {
                total = (price * number)+ 2000;
            } else if (cruste === "Deep Crust") {
                total = (price * number)+ 2500;
            }else if (cruste === "Crunchy Crust") {
              total = (price * number)+ 1500; 
            }else {
                total = (price * number) + 5000;
            }
            break;
          case size = "Medium":
              price = 5000;
              if (cruste === "Thin Crust") {
                total = (price * number) +1000;
            } else if (cruste === "Thin Crust") {
                total = (price * number)+ 2000;
            } else if (cruste === "Deep Crust") {
                total = (price * number)+ 2500;
            }else if (cruste === "Crunchy Crust") {
              total = (price * number)+ 1500; 
            }else {
                total = (price * number) + 5000;
            }
            break;
          case size = "Large":
              price = 7000;
              if (cruste === "Thin Crust") {
                total = (price * number) +1000;
            } else if (cruste === "Thin Crust") {
                total = (price * number)+ 2000;
            } else if (cruste === "Deep Crust") {
                total = (price * number)+ 2500;
            }else if (cruste === "Crunchy Crust") {
              total = (price * number)+ 1500; 
            }else {
                total = (price * number) + 5000;
            }
            break;
      }
      break;
             }
             switch (toppingd) {
              case topping = "Pepperoni":
                  total = total + 1500;
                  break;
              case topping = "Mushrooms":
                  total = total + 500;
                  break;
              case topping = "Sausage":
                  total = total + 1000;
                  break;
              case topping = "Extra cheese":
                  total = total + 1000;
                  break;
              case topping = "Black olives":
                  total = total + 1500;
                  break;
                }

             console.log(total);
            })
      
  
    
    
  });
