export interface IUser {
    id?: string;
    estado: string; //TODO: Agregar interface estado
    sector: string; //TODO: Agregar interface sector
    usuario: string; //TODO: Tipar con la entidad user
}

export class User {
    private id;
    public user;
    public state;
    public sector;

    //TODO: Tipificar state y sector
    constructor(data: IUser) {
        this.id = data.id
        this.user = data.usuario ?? ''
        this.state = data.estado ?? ''
        this.sector = data.sector ?? ''
    }

    // static fromJson = (userData: IUser) => new User(userData);
}