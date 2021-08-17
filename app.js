let pronouns = ['the','our', 'my', ''];
let adjs = ['greatest', 'amazing', 'super', 'last'];
let nouns = ['cat', 'dog', 'portal'];
let extensions = ['.com', '.net', '.cl', '.io'];


function domainGenerator() {
    let domains = [];
    for (const pronoun of pronouns) {
        for (const adj of adjs) {
            for (const noun of nouns) {
                for (const extension of extensions) {
                    console.log(`${pronoun}${adj}${noun}${extension}`)
                }
            }
        }
    }
}
domainGenerator();