// const User = require('../models/Post.model')

const Post = require("../models/post.model")

module.exports = {

    ADD_POST: async function (payload) {

        try {

            console.log('ADD_POST', payload);

            await new Post(payload).save()

            return [true, "Post added successfully"]
        }

        catch (e) {

            return [false, e.message]
        }
    },

    GET_POSTS: async function (title) {

        try {

            console.log('GET_POSTS', title);

            let post = await Post.findOne({ search_title: title })

            return [true, post]
        }

        catch (e) {

            return [false, e.message]
        }
    },

    GET_POST: async function (title) {

        try {

            console.log('GET_POST', title);

            let post = await Post.findOne({ search_title: title })

            return [true, post]
        }

        catch (e) {

            return [false, e.message]
        }
    },

    SEARCH_POSTS: async function (payload) {

        try {

            console.log('SEARCH_POSTS', payload);

            // let posts = await Post.find({ keywords: { $elemMatch: payload } })

            let posts = await Post.find({ search_title: { $gte: payload } })


            return [true, posts]
        }

        catch (e) {

            return [false, e.message]
        }
    },

    UPDATE_USERNAME: async function (payload) {

        try {

            console.log("upadate username >> ", payload)

            const { email, username } = payload

            const [_status, userExists] = await this.CHECK_USERNAME_EXISTS(username)

            if (!_status || userExists) return [false, "Username already in use"]

            await Post.findOneAndUpdate({ email }, { username })

            return [true, "Username updated successfully"]
        }

        catch (e) {

            return [false, e.message]
        }
    },

    GET_USER: async function (email) {

        try {

            let user = await Post.findOne({ email })

            if (!user) return [false, "User not found"]

            return [true, user]
        }

        catch (e) {

            return [false, e.message]
        }
    },

    GET_ALL_USERS: async function () {

        try {

            let users = await Post.find({})

            if (!users) return [false, "No users found"]

            return [true, users]
        }

        catch (e) {

            return [false, e.message]
        }
    },

    GET_USER_BY_USERNAME: async function (username) {

        try {

            let user = await Post.findOne({ username })

            console.log("🚗 ", user)

            if (!user) return [false, "User not found"]

            return [true, user]
        }

        catch (e) {

            return [false, e.message]
        }
    },

    CHECK_USERNAME_EXISTS: async function (username) {

        try {

            const _user = await Post.findOne({ username })

            if (!_user) return [true, false]

            return [true, _Post.username === username]
        }

        catch (e) {

            return [false, e.message]
        }
    },
}