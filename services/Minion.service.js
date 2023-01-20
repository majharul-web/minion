const Minion = require("../models/Minion");

exports.getMinionsService = async () => {
  const minions = await Minion.find({});
  return minions;
};

exports.insertMinionService = async (data) => {
  const insertedMinion = await Minion.create(data);
  return insertedMinion;
};

exports.updateMinionService = async (id, data) => {
  const updatedMinion = await Minion.updateOne({ _id: id }, { $set: data });
  return updatedMinion;
};

exports.deleteMinionService = async (id, data) => {
  const deletedMinion = await Minion.deleteOne({ _id: id });
  return deletedMinion;
};
