it("Home page should have the correct title", async () => {
    await page.goto(process.env.BASE_URL || "https://google.com");
    expect(await page.title()).toBe("All posts | Building SPAs");
});