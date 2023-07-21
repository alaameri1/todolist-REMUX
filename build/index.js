var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 82,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/main.css
var main_default = "/build/_assets/main-JKTN6QQI.css";

// app/root.jsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
function links() {
  return [{ rel: "stylesheet", href: main_default }];
}

// app/routes/notes.$noteId.jsx
var notes_noteId_exports = {};
__export(notes_noteId_exports, {
  default: () => NoteDetailsPage,
  links: () => links2,
  loader: () => loader,
  meta: () => meta2
});
var import_node2 = require("@remix-run/node"), import_react3 = require("@remix-run/react");

// app/data/notes.js
var import_promises = __toESM(require("fs/promises"));
async function getStoredNotes() {
  let rawFileContent = await import_promises.default.readFile("notes.json", { encoding: "utf-8" });
  return JSON.parse(rawFileContent).notes ?? [];
}
function storeNotes(notes) {
  return import_promises.default.writeFile("notes.json", JSON.stringify({ notes: notes || [] }));
}

// app/styles/note-details.css
var note_details_default = "/build/_assets/note-details-BRVJV52J.css";

// app/routes/notes.$noteId.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function NoteDetailsPage() {
  let note = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { id: "note-details", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/notes", children: "Back to all Notes" }, void 0, !1, {
        fileName: "app/routes/notes.$noteId.jsx",
        lineNumber: 14,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/notes.$noteId.jsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: note.title }, void 0, !1, {
        fileName: "app/routes/notes.$noteId.jsx",
        lineNumber: 16,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/notes.$noteId.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { id: "note-details-content", children: note.content }, void 0, !1, {
      fileName: "app/routes/notes.$noteId.jsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/notes.$noteId.jsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
async function loader({ params }) {
  let notes = await getStoredNotes(), noteId = params.noteId, selectedNote = notes.find((note) => note.id === noteId);
  if (!selectedNote)
    throw (0, import_node2.json)(
      { message: "Could not find note for id " + noteId },
      { status: 404 }
    );
  return selectedNote;
}
function links2() {
  return [{ rel: "stylesheet", href: note_details_default }];
}
function meta2({ data }) {
  return {
    title: data.title,
    description: "Manage your notes with ease."
  };
}

// app/routes/mylist.jsx
var mylist_exports = {};
__export(mylist_exports, {
  default: () => mylist,
  links: () => links4,
  loader: () => loader2,
  meta: () => meta3
});
var import_react5 = require("@remix-run/react");

// app/components/NoteList.jsx
var import_react4 = require("@remix-run/react");

// app/components/NoteList.css
var NoteList_default = "/build/_assets/NoteList-BV444FGO.css";

// app/components/NoteList.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function NoteList({ notes }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { id: "note-list", children: notes.map(
    (note, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: "note", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: note.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("article", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("header", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "note-meta", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: [
            "#",
            index + 1
          ] }, void 0, !0, {
            fileName: "app/components/NoteList.jsx",
            lineNumber: 14,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("time", { dateTime: note.id, children: new Date(note.id).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
          }) }, void 0, !1, {
            fileName: "app/components/NoteList.jsx",
            lineNumber: 16,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/NoteList.jsx",
            lineNumber: 15,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/NoteList.jsx",
          lineNumber: 13,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { children: note.title }, void 0, !1, {
          fileName: "app/components/NoteList.jsx",
          lineNumber: 27,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/NoteList.jsx",
        lineNumber: 12,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: note.content }, void 0, !1, {
        fileName: "app/components/NoteList.jsx",
        lineNumber: 29,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/NoteList.jsx",
      lineNumber: 11,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/NoteList.jsx",
      lineNumber: 10,
      columnNumber: 11
    }, this) }, note.id, !1, {
      fileName: "app/components/NoteList.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  ) }, void 0, !1, {
    fileName: "app/components/NoteList.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var NoteList_default2 = NoteList;
function links3() {
  return [{ rel: "stylesheet", href: NoteList_default }];
}

// app/routes/mylist.jsx
var import_react6 = require("@remix-run/react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function mylist() {
  let notes = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "last", children: "My List" }, void 0, !1, {
      fileName: "app/routes/mylist.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { className: "buto", children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react6.Link, { to: "/", className: "linkto", children: "back home" }, void 0, !1, {
        fileName: "app/routes/mylist.jsx",
        lineNumber: 13,
        columnNumber: 33
      }, this),
      " "
    ] }, void 0, !0, {
      fileName: "app/routes/mylist.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(NoteList_default2, { notes }, void 0, !1, {
      fileName: "app/routes/mylist.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/mylist.jsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
async function loader2() {
  return await getStoredNotes();
}
function meta3() {
  return {
    title: "My List"
  };
}
function links4() {
  return [...links3()];
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links5
});
var import_react7 = require("react"), import_react_router_dom = require("react-router-dom");

// app/styles/home.css
var home_default = "/build/_assets/home-YW3QXVZ5.css";

// app/routes/index.jsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { children: "my tasks" }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "wel", children: " Welcome to mytasks. " }, void 0, !1, {
          fileName: "app/routes/index.jsx",
          lineNumber: 10,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/index.jsx",
          lineNumber: 10,
          columnNumber: 63
        }, this),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/index.jsx",
          lineNumber: 10,
          columnNumber: 70
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "exp", children: "Explore and enjoy!" }, void 0, !1, {
          fileName: "app/routes/index.jsx",
          lineNumber: 10,
          columnNumber: 76
        }, this),
        " "
      ] }, void 0, !0, {
        fileName: "app/routes/index.jsx",
        lineNumber: 10,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_router_dom.Link, { to: "/notes", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { children: "manage your tasks" }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 13,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
function links5() {
  return [{ rel: "stylesheet", href: home_default }];
}

// app/routes/notes.jsx
var notes_exports = {};
__export(notes_exports, {
  action: () => action,
  default: () => NotesPage,
  links: () => links7,
  meta: () => meta4
});
var import_node3 = require("@remix-run/node"), import_react9 = require("@remix-run/react");

// app/components/NewNote.jsx
var import_react8 = require("@remix-run/react");

// app/components/NewNote.css
var NewNote_default = "/build/_assets/NewNote-U5IP7V2P.css";

// app/components/NewNote.jsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function NewNote() {
  let data = (0, import_react8.useActionData)(), isSubmitting = (0, import_react8.useTransition)().state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react8.Form, { method: "post", id: "note-form", className: NewNote_default.form, children: [
    (data == null ? void 0 : data.message) && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: data.message }, void 0, !1, {
      fileName: "app/components/NewNote.jsx",
      lineNumber: 17,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { htmlFor: "title", children: "Task's Title" }, void 0, !1, {
        fileName: "app/components/NewNote.jsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "input",
        {
          type: "text",
          id: "title",
          name: "title",
          required: !0,
          className: NewNote_default.input,
          placeholder: "title"
        },
        void 0,
        !1,
        {
          fileName: "app/components/NewNote.jsx",
          lineNumber: 20,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/NewNote.jsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { htmlFor: "content", children: "task" }, void 0, !1, {
        fileName: "app/components/NewNote.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "textarea",
        {
          id: "content",
          name: "content",
          rows: "5",
          required: !0,
          className: NewNote_default.textarea,
          placeholder: "your task"
        },
        void 0,
        !1,
        {
          fileName: "app/components/NewNote.jsx",
          lineNumber: 31,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/NewNote.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: NewNote_default.actions, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { className: `goto-button ${NewNote_default.button}`, disabled: isSubmitting, children: isSubmitting ? "Adding..." : "Add Task" }, void 0, !1, {
      fileName: "app/components/NewNote.jsx",
      lineNumber: 41,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/NewNote.jsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/NewNote.jsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
var NewNote_default2 = NewNote;
function links6() {
  return [{ rel: "stylesheet", href: NewNote_default }];
}

// 8810413.jpg
var __default = "/build/_assets/8810413-IT4KVH4S.jpg";

// app/routes/notes.jsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function NotesPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(NewNote_default2, {}, void 0, !1, {
      fileName: "app/routes/notes.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { className: "buto", children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react9.Link, { to: "/mylist", className: "linkto", children: "Go to My List" }, void 0, !1, {
        fileName: "app/routes/notes.jsx",
        lineNumber: 12,
        columnNumber: 32
      }, this),
      " "
    ] }, void 0, !0, {
      fileName: "app/routes/notes.jsx",
      lineNumber: 12,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { className: "image", src: __default, alt: "My Image" }, void 0, !1, {
      fileName: "app/routes/notes.jsx",
      lineNumber: 13,
      columnNumber: 6
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/notes.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
async function action({ request }) {
  let formData = await request.formData(), noteData = Object.fromEntries(formData), existingNotes = await getStoredNotes();
  noteData.id = (/* @__PURE__ */ new Date()).toISOString();
  let updatedNotes = existingNotes.concat(noteData);
  return await storeNotes(updatedNotes), (0, import_node3.redirect)("/notes");
}
function links7() {
  return [...links6()];
}
function meta4() {
  return {
    title: "Notes"
  };
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-ZQCT24ZW.js", imports: ["/build/_shared/chunk-MXO6IIMZ.js", "/build/_shared/chunk-373R2OKQ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-FAZAV44Q.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-ZHBYC3VJ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/mylist": { id: "routes/mylist", parentId: "root", path: "mylist", index: void 0, caseSensitive: void 0, module: "/build/routes/mylist-CSH3U2VT.js", imports: ["/build/_shared/chunk-ZRIATEET.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes": { id: "routes/notes", parentId: "root", path: "notes", index: void 0, caseSensitive: void 0, module: "/build/routes/notes-UPS4GGLL.js", imports: ["/build/_shared/chunk-PGOEE6WM.js", "/build/_shared/chunk-ZRIATEET.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes.$noteId": { id: "routes/notes.$noteId", parentId: "root", path: "notes/:noteId", index: void 0, caseSensitive: void 0, module: "/build/routes/notes.$noteId-KCRHBYFO.js", imports: ["/build/_shared/chunk-PGOEE6WM.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "367e7c64", hmr: void 0, url: "/build/manifest-367E7C64.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/notes.$noteId": {
    id: "routes/notes.$noteId",
    parentId: "root",
    path: "notes/:noteId",
    index: void 0,
    caseSensitive: void 0,
    module: notes_noteId_exports
  },
  "routes/mylist": {
    id: "routes/mylist",
    parentId: "root",
    path: "mylist",
    index: void 0,
    caseSensitive: void 0,
    module: mylist_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/notes": {
    id: "routes/notes",
    parentId: "root",
    path: "notes",
    index: void 0,
    caseSensitive: void 0,
    module: notes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
