const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const orderEntr = Object.entries(order['order']['delivery']);
    const deliveryEntr = Object.entries(orderEntr)[0][1][1];
    console.log(deliveryEntr);

    const addressObj = (address) => {
        const addressArr = [];
        for (i in address) {
            addressArr.push(order[i])
        }

        resultado = Object.values(addressArr[2]);
        
        return resultado;
    };

    console.log(addressObj(order))
    
    console.log(`Olá ${deliveryEntr}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${resultado[0]}, Nº ${resultado[1]}, AP ${resultado[2]}`)
}
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
  
  }
  
  orderModifier(order);