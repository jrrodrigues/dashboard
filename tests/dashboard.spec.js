const { test, expect } = require('@playwright/test');

test.describe('Dashboard Institucional', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('http://127.0.0.1:8080/index.html');
    });

    test('deve carregar o título da página', async ({ page }) => {
        await expect(page).toHaveTitle(/Portal Institucional/i);
    });

    test('deve exibir o cabeçalho principal', async ({ page }) => {
        await expect(
            page.getByRole('heading', {
                name: 'Painel Institucional'
            })
        ).toBeVisible();
    });

    test('deve exibir os cards de indicadores', async ({ page }) => {

        await expect(page.locator('#cardDocumentos')).toBeVisible();
        await expect(page.locator('#cardProcessos')).toBeVisible();
        await expect(page.locator('#cardUsuarios')).toBeVisible();
        await expect(page.locator('#cardChamados')).toBeVisible();

    });

    test('deve clicar no menu Usuários', async ({ page }) => {
	test.skip();
        const menuUsuario = page.getByText('👥 Usuários');

        await menuUsuario.click();

        await expect(menuUsuario).toHaveClass(/active/);

    });

    test('deve exibir os gráficos', async ({ page }) => {

        await expect(
            page.locator('#processosChart')
        ).toBeVisible();

        await expect(
            page.locator('#demandasChart')
        ).toBeVisible();

        await expect(
            page.locator('#produtividadeChart')
        ).toBeVisible();

    });

    test('deve abrir ação rápida', async ({ page }) => {

        page.on('dialog', async dialog => {
            expect(dialog.message())
                .toContain('DOCUMENTOS');

            await dialog.accept();
        });

        await page.getByRole('button', {
            name: 'Consultar Documentos'
        }).click();

    });

    test('deve exibir tabela de atividades', async ({ page }) => {

        await expect(
            page.getByText('Atividades Recentes')
        ).toBeVisible();

        await expect(
            page.getByText('Publicação de documento')
        ).toBeVisible();

    });

});