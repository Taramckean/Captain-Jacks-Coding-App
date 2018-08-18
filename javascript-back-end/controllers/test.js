use pirates;
db.dropDatabase();


db.pirates.insert([{
  name: "Joe"
},
{
  name: "Jack"
}]);

db.pirates.find();
