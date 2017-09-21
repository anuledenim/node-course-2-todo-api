const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((done) => {
//     console.log(done);
// });

// Todo.findOneAndRemove().then();

Todo.findByIdAndRemove('59c336038c7d1854f1154b91').then((todo) => {
    console.log(todo);
});