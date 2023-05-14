import User from "../models/Tour.js";

//create new tour
export const createUser = async (req, res) => {
  const newUser = new User(req.body);
  try {
    const saveUser = await newUser.save();
    res
      .status(200)
      .json({ success: true, message: "succesfully created", data: saveUser });
  } catch (err) {
    res.status(500).json({ success: false, message: "failed try again" });
  }
};

// update tour

export const updatUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "succesfully created",
      data: updateUser,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "failed to updated try again" });
  }
};

//delete
export const deletUser = async (req, res) => {
  const id = req.params.id;

  try {
    const delteUser = await User.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "succesfully  deleted",
      data: delteUser,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "failed try to delete again" });
  }
};

//fetch single
export const singalUser = async (req, res) => {
  const id = req.params.id;
  try {
    const getsingalUser = await User.findById(id);
    res.status(200).json({
      success: true,
      message: "succesfully found one ",
      data: getsingalUser,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "failed try to  found one  again" });
  }
};

// fetch all data
export const allUser = async (req, res) => {
  try {
    const getallUser = await User.find({});

    res.status(200).json({
      success: true,
      message: "succesfully found all ",
      data: getallUser,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "failed try to  found all  again" });
  }
};

//search tour
export const searcUser = async (req, res) => {
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    const searcheUser = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    });
    res.status(200).json({
      success: true,
      message: "succesfully found all ",
      data: searcheUser,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "failed try to  found all  again" });
  }
};

export const getallTourUser = async (req, res) => {
  try {
    const tourUser = await Tour.estimatedDocumentCount();
    res.status(200).json({ success: true, data: tourUser });
  } catch (error) {
    res.status(500).json({ success: false, message: "failed to fetch" });
  }
};
