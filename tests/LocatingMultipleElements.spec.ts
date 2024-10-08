
import { test, expect } from '@playwright/test';


test('LocateMultipleElements' ,async ({page})=> {

    await page.goto('https://demoblaze.com/index.html')
    const links = await page.$$('a');

    for(const link of links){
        const linktext = await link.textContent();
        console.log(linktext)
    }

        // Utilisation correcte de XPath pour sélectionner des éléments
        const elements = await page.$$("//div[@id='tbodyid']//div//h4/a");

        // Boucler à travers les éléments trouvés et afficher leur texte
        for (const element of elements) {
            const elementText = await element.textContent();
            console.log(elementText);
        }

    })