import fs from 'fs';

export function usercreate(name, email, password) {
    try {
        let ob = {
            id: Date.now(),
            name,
            email,
            password
        };

        let user = [];
        if (fs.existsSync("user.json")) {
            let data = JSON.parse(fs.readFileSync("user.json", "utf-8"));
            if (!data) {
                return null;
            }
            user = data;
        }

        user.push(ob);
        fs.writeFileSync("user.json", JSON.stringify(user, null, 2));
        return true;
    }
    catch (error) {
        console.log("user create", error);
        return null;
    }
}

export function deleteuser(id) {
    try {
        if (!fs.existsSync("user.json")) {
            return null;
        }

        let data = JSON.parse(fs.readFileSync("user.json", "utf-8"));
        let user = data.find((value) => value.id === id);

        if (!user) {
            return "not found";
        }

        let users = data.filter((value) => value.id !== id);
        fs.writeFileSync("user.json", JSON.stringify(users, null, 2));

        return "deleted successfully";
    }
    catch (error) {
        console.log("delete user", error);
        return null;
    }
}

export function userupdate(id, name, email) {
    try {
        if (!fs.existsSync("user.json")) {
            return null;
        }

        let data = JSON.parse(fs.readFileSync("user.json", "utf-8"));
        let user = data.find((value) => value.id === id);

        if (!user) {
            return "user not found";
        }

        let userIndex = data.findIndex((value) => value.id === id);
        data[userIndex].name = name;
        data[userIndex].email = email;

        fs.writeFileSync("user.json", JSON.stringify(data, null, 2));
        return "updated successfully";
    }
    catch (error) {
        console.log("user update", error);
        return null;
    }
}

export function userlogindb(email) {
    try {
        if (!fs.existsSync("user.json")) {
            return null;
        }

        let data = JSON.parse(fs.readFileSync("user.json", "utf-8"));
        let user = data.find((value) => value.email === email);

        if (!user) {
            return null;
        }

        return true;
    }
    catch (error) {
        console.log("user search", error);
        return null;
    }
}
