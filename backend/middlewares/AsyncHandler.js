//async handler middleware - wraps an asynchronous route handler function, catches any errors that
//it throws, and apsses them to Express's error handling mechanism (next())
function asyncHandler(fn) {
    return function (req, res, next){
        return Promise
            .resolve(fn(req, res, next))
            .catch(next)
    }
}

export default asyncHandler;

