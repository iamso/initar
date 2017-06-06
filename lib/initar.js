const parseColor = require('parse-color');

module.exports = ({
  initials = '',
  bg = '#000',
  color = '#fff',
  size = 200,
  weight = 700,
  radius = 0,
  font = 'Helvetica Neue, Helvetica, Arial, sans-serif',
} = {}) => {
  bg = `rgba(${parseColor(bg).rgba.join(',')})`;
  color = `rgba(${parseColor(color).rgba.join(',')})`;
  intials = initials.substr(0,2).toUpperCase()

  return `<svg viewBox="0 0 ${size} ${size}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">` +
      `<rect fill="${bg}" x="0" y="0" width="${size}" height="${size}" rx="${radius}"></rect>` +
      `<text font-family="${font}" font-size="${size * 0.4}" font-weight="${weight}" fill="${color}" text-anchor="middle" dominant-baseline="central" y="50%" x="50%">${intials}</text>` +
    `</svg>`;
};
