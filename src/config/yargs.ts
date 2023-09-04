import yargs from "yargs/yargs";
import colors from "colors";

const yargsv = yargs(process.argv.slice(2));

const args = yargsv.options({
    "b": { alias: "base", demandOption: true, type: "number", describe: "Base for the times table to be created" },
    "s": { alias: "size", default: 10, type: "number", describe: "size of the times table"},
    "l": { alias: "list", default: false, type: "boolean", describe: "Show table created" },
})
.check((argv) => {
    if (isNaN(argv.b)) throw colors.red("base must be a number");
    if (isNaN(argv.s)) throw colors.red("size must be a number");
    return true;
})
.parseSync();

export default args;
