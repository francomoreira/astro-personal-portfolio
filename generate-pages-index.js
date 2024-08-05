import { readdirSync, statSync, writeFileSync, existsSync, readFileSync } from 'fs';
import { join, dirname, sep } from 'path';
import { fileURLToPath } from 'url';
import { JSDOM } from 'jsdom'; // Importa jsdom para analizar HTML

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const directoryPath = join(__dirname, 'src/pages/apps');
const outputFilePath = join(directoryPath, 'pages-index.json');

if (!existsSync(directoryPath)) {
  console.error(`Directory ${directoryPath} does not exist.`);
  process.exit(1);
}

function getDirectoriesWithH1(dir, baseDir, result = [], id = 1) {
  const files = readdirSync(dir);
  files.forEach(file => {
    const fullPath = join(dir, file);
    if (statSync(fullPath).isDirectory()) {
      if (existsSync(join(fullPath, 'index.astro'))) {
        // Leer el archivo index.astro
        const indexPath = join(fullPath, 'index.astro');
        const content = readFileSync(indexPath, 'utf-8');
        // Analizar el contenido HTML para obtener el texto del <h1>
        const dom = new JSDOM(content);
        const h1Text = dom.window.document.querySelector('h1')?.textContent || '';
        const relativePath = fullPath.replace(baseDir, '').split(sep).join('/');
        result.push({
          id: id++,
          path: relativePath + '/',
          title: h1Text
        });
      }
      getDirectoriesWithH1(fullPath, baseDir, result, id);
    }
  });
  return result;
}

const directoriesWithH1 = getDirectoriesWithH1(directoryPath, directoryPath);
writeFileSync(outputFilePath, JSON.stringify(directoriesWithH1, null, 2));

// ANSI escape code for green text
const greenText = '\x1b[32m%s\x1b[0m';
console.log(greenText, 'File pages-index.json has been generated at');
