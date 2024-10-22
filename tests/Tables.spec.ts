import { test, expect } from '@playwright/test';

test("handle tables", async ({ page }) => {
    try {
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Nombre de colonnes
    const table = await page.locator('#productTable');
    const columns = await table.locator('thead tr th');
    console.log("Nombre de colonnes : ", await columns.count());
    expect(await columns.count()).toBe(4);

    // Nombre de lignes
    const rows = await table.locator('tbody tr');
    console.log("Nombre de lignes : ", await rows.count());
    expect(await rows.count()).toBe(5);

    // Debug : afficher le texte de chaque ligne pour vérifier
    for (let i = 0; i < await rows.count(); i++) {
        const rowText = await rows.nth(i).innerText();
        console.log(`Ligne ${i + 1} :`, rowText);
    }

    // Sélection de la case à cocher pour le produit "Smartwatch"
    const matchedRow = rows.filter({
        hasText: "Smartwatch" // Mettre à jour pour cibler "Smartwatch"
    });

    // Vérifier si la ligne a été trouvée
    const count = await matchedRow.count();
    console.log('Produit trouvé:', count);

    // Cible la case à cocher dans la ligne correspondante
    const checkbox = matchedRow.locator('input[type="checkbox"]');

    // Coche la case
    await checkbox.check();



//pagination

const pages = await page.locator('#pagination li a')
console.log("nombre of pagination in table : ", await pages.count())

    for(let p=0;p<await pages.count();p++){
        if(p>0){
         await pages.nth(p).click()
        }
         // Imprimer tous les détails des produits en utilisant une boucle
        for (let i = 0; i < await rows.count(); i++) {
            const row = rows.nth(i);
            const tds = row.locator('td');
            // Correction: utiliser `j` dans la boucle
            for (let j = 0; j < await tds.count(); j++) {
                console.log(await tds.nth(j).textContent());
            }
        }
    await page.waitForTimeout(3000);
    }

    await page.waitForTimeout(5000);
} catch (error) {
    console.error("Navigation failed:", error);
}
});
