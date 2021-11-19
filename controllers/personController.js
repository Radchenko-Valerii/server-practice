const { Person, SuperPower } = require("../models");

module.exports.getPersons = async (req, res, next) => {
  try {
    const persons = await Person.findAll();

    res.send(persons);
  } catch (error) {
    next(error);
  }
};

module.exports.createPerson = async (req, res, next) => {
  try {
    const { body } = req;

    const newPerson = await Person.create(body);

    if (body.superPowers.length) {
      const personPowers = body.superPowers.map((power) => ({
        power,
        personId: newPerson.id,
      }));
      await SuperPower.bulkCreate(personPowers, { returning: true });
    }

    const personWithPower = await Person.findAll({
      where:{
        id: newPerson.id
      },
      include: [
        {
          model: SuperPower,
          attributes: ['id', 'name'],
          as: 'superPowers'
        }
      ]
    })

    res.status(201).send({data: personWithPower});
  } catch (error) {
    next(error);
  }
};

module.exports.updatePerson = async (req, res, next) => {
  try {
    const {
      body,
      params: { id },
    } = req;

    const [updatedRows, [updatedPerson]] = await Person.update(body, {
      where: { id },
      returning: true,
    });

    res.send(updatedPerson);
  } catch (error) {
    next(error);
  }
};

module.exports.deletePerson = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const foundPerson = await Person.findByPk(id);

    foundPerson.destroy();

    res.send(foundPerson);
  } catch (error) {
    next(error);
  }
};
