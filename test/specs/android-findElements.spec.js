describe('Android Elements Tests', () => { 
    it('Find Element by accesibility ID', async () => {
        //Find element by accesibility ID
        const appOption = await $('~App');
        //Click on element
        await appOption.click();
        //Assertion
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    })
});