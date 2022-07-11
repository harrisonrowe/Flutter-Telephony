import { Contact } from './contact';

describe('Contact', () => {
  it('should create an instance', () => {
    let testContactName = "test-contact-name";
    expect(new Contact(testContactName)).toBeTruthy();
  });
});
