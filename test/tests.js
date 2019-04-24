const test = QUnit.test;

function checkResults(rangerAnswer, smokeyAnswer, tybaltAnswer, roryAnswer, kayakAnswer) {
    let score = 0;

    if(rangerAnswer === 'bengal') {
        score += 1;
    }

    if(smokeyAnswer === 'chicks') {
        score += 1;
    }
    
    if(tybaltAnswer === 'siamese') {
        score += 1;
    }
    
    if(roryAnswer === 'early') {
        score += 1;
    }

    if(kayakAnswer === 'kayaking') {
        score += 1;
    }
    return score;

}

test('return a score of 5 if all answers are correct', assert => {

//arrange

    const rangerAnswer = 'bengal';
    const smokeyAnswer = 'chicks';
    const tybaltAnswer = 'siamese';
    const roryAnswer = 'early';
    const kayakAnswer = 'kayaking';
    const expectedResult = '5';

//act

    const score = checkResults(rangerAnswer, smokeyAnswer, tybaltAnswer, roryAnswer, kayakAnswer);

//assert

    assert.equal(expectedResult, score);
});

test('return a score of 3 if 2 answers are incorrect', assert => {

//arrange
    
    const rangerAnswer = 'bengallol';
    const smokeyAnswer = 'chickssd';
    const tybaltAnswer = 'siamese';
    const roryAnswer = 'early';
    const kayakAnswer = 'kayaking';
    const expectedResult = '3';

//act

    const score = checkResults(rangerAnswer, smokeyAnswer, tybaltAnswer, roryAnswer, kayakAnswer);

//assert

    assert.equal(expectedResult, score);
});

test('return a score of 0 if all answers are incorrect', assert => {

//arrange
    
    const rangerAnswer = 'bengallol';
    const smokeyAnswer = 'chickssd';
    const tybaltAnswer = 'siamesdfe';
    const roryAnswer = 'earlsy';
    const kayakAnswer = 'kayasdking';
    const expectedResult = '0';

//act

    const score = checkResults(rangerAnswer, smokeyAnswer, tybaltAnswer, roryAnswer, kayakAnswer);

//assert

    assert.equal(expectedResult, score);
});