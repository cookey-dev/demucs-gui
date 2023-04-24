const { spawn, execSync } = require('child_process');

class Demucs {
    constructor() {
    }
    getVersions() {
        var current = '';
        try {
            current = 'python3';
            const python = execSync('python3 --version').toString('utf8').replace(/[^0-9.]/g, '');
            const node = execSync('node -v').toString('utf8').replace(/[^0-9.]/g, '');
            return {
                success: true,
                python,
                node
            }
        } catch (err) {
            return {
                success: false,
                error: new Error(`Error finding ${current}`, { cause: err })
            }
        }
    }
}

const demucs = new Demucs();
console.log(demucs.getVersions());

module.exports = Demucs;