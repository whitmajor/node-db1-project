const db = require("../../data/db-config")


const getAll = () => {
  // DO YOUR MAGIC
  //select * from accounts
  return db("accounts");
}

const getById = id => {
  // DO YOUR MAGIC
  //select * from accounts where id =1
  return db("accounts").where("id",id)
}

const create = async account => {
  // DO YOUR MAGIC
 const [id] = await db("accounts").insert(account)
 return getById(id)
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
  return db("accounts").where("id",id).del()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
