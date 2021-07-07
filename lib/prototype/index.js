module.exports = exports = function (addStringPrototype, addObjectPrototype) {
    if (addStringPrototype === true) {
        String.prototype.dynamify = function (args) {
            const pattern = /{{(.*?)}}/;
            let matches;
            const access = global;

            let s = this.toString();

            for (let arg in args) {
                access[arg] = args[arg];
            };

            do {
                matches = pattern.exec(s);

                if (matches) {
                    s = s.replace(matches[0], eval(`access["${getProperIndex(matches[1]).root}"]${getProperIndex(matches[1]).keys}`));
                };
            } while (matches);

            return s;
        };

        String.prototype.dfy = String.prototype.dynamify;
    };

    if (addObjectPrototype === true) {
        Object.prototype.dynamify = function (args) {
            let obj = this;

            let objV = [];

            function getObjValues (object) {
                for (const key in object) {
                    if (typeof object[key] === "object") {
                        getObjValues(object[key]);
                    } else {
                        objV.push(object[key]);
                    };
                };
            };

            getObjValues(obj);

            const pattern = /{{(.*?)}}/;
            let matches;
            const access = global;

            let s = JSON.stringify(obj);

            for (let arg in args) {
                access[arg] = args[arg];
            };

            do {
                matches = pattern.exec(s);

                if (matches) {
                    s = s.replace(matches[0], eval(`access["${getProperIndex(matches[1]).root}"]${getProperIndex(matches[1]).keys}`));
                };
            } while (matches);

            return JSON.parse(s);
        };

        Object.prototype.dfy = Object.prototype.dynamify;
    };

    function getProperIndex (str) {
        let rootVar = str,
            childKeys = "";
    
        if ((str.includes("[") && str.includes("]") && !str.includes("\"")) || str.includes(".")) {
            str = str.split(".");
    
            rootVar = str[0].split("[")[0];
    
            childKeys = str.join(".").replace(rootVar, "").replace(/\\/g, "");
        };
    
        return {
            root: rootVar,
            keys: childKeys
        };
    };

    return true;
};