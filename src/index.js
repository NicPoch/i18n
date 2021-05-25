import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";

import localeEsMessages from "./locales/es.json";
import localeEnMessages from "./locales/en.json";

import JobsList from "./components/jobslist";


ReactDOM.render(<IntlProvider locale={window.navigator.language} messages={(window.navigator.language==="en") ? localeEnMessages : localeEsMessages}>
                    <JobsList />
                </IntlProvider> , document.getElementById("root"));
