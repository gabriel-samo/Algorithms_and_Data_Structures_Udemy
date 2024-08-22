# Problem Solving Approach

### 1. Understand the problem:

- Can I restate the problem in my own words?
- What are the inputs that go into the problem?
- What are the outputs that should come out of the problem?
- Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?

### 2. Explore concrete examples:

- Start with simple examples
- Progress to more complex examples
- Explore examples with empty inputs
- Explore examples with invalid inputs

### 3. Break it down:

- Write down the steps you need to take in order to solve the problem
- Use comments to write down the steps
- Use comments to write down the code you need to write

### 4. Solve/Simplify:

- Solve the problem
- Simplify the problem
- Use comments to write down the code you need to write

### 5. Look back and refactor:

- Look back at the problem from the first principle
- Refactor the code to make it more efficient
- Refactor the code to make it more readable
- Refactor the code to make it more maintainable

---

# Problem Solving Patterns

### 1. Frequency Counter (Learning in this course):

- This pattern uses objects or sets to collect values/frequencies of values
- This can often avoid the need for nested loops or O(N^2) operations with arrays/strings

### 2. Multiple Pointers (Learning in this course):

- Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
- Very efficient for solving problems with minimal space complexity as well

### 3. Sliding Window (Learning in this course):

- This pattern involves creating a window which can either be an array or number from one position to another
- Depending on a certain condition, the window either increases or closes (and a new window is created)
- Very useful for solving problems involving subarrays/substrings

### 4. Divide and Conquer (Learning in this course):

- This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data
- This pattern can tremendously decrease time complexity

### 5. Dynamic Programming ([Resource](https://www.youtube.com/watch?v=oBt53YbR9Kk)):

- This pattern is used to solve problems by breaking them down into simpler subproblems
- A good way to check if a problem can be solved using dynamic programming is if it has overlapping subproblems and optimal substructure

### 6. Greedy Algorithm:

- Greedy algorithm is an algorithmic paradigm that builds up a solution piece by piece, always choosing the next piece that offers the most obvious and immediate benefit
- The choice made by the greedy algorithm may depend on the choices made so far, but it never goes back and changes these choices

### 7. Backtracking:

- Backtracking is a general algorithm for finding all (or some) solutions to some computational problems, notably constraint satisfaction problems, that incrementally builds candidates to the solutions, and abandons each partial candidate ("backtracks") as soon as it determines that the candidate cannot possibly be extended to a complete solution
