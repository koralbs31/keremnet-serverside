"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = [
    {
        uid: "1",
        username: "koral",
        profilePicFileName: "koral.png"
    },
    {
        uid: "2",
        username: "eden",
        profilePicFileName: "eden.jpg"
    }
];
const getUsers = (req, res) => {
    res.status(200).json({ users });
};
const getUserByUid = (req, res) => {
    const uid = req.params.uid;
    const user = users.find((u) => u.uid === uid);
    if (!user) {
        res.status(404).json({ error: "User not found" });
        return;
    }
    res.status(200).json({ user });
};
const addUser = (req, res) => {
    const { uid, username, profilePicFileName } = req.body;
    if (!uid || !username || !profilePicFileName) {
        res.status(400).json({ error: "Missing fields" });
        return;
    }
    const exists = users.some((u) => u.uid === uid);
    if (exists) {
        res.status(409).json({ error: "User already exists" });
        return;
    }
    users.push({ uid, username, profilePicFileName });
    res.status(201).json({ users });
};
const updateUser = (req, res) => {
    const uid = req.params.uid;
    const { username, profilePicFileName } = req.body;
    const user = users.find((u) => u.uid === uid);
    if (!user) {
        res.status(404).json({ error: "User not found" });
        return;
    }
    if (username)
        user.username = username;
    if (profilePicFileName)
        user.profilePicFileName = profilePicFileName;
    res.status(200).json({ user });
};
exports.default = {
    getUsers,
    getUserByUid,
    addUser,
    updateUser
};
