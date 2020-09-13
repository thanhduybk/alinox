let baseUrl = "";

if (process.env.NODE_ENV !== "production") {
	baseUrl = "http://localhost:5000/api";
} else {
	baseUrl = "https://faso-sv.tk/api";
}

const imageS3Repo = "https://anilox-image.s3-ap-southeast-1.amazonaws.com/";

const clazzActions = {
	list: {
		pending: "fetching classes",
		success: "fetched classes success",
		failed: "fetched classes failed"
	}
};

const authActions = {
	login: {
		pending: "logging in",
		success: "logged in succeed",
		failed: "logged in failed"
	},
	getMe: {
		pending: "getting my details",
		success: "got my details success",
		failed: "got my details failed"
	}
};

const employeeActions = {
	pending: "registering",
	success: "register success",
	failed: "register failed",

	emp: {
		pending: "creating my emp account",
		success: "created my emp account success",
		failed: "failed to create emp account",
	},

	role: {
		pending: "updating emp role",
		success: "updated emp role successfully",
		failed: "failed to update emp role"
	},

	all: {
		pending: "list all emp",
		success: "fetched all emp",
		failed: "failed to fetch all emp"
	}
};

const artworkActions = {
	list: {
		pending: "fetching artworks",
		success: "fetched artworks success",
		failed: "fetched artworks failed"
	},
	update: {
		pending: "updating artwork",
		success: "updated artwork success",
		failed: "updated artwork failed"
	}
};

const materialActions = {
	list: {
		pending: "fetching materials",
		success: "fetched materials success",
		failed: "fetched materials failed"
	},
	create: {
		pending: "creating material",
		success: "created material success",
		failed: "created material failed"
	},
	update: {
		pending: "updating material",
		success: "updated material success",
		failed: "updated material failed"
	},
	delete: {
		pending: "deleting material",
		success: "deleted material success",
		failed: "deleted material failed"
	}
};

const printerActions = {
	list: {
		pending: "fetching printers",
		success: "fetched printers success",
		failed: "fetched printers failed"
	},
	create: {
		pending: "creating printer",
		success: "created printer success",
		failed: "created printer failed"
	},
	update: {
		pending: "updating printer",
		success: "updated printer success",
		failed: "updated printer failed"
	},
	delete: {
		pending: "deleting printer",
		success: "deleted printer success",
		failed: "deleted printer failed"
	}
};

const reportActions = {
	create: {
		pending: "creating report",
		success: "created report success",
		failed: "created report failed"
	},
	download: {
		pending: "downloading report",
		success: "downloaded report success",
		failed: "downloaded report failed"
	},
	list: {
		pending: "fetching reports",
		success: "fetching reports success",
		failed: "fetching reports failed"
	},
	current: {
		update: "update my current working",
		clean: "clean my current working",
		resetFlag: "reset flag"
	},
	delete: {
		pending: "deleting reports",
		success: "deleting reports success",
		failed: "deleting reports failed"
	},
};

const wiperActions = {
	list: {
		pending: "fetching wipers",
		success: "fetched wipers success",
		failed: "fetched wipers failed"
	},
	create: {
		pending: "creating wiper",
		success: "created wiper success",
		failed: "created wiper failed"
	},
	update: {
		pending: "updating wiper",
		success: "updated wiper success",
		failed: "updated wiper failed"
	},
	delete: {
		pending: "deleting wiper",
		success: "deleted wiper success",
		failed: "deleted wiper failed"
	}
};

export {
	baseUrl, authActions, employeeActions, artworkActions, materialActions,
	printerActions, reportActions, wiperActions, clazzActions, imageS3Repo
};