module.exports = exports = function (addStringPrototype, addObjectPrototype) {
    return require("./prototype/index.js")(addStringPrototype, addObjectPrototype);
};