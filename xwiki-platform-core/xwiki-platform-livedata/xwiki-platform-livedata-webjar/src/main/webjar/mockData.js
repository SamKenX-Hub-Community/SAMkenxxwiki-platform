/*
 * See the NOTICE file distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation; either version 2.1 of
 * the License, or (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this software; if not, write to the Free
 * Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 * 02110-1301 USA, or see the FSF site: http://www.fsf.org.
 */


// This is mock data used while the front-end is not communicating with the macros
// The data structure is not definitive, and may change to match the final specs

define({

  query: {
    properties: ["doc_title", "age", "country", "job", "other"],

    source: {
      id: "...",
      url: "...",
    },

    hiddenFilters: {},

    filters: {
      country: [
        {operator: "equals", value: "france"},
      ],
    },

    sort: [ {property: "age", descending: false} ],

    offset: 0,
    limit: 10,

    layouts: ["table", "cards"],
    defaultLayout: "table",

  },



  meta: {

    propertyDescriptors: [
      {
        id: "doc_title",
        name: "Name",
        type: "text",
      },
      {
        id: "age",
        name: "Age",
        type: "number",
      },
      {
        id: "job",
        name: "Job",
        type: "text",
      },
      {
        id: "country",
        name: "Country",
        type: "text",
      },
      {
        id: "other",
        name: "Autre truc",
        type: "text",
      },
    ],

    filters: {
      text: {
        operators: ["equals", "nequals"],
      },
      number: {
        operators: ["greater", "lower"],
      },
    },

    layoutDescriptors: {
      table: {
        name: "Table",
        icon: "fa fa-table",
        file: "tableLayout.js",
      },
      cards: {
        name: "Cards",
        icon: "fa fa-th",
        file: "cardsLayout.js",
      },
    },

  },



  data: {

    count: 5,

    entries: [
      {
        "doc_url": "#link1",
        "doc_name": "Name1",
        "doc_date": "2020/03/27 13:23",
        "doc_title": "Title 1",
        "doc_author": "Author 1",
        "doc_creationDate": "2020/03/27 13:21",
        "doc_creator": "Creator 1",
        "age": 48,
        "job": "Job 1",
        "country": "France",
        "other": "lorem ipsum",
      },
      {
        "doc_url": "#link2",
        "doc_name": "Name2",
        "doc_date": "2020/04/22 14:07",
        "doc_title": "Title 2",
        "doc_author": "Author 2",
        "doc_creationDate": "2020/04/22 14:06",
        "doc_creator": "Creator 2",
        "age": 24,
        "job": "Job 2",
        "country": "France",
        "other": "dorol sit amet",
      },
      {
        "doc_url": "#link3",
        "doc_name": "Name3",
        "doc_date": "2020/03/27 14:34",
        "doc_title": "Title 3",
        "doc_author": "Author 3",
        "doc_creationDate": "2020/03/27 14:34",
        "doc_creator": "Creator 3",
        "age": 12,
        "job": "Job 3",
        "country": "Romania",
        "other": "consequtir",
      },
      {
        "doc_url": "#link4",
        "doc_name": "Name4",
        "doc_date": "2020/03/27 14:34",
        "doc_title": "Title 4",
        "doc_author": "Author 4",
        "doc_creationDate": "2020/03/27 14:34",
        "doc_creator": "Creator 4",
        "age": 52,
        "country": "Romania",
      },
    ],

  },

});