pipeline {
    agent any

    stages {
        stage('build') {
            steps {
                bat 'npm install'
            }
        }
        stage('parallel') {
            parallel {
                // start several test jobs in parallel, and they all
                // will use Cypress Dashboard to load balance any found spec files
                stage('Run tests in parallel A') {
                    steps {
                        bat 'npx cypress run --record --key e5d03218-9722-4b0e-a0b8-e3974e02d0d8 --parallel'
                    }
                }
                stage('Run tests in parallel B') {
                    steps {
                        bat 'npx cypress run --record --key e5d03218-9722-4b0e-a0b8-e3974e02d0d8 --parallel'
                    }
                }
                stage('Run tests in parallel C') {
                    steps {
                        bat 'npx cypress run --record --key e5d03218-9722-4b0e-a0b8-e3974e02d0d8 --parallel'
                    }
                }
            }
        }
    }
}