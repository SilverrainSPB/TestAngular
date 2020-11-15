

export enum UserPermissions {
    Admin =1,
    User = 2,
    Nopermission=-1
}

export class User {
    Name: string;
    Password: string;
    Permissions: UserPermissions;
}

