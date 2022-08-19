module.exports = {
	SUCCESS_SUGNUP: 'A verification email has been sent to your email, Kindly follow the instruction',
	SUCCESS_PASSWORD_CHANGE: 'You have sucessfully change password',
	SUCCESS_UPDATE: str => `${str} updated successfully`,
	SUCCESS_DELETED: str => `${str} deleted successfully`,
	SUCCESS_ADDED: str => `${str} added successfully`,
	ACTIVE_INACTIVE: status => {
		return `User ${status} successfully`;
	},
	BLOCK_UNBLOCK_PRODUCT: bBlock => {
		return bBlock ? 'Product blocked successfully' : 'Product Unblocked successfully';
	},
	STATUS_PRODUCT: (status, size) => {
		return `${size > 1 ? 'Products' : 'Product'} ${status}!`;
	},
	SUCCESS_SENT_LINK: 'Reset password link has been sent to your email, Kindly check.',
	SUCCESS_RESET_PASSWORD: 'Password reset successfully',
	SUCCESS_EMAIL_VERIFIED: 'Your email has been verified. You have been loggedin',
};
