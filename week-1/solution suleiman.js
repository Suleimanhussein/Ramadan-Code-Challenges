// //  Week 1 Challenges
// // 1️⃣ Multiples of 3 or 5
// // 🔹 Description: Find the sum of all multiples of 3 or 5 below a given number.
// // 🔹 Link: CodeWars - Multiples of 3 or 5
// // 🔹 Concepts Covered: Loops, conditionals, arithmetic series.

const solution = (n) => {
    let total = 0
    for (let i = 0; i < n; i++) {
        if (i % 3 == 0 || i%5==0) {
            total +=i
        }
    }
    return total
}

console.log(solution(10))