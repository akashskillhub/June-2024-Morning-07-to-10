//  👇 Aliase
type User = {
    name: string,
    age: number
}
const obj: User = {
    name: "ross",
    age: 20
}

// todo
type Todo = {
    task: string,
    desc: string,
    priority: number,
    complete: boolean,
}

const notes: Todo[] = []

notes.push({
    task: "learn ts",
    desc: "fake desc",
    priority: 2,
    complete: false
})

const removeTodo = (startIndex: number) => {
    notes.splice(startIndex, 1)
}
const updateNote = (startIndex: number, data: Todo): void => {
    notes[startIndex] = data
}

