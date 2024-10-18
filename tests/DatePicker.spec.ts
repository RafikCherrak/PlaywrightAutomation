import { test, expect } from '@playwright/test';

test("Date Picker", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const year = 2025;
    const month = 11; // Mois : 0 pour janvier, 11 pour décembre
    const day = 22;

    await page.click('#datepicker');

    // Boucle jusqu'à trouver l'année et le mois corrects
    while (true) {
        const currentYearText = await page.locator('.ui-datepicker-year').textContent();
        const currentMonthText = await page.locator('.ui-datepicker-month').textContent();

        // Vérification que les valeurs ne sont pas nulles avant conversion
        if (currentYearText !== null && currentMonthText !== null) {
            const currentYear = parseInt(currentYearText, 10); // Convertir l'année en nombre
            const currentMonth = new Date(`${currentMonthText} 1, 2020`).getMonth(); // Convertir le nom du mois en index de mois

            if (currentYear === year && currentMonth === month) {
                break; // Si on est sur la bonne année et le bon mois, sortir de la boucle
            }

            await page.locator("a[title='Next']").click();
        }
    }

    // Attendre que les dates deviennent visibles
    await page.waitForSelector("//a[@class='ui-state-default']", { state: 'visible' });

    const dates = await page.$$("a.ui-state-default");

    for (const dt of dates) {
        const dtText = await dt.textContent();
        // Vérifier que dtText n'est pas null et le convertir en nombre avant de comparer
        if (dtText !== null && parseInt(dtText, 10) === day) {
            // Attendre que l'élément soit visible et cliquable
            await dt.scrollIntoViewIfNeeded(); // Pour s'assurer que l'élément est visible
            await dt.click({ force: true });   // Utilisation de force pour forcer le clic même si Playwright ne le détecte pas comme visible
            break;
        }
    }

    await page.waitForTimeout(5000); // Pause pour observer le comportement
});
