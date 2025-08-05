import fs from 'fs';
import path from 'path';

const url = 'https://govuk-digital-services.herokuapp.com/data.json';
const outputFilePath = path.join(process.cwd(), 'data', 'cross-gov-services.json');

async function getCrossGovServicesData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    fs.writeFileSync(outputFilePath, JSON.stringify(data, null, 2));
    console.log('Data successfully written to', outputFilePath);
  } catch (error) {
    console.error('Error fetching or writing data:', error);
  }
}

getCrossGovServicesData();