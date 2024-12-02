import { parse } from "csv-parse/sync";
import { readFileSync } from "fs";
import { mapToPlayer } from "./models";

const input = readFileSync('./templates/nfl.csv', 'utf-8');
const records = parse(input, {
    columns: true,
    skip_empty_lines: true,
    from_line: 8
});

const players = records.map((row: any) => mapToPlayer(row));

console.table(players);