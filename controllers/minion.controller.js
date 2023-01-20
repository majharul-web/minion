const {
  insertMinionService,
  getMinionsService,
  deleteMinionService,
  updateMinionService,
} = require("../services/Minion.service");

exports.getMinion = async (req, res) => {
  try {
    const minions = await getMinionsService();
    res.status(200).json({
      status: true,
      message: "Get Minions",
      data: minions,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Your request could not be processed. Please try again.",
      error: error.message,
    });
  }
};

exports.insertMinion = async (req, res, next) => {
  try {
    const result = await insertMinionService(req.body);
    console.log(result);

    res.status(200).json({
      status: true,
      message: "Minion inserted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Your request could not be processed. Please try again.",
      error: error.message,
    });
  }
};

exports.updateMinion = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await updateMinionService(id, req.body);
    res.status(200).json({
      status: true,
      message: "Minion updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Your request could not be processed. Please try again.",
      error: error.message,
    });
  }
};

exports.deleteMinionById = async (req, res, next) => {
  try {
    const result = await deleteMinionService(req.params.id);
    res.status(200).json({
      status: true,
      message: "Minion deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Your request could not be processed. Please try again.",
      error: error.message,
    });
  }
};
