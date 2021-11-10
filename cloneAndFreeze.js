const __ = require('lodash');

function cloneAndFreeze(obj) {
    const clone = __.clone(obj);
    const freeze = Object.freeze(clone);
    return freeze;
}


module.exports = cloneAndFreeze;