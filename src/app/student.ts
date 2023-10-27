export interface Student {
    firstName: string,
    lastName: string,
    document: string,
    Type: number,
    birthDate: Date,
    phone: string,
    email: string,
    teacher:string,
    place: {
        AutonomousComunity: "",
        District: "",
        City: ""
    }
    address: {
        street: "",
        number: "",
        floor: "",
        letter: "",
        postalCode: ""
    }
}
