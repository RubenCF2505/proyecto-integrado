export interface Student {
    firstName: string,
    surName: string,
    nif: string ,
    birthDate: Date,
    phone: string ,
    email: string ,
    teacher: string,
    place: {
        AutonomousComunity: string,
        District: string ,
        City: string 
    }
    address: {
        st: string ,
        number: string,
        floor: string ,
        letter: string,
        PC: string 
    }
}
