var Dog = require('../models/dog');
var User = require('../models/user');

var dogsController = {
  index: function (req, res) {
    Dog.find({}, function (err, dogs) {
      if (err) {
        console.log("Error: ", err);
      } else {
        res.render('dogs/dashboard', {dogs: dogs.reverse(), user: req.user});
      }
    });
  },

  createDog: function (req, res) {
    var name = req.body.name;
    var breed = req.body.breed;
    var color = req.body.color;
    var age = req.body.age;
    var size = req.body.size;
    var location = req.body.location;
    var image = req.body.image;
    var reward = req.body.reward;
    var phoneNumber = req.body.phoneNumber;
    var description = req.body.description;
    var lost = req.body.lost;
<<<<<<< HEAD
    var userid = req.body.userid;
    User.findById({_id: userid}, function(err, user) {;
      if (err) {
        console.log(err);
      }
      else {
          Dog.create({
            name: name,
            breed: breed,
            color: color,
            age: age,
            size: size,
            location: location,
            image: image,
            reward: reward,
            phoneNumber: phoneNumber,
            description: description,
            lost: lost
          },
          function (err, dog) {
            if (err) {
              res.status(500).send();
            } else {
                // res.status(201).send(JSON.stringify(dog));
                user.dogs.push(dog._id);
                console.log(user.dogs);
                res.status(201).send(JSON.stringify(dog));
              }
            })
          }
          })
=======
    var user = req.user;
    Dog.create({
      name: name,
      breed: breed,
      color: color,
      age: age,
      size: size,
      location: location,
      image: image,
      reward: reward,
      phoneNumber: phoneNumber,
      description: description,
      lost: lost
    },
    function (err, dog) {
      if (err) {
        res.status(500).send();
      } else {
          // res.status(201).send(JSON.stringify(dog));
          console.log(req);
          // user.dogs.push(dog._id);
          res.status(201).send(JSON.stringify(dog));
        }
      });
    },
>>>>>>> development

},

  show: function (req, res) {
    var id = req.params.id;
    Dog.findById({_id: id}, function(err, dog){

      if (err){
        console.log("There was an error : " + err);
      }
      else{
        res.render('dogs/show', {dog: dog, user: req.user});
      }
    });
  }
};

module.exports = dogsController;
