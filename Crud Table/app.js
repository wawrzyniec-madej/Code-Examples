import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap';

import '@fortawesome/fontawesome-free/css/all.css';

import './styles/app.scss';

import CrudCreate from './react/crud/CrudCreate';
import CrudTextEdit from './CrudTextEdit';
import CrudRefreshUtility from './CrudRefreshUtility';
import CrudButtonUtility from './react/crud/CrudButtonUtility';
import CrudAjaxUtility from './CrudAjaxUtility';
import CrudTable from './CrudTable';
import CrudTextField from './CrudTextField';
import CrudMoneyField from './CrudMoneyField';
import CrudPercentField from './CrudPercentField';
import CrudLinkUtility from './react/crud/CrudLinkUtility';
import CrudClearFiltersUtility from './CrudClearFiltersUtility';
import CrudDetail from './react/crud/CrudDetail';
import CrudLinkField from './CrudLinkField';
import CrudBooleanField from './CrudBooleanField';
import CrudSelectEdit from './CrudSelectEdit';
import CrudDateEdit from './CrudDateEdit';
import CrudBooleanEdit from './CrudBooleanEdit';
import CrudEdit from './CrudEdit';
import CrudMultiField from './CrudMultiField';
import CrudMultiSelectEdit from './CrudMultiSelectEdit';
import CrudGoUtility from './CrudGoUtility';
import CrudRepayUtility from './CrudRepayUtility';
import CrudTextFilter from './CrudTextFilter';
import CrudSettingsUtility from './CrudSettingsUtility';
import CrudDeleteUtility from './CrudDeleteUtility';
import CrudModalField from './CrudModalField';


var reactMaps = {

    "Agreement": {

        init: CrudDetail,
        props: {

            options: {

                label: "Szczegóły umowy",
                getUrl: "/api/crud/read/agreement",
                entity: "agreement"

            },

            fields: [

                { name: "Numer pożyczki", assoc: "number", init: CrudTextField },
                { name: "Pożyczkobiorca", assoc: "borrower", init: CrudLinkField, options: { url: "/pozyczkobiorcy" } },
                { name: "Firma", assoc: "company", init: CrudLinkField, options: { url: "/firmy" } },
                { name: "Nieruchomości", assoc: "properties", init: CrudMultiField, options: { url: "/nieruchomosci"} },
                { name: "Kwota", assoc: "amount", init: CrudMoneyField },
                { name: "Prowizja", assoc: "commission", init: CrudMoneyField },
                { name: "Prowizja %", assoc: "commissionPercent", init: CrudPercentField },
                { name: "Prowizja płatna z góry", assoc: "commissionFromTop", init: CrudBooleanField },
                { name: "Odsetki", assoc: "interest", init: CrudMoneyField },
                { name: "Odsetki %", assoc: "interestPercent", init: CrudPercentField },
                { name: "Odsetki płatne z góry", assoc: "interestFromTop", init: CrudBooleanField },
                { name: "Zawarta dnia", assoc: "concludedAt", init: CrudTextField },
                { name: "Zawarta przez", assoc: "agreementConcludedBy", init: CrudTextField },
                { name: "Data końcowa", assoc: "endsAt", init: CrudTextField },
                { name: "Wysokość hipotek", assoc: "mortgageValue", init: CrudMoneyField },
                { name: "Ltv", assoc: "ltv", init: CrudPercentField },
                { name: "Dodatkowe poręczenia", assoc: "guarantees", init: CrudTextField },
                { name: "Numer hipoteki", assoc: "mortgageNumber", init: CrudTextField },
                { name: "Wpisy do hipoteki", assoc: "mortgageEntries", init: CrudTextField },
                { name: "Udzielona z", assoc: "agreementGrantedFrom", init: CrudTextField },
                { name: "Aneksy", assoc: "annexes", init: CrudMultiField, options: { url: "/aneksy" } },
                { name: "Zdarzenia", assoc: "events", init: CrudMultiField, options: { url: "/zdarzenia" } },
            ],

            utilities: {

                top: [
                    { init: CrudRefreshUtility, map: "refresh" },
                    { init: CrudLinkUtility, name: "utwórz aneks", map: "annex", url: "/stworz/aneks" },
                    { init: CrudAjaxUtility, name: "usuń", nameLoading: "usuwam", map: "delete", postUrl: "/api/crud/delete/agreement" },
                    { init: CrudLinkUtility, name: "edytuj", map: "edit", url: "/edytuj/umowa" },
                    { init: CrudLinkUtility, name: "zobacz wszystkie", map: "showAll", url: "/umowy" },
                ],

            }

        }

    },
    "Annex": {

        init: CrudDetail,
        props: {

            options: {

                label: "Szczegóły aneksu",
                getUrl: "/api/crud/read/annex"

            },

            fields: [

                { name: "Data zawarcia", assoc: "concludedAt", init: CrudTextField },
                { name: "Data końca", assoc: "endsAt", init: CrudTextField },
                { name: "Numer aneksu", assoc: "number", init: CrudTextField },
                { name: "Pożyczkobiorca", assoc: "borrower", init: CrudLinkField, options: { url: "/pozyczkobiorcy" } },
                { name: "Kwota pożyczki", assoc: "amount", init: CrudMoneyField },
                { name: "Odsetki z góry", assoc: "interestFromTop", init: CrudBooleanField },
                { name: "Wysokość odsetek %", assoc: "interestPercent", init: CrudPercentField },
                { name: "Wysokość odsetek", assoc: "interest", init: CrudMoneyField },
                { name: "Prowizja z góry", assoc: "commissionFromTop", init: CrudBooleanField },
                { name: "Wysokość prowizji %", assoc: "commissionPercent", init: CrudPercentField },
                { name: "Wysokość prowizji", assoc: "commission", init: CrudMoneyField },

            ],

            utilities: {

                top: [
                    { init: CrudRefreshUtility, map: "refresh" },
                    { init: CrudAjaxUtility, name: "usuń", nameLoading: "usuwam", map: "delete", postUrl: "/api/crud/delete/annex" },
                    { init: CrudLinkUtility, name: "edytuj", map: "edit", url: "/edytuj/aneks" },
                    { init: CrudLinkUtility, name: "zobacz wszystkie", map: "showAll", url: "/aneksy" },
                ]

            }

        }

    },
    "DebitNote": {

        init: CrudDetail,
        props: {

            options: {

                label: "Szczegóły noty obciążeniowej",
                getUrl: "/api/crud/read/debitNote",
                entity: "debitNote"

            },

            fields: [

                { name: "Numer", assoc: "number", init: CrudTextField },
                { name: "Kwota", assoc: "amount", init: CrudMoneyField },
                { name: "Wydano", assoc: "issuedAt", init: CrudTextField },
                { name: "Notatki", assoc: "notes", init: CrudTextField },
                { name: "Konto bankowe", assoc: "bankAccount", init: CrudTextField },
                { name: "Umowa", assoc: "agreement", init: CrudLinkField, options: { url: "/umowy" } },
                { name: "Aneks", assoc: "annex", init: CrudLinkField, options: { url: "/aneksy" } },
                { name: "Firma", assoc: "company", init: CrudLinkField, options: { url: "/firmy" } },
                { name: "Wynika z", assoc: "resultsFrom", init: CrudTextField },

            ],

            utilities: {

                top: [
                    { init: CrudRefreshUtility, map: "refresh" },
                    { init: CrudDeleteUtility, map: "delete" },
                    { init: CrudLinkUtility, name: "edytuj", map: "edit", url: "/edytuj/nota-obciazeniowa" },
                    { init: CrudLinkUtility, name: "zobacz wszystkie", map: "showAll", url: "/noty-obciazeniowe" },
                ]

            }

        }

    },
    "InterestNote": {

        init: CrudDetail,
        props: {

            options: {

                label: "Szczegóły noty odsetkowej",
                getUrl: "/api/crud/read/interestNote"

            },

            fields: [

                { name: "Numer", assoc: "number", init: CrudTextField },
                { name: "Kwota", assoc: "amount", init: CrudMoneyField },
                { name: "Wydano", assoc: "issuedAt", init: CrudTextField },
                { name: "Notatki", assoc: "notes", init: CrudTextField },
                { name: "Konto bankowe", assoc: "bankAccount", init: CrudTextField },
                { name: "Umowa", assoc: "agreement", init: CrudLinkField, options: { url: "/umowy" } },
                { name: "Aneks", assoc: "annex", init: CrudLinkField, options: { url: "/aneksy" } },
                { name: "Firma", assoc: "company", init: CrudLinkField, options: { url: "/firmy" } },
                { name: "Wynika z", assoc: "resultsFrom", init: CrudTextField },


            ],

            utilities: {

                top: [
                    { init: CrudRefreshUtility, map: "refresh" },
                    { init: CrudAjaxUtility, name: "usuń", nameLoading: "usuwam", map: "delete", postUrl: "/api/crud/delete/interestNote" },
                    { init: CrudLinkUtility, name: "edytuj", map: "edit", url: "/edytuj/nota-odsetkowa" },
                    { init: CrudLinkUtility, name: "zobacz wszystkie", map: "showAll", url: "/noty-odsetkowe" },
                ]

            }

        }

    },
    "Agreements": {

        init: CrudTable,
        props: {

            options: {

                label: "Wszystkie umowy",
                gotoUrl: "/umowy",
                entity: "agreement",
                header: true,
                footer: true,
                filters: true

            },

            filterSets: [

                {
                    name: "Spłacone",
                    dataFilters: {

                        equals: {
                            status: 1
                        }

                    }

                },
                {
                    name: "Nie spłacone",
                    dataFilters: {

                        equals: {
                            status: 2
                        }

                    }

                },

            ],

            fields: [

                { name: "Pożyczkobiorca", assoc: "borrower", init: CrudLinkField, options: { url: "/pozyczkobiorcy" }, filter: { init: CrudTextFilter },sort: true },
                { name: "Zawarta dnia", assoc: "concludedAt", init: CrudTextField, filter: { init: CrudTextFilter },sort: true },
                { name: "Numer pożyczki", assoc: "number", init: CrudTextField, filter: { init: CrudTextFilter },sort: true},
                { name: "Data spłaty", assoc: "totalEndsAt", init: CrudTextField, filter: { init: CrudTextFilter },sort: true },
                { name: "Kwota pożyczki", assoc: "amount", init: CrudMoneyField, filter: { init: CrudTextFilter },sort: true },
                { name: "Zdarzenia", assoc: "events", init: CrudMultiField, options: { url: "/zdarzenia" } },
                { name: "Status", assoc: "status", init: CrudTextField, filter: { init: CrudTextFilter },sort: true },

            ],

            utilities: {

                top: [
                    { init: CrudRefreshUtility, map: "refresh" },
                    { init: CrudClearFiltersUtility, map: "clearFilters" },
                    { init: CrudLinkUtility, name: "utwórz umowę", map: "create", url: "/stworz/umowa" },
                ],

                bottom: [
                    { init: CrudGoUtility, map: "detail", options: { slug: "/umowy" } },
                ],



            }

        }

    },
    "Properties": {

        init: CrudTable,
        props: {

            options: {

                label: "Wszystkie nieruchomości",
                gotoUrl: "/nieruchomosci",
                entity: "property",                
                header: true,
                footer: true,
                filters: true

            },

            filterSets: [],

            fields: [

                { name: "Umowa", assoc: "agreement", init: CrudLinkField, options: { url: "/umowy" }, filter: { init: CrudTextFilter }, sort: true },
                { name: "Wartość", assoc: "value", init: CrudMoneyField, filter: { init: CrudTextFilter }, sort: true },
                { name: "Lokalizacja", assoc: "location", init: CrudTextField, filter: { init: CrudTextFilter }, sort: true },
                { name: "Rodzaj", assoc: "type", init: CrudTextField, filter: { init: CrudTextFilter }, sort: true },


            ],

            utilities: {

                top: [
                    { init: CrudRefreshUtility, map: "refresh" },
                    { init: CrudClearFiltersUtility, map: "clearFilters" },
                    { init: CrudLinkUtility, name: "utwórz nieruchomość", map: "create", url: "/stworz/nieruchomosc" },
                ],

                bottom: [

                    { init: CrudGoUtility, map: "edit", options: { slug: "/edytuj/nieruchomosc" } },

                ],



            }

        }

    },
    "Payments": {

        init: CrudTable,
        props: {

            options: {

                label: "Wszystkie płatności",
                gotoUrl: "/platnosci",
                entity: "payment",
                header: true,
                footer: true,
                filters: true

            },

            filterSets: [],

            fields: [

                { name: "Kwota", assoc: "amount", init: CrudMoneyField,sort: true, filter: { init: CrudTextFilter } },
                { name: "Pozostało", assoc: "amountLeft", init: CrudMoneyField,sort: true, filter: { init: CrudTextFilter } },
                { name: "Umowa", assoc: "agreement", init: CrudLinkField, options: { url: "/umowy" },sort: true, filter: { init: CrudTextFilter } },
                { name: "Aneks", assoc: "annex", init: CrudLinkField, options: { url: "/aneksy" },sort: true, filter: { init: CrudTextFilter } },
                { name: "Nota obciążeniowa", assoc: "debitNote", init: CrudLinkField, options: { url: "/noty-obciazeniowe" },sort: true, filter: { init: CrudTextFilter } },
                { name: "Nota odsetkowa", assoc: "interestNote", init: CrudLinkField, options: { url: "/noty-odsetkowe" },sort: true, filter: { init: CrudTextFilter } },
                { name: "Harmonogram", assoc: "schedule", init: CrudLinkField, options: { url: "/harmonogramy" },sort: true, filter: { init: CrudTextFilter } },
                { name: "Opis", assoc: "description", init: CrudTextField,sort: true, filter: { init: CrudTextFilter } },
                { name: "Data wymagalności", assoc: "dueTo", init: CrudTextField,sort: true, filter: { init: CrudTextFilter } },

            ],

            utilities: {

                top: [
                    { init: CrudRefreshUtility, map: "refresh" },
                    { init: CrudClearFiltersUtility, map: "clearFilters" },
                ],

                bottom: [
                    { init: CrudRepayUtility, map: "repay" },
                ],



            }

        }

    },
    "Repayments": {

        init: CrudTable,
        props: {

            options: {

                label: "Wszystkie rozliczenia",
                gotoUrl: "/rozliczenia",
                entity: "repayment",
                header: true,
                footer: true,
                filters: true

            },

            filterSets: [],

            fields: [

                { name: "Płatność", assoc: "payment", init: CrudLinkField, options: { url: "/platnosci" }, filter: { init: CrudTextFilter },sort:true  },
                { name: "Utworzona", assoc: "createdAt", init: CrudTextField, filter: { init: CrudTextFilter },sort:true },
                { name: "Kwota", assoc: "amount", init: CrudMoneyField, filter: { init: CrudTextFilter },sort:true  },
                { name: "Opis", assoc: "description", init: CrudTextField, filter: { init: CrudTextFilter },sort:true  },

            ],

            utilities: {

                top: [
                    { init: CrudRefreshUtility, map: "refresh" },
                    { init: CrudClearFiltersUtility, map: "clearFilters" },
                ],

                bottom: [],



            }

        }

    },
    "Terms": {

        init: CrudTable,
        props: {

            options: {

                label: "Wszystkie terminy",
                gotoUrl: "/terminy",
                entity: "term",
                header: true,
                footer: true,
                filters: true

            },

            filterSets: [],

            fields: [

                { name: "Powiązana umowa", assoc: "agreement", init: CrudLinkField, options: { url: "/umowy" },sort:true,filter: { init: CrudTextFilter }  },
                { name: "Utworzono dnia", assoc: "happenedAt", init: CrudTextField,sort:true,filter: { init: CrudTextFilter }  },
                { name: "Kwota", assoc: "amount", init: CrudMoneyField,sort:true,filter: { init: CrudTextFilter }  },
                { name: "Część odsetkowa", assoc: "interest", init: CrudMoneyField,sort:true,filter: { init: CrudTextFilter }  },
                { name: "Część kapitałowa", assoc: "capital", init: CrudMoneyField,sort:true,filter: { init: CrudTextFilter }  },



            ],

            utilities: {

                top: [
                    { init: CrudRefreshUtility, map: "refresh" },
                    { init: CrudClearFiltersUtility, map: "clearFilters" },
                    { init: CrudLinkUtility, name: "utwórz termin", map: "create", url: "/stworz/termin" },
                ],

                bottom: [
                    { init: CrudGoUtility, map: "detail", options: { slug: "/terminy" } },

                ],

            }

        }

    },
    "Events": {

        init: CrudTable,
        props: {

            options: {

                label: "Wszystkie zdarzenia",
                gotoUrl: "/zdarzenia",
                entity: "event",
                header: true,
                footer: true,
                filters: true

            },

            filterSets: [],

            fields: [

                { name: "Termin ostateczny", assoc: "occuredAt", init: CrudTextField,filter: { init: CrudTextFilter }, sort:true },
                { name: "Tytuł", assoc: "name", init: CrudTextField,filter: { init: CrudTextFilter }, sort:true },
                { name: "Opis", assoc: "description", init: CrudTextField,filter: { init: CrudTextFilter }, sort:true },
                { name: "Umowa", assoc: "agreement", init: CrudLinkField, options: { url: "/umowy" },filter: { init: CrudTextFilter }, sort:true },
                { name: "Pożyczkobiorca", assoc: "borrower", init: CrudLinkField, options: { url: "/pozyczkobiorcy" },filter: { init: CrudTextFilter }, sort:true },
                { name: "Wykonano", assoc: "isExecuted", init: CrudBooleanField,filter: { init: CrudTextFilter }, sort:true },

            ],

            utilities: {

                top: [
                    { init: CrudRefreshUtility, map: "refresh" },
                    { init: CrudClearFiltersUtility, map: "clearFilters" }
                ],

                bottom: [
                    { init: CrudGoUtility, map: "detail", options: { slug: "/zdarzenia" } },
                ],

            }

        }

    },
    "Notes": {

        init: CrudTable,
        props: {

            options: {

                label: "Wszystkie notatki",
                gotoUrl: "/notatki",
                entity: "note",
                header: true,
                footer: true,
                filters: true

            },

            filterSets: [],

            fields: [

                { name: "Tytuł", assoc: "title", init: CrudTextField, filter: { init: CrudTextFilter }, sort: true },
                { name: "Opis", assoc: "description", init: CrudModalField, filter: { init: CrudTextFilter }, sort: true },
                { name: "Utworzono", assoc: "createdAt", init: CrudTextField, filter: { init: CrudTextFilter }, sort: true },
                { name: "Umowa", assoc: "agreement", init: CrudLinkField, options: { url: "/umowy" }, filter: { init: CrudTextFilter }, sort: true },
                { name: "Stworzona przez", assoc: "user", init: CrudTextField, filter: { init: CrudTextFilter }, sort: true },
                { name: "Zdarzenie", assoc: "event", init: CrudLinkField, options: { url: "/zdarzenia" }, filter: { init: CrudTextFilter }, sort: true },

            ],

            utilities: {

                top: [

                    { init: CrudSettingsUtility, map: "settings" },
                    { init: CrudRefreshUtility, map: "refresh" },
                    { init: CrudClearFiltersUtility, map: "clearFilters" },
                    { init: CrudLinkUtility, name: "utwórz notatkę", map: "create", url: "/stworz/notatka" },
                ],

                bottom: [

                    { init: CrudGoUtility, map: "edit", options: { slug: "/edytuj/notatka" } }

                ],

            }

        }

    },
    "DebitNotes": {

        init: CrudTable,
        props: {

            options: {

                label: "Wszystkie noty obciążeniowe",
                gotoUrl: "/noty-obciazeniowe",
                entity: "debitNote",
                header: true,
                footer: true,
                filters: true

            },

            filterSets: [],

            fields: [

                { name: "Numer", assoc: "number", init: CrudTextField, filter: { init: CrudTextFilter },sort: true },
                { name: "Kwota", assoc: "amount", init: CrudMoneyField, filter: { init: CrudTextFilter },sort: true },
                { name: "Wydano", assoc: "issuedAt", init: CrudTextField, filter: { init: CrudTextFilter },sort: true },
                { name: "Notatki", assoc: "notes", init: CrudTextField, filter: { init: CrudTextFilter },sort: true },
                { name: "Konto bankowe", assoc: "bankAccount", init: CrudTextField, filter: { init: CrudTextFilter },sort: true },
                { name: "Umowa", assoc: "agreement", init: CrudLinkField, options: { url: "/umowy" }, filter: { init: CrudTextFilter },sort: true },
                { name: "Aneks", assoc: "annex", init: CrudLinkField, options: { url: "/aneksy" }, filter: { init: CrudTextFilter },sort: true },
                { name: "Firma", assoc: "company", init: CrudLinkField, options: { url: "/firmy" }, filter: { init: CrudTextFilter },sort: true },
                { name: "Wynika z", assoc: "resultsFrom", init: CrudTextField, filter: { init: CrudTextFilter },sort: true },
                { name: "Składowe", assoc: "noteItems", init: CrudMultiField },


            ],

            utilities: {

                top: [
                    { init: CrudRefreshUtility, map: "refresh" },
                    { init: CrudClearFiltersUtility, map: "clearFilters" },
                    { init: CrudLinkUtility, name: "utwórz notę", map: "create", url: "/stworz/nota-obciazeniowa" },
                ],

                bottom: [

                    { init: CrudGoUtility, map: "detail", options: { slug: "/noty-obciazeniowe" } },

                ],

            }

        }

    },
    "InterestNotes": {

        init: CrudTable,
        props: {

            options: {

                label: "Wszystkie noty odsetkowe",
                gotoUrl: "/noty-odsetkowe",
                entity: "interestNote",
                header: true,
                footer: true,
                filters: true

            },

            filterSets: [],

            fields: [

                { name: "Numer", assoc: "number", init: CrudTextField, filter: { init: CrudTextFilter },sort: true },
                { name: "Kwota", assoc: "amount", init: CrudMoneyField, filter: { init: CrudTextFilter },sort: true },
                { name: "Wydano", assoc: "issuedAt", init: CrudTextField, filter: { init: CrudTextFilter },sort: true },
                { name: "Notatki", assoc: "notes", init: CrudTextField, filter: { init: CrudTextFilter },sort: true },
                { name: "Konto bankowe", assoc: "bankAccount", init: CrudTextField, filter: { init: CrudTextFilter },sort: true },
                { name: "Umowa", assoc: "agreement", init: CrudLinkField, options: { url: "/umowy" }, filter: { init: CrudTextFilter },sort: true },
                { name: "Aneks", assoc: "annex", init: CrudLinkField, options: { url: "/aneksy" }, filter: { init: CrudTextFilter },sort: true },
                { name: "Firma", assoc: "company", init: CrudLinkField, options: { url: "/firmy" }, filter: { init: CrudTextFilter },sort: true },
                { name: "Wynika z", assoc: "resultsFrom", init: CrudTextField, filter: { init: CrudTextFilter },sort: true },
                { name: "Składowe", assoc: "noteItems", init: CrudMultiField },


            ],

            utilities: {

                top: [
                    { init: CrudRefreshUtility, map: "refresh" },
                    { init: CrudClearFiltersUtility, map: "clearFilters" },
                    { init: CrudLinkUtility, name: "utwórz notę", map: "create", url: "/stworz/nota-odsetkowa" },
                ],

                bottom: [

                    { init: CrudGoUtility, map: "detail", options: { slug: "/noty-odsetkowe" } },

                ],

            }

        }

    },
    "Schedule": {

        init: CrudTable,
        props: {

            options: {

                label: "Wszystkie rozrachunki",
                gotoUrl: "/rozrachunki",
                entity: "schedule",
                header: true,
                footer: true,
                filters: true

            },

            filterSets: [],

            fields: [

                { name: "Data", assoc: "paidAt", init: CrudTextField,sort: true, filter: { init: CrudTextFilter } },
                { name: "Kwota kapitałowa", assoc: "amountOfCapital", init: CrudMoneyField,sort: true, filter: { init: CrudTextFilter } },
                { name: "Kwota odsetkowa", assoc: "amountOfInterest", init: CrudMoneyField,sort: true, filter: { init: CrudTextFilter } },
                { name: "Umowa", assoc: "agreement", init: CrudLinkField, options: { url: "/umowy" },sort: true, filter: { init: CrudTextFilter }},


            ],

            utilities: {

                top: [

                    { init: CrudRefreshUtility, map: "refresh" },
                    { init: CrudClearFiltersUtility, map: "clearFilters" }

                ]

            }

        }

    },
    "DashboardEvents": {

        init: CrudTable,
        props: {

            options: {

                label: "Twoje nadchodzące zdarzenia",
                gotoUrl: "/zdarzenia",
                entity: "event",
                header: true,
                footer: true

            },

            filterSets: [],

            fields: [

                { name: "Termin ostateczny", assoc: "occuredAt", init: CrudTextField, sort: true, filter: { init: CrudTextFilter } },
                { name: "Tytuł", assoc: "name", init: CrudTextField, sort: true, filter: { init: CrudTextFilter } },
                { name: "Wykonano", assoc: "isExecuted", init: CrudBooleanField, sort: true, filter: { init: CrudTextFilter } },
                { name: "Przypisano", assoc: "user", init: CrudTextField, sort: true, filter: { init: CrudTextFilter } }

            ],

            utilities: {

                top: [
                    { init: CrudRefreshUtility, map: "refresh" },
                ],
                bottom: [
                    { init: CrudGoUtility, map: "detail", options: { slug: "/zdarzenia" } },
                ],

            }

        }

    },
    "DashboardPayments": {

        init: CrudTable,
        props: {

            options: {

                label: "Nadchodzące płatności",
                gotoUrl: "/platnosci",
                entity: "payment",
                header: true,
                footer: true,
                filters: true

            },

            filterSets: [],

            fields: [

                { name: "Kwota", assoc: "amount", init: CrudMoneyField,sort: true, filter: { init: CrudTextFilter } },
                { name: "Umowa", assoc: "agreement", init: CrudLinkField, options: { url: "/umowy" },sort: true, filter: { init: CrudTextFilter } },
                { name: "Aneks", assoc: "annex", init: CrudLinkField, options: { url: "/aneksy" },sort: true, filter: { init: CrudTextFilter } },
                { name: "Termin wymagalności", assoc: "dueTo", init: CrudTextField,sort: true, filter: { init: CrudTextFilter } },

            ],

            utilities: {

                top: [
                    { init: CrudRefreshUtility, map: "refresh" },
                    { init: CrudClearFiltersUtility, map: "clearFilters" },
                ],

                bottom: [],



            }

        }

    },
    "AgreementEvents": {

        init: CrudTable,
        props: {

            options: {

                label: "Zdarzenia tej umowy",
                gotoUrl: "/zdarzenia",
                entity: "event",
                header: true,
                footer: true

            },

            filterSets: [],

            fields: [

                { name: "Termin ostateczny", assoc: "occuredAt", init: CrudTextField, sort: true, filter: { init: CrudTextFilter } },
                { name: "Tytuł", assoc: "name", init: CrudTextField, sort: true, filter: { init: CrudTextFilter } },
                { name: "Opis", assoc: "description", init: CrudModalField, sort: true, filter: { init: CrudTextFilter } },
                { name: "Wykonano", assoc: "isExecuted", init: CrudBooleanField, sort: true, filter: { init: CrudTextFilter } }

            ],

            utilities: {

                top: [
                    { init: CrudRefreshUtility, map: "refresh" },
                ],
                bottom: [
                    { init: CrudGoUtility, map: "detail", options: { slug: "/zdarzenia" } },
                ],

            }

        }

    },
    "AgreementSchedules": {

        init: CrudTable,
        props: {

            options: {

                label: "Harmonogramy tej umowy",
                gotoUrl: "/harmonogram",
                entity: "schedule",
                header: true,
                footer: true,
                filters: false,
                small: true

            },

            filterSets: [],

            fields: [

                { name: "Data płatności", assoc: "date", init: CrudTextField, filter: { init: CrudTextFilter }, sort:true },
                { name: "Kwota kapitałowa", assoc: "amountOfCapital", init: CrudMoneyField, filter: { init: CrudTextFilter }, sort:true },
                { name: "Kwota odestkowa", assoc: "amountOfInterest", init: CrudMoneyField, filter: { init: CrudTextFilter }, sort:true },

            ],

            utilities: {

                top: [
                    { init: CrudRefreshUtility, map: "refresh" },
                ],
                bottom: [

                    { init: CrudGoUtility, map: "detail", options: { slug: "/harmonogramy" } },

                ],

            }

        }

    },
    "DebitNoteNoteItems": {

        init: CrudTable,
        props: {

            options: {

                label: "Składowe tej noty",
                gotoUrl: "/harmonogram",
                entity: "noteItem",
                header: true,
                footer: true,
                filters: false,
                small: true

            },

            filterSets: [],

            fields: [

                { name: "Nazwa", assoc: "name", init: CrudTextField, filter: { init: CrudTextFilter }, sort:true },
                { name: "Kwota", assoc: "amount", init: CrudMoneyField, filter: { init: CrudTextFilter }, sort:true },

            ],

            utilities: {

                top: [
                    { init: CrudRefreshUtility, map: "refresh" },
                ],
                bottom: [

                    { init: CrudDeleteUtility, map: "delete" }

                ],

            }

        }

    },
    "InterestNoteNoteItems": {

        init: CrudTable,
        props: {

            options: {

                label: "Składowe tej noty",
                gotoUrl: "/harmonogram",
                entity: "noteItem",
                header: true,
                footer: true,
                filters: false,
                small: true

            },

            filterSets: [],

            fields: [

                { name: "Nazwa", assoc: "name", init: CrudTextField, filter: { init: CrudTextFilter }, sort:true },
                { name: "Kwota", assoc: "amount", init: CrudMoneyField, filter: { init: CrudTextFilter }, sort:true },

            ],

            utilities: {

                top: [
                    { init: CrudRefreshUtility, map: "refresh" },
                ],
                bottom: [],

            }

        }

    },
    "AgreementDebitNotes": {

        init: CrudTable,
        props: {

            options: {

                label: "Noty obciążeniowe tej umowy",
                gotoUrl: "/noty-obciazeniowe",
                entity: "debitNote",
                header: true,
                footer: true,
                filters: false,
                small: true,

            },

            filterSets: [],

            fields: [

                { name: "Numer", assoc: "number", init: CrudTextField, sort: true,filter: { init: CrudTextFilter } },
                { name: "Kwota", assoc: "amount", init: CrudMoneyField, sort: true,filter: { init: CrudTextFilter } },

            ],

            utilities: {

                top: [
                    { init: CrudRefreshUtility, map: "refresh" }
                ],
                bottom: [

                    { init: CrudGoUtility, map: "detail", options: { slug: "/noty-obciazeniowe" } },

                ],

            }

        }

    },
    "AgreementInterestNotes": {

        init: CrudTable,
        props: {

            options: {

                label: "Noty odsetkowe tej umowy",
                gotoUrl: "/noty-obciazeniowe",
                entity: "interestNote",
                header: true,
                footer: true,
                filters: false,
                small: true,

            },

            filterSets: [],

            fields: [

                { name: "Numer", assoc: "number", init: CrudTextField, sort: true,filter: { init: CrudTextFilter } },
                { name: "Kwota", assoc: "amount", init: CrudMoneyField, sort: true,filter: { init: CrudTextFilter } },

            ],

            utilities: {

                top: [
                    { init: CrudRefreshUtility, map: "refresh" }
                ],
                bottom: [

                    { init: CrudGoUtility, map: "detail", options: { slug: "/noty-odsetkowe" } },

                ],

            }

        }

    },
    "firmyWiele": {

        init: CrudTable,
        props: {

            options: {

                label: "Wszystkie firmy",
                gotoUrl: "/firmy",
                entity: "company",
                header: true,
                footer: true,
                filters: true

            },

            filterSets: [],

            fields: [

                { name: "Pożyczkobiorcy", assoc: "borrowers", init: CrudMultiField, options: { url: "/pozyczkobiorcy" }},
                { name: "Nazwa", assoc: "name", init: CrudTextField,filter: { init: CrudTextFilter }, sort:true },
                { name: "Nip", assoc: "nip", init: CrudTextField,filter: { init: CrudTextFilter }, sort:true },
                { name: "Krs", assoc: "krs", init: CrudTextField,filter: { init: CrudTextFilter }, sort:true },
                { name: "Regon", assoc: "regon", init: CrudTextField,filter: { init: CrudTextFilter }, sort:true },
                { name: "Adres", assoc: "address", init: CrudTextField,filter: { init: CrudTextFilter }, sort:true },
                { name: "Kod pocztowy", assoc: "postal", init: CrudTextField,filter: { init: CrudTextFilter }, sort:true },
                { name: "Miejscowość", assoc: "city", init: CrudTextField,filter: { init: CrudTextFilter }, sort:true }


            ],

            utilities: {

                top: [
                    { init: CrudRefreshUtility, map: "refresh" },
                    { init: CrudClearFiltersUtility, map: "clearFilters" },
                    { init: CrudLinkUtility, name: "utwórz firmę", map: "create", url: "/stworz/firma" }
                ],
                bottom: [
                    { init: CrudGoUtility, map: "detail", options: { slug: "/firmy" } },
                ],

            }

        }

    },
    "Annexes": {

        init: CrudTable,
        props: {

            options: {

                label: "Wszystkie aneksy",
                gotoUrl: "/aneksy",
                entity: "annex",
                header: true,
                footer: true,
                filters: true

            },

            filterSets: [],

            fields: [

                { name: "Data zawarcia", assoc: "concludedAt", init: CrudTextField, filter: { init: CrudTextFilter }, sort: true },
                { name: "Numer aneksu", assoc: "number", init: CrudTextField, filter: { init: CrudTextFilter }, sort: true },
                { name: "Pożyczkobiorca", assoc: "borrower", init: CrudLinkField, options: { url: "/pozyczkobiorcy" }, filter: { init: CrudTextFilter }, sort: true },
                { name: "Kwota pożyczki", assoc: "amount", init: CrudMoneyField, filter: { init: CrudTextFilter }, sort: true },
                { name: "Odsetki z góry", assoc: "interestFromTop", init: CrudBooleanField, filter: { init: CrudTextFilter }, sort: true },
                { name: "Wysokość odsetek %", assoc: "interestPercent", init: CrudPercentField, filter: { init: CrudTextFilter }, sort: true },
                { name: "Wysokość odsetek", assoc: "interest", init: CrudMoneyField, filter: { init: CrudTextFilter }, sort: true },
                { name: "Wysokość prowizji %", assoc: "commissionPercent", init: CrudPercentField, filter: { init: CrudTextFilter }, sort: true },
                { name: "Wysokość prowizji", assoc: "commission", init: CrudMoneyField, filter: { init: CrudTextFilter }, sort: true },



            ],

            utilities: {

                top: [
                    { init: CrudRefreshUtility, map: "refresh" },
                    { init: CrudClearFiltersUtility, map: "clearFilters" },
                    { init: CrudLinkUtility, name: "utwórz aneks", map: "create", url: "/stworz/aneks" },
                ],
                bottom: [
                    { init: CrudGoUtility, map: "detail", options: { slug: "/aneksy" } },
                ],

            }

        }

    },
    "pozyczkobiorcyJedna": {

        init: CrudDetail,
        props: {

            options: {

                label: "Szczegóły pożyczkobiorcy",
                getUrl: "/api/crud/read/borrower",
                entity: "borrower"

            },

            fields: [

                { name: "Imię", assoc: "name", init: CrudTextField },
                { name: "Nazwisko", assoc: "surname", init: CrudTextField },
                { name: "Umowy", assoc: "agreements", init: CrudMultiField, options: { url: "/umowy" } },
                { name: "Firmy", assoc: "company", init: CrudMultiField, options: { url: "/firmy" } },
                { name: "Pesel", assoc: "pesel", init: CrudTextField },


            ],

            utilities: {

                top: [
                    { init: CrudRefreshUtility, map: "refresh" },
                    { init: CrudAjaxUtility, name: "usuń", nameLoading: "usuwam", map: "delete", postUrl: "/api/crud/delete/borrower" },
                    { init: CrudLinkUtility, name: "edytuj", map: "edit", url: "/edytuj/pozyczkobiorca" },
                    { init: CrudLinkUtility, name: "zobacz wszystkich", map: "showAll", url: "/pozyczkobiorcy" },
                ]

            }

        }

    },
    "Event": {

        init: CrudDetail,
        props: {

            options: {

                label: "Zdarzenie",
                getUrl: "/api/crud/read/event",
                entity: "event"

            },

            fields: [

                { name: "Termin ostateczny", assoc: "occuredAt", init: CrudTextField },
                { name: "Tytuł", assoc: "name", init: CrudTextField },
                { name: "Opis", assoc: "description", init: CrudTextField },
                { name: "Umowa", assoc: "agreement", init: CrudLinkField, options: { url: "/umowy" } },
                { name: "Odnotowano przez", assoc: "user", init: CrudTextField },
                { name: "Termin dodania", assoc: "addedAt", init: CrudTextField },
                { name: "Termin wykonania", assoc: "executedAt", init: CrudTextField },
                { name: "Wykonano", assoc: "isExecuted", init: CrudBooleanField },

            ],

            utilities: {

                top: [
                    { init: CrudRefreshUtility, map: "refresh" },
                    { init: CrudAjaxUtility, name: "usuń", nameLoading: "usuwam", map: "delete", postUrl: "/api/crud/delete/event" },
                    { init: CrudLinkUtility, name: "edytuj", map: "edit", url: "/edytuj/zdarzenie" },
                    { init: CrudLinkUtility, name: "zobacz wszystkie", map: "showAll", url: "/zdarzenia" },
                ]

            }

            //Zostało wykonane

        }

    },
    "EventNotes": {

        init: CrudTable,
        props: {

            options: {

                label: "Wszystkie notatki",
                gotoUrl: "/notatki",
                entity: "note",
                header: true,
                footer: true,
                filters: false,
                small: true

            },

            filterSets: [],

            fields: [

                { name: "Tytuł", assoc: "title", init: CrudTextField, filter: { init: CrudTextFilter }, sort: true },
                { name: "Opis", assoc: "description", init: CrudModalField, filter: { init: CrudTextFilter }, sort: true },
                { name: "Utworzono", assoc: "createdAt", init: CrudTextField, filter: { init: CrudTextFilter }, sort: true },
                { name: "Umowa", assoc: "agreement", init: CrudLinkField, options: { url: "/umowy" }, filter: { init: CrudTextFilter }, sort: true },
                { name: "Stworzona przez", assoc: "user", init: CrudTextField, filter: { init: CrudTextFilter }, sort: true },

            ],

            utilities: {

                top: [

                    { init: CrudRefreshUtility, map: "refresh" },
                ],

                bottom: [

                    { init: CrudGoUtility, map: "edit", options: { slug: "/edytuj/notatka" } }

                ],

            }

        }

    },
    "EventCreateNote": {

        init: CrudCreate,
        props: {

            options: {

                label: "Nowa notatka",

            },

            fields: [

                { name: "Tytuł", assoc: "title", init: CrudTextEdit, options: { nulalble: false } },
                { name: "Opis", assoc: "description", init: CrudTextEdit, options: { nulalble: false } },
                { name: "Umowa", assoc: "agreement", init: CrudSelectEdit, options: { nullable: true, getUrl: "/api/crud/read/agreement", dataAssoc: "selectData" } },

            ],

            utilities: {

                top: [
                    { init: CrudButtonUtility, name: "przywróć", map: "restore" },
                    { init: CrudLinkUtility, name: "zobacz wszystkie", map: "showAll", url: "/notatki" },
                    { init: CrudAjaxUtility, name: "utwórz", nameLoading: "tworzę", map: "create", postUrl: "/api/crud/create/note" },
                ],

                bottom: []


            }

        }


    },
    "Term": {

        init: CrudDetail,
        props: {

            options: {

                label: "Ważny termin",
                getUrl: "/api/crud/read/term",
                entity: "term",

            },

            fields: [

                { name: "Powiązana umowa", assoc: "agreement", init: CrudLinkField, options: { url: "/umowy" } },
                { name: "Utworzono dnia", assoc: "happenedAt", init: CrudTextField },
                { name: "Kwota", assoc: "amount", init: CrudMoneyField },
                { name: "Część odsetkowa", assoc: "interest", init: CrudMoneyField },
                { name: "Część kapitałowa", assoc: "capital", init: CrudMoneyField },


            ],

            utilities: {

                top: [
                    { init: CrudRefreshUtility, map: "refresh" },
                    { init: CrudAjaxUtility, name: "usuń", nameLoading: "usuwam", map: "delete", postUrl: "/api/crud/delete/term" },
                    { init: CrudLinkUtility, name: "edytuj", map: "edit", url: "/edytuj/termin" },
                    { init: CrudLinkUtility, name: "zobacz wszystkie", map: "showAll", url: "/terminy" },
                ]

            }

        }

    },
    "firmyJedna": {

        init: CrudDetail,
        props: {

            options: {

                label: "Firma",
                getUrl: "/api/crud/read/company",
                entity: "company"

            },

            fields: [

                { name: "Nazwa", assoc: "name", init: CrudTextField },
                { name: "Nip", assoc: "nip", init: CrudTextField },
                { name: "Krs", assoc: "krs", init: CrudTextField },
                { name: "Regon", assoc: "regon", init: CrudTextField },
                { name: "Adres", assoc: "address", init: CrudTextField },
                { name: "Kod pocztowy", assoc: "postal", init: CrudTextField },
                { name: "Miejscowość", assoc: "city", init: CrudTextField },
                { name: "Pożyczkobiorcy", assoc: "borrowers", init: CrudMultiField, options: { url: "/pozyczkobiorcy" } }


            ],

            utilities: {

                top: [
                    { init: CrudRefreshUtility, map: "refresh" },
                    { init: CrudAjaxUtility, name: "usuń", nameLoading: "usuwam", map: "delete", postUrl: "/api/crud/delete/company" },
                    { init: CrudLinkUtility, name: "edytuj", map: "edit", url: "/edytuj/firma" },
                    { init: CrudLinkUtility, name: "zobacz wszystkie", map: "showAll", url: "/firmy" },
                ]

            }

        }

    },
    "pozyczkobiorcyWiele": {

        init: CrudTable,
        props: {

            options: {

                label: "Wszyscy pożyczkobiorcy",
                gotoUrl: "/pozyczkobiorcy",
                entity: "borrower",
                header: true,
                footer: true,
                filters: true

            },

            filterSets: [],

            fields: [

                { name: "Imię", assoc: "name", init: CrudTextField, sort:true,filter: { init: CrudTextFilter } },
                { name: "Nazwisko", assoc: "surname", init: CrudTextField, sort:true,filter: { init: CrudTextFilter } },
                { name: "Umowy", assoc: "agreements", init: CrudMultiField, options: { url: "/umowy" } },
                { name: "Firmy", assoc: "company", init: CrudMultiField, options: { url: "/firmy" } },
                { name: "Pesel", assoc: "pesel", init: CrudTextField, sort:true,filter: { init: CrudTextFilter } }

            ],

            utilities: {

                top: [
                    { init: CrudRefreshUtility, map: "refresh" },
                    { init: CrudClearFiltersUtility, map: "clearFilters" },
                    { init: CrudLinkUtility, name: "utwórz pożyczkobiorcę", map: "create", url: "/stworz/pozyczkobiorca" },
                ],
                bottom: [
                    { init: CrudGoUtility, map: "detail", options: { slug: "/pozyczkobiorcy" } },
                ],

            }

        }

    },
    "stworzUmowa": {

        init: CrudCreate,
        props: {

            options: {

                label: "Nowa umowa",
                redirectUrl: "/umowy"

            },

            fields: [

                { name: "Pożyczkobiorca", assoc: "borrower", init: CrudSelectEdit, options: { nullable: false, getUrl: "/api/crud/read/borrower", dataAssoc: "selectData" } },
                { name: "Firma", assoc: "company", init: CrudSelectEdit, options: { nullable: false, getUrl: "/api/crud/read/company", dataAssoc: "selectData" } },
                { name: "Kwota", assoc: "amount", init: CrudTextEdit, options: { nullable: false, tooltip: 'Wartość liczbowa' } },
                { name: "Prowizja", assoc: "commission", init: CrudTextEdit, options: { nullable: false, tooltip: 'Wartość liczbowa' } },
                { name: "Prowizja %", assoc: "commissionPercent", init: CrudTextEdit, options: { nullable: false, tooltip: 'Wartość liczbowa' } },
                { name: "Prowizja płatna z góry", assoc: "commissionFromTop", init: CrudBooleanEdit, options: { nullable: false } },
                { name: "Odsetki", assoc: "interest", init: CrudTextEdit, options: { nullable: false, tooltip: 'Wartość liczbowa' } },
                { name: "Odsetki %", assoc: "interestPercent", init: CrudTextEdit, options: { nullable: false, tooltip: 'Wartość liczbowa' } },
                { name: "Odsetki płatne z  góry", assoc: "interestFromTop", init: CrudBooleanEdit, options: { nullable: false } },
                { name: "Zawarta", assoc: "concludedAt", init: CrudDateEdit, options: { nullable: false } },
                { name: "Kończy się", assoc: "endsAt", init: CrudDateEdit, options: { nullable: false } },
                { name: "Wysokość hipotek", assoc: "mortgageValue", init: CrudTextEdit, options: { nullable: false, tooltip: 'Wartość liczbowa' } },
                { name: "Ltv", assoc: "ltv", init: CrudTextEdit, options: { nullable: false, tooltip: 'Wartość liczbowa' } },
                { name: "Dodatkowe poręczenia", assoc: "guarantees", init: CrudTextEdit, options: { nullable: false } },
                { name: "Numer hipoteki", assoc: "mortgageNumber", init: CrudTextEdit, options: { nullable: false } },
                { name: "Wpisy do hipoteki", assoc: "mortgageEntries", init: CrudTextEdit, options: { nullable: false } },
                { name: "Udzielona z", assoc: "agreementGrantedFrom", init: CrudSelectEdit, options: { nullable: false, getUrl: "/api/crud/read/agreementGrantedFrom" } },
                { name: "Zawarta przez", assoc: "agreementConcludedBy", init: CrudSelectEdit, options: { nullable: false, getUrl: "/api/crud/read/agreementConcludedBy" } },
                { name: "Status", assoc: "status", init: CrudSelectEdit, options: { nullable: false, getUrl: "/api/crud/read/status" } },
                { name: "Nieruchomość", assoc: "property", init: CrudSelectEdit, options: { nullable: false, getUrl: "/api/crud/read/property" } },

            ],

            utilities: {

                top: [
                    { init: CrudButtonUtility, name: "przywróć", map: "restore" },
                    { init: CrudLinkUtility, name: "zobacz wszystkie", map: "showAll", url: "/umowy" },
                    { init: CrudAjaxUtility, name: "utwórz", nameLoading: "tworzę", map: "create", postUrl: "/api/crud/create/agreement" },
                ]

            }

        }


    },
    "CreateAnnex": {

        init: CrudCreate,
        props: {

            options: {

                label: "Nowy aneks",
                redirectUrl: "/aneksy"

            },


            fields: [

                { name: "Umowa", assoc: "agreement", init: CrudSelectEdit, options: { nullable: false, getUrl: "/api/crud/read/agreement", dataAssoc: "selectData" } },
                { name: "Zawarty", assoc: "concludedAt", init: CrudDateEdit, options: { nullable: false } },
                { name: "Kończy się", assoc: "endsAt", init: CrudDateEdit, options: { nullable: false } },
                { name: "Pożyczkobiorca", assoc: "borrower", init: CrudSelectEdit, options: { nullable: false, getUrl: "/api/crud/read/borrower", dataAssoc: "selectData" } },
                { name: "Kwota pożyczki", assoc: "amount", init: CrudTextEdit, options: { nulalble: false } },
                { name: "Odsetki z góry", assoc: "interestFromTop", init: CrudBooleanEdit, options: { nulalble: false } },
                { name: "Wysokość odsetek %", assoc: "interestPercent", init: CrudTextEdit, options: { nulalble: false } },
                { name: "Wysokość odsetek", assoc: "interest", init: CrudTextEdit, options: { nulalble: false } },
                { name: "Prowizja z góry", assoc: "commissionFromTop", init: CrudBooleanEdit, options: { nulalble: false } },
                { name: "Wysokość prowizji %", assoc: "commissionPercent", init: CrudTextEdit, options: { nulalble: false } },
                { name: "Wysokość prowizji", assoc: "commission", init: CrudTextEdit, options: { nulalble: false } },
                { name: "Status", assoc: "status", init: CrudSelectEdit, options: { nullable: false, getUrl: "/api/crud/read/status" } },



            ],

            utilities: {

                top: [
                    { init: CrudButtonUtility, name: "przywróć", map: "restore" },
                    { init: CrudLinkUtility, name: "zobacz wszystkie", map: "showAll", url: "/aneksy" },
                    { init: CrudAjaxUtility, name: "utwórz", nameLoading: "tworzę", map: "create", postUrl: "/api/crud/create/annex" },
                ]


            }

        }


    },
    "CreateProperty": {

        init: CrudCreate,
        props: {

            options: {

                label: "Nowa nieruchomość",
                redirectUrl: "/nieruchomosci"

            },


            fields: [

                { name: "Umowa", assoc: "agreement", init: CrudSelectEdit, options: { nullable: true, getUrl: "/api/crud/read/agreement", dataAssoc: "selectData" } },
                { name: "Wartość", assoc: "value", init: CrudTextEdit, options: { nulalble: false } },
                { name: "Lokalizacja", assoc: "location", init: CrudTextEdit, options: { nulalble: false } },
                { name: "Rodzaj", assoc: "type", init: CrudTextEdit, options: { nulalble: false } },

            ],

            utilities: {

                top: [
                    { init: CrudButtonUtility, name: "przywróć", map: "restore" },
                    { init: CrudLinkUtility, name: "zobacz wszystkie", map: "showAll", url: "/nieruchomosci" },
                    { init: CrudAjaxUtility, name: "utwórz", nameLoading: "tworzę", map: "create", postUrl: "/api/crud/create/property" },
                ],

                bottom: []


            }

        }


    },
    "CreateNote": {

        init: CrudCreate,
        props: {

            options: {

                label: "Nowa notatka",
                redirectUrl: "/notatki",
                redirectToList: true

            },

            fields: [

                { name: "Tytuł", assoc: "title", init: CrudTextEdit, options: { nulalble: false } },
                { name: "Opis", assoc: "description", init: CrudTextEdit, options: { nulalble: false } },
                { name: "Umowa", assoc: "agreement", init: CrudSelectEdit, options: { nullable: true, getUrl: "/api/crud/read/agreement", dataAssoc: "selectData" } },
                { name: "Zdarzenie", assoc: "event", init: CrudSelectEdit, options: { nullable: true, getUrl: "/api/crud/read/event", dataAssoc: "selectData" } },

            ],

            utilities: {

                top: [
                    { init: CrudButtonUtility, name: "przywróć", map: "restore" },
                    { init: CrudLinkUtility, name: "zobacz wszystkie", map: "showAll", url: "/notatki" },
                    { init: CrudAjaxUtility, name: "utwórz", nameLoading: "tworzę", map: "create", postUrl: "/api/crud/create/note" },
                ],

                bottom: []


            }

        }


    },
    "CreateDebitNote": {

        init: CrudCreate,
        props: {

            options: {

                label: "Nowa nota obciążeniowa",
                redirectUrl: "/noty-obciazeniowe",
                redirectToList: false

            },

            fields: [

                { name: "Kwota", assoc: "amount", init: CrudTextEdit, options: { nulalble: false } },
                { name: "Notatka", assoc: "notes", init: CrudTextEdit, options: { nulalble: false } },
                { name: "Wynika z", assoc: "resultsFrom", init: CrudTextEdit, options: { nulalble: false } },
                { name: "Wydana dnia", assoc: "issuedAt", init: CrudDateEdit, options: { nulalble: false } },
                { name: "Konto bankowe", assoc: "bankAccount", init: CrudSelectEdit, options: { nullable: false, getUrl: "/api/crud/read/bankAccount", dataAssoc: "selectData" } },
                { name: "Umowa", assoc: "agreement", init: CrudSelectEdit, options: { nullable: true, getUrl: "/api/crud/read/agreement", dataAssoc: "selectData" } },
                { name: "Aneks", assoc: "annex", init: CrudSelectEdit, options: { nullable: true, getUrl: "/api/crud/read/annex", dataAssoc: "selectData" } },
                { name: "Firma", assoc: "company", init: CrudSelectEdit, options: { nullable: true, getUrl: "/api/crud/read/company", dataAssoc: "selectData" } },

            ],

            utilities: {

                top: [
                    { init: CrudButtonUtility, name: "przywróć", map: "restore" },
                    { init: CrudLinkUtility, name: "zobacz wszystkie", map: "showAll", url: "/noty-obciazeniowe" },
                    { init: CrudAjaxUtility, name: "utwórz", nameLoading: "tworzę", map: "create", postUrl: "/api/crud/create/debitNote" },
                ],

                bottom: []


            }

        }


    },
    "CreateInterestNote": {

        init: CrudCreate,
        props: {

            options: {

                label: "Nowa nota odsetkowa",
                redirectUrl: "/noty-odsetkowe",
                redirectToList: false

            },

            fields: [

                { name: "Kwota", assoc: "amount", init: CrudTextEdit, options: { nulalble: false } },
                { name: "Notatka", assoc: "notes", init: CrudTextEdit, options: { nulalble: false } },
                { name: "Wynika z", assoc: "resultsFrom", init: CrudTextEdit, options: { nulalble: false } },
                { name: "Wydana dnia", assoc: "issuedAt", init: CrudDateEdit, options: { nulalble: false } },
                { name: "Konto bankowe", assoc: "bankAccount", init: CrudSelectEdit, options: { nullable: false, getUrl: "/api/crud/read/bankAccount", dataAssoc: "selectData" } },
                { name: "Umowa", assoc: "agreement", init: CrudSelectEdit, options: { nullable: true, getUrl: "/api/crud/read/agreement", dataAssoc: "selectData" } },
                { name: "Aneks", assoc: "annex", init: CrudSelectEdit, options: { nullable: true, getUrl: "/api/crud/read/annex", dataAssoc: "selectData" } },
                { name: "Firma", assoc: "company", init: CrudSelectEdit, options: { nullable: true, getUrl: "/api/crud/read/company", dataAssoc: "selectData" } },

            ],

            utilities: {

                top: [
                    { init: CrudButtonUtility, name: "przywróć", map: "restore" },
                    { init: CrudLinkUtility, name: "zobacz wszystkie", map: "showAll", url: "/noty-odsetkowe" },
                    { init: CrudAjaxUtility, name: "utwórz", nameLoading: "tworzę", map: "create", postUrl: "/api/crud/create/interestNote" },
                ],

                bottom: []


            }

        }


    },
    "stworzPozyczkobiorca": {

        init: CrudCreate,
        props: {

            options: {

                label: "Nowy pożyczkobiorca",
                redirectUrl: "/pozyczkobiorcy"

            },


            fields: [

                { name: "Imię", assoc: "name", init: CrudTextEdit, options: { nullable: false } },
                { name: "Nazwisko", assoc: "surname", init: CrudTextEdit, options: { nullable: false } },
                { name: "Pesel", assoc: "pesel", init: CrudTextEdit, options: { nullable: false } },
                { name: "Firmy", assoc: "company", init: CrudMultiSelectEdit, options: { nullable: false, getUrl: "/api/crud/read/company" } },

            ],

            utilities: {

                top: [
                    { init: CrudButtonUtility, name: "przywróć", map: "restore" },
                    { init: CrudLinkUtility, name: "zobacz wszystkie", map: "showAll", url: "/pozyczkobiorcy" },
                    { init: CrudAjaxUtility, name: "utwórz", nameLoading: "tworzę", map: "create", postUrl: "/api/crud/create/borrower" },
                ]


            }

        }


    },
    "stworzFirma": {

        init: CrudCreate,
        props: {

            options: {

                label: "Nowa firma",
                redirectUrl: "/firmy"

            },

            fields: [

                { name: "Nazwa", assoc: "name", init: CrudTextEdit, options: { nullable: false } },
                { name: "Nip", assoc: "nip", init: CrudTextEdit, options: { nullable: false } },
                { name: "Krs", assoc: "krs", init: CrudTextEdit, options: { nullable: true } },
                { name: "Regon", assoc: "regon", init: CrudTextEdit, options: { nullable: false } },
                { name: "Adres", assoc: "address", init: CrudTextEdit, options: { nullable: false } },
                { name: "Kod pocztowy", assoc: "postal", init: CrudTextEdit, options: { nullable: false } },
                { name: "Miejscowość", assoc: "city", init: CrudTextEdit, options: { nullable: false } },

            ],

            utilities: {

                top: [
                    { init: CrudButtonUtility, name: "przywróć", map: "restore" },
                    { init: CrudLinkUtility, name: "zobacz wszystkie", map: "showAll", url: "/firmy" },
                    { init: CrudAjaxUtility, name: "utwórz", nameLoading: "tworzę", map: "create", postUrl: "/api/crud/create/company" },
                ]


            }

        }


    },
    "AgreementCreateEvent": {

        init: CrudCreate,
        props: {

            options: {

                label: "Nowe zdarzenie",

            },

            fields: [

                { name: "Pracownik", assoc: "user", init: CrudSelectEdit, options: { nullable: true, getUrl: "/api/crud/read/user", dataAssoc: "selectData" } },
                { name: "Pożyczkobiorca", assoc: "borrower", init: CrudSelectEdit, options: { nullable: true, getUrl: "/api/crud/read/borrower", dataAssoc: "selectData" } },
                { name: "Nazwa", assoc: "name", init: CrudTextEdit, options: { nullable: false } },
                { name: "Opis", assoc: "description", init: CrudTextEdit, options: { nullable: false } },
                { name: "Termin ostateczny", assoc: "occuredAt", init: CrudDateEdit, options: { nullable: false } },

            ],

            utilities: {

                top: [
                    { init: CrudButtonUtility, name: "przywróć", map: "restore" },
                    { init: CrudAjaxUtility, name: "utwórz", nameLoading: "tworzę", map: "create", postUrl: "/api/crud/create/event" },
                ]


            }

        }


    },
    "AgreementCreateSchedule": {

        init: CrudCreate,
        props: {

            options: {

                label: "Nowy harmonogram",

            },

            fields: [

                { name: "Data płatności", assoc: "date", init: CrudDateEdit, options: { nullable: false } },
                { name: "Kwota kapitałowa", assoc: "amountOfCapital", init: CrudTextEdit, options: { nullable: false } },
                { name: "Kwota odsetkowa", assoc: "amountOfInterest", init: CrudTextEdit, options: { nullable: false } },

            ],

            utilities: {

                top: [
                    { init: CrudButtonUtility, name: "przywróć", map: "restore" },
                    { init: CrudAjaxUtility, name: "utwórz", nameLoading: "tworzę", map: "create", postUrl: "/api/crud/create/schedule" },
                ]


            }

        }


    },
    "edytujUmowa": {

        init: CrudEdit,
        props: {

            options: {

                label: "Edycja umowy",
                getUrl: "/api/crud/read/agreement"

            },
            utilities: {

                top: [
                    { init: CrudButtonUtility, name: "przywróć", map: "restore" },
                    { init: CrudLinkUtility, name: "zobacz wszystkie", map: "showAll", url: "/umowy" },
                    { init: CrudLinkUtility, name: "zobacz", map: "show", url: "/umowy" },
                    { init: CrudAjaxUtility, name: "zapisz", nameLoading: "zapisuję", map: "save", postUrl: "/api/crud/update/agreement" },
                ]

            },
            fields: [

                { name: "Numer pożyczki", assoc: "number", init: CrudTextEdit, options: { nullable: false } },
                { name: "Pożyczkobiorca", assoc: "borrower", init: CrudSelectEdit, options: { nullable: false, getUrl: "/api/crud/read/borrower", dataAssoc: "selectData" } },
                { name: "Kwota", assoc: "amount", init: CrudTextEdit, options: { nullable: false, tooltip: 'Wartość liczbowa' } },
                { name: "Prowizja", assoc: "commission", init: CrudTextEdit, options: { nullable: false, tooltip: 'Wartość liczbowa' } },
                { name: "Prowizja %", assoc: "commissionPercent", init: CrudTextEdit, options: { nullable: false, tooltip: 'Wartość liczbowa' } },
                { name: "Odsetki", assoc: "interest", init: CrudTextEdit, options: { nullable: false, tooltip: 'Wartość liczbowa' } },
                { name: "Odsetki z góry", assoc: "interestFromTop", init: CrudBooleanEdit, options: { nullable: false } },
                { name: "Zawarta", assoc: "concludedAt", init: CrudDateEdit, options: { nullable: false } },
                { name: "Kończy się", assoc: "endsAt", init: CrudDateEdit, options: { nullable: false } },
                { name: "Spłacona dnia", assoc: "repaidAt", init: CrudDateEdit, options: { nullable: true } },
                { name: "Wysokość hipotek", assoc: "mortgageValue", init: CrudTextEdit, options: { nullable: false, tooltip: 'Wartość liczbowa' } },
                { name: "Ltv", assoc: "ltv", init: CrudTextEdit, options: { nullable: false, tooltip: 'Wartość liczbowa' } },
                { name: "Dodatkowe poręczenia", assoc: "guarantees", init: CrudTextEdit, options: { nullable: false } },
                { name: "Numer hipoteki", assoc: "mortgageNumber", init: CrudTextEdit, options: { nullable: false } },
                { name: "Wpisy do hipoteki", assoc: "mortgageEntries", init: CrudTextEdit, options: { nullable: false } },
                { name: "Oczekiwane dokumenty", assoc: "awaitedDocuments", init: CrudTextEdit, options: { nullable: false } },
                { name: "Udzielona z", assoc: "grantedFrom", init: CrudTextEdit, options: { nullable: false } },
                { name: "Status", assoc: "status", init: CrudSelectEdit, options: { nullable: false, getUrl: "/api/crud/read/status" } },
                { name: "Nieruchomość", assoc: "property", init: CrudSelectEdit, options: { nullable: false, getUrl: "/api/crud/read/property" } },

            ],

        }

    },
    "EditEvent": {

        init: CrudEdit,
        props: {

            options: {

                label: "Edycja zdarzenia",
                getUrl: "/api/crud/read/event"

            },
            utilities: {

                top: [
                    { init: CrudButtonUtility, name: "przywróć", map: "restore" },
                    { init: CrudLinkUtility, name: "zobacz wszystkie", map: "showAll", url: "/zdarzenia" },
                    { init: CrudLinkUtility, name: "zobacz", map: "show", url: "/zdarzenia" },
                    { init: CrudAjaxUtility, name: "zapisz", nameLoading: "zapisuję", map: "save", postUrl: "/api/crud/update/event" },
                ]

            },
            fields: [

                { name: "Termin ostateczny", assoc: "occuredAt", init: CrudDateEdit, options: { nullable: false } },
                { name: "Tytuł", assoc: "name", init: CrudTextEdit, options: { nullable: false } },
                { name: "Opis", assoc: "description", init: CrudTextEdit, options: { nullable: false } },
                { name: "Umowa", assoc: "agreement", init: CrudSelectEdit, options: { nullable: false, getUrl: "/api/crud/read/agreement", dataAssoc: "selectData" } },
                { name: "Pożyczkobiorca", assoc: "borrower", init: CrudSelectEdit, options: { nullable: false, getUrl: "/api/crud/read/borrower", dataAssoc: "selectData" } },
                { name: "Wykonano", assoc: "isExecuted", init: CrudBooleanEdit },

            ],

        }

    },
    "EditNote": {

        init: CrudEdit,
        props: {

            options: {

                label: "Edycja notatki",
                getUrl: "/api/crud/read/note"

            },
            utilities: {

                top: [
                    { init: CrudButtonUtility, name: "przywróć", map: "restore" },
                    { init: CrudLinkUtility, name: "zobacz wszystkie", map: "showAll", url: "/notatki" },
                    { init: CrudAjaxUtility, name: "zapisz", nameLoading: "zapisuję", map: "save", postUrl: "/api/crud/update/note" },
                ]

            },
            fields: [

                { name: "Tytuł", assoc: "title", init: CrudTextEdit, options: { nulalble: false } },
                { name: "Opis", assoc: "description", init: CrudTextEdit, options: { nulalble: false } },
                { name: "Umowa", assoc: "agreement", init: CrudSelectEdit, options: { nullable: false, getUrl: "/api/crud/read/agreement", dataAssoc: "selectData" } },

            ],

        }

    },
    "edytujFirma": {

        init: CrudEdit,
        props: {

            options: {

                label: "Edycja firmy",
                getUrl: "/api/crud/read/company"

            },
            utilities: {

                top: [
                    { init: CrudButtonUtility, name: "przywróć", map: "restore" },
                    { init: CrudLinkUtility, name: "zobacz wszystkie", map: "showAll", url: "/firmy" },
                    { init: CrudLinkUtility, name: "zobacz", map: "show", url: "/firmy" },
                    { init: CrudAjaxUtility, name: "zapisz", nameLoading: "zapisuję", map: "save", postUrl: "/api/crud/update/company" },
                ]

            },
            fields: [

                { name: "Nazwa", assoc: "name", init: CrudTextEdit, options: { nullable: false } },
                { name: "Nip", assoc: "nip", init: CrudTextEdit, options: { nullable: false } },
                { name: "Krs", assoc: "krs", init: CrudTextEdit, options: { nullable: true } },
                { name: "Regon", assoc: "regon", init: CrudTextEdit, options: { nullable: false } },
                { name: "Adres", assoc: "address", init: CrudTextEdit, options: { nullable: false } },
                { name: "Kod pocztowy", assoc: "postal", init: CrudTextEdit, options: { nullable: false } },
                { name: "Miejscowość", assoc: "city", init: CrudTextEdit, options: { nullable: false } },

            ],

        }

    },
    "edytujPozyczkobiorca": {

        init: CrudEdit,
        props: {

            options: {

                label: "Edycja pożyczkobiorcy",
                getUrl: "/api/crud/read/borrower"

            },
            utilities: {

                top: [
                    { init: CrudButtonUtility, name: "przywróć", map: "restore" },
                    { init: CrudLinkUtility, name: "zobacz wszystkie", map: "showAll", url: "/pozyczkobiorcy" },
                    { init: CrudLinkUtility, name: "zobacz", map: "show", url: "/pozyczkobiorcy" },
                    { init: CrudAjaxUtility, name: "zapisz", nameLoading: "zapisuję", map: "save", postUrl: "/api/crud/update/borrower" },
                ]

            },
            fields: [

                { name: "Imię", assoc: "name", init: CrudTextEdit, options: { nullable: false } },
                { name: "Nazwisko", assoc: "surname", init: CrudTextEdit, options: { nullable: false } },
                { name: "Pesel", assoc: "pesel", init: CrudTextEdit, options: { nullable: false } },
                { name: "Firmy", assoc: "company", init: CrudMultiSelectEdit, options: { nullable: false, getUrl: "/api/crud/read/company" } },

            ],

        }

    },
    "UpdateAnnex": {

        init: CrudEdit,
        props: {

            options: {

                label: "Edycja aneksu",
                getUrl: "/api/crud/read/annex"

            },
            utilities: {

                top: [
                    { init: CrudButtonUtility, name: "przywróć", map: "restore" },
                    { init: CrudLinkUtility, name: "zobacz wszystkie", map: "showAll", url: "/aneksy" },
                    { init: CrudLinkUtility, name: "zobacz", map: "show", url: "/aneksy" },
                    { init: CrudAjaxUtility, name: "zapisz", nameLoading: "zapisuję", map: "save", postUrl: "/api/crud/update/annex" },
                ]

            },
            fields: [


                { name: "Umowa", assoc: "agreement", init: CrudSelectEdit, options: { nullable: false, getUrl: "/api/crud/read/agreement", dataAssoc: "selectData" } },
                { name: "Zawarty", assoc: "concludedAt", init: CrudDateEdit, options: { nullable: false } },
                { name: "Kończy się", assoc: "endsAt", init: CrudDateEdit, options: { nullable: false } },
                { name: "Pożyczkobiorca", assoc: "borrower", init: CrudSelectEdit, options: { nullable: false, getUrl: "/api/crud/read/borrower", dataAssoc: "selectData" } },
                { name: "Kwota pożyczki", assoc: "amount", init: CrudTextEdit, options: { nulalble: false } },
                { name: "Odsetki z góry", assoc: "interestFromTop", init: CrudBooleanEdit, options: { nulalble: false } },
                { name: "Wysokość odsetek %", assoc: "interestPercent", init: CrudTextEdit, options: { nulalble: false } },
                { name: "Wysokość odsetek", assoc: "interest", init: CrudTextEdit, options: { nulalble: false } },
                { name: "Prowizja z góry", assoc: "commissionFromTop", init: CrudBooleanEdit, options: { nulalble: false } },
                { name: "Wysokość prowizji %", assoc: "commissionPercent", init: CrudTextEdit, options: { nulalble: false } },
                { name: "Wysokość prowizji", assoc: "commission", init: CrudTextEdit, options: { nulalble: false } },
                { name: "Status", assoc: "status", init: CrudSelectEdit, options: { nullable: false, getUrl: "/api/crud/read/status" } },


            ],

        }

    },
    "UpdateInterestNote": {

        init: CrudEdit,
        props: {

            options: {

                label: "Edycja noty odsetkowej",
                getUrl: "/api/crud/read/interestNote"

            },
            utilities: {

                top: [
                    { init: CrudButtonUtility, name: "przywróć", map: "restore" },
                    { init: CrudLinkUtility, name: "zobacz wszystkie", map: "showAll", url: "/noty-odsetkowe" },
                    { init: CrudLinkUtility, name: "zobacz", map: "show", url: "/noty-odsetkowe" },
                    { init: CrudAjaxUtility, name: "zapisz", nameLoading: "zapisuję", map: "save", postUrl: "/api/crud/update/interestNote" },
                ]

            },
            fields: [

                { name: "Kwota", assoc: "amount", init: CrudTextEdit, options: { nulalble: false } },
                { name: "Notatka", assoc: "notes", init: CrudTextEdit, options: { nulalble: false } },
                { name: "Wynika z", assoc: "resultsFrom", init: CrudTextEdit, options: { nulalble: false } },
                { name: "Wydana dnia", assoc: "issuedAt", init: CrudDateEdit, options: { nulalble: false } },
                { name: "Konto bankowe", assoc: "bankAccount", init: CrudSelectEdit, options: { nullable: false, getUrl: "/api/crud/read/bankAccount", dataAssoc: "selectData" } },
                { name: "Umowa", assoc: "agreement", init: CrudSelectEdit, options: { nullable: true, getUrl: "/api/crud/read/agreement", dataAssoc: "selectData" } },
                { name: "Aneks", assoc: "annex", init: CrudSelectEdit, options: { nullable: true, getUrl: "/api/crud/read/annex", dataAssoc: "selectData" } },
                { name: "Firma", assoc: "company", init: CrudSelectEdit, options: { nullable: true, getUrl: "/api/crud/read/company", dataAssoc: "selectData" } },

            ],

        }

    },
    "UpdateDebitNote": {

        init: CrudEdit,
        props: {

            options: {

                label: "Edycja noty obciążeniowej",
                getUrl: "/api/crud/read/debitNote"

            },
            utilities: {

                top: [
                    { init: CrudButtonUtility, name: "przywróć", map: "restore" },
                    { init: CrudLinkUtility, name: "zobacz wszystkie", map: "showAll", url: "/noty-obciazeniowe" },
                    { init: CrudLinkUtility, name: "zobacz", map: "show", url: "/noty-obciazeniowe" },
                    { init: CrudAjaxUtility, name: "zapisz", nameLoading: "zapisuję", map: "save", postUrl: "/api/crud/update/debitNote" },
                ]

            },
            fields: [

                { name: "Kwota", assoc: "amount", init: CrudTextEdit, options: { nulalble: false } },
                { name: "Notatka", assoc: "notes", init: CrudTextEdit, options: { nulalble: false } },
                { name: "Wynika z", assoc: "resultsFrom", init: CrudTextEdit, options: { nulalble: false } },
                { name: "Wydana dnia", assoc: "issuedAt", init: CrudDateEdit, options: { nulalble: false } },
                { name: "Konto bankowe", assoc: "bankAccount", init: CrudSelectEdit, options: { nullable: false, getUrl: "/api/crud/read/bankAccount", dataAssoc: "selectData" } },
                { name: "Umowa", assoc: "agreement", init: CrudSelectEdit, options: { nullable: true, getUrl: "/api/crud/read/agreement", dataAssoc: "selectData" } },
                { name: "Aneks", assoc: "annex", init: CrudSelectEdit, options: { nullable: true, getUrl: "/api/crud/read/annex", dataAssoc: "selectData" } },
                { name: "Firma", assoc: "company", init: CrudSelectEdit, options: { nullable: true, getUrl: "/api/crud/read/company", dataAssoc: "selectData" } },

            ],

        }

    },
    "UpdateProperty": {

        init: CrudEdit,
        props: {

            options: {

                label: "Edycja nieruchomości",
                getUrl: "/api/crud/read/property"

            },
            utilities: {

                top: [
                    { init: CrudButtonUtility, name: "przywróć", map: "restore" },
                    { init: CrudLinkUtility, name: "zobacz wszystkie", map: "showAll", url: "/nieruchomosci" },
                    { init: CrudLinkUtility, name: "zobacz", map: "show", url: "/nieruchomosci" },
                    { init: CrudAjaxUtility, name: "zapisz", nameLoading: "zapisuję", map: "save", postUrl: "/api/crud/update/property" },
                ]

            },
            fields: [


                { name: "Umowa", assoc: "agreement", init: CrudSelectEdit, options: { nullable: true, getUrl: "/api/crud/read/agreement", dataAssoc: "selectData" } },
                { name: "Wartość", assoc: "value", init: CrudTextEdit, options: { nulalble: false } },
                { name: "Lokalizacja", assoc: "location", init: CrudTextEdit, options: { nulalble: false } },
                { name: "Rodzaj", assoc: "type", init: CrudTextEdit, options: { nulalble: false } },


            ],

        }

    },
    "DebitNoteCreateNoteItem": {

        init: CrudCreate,
        props: {

            options: {

                label: "Nowa składowa",

            },

            fields: [

                { name: "Nazwa", assoc: "name", init: CrudTextEdit, options: { nullable: false } },
                { name: "Kwota", assoc: "amount", init: CrudTextEdit, options: { nullable: false } },

            ],

            utilities: {

                top: [
                    { init: CrudButtonUtility, name: "przywróć", map: "restore" },
                    { init: CrudAjaxUtility, name: "utwórz", nameLoading: "tworzę", map: "create", postUrl: "/api/crud/create/noteItem" },
                ]


            }

        }


    },
    "InterestNoteCreateNoteItem": {

        init: CrudCreate,
        props: {

            options: {

                label: "Nowa składowa",

            },

            fields: [

                { name: "Nazwa", assoc: "name", init: CrudTextEdit, options: { nullable: false } },
                { name: "Kwota", assoc: "amount", init: CrudTextEdit, options: { nullable: false } },

            ],

            utilities: {

                top: [
                    { init: CrudButtonUtility, name: "przywróć", map: "restore" },
                    { init: CrudAjaxUtility, name: "utwórz", nameLoading: "tworzę", map: "create", postUrl: "/api/crud/create/noteItem" },
                ]


            }

        }


    },

};


var reactHooks = document.querySelectorAll("[data-react-hook]");

reactHooks.forEach((hookElement) => {

    var hookAttribute = hookElement.getAttribute("data-react-hook");

    var parsedPropsAttribute = {};

    if (hookElement.hasAttribute("data-react-props")) {

        try {

            parsedPropsAttribute = JSON.parse(hookElement.getAttribute("data-react-props"));

        } catch (exception) {

            console.error(hookElement, "błędny json w data-react-props");

        }


    }

    var mappedHook = reactMaps[hookAttribute];

    var mergedProps = _.merge(mappedHook.props, parsedPropsAttribute);

    ReactDOM.render(<mappedHook.init {...mergedProps} />, hookElement);

});