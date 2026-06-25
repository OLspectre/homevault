
const errorHandler (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Internal server error";
};

export default errorHandler;