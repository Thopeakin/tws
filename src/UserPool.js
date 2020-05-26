import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'us-west-2_jlTmZ2WJL',
    ClientId: '6rl6gsj50ih73fj4nn6i0ksgvj'
}

export default new CognitoUserPool(poolData);