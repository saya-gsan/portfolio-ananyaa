module.exports = {

"[project]/lib/tokens.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "colors": (()=>colors),
    "fonts": (()=>fonts),
    "gradient": (()=>gradient),
    "radius": (()=>radius),
    "shadows": (()=>shadows)
});
const colors = {
    surface: '#fffaf2',
    canvas: '#f7f1e8',
    ink: '#241813',
    muted: '#7a6c63',
    ember: '#d4451f',
    pumpkin: '#ff7a2e',
    marigold: '#ffd24a',
    hairline: 'rgba(36,24,19,0.07)',
    divider: 'rgba(36,24,19,0.10)',
    border: 'rgba(36,24,19,0.18)'
};
const gradient = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='320' height='320'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.6 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/></svg>"), radial-gradient(ellipse 80% 65% at 18% 82%, #d4451f 0%, transparent 55%), radial-gradient(ellipse 65% 75% at 85% 18%, #ffd24a 0%, transparent 55%), radial-gradient(ellipse 55% 60% at 62% 55%, #ff8a3d 0%, transparent 55%), linear-gradient(125deg, #b53412 0%, #ff7a2e 50%, #ffc14a 100%)`;
const shadows = {
    card: 'rgba(36,24,19,0.05) 0 1px 2px, rgba(36,24,19,0.07) 0 16px 40px -18px',
    cardHover: 'rgba(15,23,42,0.06) 0 1px 2px, rgba(15,23,42,0.18) 0 12px 28px -12px',
    button: 'rgba(212,69,31,0.32) 0 12px 28px -10px, rgba(255,138,61,0.22) 0 6px 18px -8px'
};
const fonts = {
    display: 'var(--font-inter-tight), sans-serif',
    body: 'var(--font-inter), sans-serif',
    mono: 'var(--font-jetbrains-mono), monospace'
};
const radius = {
    sm: 8,
    md: 14,
    lg: 20
};
}}),
"[project]/components/Nav.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Nav)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tokens.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin();
const TABS = [
    {
        id: 'home',
        label: 'Home'
    },
    {
        id: 'core',
        label: 'The Science'
    },
    {
        id: 'consulting',
        label: 'Consulting'
    },
    {
        id: 'computational',
        label: 'Comp Bio'
    },
    {
        id: 'blog',
        label: 'Blog'
    }
];
function Nav({ activeTab, onTabChange }) {
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const navRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wordmarkRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const resumeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from(navRef.current, {
            y: -64,
            opacity: 0,
            duration: 0.7,
            ease: 'power3.out',
            delay: 0.1
        });
    }, {
        scope: navRef
    });
    const handleResumeHover = (enter)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(resumeRef.current, {
            scale: enter ? 1.04 : 1,
            duration: 0.2,
            ease: enter ? 'power2.out' : 'power2.in'
        });
    };
    const handleTabClick = (id)=>{
        onTabChange(id);
        setMenuOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        ref: navRef,
        style: {
            position: 'sticky',
            top: 0,
            zIndex: 100,
            width: '100%',
            background: 'rgba(255,250,242,0.94)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            borderBottom: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].divider}`,
            boxSizing: 'border-box'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: 56,
                    padding: '0 2rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        ref: wordmarkRef,
                        onClick: ()=>handleTabClick('home'),
                        onMouseEnter: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(wordmarkRef.current, {
                                letterSpacing: '-0.01em',
                                duration: 0.2
                            }),
                        onMouseLeave: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(wordmarkRef.current, {
                                letterSpacing: '-0.03em',
                                duration: 0.2
                            }),
                        style: {
                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                            fontWeight: 800,
                            fontSize: '1rem',
                            letterSpacing: '-0.03em',
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 0
                        },
                        children: "Anu Srinivasan"
                    }, void 0, false, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden nav:flex",
                        style: {
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            alignItems: 'stretch',
                            height: 56,
                            gap: 4
                        },
                        children: TABS.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleTabClick(t.id),
                                style: {
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                    fontWeight: 700,
                                    fontSize: '0.9375rem',
                                    padding: '0 15px',
                                    cursor: 'pointer',
                                    color: activeTab === t.id ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ember : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                    borderBottom: activeTab === t.id ? `2px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ember}` : '2px solid transparent',
                                    borderTop: 'none',
                                    borderLeft: 'none',
                                    borderRight: 'none',
                                    background: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    transition: 'color 160ms, border-color 160ms',
                                    whiteSpace: 'nowrap'
                                },
                                children: t.label
                            }, t.id, false, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden nav:flex",
                                style: {
                                    alignItems: 'center',
                                    gap: 8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://linkedin.com/in/ananyaa-srinivasan/",
                                        target: "_blank",
                                        rel: "noopener",
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: 34,
                                            height: 34,
                                            borderRadius: 10,
                                            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].border}`,
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                                            transition: 'background 160ms',
                                            textDecoration: 'none'
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.background = 'rgba(36,24,19,0.06)';
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.background = 'transparent';
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Nav.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "4",
                                                    cy: "4",
                                                    r: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Nav.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Nav.tsx",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Nav.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        ref: resumeRef,
                                        href: "/Ananyaa_Srinivasan_Resume.pdf",
                                        download: true,
                                        onMouseEnter: ()=>handleResumeHover(true),
                                        onMouseLeave: ()=>handleResumeHover(false),
                                        style: {
                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                            fontWeight: 800,
                                            fontSize: '0.8125rem',
                                            letterSpacing: '-0.01em',
                                            padding: '8px 16px',
                                            borderRadius: 12,
                                            border: 'none',
                                            cursor: 'pointer',
                                            color: '#fffaf2',
                                            background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gradient"],
                                            boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadows"].button,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 6,
                                            textDecoration: 'none'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "13",
                                                height: "13",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Nav.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                        points: "7 10 12 15 17 10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Nav.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "12",
                                                        y1: "15",
                                                        x2: "12",
                                                        y2: "3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Nav.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Nav.tsx",
                                                lineNumber: 187,
                                                columnNumber: 15
                                            }, this),
                                            "Resume"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Nav.tsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex nav:hidden",
                                onClick: ()=>setMenuOpen((o)=>!o),
                                "aria-label": "Toggle menu",
                                style: {
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    gap: 5,
                                    width: 36,
                                    height: 36,
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    padding: '6px 4px'
                                },
                                children: [
                                    0,
                                    1,
                                    2
                                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: 'block',
                                            width: 22,
                                            height: 2,
                                            borderRadius: 2,
                                            background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                                            transition: 'transform 220ms ease, opacity 220ms ease',
                                            transformOrigin: 'center',
                                            transform: i === 0 ? menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' : i === 2 ? menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' : 'none',
                                            opacity: i === 1 ? menuOpen ? 0 : 1 : 1
                                        }
                                    }, i, false, {
                                        fileName: "[project]/components/Nav.tsx",
                                        lineNumber: 214,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Nav.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    borderTop: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].divider}`,
                    background: 'rgba(255,250,242,0.97)',
                    padding: '8px 0 12px',
                    position: 'relative',
                    zIndex: 101
                },
                children: [
                    TABS.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleTabClick(t.id),
                            style: {
                                display: 'block',
                                width: '100%',
                                textAlign: 'left',
                                padding: '11px 2rem',
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                fontWeight: 700,
                                fontSize: '0.9375rem',
                                color: activeTab === t.id ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ember : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                borderLeft: activeTab === t.id ? `3px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ember}` : '3px solid transparent'
                            },
                            children: t.label
                        }, t.id, false, {
                            fileName: "[project]/components/Nav.tsx",
                            lineNumber: 246,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 10,
                            alignItems: 'center',
                            padding: '10px 2rem',
                            borderTop: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].divider}`,
                            marginTop: 4
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://linkedin.com/in/ananyaa-srinivasan/",
                                target: "_blank",
                                rel: "noopener",
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: 34,
                                    height: 34,
                                    borderRadius: 10,
                                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].border}`,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                                    textDecoration: 'none'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Nav.tsx",
                                            lineNumber: 294,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "4",
                                            cy: "4",
                                            r: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Nav.tsx",
                                            lineNumber: 295,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Nav.tsx",
                                    lineNumber: 293,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 277,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/Ananyaa_Srinivasan_Resume.pdf",
                                download: true,
                                style: {
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                    fontWeight: 800,
                                    fontSize: '0.8125rem',
                                    letterSpacing: '-0.01em',
                                    padding: '8px 16px',
                                    borderRadius: 12,
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: '#fffaf2',
                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gradient"],
                                    boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadows"].button,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 6,
                                    textDecoration: 'none'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "13",
                                        height: "13",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Nav.tsx",
                                                lineNumber: 320,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "7 10 12 15 17 10"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Nav.tsx",
                                                lineNumber: 321,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "12",
                                                y1: "15",
                                                x2: "12",
                                                y2: "3"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Nav.tsx",
                                                lineNumber: 322,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Nav.tsx",
                                        lineNumber: 319,
                                        columnNumber: 15
                                    }, this),
                                    "Resume"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 298,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 269,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Nav.tsx",
                lineNumber: 238,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Nav.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/Footer.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Footer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tokens.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function Footer({ onTabChange }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from(ref.current, {
            opacity: 0,
            y: 24,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: ref.current,
                start: 'top 95%'
            }
        });
    }, {
        scope: ref
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        ref: ref,
        style: {
            borderTop: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].divider}`,
            padding: '28px 2rem',
            background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].surface,
            width: '100%',
            boxSizing: 'border-box'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "footer-grid",
            style: {
                width: '100%',
                display: 'grid',
                gridTemplateColumns: '1fr auto 1fr',
                alignItems: 'center',
                gap: 12
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onTabChange('home'),
                        style: {
                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                            fontWeight: 800,
                            fontSize: '0.875rem',
                            letterSpacing: '-0.02em',
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 0
                        },
                        children: "Anu Srinivasan"
                    }, void 0, false, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Footer.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "footer-center",
                    style: {
                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                        fontSize: '0.875rem',
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                        letterSpacing: '0.08em',
                        whiteSpace: 'nowrap'
                    },
                    children: "Bay Area, CA · Open to collaborations · Exploring what's next"
                }, void 0, false, {
                    fileName: "[project]/components/Footer.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "footer-right",
                    style: {
                        display: 'flex',
                        gap: 16,
                        alignItems: 'center',
                        justifyContent: 'flex-end'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://linkedin.com/in/ananyaa-srinivasan/",
                            target: "_blank",
                            rel: "noopener",
                            style: {
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                                fontSize: '0.875rem',
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                textDecoration: 'none',
                                transition: 'color 160ms'
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.color = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink;
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.color = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted;
                            },
                            children: "LinkedIn"
                        }, void 0, false, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://github.com/saya-gsan",
                            target: "_blank",
                            rel: "noopener",
                            style: {
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                                fontSize: '0.875rem',
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                textDecoration: 'none',
                                transition: 'color 160ms'
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.color = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink;
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.color = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted;
                            },
                            children: "GitHub"
                        }, void 0, false, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                fontSize: '0.75rem',
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted
                            },
                            children: "2025"
                        }, void 0, false, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Footer.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Footer.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Footer.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/PathogenGame.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PathogenGame)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tokens.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const GW = 580, GH = 155, GROUND = 120, GRAV = 0.72, JUMP_V = -14;
const DIFF_CFG = {
    easy: {
        speed: 3.5,
        spawnInterval: 110,
        hitPad: 7,
        label: 'Resting state',
        sub: 'slow cells · generous hitbox'
    },
    medium: {
        speed: 5.0,
        spawnInterval: 85,
        hitPad: 4,
        label: 'Immune activation',
        sub: 'default speed · standard density'
    },
    hard: {
        speed: 6.5,
        spawnInterval: 60,
        hitPad: 2,
        label: 'Cytokine storm',
        sub: 'fast · dense · cells track you'
    }
};
// ── Cell radius for collision ────────────────────────────────────────────────
function cellRadius(type) {
    if (type === 'macro') return 18;
    if (type === 'dendritic') return 20 // wide detection
    ;
    if (type === 'tcell_adaptive') return 9;
    if (type === 'complement') return 6;
    if (type === 'neutrophil') return 12;
    return 13;
}
// ── Draw pathogen (player) ───────────────────────────────────────────────────
function drawPathogen(ctx, x, y) {
    const r = 13, cx = x, cy = y - r;
    for(let i = 0; i < 8; i++){
        const a = i / 8 * Math.PI * 2;
        ctx.strokeStyle = '#22c55e';
        ctx.lineWidth = 1.5;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(cx + r * Math.cos(a), cy + r * Math.sin(a));
        ctx.lineTo(cx + (r + 6) * Math.cos(a), cy + (r + 6) * Math.sin(a));
        ctx.stroke();
        ctx.fillStyle = '#16a34a';
        ctx.beginPath();
        ctx.arc(cx + (r + 6) * Math.cos(a), cy + (r + 6) * Math.sin(a), 2, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.fillStyle = '#4ade80';
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#22c55e';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = '#14532d';
    ctx.beginPath();
    ctx.arc(cx - 4, cy - 3, 2.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx + 3, cy - 3, 2.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#14532d';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(cx, cy + 1, 4, 0.2, Math.PI - 0.2);
    ctx.stroke();
}
// ── Draw immune cell ─────────────────────────────────────────────────────────
function drawCell(ctx, x, groundY, type, yOff = 0) {
    const baseY = groundY + yOff;
    if (type === 'tcell') {
        // NK cell — red, 3 arms
        const r = 13, cx = x, cy = baseY - r;
        ctx.strokeStyle = '#d4451f';
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        for(let i = 0; i < 3; i++){
            const a = i / 3 * Math.PI * 2 - Math.PI / 2;
            const ex = cx + (r + 13) * Math.cos(a), ey = cy + (r + 13) * Math.sin(a);
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(ex, ey);
            ctx.stroke();
            [
                0.42,
                -0.42
            ].forEach((da)=>{
                ctx.beginPath();
                ctx.moveTo(ex, ey);
                ctx.lineTo(ex + 6 * Math.cos(a + da), ey + 6 * Math.sin(a + da));
                ctx.stroke();
            });
        }
        ctx.fillStyle = '#d4451f';
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'rgba(255,250,242,0.9)';
        ctx.font = "bold 7px 'JetBrains Mono', monospace";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('NK', cx, cy);
    } else if (type === 'antibody') {
        // B cell — dark, Y-shape antibody
        const r = 13, cx = x, cy = baseY - r;
        ctx.strokeStyle = '#241813';
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        for(let i = 0; i < 2; i++){
            const a = i / 2 * Math.PI * 2 - Math.PI / 2;
            const ex = cx + (r + 13) * Math.cos(a), ey = cy + (r + 13) * Math.sin(a);
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(ex, ey);
            ctx.stroke();
            [
                0.42,
                -0.42
            ].forEach((da)=>{
                ctx.beginPath();
                ctx.moveTo(ex, ey);
                ctx.lineTo(ex + 6 * Math.cos(a + da), ey + 6 * Math.sin(a + da));
                ctx.stroke();
            });
        }
        ctx.fillStyle = '#241813';
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'rgba(255,250,242,0.9)';
        ctx.font = "bold 7px 'JetBrains Mono', monospace";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('Ab', cx, cy);
    } else if (type === 'macro') {
        // Macrophage — large grey, pseudopod arms
        const r = 18, cx = x, cy = baseY - r;
        ctx.strokeStyle = '#7a6c63';
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        for(let i = 0; i < 4; i++){
            const a = i / 4 * Math.PI * 2 - Math.PI / 4;
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(cx + (r + 10) * Math.cos(a), cy + (r + 10) * Math.sin(a));
            ctx.stroke();
        }
        ctx.fillStyle = '#7a6c63';
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'rgba(255,250,242,0.9)';
        ctx.font = "bold 8px 'JetBrains Mono', monospace";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('M', cx, cy);
    } else if (type === 'neutrophil') {
        // Multi-lobed nucleus — amber, 5 lobes arranged in rough cluster
        const cx = x, cy = baseY - 14;
        const lobes = [
            {
                dx: -7,
                dy: 4
            },
            {
                dx: 0,
                dy: -3
            },
            {
                dx: 7,
                dy: 4
            },
            {
                dx: -4,
                dy: 10
            },
            {
                dx: 4,
                dy: 10
            }
        ];
        ctx.fillStyle = '#f59e0b';
        lobes.forEach(({ dx, dy })=>{
            ctx.beginPath();
            ctx.arc(cx + dx, cy + dy, 7, 0, Math.PI * 2);
            ctx.fill();
        });
        ctx.strokeStyle = '#d97706';
        ctx.lineWidth = 1.2;
        lobes.forEach(({ dx, dy })=>{
            ctx.beginPath();
            ctx.arc(cx + dx, cy + dy, 7, 0, Math.PI * 2);
            ctx.stroke();
        });
        ctx.fillStyle = '#92400e';
        ctx.font = "bold 6px 'JetBrains Mono', monospace";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('N', cx, cy + 3);
    } else if (type === 'dendritic') {
        // Spiky branched — purple, 10 alternating-length protrusions
        const r = 11, cx = x, cy = baseY - r - 4;
        ctx.lineCap = 'round';
        for(let i = 0; i < 10; i++){
            const a = i / 10 * Math.PI * 2;
            const len = i % 2 === 0 ? 18 : 11;
            ctx.strokeStyle = '#8b5cf6';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(cx + r * Math.cos(a), cy + r * Math.sin(a));
            ctx.lineTo(cx + (r + len) * Math.cos(a), cy + (r + len) * Math.sin(a));
            ctx.stroke();
            ctx.fillStyle = '#a78bfa';
            ctx.beginPath();
            ctx.arc(cx + (r + len) * Math.cos(a), cy + (r + len) * Math.sin(a), 1.8, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.fillStyle = '#8b5cf6';
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'rgba(255,250,242,0.9)';
        ctx.font = "bold 6px 'JetBrains Mono', monospace";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('DC', cx, cy);
    } else if (type === 'tcell_adaptive') {
        // T cell — small sky-blue, forked TCR receptors
        const r = 9, cx = x, cy = baseY - r;
        ctx.strokeStyle = '#0ea5e9';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        [
            -0.45,
            0.45
        ].forEach((offset)=>{
            const a = -Math.PI / 2 + offset;
            const ex = cx + (r + 8) * Math.cos(a), ey = cy + (r + 8) * Math.sin(a);
            ctx.beginPath();
            ctx.moveTo(cx + r * Math.cos(a), cy + r * Math.sin(a));
            ctx.lineTo(ex, ey);
            ctx.stroke();
            [
                0.4,
                -0.4
            ].forEach((da)=>{
                ctx.beginPath();
                ctx.moveTo(ex, ey);
                ctx.lineTo(ex + 6 * Math.cos(a + da), ey + 6 * Math.sin(a + da));
                ctx.stroke();
            });
        });
        ctx.fillStyle = '#0ea5e9';
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'rgba(255,250,242,0.9)';
        ctx.font = "bold 6px 'JetBrains Mono', monospace";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('T', cx, cy);
    } else if (type === 'complement') {
        // Tiny hexagon — pink, hard to see until close
        const r = 6, cx = x, cy = baseY - r - 2;
        ctx.fillStyle = '#ec4899';
        ctx.beginPath();
        for(let i = 0; i < 6; i++){
            const a = i / 6 * Math.PI * 2 - Math.PI / 6;
            i === 0 ? ctx.moveTo(cx + r * Math.cos(a), cy + r * Math.sin(a)) : ctx.lineTo(cx + r * Math.cos(a), cy + r * Math.sin(a));
        }
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#be185d';
        ctx.lineWidth = 1;
        ctx.stroke();
        for(let i = 0; i < 6; i++){
            const a = i / 6 * Math.PI * 2;
            ctx.strokeStyle = '#f9a8d4';
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(cx + r * 0.6 * Math.cos(a), cy + r * 0.6 * Math.sin(a));
            ctx.lineTo(cx + (r + 4) * Math.cos(a), cy + (r + 4) * Math.sin(a));
            ctx.stroke();
        }
    }
}
// ── Loss messages ────────────────────────────────────────────────────────────
const CELL_MESSAGES = {
    tcell: {
        name: 'NK cell',
        blurb: 'NK cells punch holes in infected cells using toxic proteins called perforins — no mercy, no escape.'
    },
    antibody: {
        name: 'B cell',
        blurb: 'B cells tag pathogens with antibodies so the rest of the immune system knows exactly what to destroy.'
    },
    macro: {
        name: 'macrophage',
        blurb: 'Macrophages engulf and digest pathogens whole — you just became lunch.'
    },
    neutrophil: {
        name: 'neutrophil',
        blurb: 'Neutrophils are the first responders of the immune system. They swarm infection sites and release enzymes that destroy anything foreign. Fast, aggressive, no mercy.'
    },
    dendritic: {
        name: 'dendritic cell',
        blurb: 'Dendritic cells are the immune system\'s scouts. They identify threats, capture them, and present the evidence to T cells to trigger a full immune response.'
    },
    tcell_adaptive: {
        name: 'T cell',
        blurb: 'T cells are the assassins of the adaptive immune system, trained to recognize and destroy specific targets. Once they know what you are, there\'s no hiding.'
    },
    complement: {
        name: 'complement protein',
        blurb: 'Complement proteins coat pathogens and punch holes in their membranes. You were tagged, coated, and dissolved. Classic.'
    }
};
function PathogenGame() {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const bestRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [gameState, setGameState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [difficulty, setDifficulty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isNewBest, setIsNewBest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [best, setBest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Hydration-safe: read localStorage only after mount so SSR and client agree on 0
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
        setBest(parseInt(localStorage.getItem('pg-best') || '0'));
    }, []);
    // Keep bestRef in sync so tick closure can read latest value
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        bestRef.current = best;
    }, [
        best
    ]);
    const initState = (diff)=>{
        const cfg = DIFF_CFG[diff];
        return {
            py: GROUND,
            pvy: 0,
            jumping: false,
            obstacles: [],
            frame: 0,
            score: 0,
            speed: cfg.speed,
            spawnCD: 50,
            spawnInterval: cfg.spawnInterval,
            alive: true,
            lastHitType: 'tcell',
            difficulty: diff,
            newBestFlash: 0
        };
    };
    const tick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const s = stateRef.current;
        if (!s || !s.alive) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        s.frame++;
        s.score++;
        const scoreVal = Math.floor(s.score / 6);
        const cfg = DIFF_CFG[s.difficulty];
        // ── Escalating speed/density ───────────────────────────────────────────
        const targetSpeed = scoreVal < 200 ? cfg.speed : scoreVal < 500 ? cfg.speed + 1.5 : cfg.speed + 3.0;
        const targetInterval = scoreVal < 200 ? cfg.spawnInterval : scoreVal < 500 ? Math.max(cfg.spawnInterval - 15, 42) : Math.max(cfg.spawnInterval - 28, 35);
        s.speed += (targetSpeed - s.speed) * 0.008;
        s.spawnInterval += (targetInterval - s.spawnInterval) * 0.008;
        // ── Physics ────────────────────────────────────────────────────────────
        if (s.jumping || s.py < GROUND) {
            s.pvy += GRAV;
            s.py = Math.min(s.py + s.pvy, GROUND);
            if (s.py >= GROUND) {
                s.py = GROUND;
                s.pvy = 0;
                s.jumping = false;
            }
        }
        // ── Spawn ──────────────────────────────────────────────────────────────
        s.spawnCD--;
        if (s.spawnCD <= 0) {
            const pool = [
                'tcell',
                'tcell',
                'antibody',
                'macro',
                'neutrophil',
                'neutrophil',
                'complement'
            ];
            if (scoreVal >= 100) pool.push('dendritic');
            if (scoreVal >= 300) pool.push('tcell_adaptive', 'tcell_adaptive');
            const chosen = pool[Math.floor(Math.random() * pool.length)];
            if (chosen === 'complement') {
                // Cluster of 3 staggered
                for(let i = 0; i < 3; i++){
                    s.obstacles.push({
                        x: GW + 40 + i * 24,
                        type: 'complement',
                        yOff: 0,
                        yVel: 0
                    });
                }
            } else {
                s.obstacles.push({
                    x: GW + 40,
                    type: chosen,
                    yOff: 0,
                    yVel: 0
                });
            }
            // Extra cells at higher scores
            if (scoreVal >= 200 && Math.random() < 0.35) {
                s.obstacles.push({
                    x: GW + 110,
                    type: 'complement',
                    yOff: 0,
                    yVel: 0
                });
            }
            if (scoreVal >= 500 && Math.random() < 0.4) {
                s.obstacles.push({
                    x: GW + 80,
                    type: pool[Math.floor(Math.random() * pool.length)],
                    yOff: 0,
                    yVel: 0
                });
            }
            s.spawnCD = Math.floor(s.spawnInterval) + Math.floor(Math.random() * 28);
        }
        // ── Move obstacles ─────────────────────────────────────────────────────
        s.obstacles = s.obstacles.filter((o)=>o.x > -80);
        s.obstacles.forEach((o)=>{
            let spd = s.speed;
            if (o.type === 'neutrophil') {
                // Erratic y-bob
                o.yVel += (Math.random() - 0.5) * 1.0;
                o.yVel = Math.max(-3.5, Math.min(3.5, o.yVel));
                o.yOff += o.yVel;
                o.yOff = Math.max(-18, Math.min(8, o.yOff));
                spd *= 1.15 // naturally faster
                ;
            }
            if (o.type === 'dendritic') spd *= 0.60 // slow scout
            ;
            if (o.type === 'tcell_adaptive') spd *= 1.45 // fast T cell
            ;
            // Hard mode / score 500+: periodic burst toward player
            const isBurstMode = s.difficulty === 'hard' || scoreVal >= 500;
            if (isBurstMode && o.x > 80 && s.frame % 160 < 18) spd *= 1.9;
            o.x -= spd;
        });
        // ── Collision ──────────────────────────────────────────────────────────
        const PR = 11, px = 70;
        const hitPad = cfg.hitPad;
        for (const o of s.obstacles){
            const or = cellRadius(o.type);
            const oy = GROUND + o.yOff;
            const dx = px - o.x, dy = s.py - PR - (oy - or);
            if (Math.sqrt(dx * dx + dy * dy) < PR + or - hitPad) {
                s.alive = false;
                s.lastHitType = o.type;
                const finalScore = Math.floor(s.score / 6);
                const newBestVal = Math.max(bestRef.current, finalScore);
                const beaten = finalScore > bestRef.current;
                setBest(newBestVal);
                localStorage.setItem('pg-best', String(newBestVal));
                setScore(finalScore);
                setIsNewBest(beaten);
                setGameState('dead');
                return;
            }
        }
        // ── New best flash during play ─────────────────────────────────────────
        if (s.newBestFlash > 0) s.newBestFlash--;
        if (scoreVal > 0 && scoreVal > bestRef.current && s.newBestFlash === 0) {
            s.newBestFlash = 100;
        }
        setScore(scoreVal);
        // ── Draw ───────────────────────────────────────────────────────────────
        ctx.clearRect(0, 0, GW, GH);
        ctx.fillStyle = 'rgba(247,241,232,0.4)';
        ctx.fillRect(0, 0, GW, GH);
        ctx.strokeStyle = 'rgba(36,24,19,0.12)';
        ctx.lineWidth = 1;
        ctx.setLineDash([
            4,
            6
        ]);
        ctx.beginPath();
        ctx.moveTo(0, GROUND + 2);
        ctx.lineTo(GW, GROUND + 2);
        ctx.stroke();
        ctx.setLineDash([]);
        s.obstacles.forEach((o)=>drawCell(ctx, o.x, GROUND, o.type, o.yOff));
        drawPathogen(ctx, 70, s.py);
        ctx.fillStyle = 'rgba(36,24,19,0.25)';
        ctx.font = "500 12px 'JetBrains Mono', monospace";
        ctx.textAlign = 'right';
        ctx.textBaseline = 'top';
        ctx.fillText(String(scoreVal).padStart(5, '0'), GW - 14, 12);
        if (s.newBestFlash > 0) {
            const alpha = Math.min(s.newBestFlash / 30, 1) * 0.9;
            ctx.fillStyle = `rgba(212,69,31,${alpha})`;
            ctx.font = "700 10px 'JetBrains Mono', monospace";
            ctx.textAlign = 'right';
            ctx.textBaseline = 'top';
            ctx.fillText('NEW BEST', GW - 14, 28);
        }
        rafRef.current = requestAnimationFrame(tick);
    }, []);
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((diff)=>{
        stateRef.current = initState(diff);
        setGameState('playing');
        setScore(0);
        setIsNewBest(false);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(tick);
    }, [
        tick
    ]);
    const jump = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (gameState === 'dead' && difficulty) {
            start(difficulty);
            return;
        }
        if (gameState === 'idle') return; // wait for difficulty selection
        const s = stateRef.current;
        if (s && !s.jumping && s.py >= GROUND) {
            s.pvy = JUMP_V;
            s.jumping = true;
        }
    }, [
        gameState,
        difficulty,
        start
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onKey = (e)=>{
            if (e.code === 'Space' || e.key === 'ArrowUp') {
                e.preventDefault();
                jump();
            }
        };
        window.addEventListener('keydown', onKey);
        return ()=>window.removeEventListener('keydown', onKey);
    }, [
        jump
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        }, []);
    // ── Canvas for idle / dead screens ────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (gameState !== 'idle' && gameState !== 'dead') return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, GW, GH);
        ctx.fillStyle = 'rgba(247,241,232,0.4)';
        ctx.fillRect(0, 0, GW, GH);
        ctx.strokeStyle = 'rgba(36,24,19,0.12)';
        ctx.lineWidth = 1;
        ctx.setLineDash([
            4,
            6
        ]);
        ctx.beginPath();
        ctx.moveTo(0, GROUND + 2);
        ctx.lineTo(GW, GROUND + 2);
        ctx.stroke();
        ctx.setLineDash([]);
        drawPathogen(ctx, 70, GROUND);
        const fillWrapped = (text, x, startY, maxW, lineH)=>{
            const words = text.split(' ');
            let line = '', y = startY;
            for (const w of words){
                const test = line ? line + ' ' + w : w;
                if (ctx.measureText(test).width > maxW && line) {
                    ctx.fillText(line, x, y);
                    line = w;
                    y += lineH;
                } else {
                    line = test;
                }
            }
            if (line) ctx.fillText(line, x, y);
            return y;
        };
        if (gameState === 'dead') {
            const hitType = stateRef.current?.lastHitType ?? 'tcell';
            const hit = CELL_MESSAGES[hitType] ?? CELL_MESSAGES['tcell'];
            drawCell(ctx, GW - 45, GROUND, hitType, 0);
            ctx.textAlign = 'center';
            ctx.textBaseline = 'alphabetic';
            if (isNewBest) {
                ctx.fillStyle = '#d4451f';
                ctx.font = "700 10px 'JetBrains Mono', monospace";
                ctx.fillText('NEW BEST', GW / 2, 20);
            }
            const topY = isNewBest ? 38 : 30;
            ctx.fillStyle = 'rgba(36,24,19,0.72)';
            ctx.font = "700 12.5px 'Inter Tight', sans-serif";
            ctx.fillText(`Oops! Caught by a ${hit.name}.`, GW / 2, topY);
            ctx.fillStyle = 'rgba(36,24,19,0.55)';
            ctx.font = "500 10.5px 'Inter Tight', sans-serif";
            const afterBlurb = fillWrapped(hit.blurb, GW / 2, topY + 18, 430, 15);
            ctx.fillStyle = 'rgba(36,24,19,0.32)';
            ctx.font = "500 10px 'JetBrains Mono', monospace";
            ctx.fillText('Choose a difficulty below · or SPACE to replay', GW / 2, afterBlurb + 20);
        } else {
            ctx.fillStyle = 'rgba(36,24,19,0.45)';
            ctx.font = "500 12px 'JetBrains Mono', monospace";
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(difficulty ? 'SPACE / TAP to start' : 'Choose a difficulty below to start', GW / 2, GH / 2 - 10);
        }
    }, [
        gameState,
        difficulty,
        isNewBest
    ]);
    // ── Render ─────────────────────────────────────────────────────────────────
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 10
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                            fontSize: '0.5625rem',
                            fontWeight: 500,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted
                        },
                        children: "Pathogen Escape"
                    }, void 0, false, {
                        fileName: "[project]/components/PathogenGame.tsx",
                        lineNumber: 490,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 16
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                    fontSize: '0.6875rem',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted
                                },
                                children: [
                                    "BEST ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                                            fontWeight: 500
                                        },
                                        children: mounted ? String(best).padStart(5, '0') : '00000'
                                    }, void 0, false, {
                                        fileName: "[project]/components/PathogenGame.tsx",
                                        lineNumber: 498,
                                        columnNumber: 18
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PathogenGame.tsx",
                                lineNumber: 497,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                    fontSize: '0.6875rem',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted
                                },
                                children: [
                                    "SCORE ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ember,
                                            fontWeight: 500
                                        },
                                        children: String(score).padStart(5, '0')
                                    }, void 0, false, {
                                        fileName: "[project]/components/PathogenGame.tsx",
                                        lineNumber: 501,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PathogenGame.tsx",
                                lineNumber: 500,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PathogenGame.tsx",
                        lineNumber: 496,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PathogenGame.tsx",
                lineNumber: 489,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                width: GW,
                height: GH,
                onClick: jump,
                style: {
                    width: '100%',
                    height: 'auto',
                    borderRadius: 14,
                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].hairline}`,
                    cursor: gameState === 'idle' ? 'default' : 'pointer',
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].canvas,
                    display: 'block'
                }
            }, void 0, false, {
                fileName: "[project]/components/PathogenGame.tsx",
                lineNumber: 507,
                columnNumber: 7
            }, this),
            (gameState === 'idle' || gameState === 'dead') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 8
                },
                children: [
                    gameState === 'dead' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                            fontSize: '0.5625rem',
                            fontWeight: 500,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted
                        },
                        children: "Play again?"
                    }, void 0, false, {
                        fileName: "[project]/components/PathogenGame.tsx",
                        lineNumber: 524,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 8,
                            flexWrap: 'wrap',
                            justifyContent: 'center'
                        },
                        children: [
                            'easy',
                            'medium',
                            'hard'
                        ].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setDifficulty(d);
                                    start(d);
                                },
                                style: {
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                    fontWeight: 700,
                                    fontSize: '0.8125rem',
                                    padding: '7px 16px',
                                    borderRadius: 10,
                                    cursor: 'pointer',
                                    border: `1px solid ${difficulty === d ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ember : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].border}`,
                                    background: difficulty === d ? 'rgba(212,69,31,0.08)' : 'transparent',
                                    color: difficulty === d ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ember : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                                    transition: 'all 160ms',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: 2
                                },
                                onMouseEnter: (e)=>{
                                    if (difficulty !== d) e.currentTarget.style.background = 'rgba(36,24,19,0.04)';
                                },
                                onMouseLeave: (e)=>{
                                    if (difficulty !== d) e.currentTarget.style.background = 'transparent';
                                },
                                children: [
                                    DIFF_CFG[d].label,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                            fontSize: '0.5rem',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                            letterSpacing: '0.06em'
                                        },
                                        children: DIFF_CFG[d].sub
                                    }, void 0, false, {
                                        fileName: "[project]/components/PathogenGame.tsx",
                                        lineNumber: 556,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, d, true, {
                                fileName: "[project]/components/PathogenGame.tsx",
                                lineNumber: 533,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/PathogenGame.tsx",
                        lineNumber: 531,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PathogenGame.tsx",
                lineNumber: 522,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                    fontSize: '0.75rem',
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                    textAlign: 'center'
                },
                children: "You're a pathogen evading the immune system. How long can you last?"
            }, void 0, false, {
                fileName: "[project]/components/PathogenGame.tsx",
                lineNumber: 566,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PathogenGame.tsx",
        lineNumber: 486,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/Landing.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Landing)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tokens.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PathogenGame$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PathogenGame.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────
const NOW_ITEMS = [
    {
        eyebrow: 'BUILDING',
        text: 'Optimizing the PrimeFlow EBER Flow-FISH protocol for clinical use at Stanford — finalizing antibody panels for single-cell resolution on the Cytek Aurora Evo.'
    },
    {
        eyebrow: 'WRITING',
        text: 'Drafting the manuscript for the DHR-based neutrophil oxidative burst assay; validation report submitted to Stanford Hospitals for clinical lab approval.'
    },
    {
        eyebrow: 'TINKERING',
        text: 'Building a flow cytometry panel-builder tool in Python — pulling fluorochrome spectra and flagging spillover before the wet lab even opens.'
    },
    {
        eyebrow: 'READING',
        text: 'Diving into foundational immunology and computational biology — and reading deep on NK cell biology and clinical assay design as we scope the next set of assays in the pipeline.'
    }
];
const INTERESTS = [
    'Psychology',
    'Writing',
    'Sketching',
    'Puzzles',
    'Hiking',
    'New cities, new everything'
];
const FEATURED = [
    {
        eyebrow: 'STANFORD · 2025',
        title: 'DHR-based neutrophil oxidative burst assay',
        tags: [
            'CLINICAL',
            'FLOW CYTOMETRY',
            'STANFORD PATHOLOGY'
        ],
        tab: 'core'
    },
    {
        eyebrow: 'CARL JUNE LAB · 2025',
        title: 'NK cell cytotoxicity predictive model',
        tags: [
            'PYTHON',
            'AI',
            'NK CELLS'
        ],
        tab: 'computational'
    },
    {
        eyebrow: 'STANFORD · 2025',
        title: 'Flow cytometry panel builder tool',
        tags: [
            'PYTHON',
            'COMPUTATIONAL',
            'TOOL'
        ],
        tab: 'computational'
    }
];
function Landing({ onTabChange }) {
    const [hovCard, setHovCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [contactOpen, setContactOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const contactRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!contactOpen) return;
        const handler = (e)=>{
            if (contactRef.current && !contactRef.current.contains(e.target)) {
                setContactOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return ()=>document.removeEventListener('mousedown', handler);
    }, [
        contactOpen
    ]);
    const handleCardHover = (i)=>{
        setHovCard(i);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(`.work-card-${i}`, {
            y: -4,
            duration: 0.25,
            ease: 'power2.out',
            boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadows"].cardHover
        });
    };
    const handleCardLeave = (i)=>{
        setHovCard(null);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(`.work-card-${i}`, {
            y: 0,
            duration: 0.25,
            ease: 'power2.in',
            boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadows"].card
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].surface,
            minHeight: '100vh'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: 1280,
                        width: '100%',
                        margin: '0 auto',
                        padding: 'clamp(40px, 6vh, 64px) clamp(20px, 3vw, 48px)',
                        boxSizing: 'border-box'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-two-col",
                        style: {
                            display: 'flex',
                            gap: 'clamp(32px, 4.5vw, 72px)',
                            alignItems: 'center',
                            flexWrap: 'wrap'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: '1 1 360px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 22
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hero-eyebrow",
                                        style: {
                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                            fontSize: '0.6875rem',
                                            fontWeight: 500,
                                            letterSpacing: '0.12em',
                                            textTransform: 'uppercase',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted
                                        },
                                        children: "Cellular Immunologist · Translational Biologist"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Landing.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                            fontWeight: 800,
                                            fontSize: 'clamp(2.75rem,6vw,5rem)',
                                            lineHeight: 0.95,
                                            letterSpacing: '-0.045em',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    overflow: 'hidden'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hero-name-word",
                                                    children: "Ananyaa"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Landing.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Landing.tsx",
                                                lineNumber: 111,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    overflow: 'hidden'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hero-name-word",
                                                    children: "Srinivasan"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Landing.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Landing.tsx",
                                                lineNumber: 114,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Landing.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hero-bio",
                                        style: {
                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                                            fontSize: '1.0625rem',
                                            lineHeight: 1.62,
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                            maxWidth: '46ch'
                                        },
                                        children: "Hi, I'm Anu. I work at the intersection of immunology, biological engineering, and clinical translation, currently building diagnostic assays at Stanford Pathology. Outside the lab, I apply that same thinking to biotech strategy and use computation to make the science faster. I'm happiest when an unsolved biological question has an answer that actually reaches a patient."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Landing.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: 10,
                                            flexWrap: 'wrap',
                                            marginTop: 4
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "hero-cta",
                                                onClick: ()=>onTabChange('core'),
                                                style: {
                                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                                    fontWeight: 800,
                                                    fontSize: '0.9375rem',
                                                    letterSpacing: '-0.01em',
                                                    padding: '13px 24px',
                                                    borderRadius: 14,
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    color: '#fffaf2',
                                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gradient"],
                                                    boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadows"].button
                                                },
                                                children: "See what I'm working on"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Landing.tsx",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                ref: contactRef,
                                                style: {
                                                    position: 'relative',
                                                    display: 'inline-block'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "hero-cta",
                                                        onClick: ()=>setContactOpen((o)=>!o),
                                                        style: {
                                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                                            fontWeight: 700,
                                                            fontSize: '0.9375rem',
                                                            padding: '13px 24px',
                                                            borderRadius: 14,
                                                            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].border}`,
                                                            cursor: 'pointer',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                                                            background: 'transparent',
                                                            transition: 'background 160ms'
                                                        },
                                                        onMouseEnter: (e)=>{
                                                            e.currentTarget.style.background = 'rgba(36,24,19,0.04)';
                                                        },
                                                        onMouseLeave: (e)=>{
                                                            e.currentTarget.style.background = 'transparent';
                                                        },
                                                        children: "Get in touch"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Landing.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 19
                                                    }, this),
                                                    contactOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            position: 'absolute',
                                                            top: 'calc(100% + 8px)',
                                                            left: 0,
                                                            background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].surface,
                                                            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].border}`,
                                                            borderRadius: 14,
                                                            padding: '18px 20px',
                                                            boxShadow: '0 4px 24px rgba(36,24,19,0.12)',
                                                            zIndex: 100,
                                                            minWidth: 280
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    marginBottom: 14
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                                                            fontSize: '0.5rem',
                                                                            letterSpacing: '0.12em',
                                                                            textTransform: 'uppercase',
                                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                                                            marginBottom: 7
                                                                        },
                                                                        children: "Email"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Landing.tsx",
                                                                        lineNumber: 172,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            justifyContent: 'space-between',
                                                                            gap: 10,
                                                                            marginBottom: 6
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                                                                    fontSize: '0.8125rem',
                                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                                                                                    userSelect: 'all'
                                                                                },
                                                                                children: "sriniananyaa@gmail.com"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/Landing.tsx",
                                                                                lineNumber: 176,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>{
                                                                                    navigator.clipboard.writeText('sriniananyaa@gmail.com');
                                                                                    setCopied(true);
                                                                                    setTimeout(()=>setCopied(false), 2000);
                                                                                },
                                                                                style: {
                                                                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                                                                    fontSize: '0.5625rem',
                                                                                    letterSpacing: '0.08em',
                                                                                    padding: '3px 8px',
                                                                                    borderRadius: 6,
                                                                                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].border}`,
                                                                                    background: 'transparent',
                                                                                    cursor: 'pointer',
                                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                                                                    whiteSpace: 'nowrap',
                                                                                    flexShrink: 0
                                                                                },
                                                                                children: copied ? 'Copied!' : 'Copy'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/Landing.tsx",
                                                                                lineNumber: 179,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/Landing.tsx",
                                                                        lineNumber: 175,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "mailto:sriniananyaa@gmail.com",
                                                                        style: {
                                                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                                                                            fontSize: '0.8125rem',
                                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ember,
                                                                            textDecoration: 'none'
                                                                        },
                                                                        children: "Open in mail client →"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Landing.tsx",
                                                                        lineNumber: 186,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/Landing.tsx",
                                                                lineNumber: 171,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    height: 1,
                                                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].divider,
                                                                    marginBottom: 14
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Landing.tsx",
                                                                lineNumber: 190,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                                                            fontSize: '0.5rem',
                                                                            letterSpacing: '0.12em',
                                                                            textTransform: 'uppercase',
                                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                                                            marginBottom: 7
                                                                        },
                                                                        children: "LinkedIn"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Landing.tsx",
                                                                        lineNumber: 193,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "https://linkedin.com/in/ananyaa-srinivasan/",
                                                                        target: "_blank",
                                                                        rel: "noopener",
                                                                        style: {
                                                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                                                                            fontSize: '0.8125rem',
                                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ember,
                                                                            textDecoration: 'none'
                                                                        },
                                                                        children: "linkedin.com/in/ananyaa-srinivasan →"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Landing.tsx",
                                                                        lineNumber: 196,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/Landing.tsx",
                                                                lineNumber: 192,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Landing.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Landing.tsx",
                                                lineNumber: 146,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Landing.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Landing.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: '0 0 clamp(280px, 27%, 340px)'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hero-tile",
                                    style: {
                                        borderRadius: 20,
                                        padding: '28px 26px',
                                        minHeight: 220,
                                        background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gradient"],
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                                fontSize: '0.5625rem',
                                                fontWeight: 500,
                                                letterSpacing: '0.12em',
                                                textTransform: 'uppercase',
                                                color: 'rgba(255,250,242,0.6)'
                                            },
                                            children: "CURRENT FOCUS"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Landing.tsx",
                                            lineNumber: 216,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                                        fontWeight: 800,
                                                        fontSize: '1.375rem',
                                                        letterSpacing: '-0.03em',
                                                        color: '#fffaf2',
                                                        lineHeight: 1.2,
                                                        marginBottom: 12
                                                    },
                                                    children: "Building a functional immunology lab — bench to bedside"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Landing.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                                        fontSize: '0.6875rem',
                                                        color: 'rgba(255,250,242,0.65)',
                                                        lineHeight: 1.6
                                                    },
                                                    children: "Stanford Pathology · 2025–"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Landing.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Landing.tsx",
                                            lineNumber: 222,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Landing.tsx",
                                    lineNumber: 208,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Landing.tsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Landing.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Landing.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Landing.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1280,
                    margin: '0 auto',
                    padding: '0 28px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        height: 1,
                        background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].divider
                    }
                }, void 0, false, {
                    fileName: "[project]/components/Landing.tsx",
                    lineNumber: 244,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Landing.tsx",
                lineNumber: 243,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1280,
                    margin: '0 auto',
                    padding: '56px 28px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "now-grid",
                    style: {
                        display: 'grid',
                        gridTemplateColumns: '1fr 2fr',
                        gap: 56,
                        alignItems: 'start'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "now-heading",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                        fontSize: '0.5625rem',
                                        fontWeight: 500,
                                        letterSpacing: '0.12em',
                                        textTransform: 'uppercase',
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                        marginBottom: 10
                                    },
                                    children: "Right now"
                                }, void 0, false, {
                                    fileName: "[project]/components/Landing.tsx",
                                    lineNumber: 251,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                        fontWeight: 800,
                                        fontSize: '1.625rem',
                                        letterSpacing: '-0.03em',
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                                        lineHeight: 1.15
                                    },
                                    children: [
                                        "What I'm",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/Landing.tsx",
                                            lineNumber: 262,
                                            columnNumber: 28
                                        }, this),
                                        "working on."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Landing.tsx",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Landing.tsx",
                            lineNumber: 250,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                flexDirection: 'column'
                            },
                            children: NOW_ITEMS.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "now-item",
                                    style: {
                                        display: 'flex',
                                        gap: 20,
                                        padding: '16px 0',
                                        borderBottom: i < NOW_ITEMS.length - 1 ? `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].divider}` : 'none'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                                fontSize: '0.5625rem',
                                                fontWeight: 500,
                                                letterSpacing: '0.10em',
                                                textTransform: 'uppercase',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ember,
                                                width: 90,
                                                flexShrink: 0,
                                                paddingTop: 3
                                            },
                                            children: item.eyebrow
                                        }, void 0, false, {
                                            fileName: "[project]/components/Landing.tsx",
                                            lineNumber: 276,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                                                fontSize: '0.9375rem',
                                                lineHeight: 1.62,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink
                                            },
                                            children: item.text
                                        }, void 0, false, {
                                            fileName: "[project]/components/Landing.tsx",
                                            lineNumber: 283,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/Landing.tsx",
                                    lineNumber: 268,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Landing.tsx",
                            lineNumber: 266,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Landing.tsx",
                    lineNumber: 249,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Landing.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1280,
                    margin: '0 auto',
                    padding: '0 28px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        height: 1,
                        background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].divider
                    }
                }, void 0, false, {
                    fileName: "[project]/components/Landing.tsx",
                    lineNumber: 294,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Landing.tsx",
                lineNumber: 293,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1280,
                    margin: '0 auto',
                    padding: '56px 28px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                            fontWeight: 800,
                            fontSize: '1.625rem',
                            letterSpacing: '-0.03em',
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                            marginBottom: 28
                        },
                        children: "Selected work"
                    }, void 0, false, {
                        fileName: "[project]/components/Landing.tsx",
                        lineNumber: 299,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "work-grid",
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: 14
                        },
                        children: FEATURED.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `work-card work-card-${i}`,
                                onMouseEnter: ()=>handleCardHover(i),
                                onMouseLeave: ()=>handleCardLeave(i),
                                onClick: ()=>onTabChange(p.tab),
                                style: {
                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].surface,
                                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].hairline}`,
                                    borderRadius: 20,
                                    padding: '22px 24px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 10,
                                    boxShadow: hovCard === i ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadows"].cardHover : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadows"].card,
                                    transition: 'box-shadow 240ms cubic-bezier(0.4,0,0.2,1)',
                                    cursor: 'pointer'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                            fontSize: '0.5625rem',
                                            fontWeight: 500,
                                            letterSpacing: '0.12em',
                                            textTransform: 'uppercase',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted
                                        },
                                        children: p.eyebrow
                                    }, void 0, false, {
                                        fileName: "[project]/components/Landing.tsx",
                                        lineNumber: 322,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                            fontSize: '1rem',
                                            fontWeight: 800,
                                            letterSpacing: '-0.02em',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                                            lineHeight: 1.2
                                        },
                                        children: p.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/Landing.tsx",
                                        lineNumber: 328,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: 6,
                                            flexWrap: 'wrap',
                                            marginTop: 'auto'
                                        },
                                        children: p.tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                                    fontSize: '0.5rem',
                                                    fontWeight: 500,
                                                    letterSpacing: '0.08em',
                                                    textTransform: 'uppercase',
                                                    padding: '3px 8px',
                                                    background: 'rgba(36,24,19,0.07)',
                                                    borderRadius: 6,
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted
                                                },
                                                children: t
                                            }, t, false, {
                                                fileName: "[project]/components/Landing.tsx",
                                                lineNumber: 336,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Landing.tsx",
                                        lineNumber: 334,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/components/Landing.tsx",
                                lineNumber: 307,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Landing.tsx",
                        lineNumber: 305,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Landing.tsx",
                lineNumber: 298,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].canvas
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: 1280,
                        margin: '0 auto',
                        padding: '56px 28px'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "interests-game-grid",
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '1fr 2fr',
                            gap: 56,
                            alignItems: 'start'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "interests-heading",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                            fontSize: '0.5625rem',
                                            fontWeight: 500,
                                            letterSpacing: '0.12em',
                                            textTransform: 'uppercase',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                            marginBottom: 10
                                        },
                                        children: "Outside the lab"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Landing.tsx",
                                        lineNumber: 358,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                            fontWeight: 800,
                                            fontSize: '1.375rem',
                                            letterSpacing: '-0.03em',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                                            marginBottom: 14
                                        },
                                        children: "I collect entry points."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Landing.tsx",
                                        lineNumber: 365,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                                            fontSize: '0.9375rem',
                                            lineHeight: 1.6,
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                            marginBottom: 18
                                        },
                                        children: "I collect entry points. A new city, a new skill, a concept I don't fully understand yet. I'll follow it until it makes sense. I sketch, write, spend too long on puzzles, and have a quiet obsession with psychology and how people think. Anything that makes my brain work a little harder is usually worth my time, and anything involving chocolate, matcha, or coconut is usually worth the detour."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Landing.tsx",
                                        lineNumber: 371,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: 8,
                                            flexWrap: 'wrap'
                                        },
                                        children: INTERESTS.map((label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "interest-pill",
                                                style: {
                                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                                    fontWeight: 700,
                                                    fontSize: '0.8125rem',
                                                    padding: '7px 16px',
                                                    borderRadius: 9999,
                                                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].border}`,
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].surface
                                                },
                                                children: label
                                            }, label, false, {
                                                fileName: "[project]/components/Landing.tsx",
                                                lineNumber: 384,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Landing.tsx",
                                        lineNumber: 382,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Landing.tsx",
                                lineNumber: 357,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "game-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                            fontSize: '0.5625rem',
                                            fontWeight: 500,
                                            letterSpacing: '0.12em',
                                            textTransform: 'uppercase',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                            marginBottom: 14
                                        },
                                        children: "Need a break?"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Landing.tsx",
                                        lineNumber: 402,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PathogenGame$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/components/Landing.tsx",
                                        lineNumber: 409,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Landing.tsx",
                                lineNumber: 401,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Landing.tsx",
                        lineNumber: 354,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Landing.tsx",
                    lineNumber: 353,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Landing.tsx",
                lineNumber: 352,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Landing.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/CoreField.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CoreField)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tokens.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const CELL_DEFS = [
    {
        type: 'tcr',
        xFrac: 0.05,
        size: 58,
        color: '#d4451f',
        phase: 0.0,
        speed: 0.55
    },
    {
        type: 'bcr',
        xFrac: 0.82,
        size: 40,
        color: '#ff7a2e',
        phase: 1.2,
        speed: 0.47
    },
    {
        type: 'plasma',
        xFrac: 0.45,
        size: 36,
        color: '#ffd24a',
        phase: 2.1,
        speed: 0.38
    },
    {
        type: 'rbc',
        xFrac: 0.15,
        size: 30,
        color: '#b53412',
        phase: 0.8,
        speed: 0.62
    },
    {
        type: 'dc',
        xFrac: 0.72,
        size: 34,
        color: '#ff8a3d',
        phase: 3.0,
        speed: 0.42
    },
    {
        type: 'treg',
        xFrac: 0.92,
        size: 44,
        color: '#ff7a2e',
        phase: 1.7,
        speed: 0.50
    },
    {
        type: 'nk',
        xFrac: 0.35,
        size: 50,
        color: '#ffd24a',
        phase: 4.0,
        speed: 0.44
    },
    {
        type: 'macro',
        xFrac: 0.58,
        size: 60,
        color: '#d4451f',
        phase: 0.5,
        speed: 0.36
    },
    {
        type: 'tcr',
        xFrac: 0.08,
        size: 42,
        color: '#ff7a2e',
        phase: 2.5,
        speed: 0.52
    },
    {
        type: 'bcr',
        xFrac: 0.65,
        size: 38,
        color: '#d4451f',
        phase: 1.4,
        speed: 0.48
    },
    {
        type: 'dc',
        xFrac: 0.25,
        size: 36,
        color: '#ff8a3d',
        phase: 3.6,
        speed: 0.40
    },
    {
        type: 'nk',
        xFrac: 0.88,
        size: 48,
        color: '#ffd24a',
        phase: 0.9,
        speed: 0.56
    },
    {
        type: 'plasma',
        xFrac: 0.50,
        size: 40,
        color: '#ffd24a',
        phase: 4.8,
        speed: 0.34
    },
    {
        type: 'rbc',
        xFrac: 0.78,
        size: 32,
        color: '#b53412',
        phase: 2.2,
        speed: 0.60
    },
    {
        type: 'treg',
        xFrac: 0.12,
        size: 34,
        color: '#ff7a2e',
        phase: 1.1,
        speed: 0.46
    },
    {
        type: 'macro',
        xFrac: 0.42,
        size: 56,
        color: '#d4451f',
        phase: 5.2,
        speed: 0.38
    },
    {
        type: 'tcr',
        xFrac: 0.70,
        size: 44,
        color: '#ff7a2e',
        phase: 0.3,
        speed: 0.54
    },
    {
        type: 'bcr',
        xFrac: 0.18,
        size: 46,
        color: '#d4451f',
        phase: 3.4,
        speed: 0.43
    },
    {
        type: 'dc',
        xFrac: 0.85,
        size: 38,
        color: '#ff8a3d',
        phase: 1.9,
        speed: 0.49
    },
    {
        type: 'nk',
        xFrac: 0.55,
        size: 52,
        color: '#ffd24a',
        phase: 2.7,
        speed: 0.41
    },
    {
        type: 'rbc',
        xFrac: 0.08,
        size: 30,
        color: '#b53412',
        phase: 4.3,
        speed: 0.57
    },
    {
        type: 'treg',
        xFrac: 0.62,
        size: 44,
        color: '#ff7a2e',
        phase: 0.7,
        speed: 0.51
    },
    {
        type: 'macro',
        xFrac: 0.30,
        size: 58,
        color: '#d4451f',
        phase: 3.9,
        speed: 0.37
    },
    {
        type: 'plasma',
        xFrac: 0.90,
        size: 36,
        color: '#ffd24a',
        phase: 1.5,
        speed: 0.45
    },
    {
        type: 'bcr',
        xFrac: 0.48,
        size: 40,
        color: '#ff7a2e',
        phase: 5.5,
        speed: 0.42
    },
    {
        type: 'dc',
        xFrac: 0.75,
        size: 34,
        color: '#ff8a3d',
        phase: 2.0,
        speed: 0.53
    },
    {
        type: 'tcr',
        xFrac: 0.20,
        size: 54,
        color: '#d4451f',
        phase: 0.6,
        speed: 0.39
    },
    {
        type: 'nk',
        xFrac: 0.38,
        size: 48,
        color: '#ffd24a',
        phase: 4.1,
        speed: 0.47
    },
    {
        type: 'rbc',
        xFrac: 0.68,
        size: 34,
        color: '#b53412',
        phase: 1.3,
        speed: 0.61
    },
    {
        type: 'macro',
        xFrac: 0.15,
        size: 60,
        color: '#d4451f',
        phase: 3.2,
        speed: 0.35
    },
    {
        type: 'treg',
        xFrac: 0.52,
        size: 42,
        color: '#ff7a2e',
        phase: 2.4,
        speed: 0.50
    },
    {
        type: 'plasma',
        xFrac: 0.85,
        size: 38,
        color: '#ffd24a',
        phase: 0.2,
        speed: 0.44
    },
    {
        type: 'dc',
        xFrac: 0.28,
        size: 36,
        color: '#ff8a3d',
        phase: 5.0,
        speed: 0.46
    },
    {
        type: 'bcr',
        xFrac: 0.72,
        size: 44,
        color: '#ff7a2e',
        phase: 1.8,
        speed: 0.52
    },
    {
        type: 'tcr',
        xFrac: 0.42,
        size: 50,
        color: '#d4451f',
        phase: 3.7,
        speed: 0.40
    }
];
const NK_GRANULES = [
    [
        35,
        40
    ],
    [
        60,
        38
    ],
    [
        42,
        58
    ],
    [
        65,
        60
    ],
    [
        50,
        50
    ]
];
const DC_ANGLES = [
    15,
    75,
    145,
    215,
    285,
    340
];
function hexRgba(hex, a) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${a})`;
}
function drawCell(ctx, type, color, cx, cy, r) {
    ctx.save();
    ctx.lineCap = 'round';
    if (type === 'rbc') {
        ctx.beginPath();
        ctx.arc(cx, cy, r * 0.44, 0, Math.PI * 2);
        ctx.fillStyle = hexRgba(color, 0x10 / 255);
        ctx.fill();
        ctx.strokeStyle = hexRgba(color, 0x55 / 255);
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
        return;
    }
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fillStyle = hexRgba(color, 0x18 / 255);
    ctx.fill();
    ctx.strokeStyle = hexRgba(color, 0x30 / 255);
    ctx.lineWidth = 1.5;
    ctx.stroke();
    const ds = hexRgba(color, 0x55 / 255);
    if (type === 'tcr' || type === 'treg') {
        for (const deg of [
            20,
            90,
            200,
            290
        ]){
            const a = deg * Math.PI / 180;
            ctx.beginPath();
            ctx.moveTo(cx + r * 0.8 * Math.cos(a), cy + r * 0.8 * Math.sin(a));
            ctx.lineTo(cx + r * Math.cos(a), cy + r * Math.sin(a));
            ctx.strokeStyle = ds;
            ctx.lineWidth = 1.4;
            ctx.stroke();
        }
        if (type === 'treg') {
            ctx.beginPath();
            ctx.arc(cx, cy, r * 0.28, 0, Math.PI * 2);
            ctx.strokeStyle = ds;
            ctx.lineWidth = 1;
            ctx.setLineDash([
                2,
                2
            ]);
            ctx.stroke();
            ctx.setLineDash([]);
        }
    } else if (type === 'bcr' || type === 'plasma') {
        for (const deg of [
            40,
            130,
            220,
            310
        ]){
            const a = deg * Math.PI / 180;
            const x1 = cx + r * 0.76 * Math.cos(a);
            const y1 = cy + r * 0.76 * Math.sin(a);
            const x2 = cx + r * 0.96 * Math.cos(a);
            const y2 = cy + r * 0.96 * Math.sin(a);
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.moveTo(x2, y2);
            ctx.lineTo(x2 + r * 0.08 * Math.cos(a + 0.6), y2 + r * 0.08 * Math.sin(a + 0.6));
            ctx.moveTo(x2, y2);
            ctx.lineTo(x2 + r * 0.08 * Math.cos(a - 0.6), y2 + r * 0.08 * Math.sin(a - 0.6));
            ctx.strokeStyle = ds;
            ctx.lineWidth = 1.2;
            ctx.stroke();
        }
    } else if (type === 'nk') {
        for (const [px, py] of NK_GRANULES){
            ctx.beginPath();
            ctx.arc(cx + (px - 50) / 50 * r, cy + (py - 50) / 50 * r, r * 0.05, 0, Math.PI * 2);
            ctx.fillStyle = hexRgba(color, 0x40 / 255);
            ctx.fill();
        }
    } else if (type === 'macro') {
        ctx.beginPath();
        ctx.arc(cx, cy, r * 0.8, 0, Math.PI * 2);
        ctx.strokeStyle = ds;
        ctx.lineWidth = 1;
        ctx.setLineDash([
            3,
            2
        ]);
        ctx.stroke();
        ctx.setLineDash([]);
        for (const deg of [
            30,
            110,
            200,
            280
        ]){
            const a = deg * Math.PI / 180;
            ctx.beginPath();
            ctx.arc(cx + r * 0.84 * Math.cos(a), cy + r * 0.84 * Math.sin(a), r * 0.06, 0, Math.PI * 2);
            ctx.fillStyle = hexRgba(color, 0x30 / 255);
            ctx.fill();
        }
    } else if (type === 'dc') {
        for(let i = 0; i < DC_ANGLES.length; i++){
            const a = DC_ANGLES[i] * Math.PI / 180;
            const outerR = r * (1.2 + i % 2 * 0.12);
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(cx + outerR * Math.cos(a), cy + outerR * Math.sin(a));
            ctx.strokeStyle = ds;
            ctx.lineWidth = 1.2;
            ctx.stroke();
        }
    }
    ctx.restore();
}
const SKILLS = [
    'Multi-color Flow',
    'Spectral Flow',
    'Cytek Aurora',
    'PrimeFlow / Flow-FISH',
    'Mammalian Cell Culture',
    'Molecular Cloning',
    'Lentiviral Packaging',
    'Transduction',
    'ELISA',
    'DLS',
    'TFF / UF / DF',
    'FlowJo · FCS Express · SpectroFlo'
];
const STANFORD_PROJECTS = [
    {
        eyebrow: 'STANFORD · IN PROGRESS',
        title: 'EBER Flow-FISH for clinical EBV detection',
        desc: 'Building the first validated Flow-FISH assay for EBV detection in a clinical setting, designed to diagnose EBV+ lymphoproliferative disorders at single-cell resolution. The assay uses ThermoFisher\'s PrimeFlow platform, which amplifies signal via branched nucleic acids and requires a strict 40°C hybridization, a technically demanding 2-day protocol that has never been validated in a clinical laboratory setting before. Designing the antibody panel to simultaneously gate B, T, and NK populations alongside kappa/lambda light chain and TRBC clonality readouts on the Cytek Aurora Evo. Currently finalizing antibody selection and FCS Express analysis templates before optimizing and locking the protocol in terms of time and ease of use for clinical validation.',
        tags: [
            'PrimeFlow',
            'EBV',
            'Cytek Aurora',
            'FCS Express',
            'Clinical',
            'Lymphoproliferative'
        ]
    },
    {
        eyebrow: 'STANFORD · MANUSCRIPT IN PREP',
        title: 'DHR-based neutrophil oxidative burst assay',
        desc: 'Developed and validated a flow cytometry assay for neutrophil oxidative burst using dihydrorhodamine 123, a functional readout for chronic granulomatous disease (CGD), a rare inherited immune disorder where neutrophils fail to produce reactive oxygen species. The core innovation is a mature neutrophil gating strategy using an 8-marker antibody panel (CD13, CD10, PDL-1, CD64, CD45, CD16, 7-AAD, DHR) that separates mature from immature granulocytes, resolving the signal dilution problem that causes standard DHR assays to return indeterminate results. Validated across 120+ patients. Manuscript in preparation. What made this project particularly meaningful: the assay has been cross-validated against the current diagnostic standard, and in several cases resolved genuine clinical ambiguity: specimens previously suspected as CGD were ruled out, and others flagged as carriers were confirmed as CGD. In one case, we ran the assay on a stem cell transplant patient being treated for CGD and saw, in real time, both the patient\'s older non-functional neutrophil population and the newly engrafted functional donor cells — within a week post-transplant. The transplant had worked. We knew before the patient and their care team did. That moment is why I do this work.',
        tags: [
            'DHR',
            'Neutrophils',
            'CGD',
            'Clinical Validation',
            'Spectral Flow',
            'Panel Design'
        ]
    }
];
const PAST_PROJECTS = [
    {
        eyebrow: 'CARL JUNE LAB · 2023–2025',
        title: 'NK cell engineering via feeder cell systems',
        desc: 'Investigated how ICAM-1, CD58, 41BBL, and aCD56 feeder configurations shape NK cell expansion, viability, and cytotoxicity against Raji and U251 tumor lines. Engineered the feeder systems via molecular cloning and lentiviral transduction; achieved a 300-fold NK expansion and 92% tumor cell lysis.',
        tags: [
            'NK cells',
            'Cell Engineering',
            'Lentivirus',
            'Cytotoxicity'
        ]
    },
    {
        eyebrow: 'MODERNA · 2024',
        title: 'mRNA-LNP scale-up and stability optimization',
        desc: 'Joined Moderna\'s LNP Process Development team as a co-op, working across 7+ formulation projects focused on improving the scalability and manufacturability of mRNA-LNP therapeutics. Led an independent mixer scalability assessment, comparing particle size and PDI across flow rates to identify a mixer that maintained consistent nanoparticle characteristics from small-scale to large-scale production, supporting future GMP alignment. Ran end-to-end LNP production, systematically varying ingredient ratios, process flow, and neutralization buffers to improve encapsulation efficiency, reduce particle size, and stabilize pH. Worked with TFF, ultrafiltration, and diafiltration; characterized particles by DLS and flow cytometry; used automated liquid handlers for high-throughput sample prep. (The specific results? Can\'t say more. NDA signed, lips sealed.)',
        tags: [
            'mRNA-LNP',
            'TFF',
            'DLS',
            'Process Development',
            'Scalability',
            'GMP'
        ]
    },
    {
        eyebrow: 'PENN · 2023',
        title: 'mRNA Zika virus vaccine design',
        desc: 'Designed an mRNA Zika vaccine with human codon optimization, E-DII-FL mutations, and mosquito salivary protein incorporation. Proposed pre-clinical animal studies and a pipeline-driven development approach.',
        tags: [
            'mRNA',
            'Vaccine Design',
            'Zika'
        ]
    },
    {
        eyebrow: 'IIT MADRAS · 2022',
        title: 'Intervertebral disc biomaterial: protein-ligand docking',
        desc: 'Computational summer research project focused on identifying biomaterial-based treatments for intervertebral disc degeneration. Conducted literature review to identify candidate protein and ligand sequences, modeled 3D structures in PyMOL, and performed in-silico docking using AutoDock Vina. Analyzed binding interactions in Biovia Discovery Studio, assessing bond types, lengths, and binding energies to identify stable protein-ligand configurations for downstream experimental validation.',
        tags: [
            'PyMOL',
            'AutoDock',
            'Molecular Docking',
            'Biomaterials',
            'Computational'
        ]
    }
];
const EXPERIENCES = [
    {
        eyebrow: 'STANFORD · SEP 2025–PRESENT',
        title: 'Life Science Research Professional',
        where: 'Department of Pathology, Stanford School of Medicine',
        summary: 'Stood up a brand-new functional immunology lab from the ground up: workflows, equipment onboarding, assay development, and clinical translation. Developing diagnostic assays for functional immune disorders and pathogen-driven disease, and transferring them into routine use at Stanford Hospitals.',
        takeaways: [
            'Building a lab from scratch is a totally different skillset from running experiments in one. Every workflow, SOP, and reagent is a decision you have to defend.',
            'Working directly with clinical lab scientists has been the best education in writing protocols that survive contact with reality. Research-grade clarity isn\'t enough.',
            'The most rewarding moment of my career so far was seeing our DHR assay data show a stem cell transplant working in real time — before the clinical team knew. That\'s what translational work is supposed to feel like.',
            'Onboarding the Cytek Aurora has made me appreciate how much spectral flow cytometry really means panel design done right. The instrument is unforgiving of shortcuts.'
        ]
    },
    {
        eyebrow: 'CARL JUNE LAB · 2023–2025',
        title: 'Research Assistant, Carl June Lab, Center for Cellular Immunotherapies',
        where: 'University of Pennsylvania',
        summary: 'My first proper wet lab role, and the one that taught me almost everything I know at the bench. The June Lab, led by Carl June whose CAR-T cell therapy work is foundational to the entire field of cellular immunotherapy, was where I went from knowing biology in theory to doing it with my hands. The pandemic had made wet lab access nearly impossible during my undergrad in India, so arriving here felt like finally getting to work. I started from the basics (mammalian cell culture, aseptic technique, primary cell isolation) and progressively took on more complex workflows: engineering new cell lines from scratch, lentiviral packaging and transduction, molecular cloning, cytotoxicity assay design. By the end, I was leading an independent project engineering feeder cell systems for NK cell expansion and building an AI-based predictive model for cytotoxicity. The range of what I learned here is hard to overstate.',
        takeaways: [
            'This is where I learned that good science is mostly good habits: sterile technique, careful labeling, knowing when your controls are lying to you.',
            'Cell therapy is humbling. The variability between donors, between days, between technicians is enormous. That\'s where the real engineering problems live.',
            'Being in the June Lab taught me that good experiment design is half the work. The other half is owning your assays end-to-end so you actually trust the readout.',
            'The most useful thing I learned was how to talk to PIs and post-docs across very different sub-fields without losing the thread. Translational work demands that.'
        ]
    },
    {
        eyebrow: 'MODERNA · JUL–DEC 2024',
        title: 'Co-op, LNP Process Development',
        where: 'Moderna Therapeutics, Norwood, MA',
        summary: 'My first corporate experience, and a real education in what it means to do science inside an organization that ships products. I moved to a new city knowing nobody, joined a team mid-project, and had to figure out both the science and the unspoken rules of a fast-moving biotech at the same time. The people I met here were some of the best I\'ve worked with, and the experience of navigating a new city alone while doing demanding technical work taught me things no lab ever could. The work itself was LNP process development: formulation, scalability, characterization. What surprised me most was how much small, careful changes to process parameters cascaded into meaningful differences in the final product. Industry runs on that discipline. Every variable is documented, every deviation has a reason, and the difference between a good batch and a suboptimal one is often one decision made six steps earlier.',
        takeaways: [
            'Industry runs on data discipline I didn\'t fully appreciate in academia. Every decision has a paper trail and a reason.',
            'Process development is design. The variables you choose to control vs. let float are how you ship a product, not just run an experiment.',
            'Moving somewhere new alone and figuring it out (professionally and personally) is its own kind of education. I\'m glad I did it.',
            'I learned to love DOE here. It\'s the most efficient way to think about a multi-factor system, and it changed how I plan experiments now.'
        ]
    },
    {
        eyebrow: 'IIT MADRAS · SUMMER 2022',
        title: 'Summer Research Intern',
        where: 'Indian Institute of Technology, Madras, Chennai, India',
        summary: 'Summer research internship focused on rational biomaterial design for intervertebral disc degeneration. First real exposure to computational structural biology, modeling protein structures in PyMOL and evaluating molecular docking interactions using AutoDock Vina entirely in silico.',
        takeaways: [
            'Working computationally taught me to think about molecules as three-dimensional objects with geometry and binding constraints, something wet lab work alone doesn\'t give you.',
            'This is where I first got curious about the intersection of computation and biology, before I had the vocabulary to call it computational biology.'
        ]
    },
    {
        eyebrow: 'NEUBERG DIAGNOSTICS · NOV–DEC 2021',
        title: 'Molecular Biology Intern',
        where: 'Neuberg Diagnostics, Chennai, India',
        summary: 'Volunteered as a molecular biology intern at Neuberg Diagnostics during the height of the COVID-19 pandemic, helping process and test patient samples at a time when diagnostic labs were overwhelmed. Worked with high-throughput RT-PCR assays (RNA and DNA extraction, amplification, and result interpretation), contributing directly to COVID-19 patient testing workflows under high-volume, high-pressure conditions.',
        takeaways: [
            'Seeing diagnostics under pandemic pressure was formative. When assays fail at scale, it\'s not an experiment that goes wrong, it\'s a patient who waits.',
            'This planted the seed for why I later gravitated toward clinical translation work. I wanted to build things that actually get used.'
        ]
    }
];
const LEGEND = [
    {
        label: 'T cell (TCR)',
        color: '#d4451f'
    },
    {
        label: 'B cell (BCR)',
        color: '#ff7a2e'
    },
    {
        label: 'NK (granules)',
        color: '#ffd24a'
    },
    {
        label: 'Macrophage',
        color: '#d4451f'
    },
    {
        label: 'Dendritic cell',
        color: '#ff8a3d'
    },
    {
        label: 'RBC',
        color: '#b53412'
    },
    {
        label: 'Treg',
        color: '#ff7a2e'
    },
    {
        label: 'Plasma cell',
        color: '#ffd24a'
    }
];
function CoreField() {
    const [openExp, setOpenExp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const container = containerRef.current;
        const canvas = canvasRef.current;
        if (!container || !canvas) return;
        let rafId = 0;
        let t = 0;
        const init = ()=>{
            cancelAnimationFrame(rafId);
            const w = container.clientWidth;
            const h = container.scrollHeight;
            if (!w || !h) return;
            canvas.width = w;
            canvas.height = h;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            const draw = ()=>{
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                CELL_DEFS.forEach((def, i)=>{
                    const baseX = def.xFrac * canvas.width;
                    const baseY = (i + 0.5) / CELL_DEFS.length * canvas.height;
                    const xAmp = 8 + i % 4 * 4;
                    const yAmp = 6 + i % 3 * 4;
                    const cx = baseX + Math.sin(t * def.speed + def.phase) * xAmp;
                    const cy = baseY + Math.cos(t * def.speed * 0.7 + def.phase + 1) * yAmp;
                    drawCell(ctx, def.type, def.color, cx, cy, def.size / 2);
                });
                t += 0.016;
                rafId = requestAnimationFrame(draw);
            };
            draw();
        };
        init();
        const ro = new ResizeObserver(init);
        ro.observe(container);
        return ()=>{
            cancelAnimationFrame(rafId);
            ro.disconnect();
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"])(()=>{
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
            defaults: {
                ease: 'power3.out'
            }
        });
        tl.from('.cf-eyebrow', {
            opacity: 0,
            y: 14,
            duration: 0.5
        }, 0.1);
        tl.from('.cf-title-word', {
            yPercent: 110,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power4.out'
        }, 0.2);
        tl.from('.cf-bio', {
            opacity: 0,
            y: 20,
            duration: 0.55
        }, 0.55);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from('.skill-chip', {
            opacity: 0,
            x: -16,
            stagger: 0.04,
            duration: 0.45,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.cf-skills',
                start: 'top 85%'
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from('.cf-legend-item', {
            opacity: 0,
            x: -10,
            stagger: 0.05,
            duration: 0.4,
            scrollTrigger: {
                trigger: '.cf-legend',
                start: 'top 90%'
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from('.stanford-card', {
            opacity: 0,
            y: 32,
            stagger: 0.12,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.stanford-section',
                start: 'top 80%'
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from('.past-card', {
            opacity: 0,
            y: 32,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.past-section',
                start: 'top 80%'
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from('.pub-card', {
            opacity: 0,
            y: 24,
            stagger: 0.1,
            duration: 0.5,
            scrollTrigger: {
                trigger: '.pub-section',
                start: 'top 82%'
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from('.exp-card', {
            opacity: 0,
            y: 28,
            stagger: 0.12,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.exp-section',
                start: 'top 80%'
            }
        });
    }, {
        scope: containerRef
    });
    const ProjectCard = ({ p, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${className} project-card-grid`,
            style: {
                background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].surface,
                border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].hairline}`,
                borderRadius: 20,
                padding: '24px 28px',
                display: 'grid',
                gridTemplateColumns: '180px 1fr',
                gap: 28,
                boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadows"].card
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                        fontSize: '0.5625rem',
                        fontWeight: 500,
                        letterSpacing: '0.10em',
                        textTransform: 'uppercase',
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                        paddingTop: 3
                    },
                    children: p.eyebrow
                }, void 0, false, {
                    fileName: "[project]/components/CoreField.tsx",
                    lineNumber: 383,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                fontWeight: 800,
                                fontSize: '1.0625rem',
                                letterSpacing: '-0.02em',
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                                marginBottom: 8
                            },
                            children: p.title
                        }, void 0, false, {
                            fileName: "[project]/components/CoreField.tsx",
                            lineNumber: 391,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                                fontSize: '0.9375rem',
                                lineHeight: 1.6,
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                marginBottom: 14
                            },
                            children: p.desc
                        }, void 0, false, {
                            fileName: "[project]/components/CoreField.tsx",
                            lineNumber: 397,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: 6,
                                flexWrap: 'wrap'
                            },
                            children: p.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                        fontSize: '0.5625rem',
                                        fontWeight: 500,
                                        letterSpacing: '0.08em',
                                        textTransform: 'uppercase',
                                        padding: '3px 8px',
                                        background: 'rgba(36,24,19,0.07)',
                                        borderRadius: 6,
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted
                                    },
                                    children: tag
                                }, tag, false, {
                                    fileName: "[project]/components/CoreField.tsx",
                                    lineNumber: 405,
                                    columnNumber: 13
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/CoreField.tsx",
                            lineNumber: 403,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CoreField.tsx",
                    lineNumber: 390,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/CoreField.tsx",
            lineNumber: 374,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        style: {
            background: '#fffaf2',
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    pointerEvents: 'none',
                    zIndex: 0
                }
            }, void 0, false, {
                fileName: "[project]/components/CoreField.tsx",
                lineNumber: 421,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1280,
                    margin: '0 auto',
                    padding: '72px 28px 40px',
                    position: 'relative',
                    zIndex: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cf-eyebrow",
                        style: {
                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                            fontSize: '0.6875rem',
                            fontWeight: 500,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                            marginBottom: 16
                        },
                        children: "Core Field · Cellular Immunology & Translational Biology"
                    }, void 0, false, {
                        fileName: "[project]/components/CoreField.tsx",
                        lineNumber: 435,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                            fontWeight: 800,
                            fontSize: 'clamp(2.2rem,4.5vw,3.75rem)',
                            lineHeight: 0.98,
                            letterSpacing: '-0.04em',
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                            marginBottom: 22,
                            maxWidth: '18ch'
                        },
                        children: [
                            'Building the tools',
                            'that make immune',
                            'cells work for us.'
                        ].map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    overflow: 'hidden'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "cf-title-word",
                                    children: line
                                }, void 0, false, {
                                    fileName: "[project]/components/CoreField.tsx",
                                    lineNumber: 450,
                                    columnNumber: 15
                                }, this)
                            }, i, false, {
                                fileName: "[project]/components/CoreField.tsx",
                                lineNumber: 449,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/CoreField.tsx",
                        lineNumber: 442,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cf-bio",
                        style: {
                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                            fontSize: '1.0625rem',
                            lineHeight: 1.62,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                            maxWidth: '54ch',
                            marginBottom: 32
                        },
                        children: "From engineered NK cell feeders at the Carl June Lab, to mRNA-LNP process development at Moderna, to flow-cytometric diagnostics at Stanford Pathology — my work bridges wet-lab cell biology with the rigour of clinical and process translation."
                    }, void 0, false, {
                        fileName: "[project]/components/CoreField.tsx",
                        lineNumber: 455,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cf-skills",
                        style: {
                            display: 'flex',
                            gap: 8,
                            flexWrap: 'wrap'
                        },
                        children: SKILLS.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "skill-chip",
                                style: {
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                    fontWeight: 700,
                                    fontSize: '0.8125rem',
                                    padding: '6px 14px',
                                    borderRadius: 9999,
                                    background: 'rgba(212,69,31,0.08)',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ember,
                                    border: '1px solid rgba(212,69,31,0.18)',
                                    cursor: 'default'
                                },
                                children: s
                            }, s, false, {
                                fileName: "[project]/components/CoreField.tsx",
                                lineNumber: 466,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/CoreField.tsx",
                        lineNumber: 464,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CoreField.tsx",
                lineNumber: 434,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cf-legend",
                style: {
                    maxWidth: 1280,
                    margin: '0 auto',
                    padding: '0 28px 48px',
                    position: 'relative',
                    zIndex: 1
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        gap: 16,
                        flexWrap: 'wrap',
                        alignItems: 'center'
                    },
                    children: [
                        LEGEND.map(({ label, color })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cf-legend-item",
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 5
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 9,
                                            height: 9,
                                            borderRadius: '50%',
                                            background: color,
                                            flexShrink: 0,
                                            opacity: 0.7
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/CoreField.tsx",
                                        lineNumber: 481,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                                            fontSize: '0.75rem',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted
                                        },
                                        children: label
                                    }, void 0, false, {
                                        fileName: "[project]/components/CoreField.tsx",
                                        lineNumber: 482,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, label, true, {
                                fileName: "[project]/components/CoreField.tsx",
                                lineNumber: 480,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                fontSize: '0.5625rem',
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                letterSpacing: '0.06em'
                            },
                            children: "↑ floating in background"
                        }, void 0, false, {
                            fileName: "[project]/components/CoreField.tsx",
                            lineNumber: 485,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CoreField.tsx",
                    lineNumber: 478,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/CoreField.tsx",
                lineNumber: 477,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stanford-section",
                style: {
                    maxWidth: 1280,
                    margin: '0 auto',
                    padding: '0 28px 64px',
                    position: 'relative',
                    zIndex: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            height: 1,
                            background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].divider,
                            marginBottom: 40
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/CoreField.tsx",
                        lineNumber: 491,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'baseline',
                            marginBottom: 8,
                            flexWrap: 'wrap',
                            gap: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                    fontWeight: 800,
                                    fontSize: '1.625rem',
                                    letterSpacing: '-0.03em',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink
                                },
                                children: "At Stanford right now"
                            }, void 0, false, {
                                fileName: "[project]/components/CoreField.tsx",
                                lineNumber: 493,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                    fontSize: '0.5625rem',
                                    letterSpacing: '0.10em',
                                    textTransform: 'uppercase',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ember
                                },
                                children: "● Active"
                            }, void 0, false, {
                                fileName: "[project]/components/CoreField.tsx",
                                lineNumber: 496,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CoreField.tsx",
                        lineNumber: 492,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                            fontSize: '0.9375rem',
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                            marginBottom: 28
                        },
                        children: "Functional immunology assays, built for the clinic."
                    }, void 0, false, {
                        fileName: "[project]/components/CoreField.tsx",
                        lineNumber: 500,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 14
                        },
                        children: STANFORD_PROJECTS.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
                                p: p,
                                className: "stanford-card"
                            }, i, false, {
                                fileName: "[project]/components/CoreField.tsx",
                                lineNumber: 504,
                                columnNumber: 44
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/CoreField.tsx",
                        lineNumber: 503,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CoreField.tsx",
                lineNumber: 490,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "past-section",
                style: {
                    maxWidth: 1280,
                    margin: '0 auto',
                    padding: '0 28px 64px',
                    position: 'relative',
                    zIndex: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                            fontWeight: 800,
                            fontSize: '1.625rem',
                            letterSpacing: '-0.03em',
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                            marginBottom: 8
                        },
                        children: "Past projects"
                    }, void 0, false, {
                        fileName: "[project]/components/CoreField.tsx",
                        lineNumber: 510,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                            fontSize: '0.9375rem',
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                            marginBottom: 28
                        },
                        children: "What I built before Stanford."
                    }, void 0, false, {
                        fileName: "[project]/components/CoreField.tsx",
                        lineNumber: 513,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 14
                        },
                        children: PAST_PROJECTS.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
                                p: p,
                                className: "past-card"
                            }, i, false, {
                                fileName: "[project]/components/CoreField.tsx",
                                lineNumber: 517,
                                columnNumber: 40
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/CoreField.tsx",
                        lineNumber: 516,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CoreField.tsx",
                lineNumber: 509,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pub-section",
                style: {
                    maxWidth: 1280,
                    margin: '0 auto',
                    padding: '0 28px 64px',
                    position: 'relative',
                    zIndex: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                            fontWeight: 800,
                            fontSize: '1.625rem',
                            letterSpacing: '-0.03em',
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                            marginBottom: 8
                        },
                        children: "Publications"
                    }, void 0, false, {
                        fileName: "[project]/components/CoreField.tsx",
                        lineNumber: 523,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                            fontSize: '0.9375rem',
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                            marginBottom: 28
                        },
                        children: "And one more in the pipeline."
                    }, void 0, false, {
                        fileName: "[project]/components/CoreField.tsx",
                        lineNumber: 526,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 12
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pub-card",
                                style: {
                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].surface,
                                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].hairline}`,
                                    borderRadius: 20,
                                    padding: '22px 26px',
                                    boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadows"].card
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                            fontWeight: 800,
                                            fontSize: '1rem',
                                            letterSpacing: '-0.02em',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                                            marginBottom: 4
                                        },
                                        children: "Immunization against COVID-19: A Comprehensive Review on the Leading Vaccines"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CoreField.tsx",
                                        lineNumber: 534,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                            fontSize: '0.625rem',
                                            letterSpacing: '0.08em',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                            marginBottom: 8
                                        },
                                        children: "Coronaviruses · January 2024"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CoreField.tsx",
                                        lineNumber: 537,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                                            fontSize: '0.9375rem',
                                            lineHeight: 1.6,
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                            marginBottom: 8
                                        },
                                        children: "Co-authored review of leading COVID-19 vaccines: production methods, trial outcomes, efficacy, and safety profiles."
                                    }, void 0, false, {
                                        fileName: "[project]/components/CoreField.tsx",
                                        lineNumber: 540,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                            fontSize: '0.6875rem',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ember
                                        },
                                        children: "doi.org/10.2174/0126667975285709231219080802"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CoreField.tsx",
                                        lineNumber: 543,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CoreField.tsx",
                                lineNumber: 530,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pub-card",
                                style: {
                                    background: 'rgba(212,69,31,0.06)',
                                    border: '1px dashed rgba(212,69,31,0.25)',
                                    borderRadius: 20,
                                    padding: '18px 26px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                            fontSize: '0.5625rem',
                                            letterSpacing: '0.1em',
                                            textTransform: 'uppercase',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ember,
                                            marginBottom: 4
                                        },
                                        children: "In preparation"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CoreField.tsx",
                                        lineNumber: 551,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                                            fontSize: '0.9375rem',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink
                                        },
                                        children: "Manuscript on the DHR-based neutrophil oxidative burst assay · Stanford Pathology · 2025"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CoreField.tsx",
                                        lineNumber: 554,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CoreField.tsx",
                                lineNumber: 547,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CoreField.tsx",
                        lineNumber: 529,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CoreField.tsx",
                lineNumber: 522,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].canvas
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "exp-section",
                        style: {
                            maxWidth: 1280,
                            margin: '0 auto',
                            padding: '64px 28px 40px',
                            position: 'relative',
                            zIndex: 1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                    fontWeight: 800,
                                    fontSize: '1.625rem',
                                    letterSpacing: '-0.03em',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                                    marginBottom: 8
                                },
                                children: "The path here"
                            }, void 0, false, {
                                fileName: "[project]/components/CoreField.tsx",
                                lineNumber: 564,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                                    fontSize: '0.9375rem',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                    marginBottom: 32
                                },
                                children: "What I learned along the way: the technical, and the personal."
                            }, void 0, false, {
                                fileName: "[project]/components/CoreField.tsx",
                                lineNumber: 567,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 12
                                },
                                children: EXPERIENCES.map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "exp-card",
                                        style: {
                                            background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].surface,
                                            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].hairline}`,
                                            borderRadius: 20,
                                            boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadows"].card,
                                            overflow: 'hidden'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setOpenExp(openExp === i ? null : i),
                                                style: {
                                                    width: '100%',
                                                    background: 'none',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    padding: '22px 28px',
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: 28,
                                                    textAlign: 'left'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "exp-label",
                                                        style: {
                                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                                            fontSize: '0.5625rem',
                                                            fontWeight: 500,
                                                            letterSpacing: '0.10em',
                                                            textTransform: 'uppercase',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                                            paddingTop: 4,
                                                            width: 180,
                                                            flexShrink: 0
                                                        },
                                                        children: e.eyebrow
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CoreField.tsx",
                                                        lineNumber: 583,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            flex: 1
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                                                    fontWeight: 800,
                                                                    fontSize: '1rem',
                                                                    letterSpacing: '-0.02em',
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink
                                                                },
                                                                children: e.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/CoreField.tsx",
                                                                lineNumber: 589,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                                                                    fontSize: '0.8125rem',
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                                                    marginTop: 3
                                                                },
                                                                children: e.where
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/CoreField.tsx",
                                                                lineNumber: 592,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                                                                    fontSize: '0.9375rem',
                                                                    lineHeight: 1.6,
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                                                    marginTop: 8
                                                                },
                                                                children: e.summary
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/CoreField.tsx",
                                                                lineNumber: 595,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/CoreField.tsx",
                                                        lineNumber: 588,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                                            transition: 'transform 240ms',
                                                            transform: openExp === i ? 'rotate(180deg)' : 'none',
                                                            flexShrink: 0,
                                                            paddingTop: 3
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "16",
                                                            height: "16",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2.5",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                points: "6 9 12 15 18 9"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/CoreField.tsx",
                                                                lineNumber: 605,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CoreField.tsx",
                                                            lineNumber: 604,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CoreField.tsx",
                                                        lineNumber: 599,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/CoreField.tsx",
                                                lineNumber: 576,
                                                columnNumber: 17
                                            }, this),
                                            openExp === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "exp-takeaways",
                                                style: {
                                                    padding: '0 28px 24px 236px',
                                                    borderTop: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].divider}`,
                                                    paddingTop: 20
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                                            fontSize: '0.5625rem',
                                                            fontWeight: 500,
                                                            letterSpacing: '0.12em',
                                                            textTransform: 'uppercase',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                                            marginBottom: 12
                                                        },
                                                        children: "Key takeaways"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CoreField.tsx",
                                                        lineNumber: 611,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            gap: 10
                                                        },
                                                        children: e.takeaways.map((tk, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    gap: 12,
                                                                    alignItems: 'flex-start'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            width: 5,
                                                                            height: 5,
                                                                            borderRadius: '50%',
                                                                            background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ember,
                                                                            marginTop: 7,
                                                                            flexShrink: 0
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/CoreField.tsx",
                                                                        lineNumber: 617,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                                                                            fontSize: '0.9375rem',
                                                                            lineHeight: 1.6,
                                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink
                                                                        },
                                                                        children: tk
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/CoreField.tsx",
                                                                        lineNumber: 618,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, j, true, {
                                                                fileName: "[project]/components/CoreField.tsx",
                                                                lineNumber: 616,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CoreField.tsx",
                                                        lineNumber: 614,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/CoreField.tsx",
                                                lineNumber: 610,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/components/CoreField.tsx",
                                        lineNumber: 572,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/CoreField.tsx",
                                lineNumber: 570,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CoreField.tsx",
                        lineNumber: 563,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: 1280,
                            margin: '0 auto',
                            padding: '0 28px 80px',
                            position: 'relative',
                            zIndex: 1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    height: 1,
                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].divider,
                                    marginBottom: 40
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/CoreField.tsx",
                                lineNumber: 631,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                    fontWeight: 800,
                                    fontSize: '1.625rem',
                                    letterSpacing: '-0.03em',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                                    marginBottom: 8
                                },
                                children: "Where it started"
                            }, void 0, false, {
                                fileName: "[project]/components/CoreField.tsx",
                                lineNumber: 632,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                                    fontSize: '0.9375rem',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                    marginBottom: 28
                                },
                                children: "The degrees behind the work."
                            }, void 0, false, {
                                fileName: "[project]/components/CoreField.tsx",
                                lineNumber: 635,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 12
                                },
                                children: [
                                    {
                                        years: '2023–2025',
                                        degree: 'Masters in Biotechnology (Molecular Biology)',
                                        school: 'University of Pennsylvania',
                                        gpa: 'GPA 3.95'
                                    },
                                    {
                                        years: '2019–2023',
                                        degree: 'B.Tech Biotechnology',
                                        school: 'Vellore Institute of Technology',
                                        gpa: 'GPA 3.96'
                                    }
                                ].map((ed)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "edu-grid",
                                        style: {
                                            background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].surface,
                                            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].hairline}`,
                                            borderRadius: 20,
                                            padding: '24px 28px',
                                            boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadows"].card,
                                            display: 'grid',
                                            gridTemplateColumns: '180px 1fr',
                                            gap: 28
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                                    fontSize: '0.5625rem',
                                                    fontWeight: 500,
                                                    letterSpacing: '0.10em',
                                                    textTransform: 'uppercase',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                                    paddingTop: 3
                                                },
                                                children: ed.years
                                            }, void 0, false, {
                                                fileName: "[project]/components/CoreField.tsx",
                                                lineNumber: 648,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                                            fontWeight: 800,
                                                            fontSize: '1.0625rem',
                                                            letterSpacing: '-0.02em',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                                                            marginBottom: 4
                                                        },
                                                        children: ed.degree
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CoreField.tsx",
                                                        lineNumber: 654,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                                                            fontSize: '0.9375rem',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                                            marginBottom: 6
                                                        },
                                                        children: ed.school
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CoreField.tsx",
                                                        lineNumber: 657,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                                            fontSize: '0.5625rem',
                                                            letterSpacing: '0.08em',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ember
                                                        },
                                                        children: ed.gpa
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CoreField.tsx",
                                                        lineNumber: 660,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/CoreField.tsx",
                                                lineNumber: 653,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, ed.years, true, {
                                        fileName: "[project]/components/CoreField.tsx",
                                        lineNumber: 643,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/CoreField.tsx",
                                lineNumber: 638,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CoreField.tsx",
                        lineNumber: 630,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CoreField.tsx",
                lineNumber: 562,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CoreField.tsx",
        lineNumber: 418,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/Consulting.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Consulting)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tokens.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const ENGAGEMENTS = [
    {
        eyebrow: 'PGCC · JAN–MAY 2025',
        org: 'Penn Graduate Consulting Club',
        role: 'Business Associate',
        title: 'Market entry strategy for a DNA-LNP gene therapy platform',
        desc: 'A Penn-affiliated biotech lab needed help navigating a crowded $6B+ gene therapy market with a novel DNA-LNP platform and no clear indication focus. The challenge was real ambiguity: strong technology, unclear where to point it. I ran opportunity sizing and competitive analysis across 10+ disease indications, integrating scientific literature, epidemiological data, pipeline intelligence, and payer dynamics to assess clinical and commercial feasibility for each. The output was a data-driven framework identifying three high-potential, underserved indications where the platform could credibly differentiate, used to guide R&D prioritization and investor engagement.',
        outcome: 'Delivered indication shortlist and go-to-market positioning strategy to guide R&D focus and investor narrative.',
        tags: [
            'Gene Therapy',
            'Market Entry',
            'Competitive Analysis',
            'Indication Selection'
        ]
    },
    {
        eyebrow: 'PBG · JAN–MAY 2024',
        org: 'Penn Biotech Group',
        role: 'Project Member',
        title: 'Commercial viability assessment: Valley Fever animal vaccine',
        desc: 'A biotech client needed to evaluate whether developing a Valley Fever vaccine for animals was worth pursuing, a niche indication in a $10B+ animal health market with limited precedent and high uncertainty. I conducted top-down market sizing using epidemiological data, pricing benchmarks, and regulatory considerations, and built out competitive positioning and development feasibility analyses. The work translated into a go/no-go framework the client used to make an actual product development decision, which is the part that stuck with me. This project was the first time I had to synthesize scientific feasibility and commercial viability in the same document, and it crystallized something: that intersection is where I actually want to spend time.',
        outcome: 'Delivered market opportunity assessment and go/no-go framework used to inform internal investment and product development decisions.',
        tags: [
            'Animal Health',
            'Market Sizing',
            'Go/No-Go',
            'Vaccine Strategy'
        ]
    },
    {
        eyebrow: 'WIPRO · JAN–JUN 2023',
        org: 'Wipro Limited',
        role: 'Project Intern, Healthcare & AI',
        title: 'AI strategies for clinical trial recruitment',
        desc: 'Contributed research and analytical support to a cross-functional initiative at Wipro focused on improving clinical trial efficiency through AI and automation. Patient recruitment drives more than 30% of trial delays. I mapped clinical trial workflow bottlenecks, benchmarked competitor AI platforms, and researched digital health models that had improved enrollment rates by up to 40%. That research fed directly into strategy decks and investment priority recommendations presented to leadership. My role was research and deck support that gave the material to inform the overall direction, an honest but genuinely useful contribution at the start of a career.',
        outcome: 'Research and analysis supported strategy decks outlining AI-driven recruitment improvements, contributing to digital adoption investment priorities.',
        tags: [
            'Healthcare AI',
            'Clinical Trials',
            'Strategy',
            'Market Research'
        ]
    }
];
const PROFILE_ROWS = [
    {
        label: 'Focus areas',
        value: 'Cell & Gene Therapy · Biotech Strategy · Healthcare AI · Market Entry'
    },
    {
        label: 'Strengths',
        value: 'Market sizing · Competitive landscape · Indication selection · Go/No-Go frameworks · Scientific due diligence'
    },
    {
        label: 'Engagement model',
        value: 'Project-based · Open to collaborations · Available alongside research role'
    },
    {
        label: 'Location',
        value: 'San Francisco, CA · Remote-friendly'
    }
];
function Consulting() {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [contactOpen, setContactOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const contactRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!contactOpen) return;
        const handler = (e)=>{
            if (contactRef.current && !contactRef.current.contains(e.target)) {
                setContactOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return ()=>document.removeEventListener('mousedown', handler);
    }, [
        contactOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"])(()=>{
        // Hero text reveal
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
            defaults: {
                ease: 'power4.out'
            }
        });
        tl.from('.con-eyebrow', {
            opacity: 0,
            y: 12,
            duration: 0.5
        }, 0.15);
        tl.from('.con-title-word', {
            yPercent: 110,
            duration: 0.85,
            stagger: 0.1
        }, 0.2);
        tl.from('.con-bio', {
            opacity: 0,
            y: 20,
            duration: 0.55
        }, 0.6);
        tl.from('.con-ctas', {
            opacity: 0,
            y: 16,
            duration: 0.5
        }, 0.75);
        // Profile table rows stagger in from left
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from('.profile-row', {
            opacity: 0,
            x: -24,
            stagger: 0.1,
            duration: 0.55,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.profile-table',
                start: 'top 82%'
            }
        });
        // Penn callout
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from('.penn-callout', {
            opacity: 0,
            y: 28,
            duration: 0.6,
            scrollTrigger: {
                trigger: '.penn-callout',
                start: 'top 82%'
            }
        });
        // Engagement cards stagger
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from('.engagement-card', {
            opacity: 0,
            y: 36,
            stagger: 0.12,
            duration: 0.65,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.engagements-section',
                start: 'top 80%'
            }
        });
    }, {
        scope: containerRef
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        style: {
            background: '#ffffff',
            minHeight: '100vh'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 820,
                    margin: '0 auto',
                    padding: '96px 32px 56px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "con-eyebrow",
                        style: {
                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                            fontSize: '0.6875rem',
                            fontWeight: 500,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                            marginBottom: 22
                        },
                        children: "Consulting profile"
                    }, void 0, false, {
                        fileName: "[project]/components/Consulting.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                            fontWeight: 800,
                            fontSize: 'clamp(2.25rem,4vw,3rem)',
                            lineHeight: 1.04,
                            letterSpacing: '-0.04em',
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                            marginBottom: 22
                        },
                        children: [
                            "A scientist's lens",
                            'on strategy.'
                        ].map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    overflow: 'hidden'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "con-title-word",
                                    children: line
                                }, void 0, false, {
                                    fileName: "[project]/components/Consulting.tsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, this)
                            }, i, false, {
                                fileName: "[project]/components/Consulting.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Consulting.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "con-bio",
                        style: {
                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                            fontSize: '1.0625rem',
                            lineHeight: 1.72,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                            maxWidth: '56ch',
                            marginBottom: 36
                        },
                        children: "Consulting experience built at Penn's biotech and healthcare strategy clubs, working on real client engagements at the intersection of science, market dynamics, and decision-making. Open to project-based collaborations alongside my research role."
                    }, void 0, false, {
                        fileName: "[project]/components/Consulting.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "con-ctas",
                        style: {
                            display: 'flex',
                            gap: 10,
                            flexWrap: 'wrap'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: contactRef,
                                style: {
                                    position: 'relative',
                                    display: 'inline-block'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setContactOpen((o)=>!o),
                                        style: {
                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                            fontWeight: 800,
                                            fontSize: '0.9375rem',
                                            padding: '13px 24px',
                                            borderRadius: 14,
                                            border: 'none',
                                            cursor: 'pointer',
                                            color: '#fffaf2',
                                            background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                                            transition: 'opacity 160ms'
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.opacity = '0.85';
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.opacity = '1';
                                        },
                                        children: "Get in touch"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Consulting.tsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this),
                                    contactOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            top: 'calc(100% + 8px)',
                                            left: 0,
                                            background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].surface,
                                            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].border}`,
                                            borderRadius: 14,
                                            padding: '18px 20px',
                                            boxShadow: '0 4px 24px rgba(36,24,19,0.12)',
                                            zIndex: 100,
                                            minWidth: 280
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginBottom: 14
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                                            fontSize: '0.5rem',
                                                            letterSpacing: '0.12em',
                                                            textTransform: 'uppercase',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                                            marginBottom: 7
                                                        },
                                                        children: "Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Consulting.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'space-between',
                                                            gap: 10,
                                                            marginBottom: 6
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                                                    fontSize: '0.8125rem',
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                                                                    userSelect: 'all'
                                                                },
                                                                children: "sriniananyaa@gmail.com"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Consulting.tsx",
                                                                lineNumber: 156,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    navigator.clipboard.writeText('sriniananyaa@gmail.com');
                                                                    setCopied(true);
                                                                    setTimeout(()=>setCopied(false), 2000);
                                                                },
                                                                style: {
                                                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                                                    fontSize: '0.5625rem',
                                                                    letterSpacing: '0.08em',
                                                                    padding: '3px 8px',
                                                                    borderRadius: 6,
                                                                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].border}`,
                                                                    background: 'transparent',
                                                                    cursor: 'pointer',
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                                                    whiteSpace: 'nowrap',
                                                                    flexShrink: 0
                                                                },
                                                                children: copied ? 'Copied!' : 'Copy'
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Consulting.tsx",
                                                                lineNumber: 159,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Consulting.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "mailto:sriniananyaa@gmail.com",
                                                        style: {
                                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                                                            fontSize: '0.8125rem',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ember,
                                                            textDecoration: 'none'
                                                        },
                                                        children: "Open in mail client →"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Consulting.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Consulting.tsx",
                                                lineNumber: 151,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    height: 1,
                                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].divider,
                                                    marginBottom: 14
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/Consulting.tsx",
                                                lineNumber: 170,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                                            fontSize: '0.5rem',
                                                            letterSpacing: '0.12em',
                                                            textTransform: 'uppercase',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                                            marginBottom: 7
                                                        },
                                                        children: "LinkedIn"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Consulting.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "https://linkedin.com/in/ananyaa-srinivasan/",
                                                        target: "_blank",
                                                        rel: "noopener",
                                                        style: {
                                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                                                            fontSize: '0.8125rem',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ember,
                                                            textDecoration: 'none'
                                                        },
                                                        children: "linkedin.com/in/ananyaa-srinivasan →"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Consulting.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Consulting.tsx",
                                                lineNumber: 172,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Consulting.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Consulting.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://linkedin.com/in/ananyaa-srinivasan/",
                                target: "_blank",
                                rel: "noopener",
                                style: {
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                    fontWeight: 700,
                                    fontSize: '0.9375rem',
                                    padding: '13px 24px',
                                    borderRadius: 14,
                                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].border}`,
                                    cursor: 'pointer',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                                    background: 'transparent',
                                    textDecoration: 'none',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 7,
                                    transition: 'background 160ms'
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.background = 'rgba(36,24,19,0.04)';
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.background = 'transparent';
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "15",
                                        height: "15",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Consulting.tsx",
                                                lineNumber: 200,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "4",
                                                cy: "4",
                                                r: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Consulting.tsx",
                                                lineNumber: 201,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Consulting.tsx",
                                        lineNumber: 199,
                                        columnNumber: 13
                                    }, this),
                                    "LinkedIn"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Consulting.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Consulting.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Consulting.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "profile-table",
                style: {
                    maxWidth: 820,
                    margin: '0 auto',
                    padding: '0 32px 64px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        borderTop: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].divider}`
                    },
                    children: PROFILE_ROWS.map(({ label, value })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "profile-row",
                            style: {
                                display: 'flex',
                                gap: 40,
                                padding: '16px 0',
                                borderBottom: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].divider}`,
                                alignItems: 'flex-start'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "profile-label",
                                    style: {
                                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                                        fontSize: '0.875rem',
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                        width: 180,
                                        flexShrink: 0
                                    },
                                    children: label
                                }, void 0, false, {
                                    fileName: "[project]/components/Consulting.tsx",
                                    lineNumber: 220,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                                        fontSize: '0.9375rem',
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                                        lineHeight: 1.5
                                    },
                                    children: value
                                }, void 0, false, {
                                    fileName: "[project]/components/Consulting.tsx",
                                    lineNumber: 223,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, label, true, {
                            fileName: "[project]/components/Consulting.tsx",
                            lineNumber: 212,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Consulting.tsx",
                    lineNumber: 210,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Consulting.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: '#f5f5f0',
                    padding: '64px 32px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "penn-callout",
                    style: {
                        maxWidth: 820,
                        margin: '0 auto'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                fontSize: '0.6875rem',
                                fontWeight: 500,
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                marginBottom: 20
                            },
                            children: "Penn consulting"
                        }, void 0, false, {
                            fileName: "[project]/components/Consulting.tsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                fontWeight: 800,
                                fontSize: '1.5rem',
                                letterSpacing: '-0.03em',
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                                marginBottom: 10
                            },
                            children: "Trained at Penn's consulting clubs."
                        }, void 0, false, {
                            fileName: "[project]/components/Consulting.tsx",
                            lineNumber: 240,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                                fontSize: '1rem',
                                lineHeight: 1.68,
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                maxWidth: '60ch'
                            },
                            children: "Penn Graduate Consulting Club and Penn Biotech Group are among the most selective student consulting organizations in the country. Both work on real client engagements, not case competitions. The clients are actual biotech and healthcare companies making real decisions. I worked on two of them."
                        }, void 0, false, {
                            fileName: "[project]/components/Consulting.tsx",
                            lineNumber: 246,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Consulting.tsx",
                    lineNumber: 233,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Consulting.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "engagements-section",
                style: {
                    maxWidth: 820,
                    margin: '0 auto',
                    padding: '64px 32px 96px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                            fontWeight: 800,
                            fontSize: '1.5rem',
                            letterSpacing: '-0.03em',
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                            marginBottom: 8
                        },
                        children: "Selected engagements"
                    }, void 0, false, {
                        fileName: "[project]/components/Consulting.tsx",
                        lineNumber: 260,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                            fontSize: '0.9375rem',
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                            marginBottom: 32
                        },
                        children: "Real clients. Real problems. Real outcomes."
                    }, void 0, false, {
                        fileName: "[project]/components/Consulting.tsx",
                        lineNumber: 266,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 16
                        },
                        children: ENGAGEMENTS.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "engagement-card",
                                style: {
                                    border: '1px solid rgba(0,0,0,0.07)',
                                    borderRadius: 20,
                                    padding: '26px 28px',
                                    background: '#ffffff',
                                    transition: 'box-shadow 240ms, transform 240ms'
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.08)';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.transform = 'none';
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-start',
                                            marginBottom: 8,
                                            flexWrap: 'wrap',
                                            gap: 6
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                                    fontSize: '0.5625rem',
                                                    fontWeight: 500,
                                                    letterSpacing: '0.10em',
                                                    textTransform: 'uppercase',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted
                                                },
                                                children: p.eyebrow
                                            }, void 0, false, {
                                                fileName: "[project]/components/Consulting.tsx",
                                                lineNumber: 289,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                                                    fontSize: '0.75rem',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted
                                                },
                                                children: [
                                                    p.org,
                                                    " · ",
                                                    p.role
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Consulting.tsx",
                                                lineNumber: 292,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Consulting.tsx",
                                        lineNumber: 288,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                            fontWeight: 800,
                                            fontSize: '1.0625rem',
                                            letterSpacing: '-0.02em',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                                            marginBottom: 10
                                        },
                                        children: p.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/Consulting.tsx",
                                        lineNumber: 296,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                                            fontSize: '0.9375rem',
                                            lineHeight: 1.62,
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                            marginBottom: 12
                                        },
                                        children: p.desc
                                    }, void 0, false, {
                                        fileName: "[project]/components/Consulting.tsx",
                                        lineNumber: 299,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                                            fontSize: '0.875rem',
                                            lineHeight: 1.5,
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                                            padding: '10px 14px',
                                            background: 'rgba(36,24,19,0.04)',
                                            borderRadius: 10,
                                            marginBottom: 14
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                                    fontSize: '0.5625rem',
                                                    letterSpacing: '0.10em',
                                                    textTransform: 'uppercase',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted
                                                },
                                                children: [
                                                    "Outcome ·",
                                                    ' '
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Consulting.tsx",
                                                lineNumber: 306,
                                                columnNumber: 17
                                            }, this),
                                            p.outcome
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Consulting.tsx",
                                        lineNumber: 302,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: 6,
                                            flexWrap: 'wrap'
                                        },
                                        children: p.tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                                    fontSize: '0.5625rem',
                                                    fontWeight: 500,
                                                    letterSpacing: '0.08em',
                                                    textTransform: 'uppercase',
                                                    padding: '3px 8px',
                                                    background: 'rgba(36,24,19,0.06)',
                                                    borderRadius: 6,
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted
                                                },
                                                children: t
                                            }, t, false, {
                                                fileName: "[project]/components/Consulting.tsx",
                                                lineNumber: 313,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Consulting.tsx",
                                        lineNumber: 311,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/components/Consulting.tsx",
                                lineNumber: 271,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Consulting.tsx",
                        lineNumber: 269,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Consulting.tsx",
                lineNumber: 259,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Consulting.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/Computational.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Computational)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tokens.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const GREEN = '#4ade80';
const DIM_GREEN = 'rgba(74,222,128,0.45)';
const BG = '#0c0e0c';
const BORDER = 'rgba(74,222,128,0.13)';
const PROJECTS = [
    {
        name: 'nk-cytotox-predictor',
        lang: 'Python · scikit-learn',
        desc: 'AI-based predictive model for NK cell cytotoxicity across feeder cell configurations (ICAM-1, CD58, 41BBL, aCD56) and tumor targets (Raji, U251). Trained on experimental cytotoxicity data from the Carl June Lab; uses ANOVA and paired t-tests on the underlying expansion/cytotoxicity dataset to flag combinations worth running in the wet lab.',
        status: 'complete',
        tags: [
            'Python',
            'scikit-learn',
            'NK cells',
            'ML',
            'Cell therapy'
        ]
    },
    {
        name: 'flow-panel-builder',
        lang: 'Python',
        desc: 'A side project keeping my coding muscle warm: a flow cytometry panel builder for spectral and conventional cytometers. Pulls fluorochrome spectra, scores spillover, and suggests antibody-fluor pairings given the panel context. Built partly to make my own Stanford panel design faster, partly as a sanity check that I can still ship clean Python without copilots.',
        status: 'active',
        tags: [
            'Python',
            'Flow Cytometry',
            'Spectral',
            'CLI'
        ]
    }
];
const SKILLS = [
    {
        cat: 'Languages',
        items: [
            'Python',
            'Bash',
            'Basic R'
        ]
    },
    {
        cat: 'Data / Stats',
        items: [
            'Design of Experiments',
            'JMP',
            'GraphPad Prism',
            'Pandas',
            'numpy'
        ]
    },
    {
        cat: 'Flow tooling',
        items: [
            'FlowJo',
            'FCS Express',
            'SpectroFlo'
        ]
    },
    {
        cat: 'Lab software',
        items: [
            'SnapGene',
            'EPIC',
            'ELN (Benchling)',
            'Buffer Maker',
            'PyMOL',
            'AutoDock Vina'
        ]
    }
];
const FULL_TEXT = 'anu@stanford:~$ ls projects/';
function Computational() {
    const [typed, setTyped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [blink, setBlink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scanlineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const terminalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Typewriter effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let i = 0;
        const timer = setInterval(()=>{
            if (i <= FULL_TEXT.length) {
                setTyped(FULL_TEXT.slice(0, i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 52);
        return ()=>clearInterval(timer);
    }, []);
    // Cursor blink
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setInterval(()=>setBlink((b)=>!b), 530);
        return ()=>clearInterval(timer);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"])(()=>{
        // Terminal window slides up
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from(terminalRef.current, {
            opacity: 0,
            y: 30,
            duration: 0.7,
            ease: 'power3.out',
            delay: 0.1
        });
        // Scanline with GSAP (smooth, controllable)
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(scanlineRef.current, {
            yPercent: 500,
            duration: 3.5,
            ease: 'none',
            repeat: -1,
            repeatDelay: 0.8
        });
        // Headline words
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from('.comp-eyebrow', {
            opacity: 0,
            y: 12,
            duration: 0.5,
            delay: 0.4
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from('.comp-title-word', {
            yPercent: 110,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power4.out',
            delay: 0.5
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from('.comp-bio', {
            opacity: 0,
            y: 20,
            duration: 0.55,
            delay: 0.85
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from('.comp-gh-link', {
            opacity: 0,
            y: 12,
            duration: 0.45,
            delay: 1.0
        });
        // Project cards ScrollTrigger
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from('.project-card', {
            opacity: 0,
            y: 28,
            stagger: 0.14,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.projects-section',
                start: 'top 82%'
            }
        });
        // Skill categories stagger
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from('.skill-cat', {
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.5,
            scrollTrigger: {
                trigger: '.skills-section',
                start: 'top 82%'
            }
        });
    }, {
        scope: containerRef
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        style: {
            background: BG,
            minHeight: '100vh',
            color: GREEN,
            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1280,
                    margin: '0 auto',
                    padding: '64px 28px 40px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: terminalRef,
                    style: {
                        background: '#090b09',
                        border: `1px solid ${BORDER}`,
                        borderRadius: 14,
                        padding: '20px 24px',
                        fontSize: '0.875rem',
                        lineHeight: 1.75,
                        position: 'relative',
                        overflow: 'hidden'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: scanlineRef,
                            style: {
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '2px',
                                background: 'rgba(74,222,128,0.08)',
                                pointerEvents: 'none'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/Computational.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: 7,
                                marginBottom: 16,
                                alignItems: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 12,
                                        height: 12,
                                        borderRadius: '50%',
                                        background: '#ff5f57'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/Computational.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 12,
                                        height: 12,
                                        borderRadius: '50%',
                                        background: '#febc2e'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/Computational.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 12,
                                        height: 12,
                                        borderRadius: '50%',
                                        background: '#28c840'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/Computational.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        marginLeft: 10,
                                        fontSize: '0.6875rem',
                                        color: DIM_GREEN
                                    },
                                    children: "anu — bash — 100×24"
                                }, void 0, false, {
                                    fileName: "[project]/components/Computational.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Computational.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                color: DIM_GREEN
                            },
                            children: "Last login: Mon May  4 09:14:02 on ttys001"
                        }, void 0, false, {
                            fileName: "[project]/components/Computational.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: 4
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: GREEN
                                    },
                                    children: typed
                                }, void 0, false, {
                                    fileName: "[project]/components/Computational.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        opacity: blink ? 1 : 0,
                                        borderLeft: `2px solid ${GREEN}`,
                                        marginLeft: 1,
                                        transition: 'opacity 100ms'
                                    },
                                    children: " "
                                }, void 0, false, {
                                    fileName: "[project]/components/Computational.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Computational.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: 8,
                                color: DIM_GREEN
                            },
                            children: 'nk-cytotox-predictor/    flow-panel-builder/'
                        }, void 0, false, {
                            fileName: "[project]/components/Computational.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                color: DIM_GREEN,
                                marginTop: 4
                            },
                            children: [
                                "anu@stanford:~$",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        opacity: blink ? 1 : 0,
                                        borderLeft: `2px solid ${GREEN}`,
                                        marginLeft: 4
                                    },
                                    children: " "
                                }, void 0, false, {
                                    fileName: "[project]/components/Computational.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Computational.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Computational.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Computational.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1280,
                    margin: '0 auto',
                    padding: '0 28px 52px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "comp-eyebrow",
                        style: {
                            fontSize: '0.5625rem',
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase',
                            color: DIM_GREEN,
                            marginBottom: 14
                        },
                        children: "// computational work"
                    }, void 0, false, {
                        fileName: "[project]/components/Computational.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                            fontWeight: 800,
                            fontSize: 'clamp(2rem,4vw,3rem)',
                            letterSpacing: '-0.04em',
                            color: '#fffaf2',
                            lineHeight: 1.04,
                            marginBottom: 16
                        },
                        children: [
                            "Code that decodes",
                            'biology.'
                        ].map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    overflow: 'hidden'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "comp-title-word",
                                    children: line
                                }, void 0, false, {
                                    fileName: "[project]/components/Computational.tsx",
                                    lineNumber: 183,
                                    columnNumber: 15
                                }, this)
                            }, i, false, {
                                fileName: "[project]/components/Computational.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Computational.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "comp-bio",
                        style: {
                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                            fontSize: '1rem',
                            lineHeight: 1.65,
                            color: 'rgba(255,250,242,0.5)',
                            maxWidth: '54ch',
                            marginBottom: 24
                        },
                        children: "I'm a wet-lab biologist first, but the day I stopped fighting Python is the day my experiments got better. These are the tools I've built to make my own work faster, and the data work I've layered on top of cell therapy and process development projects."
                    }, void 0, false, {
                        fileName: "[project]/components/Computational.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "comp-gh-link",
                        href: "https://github.com/saya-gsan",
                        target: "_blank",
                        rel: "noopener",
                        style: {
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 8,
                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                            fontWeight: 700,
                            fontSize: '0.875rem',
                            padding: '10px 18px',
                            borderRadius: 10,
                            border: `1px solid ${BORDER}`,
                            color: GREEN,
                            textDecoration: 'none',
                            background: 'rgba(74,222,128,0.05)',
                            transition: 'background 160ms, border-color 160ms'
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.background = 'rgba(74,222,128,0.10)';
                            e.currentTarget.style.borderColor = 'rgba(74,222,128,0.28)';
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.background = 'rgba(74,222,128,0.05)';
                            e.currentTarget.style.borderColor = BORDER;
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"
                                }, void 0, false, {
                                    fileName: "[project]/components/Computational.tsx",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Computational.tsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, this),
                            "View on GitHub"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Computational.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Computational.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "projects-section",
                style: {
                    maxWidth: 1280,
                    margin: '0 auto',
                    padding: '0 28px 52px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '0.5625rem',
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: DIM_GREEN,
                            marginBottom: 18
                        },
                        children: "// personal projects · built independently"
                    }, void 0, false, {
                        fileName: "[project]/components/Computational.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 14
                        },
                        children: PROJECTS.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "project-card term-card",
                                style: {
                                    border: `1px solid ${BORDER}`,
                                    borderRadius: 14,
                                    padding: '22px 24px',
                                    cursor: 'pointer'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-start',
                                            marginBottom: 10,
                                            flexWrap: 'wrap',
                                            gap: 8
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 12
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: '1rem',
                                                            fontWeight: 500,
                                                            color: GREEN
                                                        },
                                                        children: p.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Computational.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: '0.5625rem',
                                                            padding: '2px 8px',
                                                            borderRadius: 4,
                                                            border: `1px solid ${p.status === 'active' ? 'rgba(74,222,128,0.3)' : BORDER}`,
                                                            color: p.status === 'active' ? GREEN : DIM_GREEN,
                                                            letterSpacing: '0.1em',
                                                            textTransform: 'uppercase'
                                                        },
                                                        children: p.status === 'active' ? '● in progress' : '✓ shipped'
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Computational.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Computational.tsx",
                                                lineNumber: 239,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: '0.6875rem',
                                                    color: DIM_GREEN
                                                },
                                                children: p.lang
                                            }, void 0, false, {
                                                fileName: "[project]/components/Computational.tsx",
                                                lineNumber: 250,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Computational.tsx",
                                        lineNumber: 238,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                                            fontSize: '0.9375rem',
                                            lineHeight: 1.6,
                                            color: 'rgba(255,250,242,0.55)',
                                            marginBottom: 14
                                        },
                                        children: p.desc
                                    }, void 0, false, {
                                        fileName: "[project]/components/Computational.tsx",
                                        lineNumber: 252,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: 6,
                                            flexWrap: 'wrap'
                                        },
                                        children: p.tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: '0.5625rem',
                                                    padding: '2px 8px',
                                                    borderRadius: 4,
                                                    border: `1px solid ${BORDER}`,
                                                    color: DIM_GREEN,
                                                    letterSpacing: '0.08em',
                                                    textTransform: 'uppercase'
                                                },
                                                children: t
                                            }, t, false, {
                                                fileName: "[project]/components/Computational.tsx",
                                                lineNumber: 257,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Computational.tsx",
                                        lineNumber: 255,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/components/Computational.tsx",
                                lineNumber: 233,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Computational.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Computational.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "skills-section",
                style: {
                    maxWidth: 1280,
                    margin: '0 auto',
                    padding: '0 28px 80px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '0.5625rem',
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: DIM_GREEN,
                            marginBottom: 20
                        },
                        children: "// skill stack"
                    }, void 0, false, {
                        fileName: "[project]/components/Computational.tsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "skill-grid",
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: 28
                        },
                        children: SKILLS.map(({ cat, items })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "skill-cat",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '0.5625rem',
                                            letterSpacing: '0.1em',
                                            textTransform: 'uppercase',
                                            color: DIM_GREEN,
                                            marginBottom: 12
                                        },
                                        children: cat
                                    }, void 0, false, {
                                        fileName: "[project]/components/Computational.tsx",
                                        lineNumber: 280,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 6
                                        },
                                        children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 8
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: '#4ade8066',
                                                            fontSize: '0.6875rem'
                                                        },
                                                        children: "›"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Computational.tsx",
                                                        lineNumber: 286,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                                                            fontSize: '0.875rem',
                                                            color: 'rgba(255,250,242,0.75)'
                                                        },
                                                        children: item
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Computational.tsx",
                                                        lineNumber: 287,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, item, true, {
                                                fileName: "[project]/components/Computational.tsx",
                                                lineNumber: 285,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Computational.tsx",
                                        lineNumber: 283,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, cat, true, {
                                fileName: "[project]/components/Computational.tsx",
                                lineNumber: 279,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Computational.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Computational.tsx",
                lineNumber: 270,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Computational.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/Blog.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Blog)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tokens.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const TAG_META = {
    Science: {
        bg: 'rgba(212,69,31,0.08)',
        color: '#d4451f'
    },
    Career: {
        bg: 'rgba(36,24,19,0.07)',
        color: '#7a6c63'
    },
    Tutorial: {
        bg: 'rgba(255,122,46,0.10)',
        color: '#c05a10'
    },
    Personal: {
        bg: 'rgba(36,24,19,0.07)',
        color: '#7a6c63'
    }
};
const POSTS = [
    {
        eyebrow: 'SCIENCE · MAY 2026',
        title: 'Translating a research assay into the clinic: what actually changes',
        desc: 'The PrimeFlow protocol works beautifully in a research lab. Making it work in a clinical flow lab is a different sport. Notes from the trenches of the EBER Flow-FISH validation.',
        tag: 'Science',
        content: [
            {
                type: 'p',
                text: `There's a version of this story where I say I arrived at Stanford, picked up the PrimeFlow protocol, and had a validated clinical assay running within a few months. That version is cleaner. It's also not what happened.`
            },
            {
                type: 'p',
                text: `EBV, the Epstein-Barr virus, is one of the most common viruses in the world. Most people are infected by it at some point in their lives, usually without knowing. In immunocompromised patients, however, EBV can reactivate and drive the growth of EBV-infected lymphocytes, leading to serious and sometimes fatal lymphoproliferative disorders. Detecting which specific immune cells are infected, and at what level, is critical for diagnosis and treatment decisions. EBER, or EBV-encoded RNA, is the most abundantly expressed viral product in infected cells and the most reliable target for detection. The assay we're building uses flow cytometry to detect EBER at single-cell resolution, something that, until now, has only been done in research settings.`
            },
            {
                type: 'p',
                text: `The EBER Flow-FISH project was one of the first two projects I was handed when I joined the Department of Pathology. The other was the DHR oxidative burst assay for chronic granulomatous disease. Both were flow cytometry-based. Both needed to go from concept to clinical use. What I didn't fully appreciate at the time was how different "works in a research lab" and "works in a clinical lab" actually are.`
            },
            {
                type: 'p',
                text: `This is what I've learned so far.`
            },
            {
                type: 'h2',
                text: 'The instrument problem nobody warns you about'
            },
            {
                type: 'p',
                text: `The first thing that stopped the EBER project cold wasn't the protocol. It was the instrument.`
            },
            {
                type: 'p',
                text: `The goal of the assay is single-cell resolution EBV detection. We don't just want to know if EBV is present in a sample; we want to know which cell type it's on. That matters because EBV causes different cancers depending on which cell it infects. Differentiating between B cells, T cells, and NK cells in the same sample while simultaneously detecting a viral RNA signal requires differentiating between a lot of fluorescent parameters at once. A conventional flow cytometer simply doesn't have the capacity to do that cleanly.`
            },
            {
                type: 'p',
                text: `So the EBER project went on hold. We pivoted to the DHR assay, which I completed, validated, and transferred to the clinical lab, and waited for the Cytek Aurora spectral flow cytometer to arrive. I was one of three people sent to get trained on it. Spectral flow is an entirely different paradigm from conventional multicolor flow: instead of discrete bandpass filters, every detector captures the full emission spectrum of every fluorochrome, and the software mathematically unmixes overlapping signals. More parameters, cleaner resolution, steeper learning curve.`
            },
            {
                type: 'p',
                text: `Once the Aurora was set up, the EBER project had its instrument. But by then I'd learned something important: in clinical translation, the instrument is never just the instrument. It's the software, the training, the SOPs, the people who have to use it after you're done building the assay.`
            },
            {
                type: 'h2',
                text: 'Choosing the right protocol'
            },
            {
                type: 'p',
                text: `Before we even got to panel design, we had a decision to make: which RNA detection platform to use.`
            },
            {
                type: 'p',
                text: `Flow-FISH for EBV detection relies on signal amplification. The virus is present at low copy numbers, so you need a method that can boost the signal enough to reliably detect it above background. We evaluated two protocols and narrowed it down to ThermoFisher's PrimeFlow assay. The reasons were practical: shorter hands-on time, clearer manufacturer documentation, better technical support, and signal characteristics consistent with published EBV detection literature. The competing protocol wasn't worse in principle. It just had more friction, and friction in a clinical workflow compounds quickly when you're processing patient samples on a schedule.`
            },
            {
                type: 'p',
                text: `This is one of the first things that changes when you move from research to clinic: you optimize for robustness and reproducibility, not just performance. A protocol that gives you a slightly better signal but takes an extra four hours and has three ambiguous steps is the wrong choice in a diagnostic setting.`
            },
            {
                type: 'h2',
                text: 'Panel design as a constraint problem'
            },
            {
                type: 'p',
                text: `With the platform chosen, the next challenge was the antibody panel.`
            },
            {
                type: 'p',
                text: `The EBER Flow-FISH panel needs to do several things simultaneously: detect EBV RNA signal, gate B cells, T cells, and NK cells, assess B cell clonality via kappa and lambda light chains, and evaluate T cell clonality via TRBC. On a spectral cytometer, every fluorochrome you add interacts with every other one. The unmixing algorithm handles it, but your choices still constrain each other. Bright fluorochromes need to go on dim markers. Tandem dyes are unstable under the PrimeFlow fixation conditions. Some antibody clones don't survive the protocol chemistry.`
            },
            {
                type: 'p',
                text: `We worked through several panel iterations, running test stains to check signal-to-noise on each marker before committing. This is slow, iterative work. But getting it wrong means your downstream gating is unreliable, and an unreliable gate in a diagnostic context means a patient gets a wrong or delayed result. The stakes make you careful.`
            },
            {
                type: 'h2',
                text: 'The analysis wall'
            },
            {
                type: 'p',
                text: `Here's where I'll be honest about where the project currently stands: the assay is running, the biology is working, the panel is close to finalized, and I have hit a wall on the analysis side.`
            },
            {
                type: 'p',
                text: `Spectral data analysis is fundamentally different from conventional flow analysis. The standard tool we use here for clinical reporting is FCS Express, solid software, widely used in clinical labs, and it does support spectral data import and unmixing. But setting up the spectral unmixing pipeline in FCS Express for a new assay on a new instrument, in a lab where nobody has done it before, with limited documentation and no institutional precedent, is its own project.`
            },
            {
                type: 'p',
                text: `I've been working around it, analyzing data the conventional way, which is good enough to finalize the antibody panel and confirm that our EBV detection signal is consistent with validated reference assays. But it's not the clinical-grade analysis pipeline we need for validation. I've reached out to FCS Express support. I'm working through it. This is, genuinely, uncharted territory for this lab.`
            },
            {
                type: 'p',
                text: `What I've come to appreciate is that this is exactly what clinical translation looks like. It's not a linear path from protocol to validation. It's a sequence of problems you couldn't fully anticipate, each requiring you to either find the answer or become the person who figures it out for the first time.`
            },
            {
                type: 'h2',
                text: 'What comes next'
            },
            {
                type: 'p',
                text: `Once the analysis pipeline is resolved, the immediate next step is protocol optimization. PrimeFlow is a two-day protocol, workable for research but a real constraint in a clinical lab where samples arrive continuously and turnaround time matters. I'll be testing whether incubation times can be compressed without sacrificing signal quality, and if not, identifying appropriate stopping points so samples collected across multiple days can be batched and run together.`
            },
            {
                type: 'p',
                text: `After that, the validation pipeline mirrors what we did for the DHR assay: analytical validation, pre-analytical studies to establish specimen stability and acceptable collection conditions, cross-correlation with the existing diagnostic standard, and enough evidence to satisfy clinical lab approval requirements.`
            },
            {
                type: 'p',
                text: `The goal at the end of all of this is an assay that a clinical lab scientist can run on a Monday morning on a patient sample collected Friday, get a clean result, and report it to a care team who can act on it. Everything I'm doing right now is in service of that moment.`
            },
            {
                type: 'p',
                text: `That's what translating an assay to the clinic actually means. It's less glamorous than the science. It's more important than almost anything else.`
            }
        ]
    },
    {
        eyebrow: 'TUTORIAL · MAR 2026',
        title: 'Building a flow cytometry panel-builder in Python',
        desc: 'A walk-through of my side project: pulling fluorochrome spectra, scoring spillover, and suggesting antibody-fluor pairings. Half tutorial, half love letter to cytometry.',
        tag: 'Tutorial',
        content: [
            {
                type: 'h2',
                text: 'Why this exists'
            },
            {
                type: 'p',
                text: `While building the antibody panel for the EBER Flow-FISH project, I kept running into the same problem. There is no single resource that walks you through panel design from scratch. The information you need is scattered across instrument manuals, manufacturer application notes, forum threads, and the institutional knowledge of whoever trained you. If nobody trained you, you piece it together yourself.`
            },
            {
                type: 'p',
                text: `That's the position I was in. And as someone who believes strongly in efficient workflows, it bothered me enough to do something about it. This project started as a place to put everything I was learning in one place. It's slowly becoming something more useful than that.`
            },
            {
                type: 'h2',
                text: 'Flow cytometry is not as complicated as it seems, except when it is'
            },
            {
                type: 'p',
                text: `When I first started working with flow cytometers, the whole field felt impenetrable. I was handed instrument time and told to figure it out. The learning curve felt steep because everything seemed interconnected in ways nobody had explained to me.`
            },
            {
                type: 'p',
                text: `What I eventually realized is that most of it is actually manageable. Instrument handling, cleaning, and basic troubleshooting all come with documentation, and instrument manufacturers have entire teams of field application scientists whose job is to help you. The part that is genuinely complicated and genuinely under-resourced in terms of accessible guidance is panel design. Choosing which fluorochromes to pair with which markers, on which instrument, for which biological question, in a way that gives you clean and interpretable data.`
            },
            {
                type: 'p',
                text: `Doing this for clinical use raises the stakes considerably. In a research setting, a suboptimal panel costs you a figure. In a clinical diagnostic setting, it can cost a patient a clear result. That difference is what pushed me to start building something systematic.`
            },
            {
                type: 'h2',
                text: 'What the tool does right now'
            },
            {
                type: 'p',
                text: `The current version is straightforward. It takes an input CSV file listing fluorochromes and their assigned detector channels, checks them against a curated list of incompatible pairs and flags any conflicts with a warning.`
            },
            {
                type: 'p',
                text: `Incompatible pairs are a real and underappreciated problem in panel design. When two fluorochromes have overlapping emission spectra and you haven't accounted for it, the signal from one bleeds into the detector measuring the other. In spectral flow cytometry, the unmixing algorithm handles much of this mathematically, but it's not magic. Your starting choices still matter, and some combinations are simply too close to resolve cleanly regardless of how good your software is.`
            },
            {
                type: 'p',
                text: `The tool catches those problems before you run a single sample.`
            },
            {
                type: 'h2',
                text: "Where it's going"
            },
            {
                type: 'p',
                text: `The current version is a compatibility checker. What I'm building toward is a panel designer, something that takes your experimental requirements as input and suggests a panel rather than just evaluating one you've already built.`
            },
            {
                type: 'p',
                text: `That's a harder problem. It requires connecting to a comprehensive fluorochrome database with spectral data, understanding instrument-specific detector configurations, factoring in antigen expression levels on your target cells, and balancing all of those constraints simultaneously to propose combinations that actually work. There is software that evaluates spectral overlap for a panel you've already chosen. There isn't, to my knowledge, anything that takes your markers and your instrument and suggests the panel design itself.`
            },
            {
                type: 'p',
                text: `That might be far-fetched as a solo side project. Other people might be working on it and if you are, I'd genuinely like to connect and work on it together. But it's a problem worth solving, and it's one I'm willing to spend time on because I feel the gap every time I sit down to design a new panel.`
            },
            {
                type: 'h2',
                text: 'The broader point'
            },
            {
                type: 'p',
                text: `This project exists because I found myself doing something repetitive and error-prone and thought: there should be a better way to do this. That instinct — using the technical skills I'm building on the side to make the work I do every day faster and more reliable — is what computational biology actually means to me in practice. Not a separate discipline, but a way of thinking about the problems already in front of you.`
            },
            {
                type: 'p',
                text: `The code is on GitHub. It's a work in progress. Contributions and conversations are welcome.`
            }
        ]
    },
    {
        eyebrow: 'CAREER · JAN 2026',
        title: 'On being a wet-lab scientist who codes (a little)',
        desc: "I'm not a software engineer. But the day I stopped being scared of Python is the day my experiments got better. A short defence of being just-good-enough at the next thing over.",
        tag: 'Career',
        content: [
            {
                type: 'h2',
                text: 'How I got here'
            },
            {
                type: 'p',
                text: `I didn't come from a coding background. I came from a genuine fascination with the space between engineering and medicine — the part where biology meets design and the question shifts from "how does this work" to "how do we use this to help someone." Biotechnology was the one chapter in my high school textbook I read past the syllabus. That instinct is what eventually brought me to immunology, cell therapy, and translational research.`
            },
            {
                type: 'p',
                text: `Coding was not part of that picture for a long time.`
            },
            {
                type: 'p',
                text: `I moved through undergrad deliberately avoiding computational biology and programming classes. I watched my roommates, all data scientists, genuinely love what they were studying, and I remember thinking: that's how it's supposed to feel. My father, a longtime advocate for AI and machine learning, kept telling me it was unavoidable. I kept finding ways around it anyway.`
            },
            {
                type: 'h2',
                text: 'The thing I had to admit'
            },
            {
                type: 'p',
                text: `What I eventually had to reckon with is that I tend to disengage from things when they aren't taught to me in a way that makes sense. Physics in high school. Computer science in undergrad. Anything that felt like a wall rather than a door. I'd bounce off it and move on. For a long time I called that knowing my strengths. It wasn't. It was avoidance.`
            },
            {
                type: 'p',
                text: `The shift happened when I reframed the question. Instead of asking whether I could become a programmer, I started asking whether I could make my work better with code. Those are very different questions. The first one felt like a career change. The second one felt like a tool I was choosing not to pick up.`
            },
            {
                type: 'p',
                text: `Once I connected it to the thing that actually motivates me — which is making things easier for people working in the same space — something clicked. If I could understand this well enough to build something useful, maybe I could also make it easier for the next wet-lab scientist who felt the same wall I did.`
            },
            {
                type: 'h2',
                text: 'What changed at the bench'
            },
            {
                type: 'p',
                text: `The honest answer is: quite a bit.`
            },
            {
                type: 'p',
                text: `I started with small things. Python scripts to organize data, automate repetitive analysis steps, handle file formatting that used to take an hour by hand. Nothing impressive. But the cumulative effect was real. I started thinking about my experiments differently — not just in terms of what I was measuring but in terms of how I would handle the data afterward. That upstream thinking made me a better experimentalist.`
            },
            {
                type: 'p',
                text: `The panel-builder project came out of this directly. I was designing the EBER Flow-FISH panel and realized there was no clean, accessible resource for someone doing this from scratch. So I started building one. It started as a compatibility checker and it's still growing. That project exists because I could code just enough to make it real.`
            },
            {
                type: 'p',
                text: `The NK cell cytotoxicity predictive model at the June Lab came from the same place. I had experimental data, a question I wanted to answer, and enough Python to build something that helped me answer it. Not a production-grade machine learning pipeline. Something useful for the problem in front of me. That's the version of coding I'm defending here.`
            },
            {
                type: 'h2',
                text: 'Just-good-enough is underrated'
            },
            {
                type: 'p',
                text: `There's a version of this conversation where the conclusion is: everyone should learn to code properly. I'm not making that argument. What I'm saying is narrower and, I think, more honest.`
            },
            {
                type: 'p',
                text: `You don't need to be a software engineer to benefit from knowing how to code. You need to be good enough to automate the thing that's wasting your time, to build the tool that doesn't exist yet, to understand what a collaborator is doing when they hand you a script and ask if the logic makes sense. That level of fluency is achievable for most people and it compounds quietly over time.`
            },
            {
                type: 'p',
                text: `I'm still learning. Python, some R, enough machine learning to be dangerous in a useful way. Every small thing I build — including this website — makes the next thing feel more possible. The learning curve is real and I'm still on it. But when I look at what even basic computational fluency has done for the quality of my work and my thinking, I have no patience anymore for the idea that wet-lab scientists and computation live in separate worlds.`
            },
            {
                type: 'p',
                text: `They don't. And the scientists who figure that out early have a meaningful edge.`
            }
        ]
    },
    {
        eyebrow: 'PERSONAL · APR 2026',
        title: 'Somewhere new, every time',
        desc: 'Vellore, Philadelphia, Boston, the Bay. Every move comes with a small commitment to figure out the place, the people, and yourself. A few things that stuck.',
        tag: 'Personal',
        content: [
            {
                type: 'h2',
                text: 'The decision'
            },
            {
                type: 'p',
                text: `I came to the United States in 2023 to start my masters at Penn. I had never lived alone before. I had never managed my own finances, cooked consistently for myself, or navigated the particular loneliness of being new somewhere without a ready-made community around me. I knew one person in Philadelphia: a friend from undergrad who had made the same move. That single thread of continuity made everything else feel possible.`
            },
            {
                type: 'p',
                text: `I picked up a part-time job as a research assistant early on. Not just for the money, though that mattered, but because having somewhere to be and something to contribute settled something in me. I learned to budget, to prioritize, to make peace with the gap between what I could afford and what I wanted. These are ordinary adult lessons. Learning them in a different country, without the safety net of home, makes them stick differently.`
            },
            {
                type: 'img',
                src: '/images/philly.jpg',
                caption: 'Philadelphia · 2023 — 2025'
            },
            {
                type: 'h2',
                text: 'Boston'
            },
            {
                type: 'p',
                text: `The co-op at Moderna meant moving to Boston for six months. My friend and I drove up together, stopped in New York for a few hours, walked through Central Park, found good pastries, and kept going.`
            },
            {
                type: 'p',
                text: `Boston changed me in ways I'm still accounting for. It's a city that takes itself seriously in the best way. I made new friends through the co-op program, people from completely different fields and backgrounds who I wouldn't have met any other way. I explored the city properly. The neighborhoods, the food, the waterfronts, the strange charm of a place that feels simultaneously historic and alive. I fell in love with it. Coming back to Philadelphia to finish my degree felt like leaving something behind.`
            },
            {
                type: 'img',
                src: '/images/boston.jpg',
                caption: 'Boston · 2024'
            },
            {
                type: 'h2',
                text: 'The gap'
            },
            {
                type: 'p',
                text: `Graduating is supposed to feel like an arrival. In some ways it did. My family flew in and we spent weeks traveling together around the country, cities I'd been meaning to show them since I arrived. Watching my parents experience it all with me was its own kind of gift.`
            },
            {
                type: 'p',
                text: `But the months that followed were hard. Visa timelines, job uncertainty, the particular stress of not knowing where the next chapter would be or when it would start. I drove from Miami to Orlando to live with family for a stretch, and found something unexpected: a slower pace, genuine warmth, a different way of organizing a life. It reminded me that there are many ways to be okay.`
            },
            {
                type: 'img',
                src: '/images/grad.jpg',
                caption: 'The gap · 2025'
            },
            {
                type: 'h2',
                text: 'California'
            },
            {
                type: 'p',
                text: `Moving to the Bay felt like the beginning of something more settled. I've taken road trips, done more hiking than any previous version of myself would have predicted, and made a deliberate effort to build a life here rather than just live in one. Healthier habits, better routines, a small but solid group of people who know me well.`
            },
            {
                type: 'p',
                text: `The Bay is different from the East Coast in ways that are hard to articulate until you've lived in both. The weather helps. So does the energy. The people here are active, outdoorsy, always moving toward something. Adapting to that has been one of the more enjoyable parts of being here.`
            },
            {
                type: 'p',
                text: `I already had a group of friends from Penn when I arrived, which made the transition feel less like starting over and more like continuing something. We've built small rituals, weekend trips, hikes, ranking coffee shops across San Jose, late night walks that go longer than planned. The kind of low-stakes consistency that turns a group of people into something that feels like family. We show up for each other through the harder stretches too, and that matters more than any of the fun stuff.`
            },
            {
                type: 'p',
                text: `What I didn't expect was how much I'd learn from them. Everyone here is working on something different. None of them are in the life sciences, which means every conversation opens a window into a world I'd otherwise know nothing about. Being around people who are genuinely motivated, each in their own direction, has quietly raised the bar for what I expect from myself.`
            },
            {
                type: 'img',
                src: '/images/cali.jpg',
                caption: 'California · 2025 —'
            },
            {
                type: 'h2',
                text: "What I'd say about all of it"
            },
            {
                type: 'p',
                text: `I was thrown into adulthood in a foreign country at twenty-two and had to figure out most of it as I went. Some lessons came easily. Others came the hard way. I wouldn't undo any of it.`
            },
            {
                type: 'p',
                text: `The cities taught me things. The work taught me things. But mostly it was the people. The ones who showed up consistently, who picked up the phone, who made unfamiliar places feel like somewhere you could belong. To my parents, who made this possible and trusted me with it: thank you. To the people who became family along the way: you made all of it worth it, and I hope you know that.`
            }
        ]
    }
];
const ALL_TAGS = [
    'All',
    ...Object.keys(TAG_META)
];
function Blog() {
    const [activeTag, setActiveTag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('All');
    const [hovPost, setHovPost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [openPost, setOpenPost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const postListRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const filteredWithIdx = POSTS.map((p, idx)=>({
            ...p,
            idx
        })).filter((p)=>activeTag === 'All' || p.tag === activeTag);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"])(()=>{
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
            defaults: {
                ease: 'power3.out'
            }
        });
        tl.from('.blog-eyebrow', {
            opacity: 0,
            y: 12,
            duration: 0.5
        }, 0.1);
        tl.from('.blog-title-word', {
            yPercent: 110,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power4.out'
        }, 0.2);
        tl.from('.blog-desc', {
            opacity: 0,
            y: 18,
            duration: 0.5
        }, 0.55);
        // Slide in without opacity-0 so buttons are never invisible
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from('.filter-pill', {
            x: -14,
            stagger: 0.07,
            duration: 0.45,
            ease: 'power3.out',
            delay: 0.5
        });
    }, {
        scope: containerRef
    });
    const handleTagChange = (tag)=>{
        if (tag !== activeTag) setActiveTag(tag);
    };
    const handleOpenPost = (idx)=>{
        setOpenPost(idx);
        window.scrollTo(0, 0);
    };
    const handleClosePost = ()=>{
        setOpenPost(null);
        window.scrollTo(0, 0);
    };
    const post = openPost !== null ? POSTS[openPost] : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        style: {
            background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].canvas,
            minHeight: '100vh'
        },
        children: post !== null ? /* ── Post view: in-flow document scroll, no fixed overlay ─────────── */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: 680,
                margin: '0 auto',
                padding: '40px 32px 100px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleClosePost,
                    style: {
                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                        fontWeight: 700,
                        fontSize: '0.875rem',
                        padding: '8px 0',
                        border: 'none',
                        background: 'transparent',
                        cursor: 'pointer',
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        marginBottom: 48,
                        transition: 'color 160ms'
                    },
                    onMouseEnter: (e)=>{
                        e.currentTarget.style.color = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink;
                    },
                    onMouseLeave: (e)=>{
                        e.currentTarget.style.color = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted;
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "13",
                            height: "13",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M19 12H5M12 5l-7 7 7 7"
                            }, void 0, false, {
                                fileName: "[project]/components/Blog.tsx",
                                lineNumber: 216,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Blog.tsx",
                            lineNumber: 215,
                            columnNumber: 15
                        }, this),
                        "Back to writing"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Blog.tsx",
                    lineNumber: 203,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: 40
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: 10,
                                marginBottom: 16
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                        fontSize: '0.5625rem',
                                        fontWeight: 500,
                                        letterSpacing: '0.12em',
                                        textTransform: 'uppercase',
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted
                                    },
                                    children: post.eyebrow
                                }, void 0, false, {
                                    fileName: "[project]/components/Blog.tsx",
                                    lineNumber: 224,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                                        fontWeight: 600,
                                        fontSize: '0.6875rem',
                                        padding: '2px 9px',
                                        borderRadius: 9999,
                                        ...TAG_META[post.tag]
                                    },
                                    children: post.tag
                                }, void 0, false, {
                                    fileName: "[project]/components/Blog.tsx",
                                    lineNumber: 230,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Blog.tsx",
                            lineNumber: 223,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            style: {
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                fontWeight: 800,
                                fontSize: 'clamp(1.75rem,3.5vw,2.375rem)',
                                letterSpacing: '-0.04em',
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                                lineHeight: 1.1,
                                marginBottom: 16
                            },
                            children: post.title
                        }, void 0, false, {
                            fileName: "[project]/components/Blog.tsx",
                            lineNumber: 238,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                                fontSize: '1.125rem',
                                lineHeight: 1.6,
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                marginBottom: 0
                            },
                            children: post.desc
                        }, void 0, false, {
                            fileName: "[project]/components/Blog.tsx",
                            lineNumber: 247,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Blog.tsx",
                    lineNumber: 222,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        height: 1,
                        background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].divider,
                        marginBottom: 40
                    }
                }, void 0, false, {
                    fileName: "[project]/components/Blog.tsx",
                    lineNumber: 255,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: post.content.map((block, i)=>{
                        if (block.type === 'h2') {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                    fontWeight: 800,
                                    fontSize: '1.1875rem',
                                    letterSpacing: '-0.025em',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                                    marginTop: 40,
                                    marginBottom: 14
                                },
                                children: block.text
                            }, i, false, {
                                fileName: "[project]/components/Blog.tsx",
                                lineNumber: 262,
                                columnNumber: 21
                            }, this);
                        }
                        if (block.type === 'p') {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                                    fontSize: '1.0625rem',
                                    lineHeight: 1.72,
                                    color: '#4a3f38',
                                    marginBottom: 20
                                },
                                children: block.text
                            }, i, false, {
                                fileName: "[project]/components/Blog.tsx",
                                lineNumber: 273,
                                columnNumber: 21
                            }, this);
                        }
                        if (block.type === 'img') {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    margin: '36px 0'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: block.src,
                                        alt: block.caption,
                                        style: {
                                            width: '100%',
                                            borderRadius: 8,
                                            display: 'block'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/Blog.tsx",
                                        lineNumber: 286,
                                        columnNumber: 23
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                            fontSize: '0.6875rem',
                                            letterSpacing: '0.06em',
                                            color: '#888',
                                            textAlign: 'center',
                                            marginTop: 10,
                                            marginBottom: 0
                                        },
                                        children: block.caption
                                    }, void 0, false, {
                                        fileName: "[project]/components/Blog.tsx",
                                        lineNumber: 291,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/components/Blog.tsx",
                                lineNumber: 284,
                                columnNumber: 21
                            }, this);
                        }
                        return null;
                    })
                }, void 0, false, {
                    fileName: "[project]/components/Blog.tsx",
                    lineNumber: 258,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Blog.tsx",
            lineNumber: 200,
            columnNumber: 9
        }, this) : /* ── List view ────────────────────────────────────────────────────────── */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: 800,
                        margin: '0 auto',
                        padding: '80px 32px 52px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "blog-eyebrow",
                            style: {
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                fontSize: '0.6875rem',
                                fontWeight: 500,
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                marginBottom: 18
                            },
                            children: "Writing"
                        }, void 0, false, {
                            fileName: "[project]/components/Blog.tsx",
                            lineNumber: 310,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                fontWeight: 800,
                                fontSize: 'clamp(2.25rem,4vw,3.25rem)',
                                lineHeight: 1.03,
                                letterSpacing: '-0.04em',
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                                marginBottom: 18
                            },
                            children: [
                                'Things I',
                                'think about.'
                            ].map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        overflow: 'hidden'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "blog-title-word",
                                        children: line
                                    }, void 0, false, {
                                        fileName: "[project]/components/Blog.tsx",
                                        lineNumber: 323,
                                        columnNumber: 19
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/components/Blog.tsx",
                                    lineNumber: 322,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Blog.tsx",
                            lineNumber: 316,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "blog-desc",
                            style: {
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                                fontSize: '1.0625rem',
                                lineHeight: 1.65,
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted
                            },
                            children: "Science, career, computation, and occasionally things that have nothing to do with any of that."
                        }, void 0, false, {
                            fileName: "[project]/components/Blog.tsx",
                            lineNumber: 327,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Blog.tsx",
                    lineNumber: 309,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "filter-row",
                    style: {
                        maxWidth: 800,
                        margin: '0 auto',
                        padding: '0 32px 32px'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 8,
                            flexWrap: 'wrap'
                        },
                        children: ALL_TAGS.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "filter-pill",
                                onClick: ()=>handleTagChange(t),
                                style: {
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                    fontWeight: 700,
                                    fontSize: '0.8125rem',
                                    padding: '6px 16px',
                                    borderRadius: 9999,
                                    cursor: 'pointer',
                                    transition: 'all 160ms',
                                    opacity: 1,
                                    background: activeTag === t ? '#241813' : 'transparent',
                                    color: activeTag === t ? '#ffffff' : '#241813',
                                    border: activeTag === t ? 'none' : '1px solid #241813'
                                },
                                children: t
                            }, t, false, {
                                fileName: "[project]/components/Blog.tsx",
                                lineNumber: 338,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Blog.tsx",
                        lineNumber: 336,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Blog.tsx",
                    lineNumber: 335,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: 800,
                        margin: '0 auto',
                        padding: '0 32px'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            height: 1,
                            background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].divider
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/Blog.tsx",
                        lineNumber: 360,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Blog.tsx",
                    lineNumber: 359,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: postListRef,
                    style: {
                        maxWidth: 800,
                        margin: '0 auto',
                        padding: '0 32px 96px'
                    },
                    children: filteredWithIdx.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "post-item",
                            onClick: ()=>handleOpenPost(p.idx),
                            onMouseEnter: ()=>setHovPost(p.idx),
                            onMouseLeave: ()=>setHovPost(null),
                            style: {
                                padding: '32px 0',
                                borderBottom: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].divider}`,
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 10
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        gap: 12
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                                fontSize: '0.5625rem',
                                                fontWeight: 500,
                                                letterSpacing: '0.12em',
                                                textTransform: 'uppercase',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted
                                            },
                                            children: p.eyebrow
                                        }, void 0, false, {
                                            fileName: "[project]/components/Blog.tsx",
                                            lineNumber: 382,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                                                fontWeight: 600,
                                                fontSize: '0.6875rem',
                                                padding: '2px 9px',
                                                borderRadius: 9999,
                                                flexShrink: 0,
                                                ...TAG_META[p.tag]
                                            },
                                            children: p.tag
                                        }, void 0, false, {
                                            fileName: "[project]/components/Blog.tsx",
                                            lineNumber: 388,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Blog.tsx",
                                    lineNumber: 381,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                        fontWeight: 800,
                                        fontSize: 'clamp(1.1rem,2vw,1.3rem)',
                                        letterSpacing: '-0.025em',
                                        color: hovPost === p.idx ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ember : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                                        lineHeight: 1.2,
                                        transition: 'color 160ms'
                                    },
                                    children: p.title
                                }, void 0, false, {
                                    fileName: "[project]/components/Blog.tsx",
                                    lineNumber: 397,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                                        fontSize: '0.9375rem',
                                        lineHeight: 1.6,
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                        maxWidth: '60ch'
                                    },
                                    children: p.desc
                                }, void 0, false, {
                                    fileName: "[project]/components/Blog.tsx",
                                    lineNumber: 407,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 5,
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ember,
                                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                        fontWeight: 700,
                                        fontSize: '0.875rem',
                                        marginTop: 2,
                                        opacity: hovPost === p.idx ? 1 : 0,
                                        transition: 'opacity 160ms'
                                    },
                                    children: [
                                        "Read more",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            style: {
                                                transform: hovPost === p.idx ? 'translateX(3px)' : 'none',
                                                transition: 'transform 200ms ease'
                                            },
                                            width: "13",
                                            height: "13",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M5 12h14M12 5l7 7-7 7"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Blog.tsx",
                                                lineNumber: 427,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Blog.tsx",
                                            lineNumber: 422,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Blog.tsx",
                                    lineNumber: 414,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, p.idx, true, {
                            fileName: "[project]/components/Blog.tsx",
                            lineNumber: 366,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Blog.tsx",
                    lineNumber: 364,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/components/Blog.tsx",
        lineNumber: 196,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/App.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>App)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Nav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Nav.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Landing$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Landing.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CoreField$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CoreField.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Consulting$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Consulting.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Computational$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Computational.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Blog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Blog.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
const TITLES = {
    home: 'Anu Srinivasan',
    core: 'Core Field — Anu Srinivasan',
    consulting: 'Consulting — Anu Srinivasan',
    computational: 'Comp Work — Anu Srinivasan',
    blog: 'Blog — Anu Srinivasan'
};
function App() {
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('home');
    const mainRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleTabChange = (newTab)=>{
        if (newTab === tab) return;
        const main = mainRef.current;
        if (!main) {
            setTab(newTab);
            window.scrollTo(0, 0);
            return;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(main, {
            opacity: 0,
            y: -10,
            duration: 0.18,
            ease: 'power2.in',
            onComplete: ()=>{
                setTab(newTab);
                window.scrollTo(0, 0);
                requestAnimationFrame(()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(main, {
                        opacity: 0,
                        y: 16
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 0.4,
                        ease: 'power3.out'
                    });
                });
            }
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.title = TITLES[tab];
    }, [
        tab
    ]);
    const pages = {
        home: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Landing$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            onTabChange: handleTabChange
        }, void 0, false, {
            fileName: "[project]/components/App.tsx",
            lineNumber: 59,
            columnNumber: 20
        }, this),
        core: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CoreField$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/components/App.tsx",
            lineNumber: 60,
            columnNumber: 20
        }, this),
        consulting: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Consulting$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/components/App.tsx",
            lineNumber: 61,
            columnNumber: 20
        }, this),
        computational: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Computational$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/components/App.tsx",
            lineNumber: 62,
            columnNumber: 20
        }, this),
        blog: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Blog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/components/App.tsx",
            lineNumber: 63,
            columnNumber: 20
        }, this)
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Nav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                activeTab: tab,
                onTabChange: handleTabChange
            }, void 0, false, {
                fileName: "[project]/components/App.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                ref: mainRef,
                children: pages[tab]
            }, void 0, false, {
                fileName: "[project]/components/App.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onTabChange: handleTabChange
            }, void 0, false, {
                fileName: "[project]/components/App.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),

};

//# sourceMappingURL=_302187f2._.js.map