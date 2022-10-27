function greetingTemp(greeting){
    function greetingPers(name){
        console.log(`Good ${greeting} ${name}!`)
    }

    return greetingPers
}

morning = greetingTemp("morning")
evening = greetingTemp("evening")

morning("Ivan")
evening("Goshe")