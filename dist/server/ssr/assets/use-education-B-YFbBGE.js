import { l as post, r as get } from "./base-BuKAg6Le.js";
import { n as useQuery, t as useMutation } from "./useMutation-CRBpDOZ8.js";
import { t as useInvalid } from "./use-base-DLpNl2rR.js";
//#region service/use-education.ts
var NAME_SPACE = "education";
var useEducationVerify = () => {
	return useMutation({
		mutationKey: [NAME_SPACE, "education-verify"],
		mutationFn: () => {
			return get("/account/education/verify", {}, { silent: true });
		}
	});
};
var useEducationAdd = ({ onSuccess }) => {
	return useMutation({
		mutationKey: [NAME_SPACE, "education-add"],
		mutationFn: (params) => {
			return post("/account/education", { body: params });
		},
		onSuccess
	});
};
var useEducationAutocomplete = () => {
	return useMutation({ mutationFn: (searchParams) => {
		const { keywords = "", page = 0, limit = 40 } = searchParams;
		return get(`/account/education/autocomplete?keywords=${keywords}&page=${page}&limit=${limit}`);
	} });
};
var useEducationStatus = (disable) => {
	return useQuery({
		enabled: !disable,
		queryKey: [NAME_SPACE, "education-status"],
		queryFn: () => {
			return get("/account/education");
		},
		retry: false,
		staleTime: 0
	});
};
var useInvalidateEducationStatus = () => {
	return useInvalid([NAME_SPACE, "education-status"]);
};
//#endregion
export { useInvalidateEducationStatus as a, useEducationVerify as i, useEducationAutocomplete as n, useEducationStatus as r, useEducationAdd as t };
