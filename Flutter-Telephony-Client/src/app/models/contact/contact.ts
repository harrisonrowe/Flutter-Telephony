// Contact: Data model that defines a users contact
export class Contact {

    // Attributes

    private contactName: string;

    // Initialiser

    constructor(contactName: string) {
        this.contactName = contactName;
    }

    // Getter Methods

    public getContactName() {
        return this.contactName;
    }

    // Setter Methods

    public setContactName(contactName: string) {
        this.contactName = contactName;
    }

    // Class Methods
    
}