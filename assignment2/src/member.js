import fs from "fs";

function member(name, membershipType) {
    try {
        let members = [];

        let obj = {
            memberId: new Date(),   
            name,
            membershipType         
        };

        if (fs.existsSync("members.json")) {
            let data = JSON.parse(fs.readFileSync("members.json", "utf-8"));

            let isMember = data.some(m => m.name === name);
            if (isMember) {
                return "Member already exists";
            }

            members = data;
        }

        members.push(obj);
        fs.writeFileSync("members.json", JSON.stringify(members, null, 2));
        console.log("Member created");

    } catch (error) {
        console.log(error);
    }
}

export default member;
