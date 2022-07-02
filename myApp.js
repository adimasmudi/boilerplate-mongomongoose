require('dotenv').config();
const mongoose = require('mongoose');

let Person;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

let personSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  age : Number,
  favoriteFoods : [{
    type:String
  }]
})

Person = mongoose.model('Person',personSchema)

const createAndSavePerson = (done) => {
  let person = new Person({
    name : 'Masmudi',
    age : 21,
    favoriteFoods : ['Sate', 'Soto', 'Mie Ayam', 'Ayam Geprek'] 
  })
  person.save(function(err, data){
    if(err) return console.error(err);
    done(null, data);
  })
  
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function(err, data){
    if(err) return console.error(err);
    done(null ,data);
  })
  
};

const findPeopleByName = (personName, done) => {
  Person.find({name:personName}, function(err, data){
    if(err) return console.error(err)
    done(null , data);
  })
  
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods:food}, function(err, data){
    if(err) return console.error(err)
    done(null , data);
  })
};

const findPersonById = (personId, done) => {
  Person.findById({_id:personId}, function(err, data){
    if(err) return console.error(err)
    done(null , data);
})
  
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = 'hamburger';

  // .findById() method to find a person by _id with the parameter personId as search key. 
  Person.findById(personId, (err, person) => {
    if(err) return console.log(err); 
  
    // Array.push() method to add "hamburger" to the list of the person's favoriteFoods
    person.favoriteFoods.push(foodToAdd);

    // and inside the find callback - save() the updated Person.
    person.save((err, updatedPerson) => {
      if(err) return console.log(err);
      done(null, updatedPerson)
    })
  })

  
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
