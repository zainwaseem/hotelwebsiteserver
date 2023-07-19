import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://zainwaseem9371:En1VwMgSMVo9Oz3n@cluster0.ge4wij9.mongodb.net/"
    )
    .then(() => console.log(`Datebase Connected`))
    .catch((error) => console.log(error.message));
};
export default connectDB;

// mongodb username & Password
// zainwaseem9371
// En1VwMgSMVo9Oz3n
