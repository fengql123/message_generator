const Alphabets = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']
function message_generator(n) {
    let message = ''
    for (let i=0; i<n+1; i++ ) {
        let word_length = Math.floor(Math.random() * 20)
        let word = ''
        for (let j=0; j<word_length+1; j++ ) {
            word = word + Alphabets[Math.floor(Math.random() * Alphabets.length)]
        }
        message = message + word + ' ' 
    }
    return console.log(message)
}

message_generator(12)