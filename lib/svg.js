module.exports = () => {
  return (req, res, next) => {
    res.svg = (svg) => {
      res.set('Content-Type', 'image/svg+xml');
      res.send(new Buffer(svg));
    };
    next();
  };
};
