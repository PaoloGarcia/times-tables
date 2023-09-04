import fs from "fs";
import path from "path";
import colors from "colors";

export async function create_time_table(
    base: number,
    size: number = 10,
    show_table: boolean = false
): Promise<void> {
    let output: string = "";
    let to_console: string = "";
    for (let i = 1; i <= size; i++) {
        output += `${base} x ${i} = ${base * i}\n`;
        to_console += `${base} ${colors.gray("x")} ${i} ${colors.gray("=")} ${base * i}\n`;
    }
    if (show_table) {
        display_times_table(to_console, base);
    }
    console.log(__dirname);
    try {
        const folder = path.join(__dirname, "..", "tables");
        if (!fs.existsSync(folder)) {
            fs.mkdirSync(folder);
        }
        const tables_path = path.join(folder, `times-table-${base}.txt`);
        fs.writeFileSync(tables_path, output);
        console.log(colors.green(`Times table of ${base} successfully created`));
        return;
    } catch (err) {
        console.error(colors.red("Unexpected error trying to create times table"));
        throw err;
    }
}

export function create_times_tables(start: number, end: number): void {
    for (let i = start; i <= end; i++) {
        create_time_table(i)
            .then(() => {})
            .catch((err) => console.log(err));
    }
}

function display_times_table(table: string, base: number) {
    console.log(colors.yellow("==========================="));
    console.log(`   Times table for ${colors.yellow(base.toString())}`);
    console.log(colors.yellow("==========================="));
    console.log(table);
}
