//#region i18n/fr-FR/run-log.json
var actionLogs = "Journaux d’actions";
var circularInvocationTip = "Il y a un appel circulaire d’outils/nœuds dans le flux de travail actuel.";
var detail = "DÉTAIL";
var input = "ENTRÉE";
var result = "RÉSULTAT";
var tracing = "TRACE";
var run_log_default = {
	actionLogs,
	circularInvocationTip,
	detail,
	input,
	"meta.executor": "Exécuteur",
	"meta.startTime": "Heure de début",
	"meta.status": "Statut",
	"meta.steps": "Étapes d'exécution",
	"meta.time": "Temps écoulé",
	"meta.title": "MÉTADONNÉES",
	"meta.tokens": "Total des jetons",
	"meta.version": "Version",
	result,
	"resultEmpty.link": "panneau de détail",
	"resultEmpty.tipLeft": "veuillez aller à ",
	"resultEmpty.tipRight": " visualisez-le.",
	"resultEmpty.title": "Cela exécute uniquement le format de sortie JSON,",
	"resultPanel.status": "STATUT",
	"resultPanel.time": "TEMPS ÉCOULÉ",
	"resultPanel.tokens": "TOTAL DES JETONS",
	tracing
};
//#endregion
export { actionLogs, circularInvocationTip, run_log_default as default, detail, input, result, tracing };
