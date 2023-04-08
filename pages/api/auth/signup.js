import connectMongo from "@nauth/database/conn";
import User from "@nauth/model/Schema";
import { hash } from "bcryptjs";


export default async function handler(req, res){
  connectMongo().catch(error => res.json({ error: "Connection Failed!"}))

  // only post method is accepted
  if(req.method === 'POST'){

    if(!req.body) return res.status(404).json({ error: "Don't have form data!"});
    const { username, email, password } = req.body;

    // check duplicate users
    const checkExisting = await User.findOne({ email });
    if(checkExisting) return res.status(422).json({ message: "User already exists!"});

    // hash password
    const newPassword = await hash(password, 12);

    const newUser = await User.create({ username, email, password : newPassword}).catch(err => res.status(404).json({ err })) ;
    // await User.create({ username, email, password : await hash(password, 12)}, function(err, data){
    //   if(err) return res.status(404).json({ err });
    //   res.status(201).json({ status : true, user: data})
    // })

    res.status(201).json({ status: true, user: newUser });
  } else{
    res.status(500).json({ message: "HTTP method not valid only POST Accepted"})
  }
}