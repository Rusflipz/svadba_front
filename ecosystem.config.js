module.exports = {
    apps: [{
        name: "mesto-frontend",
        script: "./src/index.js"
    }],
    deploy: {
        production: {
            ssh_options: 'StrictHostKeyChecking=no',
            'post-deploy': 'cd frontend && npm i && npm run build',
        },
    },
};
