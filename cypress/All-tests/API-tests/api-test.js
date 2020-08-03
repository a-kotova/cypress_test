import Chance from 'Chance'
describe ('Test for reqres', () => {
    before(() => {
        //cy.visit('')
    })
    //comment

    let testingData = [
        {
            description: "Max values",
            requestData: {
                name: Chance().string({length: 100}),
                job: Chance().string({length: 100})
            }
        },
        {
            description: "Min values",
            requestData: {
                name: Chance().string({length: 1}),
                job: Chance().string({length: 1})
            }


        }
    ]

    //using Chance and loop (parametrized)
    testingData.forEach(({description, requestData}) =>{
        it(`Create user ${description}`, () => {
            cy.request('POST', '/api/users', requestData).then(response => {
                expect(response.status).to.eq(201)
                expect(response.body).to.have.property('name', requestData.name)
                expect(response.body).to.have.property('job', requestData.job)
            })
        })
    })

    //reading data from fixtures
    it('Create user', () => {
        cy.fixture('UserData').then(user => {
            cy.request('POST', '/api/users', user).then(response => {
                expect(response.status).to.eq(201)
                expect(response.body).to.have.property('name', user.name)
                expect(response.body).to.have.property('job', user.job)
            })
        })
    })

    //negative test: check that status code is 400
    it('Status code check', () => {
        cy.request({
            method: 'POST', url: '/api/login', failOnStatusCode: false, body:
                {
                    "email": "peter@mail"
                }
        }).then(response => {
            expect(response.status).to.eq(400)
        })
    })
})