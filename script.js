let client = {
    "first_name": "John",
    "last_name": "Smith",
    "is_alive": true,
    "age": 27,
    "address": {
      "street_address": "21 2nd Street",
      "city": "New York",
      "state": "NY",
      "postal_code": "10021-3100"
    },
    "phone_numbers": [
      {
        "type": "home",
        "number": "212 555-1234"
      },
      {
        "type": "office",
        "number": "646 555-4567"
      }
    ],
    "children": [
      "Catherine",
      "Thomas",
      "Trevor"
    ],
    "spouse": null
  }

  console.log(client);

  console.log(client.phone_numbers);
  console.log(client.phone_numbers[0].number);

  let output = document.getElementById("output")
  output.innerHTML = client.first_name + " " + client.last_name + " vit à " + client.address.city + "</br> dont le code postal est le " +client.address.postal_code + "</br> Son méro de"+ client.phone_numbers[1].number