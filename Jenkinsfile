pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true' 
    }
    stages {
        stage('install') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Test') { 
            steps {
                sh 'npm test' 
            }
        }
        stage('Build') { 
            steps {
                sh 'npm run build:dist' 
            }
        }
        stage('Publish') { 
            steps {
                //  publish commands
            }
        }
    }
}