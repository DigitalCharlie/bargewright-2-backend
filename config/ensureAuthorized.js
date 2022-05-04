module.exports = function(req, res, next) {
    if (!(req.user.username === req.params.username)) {
		return res.status(401).json('Unauthorized');
	}
    next();
};