import homepage from './adapters/html/homepage.html?raw';
import header from './adapters/html/partials/header.html?raw';
import footer from './adapters/html/partials/footer.html?raw';

document.getElementById('app').innerHTML = `
${header}
${homepage}
${footer}
`;
