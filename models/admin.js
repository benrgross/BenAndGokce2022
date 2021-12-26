const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
SALT_WORK_FACTOR = 10;

const adminSchema = new Schema({
  username: String,
  password: {
    type: String,
    required: true,
    // validate: [({ length }) => length >= 6, "Password minimum of 6 characters"],
  },
});

adminSchema.pre("save", async function (next) {
  const admin = this;
  const hash = await bcrypt.hash(this.password, 10);

  this.password = hash;
  next();
});

adminSchema.methods.isValidPassword = async function (password) {
  const admin = this;
  const compare = await bcrypt.compare(password, admin.password);

  return compare;
};

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
