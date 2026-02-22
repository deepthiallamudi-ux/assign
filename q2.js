function createRateLimiter(limit, interval) {
    let callCount = 0;
    let isBlocked = false;
    return function() {
        if (isBlocked) {
            return "Rate limit exceeded. Please try again later.";
        }   
        callCount++;
        if (callCount > limit) {
            isBlocked = true;   
            setTimeout(() => {
                callCount = 0;
                isBlocked = false;
            }, interval);
            return "Rate limit exceeded. Please try again later.";
        }
}       
 return "Call successful.";
    }
    createRateLimiter(9, 60000); // Example usage: 5 calls per minute