const commonresult = (req, res, next) => {
    res.returnvalue = function (data, message, status = 0) {
      res.send({
        data,
        status,
        message: message instanceof Error ? message.message : message,
      });
    };
    next();
  };
  
  module.exports={
      commonresult,
  }