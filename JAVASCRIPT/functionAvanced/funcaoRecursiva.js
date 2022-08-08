function recursiva(max) {
    if (max > 50) return
    max++
    console.log(max)
    recursiva(max)
}

recursiva(0)