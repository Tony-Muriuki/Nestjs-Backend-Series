export declare class UsersService {
    private users;
    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN'): {
        id: number;
        name: string;
        email: string;
        role: string;
    }[];
    findOne(id: number): {
        id: number;
        name: string;
        email: string;
        role: string;
    } | undefined;
    create(user: {
        name: string;
        email: string;
        role: 'INTERN' | 'ENGINEER' | 'ADMIN';
    }): {
        name: string;
        email: string;
        role: "INTERN" | "ENGINEER" | "ADMIN";
        id: number;
    };
    update(id: number, updatedUser: {
        name?: string;
        email?: string;
        role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
    }): {
        id: number;
        name: string;
        email: string;
        role: string;
    } | undefined;
    delete(id: number): {
        id: number;
        name: string;
        email: string;
        role: string;
    } | undefined;
}
