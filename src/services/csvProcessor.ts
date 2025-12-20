import fs from 'fs';
import csv from 'csv-parser';

export async function processCsv(filePath: string) {
  const rows: any[] = [];

  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => rows.push(data))
    .on('end', async () => {
      console.log(`CSV file processed. Total rows: ${rows.length}`);
      // TODO: Implement inserting rows logging into the database 
    });
}