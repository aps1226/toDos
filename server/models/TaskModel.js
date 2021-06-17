const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// v-- REPLACE THE EMPTY STRING WITH YOUR LOCAL/MLAB/ELEPHANTSQL URI
const myURI = 'mongodb+srv://dbUser:j9yBmlyd9efnwWTM@cluster0.v5sla.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// UNCOMMENT THE LINE BELOW IF USING MONGO
const URI = process.env.MONGO_URI || myURI;

// UNCOMMENT THE LINE BELOW IF USING POSTGRESQL
// const URI = process.env.PG_URI || myURI;

const Tasks = new Schema({
  item: {type: String, required: true},
  created_at: {type: Date, default: Date.now}
});

mongoose.connect(myURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'Graduation_Assessment'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

module.exports = mongoose.model('Tasks', Tasks);// <-- export your model