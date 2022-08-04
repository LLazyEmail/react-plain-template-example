describe('all display methods must be initialized', () => {
    // test('display body', () => {
    //   expect(BodyHTMLString === true).toBe(true);
    // });
  
    test('display body', () => {
      expect(typeof BodyHTMLString === 'string').toBe(true);
    });


});
