"use strict";
const prettyPrintWilder = (users) => {
    users.map((user) => {
        var _a;
        console.log(`${user.name} is ${(_a = user.age) !== null && _a !== void 0 ? _a : "unknown"} years old`);
    });
};
const wilders = [];
const user1 = { name: "Pierre", age: 23 };
const user2 = { name: "Paul" }; // Removed birthday to match User interface
const user3 = { name: "Jacques", age: 25 };
wilders.push(user1);
wilders.push(user2);
wilders.push(user3);
prettyPrintWilder(wilders);
