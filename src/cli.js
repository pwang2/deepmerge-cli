import deepmerge from 'deepmerge';
import fs from 'fs';
import { promisify } from 'util';

const readFile = promisify(fs.readFile);

export default {
  async cli(...files) {
    try {
      if (files.length < 2) throw new Error('at least need 2 files to merge');

      const inputs = await Promise.all(files.map(async (f) => {
        const data = await readFile(f);
        return JSON.parse(data);
      }));

      const merged = deepmerge(...inputs);
      process.stdout.write(JSON.stringify(merged, null, 2));
    } catch (err) {
      process.stderr.write(err.message, err.stackTrace);
    }
  },
};
