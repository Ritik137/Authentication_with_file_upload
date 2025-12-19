// Controllers/UserController.js
import User from "../Models/UserModels.js";
import cloudinary from "../Config/cloudinary.js";

const renderLogin = (req, res) => {
  res.render("login.ejs", { url: null });
};

const renderRegister = (req, res) => {
  res.render("register.ejs", { url: null });
};

const registerUser = async (req, res) => {
  try {
    const file = req.file.path;
    const { name, email, password } = req.body;

    const cloudinaryRes = await cloudinary.uploader.upload(file, {
      folder: "Nodejs_mastery_course",
    });

    await User.create({
      name,
      email,
      password,
      filename: req.file.originalname, // fixed typo: filemame → filename
      public_id: cloudinaryRes.public_id,
      imgUrl: cloudinaryRes.secure_url,
    });

    res.redirect("/");
  } catch (err) {
    console.error("Register error: ", err);
    res.render("register.ejs", { url: null });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.render("login.ejs", { url: null });
    }

    res.render("profile.ejs", { user }); // fixed typo: Profiler.ejs → profile.ejs
  } catch (err) {
    console.error("Login error:", err);
    res.render("login.ejs", { url: null });
  }
};

// 👉 Export all functions in one object
export default {
  renderLogin,
  renderRegister,
  registerUser,
  loginUser,
};