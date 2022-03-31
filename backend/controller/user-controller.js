import User from "../schema/user-schema.js";
import generateTokens from "../utils/generateTokens.js";

export const createUser = async (request, response) => {
  //console.log(request.body);

  try {
    const user = await new User(request.body);
    user.save();

    response
      .status(200)
      .json("User saved successfully + token : " + generateTokens(user._id));
  } catch (error) {
    response.status(500).json("The error in saving user  " + error);
  }
};

export const checkUser = async (request, response) => {
  console.log(request.params.username);
  console.log(request.params.pass);
  let name = request.params.username;
  let password = request.params.pass;
  try {
    let user = await User.findOne({ username: name });
    console.log(user);

    if (user && (await user.matchPassword(password))) {
      response.status(200).json({
        name: user.username,
        userId: user._id,
        token: generateTokens(user._id),
      });
    } else {
      response.status(200).json(null);
    }
  } catch (error) {
    console.log(error);
    response.status(500).json("Server error while checking " + error);
  }
};
