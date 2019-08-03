
  function Pizza(type,size,crust,topping) {
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.topping= topping;
    this.orders = [];
  }
  function Pizzas(type1, size1, crust1,topping1) {
    this.type1 = type1;
    this.size1 = size1;
    this.crust1 = crust1;
    this.topping1 = topping1;
  }
  Pizza.prototype.fullOrder = function() {
    return this.type+ " " + this.size + " " + this.crust + " " +this.topping;
  }
  
  Pizza.prototype.fullOrders = function() {
    return this.type1+ " " +this.size1+ " " +this.crust1+ " " +this.topping1;
  }

$(document).ready(function() {
    
    $("#add-order").click(function() {
      $("#new-order").append('<div class="new-order">' + ' <div class="container-fluid bg-light py-3">'+ ' <div class="row">' + ' <div class="col-md-6 mx-auto">'+
                                   
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

      var newPizza = new Pizza(typeA,sizeB,crustC,toppingD);
  console.log(newPizza);
  
     /*$(".new-order").each(function() {
        var type1 = $(this).find("select#sel1").val();
        var size1 = $(this).find("select#sel2").val();
        var crust1 = $(this).find("select#sel3").val();
        var topping1 = $(this).find("select#sel4").val();
        var newpizzas = new pizzas(type1,size1,crust1,topping1);
        newpizza.pizzas.push(newpizzas)
      });*/
      $("ul#contacts").append("<li><span class='contact'>" + newPizza.fullOrder() + "</span></li>");
  
      $(".contact").last().click(function() {
        $("#show-contact").show();
        $("#show-contact h2").text(newPizza.fullOrder());
        $(".type").text(newPizza.type);
        $(".size").text(newPizza.size);
        $(".crust").text(newPizza.crust);
        $(".topping").text(newPizza.topping);
        /*$("ul#addresses").text("");
        newPizza.orders.forEach(function(address) {
          $("ul#addresses").append("<li>" + address.fullOrders() + "</li>");*/
        });
      });
  
      $("select#sel1").val();
      $("select#sel2").val();
      $("select#sel3").val();
      $("select#sel4").val();
  
    });
