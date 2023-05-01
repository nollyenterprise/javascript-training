// // HOISTING ================

// // Let Const and Var 
// // Global Scoped Variables =======
// const user_data = {
//     name: "Paul Foh",
//     country: "Nigeria",
//     address:  ["7 Badamosi street", "Shomolu", "Lagos"],
//     age: 45,
//     dob: "2000-05-01",
//     current_time: new Date(),
//     test_empty: ""
// };
// console.log(user_data);

// // var name;
// // console.log(name);
// // name='chibuzor';

// function get_user_name (data1, data2, data3 = "age") {
//     // Blocked Scoped Variable 
//     let uname = user_data[data1] + ' ' + user_data[data2] + ' ' + user_data[data3];

//     return uname;
// }

// // const username = get_user_name ('name', 'country', 'dob');
// // console.log(username);

// function check_if_user_data_is_empty (udata) {
//     console.log(udata);
//     let err = {};
//     for (const e in udata) {
//         console.log(e)
//         if(udata[e] == ""){
//             err[e] = e+" is empty.";
//         }
//     }
//     return err;
// }

// let response = check_if_user_data_is_empty (user_data);
// console.log(response);