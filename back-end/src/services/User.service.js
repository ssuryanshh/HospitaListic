const User = require("./../models/User.model");

async function RegisterUserService(name, email, encryptedPassword) {
  try {
    const user = await User.create({
      name,
      email,
      password: encryptedPassword,
    });
    if (user) {
      return {
        success: true,
        data: user,
      };
    } else {
      throw new Error("Error in RegisterUSerService");
    }
  } catch (err) {
    console.log(err);
    return {
      success: false,
    };
  }
}

async function GetUserByEmailId(email) {
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      return {
        success: true,
        data: user,
      };
    } else {
      throw new Error("Error in GetUserByEmailId");
    }
  } catch (err) {
    console.log(err);
    return {
      success: false,
    };
  }
}

module.exports = {
    RegisterUserService,
    GetUserByEmailId
}
