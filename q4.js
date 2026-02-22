
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

