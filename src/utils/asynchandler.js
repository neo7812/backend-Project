const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req,res,next)).
        catch((err) => next(err))
    }
}


export {asyncHandler}




// const asyncHandler = (requestHandler) => async (req, res, next) => {
//     try {
//         await responseHandler(req, res, next)
//     } catch(error){
//         res.status(err.code || 500).json({
//             Success: false,
//             message: err.message
//         })

//     }
// }