const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido?",
    "O que poderia fazer?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]

const ask =(index = 0) => {

    process.stdout.write("\n\n" +questions[index] + " > ")
  
}

ask()


const answers = []

process.stdin.on("data", data =>{

    answers.push(data.toString().trim() + "\n")

    if(answers.length < questions.length){

        ask(answers.length)
    } else{

        console.log(answers)

        process.exit()

    } 
   
})

process.on('exit', () =>{
    console.log(`
    Blz Everaldo!

    O que aprendi hoje?
    ${answers[0]}

    O que me deixou aborrecido?
    ${answers[1]}

    O que poderia fazer?
    ${answers[2]}

    O que me deixou feliz hoje?
    ${answers[3]}


    Quantas pessoas ajudei hoje?
    ${answers[4]}



    `)
})


