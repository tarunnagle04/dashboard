import { Dashed } from "../models/Models.js";

export const DashedController = async (req, res) => {
  try {
    const DashedData = await Dashed.find({});
    res.status(200).json({
      message: "data fetch successfully",
      data: DashedData,
    });
    console.log(DashedData);
  } catch (e) {
    res.status(500).json({
      message: "An Error Occured",
      err: e.message,
    });
    console.log(e.message);
  }
};
