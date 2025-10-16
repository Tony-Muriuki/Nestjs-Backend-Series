export declare class UsersController {
    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN'): never[];
    findOne(id: string): {
        id: string;
    };
    create(user: object): object;
    update(id: string, userUpdate: object): {
        id: string;
    };
    delete(id: string): {
        id: string;
    };
}
