const mongoose = require('mongoose')
const Schema = mongoose.Schema

const uuid = require('uuid')

const Post = mongoose.model('post', Schema({
    id: {
        type: String,
        default: uuid.v4,
    },

    writer: {
        type: Object,
        default: {
            name: '',
            avatar: '',
            socials: {
                facebook: '',
                github: '',
                instagram: '',
                twitter: '',
            }
        }
    },

    id: {
        type: String,
        default: Date.now()
    },

    timestamp: {
        type: String,
        default: Date().substring(4, 15)
    },

    title: {
        type: String,
        default: ''
    },

    content: {
        type: String,
        default: ''
    },

    keywords: {
        type: Array,
        default: []
    },

    banner: {
        type: String,
        default: ''
    },

    read_length: {
        type: Number,
        default: 0
    },

    views: {
        type: Number,
        default: 0
    },

    search_title: {
        type: String,
        default: ''
    }
}))

module.exports = Post