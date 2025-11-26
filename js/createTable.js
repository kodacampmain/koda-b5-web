// const libraryData = {
//   caption: {
//     text: "Daftar Buku di Perpustakaan",
//     attr: {
//       class: ["title"],
//     },
//   },
//   header: [
//     [
//       {
//         text: "No",
//         attr: {
//           scope: "col",
//           rowspan: 2,
//           colspan: 1,
//         },
//       },
//     ],
//     [{}],
//   ],
//   content: [{}],
// };

const table = document.getElementById("tabel");
// const table = document.querySelector("#tabel");
// console.log(table);
const fragment = document.createDocumentFragment();
const caption = document.createElement("caption");
caption.textContent = "Daftar Buku di Perpustakaan";
caption.classList.add("title");
fragment.append(caption);

const headers = [
  {
    text: "NO",
    rowspan: 2,
    colspan: 1,
    scope: "col",
  },
  {
    text: "Judul Buku",
    rowspan: 2,
    colspan: 1,
    scope: "col",
  },
  {
    text: "Jenis",
    rowspan: 1,
    colspan: 3,
    scope: "colgroup",
  },
  {
    text: "Pengarang",
    rowspan: 2,
    colspan: 1,
    scope: "col",
  },
  {
    text: "Tahun Terbit",
    rowspan: 2,
    colspan: 1,
    scope: "col",
  },
  {
    text: "Penerbit",
    rowspan: 2,
    colspan: 1,
    scope: "col",
  },
];
const subHeaders = [
  {
    text: "Fiksi",
    rowspan: 1,
    colspan: 1,
    scope: "col",
  },
  {
    text: "Non Fiksi",
    rowspan: 1,
    colspan: 1,
    scope: "col",
  },
  {
    text: "Fiksi Ilmiah",
    rowspan: 1,
    colspan: 1,
    scope: "col",
  },
];

function insertHeader(target) {
  return function (headerItem) {
    const th = document.createElement("th");
    th.setAttribute("scope", headerItem.scope);
    th.setAttribute("rowspan", headerItem.rowspan);
    th.setAttribute("colspan", headerItem.colspan);
    th.textContent = headerItem.text;
    target.append(th);
  };
}

const thead = document.createElement("thead");
const headerRow = document.createElement("tr");
headerRow.style.backgroundColor = "grey";
headers.forEach(insertHeader(headerRow));

const subHeaderRow = document.createElement("tr");
subHeaders.forEach(insertHeader(subHeaderRow));

thead.append(headerRow, subHeaderRow);
fragment.append(thead);

// content
const tbody = document.createElement("tbody");
fragment.append(tbody);
// append ke table
table.append(fragment);
