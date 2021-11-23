const { SuperPower } = require('../models');
const createHttpError = require('http-errors');

module.exports.getPersonPowers = async (req, res, next) => {
  try {
    const {
      params: { personId}
    } = req;

    const powers = await SuperPower.findAll(
      {
        where: {
         personId
        }
      }
    )

    res.status(201).send({data: powers});
  }
  catch (errror){
    next(error);
  }
}

module.exports.createPersonPowers = async (req, res, next) => {
  try {
    const { body, params: {personId} } = req;

    const newPowers = body.superPowers.map(power => ({
      power,
      personId
    }));
  const powerList = await SuperPower.bulkCreate(newPowers)
  

  if(!powerList){
    return next(createHttpError(400));
  }

  res.status(201).send({data:powerList});
  }
  catch(error){
    next(error)
  }
}

module.exports.deletePersonPowers = async (req, res, next) => {
  try {
    const {
      params:{personId, powerId}
    } = req;

    const deletedPowers = await SuperPower.destroy({
      where:{
        personId, id: powerId
      }
    });

    if(deletedPowers === 0) {
      return next(createHttpError(404))
    }

    res.status(200).end();
  } catch (error) {
    next(error)
  }
}