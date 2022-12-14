require('dotenv').config();

const app = require('./app');
const port = process.env.SERVER_PORT || 3000;
const db = require('./database/db');
const errorHandler = require('./utility/ErrorHandler');
const unhandledRequest = require('./utility/UnhandledError');
const cors = require('cors');
const corsOption = {
	origin: '*',
};
app.use(cors(corsOption));
db.sequelize
	.sync({ alter: true })
	.then(() => {
		console.log(`Database & tables generated!`);
	})
	.catch(err => {
		console.log(err)
	});

//middleware start
require('./middleware/serverMiddleWare');
//middleware end
app.get('/info', (_req, res) => {
	res.json({ version: '1.0.0' });
});
// app.use('/api/appName/', require('./routes/privateRoute'));
app.use('/api/', require('./routes/publicRoute'));
app.use(errorHandler);
app.use(unhandledRequest());
app.listen(port, () => console.log(`server running on ${port}!`));
