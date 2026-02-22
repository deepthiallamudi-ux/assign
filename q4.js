
function runSequential(tasks, delay) {
        const results = [];
        return tasks.reduce((promise, task) => {
            return promise.then(() => {
                return task().then(result => {  
                    results.push(result);
                    return new Promise(resolve => setTimeout(resolve, delay));
                });
            });
        }
        , Promise.resolve()).then(() => results);
    }

runSequential([
    () => Promise.resolve("Task 1 completed"),
    () => Promise.resolve("Task 2 completed"),
    () => Promise.resolve("Task 3 completed")
], 1000).then(results => console.log(results));

return results;