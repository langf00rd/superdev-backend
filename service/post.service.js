const POST_REPO = require("../repositories/post.repo")

const formatUsername = (name) => {
    return (name.split(/\s+/).join("")).toLocaleLowerCase()
}

module.exports = {

    addPost: async function (req, res) {

        try {

            const [status, message] = await POST_REPO.ADD_POST(req.body)

            if (!status) return res.json({ status: status, error: message })

            return res.status(200).json({ status, message })
        }

        catch (e) {

            return res.json({ status: false, error: e.message })
        }
    },

    getPost: async function (req, res) {

        try {

            const [status, payload] = await POST_REPO.GET_POST(req.params.title)

            if (!status) return res.json({ status, error: payload })

            return res.status(200).json({ status, payload })
        }

        catch (e) {

            return res.json({ status: false, error: e.message })
        }
    },

    getPosts: async function (req, res) {

        try {

            const [status, payload] = await POST_REPO.GET_POSTS()

            if (!status) return res.json({ status, error: payload })

            return res.status(200).json({ status, payload })
        }

        catch (e) {

            return res.json({ status: false, error: e.message })
        }
    },

    getPostsByTags: async function (req, res) {

        try {

            const [status, payload] = await POST_REPO.GET_POSTS_BY_TAGS(req.body)

            if (!status) return res.json({ status, error: payload })

            return res.status(200).json({ status, payload })
        }

        catch (e) {

            return res.json({ status: false, error: e.message })
        }
    },

    searchPosts: async function (req, res) {

        try {

            const [status, payload] = await POST_REPO.SEARCH_POSTS(req.body)

            if (!status) return res.json({ status, error: payload })

            return res.status(200).json({ status, payload })
        }

        catch (e) {

            return res.json({ status: false, error: e.message })
        }
    },

    updateUsername: async function (req, res) {

        try {

            const [status, message] = await POST_REPO.UPDATE_USERNAME(req.body)

            if (!status) return res.json({ status, error: message })

            return res.status(200).json({ status, message })
        }

        catch (e) {

            return res.json({ status: false, error: e.message })
        }
    },

    getUser: async function (req, res) {

        try {

            const [status, payload] = await POST_REPO.GET_USER(req.params.email)

            if (!status) return res.json({ status, error: payload })

            return res.status(200).json({ status, payload })
        }

        catch (e) {

            return res.json({ status: false, error: e.message })
        }
    },

    getAllUsers: async function (req, res) {

        try {

            const [status, payload] = await POST_REPO.GET_ALL_USERS()

            if (!status) return res.json({ status, error: payload })

            return res.status(200).json({ status, payload })
        }

        catch (e) {

            return res.json({ status: false, error: e.message })
        }
    },

    getUserByUsername: async function (req, res) {

        try {

            const [status, payload] = await POST_REPO.GET_USER_BY_USERNAME(req.params.username)

            if (!status) return res.json({ status, error: payload })

            return res.status(200).json({ status, payload })
        }

        catch (e) {

            return res.json({ status: false, error: e.message })
        }
    },

    checkUsernameExists: async function (req, res) {

        try {

            const [status, payload] = await POST_REPO.CHECK_USERNAME_EXISTS(req.params.username)

            return res.status(200).json({ status, payload })
        }

        catch (e) {

            return res.json({ status: false, error: e.message })
        }
    },
}