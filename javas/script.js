
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
  
  Pizza.prototype.fullOrder = function() {
    return this.type+ " " + this.size + " " + this.crust + " " +this.topping+ " "+this. totalPrice;
  }
  
  

$(document).ready(function() {
     $("form#orderz").submit(function(event) {
      event.preventDefault() 
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
                           total = price +1000 ;
                       } else if (cruste === "Thin Crust") {
                           total = price + 2000;
                       } else if (cruste === "Deep Crust") {
                           total = price + 2500;
                       }else if (cruste === "Crunchy Crust") {
                         total = price + 1500; 
                       }else {
                           total = price  + 5000;
                       }
                       break;
                   case size = "Medium":
                       price = 5000;
                       if (cruste === "Thin Crust") {
                        total = price +1000 ;
                    } else if (cruste === "Thin Crust") {
                        total = price + 2000;
                    } else if (cruste === "Deep Crust") {
                        total = price + 2500;
                    }else if (cruste === "Crunchy Crust") {
                      total = price + 1500; 
                    }else {
                        total = price  + 5000;
                    }
                    break;
                   case size = "Large":
                       price = 7000;
                       if (cruste === "Thin Crust") {
                        total = price +1000 ;
                    } else if (cruste === "Thin Crust") {
                        total = price + 2000;
                    } else if (cruste === "Deep Crust") {
                        total = price + 2500;
                    }else if (cruste === "Crunchy Crust") {
                      total = price + 1500; 
                    }else {
                        total = price  + 5000;
                    }
                    break;
               }
               break;
               case type = "Margherita":
               switch (sized) {
                case size = "Small":
                    price = 3500;
                    if (cruste === "Thin Crust") {
                        total = price +1000 ;
                    } else if (cruste === "Thin Crust") {
                        total = price + 2000;
                    } else if (cruste === "Deep Crust") {
                        total = price + 2500;
                    }else if (cruste === "Crunchy Crust") {
                      total = price + 1500; 
                    }else {
                        total = price  + 5000;
                    }
                    break;
                case size = "Medium":
                    price = 5000;
                    if (cruste === "Thin Crust") {
                        total = price +1000 ;
                    } else if (cruste === "Thin Crust") {
                        total = price + 2000;
                    } else if (cruste === "Deep Crust") {
                        total = price + 2500;
                    }else if (cruste === "Crunchy Crust") {
                      total = price + 1500; 
                    }else {
                        total = price  + 5000;
                    }
                    break;
                 
                case size = "Large":
                    price = 7000;
                    if (cruste === "Thin Crust") {
                        total = price +1000 ;
                    } else if (cruste === "Thin Crust") {
                        total = price + 2000;
                    } else if (cruste === "Deep Crust") {
                        total = price + 2500;
                    }else if (cruste === "Crunchy Crust") {
                      total = price + 1500; 
                    }else {
                        total = price  + 5000;
                    }
                    break;
            }
            break;
            case type = "Hawai":
            switch (sized) {
             case size = "Small":
                 price = 3500;
                 if (cruste === "Thin Crust") {
                    total = price +1000 ;
                } else if (cruste === "Thin Crust") {
                    total = price + 2000;
                } else if (cruste === "Deep Crust") {
                    total = price + 2500;
                }else if (cruste === "Crunchy Crust") {
                  total = price + 1500; 
                }else {
                    total = price  + 5000;
                }
                break;
             case size = "Medium":
                 price = 5000;
                 if (cruste === "Thin Crust") {
                    total = price +1000 ;
                } else if (cruste === "Thin Crust") {
                    total = price + 2000;
                } else if (cruste === "Deep Crust") {
                    total = price + 2500;
                }else if (cruste === "Crunchy Crust") {
                  total = price + 1500; 
                }else {
                    total = price  + 5000;
                }
                break;
             case size = "Large":
                 price = 7000;
                 if (cruste === "Thin Crust") {
                    total = price +1000 ;
                } else if (cruste === "Thin Crust") {
                    total = price + 2000;
                } else if (cruste === "Deep Crust") {
                    total = price + 2500;
                }else if (cruste === "Crunchy Crust") {
                  total = price + 1500; 
                }else {
                    total = price  + 5000;
                }
                break;
         }
         break;
         case type = "4season":
         switch (sized) {
          case size = "Small":
              price = 3500;
              if (cruste === "Thin Crust") {
                total = price +1000 ;
            } else if (cruste === "Thin Crust") {
                total = price + 2000;
            } else if (cruste === "Deep Crust") {
                total = price + 2500;
            }else if (cruste === "Crunchy Crust") {
              total = price + 1500; 
            }else {
                total = price  + 5000;
            }
            break;
          case size = "Medium":
              price = 5000;
              if (cruste === "Thin Crust") {
                total = price +1000 ;
            } else if (cruste === "Thin Crust") {
                total = price + 2000;
            } else if (cruste === "Deep Crust") {
                total = price + 2500;
            }else if (cruste === "Crunchy Crust") {
              total = price + 1500; 
            }else {
                total = price  + 5000;
            }
            break;
          case size = "Large":
              price = 7000;
              if (cruste === "Thin Crust") {
                total = price +1000 ;
            } else if (cruste === "Thin Crust") {
                total = price + 2000;
            } else if (cruste === "Deep Crust") {
                total = price + 2500;
            }else if (cruste === "Crunchy Crust") {
              total = price + 1500; 
            }else {
                total = price  + 5000;
            }
            break;
      }
      break;
      case type = "vegeterian":
         switch (sized) {
          case size = "Small":
              price = 3500;
              if (cruste === "Thin Crust") {
                total = price +1000 ;
            } else if (cruste === "Thin Crust") {
                total = price + 2000;
            } else if (cruste === "Deep Crust") {
                total = price + 2500;
            }else if (cruste === "Crunchy Crust") {
              total = price + 1500; 
            }else {
                total = price  + 5000;
            }
            break;
          case size = "Medium":
              price = 5000;
              if (cruste === "Thin Crust") {
                total = price +1000 ;
            } else if (cruste === "Thin Crust") {
                total = price + 2000;
            } else if (cruste === "Deep Crust") {
                total = price + 2500;
            }else if (cruste === "Crunchy Crust") {
              total = price + 1500; 
            }else {
                total = price  + 5000;
            }
            break;
          case size = "Large":
              price = 7000;
              if (cruste === "Thin Crust") {
                total = price +1000 ;
            } else if (cruste === "Thin Crust") {
                total = price + 2000;
            } else if (cruste === "Deep Crust") {
                total = price + 2500;
            }else if (cruste === "Crunchy Crust") {
              total = price + 1500; 
            }else {
                total = price  + 5000;
            }
            break;
      }
      break;
             }
             switch (toppingd) {
              case topping = "Pepperoni":
                  total = (total + 1500)*number;
                  break;
              case topping = "Mushrooms":
                  total = (total + 500)*number;
                  break;
              case topping = "Sausage":
                  total = (total + 1000)*number;
                  break;
              case topping = "Extra cheese":
                  total = (total + 1000)*number;
                  break;
              case topping = "Black olives":
                  total = (total + 1500)*number;
                  break;
                }

             console.log(total);
            //})
            var newPizza = new Pizza(typec,sized,cruste,toppingd,number,total);
            console.log(newPizza);
                  $("#show").show();
                  $("#show h2").text();
                  $(".type").text(newPizza.type);
                  $(".size").text(newPizza.size);
                  $(".crust").text(newPizza.crust);
                  $(".topping").text(newPizza.topping);
                  $(".numbers").text(newPizza.numbers).append(" pizza(s)");
                  $(".totalPrice").text(newPizza.totalPrice).append("Rwf");
          
                  $("ul#addresses").text("");
                 
        });
      
  
    
    
  });
