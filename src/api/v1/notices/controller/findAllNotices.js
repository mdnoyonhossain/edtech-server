const Notice = require("../../../../models/NoticesT");

const findAllNotices =  async (req, res) => {
    try {
      // const filter = dateTime.sort({ createdAt: -1 })
      const result = await Notice.find() ;
      res.send(result);
    } catch (error) {
      console.log(error);
    }
}
  
module.exports = findAllNotices;