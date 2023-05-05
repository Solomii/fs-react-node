module.exports.paginate = async (req, res, next) => {
    try {
        const {
            query: { limit, offset },
        } = req;
        req.pagination = {
            limit: limit <= 0 || limit > 100 ? 10 : limit,
            offset: offset < 0 ? 0 : offset,
        };
        next();
        // const {query} = req;
        // console.log(query)
        // res.send()
    } catch (error) {
        next(error);
    }
};
