import { Schema, models, model} from "mongoose";

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  createdAt: String,
});

const User = models.users || model('users', userSchema);

export default User;