const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  photo: {
    data: Buffer, // Store the binary data of the photo
    contentType: String // Store the content type of the photo (e.g., 'image/jpeg', 'image/png')
  },
  idProof: {
    data: Buffer, // Store the binary data of the ID proof document
    contentType: String // Store the content type of the ID proof document
  }
});

const Admin = mongoose.model('Admin', adminSchema);


module.exports = Admin;
