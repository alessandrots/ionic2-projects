"use strict";
var Friend = (function () {
    function Friend(id, name, email, numero) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.numero = numero;
    }
    return Friend;
}());
exports.Friend = Friend;
var friends = [
    { "id": 1,
        "name": "Teste1",
        "email": "teste1@mail.com",
        "numero": 2
    },
    { "id": 2,
        "name": "Teste2",
        "email": "teste2@mail.com",
        "numero": 4
    },
    { "id": 3,
        "name": "Teste3",
        "email": "teste3@mail.com",
        "numero": 6
    },
    { "id": 4,
        "name": "Teste4",
        "email": "teste4@mail.com",
        "numero": 8
    },
    { "id": 5,
        "name": "Teste5",
        "email": "teste5@mail.com",
        "numero": 10
    }
];
function getFriends(params) {
    if (params === void 0) { params = {}; }
    return friends;
}
exports.getFriends = getFriends;
//# sourceMappingURL=friend.js.map